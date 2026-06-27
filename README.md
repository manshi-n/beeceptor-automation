# Beeceptor HTTP Callout Playwright Automation

End-to-end Playwright automation for testing Beeceptor's HTTP Callout Rule feature.

## What it does
- Opens Beeceptor endpoint dashboard
- Triggers a POST API call to the endpoint
- Verifies the HTTP Callout executes successfully
- Runs across Chromium, Firefox, and WebKit

## Tech Stack
- JavaScript
- Playwright
- Node.js
- Beeceptor

## Setup

1. Clone the repo
   git clone https://github.com/manshi-n/beeceptor-automation.git
   cd beeceptor-automation

2. Install dependencies
   npm install
   npx playwright install

3. Create .env file
   BEECEPTOR_EMAIL=your_email
   BEECEPTOR_PASSWORD=your_password
   ENDPOINT_NAME=manshi-test
   WEBHOOK_URL=your_webhook_site_url

4. Save login session
   node tests/setup.js

5. Run tests
   npx playwright test tests/callout.spec.js --headed

## Results
All 3 browsers pass: Chromium, Firefox, WebKit