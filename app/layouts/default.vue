<script setup lang="ts">
const route = useRoute();
const showNavigation = computed(() => route.path !== "/");
</script>

<template>
  <div>
    <Navbar v-if="showNavigation" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
