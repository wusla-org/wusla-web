<script setup lang="ts">
import type { StudioProject } from '~~/content/studio';
defineProps<{ project: StudioProject; featured?: boolean }>();
</script>
<template>
  <NuxtLink :to="`/portfolio/${project.slug}`" class="project-preview" :class="{ featured }">
    <div v-if="project.image" class="project-image" :class="`project-${project.slug}`"><img :src="project.image" :alt="`${project.name} website`" width="1200" height="833" loading="lazy" decoding="async"></div>
    <div v-else class="archived-project"><span class="eyebrow">Archived project</span><p>{{ project.name }}</p><span>Campus accommodation management</span></div>
    <div class="project-caption"><div><p class="project-category">{{ project.category }}</p><h3>{{ project.name }}</h3></div><span class="round-arrow" aria-hidden="true">↗</span></div><p class="project-summary">{{ project.summary }}</p>
  </NuxtLink>
</template>
