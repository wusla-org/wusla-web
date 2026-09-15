<script setup lang="ts">
import { fetchRepositories, type Repository } from "~/utils/github";
import WRevealLines from "~/components/WRevealLines.vue";
import WReveal from "~/components/WReveal.vue";

useSeoMeta({
  title: "Open source projects",
  description: "Open source contributions, experiments, and production-ready codebases from the WUSLA team.",
});

useHead({ bodyAttrs: { class: "w-body" } });

const repos = ref<Repository[]>([]);
const loading = ref(true);

onMounted(async () => {
  repos.value = await fetchRepositories();
  loading.value = false;
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { year: "numeric", month: "short" });
}
</script>

<template>
  <div class="w-page">
    <section class="w-shell w-shell-wide w-hero">
      <p class="w-eyebrow">Open source</p>
      <WRevealLines
        as="h1"
        class="w-hero-title"
        immediate
        :lines="[{ text: 'All projects.', italic: true }]"
      />
      <WReveal as="div" :delay="0.3" :y="18">
        <p class="w-lede">Open source contributions, experiments, and production-ready codebases from the WUSLA team.</p>
      </WReveal>
    </section>

    <section class="w-shell w-band" aria-label="GitHub repositories">
      <div v-if="loading" class="w-repo-grid">
        <div v-for="i in 6" :key="i" class="w-repo-skel" />
      </div>

      <div v-else class="w-repo-grid">
        <WReveal v-for="(repo, i) in repos" :key="repo.id" as="div" :delay="Math.min(i, 5) * 0.05">
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="w-repo-card" :aria-label="`View ${repo.name} on GitHub`">
            <div class="w-repo-top">
              <span v-if="repo.language" class="w-repo-lang">{{ repo.language }}</span>
              <span v-else />
              <span class="w-repo-arrow" aria-hidden="true">↗</span>
            </div>
            <h3>{{ repo.name }}</h3>
            <p class="w-repo-desc">{{ repo.description ?? "No description provided." }}</p>
            <div class="w-repo-foot">
              <span class="w-repo-star">★ {{ repo.stargazers_count }}</span>
              <span>Updated {{ formatDate(repo.updated_at) }}</span>
            </div>
          </a>
        </WReveal>
      </div>
    </section>
  </div>
</template>
