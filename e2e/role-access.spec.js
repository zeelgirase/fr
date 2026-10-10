import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('workspace clearly labels its demo state and user session', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await expect(page.getByText('DEMO DATA')).toBeVisible();
  await expect(page.getByText('Demo session')).toBeVisible();
  await expect(page.getByText(/no live audit analysis or backend verification/i)).toBeVisible();
});
