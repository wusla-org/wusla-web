<script setup lang="ts">
const open = ref(false);
const route = useRoute();
const header = ref<HTMLElement | null>(null);
const menuButton = ref<HTMLButtonElement | null>(null);
const mobileNavigation = ref<HTMLElement | null>(null);
const links = [{ label: "Work", href: "/portfolio" }, { label: "Capabilities", href: "/capabilities" }, { label: "Applications", href: "/applications" }, { label: "Company", href: "/company" }];

watch(() => route.path, () => { open.value = false; });
watch(open, async (isOpen) => {
  if (!import.meta.client) return;
  document.body.style.overflow = isOpen ? "hidden" : "";
  if (isOpen) {
    await nextTick();
    mobileNavigation.value?.querySelector<HTMLAnchorElement>("a")?.focus();
  }
});

useScrollTimeline(header, ({ ScrollTrigger }) => {
  ScrollTrigger.create({
    start: 24,
    end: "max",
    toggleClass: { targets: header.value!, className: "is-condensed" },
  });
});

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = "";
});

function closeMenu() { open.value = false; menuButton.value?.focus(); }
</script>

<template>
  <header ref="header" class="studio-header" :class="{ 'menu-is-open': open }" @keydown.esc="closeMenu">
    <div class="studio-container navigation-row">
      <NuxtLink to="/" class="navigation-wordmark" aria-label="WUSLA home">WUSLA</NuxtLink>
      <nav class="wide-navigation" aria-label="Primary navigation">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href">{{ link.label }}</NuxtLink>
      </nav>
      <div class="navigation-actions">
        <ThemeToggle />
        <NuxtLink to="/start" class="nav-project"><span>Start a project</span></NuxtLink>
        <button ref="menuButton" class="menu-button" :aria-expanded="open" aria-controls="mobile-navigation" @click="open = !open">{{ open ? 'Close' : 'Menu' }}</button>
      </div>
    </div>
    <Transition name="navigation-drawer">
      <nav v-if="open" id="mobile-navigation" ref="mobileNavigation" class="mobile-navigation" aria-label="Mobile navigation">
        <div class="studio-container mobile-navigation-inner">
          <NuxtLink v-for="(link, index) in links" :key="link.href" :to="link.href" :style="{ '--link-index': index }">{{ link.label }}</NuxtLink>
          <NuxtLink to="/start" class="mobile-project" :style="{ '--link-index': links.length }">Start a project</NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>
