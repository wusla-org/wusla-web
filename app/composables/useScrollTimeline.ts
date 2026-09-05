import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Ref } from "vue";

let registered = false;

function ensureRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

type ScrollTimelineSetup = (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void;

/**
 * Runs a GSAP setup function scoped to `scope`'s element once mounted (client-only,
 * SSR-safe), and reverts every tween/ScrollTrigger it created on unmount via
 * gsap.context(). Respects prefers-reduced-motion by skipping the setup entirely.
 */
export function useScrollTimeline(scope: Ref<HTMLElement | null | undefined>, setup: ScrollTimelineSetup) {
  onMounted(() => {
    if (!scope.value) return;
    ensureRegistered();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => setup({ gsap, ScrollTrigger }), scope.value);
    onUnmounted(() => ctx.revert());
  });
}
