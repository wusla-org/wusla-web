<script setup lang="ts">
const areas = [
  ["Software for work", "Tools that make focused work simpler and more connected."],
  ["Operational systems", "Thoughtful software for the work that keeps companies moving."],
  ["Digital experiences", "Useful products shaped around the way people actually use technology."],
];
</script>

<template>
  <section id="product-lab" class="lab-section">
    <div class="container-custom">
      <div class="lab-intro"><p class="section-label">The product lab</p><h2>We build what we believe should exist.</h2><p>Several WUSLA applications are currently in private development. We share details when they are ready, not before.</p></div>
      <div class="lab-grid"><article v-for="([title, body], index) in areas" :key="title" class="lab-item"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ title }}</h3><p>{{ body }}</p></article></div>
    </div>
  </section>
</template>

<style scoped>
.lab-section { padding: 7rem 0; background: var(--color-ink); color: var(--color-white); }
.lab-intro { max-width: 46rem; }.section-label { color: #a9c3b8; margin-bottom: 1.2rem; }.lab-intro h2 { font-size: clamp(2.2rem, 4.3vw, 4.3rem); line-height: 1.02; font-weight: 700; max-width: 12ch; }.lab-intro > p:last-child { color: #c5cdc8; max-width: 36rem; margin-top: 1.5rem; }
.lab-grid { display: grid; grid-template-columns: 1.3fr .85fr .85fr; gap: 1px; margin-top: 4.5rem; background: rgba(255,255,255,.15); }.lab-item { min-height: 220px; padding: 2rem; background: var(--color-ink); }.lab-item span { color: #a9c3b8; font-family: var(--font-mono); font-size: .75rem; }.lab-item h3 { margin-top: 3.5rem; font-size: 1.25rem; font-weight: 650; }.lab-item p { margin-top: .65rem; color: #c5cdc8; font-size: .92rem; max-width: 18rem; }@media(max-width:767px){.lab-grid{grid-template-columns:1fr;margin-top:3rem}.lab-item{min-height:180px}.lab-item h3{margin-top:2.5rem}}
</style>
