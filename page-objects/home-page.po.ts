import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly loginButton: Locator;
  readonly welcomeTitle: Locator;
  readonly page: Page;
  readonly categoriesSectionTitle: Locator;
  readonly cartButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('link', {  name: /log in/i});
    this.welcomeTitle = page.getByRole('link', {  name: /welcome admin/i});
    this.categoriesSectionTitle = page.getByRole('link', {  name: /categories/i});
    this.cartButton = page.getByRole('link', { name: 'Cart', exact: true });
  }

  getCategory(category: string) {
    return this.page.getByRole('link', {  name: category});
  }

  async selectProduct(productName: string) {
    await this.page.getByRole('link', {  name: productName.toLowerCase()}).click();
  }
}
