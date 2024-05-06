import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AaSxoQxmWrGSSAvNrWKaHIR8GZJXw5HEgsD4ol0gM0h1tEC_fZQDZk2Hs6smHyj387ZEwABXIk216g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1123915345%3A1714568796346685&theme=mn&ddm=0');
  await page.getByLabel('Email or phone').fill('nikhilpanda69@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('Nikhil@1234');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Compose' }).click();
  await page.getByLabel('To recipients').fill('120nikhil2035@sjcem.edu.in');
  await page.getByPlaceholder('Subject').fill('xyz');
  await page.getByRole('textbox', { name: 'Message Body' }).click();
  await page.getByRole('textbox', { name: 'Message Body' }).fill('pass ho gaya bhai\n');
  await page.getByLabel('Send ‪(Ctrl-Enter)‬').click();
  await page.locator('div').filter({ hasText: /^Sent$/ }).nth(3).click();
  await expect(page.locator('td').filter({ hasText: 'To: 120nikhil20., xyz, 18:38' }).locator('div').nth(1)).toBeVisible();
});