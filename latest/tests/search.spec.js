import { test, expect } from '@playwright/test';
const { firefox } = require('playwright');

test('test', async ({ page }) => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AaSxoQwNNFNe7-jdsq2nEp-U6ZKZd4dJYlQOUG-NnhPjRmW3AxmJhcTLQmRPe1OWp8dhJrd-_iaHaQ&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1241202290%3A1714569421311440&theme=mn&ddm=0');
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('nikhilpanda69@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').fill('Nikhil@1234');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Search mail').fill('pass');
  await page.getByPlaceholder('Search mail').press('Enter');
  await page.goto('https://mail.google.com/mail/u/0/#search/pass');
  await expect(page.getByRole('listitem').nth(3)).toBeVisible();
});