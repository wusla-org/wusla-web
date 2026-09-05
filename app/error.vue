<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const isNotFound = computed(() => props.error.statusCode === 404);

function goHome() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <div class="min-h-[100dvh] flex items-center justify-center" style="background-color: var(--color-bg)">
    <div class="container-custom text-center">
      <template v-if="isNotFound">
        <p class="font-display font-bold mb-6 select-none" style="font-size: clamp(5rem, 20vw, 14rem); color: var(--color-bg-card); line-height: 1" aria-hidden="true">
          404
        </p>
        <h1 class="font-display font-bold mb-4" style="font-size: clamp(1.8rem, 4vw, 3rem); color: var(--color-text)">Page not found</h1>
        <p class="text-sm mb-8" style="color: var(--color-text-muted)">This page doesn't exist or was moved.</p>
        <button class="error-cta inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 btn-press" @click="goHome">Back to home</button>
      </template>

      <template v-else>
        <p class="font-mono text-xs uppercase tracking-widest mb-4" style="color: var(--color-accent)">Error</p>
        <h1 class="font-display font-bold mb-4" style="font-size: clamp(2rem, 5vw, 3.5rem); color: var(--color-text)">Something went wrong</h1>
        <p class="text-sm mb-8 max-w-sm mx-auto" style="color: var(--color-text-muted)">An unexpected error occurred. Try again or return home.</p>
        <div class="flex items-center justify-center gap-4">
          <button class="error-cta inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 btn-press" @click="goHome">Try again</button>
          <button class="error-secondary inline-flex items-center gap-2 font-semibold text-sm px-6 py-3" @click="goHome">Go home</button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.error-cta {
  background-color: var(--color-ink);
  color: var(--color-bg);
  border-radius: var(--radius-btn);
  transition: transform 160ms var(--ease-out);
}
.error-secondary {
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  border-radius: var(--radius-btn);
}
</style>
