import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly loginTitle: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly page: Page;
  readonly loginButton: Locator;
  readonly url = 'https://www.demoblaze.com/';

  constructor(page: Page) {
    this.page = page;
    this.loginTitle = page.getByRole('heading', {  name: /log in/i});
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

async goto() {
    await this.page.goto(this.url);
}

async loginToPortal() {
    await this.usernameInput.fill(process.env.USERNAME_TEST as string);
    await this.passwordInput.fill(process.env.PASSWORD_TEST as string );
    await this.loginButton.click();
  }
}