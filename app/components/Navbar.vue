<script setup lang="ts">
import { Menu, X, ArrowUpRight } from "lucide-vue-next";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const scrolled = ref(false);
const open = ref(false);
const active = ref("");

function onScroll() {
  scrolled.value = window.scrollY > 16;
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const sections = links
    .map((l) => document.getElementById(l.id))
    .filter((el): el is HTMLElement => el !== null);

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) active.value = visible.target.id;
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
  );
  sections.forEach((s) => observer!.observe(s));
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  observer?.disconnect();
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :style="{
      backgroundColor: scrolled ? 'rgba(250,249,249,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
      boxShadow: scrolled
        ? 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 0 var(--color-border), 0 20px 40px -32px rgba(28,25,23,0.12)'
        : 'none',
      padding: scrolled ? '12px 0' : '22px 0',
      transitionTimingFunction: 'var(--ease-out)',
    }"
  >
    <div class="container-custom flex items-center justify-between">
      <NuxtLink to="/" class="flex items-baseline gap-1.5 btn-press" aria-label="WUSLA home">
        <span class="font-display text-lg font-bold tracking-tight" style="color: var(--color-text)">wusla</span>
        <span
          class="w-1.5 h-1.5 rounded-full animate-pulse-dot"
          style="background-color: var(--color-accent); box-shadow: 0 0 8px rgba(161, 98, 7, 0.45)"
        />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-9">
        <NuxtLink
          v-for="l in links"
          :key="l.label"
          :to="l.href"
          :data-active="active === l.id"
          class="link-underline text-sm font-medium transition-colors duration-200"
          :style="{ color: active === l.id ? 'var(--color-text)' : 'var(--color-text-muted)' }"
        >
          {{ l.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink to="#contact" class="nav-cta hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 btn-press">
          Start a project
          <ArrowUpRight class="w-4 h-4" style="color: var(--color-accent)" />
        </NuxtLink>

        <button
          class="md:hidden p-2 rounded-lg btn-press"
          style="color: var(--color-text)"
          aria-label="Open menu"
          :aria-expanded="open"
          @click="open = true"
        >
          <Menu class="w-5 h-5" />
        </button>
      </div>
    </div>
  </header>

  <Transition name="mobile-nav">
    <div v-if="open" class="fixed inset-0 z-50 flex flex-col md:hidden" style="background-color: var(--color-bg)">
      <div class="container-custom flex items-center justify-between py-5" style="border-bottom: 1px solid var(--color-border)">
        <span class="font-display text-lg font-bold" style="color: var(--color-text)">
          wusla<span style="color: var(--color-accent)">.</span>
        </span>
        <button class="p-2 rounded-lg btn-press" style="color: var(--color-text-muted)" aria-label="Close menu" @click="open = false">
          <X class="w-5 h-5" />
        </button>
      </div>

      <nav class="flex-1 container-custom flex flex-col justify-center gap-1">
        <div v-for="(l, i) in links" :key="l.label" class="mobile-link" :style="{ animationDelay: `${i * 50}ms` }">
          <NuxtLink
            :to="l.href"
            class="flex items-center justify-between py-5 font-display text-3xl font-bold"
            style="color: var(--color-text); border-bottom: 1px solid var(--color-border)"
            @click="open = false"
          >
            <span>{{ l.label }}</span>
            <ArrowUpRight class="w-6 h-6" style="color: var(--color-accent)" />
          </NuxtLink>
        </div>
      </nav>

      <div class="container-custom py-6">
        <NuxtLink
          to="#contact"
          class="block w-full text-center font-semibold py-4 btn-press"
          style="background-color: var(--color-ink); color: var(--color-bg); border-radius: var(--radius-btn)"
          @click="open = false"
        >
          Start a project
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.nav-cta {
  color: var(--color-text);
  border: 1px solid var(--color-border-bright);
  border-radius: var(--radius-btn);
  transition:
    border-color 200ms var(--ease-out),
    background-color 200ms var(--ease-out),
    transform 160ms var(--ease-out);
}
.nav-cta:hover {
  background-color: var(--color-bg-card);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 200ms var(--ease-out);
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
}

.mobile-link {
  opacity: 0;
  transform: translateY(16px);
  animation: mobile-link-in 300ms var(--ease-out) forwards;
}
@keyframes mobile-link-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
