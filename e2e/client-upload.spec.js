import { test, expect } from '@playwright/test';
import { signIntoDemoWorkspace } from './helpers.js';

test('evidence picker allows selecting a local file without claiming upload', async ({ page }) => {
  await signIntoDemoWorkspace(page);
  await page.getByRole('button', { name: /add evidence/i }).click();
  await expect(page.getByRole('heading', { name: 'Add demo evidence' })).toBeVisible();
  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles({ name: 'sample-evidence.csv', mimeType: 'text/csv', buffer: Buffer.from('invoice,total\nINV-1,1200\n') });
  await expect(page.getByText('sample-evidence.csv')).toBeVisible();
  await expect(page.getByText(/does not transmit the file to a server/i)).toBeVisible();
});
