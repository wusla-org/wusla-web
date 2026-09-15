<script setup lang="ts">
import WRevealLines from "~/components/WRevealLines.vue";
import WRevealText from "~/components/WRevealText.vue";
import WReveal from "~/components/WReveal.vue";

useSeoMeta({
  title: "An independent product studio",
  description: "WUSLA is an independent software company based in Kerala, building original applications and partnering on client products.",
});

useHead({ bodyAttrs: { class: "w-body" } });

useBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
]);

const principles = [
  { title: "Stay close to the problem.", copy: "Understand what people are trying to do before deciding what the software should be." },
  { title: "Make decisions together.", copy: "Keep product thinking, design, and engineering close enough to inform one another." },
  { title: "Care beyond the first release.", copy: "Build with future changes in mind. Make room to learn from the people who use the product." },
];
</script>

<template>
  <div class="w-page">
    <section class="w-shell w-shell-wide w-hero">
      <p class="w-eyebrow">The company</p>
      <WRevealLines
        as="h1"
        class="w-hero-title"
        immediate
        :lines="[{ text: 'Independent minds.' }, { text: 'Useful software.', italic: true }]"
      />
      <WReveal as="div" :delay="0.3" :y="18">
        <p class="w-lede">WUSLA is a product studio based in Kerala, India. We build applications of our own and partner with businesses on software that matters.</p>
      </WReveal>
    </section>

    <section class="w-shell w-band w-feature">
      <WReveal as="div">
        <img src="/assets/studio-form.webp" alt="A continuous emerald sculpture, representing connected product thinking" width="1200" height="800" fetchpriority="high">
      </WReveal>
      <WReveal as="div" :delay="0.1">
        <h2 class="w-section-title">Product thinking. All the way through.</h2>
        <p class="w-sub" style="margin-top: 1rem">Making our own products keeps us engaged with the same questions our clients face: what deserves to be built, how it should work, and what comes next.</p>
        <p class="w-sub" style="margin-top: .875rem">We bring that perspective to web platforms, mobile applications, desktop software, and product design.</p>
        <NuxtLink to="/capabilities" class="w-link" style="display: inline-block; margin-top: 1.25rem">How we can help <span aria-hidden="true">↗</span></NuxtLink>
      </WReveal>
    </section>

    <section class="w-tint">
      <div class="w-shell w-band">
        <div class="w-head">
          <WRevealText as="h2" class="w-section-title" text="The way we work shapes what we make." :stagger="0.04" />
        </div>
        <div class="w-flow w-flow-3">
          <WReveal v-for="(principle, i) in principles" :key="principle.title" as="article" class="w-step" :delay="i * 0.08" :y="18">
            <h3 class="w-item-title">{{ principle.title }}</h3>
            <p class="w-sub">{{ principle.copy }}</p>
          </WReveal>
        </div>
      </div>
    </section>

    <section class="w-shell w-band" style="max-width: 62ch">
      <h2 class="w-section-title">Meet us through the work.</h2>
      <p class="w-sub" style="margin-top: 1rem">Explore our public projects and open-source work, or tell us about the people and problem behind your next product.</p>
      <div class="w-contact-actions" style="justify-content: flex-start; margin-top: 1.75rem">
        <NuxtLink to="/portfolio" class="w-link">Selected work ↗</NuxtLink>
        <a href="https://github.com/wusla-org" class="w-link" target="_blank" rel="noopener noreferrer">WUSLA on GitHub ↗</a>
      </div>
    </section>

    <ProjectInvitation />
  </div>
</template>
