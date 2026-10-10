import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('reconciliation page displays the sample variance', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await page.getByRole('button', { name: 'Reconciliation' }).click();
  await expect(page.getByRole('heading', { name: 'Reconciliation workspace' })).toBeVisible();
  await expect(page.getByText('₹12,84,000')).toBeVisible();
  await expect(page.getByText('₹12,61,000')).toBeVisible();
  await expect(page.getByText('₹23,000')).toBeVisible();
});
