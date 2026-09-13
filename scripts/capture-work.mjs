import { chromium } from '@playwright/test';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const output = new URL('../public/assets/work/', import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Users/Administrator/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe' });
const sites = [['bewingo-india', 'https://bewingoindia.com/'], ['muzari', 'https://muzari.in/'], ['pg-campus', 'https://pgcampuskalikav.vercel.app/'], ['wafy-sports', 'https://sportify-wafy-sports.vercel.app/']];
for (const [slug, url] of sites) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.screenshot({ path: new URL(`${slug}-source.png`, output).pathname.slice(1) });
    const data = await page.screenshot();
    await sharp(data).resize(1200).webp({ quality: 82 }).toFile(new URL(`${slug}.webp`, output).pathname.slice(1));
    console.log(slug, await page.title());
  } catch (error) { console.log(slug, error.message); }
  await page.close();
}
await browser.close();
