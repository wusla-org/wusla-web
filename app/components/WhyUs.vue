<script setup lang="ts">
const reasons = [
  {
    num: "01",
    title: "You own everything",
    description:
      "Your product, code, and design work remain yours. We build for durable ownership, not dependency.",
  },
  {
    num: "02",
    title: "Built by people who ship products",
    description:
      "The people who build WUSLA products bring the same focus to partner work.",
  },
  {
    num: "03",
    title: "Clear scope, clear outcome",
    description:
      "We make the direction, scope, and next decisions easy to understand before work begins.",
  },
  {
    num: "04",
    title: "Fast to start, no ramp-up",
    description:
      "We can join at the idea stage, improve an existing product, or work alongside your internal team.",
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
          Product thinking, from first decision to launch.
          </h2>
          <p class="text-base leading-relaxed max-w-md text-pretty" style="color: var(--color-text-muted)">
            Good software needs more than delivery. It needs clear decisions, careful systems, and people who take ownership.
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

    </div>
  </section>
</template>
