<script setup lang="ts">
import WRevealLines from "~/components/WRevealLines.vue";
import WRevealText from "~/components/WRevealText.vue";
import WReveal from "~/components/WReveal.vue";

useSeoMeta({
  title: "Original applications in development",
  description: "WUSLA is developing three original applications. Discover our approach to building useful software of our own.",
});

useHead({ bodyAttrs: { class: "w-body" } });
</script>

<template>
  <div class="w-page">
    <section class="w-shell w-shell-wide w-hero">
      <p class="w-eyebrow">Original applications</p>
      <WRevealLines
        as="h1"
        class="w-hero-title"
        immediate
        :lines="[{ text: 'Our own ideas.' }, { text: 'Taking shape.', italic: true }]"
      />
      <WReveal as="div" :delay="0.3" :y="18">
        <p class="w-lede">We are developing three original software applications. Their names, purposes, and experiences remain private while the work develops.</p>
      </WReveal>
    </section>

    <section class="w-shell w-band w-feature">
      <WReveal as="div">
        <img src="/assets/studio-form.webp" alt="An emerald ribbon progressing through three sculptural folds" width="1200" height="800" fetchpriority="high">
      </WReveal>
      <WReveal as="div" :delay="0.1">
        <span class="w-feature-count">3</span>
        <h2 class="w-section-title" style="font-size: clamp(1.5rem, 2.6vw, 2rem)">Original applications. Currently in development.</h2>
        <p class="w-sub" style="margin-top: 1rem">We will introduce each one when there is something concrete and useful to share. Public product details and links will appear here as they become available.</p>
      </WReveal>
    </section>

    <section class="w-tint">
      <div class="w-shell w-band">
        <WRevealText as="h2" class="w-section-title" text="Building for ourselves. Thinking beyond ourselves." :stagger="0.04" />
        <WReveal as="p" class="w-sub" :delay="0.15" style="margin-top: 1rem; max-width: 52ch">
          Our own product work and our client partnerships share a purpose: software that makes something easier, clearer, or more useful.
        </WReveal>
        <WReveal as="div" :delay="0.2">
          <NuxtLink to="/portfolio" class="w-link" style="display: inline-block; margin-top: 1.5rem">Explore our client work <span aria-hidden="true">↗</span></NuxtLink>
        </WReveal>
      </div>
    </section>

    <ProjectInvitation />
  </div>
</template>
