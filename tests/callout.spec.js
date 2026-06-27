const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('Beeceptor HTTP Callout workflow', async ({ page, request }) => {

  // Step 1: Open endpoint (already logged in via saved session)
  await page.goto('https://app.beeceptor.com/console/manshi-test');
  await page.waitForLoadState('networkidle');

  // Step 2: Trigger API call
  const response = await request.post(
    `https://${process.env.ENDPOINT_NAME}.free.beeceptor.com/order`,
    {
      data: { name: 'Manshi', amount: 100 }
    }
  );
  expect(response.status()).toBeLessThan(500);

  // Step 3: Verify request appeared in Beeceptor
  await page.reload();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('/order').first()).toBeAttached({ timeout: 10000 });

  console.log('✅ HTTP Callout workflow verified successfully!');
  
});