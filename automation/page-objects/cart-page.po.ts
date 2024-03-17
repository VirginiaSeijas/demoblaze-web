import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly cartTitle: Locator;
  readonly page: Page;
  readonly placeOrderButton: Locator;
  readonly placeOrderTitle: Locator;
  readonly purchaseButton: Locator;
  readonly purchaseTittle: Locator;
  readonly deleteButton: Locator;
  readonly okButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.cartTitle = page.getByRole('heading', { name: 'Products' });
    this.placeOrderButton = page.getByRole('button', {  name: /place order/i});
    this.placeOrderTitle = page.getByRole('heading', {  name: /place order/i});
    this.purchaseButton = page.getByRole('button', {  name: /purchase/i});
    this.purchaseTittle = page.getByRole('heading', {  name: /thank you for your purchase!/i});
    this.deleteButton = page.getByRole('link', { name: 'Delete' });
    this.okButton = page.getByRole('button', { name: 'OK' });
}

getProductName(productName: string) {
    return this.page.getByRole('cell', {  name: productName.toLowerCase()});
}

getProductPrice(price: string) {
    return this.page.getByRole('cell', {  name: price});
}

async fillPlaceOrder(name: string, country: string, city: string, creditCard: string, month: string, year: string) {
    await this.page.getByText('Total:').fill(name); // NOTE: This locator should be change to "name"
    await this.page.getByRole('textbox', {  name: /country:/i}).fill(country);
    await this.page.getByRole('textbox', {  name: /city:/i}).fill(city);
    await this.page.getByRole('textbox', {  name: /credit card:/i}).fill(creditCard);
    await this.page.getByRole('textbox', {  name: /month:/i}).fill(month);
    await this.page.getByRole('textbox', {  name: /year:/i}).fill(year);
  }
}