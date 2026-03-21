# WUSLA — Software Studio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

> Official website for **WUSLA** — a software studio building web apps, SaaS platforms, mobile apps, and custom digital products for businesses worldwide.

**→ Live:** [wusla.com](https://wusla.com) &nbsp;**→ Contact:** wuslateam@gmail.com

---

## Tech Stack

| | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Routing, SSG, metadata |
| **UI** | React 19 + TypeScript | Component model |
| **Styling** | Tailwind CSS v4 | Utility-first CSS via `@theme inline` |
| **Animation** | Framer Motion 12 | Scroll reveals, hover physics, curtain transitions |
| **Scroll** | Lenis | Native-feel smooth scrolling |
| **Icons** | Lucide React | Consistent icon set |
| **Deployment** | Vercel | Edge-optimised static deployment |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/wusla-team/wusla-website.git
cd wusla-website
npm install
npm run dev        # → http://localhost:3000
```

```bash
npm run build      # Production build (canonical verification)
npm run lint       # ESLint
```

There is no test suite. `npm run build` with zero errors is the pass criterion.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page (section composition)
│   ├── layout.tsx            # Root layout — Google Fonts, JSON-LD schemas
│   ├── globals.css           # @theme tokens: colors, fonts, spacing
│   ├── aether/               # Aether mobile app product page
│   ├── portfolio/            # Portfolio listing
│   ├── projects/             # Projects detail
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # Crawl rules
│
└── components/
    │
    ├── ─── Page Sections ───────────────────────────────────────────
    ├── Hero.tsx              # Curtain headline + work preview cards
    ├── Services.tsx          # Service cards with mouse-tracking gradient
    ├── TechStack.tsx         # Seamless marquee strip
    ├── Portfolio.tsx         # 2+4 project grid, Awwwards hover effects
    ├── Testimonials.tsx      # Client quote cards
    ├── Stats.tsx             # Count-up animated numbers
    ├── Process.tsx           # Engagement process steps
    ├── FAQ.tsx               # AnimatePresence accordion
    ├── Contact.tsx           # Contact form + scarcity banner
    ├── Navbar.tsx            # Responsive nav with mobile menu
    └── Footer.tsx            # Footer
    │
    └── ─── Infrastructure ──────────────────────────────────────────
        ├── CurtainLoader.tsx # Page transition overlay
        ├── SmoothScroll.tsx  # Global Lenis instance
        ├── TransitionLink.tsx# Internal link → triggers curtain
        ├── Parallax.tsx      # Scroll-driven parallax wrapper
        ├── MouseSpotlight.tsx# Cursor spotlight effect
        └── SearchOverlay.tsx # Search UI overlay
```

**Section order on the landing page:**

```
Navbar → Hero → Services → TechStack → Portfolio →
Testimonials → Stats → Process → FAQ → Contact → Footer
```

---

## Design System

### Colors

| Token | Hex | Role |
|-------|-----|------|
| `bg-background` | `#242424` | Page background |
| `bg-surface` | `#2E2E2E` | Card surfaces |
| `bg-brand-accent` | `#006F4A` | Emerald brand accent |
| `text-text-primary` | `#FFFFFF` | Primary text |
| `text-text-secondary` | `#A1A1AA` | Muted / supporting text |

Defined in the `@theme inline` block in `src/app/globals.css` — no `tailwind.config.js` needed.

### Typography

| Role | Font | Tailwind class |
|------|------|---------------|
| Body | Bricolage Grotesque | `font-sans` |
| Headings / Display | Syne | `font-display` |
| Decorative | Caveat | `font-hand` |

Loaded via `next/font/google` in `layout.tsx`, exposed as CSS variables.

---

## Animation Patterns

```tsx
// Scroll reveal (all sections)
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Curtain headline reveal (Hero)
// Parent: overflow-hidden | Child: y "105%" → 0, staggered per word
<div className="overflow-hidden">
  <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} />
</div>

// Awwwards card hover lift (Portfolio)
whileHover={{ y: -4 }}

// Left accent bar — CSS only, compositor thread
"origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[350ms]"

// Seamless marquee (TechStack)
animate={{ x: ["0%", "-50%"] }}  // array duplicated in data

// Mouse-tracking gradient (Services MagicCard)
useMotionValue + useMotionTemplate → background radial-gradient
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/aether` | Aether mobile app — standalone indigo/purple design |
| `/portfolio` | Full portfolio listing |
| `/projects` | Project detail pages |
| `/privacy/aether` | Privacy policy for Aether |

> The `/aether` route has its own design system (indigo/purple). Do not import shared section components into it.

---

## Page Transitions

`CurtainLoader` listens for a custom `route-transition-start` DOM event.
`TransitionLink` dispatches that event before calling `router.push()`.
Use `TransitionLink` instead of Next.js `<Link>` for internal navigations.

---

## Deployment

Push to `main` — Vercel auto-deploys.

```bash
# Manual deploy via Vercel CLI
vercel --prod
```

---

## License

[MIT](./LICENSE)

---

<div align="center">
  <strong>WUSLA Team</strong> &nbsp;·&nbsp; <a href="mailto:wuslateam@gmail.com">wuslateam@gmail.com</a> &nbsp;·&nbsp; <a href="https://wusla.com">wusla.com</a>
</div>
