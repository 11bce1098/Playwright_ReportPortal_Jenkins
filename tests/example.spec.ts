import { test, expect } from '@playwright/test';

test('Verify Playwright with ReportPortal', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  // Capture Screenshot
  const screenshotPath = `screenshots/${testInfo.title}.png`;
  await page.screenshot({ path: screenshotPath });

  // Attach Screenshot to ReportPortal
  if (testInfo.attach) {
    await testInfo.attach('Screenshot', { path: screenshotPath });
  }
});