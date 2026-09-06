<script setup lang="ts">
import { siteFaqs } from "~~/content/faq";

const baseUrl = "https://wusla.co";

useSeoMeta({
  title: "Independent software company",
  description: "WUSLA builds original software applications and partners with ambitious companies on important product work.",
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
  <HomeNew />
</template>
