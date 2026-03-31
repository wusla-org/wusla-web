# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint check
```

No test suite is configured.

## Architecture

**Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lenis

### Pages & Routes

- `/` — Main marketing homepage (`src/app/page.tsx`)
- `/portfolio` — Full portfolio page, client-side filtered by category
- `/projects` — Projects listing
- `/aether` — Aether product page (with assets in `public/assets/aether/`)
- `/privacy/aether` — Privacy policy for Aether

### Component Architecture

All section components live in `src/components/` and are assembled in `src/app/page.tsx`:

- **`CurtainLoader`** — Full-screen page transition overlay (fires/listens for `route-transition-start` custom event, blocks scroll during load)
- **`SmoothScroll`** — Mounts Lenis smooth scroll globally (render-null client component in root layout)
- **`TransitionLink`** — Wrapper around Next.js `Link` that dispatches `route-transition-start` before navigation
- **`MouseSpotlight`** — Cursor-following radial gradient effect
- **`Parallax`** — Scroll-based parallax utility

### Styling System

Tailwind CSS 4 with custom tokens defined in `src/app/globals.css` via `@theme inline`:

- **Background**: `#242424` (charcoal) — dark-only design, no light mode
- **Accent**: `#006F4A` (deep emerald) — `brand-accent` / `text-accent`
- **Fonts**: `--font-sans` (Inter), `--font-display` (Oswald), `--font-hand` (Caveat)
- Custom utility: `.container-custom` (max-width 1280px, responsive padding)
- Custom utility: `.text-stroke`, `.text-stroke-accent` for outlined text

Font variables are loaded in `layout.tsx` via `next/font/google` and applied as CSS variables on `<html>`.

### Data

- **Portfolio projects**: `public/data/portfolio.json` — fetched client-side via `fetch('/data/portfolio.json')` in the portfolio page
- **GitHub repos**: `src/utils/github.ts` — fetches from `github.com/users/wusla-org/repos` at runtime

### Key Conventions

- Components that need browser APIs or interactivity use `"use client"` — server components are the default
- Framer Motion `motion.*` components and `AnimatePresence` are used throughout for animations
- Page-level animation pattern: `initial`/`animate` for mount, `whileInView` + `viewport={{ once: true }}` for scroll reveals
- `src/app/layout.tsx` injects Organization JSON-LD schema; `src/app/page.tsx` injects WebSite schema
- `next.config.ts` allows remote images from `images.unsplash.com` only
