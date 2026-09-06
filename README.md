# WUSLA

WUSLA is a product studio: we build our own software products, and partner
selectively with businesses on mobile apps, web platforms, desktop software,
and UI/UX design. This repo is the marketing site at [wusla.co](https://wusla.co).

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Styling**: Tailwind CSS 4 (design tokens in `app/assets/css/main.css`)
- **Animation**: GSAP, driven by the `useScrollTimeline` composable
- **Icons**: lucide-vue-next
- **Deployment**: Cloudflare Workers, via `nitro-cloudflare-dev` / Wrangler

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
```

## Project Structure

```
wusla-web/
├── app/
│   ├── assets/css/main.css   # design tokens (@theme inline) + base styles
│   ├── components/           # Navbar, Hero (hero/), Products, Services,
│   │                          # WhyUs, Work, Contact, Footer, Reveal
│   ├── pages/                # index.vue, portfolio.vue, projects.vue
│   ├── app.vue                # root layout, SEO meta / JSON-LD
│   └── error.vue
├── content/projects.ts       # real shipped client project data (used by Work.vue)
├── server/api/contact.post.ts# contact form handler (sends via Resend)
├── public/                   # static assets
├── nuxt.config.ts
└── wrangler.jsonc / open-next-adjacent Cloudflare config
```

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run generate  # Static generation
npm run preview   # Preview the production build locally
npm run deploy    # Build and deploy to Cloudflare Workers (wrangler deploy)
npm run lint      # ESLint check
```

No test suite is configured.

## Design System

Colors are defined as CSS custom properties in `app/assets/css/main.css`
under `@theme inline` — a warm, editorial paper palette (off-white
background, near-black ink) with a deep evergreen accent (`#1A4D3C`, sampled
from the logo). Use `var(--color-*)` in inline styles rather than Tailwind
color classes, since Tailwind 4 can't resolve the CSS variables at compile
time — hover states are likewise applied via inline style mutation, not
`hover:` classes.

## Data

- **Client project data**: `content/projects.ts` — real shipped work shown
  in the `Work` section on the homepage.
- **Portfolio page**: `public/data/portfolio.json`, fetched client-side by
  `app/pages/portfolio.vue`.
- **GitHub repos**: `app/utils/github.ts` → `fetchRepositories()`, hits the
  GitHub API for `wusla-org`.

## Contact

- **Website**: [wusla.co](https://wusla.co)
- **GitHub**: [github.com/wusla-org](https://github.com/wusla-org)
- **Contact**: wuslateam@gmail.com
