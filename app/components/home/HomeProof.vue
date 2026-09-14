<script setup lang="ts">
import { studioProjects } from "~~/content/studio";

/**
 * A marquee needs its content twice so the loop can translate a full
 * 50% and land back where it started. The duplicate is decorative
 * repetition, so it is hidden from assistive tech.
 */
const entries = computed(() =>
  studioProjects.map((project) => ({ name: project.name, note: project.category })),
);
</script>

<template>
  <section class="w-proof">
    <p class="w-eyebrow">Shipped for</p>
    <div class="w-marquee">
      <div class="w-marquee-row">
        <span v-for="entry in entries" :key="entry.name">
          {{ entry.name }} <span class="w-dim">{{ entry.note }}</span>
        </span>
      </div>
      <div class="w-marquee-row" aria-hidden="true">
        <span v-for="entry in entries" :key="`echo-${entry.name}`">
          {{ entry.name }} <span class="w-dim">{{ entry.note }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
