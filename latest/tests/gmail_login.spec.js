import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  
  await page.goto('https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en-GB&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1393339583%3A1714070581783507&theme=mn&ddm=0');
  
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('120aryan2055@sjcem.edu.in');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('Aryan010303');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://mail.google.com/mail/u/0/#inbox');
});