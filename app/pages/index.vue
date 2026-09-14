<script setup lang="ts">
import HomeHero from "~/components/home/HomeHero.vue";
import HomeProof from "~/components/home/HomeProof.vue";
import HomeChapter from "~/components/home/HomeChapter.vue";
import HomeWork from "~/components/home/HomeWork.vue";
import HomeCapabilities from "~/components/home/HomeCapabilities.vue";
import HomeApplications from "~/components/home/HomeApplications.vue";
import HomeProcess from "~/components/home/HomeProcess.vue";

const baseUrl = "https://wusla.co";

useSeoMeta({
  title: "Software people keep using",
  description:
    "WUSLA is a software studio in Kerala building web, mobile and desktop products. Four client projects live, with their real addresses.",
  ogUrl: baseUrl,
});

/* Opts body into the cream ground. Nuxt removes the class again on
   navigation to a route that does not ask for it. */
useHead({ bodyAttrs: { class: "w-body" } });

/*
 * The FAQPage JSON-LD that used to sit here has been removed. It was
 * generated from content/faq.ts, but this page renders no visible FAQ,
 * and structured data describing content a visitor cannot see is a
 * markup violation rather than an SEO gain. It belongs on a page that
 * actually shows the questions.
 */
</script>

<template>
  <div class="w-page">
    <HomeHero />

    <HomeProof />

    <HomeChapter
      :lines="[
        { text: 'A product isn\'t finished' },
        { text: 'when it runs. It\'s finished' },
        { text: 'when someone reaches', italic: true },
        { text: 'for it again.', italic: true },
      ]"
    />

    <HomeWork />

    <HomeCapabilities />

    <HomeApplications />

    <HomeProcess />

    <HomeChapter
      id="contact"
      center
      :lines="[{ text: 'Tell us' }, { text: 'what needs to move.', italic: true }]"
    >
      <div class="w-contact-actions">
        <NuxtLink to="/start" class="w-btn">Start a project</NuxtLink>
        <a class="w-link-bone" href="mailto:hello@wusla.co">hello@wusla.co</a>
      </div>
    </HomeChapter>
  </div>
</template>
