<script setup lang="ts">
import { studioProjects } from "~~/content/studio";
import WReveal from "~/components/WReveal.vue";

const route = useRoute();
const project = studioProjects.find((item) => item.slug === route.params.slug);
if (!project) throw createError({ statusCode: 404, statusMessage: "Project not found" });

useSeoMeta({
  title: project.name,
  description: project.summary,
  ogImage: project.image ? `https://wusla.co${project.image}` : undefined,
  ogImageWidth: project.image ? 1200 : undefined,
  ogImageHeight: project.image ? 833 : undefined,
  twitterCard: project.image ? "summary_large_image" : "summary",
});

useHead({ bodyAttrs: { class: "w-body" } });

useBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Selected work", path: "/portfolio" },
  { name: project.name, path: `/portfolio/${project.slug}` },
]);

useHead({
  script: [{
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      description: project.summary,
      url: `https://wusla.co/portfolio/${project.slug}`,
      image: project.image ? `https://wusla.co${project.image}` : undefined,
      creator: { "@type": "Organization", name: "WUSLA", url: "https://wusla.co" },
      ...(project.archived ? {} : { mainEntityOfPage: project.url }),
    }),
  }],
});
</script>

<template>
  <div v-if="project" class="w-page">
    <section class="w-shell w-shell-wide w-band">
      <NuxtLink to="/portfolio" class="w-link">← All work</NuxtLink>

      <div class="w-detail-head" style="margin-top: 1.5rem">
        <h1 class="w-hero-title" style="font-size: clamp(2.25rem, 5.5vw, 4rem)">{{ project.name }}</h1>
        <p class="w-lede">{{ project.summary }}</p>
        <div class="w-detail-meta">
          <span v-for="focus in project.focus" :key="focus">{{ focus }}</span>
        </div>
        <a v-if="!project.archived" :href="project.url" target="_blank" rel="noopener noreferrer" class="w-link">
          Visit website <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div v-if="project.image" class="w-detail-shot">
        <img :src="project.image" :alt="`${project.name} public website`" width="1200" height="833" fetchpriority="high">
      </div>

      <div class="w-detail-story" aria-label="Project overview">
        <WReveal v-for="(item, i) in project.experience" :key="item.title" as="article" :delay="i * 0.08" :y="18">
          <h2 class="w-item-title">{{ item.title }}</h2>
          <p>{{ item.copy }}</p>
        </WReveal>
      </div>
    </section>

    <ProjectInvitation />
  </div>
</template>
