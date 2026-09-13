<script setup lang="ts">
import { siteFaqs } from "~~/content/faq";
import HomepagePrototype from "~/components/HomepagePrototype.vue";

const baseUrl = "https://wusla.co";

useSeoMeta({
  title: "Software worth shipping",
  description: "WUSLA turns complex product ideas into reliable web, mobile, and desktop software through product direction, design, and engineering.",
  ogUrl: baseUrl,
});

useHead({
  script: [{
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: siteFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    }),
  }],
});
</script>

<template>
  <HomepagePrototype />
</template>
