<script setup lang="ts">
const route = useRoute();

const visible = computed(() => route.path !== "/start");

watch(visible, (isVisible) => {
  if (!import.meta.client) return;
  document.body.classList.toggle("w-has-mobilecta", isVisible);
}, { immediate: true });

onBeforeUnmount(() => {
  if (import.meta.client) document.body.classList.remove("w-has-mobilecta");
});
</script>

<template>
  <div v-if="visible" class="w-mobile-cta" role="region" aria-label="Start a project">
    <a href="mailto:hello@wusla.co" class="w-mobile-cta-mail" aria-label="Email WUSLA">✉</a>
    <NuxtLink to="/start" class="w-btn w-btn-solid w-mobile-cta-btn">Start a project</NuxtLink>
  </div>
</template>
