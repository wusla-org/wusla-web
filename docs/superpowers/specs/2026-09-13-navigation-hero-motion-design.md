# WUSLA navigation and hero motion design

## Scope

This change evolves the global navigation and homepage opening. It does not alter routes, navigation labels, footer structure, project data, or non-homepage page layouts.

## Design read

WUSLA is an independent software company for technically minded buyers. The interface should feel precise, inventive, and accountable. It should not resemble a generic SaaS dashboard or an effects-heavy agency template.

- Design variance: 8
- Motion intensity: 7
- Visual density: 4
- Brand anchor: uppercase WUSLA wordmark, emerald, real shipped software

## Navigation

Replace the invented lowercase `wusla` plus arrow treatment with a live-text uppercase `WUSLA` wordmark based on the browser-tab asset. No arrow is part of the logo.

Keep the existing route labels and `/start` destination. Present `Start a project` without an icon. Its hover state uses a controlled directional color fill and tactile press response.

The desktop header remains a single-line rail. It becomes visually denser after the first part of the page scrolls: the background gains translucency, the border strengthens, and the row compresses slightly. Navigation links use restrained underline motion. The mobile menu opens as a full-width layer with staggered links, clear Menu/Close labels, keyboard Escape support, and initial focus placement.

## Hero

Retain the approved message: `Anyone can generate. We make it worth shipping.` Replace the comparison slider with a release-focused composition made from a real WUSLA project image.

The initial viewport contains the headline, one concise explanation, the primary and proof actions, and the project visual. The media sits in an asymmetric crop rather than a boxed application mockup.

On entry, the two headline lines reveal in sequence and the project visual resolves from a clipped crop. As the visitor scrolls, the copy recedes while the media crop opens and moves toward the proof section. This transition communicates the journey from statement to evidence.

Desktop pointer movement may create a very small image shift. It must not use React/Vue render state and must stop on pointer leave. Touch devices receive a static visual.

## Homepage motion

- Proof media receives a scroll-linked crop and subtle image drift.
- Proof decisions enter in short sequence, preserving reading order.
- The service answer remains sticky on wide screens while the service choices remain directly interactive.
- Service media crossfades with a small directional shift.
- The final CTA reveals as two coordinated lines, followed by its action.

Every motion communicates hierarchy, progression, feedback, or state. All transforms use transform/opacity where practical. `prefers-reduced-motion` receives the complete content without spatial animation.

## Responsive behavior

Below 900px, the hero becomes a single-column flow and all pinned or pointer-reactive behavior is removed. The media uses a landscape crop on tablets and a taller crop on phones. The project CTA remains visible in the first viewport on common mobile sizes.

## Validation

- Logo has no arrow and reads `WUSLA`.
- Navbar project CTA contains no icon.
- Desktop and mobile navigation remain keyboard operable.
- Header, hero, proof, services, and CTA visibly animate when reduced motion is not requested.
- No horizontal overflow at 360, 390, 768, 1366, 1920, and 3440 pixels.
- Existing route, theme, no-JavaScript, and contact tests continue to pass.
- No deployment is performed.
