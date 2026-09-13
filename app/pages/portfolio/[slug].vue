<script setup lang="ts">
import { studioProjects } from '~~/content/studio';
const route = useRoute();
const project = studioProjects.find(item => item.slug === route.params.slug);
if (!project) throw createError({ statusCode: 404, statusMessage: 'Project not found' });
useSeoMeta({ title: project.name, description: project.summary, ogImage: project.image ? `https://wusla.co${project.image}` : undefined });
</script>
<template>
  <div v-if="project">
    <section class="page-opening studio-container"><NuxtLink to="/portfolio" class="text-link">← All work</NuxtLink><h1>{{ project.name }}</h1><p>{{ project.summary }}</p><div class="project-detail-meta"><span v-for="focus in project.focus" :key="focus">{{ focus }}</span></div><a v-if="!project.archived" :href="project.url" target="_blank" rel="noopener noreferrer" class="text-link section-link">Visit website <span aria-hidden="true">↗</span></a></section>
    <div v-if="project.image" class="studio-container"><img :src="project.image" :alt="`${project.name} public website`" class="project-detail-image" width="1200" height="833" fetchpriority="high"></div>
    <section class="studio-container project-story" aria-label="Project overview"><article v-for="item in project.experience" :key="item.title"><h2>{{ item.title }}</h2><p>{{ item.copy }}</p></article></section>
    <ProjectInvitation />
  </div>
</template>
