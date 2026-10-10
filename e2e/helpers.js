import { expect } from '@playwright/test';

export async function signIntoDemoWorkspace(page) {
  await page.goto('/login');
  await page.getByLabel('Email address').fill('auditor@example.com');
  await page.getByLabel('Password').fill('DemoPassword123!');
  await page.getByRole('button', { name: /continue to workspace/i }).click();
  await expect(page.getByText(/illustrative workspace/i)).toBeVisible();
}
