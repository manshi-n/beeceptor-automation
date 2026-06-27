const { chromium } = require('@playwright/test');
require('dotenv').config();

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://app.beeceptor.com');
  
  console.log('Please login manually in the browser...');
  console.log('After login, wait for the endpoints page to load fully.');
  
  // Wait for you to login manually
  await page.waitForURL('**/endpoints**', { timeout: 120000 });
  
  // Save session
  await page.context().storageState({ path: 'auth.json' });
  console.log('Session saved to auth.json!');
  
  await browser.close();
})();