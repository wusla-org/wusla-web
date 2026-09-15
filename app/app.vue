<script setup lang="ts">
const BASE_URL = "https://wusla.co";
const OG_IMAGE = `${BASE_URL}/assets/wusla_square.png`;
const route = useRoute();
const canonicalUrl = computed(() => new URL(route.path, BASE_URL).toString());

useHead(() => ({
  htmlAttrs: { lang: "en" },
  titleTemplate: (title) => (title ? `${title} | WUSLA` : "WUSLA | Independent Software Company"),
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  meta: [{ name: "google-site-verification", content: "google2a791643ace2a52e" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "WUSLA",
        alternateName: "WUSLA Software",
        url: BASE_URL,
        logo: OG_IMAGE,
        description: "WUSLA is an independent software company in Kerala, India. It builds original software applications and partners with companies on product design and engineering.",
        email: "hello@wusla.co",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
        ],
        knowsAbout: ["Software product development", "Product design", "Web platforms", "Mobile applications", "Technical strategy"],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@wusla.co",
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
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "WUSLA",
        url: BASE_URL,
        inLanguage: "en-IN",
        publisher: { "@type": "Organization", name: "WUSLA", url: BASE_URL },
      }),
    },
  ],
}));

/* No ogTitle/ogDescription/twitterTitle/twitterDescription here on purpose:
   unhead infers them from each page's own title/description, so a link to
   /portfolio/bewingo-india shows that project's title when shared, not a
   generic site-wide one. A page can still set ogImage explicitly (the
   portfolio detail pages do, using the real project screenshot) to beat
   this fallback. */
useSeoMeta({
  description:
    "WUSLA is an independent software company building original applications and partnering with ambitious companies on important product work.",
  ogUrl: () => canonicalUrl.value,
  ogSiteName: "WUSLA",
  ogType: "website",
  ogImage: OG_IMAGE,
  ogImageWidth: 512,
  ogImageHeight: 512,
  twitterCard: "summary",
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
