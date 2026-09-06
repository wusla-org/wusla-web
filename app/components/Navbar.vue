<script setup lang="ts">
import { Menu, X, ArrowUpRight } from "lucide-vue-next";

const open = ref(false);
const route = useRoute();
const hasScrolled = ref(false);
const isHome = computed(() => route.path === "/");
const links = [
  { label: "Company", href: "/company" },
  { label: "Applications", href: "/applications" },
  { label: "Work", href: "/portfolio" },
];

function updateHeader() {
  hasScrolled.value = window.scrollY > 36;
}

onMounted(() => {
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener("scroll", updateHeader));

watch(() => route.path, () => {
  open.value = false;
  if (import.meta.client) updateHeader();
});
</script>

<template>
  <header class="site-header" :class="{ 'is-home': isHome, 'has-scrolled': hasScrolled }">
    <div class="container-custom header-inner">
      <NuxtLink to="/" class="wordmark" aria-label="WUSLA home"><span aria-hidden="true">WUSLA</span></NuxtLink>
      <nav class="desktop-nav" aria-label="Primary navigation"><NuxtLink v-for="link in links" :key="link.label" :to="link.href">{{ link.label }}</NuxtLink></nav>
      <NuxtLink to="/#contact" class="header-cta">Start a conversation <ArrowUpRight :size="15" /></NuxtLink>
      <button class="mobile-toggle" :aria-expanded="open" :aria-label="open ? 'Close navigation' : 'Open navigation'" @click="open = !open"><X v-if="open" :size="21" /><Menu v-else :size="21" /></button>
    </div>
    <nav v-if="open" class="mobile-nav" aria-label="Mobile navigation"><NuxtLink v-for="link in links" :key="link.label" :to="link.href" @click="open = false">{{ link.label }} <ArrowUpRight :size="18" /></NuxtLink><NuxtLink to="/#contact" @click="open = false">Contact <ArrowUpRight :size="18" /></NuxtLink></nav>
  </header>
</template>

<style scoped>
.site-header{position:fixed;z-index:50;top:0;left:0;right:0;color:#f5f1e4;background:#195440;border-bottom:1px solid rgba(245,250,247,.16);transition:background-color .38s var(--ease-out),border-color .38s var(--ease-out),backdrop-filter .38s var(--ease-out)}.site-header.is-home:not(.has-scrolled){background:transparent;border-color:transparent}.site-header.has-scrolled{background:rgba(6,74,55,.96);border-color:rgba(245,250,247,.18);backdrop-filter:blur(14px)}.header-inner{height:74px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center}.wordmark{display:inline-flex;align-items:center;justify-self:start;color:#f5f1e4;font:760 1.78rem/.9 var(--font-display);letter-spacing:.075em;transition:color 180ms var(--ease-out),transform 180ms var(--ease-out)}.wordmark:hover{color:#c9f0dd}.wordmark:active{transform:scale(.98)}.desktop-nav{display:flex;gap:2.2rem}.desktop-nav a{position:relative;font:600 .7rem/1 var(--font-mono);text-transform:uppercase;letter-spacing:.1em;color:#d7ede4;transition:color .2s}.desktop-nav a::after{position:absolute;right:0;bottom:-.55rem;left:0;height:1px;content:"";background:#c9f0dd;transform:scaleX(0);transform-origin:left;transition:transform .25s var(--ease-out)}.desktop-nav a.router-link-active::after,.desktop-nav a:hover::after{transform:scaleX(1)}.desktop-nav a.router-link-active,.desktop-nav a:hover{color:#fff}.header-cta{justify-self:end;display:inline-flex;align-items:center;gap:.45rem;background:#c9f0dd;color:#004a36;padding:.73rem .9rem;font-weight:700;font-size:.82rem;transition:transform .25s var(--ease-out),background-color .25s var(--ease-out)}.header-cta:hover{background:#edf6ef;transform:translateY(-2px)}.mobile-toggle,.mobile-nav{display:none}@media(max-width:767px){.header-inner{height:66px;grid-template-columns:1fr auto}.wordmark{font-size:1.55rem}.desktop-nav,.header-cta{display:none}.mobile-toggle{display:flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;color:#f5f1e4;padding:.5rem}.mobile-nav{position:absolute;top:66px;right:0;left:0;display:flex;max-height:calc(100svh - 66px);flex-direction:column;overflow-y:auto;padding:1rem 1.5rem 1.5rem;background:#195440;border-top:1px solid rgba(245,250,247,.2);box-shadow:0 8px 12px rgba(0,45,33,.18)}.mobile-nav a{display:flex;align-items:center;justify-content:space-between;min-height:56px;padding:1.1rem 0;border-bottom:1px solid rgba(245,250,247,.15);font-size:1.1rem;font-weight:650;color:#f5f1e4}}
</style>
