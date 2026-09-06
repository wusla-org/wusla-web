<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
const year = new Date().getFullYear();
const links = [
  { label: "Company", href: "/company" },
  { label: "Applications", href: "/applications" },
  { label: "Selected work", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];
</script>

<template>
  <footer class="site-footer">
    <div class="container-custom footer-top"><div><p class="footer-kicker">WUSLA / Independent software company</p><h2>Make something<br>that lasts.</h2></div><NuxtLink to="/#contact" class="footer-link">Talk with us <ArrowUpRight :size="20" /></NuxtLink></div>
    <div class="container-custom footer-bottom"><NuxtLink to="/" class="footer-mark">WUSLA<span>®</span></NuxtLink><nav><NuxtLink v-for="link in links" :key="link.label" :to="link.href">{{ link.label }}</NuxtLink></nav><div class="footer-meta"><span>© {{ year }} WUSLA</span><a href="mailto:wuslateam@gmail.com">wuslateam@gmail.com</a></div></div>
  </footer>
</template>

<style scoped>
.site-footer{background:#003C2D;color:#F5FAF7}.footer-top{display:flex;justify-content:space-between;align-items:end;gap:2rem;padding-top:7rem;padding-bottom:6rem}.footer-kicker{font:600 .69rem/1.2 var(--font-mono);letter-spacing:.12em;text-transform:uppercase;color:#A6D9C6}.footer-top h2{margin-top:1.45rem;font-size:clamp(3rem,6.5vw,7rem);line-height:.84;letter-spacing:-.085em;font-weight:720}.footer-link{display:inline-flex;align-items:center;gap:.65rem;background:#C9F0DD;color:#004A36;padding:1rem 1.15rem;font-weight:750;white-space:nowrap}.footer-bottom{display:grid;grid-template-columns:1fr 1.35fr 1fr;gap:2rem;align-items:start;border-top:1px solid rgba(245,250,247,.24);padding-top:1.5rem;padding-bottom:2rem}.footer-mark{font:750 1.15rem/1 var(--font-display);letter-spacing:-.075em}.footer-mark span{font:500 .52rem/1 var(--font-mono);vertical-align:top;margin-left:.24rem;color:#A6D9C6}.footer-bottom nav{display:grid;grid-template-columns:1fr 1fr;gap:.7rem 1.5rem}.footer-bottom nav a,.footer-meta{font:500 .72rem/1.4 var(--font-mono);letter-spacing:.04em;color:#D7EDE4}.footer-bottom nav a:hover,.footer-meta a:hover{color:#fff}.footer-meta{display:flex;flex-direction:column;align-items:end;gap:.7rem}@media(max-width:767px){.footer-top{display:block;padding-top:5rem;padding-bottom:4rem}.footer-link{margin-top:2.5rem}.footer-bottom{grid-template-columns:1fr;padding-bottom:2.5rem}.footer-meta{align-items:start}.footer-top h2{font-size:clamp(3.2rem,15vw,5.5rem)}}
</style>
