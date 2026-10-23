import { test, expect } from '@playwright/test';

test('homepage displays the main heading', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Playwright enables reliable web automation for testing, scripting, and AI agents.',
    }),
  ).toBeVisible();
});
