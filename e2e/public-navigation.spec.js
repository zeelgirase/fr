import { test, expect } from '@playwright/test';

test.describe('Public navigation', () => {
  test('home page renders its main headline and title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TRACE.*Revenue Assurance/i);
    await expect(page.getByRole('heading', { name: /every number/i })).toBeVisible();
  });

  test('marketing navigation links scroll to the relevant sections', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Methodology' }).click();
    await expect(page).toHaveURL(/#method$/);
    await expect(page.locator('#method')).toBeVisible();
  });

  test('sign-in entry opens login page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole('heading', { name: /sign in to your workspace/i })).toBeVisible();
  });
});
