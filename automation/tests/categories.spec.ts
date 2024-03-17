import {Page, Request, expect, test } from '@playwright/test';
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
  await loginPage.loginToPortal();
  await expect(homePage.welcomeTitle).toBeVisible();
});

test('Verify existents categories', async ({page}) => {
  await expect(homePage.categoriesSectionTitle).toBeVisible();
  await expect(homePage.getCategory('Phones')).toBeVisible();
  await expect(homePage.getCategory('Laptops')).toBeVisible();
  await expect(homePage.getCategory('Monitors')).toBeVisible();
  const categoryList = await page.waitForSelector('#cat');
  const categoriesNumber = await page.evaluate((categoryList) => {
    const categories = categoryList.parentElement?.querySelectorAll('.list-group-item');
    if (!categories) return 0;
    const indexCat = Array.from(categories).findIndex(element => element.id === 'cat');
    return categories.length - indexCat - 1;
  }, 
  categoryList
  );
  // Verify if the categories are three (3) as we expect in this test
  expect(categoriesNumber).toBe(3);
});