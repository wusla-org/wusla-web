<script setup lang="ts">
const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "100%", label: "Code ownership" },
  { value: "2–4 wk", label: "MVP delivery" },
  { value: "3+", label: "Years building" },
];

const reasons = [
  {
    num: "01",
    title: "You own everything",
    description:
      "Every line of code, every design file — 100% yours from day one. No lock-in, no hidden fees, no hostage-ware.",
  },
  {
    num: "02",
    title: "A real team, not an assembly line",
    description:
      "No offshore relay races. A focused team that communicates clearly, ships quality code, and treats your product as their own.",
  },
  {
    num: "03",
    title: "Predictable monthly cost",
    description:
      "Fixed contracts. You know exactly what you're paying, what you're getting, and when it ships. Zero surprises.",
  },
  {
    num: "04",
    title: "Embedded from day one",
    description:
      "No months of hiring, onboarding, or training. We plug into your Slack, GitHub, and Notion — and we're productive immediately.",
  },
];
</script>

<template>
  <section id="why-us" class="py-28 md:py-36" style="background-color: var(--color-bg)">
    <div class="container-custom">
      <div class="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 mb-24">
        <Reveal>
          <div class="mono-label mb-5">Why WUSLA</div>
          <h2 class="font-display font-bold leading-[1.04] mb-6" style="font-size: clamp(2.1rem, 4.6vw, 3.6rem); color: var(--color-text)">
            A team that ships — and actually cares.
          </h2>
          <p class="text-base leading-relaxed max-w-md text-pretty" style="color: var(--color-text-muted)">
            Most agencies optimise for billable hours. We optimise for shipped products you fully own. Here's what that means in practice.
          </p>
        </Reveal>

        <div class="flex flex-col">
          <Reveal v-for="(r, i) in reasons" :key="r.num" :delay="i * 0.06">
            <div class="flex gap-6 md:gap-8 py-7" style="border-top: 1px solid var(--color-border)">
              <span class="font-mono text-sm nums pt-1 shrink-0" style="color: var(--color-text-faint)">{{ r.num }}</span>
              <div>
                <h3 class="font-display font-semibold text-xl mb-2 leading-snug" style="color: var(--color-text)">{{ r.title }}</h3>
                <p class="text-sm leading-relaxed max-w-lg text-pretty" style="color: var(--color-text-muted)">{{ r.description }}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-px"
          style="background-color: var(--color-border); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border)"
        >
          <div v-for="stat in stats" :key="stat.label" class="px-4 py-8 md:py-10" style="background-color: var(--color-bg)">
            <p class="font-display font-bold nums leading-none mb-2.5" style="font-size: clamp(2rem, 4vw, 3.2rem); color: var(--color-text)">
              {{ stat.value }}
            </p>
            <p class="font-mono text-xs uppercase tracking-widest" style="color: var(--color-text-muted)">{{ stat.label }}</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
