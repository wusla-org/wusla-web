<script setup lang="ts">
const open = ref(false);
const route = useRoute();
const menuButton = ref<HTMLButtonElement | null>(null);
const drawer = ref<HTMLElement | null>(null);

const links = [
  { label: "Work", href: "/portfolio" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Applications", href: "/applications" },
  { label: "Company", href: "/company" },
];

watch(() => route.path, () => { open.value = false; });

watch(open, async (isOpen) => {
  if (!import.meta.client) return;
  document.body.style.overflow = isOpen ? "hidden" : "";
  if (isOpen) {
    await nextTick();
    drawer.value?.querySelector<HTMLAnchorElement>("a")?.focus();
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = "";
});

function closeMenu() {
  open.value = false;
  menuButton.value?.focus();
}
</script>

<template>
  <header class="w-nav" @keydown.esc="closeMenu">
    <div class="w-nav-in">
      <NuxtLink to="/" class="w-mark" aria-label="WUSLA home" translate="no">WUSLA</NuxtLink>

      <nav aria-label="Primary navigation">
        <ul class="w-nav-links">
          <li v-for="link in links" :key="link.href">
            <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <ThemeToggle />

      <NuxtLink to="/start" class="w-btn w-btn-sm w-nav-cta">Start a project</NuxtLink>

      <button
        ref="menuButton"
        class="w-menu-btn"
        :aria-expanded="open"
        aria-controls="mobile-navigation"
        @click="open = !open"
      >
        {{ open ? "Close" : "Menu" }}
      </button>
    </div>

    <Transition name="w-drawer-fade">
      <nav
        v-if="open"
        id="mobile-navigation"
        ref="drawer"
        class="w-drawer"
        aria-label="Mobile navigation"
      >
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href">{{ link.label }}</NuxtLink>
        <NuxtLink to="/start" class="w-btn w-btn-solid">Start a project</NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.w-drawer-fade-enter-active,
.w-drawer-fade-leave-active {
  transition: opacity 260ms cubic-bezier(.32, .72, 0, 1);
}
.w-drawer-fade-enter-from,
.w-drawer-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .w-drawer-fade-enter-active,
  .w-drawer-fade-leave-active { transition: none; }
}
</style>
