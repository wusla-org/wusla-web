<script setup lang="ts">
import { ArrowUpRight, Star } from "lucide-vue-next";
import { fetchRepositories, type Repository } from "~/utils/github";

useSeoMeta({ title: "Projects" });

const repos = ref<Repository[]>([]);
const loading = ref(true);
const headerEl = ref<HTMLElement | null>(null);

onMounted(async () => {
  repos.value = await fetchRepositories();
  loading.value = false;
});

useScrollTimeline(headerEl, ({ gsap }) => {
  gsap.fromTo(headerEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { year: "numeric", month: "short" });
}
</script>

<template>
  <div class="min-h-[100dvh] pb-32" style="background-color: var(--color-bg); color: var(--color-text)">
    <div class="container-custom pt-40 md:pt-52">
      <div ref="headerEl" class="mb-16 md:mb-24">
        <div class="section-label">Open Source</div>
        <h1 class="font-display font-bold tracking-tight leading-[1.0] mb-6" style="font-size: clamp(3rem, 8vw, 7rem); color: var(--color-text)">
          All<br >
          <span style="color: var(--color-accent)">Projects</span>
        </h1>
        <p class="text-lg leading-relaxed max-w-xl" style="color: var(--color-text-muted)">
          Open source contributions, experiments, and production-ready codebases from the WUSLA team.
        </p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="h-56 animate-pulse" style="border-radius: 14px; background-color: var(--color-bg-card)" />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="repo in repos" :key="repo.id" class="repo-card group relative flex flex-col overflow-hidden" style="border-radius: 14px">
          <div class="p-7 flex flex-col h-full">
            <div class="flex justify-between items-start mb-5">
              <span
                v-if="repo.language"
                class="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style="background-color: var(--color-accent-dim); color: var(--color-accent); border: 1px solid rgba(26, 77, 60, 0.2)"
              >
                {{ repo.language }}
              </span>
              <div class="w-9 h-9 rounded-full flex items-center justify-center ml-auto" style="border: 1px solid var(--color-border); color: var(--color-text-muted)" aria-hidden="true">
                <ArrowUpRight class="w-4 h-4" />
              </div>
            </div>

            <h2 class="font-display font-bold mb-3 leading-tight" style="font-size: 1.3rem; color: var(--color-text)">{{ repo.name }}</h2>

            <p class="text-sm leading-relaxed mb-auto line-clamp-3" style="color: var(--color-text-muted)">
              {{ repo.description ?? "No description provided." }}
            </p>

            <div class="flex items-center gap-5 pt-5 mt-5 text-xs" style="border-top: 1px solid var(--color-border); color: var(--color-text-muted)">
              <span class="flex items-center gap-1.5">
                <Star class="w-3.5 h-3.5" style="color: var(--color-accent)" aria-hidden="true" />
                {{ repo.stargazers_count }}
              </span>
              <span>Updated {{ formatDate(repo.updated_at) }}</span>
            </div>
          </div>

          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="absolute inset-0" :aria-label="`View ${repo.name} on GitHub`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repo-card {
  border: 1px solid var(--color-border);
  background-color: var(--color-bg-card);
  transition: border-color 200ms;
}
.repo-card:hover {
  border-color: var(--color-accent);
}
</style>
