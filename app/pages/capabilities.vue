<script setup lang="ts">
import { engagements, workingSteps, studioProjects } from "~~/content/studio";
import WRevealLines from "~/components/WRevealLines.vue";
import WRevealText from "~/components/WRevealText.vue";
import WReveal from "~/components/WReveal.vue";

useSeoMeta({
  title: "Product direction, design and engineering",
  description: "Find your first release, improve an existing product, or connect design and engineering with WUSLA.",
});

useHead({ bodyAttrs: { class: "w-body" } });

useBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Capabilities", path: "/capabilities" },
]);

useHead({
  script: [{
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Software product direction, design and engineering",
      provider: { "@type": "Organization", name: "WUSLA", url: "https://wusla.co" },
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ways to work with WUSLA",
        itemListElement: engagements.map(item => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.title, description: item.copy },
        })),
      },
    }),
  }],
});

function asSentence(outputs: string[]) {
  const [first, ...rest] = outputs;
  if (!first) return "";
  const lowered = rest.map((item) => item.charAt(0).toLowerCase() + item.slice(1));
  return `${[first, ...lowered].join(", ")}.`;
}
</script>

<template>
  <div class="w-page">
    <section class="w-shell w-shell-wide w-hero">
      <p class="w-eyebrow">Capabilities</p>
      <WRevealLines
        as="h1"
        class="w-hero-title"
        immediate
        :lines="[{ text: 'Start with the problem.' }, { text: 'Build what matters.', italic: true }]"
      />
      <WReveal as="div" :delay="0.3" :y="18">
        <p class="w-lede">Product direction, design, and engineering. Connected around the work your business needs to move forward.</p>
      </WReveal>
    </section>

    <section id="engagements" class="w-shell w-band" aria-label="Ways to work with WUSLA">
      <div class="w-caps">
        <WReveal v-for="(item, i) in engagements" :key="item.title" as="article" :delay="i * 0.06">
          <p class="w-cap-when">{{ item.situation }}</p>
          <h2 class="w-item-title">{{ item.title }}</h2>
          <p class="w-cap-copy">{{ item.copy }}</p>
          <p class="w-cap-out">{{ asSentence(item.outputs) }}</p>
          <NuxtLink :to="`/portfolio/${item.project}`" class="w-link" style="display: inline-block; margin-top: .75rem">
            Explore {{ studioProjects.find((p) => p.slug === item.project)?.name }} <span aria-hidden="true">↗</span>
          </NuxtLink>
        </WReveal>
      </div>
    </section>

    <section class="w-tint">
      <div class="w-shell w-band">
        <div class="w-head">
          <WRevealText as="h2" class="w-section-title" text="Clear steps. Shared progress." :stagger="0.04" />
          <WReveal as="p" class="w-sub" :delay="0.15">The scope comes from your starting point. The work stays connected throughout.</WReveal>
        </div>
        <div class="w-flow">
          <WReveal v-for="(item, i) in workingSteps" :key="item.title" as="div" class="w-step" :delay="i * 0.08" :y="18">
            <h3 class="w-item-title">{{ item.title }}</h3>
            <p class="w-sub">{{ item.copy }}</p>
            <p class="w-step-out">{{ item.output }}</p>
          </WReveal>
        </div>
      </div>
    </section>

    <section class="w-shell w-band" style="max-width: 62ch">
      <h2 class="w-section-title">A scope that fits the work.</h2>
      <p class="w-sub" style="margin-top: 1rem">
        We will discuss priorities, timing, budget, ownership, and support before agreeing an engagement. You do not need a finished specification to start that conversation.
      </p>
    </section>

    <ProjectInvitation />
  </div>
</template>
