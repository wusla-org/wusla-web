<script setup lang="ts">
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
      mainEntity: [
        { "@type": "Question", name: "What does WUSLA do?", acceptedAnswer: { "@type": "Answer", text: "WUSLA is a technology partner that designs and builds web platforms, mobile applications, desktop software, and product systems for companies." } },
        { "@type": "Question", name: "Does WUSLA build products of its own?", acceptedAnswer: { "@type": "Answer", text: "Yes. WUSLA is developing multiple software products privately and will announce details when they are ready to be public." } },
        { "@type": "Question", name: "When should a company contact WUSLA?", acceptedAnswer: { "@type": "Answer", text: "Contact WUSLA when you need product direction, a team to build a new application, or experienced technical support for an existing product." } },
      ],
    }),
  }],
});
</script>

<template>
  <HomeNew />
</template>
