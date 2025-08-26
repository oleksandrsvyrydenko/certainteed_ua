#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to extract URLs from sitemap XML content
function extractUrlsFromSitemap(xmlContent) {
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(xmlContent)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

// Function to generate BackstopJS scenarios
function generateScenarios(urls, limit = 20) {
  const scenarios = [];
  const limitedUrls = urls.slice(0, limit);
  
  limitedUrls.forEach((url, index) => {
    // Extract path from URL for label
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/').filter(segment => segment);
    const label = pathSegments.length > 0 ? pathSegments.join('-') : 'homepage';
    
    // Convert production URL to staging URL
    const stagingUrl = url.replace('www.certainteed.com', 'stg.newcertainteed.com');
    
    scenarios.push({
      label: `${label}-${index + 1}`,
      cookiePath: "backstop_data/engine_scripts/cookies.json",
      url: stagingUrl,
      referenceUrl: url,
      delay: 10000
    });
  });
  
  return scenarios;
}

// Main execution
console.log('🔍 Sitemap URL Extractor for BackstopJS\n');

console.log('Since the site is protected by Incapsula, you have a few options:\n');

console.log('1. MANUAL APPROACH:');
console.log('   - Download the sitemap.xml from https://www.certainteed.com/sitemap.xml');
console.log('   - Save it as "sitemap.xml" in this directory');
console.log('   - Run: node scripts/extract-urls.js\n');

console.log('2. COMMON CERTAINTEED URLS (you can use these manually):');
const commonUrls = [
  'https://www.certainteed.com/',
  'https://www.certainteed.com/about-us',
  'https://www.certainteed.com/contact-us',
  'https://www.certainteed.com/products',
  'https://www.certainteed.com/roofing',
  'https://www.certainteed.com/siding',
  'https://www.certainteed.com/insulation',
  'https://www.certainteed.com/gypsum',
  'https://www.certainteed.com/ceiling',
  'https://www.certainteed.com/foundation',
  'https://www.certainteed.com/contractors',
  'https://www.certainteed.com/homeowners',
  'https://www.certainteed.com/support',
  'https://www.certainteed.com/warranty',
  'https://www.certainteed.com/sustainability',
  'https://www.certainteed.com/innovation',
  'https://www.certainteed.com/careers',
  'https://www.certainteed.com/news',
  'https://www.certainteed.com/events',
  'https://www.certainteed.com/resources'
];

console.log('Common URLs:');
commonUrls.forEach((url, index) => {
  console.log(`   ${index + 1}. ${url}`);
});

// Check if sitemap.xml exists locally
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  console.log('\n📄 Found local sitemap.xml, processing...\n');
  
  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urls = extractUrlsFromSitemap(sitemapContent);
    const scenarios = generateScenarios(urls, 20);
    
    console.log(`✅ Extracted ${urls.length} URLs from sitemap`);
    console.log(`📋 Generated ${scenarios.length} scenarios for BackstopJS\n`);
    
    // Update backstop.json
    const backstopPath = path.join(__dirname, '..', 'backstop.json');
    const backstopConfig = JSON.parse(fs.readFileSync(backstopPath, 'utf8'));
    backstopConfig.scenarios = scenarios;
    
    fs.writeFileSync(backstopPath, JSON.stringify(backstopConfig, null, 2));
    console.log('✅ Updated backstop.json with new scenarios!');
    
  } catch (error) {
    console.error('❌ Error processing sitemap:', error.message);
  }
} else {
  console.log('\n📝 To use the automatic approach:');
  console.log('   1. Download sitemap.xml from the website');
  console.log('   2. Place it in the project root directory');
  console.log('   3. Run this script again\n');
  
  console.log('📋 Or manually update backstop.json with these scenarios:');
  const scenarios = generateScenarios(commonUrls, 20);
  console.log(JSON.stringify(scenarios, null, 2));
}
