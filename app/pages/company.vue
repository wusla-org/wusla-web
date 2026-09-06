<script setup lang="ts">
useSeoMeta({
  title: "For companies",
  description: "WUSLA partners with companies to shape, design, build, and improve important software products.",
});

const engagements = [
  ["New applications", "From an early idea to a working product, with product thinking, design, and engineering in one team."],
  ["Existing products", "A clearer experience, stronger foundations, and focused work on the part of the product that needs attention."],
  ["Technical partnership", "Senior capability beside your team when you need to move an important product forward."],
];
</script>

<template>
  <div class="company-page"><section class="company-hero"><div class="container-custom"><p>For companies</p><h1>A technology team<br>for work that matters.</h1><p>WUSLA works with companies that need a product shaped, an application built, or experienced people close to a difficult technical decision.</p><NuxtLink to="/#contact">Start a conversation →</NuxtLink></div></section><section class="company-body"><div class="container-custom"><div class="body-intro"><p>How we help</p><h2>Bring us in early, or bring us the part that is stuck.</h2></div><div class="engagements"><article v-for="(engagement, index) in engagements" :key="engagement[0]"><span>0{{ index + 1 }}</span><h3>{{ engagement[0] }}</h3><p>{{ engagement[1] }}</p></article></div></div></section><section class="company-close"><div class="container-custom"><p>A small team can still take on serious work when the thinking and execution are in the same room.</p><NuxtLink to="/#contact">Tell us what needs to happen →</NuxtLink></div></section></div>
</template>

<style scoped>
.company-page{background:var(--color-bg);color:var(--color-text)}.company-hero{padding:11rem 0 7rem;background:var(--color-bg-elevated)}.company-hero>div>p:first-child,.body-intro>p{font:600 .7rem var(--font-mono);letter-spacing:.13em;text-transform:uppercase;color:var(--color-accent)}.company-hero h1{font-size:clamp(3.3rem,7vw,7.6rem);line-height:.88;letter-spacing:-.08em;font-weight:720;margin:1.5rem 0 2rem}.company-hero p:nth-of-type(2){max-width:37rem;color:var(--color-text-muted);font-size:1.15rem;line-height:1.55}.company-hero a,.company-close a{display:inline-block;margin-top:2rem;padding:.85rem 1.1rem;background:var(--color-ink);color:var(--color-bg);font-weight:650}.company-body{padding:8rem 0}.body-intro{max-width:53rem}.body-intro h2{margin-top:1rem;font-size:clamp(2.5rem,5vw,5.6rem);line-height:.92;letter-spacing:-.07em;font-weight:700}.engagements{margin-top:6rem;border-top:1px solid var(--color-border)}.engagements article{display:grid;grid-template-columns:5rem 1fr 1.2fr;gap:2rem;padding:2.25rem 0;border-bottom:1px solid var(--color-border)}.engagements span{font:500 .75rem var(--font-mono);color:var(--color-accent)}.engagements h3{font-size:1.45rem;letter-spacing:-.035em;font-weight:650}.engagements p{max-width:29rem;color:var(--color-text-muted);line-height:1.55}.company-close{padding:7rem 0;background:#064E3B;color:#F5FAF7}.company-close p{max-width:22ch;font-size:clamp(2.3rem,5vw,5.4rem);line-height:.94;letter-spacing:-.07em;font-weight:680}.company-close a{background:#F5FAF7;color:#064E3B}@media(max-width:767px){.company-hero{padding:8rem 0 5rem}.company-body{padding:5rem 0}.engagements{margin-top:3.5rem}.engagements article{grid-template-columns:2.5rem 1fr;gap:.5rem}.engagements p{grid-column:2;margin-top:.5rem}.company-close{padding:5rem 0}}
</style>
