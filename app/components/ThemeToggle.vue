<script setup lang="ts">
const theme = ref('system');
onMounted(() => { theme.value = document.documentElement.dataset.theme || 'system'; });
function toggleTheme() {
  const isDark = theme.value === 'dark' || (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  theme.value = isDark ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme.value;
  try { localStorage.setItem('wusla-theme', theme.value); } catch { /* Theme works without storage. */ }
}
</script>
<template><button class="theme-toggle" aria-label="Switch colour theme" @click="toggleTheme"><span aria-hidden="true">◐</span></button></template>
