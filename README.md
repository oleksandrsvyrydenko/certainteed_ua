# CertainTeed BackstopJS Visual Regression Testing

Visual regression testing setup for CertainTeed website using BackstopJS.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
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

### Notes

The first project was created for testing the real prod env - https://www.certainteed.com against the stage env - https://stg.newcertainteed.com, but I faced some security issues:

Summary of Authentication Investigation
After investigating the root cause of the authentication issues was identified:
Root Cause
The net::ERR_INVALID_AUTH_CREDENTIALS error is NOT actually an authentication failure. The authentication is working correctly (as proven by successful curl commands), but there's a fundamental incompatibility between BackstopJS and how the staging environment handles browser-based authentication.
What We've Tried
 - Version alignment - Updated Puppeteer to match BackstopJS internal version
 - Different engines - Tried Playwright (had compatibility issues)
 - Request interception - Implemented selective header injection
 - Multiple auth methods - Tried page.authenticate, headers, and request interception
 - Enhanced error handling - Added comprehensive logging and error handling
The Real Issue
The staging environment appears to have specific security measures that
Allow HTTP-based authentication (curl works)
Block or reject browser-based authentication attempts (Puppeteer fails)
This is likely a security feature to prevent automated browser access
Recommended Solutions: 
 - Contact IT/Security Team
 - The staging environment may have specific security policies
 - Request whitelisting for automated testing tools

The authentication issue is not a configuration problem but a security policy restriction that requires coordination with our IT/security team to resolve.

Therefore, a new project was created to test the production environment (https://certainteed.com.ua) against the same production environment (https://certainteed.com.ua), as we do not have access to the related staging environment.
