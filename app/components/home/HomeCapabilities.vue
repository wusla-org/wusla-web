<script setup lang="ts">
import { engagements } from "~~/content/studio";
import WReveal from "~/components/WReveal.vue";
import WRevealText from "~/components/WRevealText.vue";

/** Outputs read as a sentence rather than a row of tag pills. */
function asSentence(outputs: string[]) {
  const [first, ...rest] = outputs;
  if (!first) return "";
  const lowered = rest.map((item) => item.charAt(0).toLowerCase() + item.slice(1));
  return `${[first, ...lowered].join(", ")}.`;
}
</script>

<template>
  <section id="capabilities" class="w-shell w-band">
    <div class="w-head">
      <WRevealText as="h2" class="w-section-title" text="Three ways this usually starts." :stagger="0.05" />
    </div>

    <div class="w-caps">
      <WReveal
        v-for="(engagement, i) in engagements"
        :key="engagement.title"
        as="article"
        :delay="i * 0.06"
      >
        <p class="w-cap-when">{{ engagement.situation }}</p>
        <h3 class="w-item-title">{{ engagement.title }}</h3>
        <p class="w-cap-copy">{{ engagement.copy }}</p>
        <p class="w-cap-out">{{ asSentence(engagement.outputs) }}</p>
      </WReveal>
    </div>
  </section>
</template>
