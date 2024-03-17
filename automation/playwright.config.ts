import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  timeout: 30000,          
  testDir: './tests',  
  projects: [
    {
      name: 'Web tests',
      use: {
         browserName: 'chromium',
         headless: true,
         screenshot: 'only-on-failure'
    },
    retries : 2
    }
],
reporter: [
  ['list'],
  [
    'allure-playwright',
    {
      detail: true,
      outputFolder: 'reports/allure-results',
      suiteTitle: false
    }
  ]
]
});
