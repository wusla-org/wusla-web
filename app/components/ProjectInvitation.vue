<script setup lang="ts">
import WRevealLines from "~/components/WRevealLines.vue";
import WReveal from "~/components/WReveal.vue";
</script>

<template>
  <section id="contact" class="w-chapter w-chapter-center" aria-labelledby="invitation-title">
    <div class="w-shell">
      <p class="w-eyebrow" style="color: var(--w-bone-dim)">A good place to start</p>
      <WRevealLines
        id="invitation-title"
        as="h2"
        class="w-chapter-title"
        :lines="[{ text: 'What needs to' }, { text: 'move forward?', italic: true }]"
      />
      <WReveal as="div" :delay="0.15">
        <p class="w-lede" style="color: var(--w-bone-soft); max-width: 40ch; margin-inline: auto">
          An idea, an existing product, a difficult problem. Tell us where you are. We will work out what comes next.
        </p>
        <div class="w-contact-actions">
          <NuxtLink to="/start" class="w-btn" style="background: var(--w-bone); color: var(--w-emerald); border-color: var(--w-bone)">Start a project</NuxtLink>
          <a href="mailto:hello@wusla.co" class="w-link-bone">hello@wusla.co</a>
        </div>
      </WReveal>
    </div>
  </section>
</template>
