import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('sign-off page shows review gates and prevents fake approval', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await page.getByRole('button', { name: 'Sign-off' }).click();
  await expect(page.getByTestId('signoff-panel')).toBeVisible();
  await expect(page.getByText('Human auditor approval')).toBeVisible();
  await expect(page.getByText(/not connected to a backend approval workflow/i)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign off engagement' })).toBeDisabled();
});
