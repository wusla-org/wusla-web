# WUSLA product-company website redesign

## Purpose

Rebuild the public website so WUSLA reads as a software and technology company, not a freelance web-design service. WUSLA has two connected practices:

1. It acts as a product-minded technology team for other companies.
2. It develops its own software products through a private product lab.

The site must make both practices easy to understand without revealing the names, features, roadmap, screenshots, or release dates of confidential products.

## Audience and conversion goal

Primary visitors are founders, businesses, and teams looking for a trusted technology partner. Secondary visitors are prospective collaborators and people interested in WUSLA's future products.

The primary conversion is an enquiry through the existing contact form. The site should guide visitors from a clear company definition to relevant capabilities, proof of public work, and a single consistent "Start a conversation" action.

## Brand and visual direction

WUSLA will use a calm, high-trust, software-native visual language inspired by the clarity of product companies such as Apple, Notion, and Zoho, without copying their interfaces.

- Theme: refined light interface with deep evergreen as the one brand accent.
- Typography: crisp sans-serif display and body hierarchy with a mono utility face for restrained metadata only.
- Layout: spacious, asymmetric at desktop where it improves hierarchy, and deliberately single-column on mobile.
- Shape system: restrained, consistent radii and thin structural borders. Cards are used only where they communicate grouping or interaction.
- Motion: subtle entry and interaction feedback that explains hierarchy or state. All animation respects reduced-motion preferences.
- Visuals: editorial, product-company imagery or abstractions. Do not use fake application screenshots, fictional metrics, or fictional product details.

## Information architecture

The existing public routes remain in place to preserve discoverability and inbound links.

### Home

1. **Hero** - Define WUSLA as a technology team for ambitious companies, with a brief reference to its private product work and one primary contact action.
2. **What we create** - Explain web platforms, mobile applications, desktop software, product design, and technical systems through outcomes rather than a menu of commoditised services.
3. **Private product lab** - Establish that multiple applications are being developed privately. Present high-level areas of exploration without product names, screenshots, launch promises, or fabricated cards.
4. **Working with WUSLA** - Make the engagement model clear: WUSLA can join from idea, improve an existing product, or work alongside an internal team. Show a focused path from direction to launch and iteration.
5. **Selected work** - Display only real, public projects and link to the portfolio route.
6. **Why WUSLA** - Explain the ownership mindset, systems thinking, direct communication, and care for durable software.
7. **Contact** - Keep the established working contact form and make it the final conversion point.

### Portfolio and projects

Keep the existing `/portfolio` and `/projects` routes. Reframe their headings, metadata, and intro copy so they support the new product-company story. Only show public, verifiable work or public engineering activity.

## UX requirements

- Desktop navigation stays on one line, has a visible current location, and collapses into a keyboard-accessible mobile menu.
- Every primary action expresses the same intent and uses the same label: "Start a conversation."
- Hero copy remains readable inside the initial viewport and puts the primary action above the fold.
- Each section has one job. Content is short, scannable, and does not repeat service-card layouts.
- Buttons, form controls, links, focus states, errors, and submission feedback remain accessible with WCAG AA contrast at minimum.
- Multi-column layouts have intentional tablet and mobile fallbacks. Touch targets are at least 44px when interactive.
- Content and images reserve their space to avoid layout shifts.
- Loading, success, and error states for the contact flow are clear and contextual.

## SEO, AIO, and GEO requirements

SEO, AI-answer-engine optimisation (AIO), and generative-engine optimisation (GEO) are handled through accurate, structured, crawlable content, not keyword stuffing.

- Establish a consistent WUSLA entity definition across titles, descriptions, structured data, organisation details, and visible copy.
- Use page-specific `useSeoMeta` values, canonical URLs, Open Graph metadata, and descriptive image alternative text.
- Retain route slugs and public project URLs.
- Strengthen valid structured data for Organization, WebSite, Service, ContactPoint, and FAQ content where those claims are visible on the page.
- Add an FAQ that answers what WUSLA does, who it works with, what the private product lab means, and how to start a conversation.
- Use semantic landmarks and heading order so search engines and answer engines can extract reliable answers.
- Keep the product-lab copy explicitly confidential and future-facing. Never claim that unreleased products are publicly available.

## Technical implementation boundaries

- Use the existing Nuxt 4, Vue 3, Tailwind CSS, GSAP, and Lucide setup. Do not introduce a second design system.
- Preserve the contact API contract, real portfolio data, canonical domain, and deployed routes.
- Build reusable components with isolated responsibilities, such as hero, capabilities, product lab, process, and FAQ.
- Preserve existing accessibility and SEO wins while replacing copy and presentation.
- Use CSS variables in the existing token system for visual consistency.
- Do not use window scroll listeners. Existing GSAP and reveal patterns must be cleaned up correctly and respect reduced motion.

## Verification

Before delivery:

1. Run lint and production build.
2. Check desktop and mobile navigation, anchors, links, and contact form states.
3. Test at narrow mobile, tablet, desktop, and large desktop breakpoints.
4. Verify keyboard navigation, visible focus, color contrast, reduced motion, and responsive layout.
5. Inspect generated metadata, robots, sitemap, canonicals, and structured-data validity.
6. Re-read every visible string for clarity, factual accuracy, confidentiality, and product-company positioning.
