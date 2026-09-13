import { test, expect, type Page } from '@playwright/test';

const pages = ['/', '/portfolio', '/capabilities', '/company', '/applications', '/start', '/portfolio/bewingo-india', '/portfolio/muzari', '/portfolio/wafy-sports', '/portfolio/pg-campus'];

test('every marketing route renders with a heading and no broken images', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const path of pages) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeVisible();
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    }
  }
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1366, 1920, 3440]) {
  test(`layouts fit the viewport at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/portfolio', '/capabilities', '/company', '/applications', '/start']) {
      await page.goto(path);
      const overflow = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
      expect(overflow.scroll, path).toBeLessThanOrEqual(overflow.width + 1);
    }
  });
}

test('mobile navigation closes with Escape and navigates to capabilities', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await menu.click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Capabilities' }).click();
  await expect(page).toHaveURL(/\/capabilities$/);
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0);
});

test('theme persists on navigation and reload', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Switch colour theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Company' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor)).toBe('rgb(9, 27, 21)');
});

test('home stays readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:3100');
  await expect(page.getByRole('heading', { name: 'Anyone can generate. We make it worth shipping.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Start a project', exact: true }).first()).toBeVisible();
  await context.close();
});

test('homepage release story and service selector communicate the conversion journey', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('.navigation-wordmark')).toHaveText('WUSLA');
  await expect(page.locator('.navigation-wordmark')).not.toContainText('↗');
  await expect(page.locator('.nav-project svg')).toHaveCount(0);
  await expect(page.locator('.hp-release-picture img')).toHaveAttribute('src', '/assets/work/bewingo-india.webp');

  const service = page.getByRole('button', { name: /Make the product work better/ });
  await service.click();
  await expect(service).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.hp-service-evidence img')).toHaveAttribute('src', '/assets/work/wafy-sports.webp');

  await expect(page.locator('.hp-cta').getByRole('link', { name: 'Start a project', exact: true })).toHaveAttribute('href', '/start');
});

async function fillBrief(page: Page) {
  await page.goto('/start');
  await expect(page.getByRole('button', { name: 'Continue', exact: true })).toBeDisabled();
  await page.getByRole('textbox', { name: 'Describe the product, problem, or opportunity' }).fill('We need a useful application for coordinating our workshop bookings.');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByText('A new software product', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByText('An idea or early research', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByPlaceholder('Name', { exact: true }).fill('WUSLA Test');
  await page.getByPlaceholder('you@company.com').fill('invalid');
  await expect(page.getByRole('button', { name: 'Review your note', exact: true })).toBeDisabled();
  await page.getByPlaceholder('you@company.com').fill('test@example.com');
  await page.getByRole('button', { name: 'Review your note', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Make sure it sounds like you.' })).toBeVisible();
}

test('brief review preserves answers and submission uses the expected payload', async ({ page }) => {
  let sent: Record<string, string> | undefined;
  await page.route('**/api/contact', route => {
    sent = route.request().postDataJSON();
    return route.fulfill({ json: { success: true } });
  });
  await fillBrief(page);
  await page.locator('.brief-review').getByRole('button', { name: 'Edit', exact: true }).last().click();
  await expect(page.getByPlaceholder('you@company.com')).toHaveValue('test@example.com');
  await page.getByRole('button', { name: 'Review your note', exact: true }).click();
  await page.getByRole('button', { name: 'Send to WUSLA' }).click();
  await expect(page.getByRole('heading', { name: 'Your project note is with WUSLA.' })).toBeVisible();
  expect(sent?.email).toBe('test@example.com');
  expect(sent?.message).toContain('workshop bookings');
  expect(sent?.message).toContain('An idea or early research');
});

test('failed submission retains the brief and allows a successful retry', async ({ page }) => {
  let attempts = 0;
  await page.route('**/api/contact', route => {
    attempts += 1;
    return route.fulfill(attempts === 1 ? { status: 503, json: { message: 'Unavailable' } } : { json: { success: true } });
  });
  await fillBrief(page);
  await page.getByRole('button', { name: 'Send to WUSLA' }).click();
  await expect(page.getByRole('alert')).toContainText('could not be sent');
  await expect(page.locator('.review-message')).toContainText('workshop bookings');
  await page.getByRole('button', { name: 'Send to WUSLA' }).click();
  await expect(page.getByRole('heading', { name: 'Your project note is with WUSLA.' })).toBeVisible();
  expect(attempts).toBe(2);
});

test('contact endpoint rejects malformed input before delivery', async ({ request }) => {
  for (const data of [null, [], { name: {}, email: 'test@example.com', message: 'A sufficiently long test message.' }, { name: 'Test', email: 'invalid', message: 'A sufficiently long test message.' }]) {
    const response = await request.post('/api/contact', { data });
    expect(response.status()).toBe(400);
    expect(response.headers()['cache-control']).toContain('no-store');
  }
});
