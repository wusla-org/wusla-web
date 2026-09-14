<script setup lang="ts">
/** A headline whose lines rise out from behind their own edge. */
import type { RevealLine } from "~/types/reveal";

const props = withDefaults(defineProps<{
  lines: RevealLine[];
  as?: string;
  stagger?: number;
  duration?: number;
  /** Animate on mount rather than on scroll. For headlines above the fold. */
  immediate?: boolean;
  start?: string;
}>(), {
  as: "h2",
  stagger: 0.09,
  duration: 0.95,
  immediate: false,
  start: "top 85%",
});

const root = ref<HTMLElement | null>(null);

useScrollTimeline(root, ({ gsap }) => {
  const targets = root.value!.querySelectorAll(".w-reveal-inner");
  if (!targets.length) return;

  gsap.fromTo(
    targets,
    { yPercent: 108 },
    {
      yPercent: 0,
      duration: props.duration,
      ease: "power3.out",
      stagger: props.stagger,
      ...(props.immediate
        ? { delay: 0.1 }
        : { scrollTrigger: { trigger: root.value!, start: props.start, once: true } }),
    },
  );
});
</script>

<template>
  <component :is="as" ref="root">
    <span v-for="(line, i) in lines" :key="i" class="w-reveal-line">
      <span class="w-reveal-inner" :class="{ 'w-italic': line.italic }">{{ line.text }}</span>
    </span>
  </component>
</template>
