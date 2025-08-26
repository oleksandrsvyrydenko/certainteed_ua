#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up CertainTeed BackstopJS project...\n');

// Create necessary directories
const directories = [
  'backstop_data',
  'backstop_data/bitmaps_reference',
  'backstop_data/bitmaps_test',
  'backstop_data/engine_scripts',
  'backstop_data/html_report',
  'backstop_data/ci_report',
  'puppet'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`ℹ️  Directory already exists: ${dir}`);
  }
});

// Create a sample test configuration
const sampleConfig = {
  "label": "Sample Test",
  "url": "http://localhost:3000",
  "referenceUrl": "",
  "readyEvent": "",
  "readySelector": "",
  "delay": 1000,
  "hideSelectors": [],
  "removeSelectors": [],
  "selectors": ["viewport"],
  "misMatchThreshold": 0.1,
  "requireSameDimensions": true
};

console.log('\n📋 Sample test scenario configuration:');
console.log(JSON.stringify(sampleConfig, null, 2));

console.log('\n🎯 Next steps:');
console.log('1. Install dependencies: npm install');
console.log('2. Start your website (default: http://localhost:3000)');
console.log('3. Initialize BackstopJS: npm run backstop:init');
console.log('4. Run tests: npm run backstop:test');
console.log('5. View reports: npm run backstop:openReport');

console.log('\n✨ Setup complete!');
