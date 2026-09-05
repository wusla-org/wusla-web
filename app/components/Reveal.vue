<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number;
    y?: number;
    duration?: number;
    as?: string;
  }>(),
  { delay: 0, y: 22, duration: 0.6, as: "div" },
);

const el = ref<HTMLElement | null>(null);

useScrollTimeline(el, ({ gsap }) => {
  gsap.fromTo(
    el.value,
    { opacity: 0, y: props.y },
    {
      opacity: 1,
      y: 0,
      duration: props.duration,
      delay: props.delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el.value,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    },
  );
});
</script>

<template>
  <component :is="as" ref="el">
    <slot />
  </component>
</template>
