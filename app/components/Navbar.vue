<script setup lang="ts">
const open = ref(false);
const route = useRoute();
const menuButton = ref<HTMLButtonElement | null>(null);
const links = [{ label: "Work", href: "/portfolio" }, { label: "Capabilities", href: "/capabilities" }, { label: "Applications", href: "/applications" }, { label: "Company", href: "/company" }];
watch(() => route.path, () => { open.value = false; });
function closeMenu() { open.value = false; menuButton.value?.focus(); }
</script>

<template>
  <header class="studio-header" @keydown.esc="closeMenu">
    <div class="studio-container navigation-row">
      <NuxtLink to="/" class="studio-wordmark" aria-label="WUSLA home">wusla<span aria-hidden="true">↗</span></NuxtLink>
      <nav class="wide-navigation" aria-label="Primary navigation"><NuxtLink v-for="link in links" :key="link.href" :to="link.href">{{ link.label }}</NuxtLink></nav>
      <div class="navigation-actions"><ThemeToggle /><NuxtLink to="/start" class="button button-small nav-project">Start a project <span aria-hidden="true">↗</span></NuxtLink><button ref="menuButton" class="menu-button" :aria-expanded="open" aria-controls="mobile-navigation" @click="open = !open">{{ open ? 'Close' : 'Menu' }} <span aria-hidden="true">{{ open ? '−' : '+' }}</span></button></div>
    </div>
    <nav v-if="open" id="mobile-navigation" class="mobile-navigation studio-container" aria-label="Mobile navigation"><NuxtLink v-for="link in links" :key="link.href" :to="link.href">{{ link.label }} <span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/start">Start a project <span aria-hidden="true">↗</span></NuxtLink></nav>
  </header>
</template>
