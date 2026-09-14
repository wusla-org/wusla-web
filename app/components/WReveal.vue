<script setup lang="ts">
/**
 * Fades and lifts a block as it enters the viewport.
 *
 * The resting state in markup is fully visible. The hidden state is set
 * here, in JS, so a failed script or a reduced-motion preference leaves
 * the page readable rather than blank. useScrollTimeline skips its setup
 * entirely under prefers-reduced-motion, which is what makes that work.
 */
const props = withDefaults(defineProps<{
  as?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
}>(), {
  as: "div",
  y: 24,
  delay: 0,
  duration: 0.8,
  start: "top 88%",
});

const root = ref<HTMLElement | null>(null);

useScrollTimeline(root, ({ gsap }) => {
  gsap.fromTo(
    root.value!,
    { opacity: 0, y: props.y },
    {
      opacity: 1,
      y: 0,
      duration: props.duration,
      delay: props.delay,
      ease: "power3.out",
      scrollTrigger: { trigger: root.value!, start: props.start, once: true },
    },
  );
});
</script>

<template>
  <component :is="as" ref="root"><slot /></component>
</template>
