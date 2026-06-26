# AI Niche Sites

Static monorepo for 12 English AI niche websites. Each site is designed as a focused tool directory with commercial articles, tracked outbound links, disclosure pages, sitemap, robots file, and Vercel Web Analytics.

## Sites

- `ai-writing-tools-hub`
- `ai-video-tools-hub`
- `ai-image-tools-hub`
- `ai-design-tools-hub`
- `ai-coding-tools-hub`
- `ai-meeting-tools-hub`
- `ai-automation-tools-hub`
- `ai-customer-support-tools`
- `ai-resume-job-tools`
- `ai-learning-tools-hub`
- `ai-research-tools-hub`
- `ai-marketing-tools-hub`

## Commands

```powershell
npm run build
npm run validate
```

Each generated site lives in `sites/<site-slug>/`. In Vercel, create one project per site and set the project root directory to the matching `sites/<site-slug>` folder.

## Monetization

All outbound tool links go through `/go/<tool>.html` redirect pages so Vercel Web Analytics can count clicks. Replace placeholder tool URLs with approved affiliate links as each program is accepted.
