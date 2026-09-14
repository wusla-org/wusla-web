<script setup lang="ts">
import { workingSteps } from "~~/content/studio";
import WReveal from "~/components/WReveal.vue";
import WRevealText from "~/components/WRevealText.vue";
</script>

<template>
  <section id="process" class="w-shell w-band">
    <div class="w-head">
      <WRevealText as="h2" class="w-section-title" text="How the work moves." :stagger="0.05" />
    </div>

    <!-- These really are a sequence, so they are drawn as one: a rule
         across the top of each step, read left to right. -->
    <div class="w-flow">
      <WReveal
        v-for="(step, i) in workingSteps"
        :key="step.title"
        as="div"
        class="w-step"
        :delay="i * 0.08"
        :y="18"
      >
        <h3 class="w-item-title">{{ step.title }}</h3>
        <p class="w-sub">{{ step.copy }}</p>
        <p class="w-step-out">{{ step.output }}</p>
      </WReveal>
    </div>
  </section>
</template>
