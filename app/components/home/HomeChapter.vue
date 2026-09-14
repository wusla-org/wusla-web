<script setup lang="ts">
import WRevealLines from "~/components/WRevealLines.vue";
import type { RevealLine } from "~/types/reveal";

/**
 * A full-bleed emerald field carrying one statement. There are exactly
 * two of these on the homepage and they bracket the proof, which is the
 * whole reason the rest of the page can stay neutral.
 */
defineProps<{
  lines: RevealLine[];
  center?: boolean;
}>();
</script>

<template>
  <section class="w-chapter" :class="{ 'w-chapter-center': center }">
    <div class="w-shell">
      <WRevealLines as="h2" class="w-chapter-title" :lines="lines" :stagger="0.07" />
      <slot />
    </div>
  </section>
</template>
