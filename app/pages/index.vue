<script setup lang="ts">
import { siteFaqs } from "~~/content/faq";

const baseUrl = "https://wusla.co";

useSeoMeta({
  title: "Move your product forward",
  description: "WUSLA turns complex ideas and difficult software into clear, useful products through strategy, design, and engineering.",
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
