<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { REVEAL, STAGE } from "./heroSource";
import HeroVisual from "./HeroVisual.vue";

const trust = ["Full code ownership", "Ships fast", "Limited client slots"];

function range(key: keyof typeof REVEAL) {
  const [start, end] = REVEAL[key];
  return { start, span: end - start };
}

const rLabel = range("label");
const rHeadlineA = range("headlineA");
const rHeadlineB = range("headlineB");
const rParagraph = range("paragraph");
const rActions = range("actions");
const rTrust = range("trust");
const dockStart = STAGE.dockStart;
const dockSpan = 1 - STAGE.dockStart;
</script>

<template>
  <div class="preview-row flex items-center">
    <div class="copy-col" style="flex: 1; min-width: 0">
      <div class="reveal-block mono-label mb-7" style="--t: var(--t-label)">Product studio</div>

      <h1 class="font-display mb-7 font-extrabold leading-[0.98]" style="font-size: clamp(2.6rem, 5.2vw, 5.4rem); color: var(--color-text)">
        <span class="reveal-block block" style="--t: var(--t-headlineA)">Your product</span>
        <span class="reveal-block block" style="--t: var(--t-headlineB)">&amp; technology partner.</span>
      </h1>

      <p class="reveal-block text-pretty mb-10 max-w-xl text-lg leading-relaxed" style="--t: var(--t-paragraph); color: var(--color-text-muted)">
        We design and build our own software products — and partner selectively with businesses who want the same craft applied to theirs.
      </p>

      <div class="reveal-block mb-12 flex flex-col gap-3.5 sm:flex-row" style="--t: var(--t-actions)">
        <NuxtLink to="#contact" class="cta-primary btn-press group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold">
          Start a project
          <ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </NuxtLink>
        <NuxtLink to="#work" class="cta-ghost btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold">
          See our work
        </NuxtLink>
      </div>

      <div class="reveal-block flex flex-wrap gap-x-6 gap-y-2" style="--t: var(--t-trust)">
        <span v-for="item in trust" :key="item" class="font-mono text-xs tracking-wide" style="color: var(--color-text-muted)">
          <span style="color: var(--color-accent)">◇</span>&nbsp; {{ item }}
        </span>
      </div>
    </div>

    <div class="visual-col hidden sm:block">
      <div class="visual-inner">
        <HeroVisual />
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-row {
  --t-label: clamp(0, calc((var(--p) - v-bind('rLabel.start')) / v-bind('rLabel.span')), 1);
  --t-headlineA: clamp(0, calc((var(--p) - v-bind('rHeadlineA.start')) / v-bind('rHeadlineA.span')), 1);
  --t-headlineB: clamp(0, calc((var(--p) - v-bind('rHeadlineB.start')) / v-bind('rHeadlineB.span')), 1);
  --t-paragraph: clamp(0, calc((var(--p) - v-bind('rParagraph.start')) / v-bind('rParagraph.span')), 1);
  --t-actions: clamp(0, calc((var(--p) - v-bind('rActions.start')) / v-bind('rActions.span')), 1);
  --t-trust: clamp(0, calc((var(--p) - v-bind('rTrust.start')) / v-bind('rTrust.span')), 1);
  --t-visual: clamp(0, calc((var(--p) - v-bind(dockStart)) / v-bind(dockSpan)), 1);
  column-gap: calc(40px * var(--t-visual));
}

.reveal-block {
  opacity: var(--t);
  transform: translateY(calc(16px * (1 - var(--t))));
}

.cta-primary {
  background-color: var(--color-ink);
  color: var(--color-bg);
  border-radius: var(--radius-btn);
  transition:
    box-shadow 220ms var(--ease-out),
    transform 160ms var(--ease-out);
}
.cta-primary:hover {
  box-shadow: var(--shadow-accent);
}
.cta-ghost {
  color: var(--color-text);
  border: 1px solid var(--color-border-bright);
  border-radius: var(--radius-btn);
  transition:
    background-color 200ms var(--ease-out),
    transform 160ms var(--ease-out);
}
.cta-ghost:hover {
  background-color: var(--color-bg-card);
}

.visual-col {
  flex-shrink: 0;
  overflow: visible;
  width: calc(45% * var(--t-visual));
}
.visual-inner {
  opacity: var(--t-visual);
  transform: scale(calc(0.94 + 0.06 * var(--t-visual)));
}
</style>
