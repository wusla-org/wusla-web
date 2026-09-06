<script setup lang="ts">
import { Menu, X, ArrowUpRight } from "lucide-vue-next";

const open = ref(false);
const links = [
  { label: "Company", href: "/company" },
  { label: "Applications", href: "/applications" },
  { label: "Work", href: "/portfolio" },
];
</script>

<template>
  <header class="site-header">
    <div class="container-custom header-inner">
      <NuxtLink to="/" class="wordmark" aria-label="WUSLA home">WUSLA<span>®</span></NuxtLink>
      <nav class="desktop-nav" aria-label="Primary navigation"><NuxtLink v-for="link in links" :key="link.label" :to="link.href">{{ link.label }}</NuxtLink></nav>
      <NuxtLink to="/#contact" class="header-cta">Start a project <ArrowUpRight :size="15" /></NuxtLink>
      <button class="mobile-toggle" :aria-expanded="open" :aria-label="open ? 'Close navigation' : 'Open navigation'" @click="open = !open"><X v-if="open" :size="21" /><Menu v-else :size="21" /></button>
    </div>
    <nav v-if="open" class="mobile-nav" aria-label="Mobile navigation"><NuxtLink v-for="link in links" :key="link.label" :to="link.href" @click="open = false">{{ link.label }} <ArrowUpRight :size="18" /></NuxtLink><NuxtLink to="/#contact" @click="open = false">Contact <ArrowUpRight :size="18" /></NuxtLink></nav>
  </header>
</template>

<style scoped>
.site-header{position:fixed;z-index:50;top:0;left:0;right:0;background:#005F46;color:#F5FAF7;border-bottom:1px solid rgba(245,250,247,.22)}.header-inner{height:74px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center}.wordmark{font:750 1.15rem/1 var(--font-display);letter-spacing:-.075em}.wordmark span{font:500 .52rem/1 var(--font-mono);vertical-align:top;margin-left:.24rem;color:#A6D9C6}.desktop-nav{display:flex;gap:2.2rem}.desktop-nav a{font:600 .7rem/1 var(--font-mono);text-transform:uppercase;letter-spacing:.1em;color:#D7EDE4;transition:color .2s}.desktop-nav a.router-link-active,.desktop-nav a:hover{color:#fff}.header-cta{justify-self:end;display:inline-flex;align-items:center;gap:.45rem;background:#C9F0DD;color:#004A36;padding:.73rem .9rem;font-weight:700;font-size:.82rem}.mobile-toggle,.mobile-nav{display:none}@media(max-width:767px){.header-inner{height:66px;grid-template-columns:1fr auto}.desktop-nav,.header-cta{display:none}.mobile-toggle{display:flex;align-items:center;justify-content:center;color:#F5FAF7;padding:.5rem}.mobile-nav{display:flex;flex-direction:column;padding:1rem 1.5rem 1.5rem;border-top:1px solid rgba(245,250,247,.2)}.mobile-nav a{display:flex;align-items:center;justify-content:space-between;padding:1.1rem 0;border-bottom:1px solid rgba(245,250,247,.15);font-size:1.25rem;font-weight:650;color:#F5FAF7}}
</style>
