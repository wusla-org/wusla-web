<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const services = [
  {
    id: "01",
    title: "Mobile Apps",
    short: "iOS & Android",
    description:
      "Cross-platform and native mobile applications that users actually love. From MVP to full product, built for performance and retention.",
    tags: ["React Native", "Swift", "Kotlin", "Expo"],
  },
  {
    id: "02",
    title: "Web Platforms",
    short: "SaaS & Portals",
    description:
      "Full-stack web applications — SaaS dashboards, client portals, marketing sites. Built on modern stacks, optimised for scale.",
    tags: ["Nuxt", "TypeScript", "PostgreSQL", "Cloudflare"],
  },
  {
    id: "03",
    title: "Desktop Software",
    short: "Cross-platform Apps",
    description:
      "Custom desktop tooling for Windows, macOS, and Linux. Internal platforms, data tools, and workflow software your team will actually use.",
    tags: ["Electron", "Tauri", "Rust", "Node.js"],
  },
  {
    id: "04",
    title: "UI / UX Design",
    short: "Product Design",
    description:
      "Design that converts. From wireframe to polished product — user research, prototyping, and production-ready design systems.",
    tags: ["Figma", "Prototyping", "Design Systems", "Motion"],
  },
  {
    id: "05",
    title: "Dedicated Team",
    short: "Monthly Contract",
    description:
      "Your full software team embedded into your workflow, on a monthly contract. Slack, GitHub, standups — however you work.",
    tags: ["Contract", "Long-term", "Embedded", "Agile"],
  },
  {
    id: "06",
    title: "Fast MVPs",
    short: "2–4 Week Delivery",
    description:
      "Validate your idea with real users before burning runway. We scope, design, and ship a production-ready MVP in weeks.",
    tags: ["MVP", "Rapid Build", "Validation", "Launch"],
  },
];

const active = ref(0);
const current = computed(() => services[active.value]);
</script>

<template>
  <section id="services" class="py-28 md:py-36" style="background-color: var(--color-bg-elevated)">
    <div class="container-custom">
      <Reveal class="mb-16 max-w-3xl">
        <div class="mono-label mb-5">What we build</div>
        <h2 class="font-display font-bold leading-[1.05]" style="font-size: clamp(2.1rem, 4.6vw, 3.6rem); color: var(--color-text)">
          Everything your product needs, under one roof.
        </h2>
      </Reveal>

      <div class="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-5 lg:gap-8">
        <Reveal :y="16" as="div" class="flex flex-col">
          <button
            v-for="(s, i) in services"
            :key="s.id"
            class="service-row group w-full flex items-center gap-4 px-4 py-4 text-left rounded-xl btn-press"
            :style="{
              backgroundColor: active === i ? 'var(--color-bg-card)' : 'transparent',
              boxShadow: active === i ? 'inset 2px 0 0 var(--color-accent)' : 'inset 2px 0 0 transparent',
            }"
            :aria-pressed="active === i"
            @click="active = i"
          >
            <span class="font-mono text-xs nums w-6 shrink-0" :style="{ color: active === i ? 'var(--color-text)' : 'var(--color-text-faint)' }">
              {{ s.id }}
            </span>
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-semibold" :style="{ color: active === i ? 'var(--color-text)' : 'var(--color-text-muted)' }">
                {{ s.title }}
              </span>
              <span class="block font-mono text-[11px] mt-0.5" style="color: var(--color-text-faint)">{{ s.short }}</span>
            </span>
            <ArrowRight
              class="w-4 h-4 shrink-0 transition-all duration-200"
              :style="{ color: 'var(--color-accent)', opacity: active === i ? 1 : 0, transform: active === i ? 'translateX(0)' : 'translateX(-6px)' }"
            />
          </button>
        </Reveal>

        <Reveal :y="16" :delay="0.05">
          <div class="surface h-full p-8 md:p-12 flex flex-col justify-between" style="border-radius: var(--radius-lg); min-height: 440px">
            <Transition name="detail-swap" mode="out-in">
              <div :key="current.id">
                <span class="font-mono text-xs nums tracking-widest" style="color: var(--color-text-muted)">
                  {{ current.id }} — {{ current.short }}
                </span>
                <h3
                  class="font-display font-bold mt-4 mb-5 leading-tight"
                  style="font-size: clamp(1.9rem, 3.2vw, 3rem); color: var(--color-text)"
                >
                  {{ current.title }}
                </h3>
                <p class="text-base leading-relaxed mb-8 max-w-xl text-pretty" style="color: var(--color-text-muted)">
                  {{ current.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in current.tags"
                    :key="tag"
                    class="font-mono text-[11px] px-3 py-1.5 rounded-md"
                    style="border: 1px solid var(--color-border); color: var(--color-text-muted)"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </Transition>

            <NuxtLink to="#contact" class="services-cta group inline-flex items-center gap-2 font-semibold text-sm mt-10">
              Start a project
              <ArrowRight class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" style="color: var(--color-accent)" />
            </NuxtLink>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-row {
  transition: background-color 200ms var(--ease-out);
}
.services-cta {
  color: var(--color-text);
}
.detail-swap-enter-active,
.detail-swap-leave-active {
  transition:
    opacity 250ms var(--ease-out),
    transform 250ms var(--ease-out);
}
.detail-swap-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.detail-swap-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
