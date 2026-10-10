import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('overview shows example evidence-trail events', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await expect(page.getByRole('heading', { name: 'Evidence trail' })).toBeVisible();
  await expect(page.getByText('Source register added')).toBeVisible();
  await expect(page.getByText('Reconciliation prepared')).toBeVisible();
  await expect(page.getByText(/not connected to live data/i)).toBeVisible();
});
