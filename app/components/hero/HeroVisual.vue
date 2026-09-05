<script setup lang="ts">
import { gsap } from "gsap";

const bars = [42, 64, 38, 78, 56, 88, 70];

const wrapEl = ref<HTMLElement | null>(null);
const tiltEl = ref<HTMLElement | null>(null);
const interactive = ref(false);

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !tiltEl.value || !wrapEl.value) return;

  const fine = window.matchMedia("(pointer: fine)").matches;
  interactive.value = fine;
  if (!fine) return;

  gsap.set(tiltEl.value, { rotateX: 0, rotateY: 0, transformPerspective: 1300 });
  const quickRotY = gsap.quickTo(tiltEl.value, "rotateY", { duration: 0.5, ease: "power3.out" });
  const quickRotX = gsap.quickTo(tiltEl.value, "rotateX", { duration: 0.5, ease: "power3.out" });

  const el = wrapEl.value;
  function onMove(e: PointerEvent) {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    quickRotY(px * -20);
    quickRotX(py * 16);
  }
  function onLeave() {
    quickRotY(0);
    quickRotX(0);
  }

  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  onUnmounted(() => {
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
  });
});
</script>

<template>
  <div ref="wrapEl" class="visual-wrap relative w-full">
    <div class="ambient-glow" aria-hidden="true" />

    <div ref="tiltEl" class="stack" :class="{ static: !interactive }" aria-hidden="true">
      <div class="surface dashboard">
        <div class="titlebar">
          <span class="dot" />
          <span class="dot" />
          <span class="dot" />
          <span class="ml-3 font-mono text-xs" style="color: var(--color-text-muted)">analytics — production</span>
        </div>

        <div class="p-6">
          <div class="flex items-end justify-between mb-1">
            <p class="font-mono text-xs uppercase tracking-widest" style="color: var(--color-text-muted)">Monthly active</p>
            <span class="font-mono text-xs px-2 py-0.5 rounded" style="color: var(--color-accent); background-color: var(--color-accent-dim)">+18.4%</span>
          </div>
          <p class="font-display font-bold nums leading-none mb-6" style="font-size: 2.2rem; color: var(--color-text)">48,120</p>

          <div class="flex items-end gap-2.5" style="height: 92px">
            <div
              v-for="(h, i) in bars"
              :key="i"
              class="flex-1"
              :style="{
                height: `${h}%`,
                borderRadius: '4px 4px 0 0',
                background: i === bars.length - 2 ? 'linear-gradient(180deg, var(--color-accent), rgba(161,98,7,0.2))' : 'var(--color-border-bright)',
              }"
            />
          </div>
        </div>
      </div>

      <div class="surface mobile-card">
        <div class="px-3 pt-3 pb-3.5">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-6 h-6 rounded-full" style="background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))" />
            <div class="flex-1">
              <span class="block h-1.5 rounded-full mb-1" style="width: 70%; background-color: var(--color-border-bright)" />
              <span class="block h-1.5 rounded-full" style="width: 45%; background-color: var(--color-border)" />
            </div>
          </div>
          <span class="block h-1.5 rounded-full mb-1.5" style="background-color: var(--color-border)" />
          <span class="block h-1.5 rounded-full mb-1.5" style="width: 85%; background-color: var(--color-border)" />
          <span class="block h-1.5 rounded-full mb-3.5" style="width: 60%; background-color: var(--color-border)" />
          <div class="h-7 rounded-lg flex items-center justify-center" style="background-color: var(--color-accent)">
            <span class="font-mono text-[9px] font-semibold" style="color: var(--color-bg)">SHIP IT</span>
          </div>
        </div>
      </div>

      <div class="deploy-chip">
        <span class="w-2 h-2 rounded-full animate-pulse-dot" style="background-color: var(--color-accent); box-shadow: 0 0 8px rgba(161, 98, 7, 0.5)" />
        <span class="font-mono text-xs font-medium" style="color: var(--color-text)">deployed</span>
        <span class="font-mono text-xs nums" style="color: var(--color-text-muted)">· 3.2s</span>
      </div>

      <div class="code-sliver font-mono">
        <div style="color: var(--color-text-muted)">$ git push</div>
        <div style="color: var(--color-accent)">✓ build passed</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visual-wrap {
  perspective: 1300px;
}
.ambient-glow {
  position: absolute;
  pointer-events: none;
  inset: -12% -8% -8% -8%;
  background: radial-gradient(60% 55% at 65% 35%, rgba(161, 98, 7, 0.14), transparent 70%);
  filter: blur(28px);
}
.stack {
  position: relative;
  transform-style: preserve-3d;
}
.stack.static {
  transform: perspective(1300px) rotateX(2deg) rotateY(-8deg);
}
.dashboard {
  position: relative;
  overflow: hidden;
  transform: translateZ(0px);
  border-radius: var(--radius-lg);
}
.titlebar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-elevated);
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-border-bright);
}
.mobile-card {
  position: absolute;
  width: 112px;
  left: -34px;
  bottom: -30px;
  transform: translateZ(60px);
  border-radius: 20px;
  box-shadow: var(--shadow-lift);
  overflow: hidden;
}
.deploy-chip {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  border-radius: 12px;
  top: -22px;
  right: -18px;
  transform: translateZ(95px);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border-bright);
  box-shadow: var(--shadow-lift);
}
.code-sliver {
  position: absolute;
  font-size: 11px;
  line-height: 1.25rem;
  padding: 0.75rem 0.875rem;
  border-radius: 12px;
  right: -30px;
  bottom: 56px;
  transform: translateZ(120px);
  background-color: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lift);
}
</style>
