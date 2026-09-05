<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STAGE } from "./heroSource";
import CodePanel from "./CodePanel.vue";
import PreviewPanel from "./PreviewPanel.vue";

gsap.registerPlugin(ScrollTrigger);

const trackEl = ref<HTMLElement | null>(null);
const isDesktop = ref(true);
const reducedMotion = ref(false);
const scrubbed = computed(() => isDesktop.value && !reducedMotion.value);

const dockStart = STAGE.dockStart;

let ctx: gsap.Context | null = null;
let widthMq: MediaQueryList | null = null;
let reduceMq: MediaQueryList | null = null;

function setProgress(p: number) {
  trackEl.value?.style.setProperty("--p", p.toFixed(4));
}

function setupAnimation() {
  ctx?.revert();
  if (!trackEl.value) return;

  ctx = gsap.context(() => {
    if (reducedMotion.value) {
      setProgress(1);
      return;
    }

    if (scrubbed.value) {
      ScrollTrigger.create({
        trigger: trackEl.value,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => setProgress(self.progress),
      });
    } else {
      const state = { p: 0 };
      setProgress(0);
      gsap.to(state, {
        p: 1,
        duration: 2.6,
        delay: 0.35,
        ease: "power2.out",
        onUpdate: () => setProgress(state.p),
      });
    }
  }, trackEl.value);
}

onMounted(() => {
  widthMq = window.matchMedia("(min-width: 768px)");
  reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  isDesktop.value = widthMq.matches;
  reducedMotion.value = reduceMq.matches;

  const onWidthChange = () => {
    isDesktop.value = widthMq!.matches;
    setupAnimation();
  };
  const onReduceChange = () => {
    reducedMotion.value = reduceMq!.matches;
    setupAnimation();
  };
  widthMq.addEventListener("change", onWidthChange);
  reduceMq.addEventListener("change", onReduceChange);

  nextTick(setupAnimation);

  onUnmounted(() => {
    widthMq?.removeEventListener("change", onWidthChange);
    reduceMq?.removeEventListener("change", onReduceChange);
    ctx?.revert();
  });
});
</script>

<template>
  <section
    ref="trackEl"
    class="hero-track relative"
    :style="{ height: scrubbed ? '300vh' : 'auto', minHeight: scrubbed ? undefined : '100dvh', '--p': reducedMotion ? 1 : 0 }"
  >
    <div class="stage-viewport flex items-center" :class="scrubbed ? 'sticky top-0' : 'relative pt-32 pb-24'" :style="scrubbed ? {} : {}">
      <div class="container-custom w-full">
        <div class="columns-row flex items-center">
          <div class="editor-col" aria-hidden="true">
            <CodePanel />
          </div>
          <div style="flex: 1; min-width: 0">
            <PreviewPanel />
          </div>
        </div>
      </div>

      <div v-if="scrubbed" class="scroll-hint" aria-hidden="true">
        <span style="color: var(--color-text-muted)">scroll to build</span>
        <span class="hint-arrow" style="color: var(--color-accent)">↓</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-track {
  --editor-t: clamp(0, calc((var(--p) - v-bind(dockStart)) / calc(1 - v-bind(dockStart))), 1);
}

.stage-viewport.sticky {
  height: 100vh;
  overflow: hidden;
}

.columns-row {
  column-gap: calc(40px * (1 - var(--editor-t)));
}

.editor-col {
  width: calc(48% * (1 - var(--editor-t)));
  /* Fixed, content-independent height: white-space:pre-wrap text inside would
     otherwise reflow character-by-character as this column shrinks toward 0
     width, growing the box to over 1000px tall. Desktop masks this via the
     sticky viewport's own height clip; mobile (no sticky ancestor) does not,
     so it must be bounded here directly. */
  height: clamp(18rem, 44vh, 27rem);
  flex-shrink: 0;
  overflow: hidden;
}

.scroll-hint {
  pointer-events: none;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: clamp(0, calc(1 - var(--p) / 0.05), 1);
}

.hint-arrow {
  display: inline-block;
  animation: hint-bounce 1.6s ease-in-out infinite;
}

@keyframes hint-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}
</style>
