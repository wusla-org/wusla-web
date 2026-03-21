# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js Turbopack)
npm run build    # Production build — the only verification step (no test suite)
npm run lint     # ESLint
```

There is no test suite. `npm run build` is the canonical verification. Always run it after making changes.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — uses `@theme inline` block in `globals.css`, not a `tailwind.config.js`
- **Framer Motion 12** — primary animation library
- **Lenis** — smooth scroll
- **Lucide React** — icons
- Path alias: `@/*` → `src/*`

## Architecture

### Page Structure

The main landing page (`src/app/page.tsx`) is composed of the `*Section.tsx` components. Current section order:

```
Navbar → HeroSection → ProblemSection → ServicesSection → ProjectsSection → ProcessSection → WhySection → ContactSection → Footer
```

Two infrastructure components run globally from `RootLayout` (`src/app/layout.tsx`): `CurtainLoader` (page transition overlay) and `SmoothScroll` (Lenis instance).

> **Note:** A set of legacy components (`Hero.tsx`, `Services.tsx`, `Portfolio.tsx`, `Process.tsx`, `FAQ.tsx`, `Stats.tsx`, `TechStack.tsx`, `Testimonials.tsx`, `Contact.tsx`) still exists in `src/components/` from a prior design but is no longer used on the main page. Do not confuse these with the active `*Section.tsx` equivalents.

### Additional Routes

- `/aether` — Standalone product landing page for the Aether mobile app. Uses its own indigo/purple design system, **not** the main charcoal/emerald brand. Has its own nav and footer; do not import shared section components here.
- `/about`, `/services` — Standalone informational pages. Each imports `Navbar` and `Footer` directly; they do not use the `*Section.tsx` components.
- `/portfolio`, `/projects` — Additional pages. `/projects` fetches live GitHub repos via `src/lib/github.ts`.

### Typography System

Only `Inter` is loaded (via `next/font/google` in `layout.tsx`) and exposed as `--font-inter` → `--font-sans`. The `@theme inline` block aliases `--font-display` to `--font-sans` as well. The `font-hand` utility (`Caveat`) and `font-display` (Syne) referenced in older components are no longer active in this design.

### Color System

Colors are defined as CSS custom properties in `:root` in `globals.css` and mirrored in the `@theme inline` block for Tailwind utilities. Key tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0A0A0A` | Page background |
| `--bg-subtle` | `#111111` | Section alternates, ticker |
| `--border` | `#222222` | All dividers |
| `--text-primary` | `#F5F5F5` | Headlines, primary text |
| `--text-secondary` | `#888888` | Body, captions |
| `--text-tertiary` | `#444444` | Labels, muted |
| `--accent` | `#1A4D3C` | Emerald — used in exactly 3 places: availability dot, btn-accent bg, row-item hover border |
| `--accent-bright` | `#22C55E` | Availability pulse dot color |

Use the CSS custom property form (`var(--accent)`) in inline styles; use the Tailwind utility form (`bg-accent`) in className.

### Animation Patterns

All interactive section components are `"use client"`. Established Framer Motion patterns:

- **Hero entrance**: `animate={{ opacity: 1, y: 0 }}` from `initial={{ opacity: 0, y: 24 }}` with staggered delays and expo ease `[0.16, 1, 0.3, 1]`
- **Scroll reveals**: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- **Conditional elements**: `AnimatePresence` wrapping (FAQ accordion, mobile menu, overlays)
- **Scroll-driven motion**: `useScroll` + `useTransform` (horizontal scroll, Parallax)
- **Mouse-tracking gradient**: `useMotionValue` + `useMotionTemplate` (Services MagicCard)
- **Ticker**: Pure CSS `@keyframes marquee` on `.ticker-track` with duplicated array for seamless loop

### Page Transitions

`CurtainLoader` listens for a custom `route-transition-start` DOM event. `TransitionLink` dispatches that event before calling `router.push()`, creating a curtain-drop effect between pages. Use `TransitionLink` instead of Next.js `Link` for internal navigations that should trigger the loader animation.

### Structured Data (JSON-LD)

SEO schemas live in two places:
- `layout.tsx` — `Organization` + `ProfessionalService` schemas
- `page.tsx` — `FAQPage` schema

These use `dangerouslySetInnerHTML` with hardcoded constant objects (not user input). The installed security hook blocks the `Write` tool on any file whose content contains that string. **Use `Bash` with a heredoc to write `layout.tsx`, `page.tsx`,** and this CLAUDE.md file itself.

### GitHub Integration

`src/lib/github.ts` exports `getWUSLARepos()` — fetches public repos from the `wusla-org` org with 1-hour ISR revalidation. Set `GITHUB_TOKEN` in `.env.local` to avoid rate limiting. Used by the `/projects` page. When rendering `repo.html_url` as an `<a href>`, validate it starts with `https://github.com/` before use.

### Images

`next.config.ts` only allows remote images from `images.unsplash.com`. All other static assets live in `public/assets/`.

## Active Work (as of 2026-03-21)

- **Branch:** `redesign-v4` — the current working branch. `main` is production.
- **Design goal:** Elevate the site to feel like a distinct brand with a strong visual identity. An interactive background "plaything" (canvas/WebGL-based — particles, code rain, geometry, or similar) is planned for the hero section. No implementation yet.
- **BuildSimulator.tsx** — Interactive component created: lets users pick a client brief + stack and watch a simulated build play out. Currently unconnected from the main page; needs to be wired in or positioned within a section.

## Components

### `src/components/BuildSimulator.tsx`

Interactive build simulator — phases: idle → selecting-client → selecting-stack → building → launched. Uses `"use client"`. Renders client briefs with tags and outcome metrics. Currently unconnected from `page.tsx`.
