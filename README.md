# ESL UI Upptime Monitoring

Uptime monitoring for esl-ui.com resources.

## What is monitored

- **Main site**: https://esl-ui.com/
- **CSS Bundle**: https://esl-ui.com/bundles/site.css  
- **JS Bundle**: https://esl-ui.com/bundles/site.js

## Check frequency

- **Availability**: every 5 minutes
- **SSL certificate**: daily
- **Domain**: daily

## Setup

1. Fork this repository
2. Update `owner` in `.upptimerc.yml` to your GitHub username
3. Enable GitHub Actions in repository settings:
   - Go to **Settings** → **Actions** → **General**
   - Set Workflow permissions to **"Read and write permissions"**
   - Click **Save**

Monitoring will create GitHub Issues when problems are detected. No additional setup required.

## How it works

Upptime will automatically create workflows and start monitoring after the first push. You'll see:
- Issues created when sites are down or certificates/domains are expiring
- Issues automatically closed when problems are resolved
- Monitoring runs every 5 minutes for availability, daily for SSL/domain

## Notifications

Notifications are optional and not enabled by default. To enable notifications, add the following to `.upptimerc.yml`:

```yaml
notifications:
  - type: slack
    webhook-url: $SLACK_WEBHOOK_URL
  - type: discord  
    webhook-url: $DISCORD_WEBHOOK_URL
```

## Status

<!-- start summary -->
<!-- end summary -->

<!-- start graph -->
<!-- end graph -->