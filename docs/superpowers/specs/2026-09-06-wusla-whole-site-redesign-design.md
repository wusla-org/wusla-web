# WUSLA Whole-Site Redesign

## Purpose

Rebuild WUSLA as an independent software-company website. It must explain two equal truths: WUSLA develops original applications, and it works as a focused product and engineering team for other companies. The site must not resemble a SaaS landing page, a freelancer portfolio, or a template-based web agency.

## Reference Principles

- Panic: one company can make several unrelated products while keeping a coherent company identity.
- Metalab: restrained product confidence and readable work presentation.
- ustwo: company partnership explained through people and outcomes, not a service menu.
- AREA 17 and Build in Amsterdam: minimal interface, editorial pacing, and project-led storytelling.

These sites are reference points only. WUSLA will not copy their layouts, copy, imagery, or identity.

## Brand System

- Primary color: deep emerald green.
- Supporting colors: pale mint, off-white, and near-black.
- Typography: one strong sans-serif display face with a practical body face and monospace only for useful metadata.
- Materials: flat color, crisp rules, purposeful type scale, and generous breathing room.
- Exclusions: gradients, glass panels, fake product dashboards, stock office imagery, generic three-card feature grids, fabricated metrics, and decorative AI imagery.

## Information Architecture

1. **Home**: concise company introduction, current product status, company partnership proposition, selected public work, and contact.
2. **Company**: who WUSLA partners with, what the team can take on, and how an engagement moves from problem to working software.
3. **Applications**: a deliberate archive for the three private applications. Each is described honestly as in development, without invented features, screens, names, audiences, or release dates.
4. **Work**: a public project index with real project names, categories, descriptions, links, and future case-study expansion points.
5. **Contact**: a clear inquiry route with direct email and a usable form.

## Home Page Narrative

1. **Opening**: emerald-led visual composition. Establish WUSLA as an independent software company that creates original applications and works with companies.
2. **Company definition**: state the dual model plainly, without agency or SaaS language.
3. **Applications**: introduce three separate private products as real work in progress. The section answers why no product detail is public yet.
4. **Company work**: show the kinds of high-value product and engineering work WUSLA can take on, with outcome-driven language.
5. **Public work**: link to real publicly shareable projects.
6. **Contact**: invite an informed conversation without forcing a sales funnel.

## Interaction and Responsive Rules

- A fixed, simple emerald header presents Home, Company, Applications, Work, and Contact.
- Desktop navigation uses direct routes; mobile uses an accessible full-width menu.
- Hover movement is limited to buttons, links, and work entries. It should confirm interaction, not decorate the page.
- All motion respects reduced-motion preferences.
- Layouts collapse to a single readable column on mobile; no hidden essential content or horizontal overflow.
- Buttons and form controls maintain WCAG AA contrast.

## Content Rules

- All visible copy uses direct, human language.
- Private product status is transparent rather than vague or over-marketed.
- Public work uses only verified existing project data.
- No unsupported claims, outcomes, client counts, testimonials, technical specifications, or release promises.

## Technical Boundaries

- Retain Nuxt routes, the existing contact API, genuine project data, canonical URL, Organization schema, sitemap, robots, and accessible form semantics.
- Replace shared layout elements and page compositions as a unified visual system.
- Keep content and visual components separated so future product launches can add an application page without changing site-wide components.

## Verification

- Lint and production build must pass.
- Verify Home, Company, Applications, Work, and Contact routes respond successfully.
- Check desktop and mobile navigation and contact submission states.
- Inspect visible strings for inaccurate, generic, or AI-sounding copy.
