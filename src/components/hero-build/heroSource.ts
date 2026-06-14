/**
 * Single source of truth for the Scroll-Build Hero.
 *
 * Everything the experience does is driven by one number — `progress` (0 → 1).
 * On desktop that number is the scroll position; on mobile it's a timed
 * playback. The constants below map ranges of that number to what the user
 * sees, so the typing editor and the assembling hero stay in sync without
 * magic values scattered across the components.
 */

/** The code that "types itself" in the editor — a clean read of the real hero. */
export const HERO_CODE = `export default function Hero() {
  return (
    <section className="hero">
      <span className="label">
        Software team on contract
      </span>

      <h1>
        Your dedicated
        software team.
      </h1>

      <p>
        WUSLA plugs in as your engineering
        team — mobile, web, and desktop
        products. The code is 100% yours.
      </p>

      <div className="actions">
        <a className="primary">Start a project</a>
        <a className="ghost">See our work</a>
      </div>
    </section>
  );
}`;

/**
 * Top-level progress breakpoints.
 * - typeEnd:   code finishes typing
 * - dockStart: editor begins sliding away to reveal the finished hero
 */
export const STAGE = {
  typeEnd: 0.55,
  dockStart: 0.82,
} as const;

/**
 * Per-block reveal windows `[start, end]` in progress space. Each preview block
 * fades/rises in over its window, roughly tracking when its code gets typed, and
 * because the whole thing is scrubbed it dismantles in reverse on scroll-up.
 */
export const REVEAL = {
  label:     [0.06, 0.15],
  headlineA: [0.14, 0.25],
  headlineB: [0.20, 0.31],
  paragraph: [0.31, 0.44],
  actions:   [0.44, 0.55],
  trust:     [0.53, 0.62],
  // HeroVisual appears as the editor collapses, not during mid-typing
  visual:    [0.82, 0.98],
} as const;

/** Shared easing — matches the site's `--ease-out` cubic-bezier. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
