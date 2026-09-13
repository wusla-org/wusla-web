<script setup lang="ts">
import { studioProjects } from '~~/content/studio';
useSeoMeta({ title: 'Selected work', description: 'Explore WUSLA websites and applications for export businesses, sport, and campus operations.' });
</script>
<template><div><section class="page-opening studio-container"><p class="eyebrow">Selected work</p><h1>Different problems.<br><span>The same care.</span></h1><p>Websites and applications made around the people and businesses that use them. Take a closer look.</p></section><section class="studio-container portfolio-grid" aria-label="Project collection"><ProjectPreview v-for="project in studioProjects" :key="project.slug" :project="project" /></section><ProjectInvitation /></div></template>
