<script setup lang="ts">
import WRevealLines from "~/components/WRevealLines.vue";
import WReveal from "~/components/WReveal.vue";

const stage = ref<HTMLElement | null>(null);

/**
 * The site opens out as you scroll into it. Only `scale` animates:
 * growing the frame by animating width would force layout on every
 * scroll frame. transform-origin is the top edge (set in CSS) so it
 * unfolds downward instead of drifting up under the headline.
 */
useScrollTimeline(stage, ({ gsap }) => {
  gsap.fromTo(
    stage.value!,
    { scale: 0.84 },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: stage.value!,
        start: "top 92%",
        end: "top 24%",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    },
  );
});
</script>

<template>
  <section class="w-shell w-shell-wide w-hero">
    <p class="w-eyebrow" translate="no">WUSLA Software Studio</p>

    <WRevealLines
      as="h1"
      class="w-hero-title"
      immediate
      :lines="[{ text: 'Software people' }, { text: 'keep using.', italic: true }]"
    />

    <WReveal as="div" :delay="0.35" :y="18">
      <p class="w-lede">A studio in Kerala building web, mobile and desktop products worth returning to.</p>
      <NuxtLink to="/start" class="w-btn w-btn-solid">Start a project</NuxtLink>
      <p class="w-fine">Four projects live today. One is archived, and we say so.</p>
    </WReveal>

    <div class="w-stage">
      <div ref="stage" class="w-stage-frame">
        <div class="w-chrome">
          <span class="w-dots" aria-hidden="true"><i /><i /><i /></span>
          <span class="w-chrome-url" translate="no">bewingoindia.com</span>
        </div>
        <div class="w-stage-shot">
          <img
            src="/assets/work/bewingo-india.webp"
            alt="The BeWingo India website we built, showing the Kerala spice product catalogue."
            width="1200"
            height="750"
            fetchpriority="high"
          >
        </div>
      </div>
      <p class="w-fine w-stage-cap">
        BeWingo India, built by WUSLA.
        <a class="w-link" href="https://bewingoindia.com/" target="_blank" rel="noopener">Open the real thing</a>
      </p>
    </div>
  </section>
</template>
