# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run generate  # Static generation
npm run preview   # Preview the production build locally
npm run deploy    # Build and deploy to Cloudflare Workers (wrangler deploy)
npm run lint      # ESLint check
```

No test suite is configured.

## Architecture

**Stack**: Nuxt 4 (Vue 3), TypeScript, Tailwind CSS 4, GSAP, lucide-vue-next.
Deployed to Cloudflare Workers (`nitro: { preset: "cloudflare_module" }`).

**Positioning**: WUSLA is a product studio — it builds its own software
products first, and takes on select client work (mobile, web, desktop,
UI/UX) as a secondary offering. Copy across the site should reflect that:
avoid "dedicated team / monthly contract / freelance agency" framing.

### Pages & Routes

- `/` — homepage (`app/pages/index.vue`), assembles: `HeroBuild` → `Products`
  → `Services` → `WhyUs` → `Work` → `Contact`. `Navbar` and `Footer` come
  from `app/layouts/default.vue`.
- `/portfolio` — `app/pages/portfolio.vue`, fetches from `content/projects.ts`.
- `/projects` — `app/pages/projects.vue`, fetches live GitHub repos for the
  `wusla-org` org via `app/utils/github.ts`.

All homepage section components live in `app/components/`; the hero's
scroll-driven sub-components live in `app/components/hero/`.

### Styling System

Tailwind CSS 4 with all custom design tokens defined in
`app/assets/css/main.css` via `@theme inline` — there is no
`tailwind.config.ts` or `app.config.ts`, this file is the single source of
truth for colors, fonts, radii, shadows, and easing curves.

**Palette** — warm, editorial paper theme (light):
- `--color-bg: #FAFAF9` / `--color-bg-elevated: #F3F0EA` / `--color-bg-card: #FFFFFF`
- `--color-border: #E3DED5` / `--color-border-bright: #D6D3D1`
- `--color-ink: #1C1917` — structural dark (hero editor panel, primary buttons)
- `--color-accent: #1A4D3C` — deep evergreen, sampled from the logo
  (`public/assets/wusla_square.png`); `--color-accent-dark: #123B2D` for
  hover/pressed states; `--color-accent-dim: rgba(26, 77, 60, 0.08)` for tints
- `--color-text: #0C0A09` / `--color-text-muted: #6B6560` / `--color-text-faint: #A39C92`

Use `var(--color-*)` in inline `style` attributes, not as Tailwind color
classes — Tailwind 4 can't resolve these CSS variables at compile time.
Hardcoded `rgba(26, 77, 60, ...)` literals appear in a handful of places
(glow shadows, gradients, the hero code-panel syntax highlighter) where a
CSS variable can't be used directly inside a shadow/gradient value — if the
accent color ever changes again, grep for `rgba(26, 77, 60` in `app/` in
addition to updating the tokens in `main.css`.

**Layout utilities**: `.container-custom` (max-width 1240px, responsive
padding), `.section-label` / `.mono-label` (small uppercase muted label,
mono font), `.surface` (the one card primitive — bg + border + radius +
shadow), `.glow-accent` / `.glow-accent-sm`, `.lift` (hover translateY +
shadow), `.field` (form input styling).

### Interaction Pattern

Hover states are applied via inline `style` + `:style` bindings reacting to
Vue refs (or plain CSS `:hover` in `<style scoped>` blocks referencing
`var(--color-*)`) — not Tailwind `hover:` classes, for the same
compile-time-resolution reason as above.

### Animation

`app/composables/useScrollTimeline.ts` wraps GSAP + ScrollTrigger for
scroll-driven reveals; `Reveal.vue` is the general-purpose wrapper component
used by most sections (`fromTo(opacity/y)` on enter, `toggleActions: "play
none none reverse"`). The homepage hero (`HeroBuild.vue` +
`hero/heroSource.ts` + `CodePanel.vue` + `PreviewPanel.vue` +
`HeroVisual.vue`) is a bespoke scroll-scrubbed sequence driven by a single
`--p` (progress, 0→1) CSS custom property — see the doc comment at the top
of `heroSource.ts` for how the typing/reveal/dock stages are defined.

### Data

- **Client project data**: `content/projects.ts` — real shipped work,
  consumed by both `Work.vue` (homepage) and `app/pages/portfolio.vue`. No
  placeholder/fake entries — keep it that way.
- **Products section**: `app/components/Products.vue` is intentionally a
  single honest "in development" panel, not fake product cards — there are
  no shipped owned-products yet. Replace it with real product data once
  something is ready to show; don't add placeholder product names/links.
- **GitHub repos**: `app/utils/github.ts` → `fetchRepositories()` hits the
  GitHub API for the `wusla-org` org.
- **Contact form**: `app/components/Contact.vue` posts to
  `server/api/contact.post.ts`, which sends via the Resend REST API
  (`RESEND_API_KEY` from `event.context.cloudflare.env`) to
  `wuslateam@gmail.com`.

### Key Conventions

- All interactive components are Vue SFCs with `<script setup>`; no
  server/client split like Next.js — Nuxt handles SSR automatically.
- Typography sizing uses `clamp()` for fluid responsive text.
- Canonical domain is `https://wusla.co` (`nuxt.config.ts` `site.url`,
  `app/app.vue` `BASE_URL`, `package.json` `homepage`) — keep these in sync
  if the domain ever changes again.
