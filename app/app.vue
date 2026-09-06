<script setup lang="ts">
const BASE_URL = "https://wusla.co";
const OG_IMAGE = `${BASE_URL}/assets/wusla_square.png`;

useHead({
  htmlAttrs: { lang: "en" },
  titleTemplate: (title) => (title ? `${title} | WUSLA` : "WUSLA | Independent Software Company"),
  link: [{ rel: "canonical", href: BASE_URL }],
  meta: [{ name: "google-site-verification", content: "google2a791643ace2a52e" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "WUSLA",
        url: BASE_URL,
        logo: OG_IMAGE,
        email: "wuslateam@gmail.com",
        contactPoint: {
          "@type": "ContactPoint",
          email: "wuslateam@gmail.com",
          contactType: "customer support",
          availableLanguage: ["English", "Malayalam"],
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        sameAs: [
          "https://github.com/wusla-org",
          "https://twitter.com/wusla",
          "https://linkedin.com/company/wusla",
        ],
      }),
    },
  ],
});

useSeoMeta({
  description:
    "WUSLA is an independent software company building original applications and partnering with ambitious companies on important product work.",
  ogTitle: "WUSLA | Independent Software Company",
  ogDescription: "Original applications in development. A focused technology team for ambitious companies.",
  ogUrl: BASE_URL,
  ogSiteName: "WUSLA",
  ogType: "website",
  ogImage: OG_IMAGE,
  twitterCard: "summary",
  twitterTitle: "WUSLA | Independent Software Company",
  twitterDescription: "Original applications in development. A focused technology team for ambitious companies.",
  twitterImage: OG_IMAGE,
  robots: "index, follow",
});
</script>

<template>
  <NuxtLoadingIndicator color="var(--color-accent)" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
