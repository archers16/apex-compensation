# Apex Compensation Website

Built with Next.js 14, Tailwind CSS. Deploys to Vercel in under 5 minutes.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com and click Add New Project
3. Import your GitHub repo
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click Deploy

Every push to main auto-deploys.

## Customization checklist

- About photo: In components/About.tsx, replace the SVG placeholder with a next/image tag. Put your photo in /public.
- Email address: Search project for hello@apexcompensation.com and update.
- LinkedIn URL: Update href in components/About.tsx and components/Footer.tsx.
- Custom domain: In Vercel project settings, add your domain under Domains.
- OG image: Add public/og-image.png (1200x630px) and reference it in app/layout.tsx.

## Adding your photo

In components/About.tsx, replace the placeholder div with:

```tsx
import Image from "next/image";

<Image
  src="/saxton.jpg"
  alt="Saxton, Founder of Apex Compensation"
  fill
  className="object-cover object-top"
/>
```

Put saxton.jpg in the /public folder.

## Brand colors

Coral:   #FF6B6B
Magenta: #E855D4
Violet:  #D946EF
Navy:    #0F1B4C
Purple:  #2D1B69
Slate:   #64748B

Primary gradient: linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)
