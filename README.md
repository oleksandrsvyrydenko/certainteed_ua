# CertainTeed BackstopJS Visual Regression Testing

Visual regression testing setup for CertainTeed website using BackstopJS.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up authentication (see Authentication section below)**

3. **Run tests:**
   ```bash
   npm run backstop:test
   ```

## 🔐 Authentication Setup

The staging environment (`stg.newcertainteed.com`) requires authentication. Here are the available methods:

### Method 1: Environment Variables (Recommended)

1. **Copy the example environment file:**
   ```bash
   cp env.example .env
   ```

2. **Edit `.env` with your credentials:**
   ```bash
   # Basic Authentication
   STAGING_USERNAME=your_staging_username
   STAGING_PASSWORD=your_staging_password
   
   # OR Bearer Token Authentication
   STAGING_ACCESS_TOKEN=your_access_token_here
   
   # OR API Key Authentication
   STAGING_API_KEY=your_api_key_here
   ```

3. **Run tests with environment variables:**
   ```bash
   npm run backstop:test
   ```

### Method 2: Direct Configuration in backstop.json

Add credentials directly to scenarios in `backstop.json`:

```json
{
  "label": "homepage-1",
  "url": "https://stg.newcertainteed.com/",
  "username": "your_username",
  "password": "your_password",
  "delay": 10000
}
```

### Method 3: Custom Headers

For more complex authentication, modify `puppet/onBefore.js`:

```javascript
// Add custom headers
await page.setExtraHTTPHeaders({
  'Authorization': 'Bearer YOUR_TOKEN',
  'X-Custom-Header': 'YOUR_VALUE'
});
```

## 📋 Available Commands

- `npm run backstop:init` - Initialize BackstopJS configuration
- `npm run backstop:reference` - Generate reference images
- `npm run backstop:test` - Run visual regression tests
- `npm run backstop:approve` - Approve test changes
- `npm run backstop:openReport` - Open test report
- `npm run report` - Open the latest test report

## 🔧 Configuration

### Viewports
- **Phone**: 320x480
- **Tablet**: 1024x768  
- **Desktop**: 1440x900

### Scenarios
Currently testing 20 key pages comparing staging vs production:
- Homepage, About Us, Contact, Products
- Roofing, Siding, Insulation, Gypsum
- Ceiling, Foundation, Contractors, Homeowners
- Support, Warranty, Sustainability, Innovation
- Careers, News, Events, Resources

### Authentication Types Supported
- ✅ Basic Authentication (username/password)
- ✅ Bearer Token Authentication
- ✅ API Key Authentication
- ✅ Custom Headers
- ✅ Cookie-based Authentication

## 🛠️ Troubleshooting

### Authentication Errors
If you see `net::ERR_INVALID_AUTH_CREDENTIALS`:

1. **Check your credentials** in `.env` file
2. **Verify authentication method** matches your staging setup
3. **Test credentials manually** in browser first
4. **Check for IP restrictions** on staging environment

### Missing Reference Images
If you see "Reference image not found" errors:

```bash
npm run backstop:reference
```

### Cookie Issues
If cookies aren't working:

1. **Update cookies.json** with fresh staging cookies
2. **Check cookie domains** match staging URLs
3. **Verify cookie expiration** dates

## 📁 Project Structure

```
certainteed_backstopjs/
├── backstop.json              # Main configuration
├── cookies.json               # Authentication cookies
├── env.example               # Environment variables template
├── puppet/
│   ├── onBefore.js           # Pre-test setup (auth, headers)
│   └── onReady.js            # Post-load setup
├── backstop_data/            # Test results and reports
└── scripts/
    └── extract-urls.js       # URL extraction utilities
```

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use environment variables for sensitive credentials
- Rotate authentication tokens regularly
- Consider using CI/CD secrets for automated testing
