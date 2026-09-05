<script setup lang="ts">
import { projects, getCapabilities } from "~~/content/projects";

useSeoMeta({ title: "Portfolio" });

const capabilities = getCapabilities();
const stats = [
  { value: capabilities.totalTechnologies, label: "Technologies" },
  { value: capabilities.focusAreas, label: "Focus Areas" },
  { value: capabilities.approachType, label: "Approach" },
  { value: capabilities.projectsShipped, label: "Projects Shipped" },
];

const headerEl = ref<HTMLElement | null>(null);
useScrollTimeline(headerEl, ({ gsap }) => {
  gsap.fromTo(headerEl.value, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
});
</script>

<template>
  <div class="min-h-[100dvh]" style="background-color: var(--color-bg); color: var(--color-text)">
    <section class="pt-36 pb-20">
      <div class="container-custom">
        <div ref="headerEl">
          <div class="section-label">Our Work</div>
          <h1 class="font-display font-bold tracking-tight leading-[1.0] mb-6" style="font-size: clamp(3rem, 8vw, 7rem); color: var(--color-text)">
            Selected<br >
            <span style="color: var(--color-accent)">Projects</span>
          </h1>
          <p class="text-lg leading-relaxed max-w-xl" style="color: var(--color-text-muted)">
            A cross-section of what we've shipped — across web, mobile, and platform engineering.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 overflow-hidden" style="border: 1px solid var(--color-border); border-radius: 14px">
          <div
            v-for="(item, i) in stats"
            :key="item.label"
            class="flex flex-col justify-center px-6 py-6"
            :style="{ backgroundColor: 'var(--color-bg-card)', borderRight: i < 3 ? '1px solid var(--color-border)' : 'none' }"
          >
            <p class="font-display font-bold leading-none mb-1" style="font-size: clamp(1.5rem, 3vw, 2.2rem); color: var(--color-accent)">
              {{ item.value }}
            </p>
            <p class="text-xs font-medium" style="color: var(--color-text-muted)">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container-custom">
        <div class="flex flex-col gap-6">
          <Reveal v-for="(project, i) in projects" :key="project.num" as="article" :delay="i * 0.07">
            <div class="grid md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10" style="border: 1px solid var(--color-border); background-color: var(--color-bg-card); border-radius: 14px">
              <div>
                <div class="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    class="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style="background-color: var(--color-accent-dim); color: var(--color-accent); border: 1px solid rgba(161, 98, 7, 0.2)"
                  >
                    {{ project.category }}
                  </span>
                  <span class="text-xs font-semibold" style="color: var(--color-accent)">{{ project.metric }}</span>
                </div>

                <h2 class="font-display font-bold mb-3 leading-tight" style="font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--color-text)">
                  {{ project.name }}
                </h2>

                <p class="text-sm leading-relaxed mb-6 max-w-2xl" style="color: var(--color-text-muted)">{{ project.description }}</p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tech in project.tags"
                    :key="tech"
                    class="text-xs font-medium px-3 py-1.5 rounded-full"
                    style="border: 1px solid var(--color-border); color: var(--color-text-muted)"
                  >
                    {{ tech }}
                  </span>
                </div>

                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold" style="color: var(--color-accent)">
                  View Live ↗
                </a>
              </div>

              <div
                class="hidden md:flex items-center justify-center w-28 h-28 shrink-0"
                style="background-color: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 16px"
                aria-hidden="true"
              >
                <span class="font-display font-bold nums" style="font-size: 2.2rem; color: var(--color-border-bright)">{{ project.num }}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="py-20" style="background-color: var(--color-bg-elevated)">
      <div class="container-custom text-center">
        <h2 class="font-display font-bold mb-6" style="font-size: clamp(2rem, 4vw, 3rem); color: var(--color-text)">
          Want to be our next project?
        </h2>
        <NuxtLink to="/#contact" class="portfolio-cta inline-flex items-center gap-2 font-semibold text-base px-8 py-4 btn-press" style="border-radius: var(--radius-btn)">
          Start a Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-cta {
  background-color: var(--color-ink);
  color: var(--color-bg);
  transition:
    box-shadow 200ms var(--ease-out),
    transform 160ms var(--ease-out);
}
.portfolio-cta:hover {
  box-shadow: var(--shadow-accent);
}
</style>
