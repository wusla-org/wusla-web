# WUSLA Start Page Redesign

## Purpose

Replace the existing technical configurator with a focused project enquiry experience. The page should help a serious visitor explain the opportunity while making WUSLA feel like an independent software company and close technical partner, not a SaaS vendor or development marketplace.

## Experience direction

The page is an editorial "project letter" split into two connected surfaces. A deep emerald introduction establishes the tone and keeps the enquiry progress visible. A warm paper surface holds one clear question at a time. The geometry is sharp, the typography is large, and motion is used only to explain progression and response.

Design variance is 8, motion intensity is 6, and visual density is 3. The page uses WUSLA's emerald palette throughout, with no gradients, glass panels, technical diagrams, generated performance claims, price calculator, availability claims, or reused imagery from the previous screen.

## Questions

1. What are you trying to create or improve? Required long-form answer.
2. What kind of work is this? Required choice between a new product, an existing product, a difficult technical problem, or an uncertain starting point.
3. Where is the work today? Required choice between early idea, designs in progress, working product, or rebuild and scale.
4. When would you like to begin? Optional choice, with an optional free-form investment range.
5. Who should WUSLA reply to? Required name and work email, with optional company and reference link.

The detailed budget and technical architecture are intentionally deferred. WUSLA should understand the problem before prescribing implementation.

## Interaction

- One question is active at a time.
- A semantic progress list allows revisiting completed questions.
- Each question enters and exits with a restrained directional transition.
- Selection rows provide hover, focus, selected, and pressed feedback.
- Submission has idle, sending, success, and error states.
- Reduced-motion preferences remove animated transitions.
- Mobile collapses the split layout into a compact introduction followed by the active question.

## Data and submission

The page keeps the existing `/api/contact` integration. Answers are converted into a readable plain-text project brief before submission. No private answer is added to the URL or exposed as decorative page content.

## Accessibility and SEO

Every question uses native fieldset, legend, label, input, textarea, and radio semantics. Keyboard focus is visible. Status changes use an ARIA live region. All meaningful copy is live HTML text. The route remains `/start`, with a specific title, description, and canonical URL inherited from the global site configuration.
