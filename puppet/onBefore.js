module.exports = async (page, scenario) => {
  // Set user agent to avoid detection
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  // Set viewport
  await page.setViewport({ width: 1440, height: 900 });
  
  // Set default timeout
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(30000);

  // Note: Production site (www.certainteed.com) does not require authentication
  // Authentication logic has been removed since it's not needed for production

  // Enhanced error handling and logging
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[${scenario.label}] PAGE ERROR:`, msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log(`[${scenario.label}] PAGE ERROR:`, error.message);
  });

  // Handle request failures
  page.on('requestfailed', request => {
    console.log(`[${scenario.label}] REQUEST FAILED:`, request.url(), request.failure().errorText);
  });

  // Handle response errors
  page.on('response', response => {
    if (!response.ok()) {
      console.log(`[${scenario.label}] RESPONSE ERROR:`, response.url(), response.status(), response.statusText());
    }
  });

  // Handle unhandled rejections
  page.on('error', error => {
    console.log(`[${scenario.label}] PAGE ERROR:`, error.message);
  });

  console.log(`[${scenario.label}] Starting scenario for: ${scenario.url}`);
};
