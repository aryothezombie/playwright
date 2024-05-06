import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByText('Register here').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Nikhil');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Panda');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('email@example.com').fill('nikhilpanda69');
  await page.getByPlaceholder('email@example.com').press('CapsLock');
  await page.getByPlaceholder('email@example.com').press('CapsLock');
  await page.getByPlaceholder('email@example.com').fill('nikhilpanda69@gmail.com');
  await page.getByPlaceholder('enter your number').click();
  await page.getByPlaceholder('enter your number').fill('9004311693');
  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.locator('label').filter({ hasText: /^Male$/ }).click();
  await page.getByPlaceholder('Passsword', { exact: true }).click();
  await page.getByPlaceholder('Passsword', { exact: true }).fill('Nikhil@1234');
  await page.getByPlaceholder('Confirm Passsword').click();
  await page.getByPlaceholder('Confirm Passsword').fill('Nikhil@1234');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.locator('div').filter({ hasText: 'We Make Your Shopping' })).toBeVisible();
});