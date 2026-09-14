<script setup lang="ts">
/**
 * Renders text word by word so it can be staggered into place on scroll.
 *
 * Each word keeps its trailing space inside its own span, and the CSS sets
 * `white-space: pre` on those spans, so the line still wraps naturally
 * between words instead of collapsing into one unbreakable run.
 *
 * Splitting happens in the template rather than by rewriting innerHTML on
 * mount, so the server-rendered markup and the client markup match and the
 * full sentence is present for screen readers and for crawlers.
 */
const props = withDefaults(defineProps<{
  text: string;
  as?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
}>(), {
  as: "p",
  stagger: 0.022,
  y: 18,
  duration: 0.7,
  start: "top 86%",
});

const words = computed(() => {
  const parts = props.text.split(" ");
  return parts.map((word, i) => (i < parts.length - 1 ? `${word} ` : word));
});

const root = ref<HTMLElement | null>(null);

useScrollTimeline(root, ({ gsap }) => {
  const targets = root.value!.querySelectorAll(".w-reveal-word");
  if (!targets.length) return;

  gsap.fromTo(
    targets,
    { opacity: 0, y: props.y },
    {
      opacity: 1,
      y: 0,
      duration: props.duration,
      ease: "power3.out",
      stagger: props.stagger,
      scrollTrigger: { trigger: root.value!, start: props.start, once: true },
    },
  );
});
</script>

<template>
  <component :is="as" ref="root">
    <span v-for="(word, i) in words" :key="i" class="w-reveal-word">{{ word }}</span>
  </component>
</template>
