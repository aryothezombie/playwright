import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByLabel('Sign in').click();
  await page.getByLabel('Email or phone').fill('120aryan2055@sjcem.edu.in');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('Aryan010303');
  await page.getByRole('button', { name: 'Next' }).click();

});