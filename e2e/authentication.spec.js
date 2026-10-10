import { test, expect } from '@playwright/test';

test.describe('Demo authentication', () => {
  test('login form exposes labelled fields', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByLabel('Email address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByText(/this sign-in is simulated/i)).toBeVisible();
  });

  test('non-empty demo credentials open the workspace', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email address').fill('auditor@example.com');
    await page.getByLabel('Password').fill('DemoPassword123!');
    await page.getByRole('button', { name: /continue to workspace/i }).click();
    await expect(page).toHaveURL(/\/workspace$/);
    await expect(page.getByText(/illustrative workspace/i)).toBeVisible();
  });
});
