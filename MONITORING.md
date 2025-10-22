# ESL Website Monitoring

Automated monitoring system for esl-ui.com infrastructure using GitHub Actions and Node.js.

## 🔍 What is monitored

### Website Availability
- **Main site**: https://esl-ui.com/
- **CSS Bundle**: https://esl-ui.com/bundles/site.css  
- **JS Bundle**: https://esl-ui.com/bundles/site.js

### Security & Infrastructure
- **SSL Certificate** expiration for `esl-ui.com`
- **Domain** expiration for `esl-ui.com`

## ⏱️ Check frequency

- **Domain Expiration**: daily at 09:05 EET (07:05 UTC)
- **SSL Certificate**: daily at 09:10 EET (07:10 UTC)
- **Website Availability**: every 20 minutes

## 🚨 Alert Logic

### Website Availability
- **First failure** → ⚠️ Warning issue created (might be a deployment or temporary network issue)
- **Second+ failure** → 🚨 Warning escalated to Alert (same issue renamed, escalation comment added, full history preserved)
- **Recovery after warning** → Warning issue is silently closed (reason: "not planned")
- **Recovery after alert** → Alert issue is closed with resolution comment (reason: "completed")

### SSL Certificate
- Alert created when certificate expires in less than **30 days**
- Issue automatically closed when renewed

### Domain Expiration
- Alert created when domain expires in less than **60 days**
- Issue automatically closed when renewed

## ⚙️ Configuration

### Workflows
Monitoring workflows are located in `.github/workflows/`:
- `website-availability.yml` - Website availability checks
- `ssl-check.yml` - SSL certificate monitoring
- `domain-check.yml` - Domain expiration monitoring

### Scripts
Monitoring logic is implemented in JavaScript (Node.js 22) in `.github/monitoring/`:

**Website Availability** (`check-availability.js`):
```javascript
const URLS = [
  'https://esl-ui.com/',
  'https://esl-ui.com/bundles/site.js',
  'https://esl-ui.com/bundles/site.css'
];
const SITE_NAME = 'esl-ui.com';
const TIMEOUT = 10000; // ms
```

**SSL Certificate** (`check-ssl.js`):
```javascript
const DOMAIN = 'esl-ui.com';
const WARNING_DAYS = 30;
const TIMEOUT = 15000; // ms
```

**Domain Expiration** (`check-domain.js`):
```javascript
const DOMAIN = 'esl-ui.com';
const WARNING_DAYS = 60;
```

### Dependencies
Minimal dependencies in `.github/monitoring/package.json`:
- `@actions/github` - GitHub API integration (pre-installed in Actions)
- `whoiser` - WHOIS data parsing
- Built-in Node.js modules: `fetch`, `tls`

## 🏷️ Issue Labels

All monitoring issues are tagged with:
- `monitoring` - General monitoring label
- `Monitor: Website` - Website availability issues
- `Monitor: SSL Certificate` - SSL certificate issues
- `Monitor: Domain` - Domain expiration issues

## 📊 How it works

### Technology Stack
- **Runtime**: Node.js 22.x
- **Language**: JavaScript (ES modules)
- **GitHub API**: Octokit via `@actions/github`
- **SSL Check**: Native Node.js `tls` module
- **Domain Check**: `whoiser` npm package
- **HTTP Checks**: Native `fetch` API

### Execution
- Workflows run on schedule and can be triggered manually via `workflow_dispatch`
- Issues are automatically created/updated when problems are detected
- Issues are automatically closed when problems are resolved
- All checks include timestamps and detailed information
- Shared issue management logic in `issue-helper.js`

## 🛠️ Development

### Local Testing
```bash
cd .github/monitoring
npm install

# Set GitHub token
export GITHUB_TOKEN=your_token

# Run checks
node check-availability.js
node check-ssl.js
node check-domain.js
```

### Linting
```bash
npm run lint
```
