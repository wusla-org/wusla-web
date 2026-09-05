<script setup lang="ts">
const BASE_URL = "https://wusla.com";
const OG_IMAGE = `${BASE_URL}/assets/wusla_square.png`;

useHead({
  htmlAttrs: { lang: "en" },
  titleTemplate: (title) => (title ? `${title} | WUSLA` : "WUSLA — Your Dedicated Software Team"),
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
    "WUSLA acts as your dedicated software team on contract. Mobile apps, web platforms, desktop software, and UI/UX design for startups and growing businesses.",
  ogTitle: "WUSLA — Your Dedicated Software Team",
  ogDescription: "Mobile apps, web platforms & more — on contract, on your terms.",
  ogUrl: BASE_URL,
  ogSiteName: "WUSLA",
  ogType: "website",
  ogImage: OG_IMAGE,
  twitterCard: "summary",
  twitterTitle: "WUSLA — Your Dedicated Software Team",
  twitterDescription: "Mobile apps, web platforms & more — on contract, on your terms.",
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
