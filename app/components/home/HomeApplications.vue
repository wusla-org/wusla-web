<script setup lang="ts">
import WReveal from "~/components/WReveal.vue";
import WRevealText from "~/components/WRevealText.vue";

/*
 * WUSLA has no shipped products of its own. This section stays a single
 * honest panel rather than a grid of invented product cards, and it is
 * the only raised block on the page: the treatment marks the status.
 */
</script>

<template>
  <section id="applications" class="w-tint">
    <div class="w-shell w-band w-apps">
      <WRevealText
        as="h2"
        class="w-section-title"
        text="Three applications of our own are in development."
        :stagger="0.04"
      />
      <WReveal as="div" :delay="0.1">
        <p class="w-sub">None of them have shipped. There is nothing to link to yet, and nothing to sign up for.</p>
        <p class="w-sub">
          When one is ready for someone outside the studio to use, it will appear here with its real
          address, the same way the client work does.
        </p>
      </WReveal>
    </div>
  </section>
</template>
