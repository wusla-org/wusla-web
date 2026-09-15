<script setup lang="ts">
import { siteFaqs } from "~~/content/faq";
import WReveal from "~/components/WReveal.vue";
import WRevealText from "~/components/WRevealText.vue";
</script>

<template>
  <section id="faq" class="w-shell w-band" aria-labelledby="faq-title">
    <div class="w-head">
      <WRevealText id="faq-title" as="h2" class="w-section-title" text="Questions worth answering upfront." :stagger="0.05" />
    </div>

    <div class="w-faq">
      <WReveal v-for="(item, i) in siteFaqs" :key="item.question" as="div" :delay="i * 0.05">
        <details class="w-faq-item">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </WReveal>
    </div>
  </section>
</template>
