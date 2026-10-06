<script setup lang="ts">
import { Bandage, Check } from 'lucide-vue-next';

const root = ref<HTMLElement | null>(null);

useScrollTimeline(root, ({ gsap }) => {
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: root.value, start: 'top 75%', end: 'bottom 15%', scrub: 0.8, invalidateOnRefresh: true },
  });
  timeline
    .fromTo('.repair-left', { x: -38, rotation: -12 }, { x: 0, rotation: 0, duration: 1.2, ease: 'power2.inOut' }, 0)
    .fromTo('.repair-right', { x: 38, rotation: 12 }, { x: 0, rotation: 0, duration: 1.2, ease: 'power2.inOut' }, 0)
    .fromTo('.repair-bandage', { y: -70, rotation: -28, opacity: 0, scale: 0.85 }, { y: 0, rotation: -8, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 0.5)
    .fromTo('.repair-seam', { opacity: 1 }, { opacity: 0, duration: 0.3 }, 0.9)
    .fromTo('.repair-check', { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.4)' }, 1.4);
});
</script>

<template>
  <figure ref="root" class="repair-scene" aria-label="Scroll illustration: separated code brackets are brought together and repaired with a bandage">
    <div class="repair-art" aria-hidden="true">
      <span class="repair-bracket repair-left">&lt;</span>
      <span class="repair-seam">/</span>
      <span class="repair-bracket repair-right">&gt;</span>
      <Bandage class="repair-bandage" :size="112" :stroke-width="1.2" />
      <span class="repair-check"><Check :size="18" :stroke-width="2" /></span>
    </div>
    <figcaption>A small fix. Everything connected again.</figcaption>
  </figure>
</template>

<style scoped>
.repair-scene { margin: 0; padding-block: 2rem; }
.repair-art { position: relative; display: flex; align-items: center; justify-content: center; height: 260px; gap: 100px; }
.repair-bracket { font-family: var(--w-sans); font-size: 150px; font-weight: 300; line-height: 1; color: var(--w-emerald); }
.repair-seam { position: absolute; font-size: 62px; font-weight: 300; color: var(--w-ink-soft); opacity: 0; }
.repair-bandage { position: absolute; left: calc(50% - 56px); top: calc(50% - 56px); color: #926b3c; fill: #edcf9d; transform: rotate(-8deg); }
.repair-bandage :deep(rect) { fill-opacity: .4; }
.repair-check { position: absolute; bottom: 26px; right: calc(50% - 110px); width: 30px; height: 30px; display: grid; place-items: center; border-radius: 50%; background: var(--w-emerald-pale); color: var(--w-emerald); }
figcaption { text-align: center; color: var(--w-ink-soft); font-size: .8rem; }
@media (max-width: 767px) { .repair-scene { padding-block: .5rem; } .repair-art { height: 190px; } .repair-bracket { font-size: 125px; } .repair-check { bottom: 6px; } }
</style>
