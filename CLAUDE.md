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

**Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React

### Pages & Routes

- `/` — Main marketing homepage (`src/app/page.tsx`) — fully migrated to current design system
- `/portfolio` — Portfolio listing page (`src/app/portfolio/page.tsx`) — **NOT migrated**: uses old design system CSS classes (`bg-white-pure`, `text-teal-accent`, `grid-asymmetric`, `container-fluid`, etc.) that are not defined in `globals.css`. Renders with broken styles.
- `/projects` — Projects listing (`src/app/projects/page.tsx`)

### Homepage Component Assembly

`src/app/page.tsx` assembles these server components in order:
`Navbar` → `Hero` → `Services` → `WhyUs` → `Work` → `Contact` → `Footer`

All live in `src/components/`. The `Work` component has its projects hardcoded inline (not from `portfolio.json`).

### Styling System

Tailwind CSS 4 with all custom design tokens defined in `src/app/globals.css` via `@theme inline`:

**Color variables** (use as `var(--color-*)` in inline styles, not as Tailwind classes):
- `--color-bg: #070C10` — page background
- `--color-bg-elevated: #0D1520` — section backgrounds (e.g. Work section)
- `--color-bg-card: #111D2B` — card/terminal backgrounds
- `--color-border: #1A2A3A` / `--color-border-bright: #253D52`
- `--color-emerald: #00D084` — primary brand accent
- `--color-emerald-dark: #00A86B` — hover state for emerald
- `--color-emerald-dim: rgba(0,208,132,0.10)` — subtle emerald tint
- `--color-text: #E2EBF0` / `--color-text-muted: #4E6880`

**Font variables** (loaded in `layout.tsx` via `next/font/google`):
- `--font-display: var(--font-syne)` — Syne, for headings (`font-display` utility class)
- `--font-body: var(--font-dm-sans)` — DM Sans, for body text (`font-body` utility class)

**Layout utilities** (defined in `globals.css`):
- `.container-custom` — max-width 1200px, responsive padding
- `.section-label` — small uppercase emerald label with trailing line, used for section numbers
- `.glow-emerald` / `.glow-emerald-sm` — box-shadow glow utilities

**Dot-grid texture**: Applied via `body::before` as a fixed full-screen pseudo-element. All page sections need `position: relative; z-index: 1` to render above it (already set for `header`, `footer`, `section`, `main`).

### Interaction Pattern

Hover states on interactive elements are applied via `onMouseEnter`/`onMouseLeave` inline handlers mutating `element.style.*` — Tailwind `hover:` classes are not used because Tailwind 4 doesn't have access to the CSS variable values at compile time.

### Data

- **Portfolio data**: `public/data/portfolio.json` — `Project[]` and `categories` array, fetched client-side in `/portfolio`
- **GitHub repos**: `src/utils/github.ts` → `fetchRepositories()` — hits GitHub API for `wusla-org`, returns top 6 by last-updated

### Key Conventions

- All components using browser APIs or state are `"use client"` — default to server components
- Framer Motion pattern: `initial`/`animate` for mount animations; `whileInView` + `viewport={{ once: true }}` for scroll reveals
- Typography sizing uses `clamp()` for fluid responsive text (e.g. `fontSize: "clamp(3rem, 7vw, 6rem)"`)
- `next.config.ts` allows remote images from `images.unsplash.com` only
