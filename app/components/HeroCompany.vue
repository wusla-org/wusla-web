<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="hero-company">
    <div class="container-custom">
      <div class="hero-top"><p>WUSLA</p><p>Independent software company</p></div>
      <div class="hero-main">
        <h1>We make software<br >with a point of view.</h1>
        <div class="hero-statement">
          <p>Some of it is built with companies. Some of it is built by us. All of it starts with a problem worth solving.</p>
          <NuxtLink to="#contact" class="hero-cta btn-press">Start a conversation <ArrowRight :size="18" aria-hidden="true" /></NuxtLink>
        </div>
      </div>
      <div class="hero-bottom"><p>Our applications are in development. We will share them when they are ready.</p><span aria-hidden="true">W</span></div>
    </div>
  </section>
</template>

<style scoped>
.hero-company { padding: 8.25rem 0 3rem; min-height: min(720px, 100dvh); display: flex; background: var(--color-bg); }
.hero-company > div { display: flex; flex-direction: column; width: 100%; }.hero-top, .hero-bottom { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: .72rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--color-text-muted); }.hero-main { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(260px, .55fr); gap: 3rem; align-items: end; flex: 1; padding: clamp(4.5rem, 11vh, 8rem) 0 3rem; }h1 { color: var(--color-text); font-size: clamp(3.3rem, 7.4vw, 7.4rem); line-height: .89; font-weight: 720; letter-spacing: -.065em; max-width: 11ch; }.hero-statement { padding-bottom: .35rem; }.hero-statement p { max-width: 25rem; color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.65; }.hero-cta { display: inline-flex; align-items: center; gap: .65rem; margin-top: 1.75rem; color: var(--color-text); font-weight: 650; border-bottom: 1px solid var(--color-text); padding-bottom: .35rem; }.hero-bottom { align-items: end; padding-top: 1.5rem; border-top: 1px solid var(--color-border); }.hero-bottom p { max-width: 31rem; letter-spacing: .04em; text-transform: none; line-height: 1.55; }.hero-bottom span { color: var(--color-accent); font: 700 clamp(4rem, 8vw, 8rem)/.7 var(--font-display); letter-spacing: -.12em; }
@media (max-width: 767px) { .hero-company { padding-top: 7rem; min-height: 0; }.hero-top { font-size: .62rem; }.hero-main { display: block; padding: 4.5rem 0 4rem; }h1 { font-size: clamp(3.2rem, 14vw, 5rem); line-height: .92; max-width: 10ch; }.hero-statement { margin-top: 2.5rem; }.hero-bottom span { font-size: 5rem; } }
</style>
