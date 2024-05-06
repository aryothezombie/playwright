import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').click();
  await page.getByPlaceholder('email@example.com').fill('nikhilpanda69@gmail.com');
  await page.getByPlaceholder('enter your passsword').click();
  await page.getByPlaceholder('enter your passsword').fill('Nikhil@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: ' Cart' }).click();
  await page.locator('li').filter({ hasText: '#6581ca399fd99c85e8ee7f45ZARA' }).click();
  await expect(page.locator('li').filter({ hasText: '#6581ca399fd99c85e8ee7f45ZARA' })).toBeVisible();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('233');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('Nikhil Panda');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('aryan');
  await page.getByPlaceholder('Select Country').click();
  await page.getByPlaceholder('Select Country').fill('india');
  await page.getByPlaceholder('Select Country').press('Enter');
  await page.getByText('Place Order').click();
  await expect(page.getByRole('button', { name: 'Click To Download Order Details in CSV' })).toBeVisible();
});