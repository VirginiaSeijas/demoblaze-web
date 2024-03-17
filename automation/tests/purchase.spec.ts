import {Page, Request, expect, test } from '@playwright/test';
import { LoginPage,} from '../page-objects/login-page.po';
import { HomePage} from '../page-objects/home-page.po';
import { ProductPage} from '../page-objects/product-page.po';
import { CartPage} from '../page-objects/cart-page.po';


let loginPage: LoginPage;
let homePage: HomePage;
let productPage: ProductPage;
let cartPage : CartPage;

const productName = 'Samsung galaxy s6';
const productPrice = '360';

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  productPage = new ProductPage(page)
  cartPage = new CartPage(page);
  await loginPage.goto();
  await homePage.loginButton.click();
  await expect(loginPage.loginTitle).toBeVisible();
  await loginPage.loginToPortal();
  await expect(homePage.welcomeTitle).toBeVisible();
  
});
test('Add product to the cart successfully', async ({page}) => {
    await homePage.selectProduct(productName);
    await expect(productPage.productTitle).toBeVisible();
    await expect(productPage.productTitle).toHaveText(productName);
    await expect(productPage.getProductPrice(productPrice)).toBeVisible();
    await productPage.addCartButton.click();
    const dialog = await page.waitForEvent('dialog');
    const message = dialog.message();
    expect(message).toEqual('Product added.');
    await dialog.accept();
    await homePage.cartButton.click();
    await page.waitForLoadState('load');
    await cartPage.deleteButton.click();
    await expect(cartPage.deleteButton).not.toBeVisible();
});

test('Purchase a product successfully', async ({page}) => {
    await homePage.selectProduct(productName);
    await productPage.addCartButton.click();
    const dialog = await page.waitForEvent('dialog');
    await dialog.accept();
    await homePage.cartButton.click();
    await page.waitForLoadState('load');
    await expect(cartPage.cartTitle).toBeVisible();
    await expect(cartPage.getProductName(productName)).toBeVisible();
    await expect(cartPage.getProductPrice(productPrice)).toBeVisible();
    await cartPage.placeOrderButton.click();
    await cartPage.fillPlaceOrder(
        'Test', 
        'Spain', 
        'Barcelona', 
        '0998772673626', 
        'March', 
        '2024');
    await cartPage.purchaseButton.click();
    await expect(cartPage.purchaseTittle).toBeVisible();
    // NOTE: This way to extract the elements is so far-fetched I would suggest developers use id's or the better construction of these elements.
    
    // Use the locator method to select the element and get its text content
    const locator = await page.$('p.lead.text-muted');
    if (locator === null) {
        throw new Error('The locator could not be found on the page');
      }
    const text = await locator.innerText();
     // Extract information using regular expressions
    const amountMatch = text.match(/Amount:\s*([\d.]+)\s+USD/);
    const cardNumberMatch = text.match(/Card Number:\s*([^\n]+)/);
    const nameMatch = text.match(/Name:\s*([^\n]+)/);
    // Check if matches were found and extract the values
    const amount = amountMatch ? amountMatch[1] : '';
    const cardNumber = cardNumberMatch ? cardNumberMatch[1] : '';
    const name = nameMatch ? nameMatch[1] : '';
    // Verify that the values are as expected
    expect(amount).toBe(productPrice);
    expect(cardNumber).toBe('0998772673626');
    expect(name).toBe('Test');

    await cartPage.okButton.click();
    await expect(homePage.welcomeTitle).toBeVisible();
})