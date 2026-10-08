<script setup lang="ts">
import { ArrowUpRight, Check, Code2, Heart, Sparkles } from 'lucide-vue-next';

const root = ref<HTMLElement | null>(null);
const repaired = ref(true);
const sent = ref(false);

useScrollTimeline(root, ({ gsap }) => {
  repaired.value = false;
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: root.value, start: 'top top', end: () => `+=${Math.max(950, window.innerHeight * 1.8)}`,
      pin: root.value?.querySelector('.repair-stage'), scrub: 0.7, invalidateOnRefresh: true,
      onUpdate: (self) => { repaired.value = self.progress > 0.78; if (!repaired.value) sent.value = false; },
    },
  });
  timeline
    .fromTo('.site-paper', { rotation: -4, y: 14 }, { rotation: 0, y: 0, duration: 1 }, 0)
    .fromTo('.loose-title', { x: -13, rotation: -9 }, { x: 0, rotation: 0, duration: 1 }, 0.2)
    .fromTo('.loose-button', { x: 18, y: 14, rotation: 8 }, { x: 0, y: 0, rotation: 0, duration: 1 }, 0.2)
    .fromTo('.broken-message, .story-broken', { opacity: 1 }, { opacity: 0, duration: 0.3 }, 0.8)
    .fromTo('.code-sheet', { opacity: 0, y: 45, rotation: 8 }, { opacity: 1, y: 0, rotation: 3, duration: 0.8 }, 0.7)
    .fromTo('.story-code', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, 0.9)
    .fromTo('.wusla-patch', { x: 90, y: -180, rotation: 35, scale: 1.25, opacity: 0 }, { x: 0, y: 0, rotation: -12, scale: 1, opacity: 1, duration: 1.2, ease: 'power3.inOut' }, 1.5)
    .fromTo('.patch-peel', { scaleX: 1 }, { scaleX: 0, duration: 0.65 }, 2.4)
    .fromTo('.code-broken', { opacity: 1 }, { opacity: 0, duration: 0.25 }, 2.7)
    .fromTo('.code-fixed', { opacity: 0 }, { opacity: 1, duration: 0.25 }, 2.8)
    .to('.story-code', { opacity: 0, y: -12, duration: 0.3 }, 2.7)
    .fromTo('.story-fixed, .working-message', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, 2.9)
    .fromTo('.little-heart', { scale: 0.6, rotation: -20 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)' }, 2.9)
    .fromTo('.repair-spark', { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1, stagger: 0.08, duration: 0.4 }, 2.9)
    .to({}, { duration: 0.65 });
});
</script>

<template>
  <section ref="root" class="repair-story" aria-label="Interactive example of a broken website repaired by WUSLA as you scroll">
    <div class="repair-stage">
      <div class="story-heading">
        <h2>Paid successfully.<br>Order disappeared. Uh-oh.</h2>
        <div class="story-captions" aria-hidden="true">
          <p class="story-broken">The button is fine. The workflow isn’t. Scroll to investigate.</p>
          <p class="story-code">Follow the callback. Check the retries. Find the missing order.</p>
          <p class="story-fixed">Same shop. Orders arriving. Bandage earned.</p>
        </div>
      </div>
      <div class="repair-workbench">
        <article class="site-paper" aria-label="Illustrative shop with a failing payment-to-order workflow">
          <div class="mini-nav"><span>the little coffee shop</span><Heart class="little-heart" :size="20" aria-hidden="true" /></div>
          <div class="mini-body">
            <span class="mini-eyebrow">ONE COFFEE. AN UNEXPECTED ADVENTURE.</span>
            <h3 class="loose-title">Where’s my<br>coffee, computer?</h3>
            <p>Payment received. The kitchen heard nothing.</p>
            <div class="note-preview">{{ sent ? 'Order #1042 · received once ✓' : 'One oat latte · payment complete ✓' }}</div>
            <button class="loose-button" type="button" :disabled="!repaired" @click="sent = true">
              {{ sent ? 'Coffee is on its way!' : 'Retry the order flow' }}
              <Check v-if="sent" :size="17" aria-hidden="true" /><ArrowUpRight v-else :size="17" aria-hidden="true" />
            </button>
            <div class="mini-feedback">
              <span class="broken-message" aria-hidden="true">Order missing. Retry created a duplicate.</span>
              <span class="working-message"><Check :size="14" aria-hidden="true" />{{ sent ? 'One payment. One order. Happy kitchen.' : 'Flow repaired. Try a simulated retry.' }}</span>
            </div>
          </div>
        </article>
        <aside class="code-sheet" aria-label="Illustrative diagnostic trace, not executable repair code">
          <div class="code-heading"><Code2 :size="16" aria-hidden="true" /><span>order-flow.trace</span><span class="code-comment">behind the button</span></div>
          <pre><code><span class="code-muted">payment → callback → database</span>
reproduce: delayed callback + retry

<span class="code-change"><span class="code-broken">FAIL: missing / duplicate order</span><span class="code-fixed">PASS: one order, retries handled</span></span>
<span class="code-muted">check: state + retry handling</span>
<span class="code-muted">verify: normal + delayed flows</span></code></pre>
          <div class="wusla-patch" aria-hidden="true"><span class="patch-wing" /><span class="patch-pad">WUSLA<small>fixed with care</small></span><span class="patch-wing" /><span class="patch-peel" /></div>
        </aside>
        <Sparkles class="repair-spark spark-one" :size="32" :stroke-width="1.2" aria-hidden="true" />
        <Sparkles class="repair-spark spark-two" :size="20" :stroke-width="1.2" aria-hidden="true" />
      </div>
      <p class="demo-note">Playful simulation, not a client case study or a payment system. Real repairs need investigation and testing.</p>
    </div>
  </section>
</template>

<style scoped>
.repair-story { position: relative; margin: 0 auto 48px; max-width: 1200px; }
.repair-stage { min-height: 690px; height: 100svh; max-height: 900px; display: flex; flex-direction: column; justify-content: center; padding: 32px 40px; box-sizing: border-box; overflow: hidden; }
.story-heading { text-align: center; }
h2 { font: 400 clamp(1.8rem, 3.3vw, 3rem)/1.12 var(--w-sans); letter-spacing: -.055em; margin: 0; }
.story-captions { position: relative; height: 44px; margin-top: 12px; color: var(--w-ink-soft); font-size: .95rem; }
.story-captions p { position: absolute; inset: 0; margin: 0; }
.story-broken, .story-code { opacity: 0; }
.repair-workbench { position: relative; width: min(820px, 100%); margin: 34px auto 22px; height: 430px; }
.site-paper { position: absolute; left: 4%; top: 0; width: 54%; background: #fffefa; border: 1px solid var(--w-hair); border-radius: 16px; box-shadow: 0 18px 40px rgb(40 55 42 / .08); }
.mini-nav { display: flex; justify-content: space-between; align-items: center; padding: 17px 25px; border-bottom: 1px solid var(--w-hair); font-size: 12px; font-weight: 600; color: var(--w-emerald); }
.little-heart { fill: var(--w-emerald-pale); }
.mini-body { padding: 30px 25px 25px; }
.mini-eyebrow { font-size: 8px; letter-spacing: .13em; color: var(--w-ink-soft); }
h3 { margin: 14px 0; font: 400 clamp(1.7rem, 3vw, 2.4rem)/1.08 var(--w-sans); letter-spacing: -.055em; }
.mini-body p { font-size: 12px; color: var(--w-ink-soft); margin: 0 0 20px; }
.note-preview { font-size: 11px; border: 1px solid var(--w-hair); border-radius: 8px; padding: 15px 12px; color: var(--w-ink-soft); }
.loose-button { display: inline-flex; align-items: center; gap: 15px; margin-top: 14px; background: var(--w-emerald); color: var(--w-bone); border: none; border-radius: 8px; padding: 12px 16px; font: 500 11px var(--w-sans); cursor: pointer; }
.loose-button:disabled { cursor: not-allowed; }
.loose-button:focus-visible { outline: 3px solid var(--w-emerald); outline-offset: 4px; }
.mini-feedback { position: relative; height: 15px; margin-top: 12px; font-size: 10px; }
.mini-feedback > span { position: absolute; inset: 0; display: flex; gap: 4px; align-items: center; }
.broken-message { color: #995646; opacity: 0; }
.working-message { color: var(--w-emerald); }
.code-sheet { position: absolute; width: 47%; right: 0; top: 145px; border: 1px solid var(--w-hair); border-radius: 12px; background: var(--w-cream-2); transform: rotate(3deg); box-shadow: 0 12px 32px rgb(40 55 42 / .07); pointer-events: none; }
.code-heading { display: flex; gap: 8px; align-items: center; border-bottom: 1px solid var(--w-hair); padding: 14px 16px; font-size: 11px; }
.code-comment { margin-left: auto; color: var(--w-ink-soft); font-size: 9px; }
pre { font: 11px/1.9 monospace; padding: 18px; margin: 0; color: var(--w-emerald); overflow: hidden; }
.code-muted { color: var(--w-ink-soft); }
.code-change { display: block; position: relative; height: 21px; }
.code-change > span { position: absolute; inset: 0; }
.code-broken { color: #995646; text-decoration: underline wavy; text-underline-offset: 4px; opacity: 0; }
.wusla-patch { display: flex; align-items: center; justify-content: center; position: absolute; top: -37px; right: 25px; width: 185px; height: 64px; border: 1px solid #c6b089; border-radius: 22px; background: #ead5b3; transform: rotate(-12deg); box-shadow: 0 5px 8px rgb(67 51 26 / .12), inset 0 0 0 4px #f2e1c5; overflow: hidden; }
.patch-pad { display: grid; place-content: center; text-align: center; width: 83px; height: 46px; border: 1px solid #c6b089; border-radius: 8px; color: var(--w-emerald); background: #f6e9d3; font-size: 14px; font-weight: 650; letter-spacing: .07em; }
.patch-pad small { font-size: 6px; font-weight: 400; letter-spacing: .025em; margin-top: 3px; }
.patch-wing { flex: 1; height: 30px; background-image: radial-gradient(#b59b73 1px, transparent 1px); background-size: 7px 7px; margin: 0 6px; }
.patch-peel { position: absolute; inset: 0; background: #f8eedf; border-radius: inherit; transform: scaleX(0); transform-origin: right; }
.repair-spark { position: absolute; color: var(--w-emerald); }
.spark-one { right: 4px; top: 83px; transform: rotate(12deg); }
.spark-two { left: 0; top: 240px; transform: rotate(-15deg); }
.demo-note { text-align: center; color: var(--w-ink-soft); font-size: 11px; margin: 0; }
@media (max-width: 767px) {
  .repair-stage { padding: 24px 18px; min-height: 660px; max-height: 800px; }
  .repair-workbench { height: 490px; flex-shrink: 0; max-width: 430px; margin-top: 24px; }
  .site-paper { left: 0; width: 87%; }
  .mini-body { padding: 22px; }
  .mini-nav { padding: 14px 22px; }
  h3 { font-size: 1.9rem; }
  .code-sheet { top: 285px; width: 79%; }
  .code-heading { padding: 10px 12px; }
  pre { font-size: 9px; padding: 12px; line-height: 1.65; }
  .code-change { height: 15px; }
  .code-comment { display: none; }
  .wusla-patch { width: 150px; height: 52px; top: -29px; right: 8px; }
  .patch-pad { width: 70px; height: 38px; font-size: 12px; }
  .spark-one { right: 0; top: 175px; }
  .spark-two { left: 0; top: 370px; }
  .demo-note { font-size: 10px; max-width: 300px; align-self: center; }
}
@media (max-height: 700px) and (prefers-reduced-motion: no-preference) {
  .repair-stage { min-height: 0; height: 100svh; padding-block: 14px; }
  h2 { font-size: 1.6rem; }
  .story-captions { height: 24px; margin-top: 8px; font-size: 12px; }
  .repair-workbench { flex-shrink: 0; height: 470px; margin-top: 15px; margin-bottom: -135px; transform: scale(.7); transform-origin: top center; }
}
@media (prefers-reduced-motion: reduce) { .repair-stage { height: auto; min-height: 690px; } }
</style>
