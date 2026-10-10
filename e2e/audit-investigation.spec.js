import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('findings area displays illustrative investigation information', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await page.getByRole('button', { name: 'Findings' }).click();
  await expect(page.getByRole('heading', { name: 'Findings workspace' })).toBeVisible();
  await expect(page.getByText('Illustrative findings')).toBeVisible();
  await expect(page.getByText('Sample variance total')).toBeVisible();
});
