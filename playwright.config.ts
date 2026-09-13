import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: process.env.TEST_BASE_URL || 'http://127.0.0.1:3100',
    viewport: { width: 1366, height: 768 },
    colorScheme: 'light',
    reducedMotion: 'reduce',
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
