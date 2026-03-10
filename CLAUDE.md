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

The main landing page (`src/app/page.tsx`) is composed entirely of section components from `src/components/`. Current section order:

```
Navbar → Hero → Stats → Services → TechStack → Portfolio → About → Testimonials → Process → FAQ → Contact → Footer
```

Two infrastructure components run globally from `RootLayout` (`src/app/layout.tsx`): `CurtainLoader` (page transition overlay) and `SmoothScroll` (Lenis instance).

### Additional Routes

- `/aether` — Standalone product landing page for the Aether mobile app. Uses its own indigo/purple design system, **not** the main charcoal/emerald brand. Has its own nav and footer; do not import shared section components here.
- `/portfolio`, `/projects` — Additional pages.

### Typography System

Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables consumed in `globals.css`:

| Purpose | Font | CSS Variable | Tailwind Utility |
|---------|------|-------------|-----------------|
| Body text | Bricolage Grotesque | `--font-bricolage` → `--font-sans` | `font-sans` |
| Headings/display | Syne | `--font-syne` → `--font-display` | `font-display` |
| Decorative accents | Caveat | `--font-caveat` → `--font-hand` | `font-hand` |

### Color System

Colors are defined in the `@theme inline` block in `globals.css`. Key tokens:
- `bg-background` / `bg-surface` — `#242424` / `#2E2E2E` charcoal
- `text-brand-accent` / `bg-brand-accent` — `#006F4A` emerald
- `text-text-primary` / `text-text-secondary` — white / `#A1A1AA`

### Animation Patterns

All interactive section components are `"use client"`. Established Framer Motion patterns:

- **Scroll reveals**: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- **Conditional elements**: `AnimatePresence` wrapping (FAQ accordion, mobile menu, overlays)
- **Scroll-driven motion**: `useScroll` + `useTransform` (Portfolio horizontal scroll, Parallax component)
- **Mouse-tracking gradient**: `useMotionValue` + `useMotionTemplate` (Services MagicCard)
- **Count-up animation**: `animate()` from Framer Motion with `useInView` (Stats)
- **Marquee**: `animate={{ x: ["0%", "-50%"] }}` with a duplicated array for seamless loop (TechStack)

### Page Transitions

`CurtainLoader` listens for a custom `route-transition-start` DOM event. `TransitionLink` dispatches that event before calling `router.push()`, creating a curtain-drop effect between pages. Use `TransitionLink` instead of Next.js `Link` for internal navigations that should trigger the loader animation.

### Structured Data (JSON-LD)

SEO schemas live in two places:
- `layout.tsx` — `Organization` + `ProfessionalService` schemas
- `page.tsx` — `WebSite` + `FAQPage` schemas

These use `dangerouslySetInnerHTML` with hardcoded constant objects (not user input). The installed security hook blocks the `Write` tool on any file whose content contains that string. **Use `Bash` with a heredoc to write `layout.tsx` and `page.tsx`** (and this CLAUDE.md file itself).

### Utility

`src/utils/github.ts` exports `fetchRepositories()` for the GitHub API (`wusla-org`). Currently commented out in Portfolio.tsx.

### Images

`next.config.ts` only allows remote images from `images.unsplash.com`. All other static assets live in `public/assets/`.
