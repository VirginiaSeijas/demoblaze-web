import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly productTitle: Locator;
  readonly page: Page;
  readonly addCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.getByRole('heading', {  name: /samsung galaxy s6/i});
    this.addCartButton = page.getByRole('link', {  name: /add to cart/i});
    }

getProductPrice(amount: string) {
    return this.page.getByRole('heading', { name: `${amount} *includes tax` });
}
}