<script setup lang="ts">
import HomeHero from "~/components/home/HomeHero.vue";
import HomeProof from "~/components/home/HomeProof.vue";
import HomeChapter from "~/components/home/HomeChapter.vue";
import HomeWork from "~/components/home/HomeWork.vue";
import HomeCapabilities from "~/components/home/HomeCapabilities.vue";
import HomeApplications from "~/components/home/HomeApplications.vue";
import HomeProcess from "~/components/home/HomeProcess.vue";
import HomeFaq from "~/components/home/HomeFaq.vue";
import { siteFaqs } from "~~/content/faq";

useSeoMeta({
  title: "Software people keep using",
  description:
    "WUSLA is a software studio in Kerala building web, mobile and desktop products. Four client projects live, with their real addresses.",
});

/* Opts body into the cream ground. Nuxt removes the class again on
   navigation to a route that does not ask for it. */
useHead({ bodyAttrs: { class: "w-body" } });

/* HomeFaq renders every question below as visible copy, so the FAQPage
   markup describes content a visitor can actually read rather than data
   invisibly attached to the page. */
useHead({
  script: [{
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: siteFaqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    }),
  }],
});
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

    <HomeFaq />

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
