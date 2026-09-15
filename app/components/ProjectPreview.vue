<script setup lang="ts">
import type { StudioProject } from "~~/content/studio";
import WReveal from "~/components/WReveal.vue";

defineProps<{ project: StudioProject }>();
</script>

<template>
  <WReveal as="div">
    <NuxtLink :to="`/portfolio/${project.slug}`" class="w-work-card">
      <div v-if="project.image" class="w-work-shot">
        <img :src="project.image" :alt="`${project.name} website`" width="1200" height="833" loading="lazy" decoding="async">
      </div>
      <div v-else class="w-work-archived">
        <p class="w-eyebrow">Archived project</p>
        <p>{{ project.name }}</p>
        <p class="w-fine">Campus accommodation management</p>
      </div>
      <div class="w-work-caption">
        <div>
          <p class="w-work-category">{{ project.category }}</p>
          <h3 class="w-item-title">{{ project.name }}</h3>
        </div>
        <span class="w-work-arrow" aria-hidden="true">↗</span>
      </div>
      <p class="w-work-summary">{{ project.summary }}</p>
    </NuxtLink>
  </WReveal>
</template>
