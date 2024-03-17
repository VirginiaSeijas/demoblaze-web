import {Page, expect, test } from '@playwright/test';
import { LoginPage,} from '../page-objects/login-page.po';
import { HomePage} from '../page-objects/home-page.po';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await loginPage.goto();
  await homePage.loginButton.click();
  await expect(loginPage.loginTitle).toBeVisible();
  
});
test('Login successfully', async ({page}) => {
  await expect(loginPage.loginTitle).toHaveText('Log in');
  await loginPage.usernameInput.fill(process.env.USERNAME_TEST as string);
  await loginPage.passwordInput.fill(process.env.PASSWORD_TEST as string);
  await loginPage.loginButton.click();
  await expect(homePage.welcomeTitle).toBeVisible();
});

test('Login unsuccess wrong password', async ({page}) => {
  await expect(loginPage.loginTitle).toHaveText('Log in');
  await loginPage.usernameInput.fill(process.env.USERNAME_TEST as string);
  await loginPage.passwordInput.fill('wrong');
  await loginPage.loginButton.click();
  const dialog = await page.waitForEvent('dialog');
  const message = dialog.message();
  expect(message).toEqual('Wrong password.');
  await dialog.accept();
  await expect(homePage.welcomeTitle).not.toBeVisible();
});

test('Login unsuccess user does not exits', async ({page}) => {
  await expect(loginPage.loginTitle).toHaveText('Log in');
  await loginPage.usernameInput.fill('jahgdkhasdgk');
  await loginPage.passwordInput.fill(process.env.PASSWORD_TEST as string);
  await loginPage.loginButton.click();
  const dialog = await page.waitForEvent('dialog');
  const message = dialog.message();
  expect(message).toEqual('User does not exist.');
  await dialog.accept();
  await expect(homePage.welcomeTitle).not.toBeVisible();
});