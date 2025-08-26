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
