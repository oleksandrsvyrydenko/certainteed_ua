module.exports = async (page, scenario) => {
  console.log(`[${scenario.label}] Page loaded, waiting for content...`);
  
  try {
    // Wait for network to be idle (no requests for 500ms)
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
      console.log(`[${scenario.label}] Network idle timeout reached, continuing...`);
    });
    
    // Check if we got redirected or got an error page
    const currentUrl = page.url();
    console.log(`[${scenario.label}] Current URL: ${currentUrl}`);
    
    // Wait for any animations to complete
    await page.waitForTimeout(1000);
    
    // Scroll to top to ensure consistent starting position
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    
    // Wait a bit more for any dynamic content to load
    await page.waitForTimeout(500);
    
    // Check if we're on an error page or if the page loaded successfully
    const pageTitle = await page.title();
    console.log(`[${scenario.label}] Page title: ${pageTitle}`);
    
    // If we got redirected to a different path, log it
    if (currentUrl !== scenario.url) {
      console.log(`[${scenario.label}] Redirected from ${scenario.url} to ${currentUrl}`);
    }
    
    console.log(`[${scenario.label}] Ready for screenshot`);
    
  } catch (error) {
    console.log(`[${scenario.label}] Error in onReady:`, error.message);
    // Continue anyway to capture the error state
  }
};
