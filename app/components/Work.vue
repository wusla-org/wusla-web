<script setup lang="ts">
import { ArrowUpRight, Github } from "lucide-vue-next";
import { projects } from "~~/content/projects";
</script>

<template>
  <section id="work" class="py-28 md:py-36" style="background-color: var(--color-bg-elevated)">
    <div class="container-custom">
      <Reveal class="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div class="max-w-2xl">
          <div class="mono-label mb-5">Selected work</div>
          <h2 class="font-display font-bold leading-[1.05]" style="font-size: clamp(2.1rem, 4.6vw, 3.6rem); color: var(--color-text)">
            Selected client work, built to last.
          </h2>
        </div>
        <div class="hidden sm:flex items-center gap-6">
          <a
            href="https://github.com/wusla-org"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
          >
            <Github class="w-3.5 h-3.5" />
            GitHub
          </a>
          <NuxtLink to="#contact" class="link-underline font-mono text-xs uppercase tracking-widest" style="color: var(--color-text-muted)">
            Start yours →
          </NuxtLink>
        </div>
      </Reveal>

      <div class="flex flex-col gap-5">
        <Reveal v-for="(project, i) in projects" :key="project.num" :delay="i * 0.08">
          <component
            :is="project.url ? 'a' : 'div'"
            :href="project.url || undefined"
            :target="project.url ? '_blank' : undefined"
            :rel="project.url ? 'noopener noreferrer' : undefined"
            class="lift surface group block"
            style="border-radius: var(--radius-lg)"
            :aria-label="project.url ? `View ${project.name}` : undefined"
          >
            <div class="flex flex-col lg:flex-row lg:items-center gap-8 px-7 py-8 md:px-10 md:py-10">
              <div class="flex lg:flex-col lg:w-32 shrink-0 items-baseline lg:items-start gap-4 lg:gap-3">
                <span class="font-display font-bold nums leading-none select-none" style="font-size: 3.4rem; color: var(--color-border-bright)" aria-hidden="true">
                  {{ project.num }}
                </span>
                <span class="font-mono text-[11px] px-2.5 py-1 rounded-md" style="color: var(--color-accent); background-color: var(--color-accent-dim)">
                  {{ project.metric }}
                </span>
              </div>

              <div class="flex-1 min-w-0">
                <p class="font-mono text-[11px] uppercase tracking-widest mb-3" style="color: var(--color-text-muted)">
                  {{ project.category }}
                </p>
                <h3 class="font-display font-bold mb-3 leading-tight" style="font-size: clamp(1.5rem, 2.8vw, 2.1rem); color: var(--color-text)">
                  {{ project.name }}
                </h3>
                <p class="text-sm leading-relaxed mb-5 max-w-2xl text-pretty" style="color: var(--color-text-muted)">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="font-mono text-[11px] px-2.5 py-1 rounded-md"
                    style="border: 1px solid var(--color-border); color: var(--color-text-muted)"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div
                class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center self-start lg:self-center transition-all duration-200"
                style="border: 1px solid var(--color-border); color: var(--color-text-muted)"
              >
                <ArrowUpRight class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style="transition-timing-function: var(--ease-out)" />
              </div>
            </div>
          </component>
        </Reveal>
      </div>

      <Reveal class="mt-10">
        <a
          href="https://github.com/wusla-org"
          target="_blank"
          rel="noopener noreferrer"
          class="github-cta group flex items-center justify-between px-7 py-5 md:px-10"
          style="border: 1px solid var(--color-border); border-radius: var(--radius-card)"
        >
          <div class="flex items-center gap-4">
            <Github class="w-5 h-5 shrink-0" style="color: var(--color-text-muted)" />
            <div>
              <p class="font-display font-semibold text-sm" style="color: var(--color-text)">See all our open-source work</p>
              <p class="font-mono text-[11px] mt-0.5" style="color: var(--color-text-muted)">github.com/wusla-org</p>
            </div>
          </div>
          <ArrowUpRight class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style="color: var(--color-text-muted)" />
        </a>
      </Reveal>
    </div>
  </section>
</template>

<style scoped>
.github-link {
  color: var(--color-text-muted);
  transition: color 200ms;
}
.github-link:hover {
  color: var(--color-text);
}
.github-cta {
  transition: border-color 200ms var(--ease-out);
}
.github-cta:hover {
  border-color: var(--color-border-bright);
}
</style>
