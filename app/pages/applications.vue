<script setup lang="ts">
useSeoMeta({
  title: "Applications in development",
  description: "WUSLA is developing three original software applications. We will introduce each product when it is ready for the public.",
});

const applications = [
  ["01", "Private product", "A new software application in active development.", "The problem, product name, and experience remain private while the work matures."],
  ["02", "Private product", "A separate application with a different purpose and audience.", "It is not a variation of the first product. It is being built on its own terms."],
  ["03", "Private product", "A third original product in progress.", "We will introduce it only when there is something concrete and useful to show."],
];
</script>

<template>
  <div class="applications-page">
    <section class="applications-hero"><div class="container-custom"><p class="kicker">WUSLA applications</p><h1>Three products,<br>still becoming.</h1><p>We build software of our own. These applications are not public yet, so this page is an honest view of where they stand.</p></div></section>
    <section class="applications-body"><div class="container-custom"><p class="intro">Private does not mean vague. It means the work is still being tested, revised, and made ready before we ask anyone else to use it.</p><div class="application-grid"><article v-for="app in applications" :key="app[0]"><span>{{ app[0] }}</span><p class="status">{{ app[1] }}</p><h2>{{ app[2] }}</h2><p>{{ app[3] }}</p></article></div></div></section>
    <section class="applications-close"><div class="container-custom"><p>When an application is ready, it will receive its own name, story, and place here.</p><NuxtLink to="/#contact">Talk to WUSLA about your product →</NuxtLink></div></section>
  </div>
</template>

<style scoped>
.applications-page{background:var(--color-bg);color:var(--color-text)}.applications-hero{background:#007A59;color:#F5FAF7;padding:11rem 0 7rem}.kicker,.status{font:600 .7rem/1.3 var(--font-mono);letter-spacing:.13em;text-transform:uppercase;color:#C9E7D9}.applications-hero h1{font-size:clamp(3.5rem,8vw,8.2rem);line-height:.86;letter-spacing:-.08em;font-weight:720;margin:1.5rem 0 2rem}.applications-hero p:last-child{max-width:34rem;line-height:1.55;color:#D4E8DF;font-size:1.15rem}.applications-body{padding:8rem 0}.intro{max-width:43rem;font-size:clamp(1.35rem,2.3vw,2rem);line-height:1.38;letter-spacing:-.035em}.application-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:6rem;border-top:1px solid var(--color-border)}.application-grid article{padding:2rem 2rem 2rem 0;border-bottom:1px solid var(--color-border)}.application-grid article+article{padding-left:2rem;border-left:1px solid var(--color-border)}.application-grid>article>span{font:500 .75rem var(--font-mono);color:var(--color-accent)}.status{margin:3.2rem 0 .75rem;color:var(--color-accent)}.application-grid h2{font-size:1.6rem;line-height:1.15;letter-spacing:-.04em;font-weight:650}.application-grid h2+p{margin-top:1rem;color:var(--color-text-muted);line-height:1.55}.applications-close{padding:6rem 0;background:var(--color-bg-elevated)}.applications-close p{font-size:clamp(2rem,4vw,4rem);line-height:.98;letter-spacing:-.06em;max-width:17ch;font-weight:680}.applications-close a{display:inline-block;margin-top:2rem;padding-bottom:.25rem;border-bottom:1px solid currentColor;color:var(--color-accent);font-weight:650}@media(max-width:767px){.applications-hero{padding:8rem 0 5rem}.applications-body{padding:5rem 0}.application-grid{grid-template-columns:1fr;margin-top:3.5rem}.application-grid article,.application-grid article+article{padding:2rem 0;border-left:0}.application-grid article+article{border-top:1px solid var(--color-border)}.status{margin-top:2.5rem}.applications-close{padding:5rem 0}}
</style>
