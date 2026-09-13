# WUSLA: product confidence

Approved in conversation on 12 September 2026. Implement the existing Nuxt site around clear client outcomes, early project evidence, and the studio's emerald identity.

## Scope

Homepage: direct product proposition, authentic work imagery, client problems, delivery process, original applications, FAQ, project invitation. Shared navigation links to Work, Capabilities, Applications, Company, and Start a project. Refresh supporting pages and add project detail routes using existing verified project descriptions. Preserve the current enquiry integration, adding a review step and dependable error handling. Do not invent outcomes, customer quotes, team members, or product details.

## Design

Manrope display and body; IBM Plex Mono metadata. Pale mint canvas, forest ink, emerald actions. System light/dark themes with semantic tokens. Maximum 1400px content, readable mobile single-column flow, responsive typography and comfortable touch controls. Editorial asymmetry with genuine project screenshots. Supporting generated sculpture is conceptual artwork, never product evidence. Motion is subtle progressive enhancement; the content remains visible without JavaScript.

## Implementation sequence

1. Capture genuine portfolio assets and generate one supporting studio image.
2. Implement tokens, shared navigation, footer, project previews, and page primitives.
3. Replace homepage and supporting pages; add capabilities and project details.
4. Improve enquiry review, server validation, and cache boundaries.
5. Build, lint, and verify routes, responsive layouts, keyboard navigation, theme parity, and enquiry success/error states using intercepted requests. Do not send test enquiries.

## Acceptance

All advertised routes work; all enquiry CTAs lead to /start. Existing portfolio facts remain the source of truth. Screenshots are sized and compressed. Marketing routes are prerendered; contact responses are uncached. Mobile has no horizontal overflow. Reduced-motion and no-JavaScript views retain content. Performance budgets are targets to measure, not claims to publish: initial route JavaScript 150KB compressed, initial transfer 600KB, desktop cached LCP 1s and mobile field LCP 2s. Field results require post-deployment traffic.
