import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('workpaper page shows its draft review state', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await page.getByRole('button', { name: 'Workpapers' }).click();
  await expect(page.getByRole('heading', { name: 'Workpapers workspace' })).toBeVisible();
  await expect(page.getByText('WP-01 · Revenue reconciliation')).toBeVisible();
  await expect(page.getByText('Illustrative template · Not signed off')).toBeVisible();
});
