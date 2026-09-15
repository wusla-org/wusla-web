<script setup lang="ts">
import { studioProjects } from "~~/content/studio";
import WRevealLines from "~/components/WRevealLines.vue";
import WReveal from "~/components/WReveal.vue";

useSeoMeta({
  title: "Selected work",
  description: "Explore WUSLA websites and applications for export businesses, sport, and campus operations.",
});

useHead({ bodyAttrs: { class: "w-body" } });

useBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Selected work", path: "/portfolio" },
]);

useHead({
  script: [{
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: studioProjects.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: project.name,
        url: `https://wusla.co/portfolio/${project.slug}`,
      })),
    }),
  }],
});
</script>

<template>
  <div class="w-page">
    <section class="w-shell w-shell-wide w-hero">
      <p class="w-eyebrow">Selected work</p>
      <WRevealLines
        as="h1"
        class="w-hero-title"
        immediate
        :lines="[{ text: 'Different problems.' }, { text: 'The same care.', italic: true }]"
      />
      <WReveal as="div" :delay="0.3" :y="18">
        <p class="w-lede">Websites and applications made around the people and businesses that use them. Take a closer look.</p>
      </WReveal>
    </section>

    <section class="w-shell w-band w-work-grid" aria-label="Project collection">
      <ProjectPreview v-for="project in studioProjects" :key="project.slug" :project="project" />
    </section>

    <ProjectInvitation />
  </div>
</template>
