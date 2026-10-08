<script setup lang="ts">
import { ArrowUpRight, ArrowRight, Check, Wrench } from 'lucide-vue-next';

definePageMeta({ layout: false });
useSeoMeta({
  title: 'Friday Fix | Free software repairs for 10 projects',
  description: 'Broken feature? Apply to Friday Fix. WUSLA will repair existing software problems in 10 selected projects, for free. No new features or removed functionality.',
  robots: 'noindex, nofollow',
});
useHead({ bodyAttrs: { class: 'w-body' } });

const form = reactive({ name: '', email: '', software: '', problem: '', permission: false });
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle');
const error = ref('');
const page = ref<HTMLElement | null>(null);
const repairProgress = ref(100);
const repairCompleted = ref(false);
const REPAIR_MEMORY_KEY = 'wusla-friday-fix-repaired-v1';
let finishRepair: (() => void) | undefined;
function replayRepair() {
  window.location.assign('/friday-fix?replay=1');
}

useScrollTimeline(page, ({ gsap, ScrollTrigger }) => {
  const intro = page.value?.querySelector('.repair-intro');
  let previouslyRepaired = false;
  const replayRequested = new URLSearchParams(window.location.search).get('replay') === '1';
  try {
    if (replayRequested) localStorage.removeItem(REPAIR_MEMORY_KEY);
    previouslyRepaired = !replayRequested && localStorage.getItem(REPAIR_MEMORY_KEY) === 'true';
  } catch { /* Storage is optional; the current visit still works. */ }
  if (replayRequested) {
    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete('replay');
    window.history.replaceState(window.history.state, '', cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  if (previouslyRepaired) {
    repairCompleted.value = true;
    void nextTick(() => {
      if (intro && window.location.hash === '#fix-content') {
        window.scrollTo({ top: intro.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
      }
    });
  }
  if (intro && !previouslyRepaired) {
    let completionQueued = false;
    const completeRepair = async () => {
      if (repairCompleted.value) return;
      repairCompleted.value = true;
      repairProgress.value = 100;
      try { localStorage.setItem(REPAIR_MEMORY_KEY, 'true'); } catch { /* Keep the completed state even if storage is blocked. */ }
      repair.scrollTrigger?.kill(true);
      repair.kill();
      gsap.set('.repair-screen', { clearProps: 'all' });
      gsap.set('.repair-screen .fix-hero', { clearProps: 'opacity,transform' });
      const hero = intro.querySelector<HTMLElement>('.fix-hero');
      if (hero) hero.scrollTop = 0;
      await nextTick();
      ScrollTrigger.refresh();
      // Removing the pin spacer must land on the repaired hero, not skip it.
      window.scrollTo({ top: intro.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
    };
    const repair = gsap.timeline({ scrollTrigger: {
      trigger: intro, start: 'top top', end: () => `+=${Math.max(1500, window.innerHeight * 2.4)}`,
      pin: '.repair-screen',
      scrub: .65, invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (repairCompleted.value) return;
        repairProgress.value = Math.round(self.progress * 100);
        if (self.progress >= .98 && !completionQueued) {
          completionQueued = true;
          queueMicrotask(() => { if (intro.isConnected) void completeRepair(); });
        }
      },
    } });
    repairProgress.value = 0;
    repair
      .fromTo('.broken-top', { xPercent: -3, yPercent: -8, rotation: -4 }, { xPercent: 0, yPercent: 0, rotation: 0, duration: 1.4, ease: 'power2.inOut' }, .6)
      .fromTo('.broken-bottom', { xPercent: 5, yPercent: 10, rotation: 5 }, { xPercent: 0, yPercent: 0, rotation: 0, duration: 1.5, ease: 'power2.inOut' }, .75)
      .fromTo('.raw-code', { opacity: 1, y: 0 }, { opacity: 0, y: -12, duration: .65 }, 1.65)
      .fromTo('.screen-bandage', { opacity: 0, x: 130, y: -220, rotation: 40, scale: 1.1 }, { opacity: 1, x: 0, y: 0, rotation: -18, scale: 1, duration: 1.2, ease: 'power2.inOut' }, .3)
      .fromTo('.screen-bandage .bandage-backing', { scaleX: 1 }, { scaleX: 0, duration: .75, ease: 'power2.inOut' }, .95)
      .to('.screen-bandage', { scale: .94, duration: .18, ease: 'power2.in' }, 1.75)
      .to('.screen-bandage', { scale: 1, duration: .35, ease: 'power2.out' }, 1.93)
      .fromTo('.exposed-source', { opacity: 1 }, { opacity: 0, duration: .5 }, 2.45)
      .fromTo('.page-tear', { scaleY: 1 }, { scaleY: 0, duration: .8 }, 2)
      .fromTo('.repair-screen .fix-hero', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .85, ease: 'power3.out' }, 3)
      .to('.screen-bandage', { opacity: 0, y: 12, duration: .5 }, 3.4)
      .to({}, { duration: .8 });
    finishRepair = () => { void completeRepair(); };
  }
  gsap.utils.toArray<HTMLElement>('.fix-section h2, .fix-section > .section-copy, .apply-intro, .application-surface, .faq-list').forEach((element) => {
    gsap.fromTo(element, { y: 28, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 92%', once: true },
    });
  });
  gsap.utils.toArray<HTMLElement>('.example-grid, .terms-list, .process-list, .promise-strip').forEach((group) => {
    gsap.fromTo(group.children, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: group, start: 'top 88%', once: true },
    });
  });
  gsap.utils.toArray<HTMLElement>('.process-list li').forEach((step) => {
    gsap.fromTo(step, { '--line-scale': 0 }, { '--line-scale': 1, ease: 'none',
      scrollTrigger: { trigger: step, start: 'top 88%', end: 'top 50%', scrub: 0.5 },
    });
  });
});
const examples = [
  { title: 'Paid. But no order. Lovely.', copy: 'Trace an existing payment-to-order flow across callbacks, retries, and saved state—not just the button.', symptom: 'Payments succeed, but orders go missing.' },
  { title: 'Works locally. Sulks in production.', copy: 'Investigate deployment, configuration, and runtime differences behind an existing workflow that fails after release.', symptom: 'An existing workflow fails in production but works locally.' },
  { title: 'The data has a double life.', copy: 'Investigate duplicate records, stale state, and synchronisation bugs across an existing integration.', symptom: 'Existing data is duplicated, stale, or out of sync.' },
  { title: 'The bug that plays hide-and-seek.', copy: 'Reproduce an intermittent failure, follow its dependencies, and test the agreed repair against the original problem.', symptom: 'An existing feature fails intermittently and is difficult to reproduce.' },
];
const selectedExample = ref<number | null>(null);
function pickProblem(index: number) {
  selectedExample.value = index;
  if (!form.problem || examples.some((example) => example.symptom === form.problem)) form.problem = examples[index]!.symptom;
}
const faqs = [
  { question: 'Why not just ask an AI?', answer: 'AI can help with debugging, and we may use it too. The work here is investigating your actual system: reproducing the failure, tracing connected services and state, checking the root cause, and testing the repair. We do not claim a problem is impossible for AI—we offer engineering judgment and an agreed, tested fix.' },
  { question: 'Why are you doing this for free?', answer: 'It is a way to introduce WUSLA through useful work rather than a sales pitch. If you need paid help later, you can ask us. There is no requirement to buy anything to receive an accepted Friday Fix repair.' },
  { question: 'Is this really free?', answer: 'The repair work is free for 10 selected software projects. Any hosting, licences, or third-party service costs remain yours. We will discuss any dependency before starting.' },
  { question: 'Can you build or remove a feature?', answer: 'No. Friday Fix restores existing functionality. New features, feature removal, redesigns, and full rebuilds are outside this campaign.' },
  { question: 'Does applying reserve a place?', answer: 'No. We review the problem, access requirements, and whether a focused repair is feasible. Your place is confirmed only when we accept your application by email.' },
  { question: 'Will everything be finished on Friday?', answer: 'Friday Fix is the campaign name. We agree on the repair scope and timing after reviewing your application, rather than promising a deadline before seeing the problem.' },
  { question: 'What access do you need?', answer: 'You must own the software or have permission to change it. If selected, we agree on the minimum access needed and a safe way to test the repair. Do not put passwords or API keys in this form.' },
];

async function submit() {
  if (status.value === 'sending') return;
  status.value = 'sending';
  error.value = '';
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        service: 'Friday Fix application',
        message: `Software: ${form.software}\n\nExisting problem:\n${form.problem}\n\nApplicant confirms ownership or permission and understands that the campaign covers repairs only.`,
      },
    });
    status.value = 'success';
  } catch (cause: unknown) {
    const failure = cause as { data?: { statusMessage?: string } };
    error.value = failure.data?.statusMessage || 'Your application could not be sent. Please try again or email hello@wusla.co.';
    status.value = 'error';
  }
}
</script>

<template>
  <div ref="page" class="w-page fix-page">
    <a href="#fix-content" class="skip-link">Skip to content</a>
    <header class="fix-nav fix-shell">
      <NuxtLink to="/" class="fix-mark" aria-label="WUSLA home">WUSLA</NuxtLink>
      <a href="#conditions" class="nav-terms">The conditions</a>
      <a href="#apply" class="fix-button compact">Apply for a fix <ArrowUpRight :size="16" aria-hidden="true" /></a>
    </header>

    <main id="fix-content" tabindex="-1">
      <section class="repair-intro" :class="{ 'repair-completed': repairCompleted }" :aria-label="repairCompleted ? 'Friday Fix: free repairs for 10 software projects' : 'Scroll to repair this Friday Fix page'">
      <div class="repair-screen">
      <div class="exposed-source" aria-hidden="true">
        <pre class="raw-code">&lt;FridayFix&gt;
  offer: 10 free software repairs
  workflow.state = undefined
  await trace(theActualProblem)
  // something underneath came loose
&lt;/FridayFix&gt;</pre>
        <div class="broken-top"><span class="loose-brand">WUSLA presents</span><div class="torn-title">Friday <span>F<span class="fallen-letter">i</span>x</span><small>&lt;/h1&gt;</small></div><span class="loose-caption">Well. That wasn’t supposed to happen.</span></div>
        <div class="broken-bottom"><span class="torn-offer">Good software.<br>Bad day.</span><span class="loose-cta">Fix my softw<span>are ↗</span></span><span class="loose-scope">10 projects. Free repairs.<br><small>Yes, the page needs one too.</small></span></div>
      </div>
      <div class="page-tear" aria-hidden="true" />
      <div class="fix-hero fix-shell" :inert="repairProgress < 75">
        <div class="hero-copy">
          <p class="campaign-label">A little WUSLA care for your software.</p>
          <h1 class="fixed-campaign-title">Friday <em>Fix.</em></h1>
          <p class="fixed-hero-tagline">Your software had a bad day.<br>Let’s get it working again.</p>
          <p class="hero-description">Payments vanish. Data duplicates. Production throws a tantrum. Bring us the broken workflow you’re tired of working around. We’ll investigate and repair an agreed issue in 10 selected projects—for free.</p>
          <a href="#apply" class="fix-button">Give my bug a bandage <ArrowUpRight :size="19" aria-hidden="true" /></a>
          <a href="#bug-picker" class="hero-secondary">Is my problem a fit?</a>
          <p class="hero-reassurance">No payment. No passwords upfront. No obligation to buy anything.</p>
        </div>
        <aside class="campaign-allocation" aria-label="Campaign limited to 10 selected projects">
          <p class="allocation-label">The Friday Fix repair club</p>
          <p class="allocation-number">10<span>projects</span></p>
          <div class="allocation-slots" aria-hidden="true"><span v-for="slot in 10" :key="slot">{{ String(slot).padStart(2, '0') }}</span></div>
          <p class="allocation-copy">10 software projects. Real investigation.<br>One agreed repair per selected project. ₹0 for our work.</p>
          <a href="#conditions" class="allocation-link">See what qualifies <ArrowRight :size="15" aria-hidden="true" /></a>
          <p class="allocation-note">10 total selections, not a live availability count.</p>
        </aside>
      </div>
      <div class="screen-bandage" aria-hidden="true"><span class="bandage-holes"/><span class="bandage-label">WUSLA<small>fixed with care</small></span><span class="bandage-holes"/><span class="bandage-backing"/></div>
      <div class="repair-guide fix-shell">
        <div><span class="repair-state">{{ repairProgress < 25 ? 'Keep scrolling. We’ve got a bandage.' : repairProgress < 60 ? 'Easy… hold those pieces together.' : repairProgress < 85 ? 'A little pressure. A little WUSLA care.' : 'There. Feels like itself again.' }}</span><p>{{ repairProgress < 85 ? 'An intentionally broken page. Your scroll puts it back together.' : 'Your software deserves this part too.' }}</p></div>
        <button v-if="repairProgress < 100" type="button" @click="finishRepair?.()">Skip the animation <ArrowRight :size="15" aria-hidden="true" /></button>
        <div v-else class="repair-replay"><span class="repair-complete"><Check :size="16" aria-hidden="true"/> Patched up</span><button type="button" @click="replayRepair">Replay the repair <ArrowRight :size="15" aria-hidden="true" /></button></div>
      </div>
      </div>
      </section>

      <section class="promise-strip fix-shell" aria-label="Campaign scope">
        <p><strong>10</strong><span>Selected software projects</span></p>
        <p><strong>₹0</strong><span>For the repair work</span></p>
        <p><Wrench :size="30" aria-hidden="true" /><span>Fix what exists.<br>No new or removed features.</span></p>
      </section>

      <section id="bug-picker" class="fix-shell fix-section">
        <h2>Pick your particular headache.</h2>
        <p class="section-copy">Not a new feature wish list. The existing workflow that’s costing you time, trust, or a suspicious number of coffees.</p>
        <div class="example-grid">
          <article v-for="(example, index) in examples" :key="example.title" :class="{ 'picked-problem': selectedExample === index }">
            <h3><button type="button" class="problem-choice" :aria-pressed="selectedExample === index" @click="pickProblem(index)"><span>{{ example.title }}</span><Check v-if="selectedExample === index" :size="21" aria-hidden="true" /><ArrowUpRight v-else :size="21" aria-hidden="true" /></button></h3>
            <p>{{ example.copy }}</p>
          </article>
        </div>
        <div class="picker-next" aria-live="polite"><p>{{ selectedExample === null ? 'Recognise one? Tap it. Or tell us about your own wonderfully annoying bug.' : 'That’s worth a look. We’ve added it to your application—you can edit the details.' }}</p><a href="#apply" class="fix-button">{{ selectedExample === null ? 'Tell us about mine' : 'Let’s investigate mine' }}<ArrowRight :size="18" aria-hidden="true" /></a></div>
      </section>

      <section class="diagnosis-section fix-shell fix-section">
        <h2>The bandage is cute.<br>The debugging goes deeper.</h2>
        <p class="section-copy">A suggested code patch is a starting point. A working system needs the surrounding context too.</p>
        <ol class="diagnosis-list"><li><strong>Make it misbehave.</strong><span>Reproduce the failure and understand the intended behaviour.</span></li><li><strong>Follow the mess.</strong><span>Trace the relevant code, services, configuration, and state to investigate the cause.</span></li><li><strong>Check the recovery.</strong><span>Test the agreed repair against the failure and relevant neighbouring flows. Explain what changed.</span></li></ol>
        <p class="diagnosis-note">AI can be part of the toolbox. Understanding your system is the job. Complex issues are welcome; feasibility, safe access, and scope still need a review.</p>
      </section>

      <section id="conditions" class="terms-section">
        <div class="fix-shell fix-section terms-layout">
          <div>
            <h2>Big headaches welcome.<br>Scope creep, not invited.</h2>
            <p class="section-copy">We can investigate a deeper failure without promising to rebuild your entire universe. Here are the ground rules.</p>
          </div>
          <div class="terms-list">
            <article><Check :size="20" aria-hidden="true" /><div><h3>Existing software. Existing problem.</h3><p>Something is broken in a website, app, or software product you already have. Tell us what should happen and what happens instead.</p></div></article>
            <article><Check :size="20" aria-hidden="true" /><div><h3>Repairs only.</h3><p>We restore intended behaviour. We do not add features, remove features, redesign the product, or rebuild the whole system.</p></div></article>
            <article><Check :size="20" aria-hidden="true" /><div><h3>Permission and a testable problem.</h3><p>You own the software or can authorise changes. You can help us reproduce the issue and arrange the access needed if selected.</p></div></article>
            <article><Check :size="20" aria-hidden="true" /><div><h3>Review before we promise.</h3><p>We select 10 projects we can reasonably repair. Scope, access, and timing are agreed by email before any work begins.</p></div></article>
          </div>
        </div>
      </section>

      <section class="fix-shell fix-section process-section">
        <h2>From broken to working.</h2>
        <ol class="process-list">
          <li><span>Tell us what’s broken</span><p>Share the software and a clear description of the problem.</p></li>
          <li><span>We follow the clues</span><p>We review the failure, access, and feasibility. If selected, we agree on the issue and timing.</p></li>
          <li><span>We fix and test it</span><p>We repair the agreed issue and walk you through what changed.</p></li>
        </ol>
      </section>

      <section id="apply" class="apply-section fix-shell fix-section">
        <div class="apply-intro">
          <p class="campaign-label">Friday Fix applications</p>
          <h2>Okay. What did<br><em>your software do?</em></h2>
          <p class="section-copy">Give us the symptoms, not a perfect technical diagnosis. Tell us what broke and who it affects. We’ll review it and reply by email.</p>
          <p class="apply-reassurance">Applying is not a commitment. No sales call required. No paid work starts without a separate agreement.</p>
          <p class="small-note">Please don’t include passwords, API keys, or private customer data.</p>
        </div>
        <div class="application-surface">
          <div v-if="status === 'success'" class="success-state" role="status" aria-live="polite">
            <Check :size="36" aria-hidden="true" />
            <h3>Your application is in.</h3>
            <p>We’ll review your problem and reply to {{ form.email }}. A place is confirmed only after we agree on the repair.</p>
          </div>
          <form v-else @submit.prevent="submit">
            <div class="form-pair">
              <label>Your name<input v-model.trim="form.name" name="name" autocomplete="name" required minlength="2" maxlength="120" :disabled="status === 'sending'"></label>
              <label>Email address<input v-model.trim="form.email" name="email" type="email" autocomplete="email" required maxlength="254" :disabled="status === 'sending'"></label>
            </div>
            <label>Software name or link<input v-model.trim="form.software" name="software" required maxlength="300" :disabled="status === 'sending'"><span class="field-help">A website URL, app name, or repository link.</span></label>
            <label>What’s broken?<textarea v-model.trim="form.problem" name="problem" rows="5" required minlength="20" maxlength="4000" :disabled="status === 'sending'" /><span class="field-help">What should happen? What happens instead? How can we reproduce it?</span></label>
            <label class="consent"><input v-model="form.permission" type="checkbox" required :disabled="status === 'sending'"><span>I own this software or have permission to authorise repairs. I understand Friday Fix covers existing problems only, and applications are reviewed before acceptance.</span></label>
            <p v-if="error" class="form-error" role="alert">{{ error }}</p>
            <button class="fix-button" type="submit" :disabled="status === 'sending'">{{ status === 'sending' ? 'Sending the symptoms…' : 'Send my bug for review' }}<ArrowRight :size="18" aria-hidden="true" /></button>
          </form>
        </div>
      </section>

      <section class="faq-section fix-shell fix-section">
        <h2>A few things to know.</h2>
        <div class="faq-list"><details v-for="faq in faqs" :key="faq.question"><summary>{{ faq.question }}<span aria-hidden="true">+</span></summary><p>{{ faq.answer }}</p></details></div>
      </section>
    </main>
    <footer class="fix-footer fix-shell"><NuxtLink to="/" class="fix-mark">WUSLA</NuxtLink><p>Useful software deserves to keep working.</p><a href="mailto:hello@wusla.co">hello@wusla.co <ArrowUpRight :size="15" aria-hidden="true" /></a></footer>
  </div>
</template>

<style scoped>
.fix-page { min-height: 100dvh; }
.repair-intro { position: relative; }
.repair-screen { position: relative; min-height: min(750px, calc(100svh - 88px)); display: flex; flex-direction: column; justify-content: center; isolation: isolate; overflow: hidden; background: var(--w-cream); }
.repair-screen .fix-hero { position: relative; width: 100%; z-index: 2; }
.exposed-source { position: absolute; inset: 0; background: var(--w-emerald); color: var(--w-bone); display: flex; flex-direction: column; justify-content: center; padding: 30px max(24px, calc((100% - 980px) / 2)); opacity: 0; z-index: -1; }
.exposed-source pre { font: clamp(12px, 1.5vw, 19px)/1.9 monospace; margin: 0; white-space: pre-wrap; }
.exposed-source > span { font: 10px/1.6 monospace; margin-top: 20px; }
.page-tear { position: absolute; inset: 0; background: var(--w-emerald); clip-path: polygon(0 38%, 15% 46%, 27% 40%, 42% 52%, 58% 43%, 72% 56%, 88% 46%, 100% 55%, 100% 72%, 85% 65%, 72% 74%, 56% 62%, 40% 70%, 24% 58%, 12% 63%, 0 55%); transform: scaleY(0); pointer-events: none; z-index: 0; }
.exposed-source { clip-path: polygon(0 38%, 15% 46%, 27% 40%, 42% 52%, 58% 43%, 72% 56%, 88% 46%, 100% 55%, 100% 72%, 85% 65%, 72% 74%, 56% 62%, 40% 70%, 24% 58%, 12% 63%, 0 55%); z-index: 1; }
.screen-bandage { position: absolute; top: 53%; left: calc(50% - 140px); width: 280px; height: 90px; display: flex; align-items: center; background: #ead5b3; border: 1px solid #c6b089; border-radius: 30px; box-shadow: inset 0 0 0 5px #f2e1c5; transform: rotate(-16deg); z-index: 3; opacity: 0; pointer-events: none; overflow: hidden; }
.bandage-holes { flex: 1; height: 45px; margin: 0 10px; background: radial-gradient(#ad8f60 1.4px, transparent 1.5px) 0 0 / 9px 9px; }
.bandage-label { width: 122px; height: 65px; border: 1px solid #c6b089; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f6e9d3; color: var(--w-emerald); font-size: 23px; font-weight: 650; letter-spacing: .04em; }
.bandage-label small { font-size: 9px; font-weight: 400; margin-top: 3px; }
.bandage-backing { position: absolute; inset: 0; background: #f8eedf; transform: scaleX(0); transform-origin: right; }
.repair-guide { position: relative; z-index: 4; width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-block: 25px; margin-top: 20px; }
.repair-state { font-size: .95rem; color: var(--w-emerald); }
.repair-guide p { margin: 5px 0 0; font-size: .8rem; color: var(--w-ink-soft); }
.repair-guide button { display: flex; align-items: center; gap: .5rem; padding: 12px 0; border: none; background: transparent; color: var(--w-emerald); font: inherit; font-size: .8rem; cursor: pointer; }
.repair-complete { display: flex; align-items: center; gap: .5rem; color: var(--w-emerald); font-size: .8rem; }
.repair-meter { height: 3px; background: var(--w-hair); }
.repair-meter span { display: block; height: 100%; background: var(--w-emerald); transform-origin: left; }
/* The unrepaired view deliberately abandons the finished design language. */
.exposed-source { inset: 0 0 105px; padding: 0; display: block; background: #f7f6ef; color: #171713; clip-path: none; z-index: 5; pointer-events: none; overflow: hidden; }
.raw-opening { position: absolute; top: 18px; left: 17px; font: 12px/1.5 monospace; }
.raw-title { position: absolute; top: 48px; left: 7%; font: bold clamp(54px, 8vw, 110px)/1 Georgia, serif; transform: rotate(-4deg); letter-spacing: -.04em; }
.raw-title > span:first-child { display: inline-block; transform: translateY(26px) rotate(24deg); color: #a42b26; }
.raw-tag { font: 20px monospace; display: inline-block; transform: translate(15px, 20px) rotate(12deg); }
.exposed-source .raw-code { position: absolute; top: 180px; left: 3%; font: clamp(12px, 1.4vw, 17px)/1.6 monospace; transform: rotate(-3deg); white-space: pre-wrap; }
.source-error { display: block; width: fit-content; padding: 2px 8px; color: #93251d; background: #ffe0d6; transform: translateX(55px) rotate(3deg); }
.raw-link { position: absolute; top: 47%; right: 8%; font: 22px 'Times New Roman', serif; color: #0000a5; text-decoration: underline; transform: rotate(13deg); }
.raw-number { position: absolute; top: 66%; right: 15%; font: bold 75px/.8 Georgia, serif; transform: rotate(17deg); }
.raw-number span { display: block; font: 17px monospace; margin-top: 12px; }
.raw-missing { position: absolute; right: 5%; top: 20%; font: 16px monospace; border: 1px dashed #8a8477; padding: 20px; transform: rotate(9deg); }
.raw-missing small { font: 11px monospace; }
.raw-footer { position: absolute; bottom: 14px; left: 17px; font: 12px/1.5 monospace; }
.screen-bandage { z-index: 6; }
@media (max-width: 767px) {
  .exposed-source { bottom: 120px; }
  .raw-title { top: 70px; left: 5%; font-size: 68px; }
  .raw-missing { top: 30%; right: -15px; padding: 12px; font-size: 12px; }
  .exposed-source .raw-code { top: 240px; font-size: 12px; }
  .raw-link { top: 73%; right: 12%; font-size: 18px; }
  .raw-number { top: 82%; right: 16%; font-size: 45px; }
  .raw-number span { font-size: 12px; }
}
@media (max-height: 700px) and (min-width: 768px) {
  .raw-title { top: 45px; font-size: 65px; }
  .exposed-source .raw-code { top: 130px; font-size: 12px; }
  .raw-missing { padding: 12px; font-size: 12px; }
  .raw-number { font-size: 48px; }
}
@media (max-height: 700px) and (min-width: 768px) {
  .repair-screen .fix-hero { padding-top: 20px; padding-bottom: 0; }
  .repair-screen h1 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: .75rem; }
  .repair-screen .hero-description { font-size: .9rem; margin-bottom: .75rem; }
  .repair-screen .campaign-allocation { padding: 1rem; }
  .repair-screen .allocation-number { font-size: 3rem; margin: .5rem 0; }
  .repair-screen .allocation-copy { margin: .5rem 0; }
  .repair-screen .allocation-note { margin-top: .5rem; }
  .repair-guide { margin-top: 0; padding-block: 16px; }
}
.fix-shell { max-width: 1080px; margin-inline: auto; padding-inline: clamp(1.25rem, 5vw, 3rem); }
.fix-nav { height: 88px; display: flex; align-items: center; gap: 2rem; }
.fix-mark { font-size: 1.4rem; font-weight: 650; letter-spacing: -.07em; color: var(--w-ink); text-decoration: none; }
.nav-terms { margin-left: auto; font-size: .875rem; color: var(--w-ink-soft); text-decoration: none; }
.fix-button { display: inline-flex; align-items: center; justify-content: center; gap: 1.25rem; background: var(--w-emerald); color: var(--w-bone); border: 1px solid var(--w-emerald); border-radius: 999px; padding: 1rem 1.5rem; font: inherit; font-size: .95rem; font-weight: 500; text-decoration: none; cursor: pointer; transition: background .2s, transform .2s; }
.fix-button:hover { background: var(--w-emerald-lit); }
.fix-button:active { transform: scale(.98); }
.fix-button:disabled { opacity: .65; cursor: wait; }
.compact { padding: .7rem 1rem; font-size: .8rem; }
a:focus-visible, button:focus-visible, summary:focus-visible { outline: 2px solid var(--w-emerald); outline-offset: 5px; }
.fix-hero { display: grid; grid-template-columns: 1.4fr 1fr; align-items: center; gap: 3rem; padding-top: 48px; padding-bottom: 36px; }
.campaign-label { font-size: .875rem; color: var(--w-emerald); margin: 0 0 1.25rem; }
h1 { font-family: var(--w-sans); font-size: clamp(2.4rem, 4.4vw, 3.7rem); font-weight: 400; letter-spacing: -.04em; line-height: 1.1; margin: 0 0 1.5rem; text-wrap: balance; }
h1 em { color: var(--w-emerald); font-style: normal; }
.hero-secondary { display: inline-block; color: var(--w-emerald); font-size: .85rem; margin: 1rem 0 0 1rem; text-underline-offset: 4px; }
.problem-choice { width: 100%; min-height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; text-align: left; border: none; background: transparent; color: inherit; padding: 0; font: inherit; cursor: pointer; }
.problem-choice h3 { margin: 0; }
.problem-choice svg { flex-shrink: 0; margin: 0; }
.picked-problem { border-top-color: var(--w-emerald) !important; }
.picked-problem h3 { color: var(--w-emerald); }
.picker-next { margin-top: 2.5rem; display: flex; align-items: center; gap: 2rem; justify-content: space-between; }
.picker-next p { max-width: 50ch; font-size: .9rem; color: var(--w-ink-soft); }
.picker-next .fix-button { flex-shrink: 0; }
.diagnosis-section { border-top: 1px solid var(--w-hair); }
.diagnosis-list { list-style: none; padding: 0; margin: 2rem 0; }
.diagnosis-list li { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; padding: 1.3rem 0; border-bottom: 1px solid var(--w-hair); }
.diagnosis-list strong { font-weight: 500; color: var(--w-emerald); }
.diagnosis-list span, .diagnosis-note, .apply-reassurance { color: var(--w-ink-soft); }
.diagnosis-note { max-width: 70ch; font-size: .9rem; }
.apply-reassurance { font-size: .85rem; margin-top: 1.5rem; }
em { font-weight: 400; }
.hero-description { max-width: 42ch; font-size: 1.05rem; line-height: 1.6; color: var(--w-ink-soft); margin-bottom: 1.5rem; }
.hero-reassurance { max-width: 40ch; color: var(--w-ink-soft); font-size: .78rem; line-height: 1.5; margin: .85rem 0 0; }
.campaign-allocation { padding: 1.8rem; background: var(--w-cream-2); border: 1px solid var(--w-hair); border-radius: 12px; }
.allocation-label { color: var(--w-emerald); font-size: .875rem; margin: 0; }
.allocation-number { display: flex; align-items: baseline; gap: .8rem; font-size: 5rem; line-height: 1; letter-spacing: -.07em; font-weight: 400; color: var(--w-emerald); margin: 1.25rem 0; }
.allocation-number span { font-size: 1rem; letter-spacing: -.025em; color: var(--w-ink-soft); }
.allocation-slots { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }
.allocation-slots span { display: grid; place-items: center; padding: .55rem .25rem; border: 1px solid var(--w-emerald-edge); border-radius: 5px; color: var(--w-emerald); font: 11px monospace; }
.allocation-copy { font-size: .85rem; line-height: 1.6; color: var(--w-ink-soft); margin: 1.2rem 0 .8rem; }
.allocation-link { display: inline-flex; align-items: center; gap: .6rem; font-size: .85rem; color: var(--w-emerald); text-decoration: none; }
.allocation-link:hover { text-decoration: underline; }
.allocation-note { font-size: .68rem; line-height: 1.5; color: var(--w-ink-soft); margin: 1rem 0 0; }
.hero-art { margin: 0; }
.hero-art img { width: 100%; height: auto; aspect-ratio: 1.5; object-fit: cover; border-radius: 0; }
.promise-strip { display: grid; grid-template-columns: 1fr 1fr 1.2fr; padding-block: 2rem; border-block: 1px solid var(--w-hair); }
.promise-strip p { display: flex; align-items: center; gap: 1.25rem; margin: 0; }
.promise-strip strong { font-size: 2rem; font-weight: 400; letter-spacing: -.05em; }
.promise-strip span { font-size: .875rem; color: var(--w-ink-soft); max-width: 19ch; }
.promise-strip svg { color: var(--w-emerald); }
.fix-section { padding-block: clamp(3rem, 6vw, 5rem); }
h2 { font-family: var(--w-sans); font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.2; letter-spacing: -.04em; font-weight: 400; margin: 0; }
.section-copy { max-width: 46ch; color: var(--w-ink-soft); margin: 1.5rem 0 0; }
.example-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem 5rem; margin-top: 3.5rem; }
.example-grid article { border-top: 1px solid var(--w-hair); padding-top: 1.5rem; }
.example-grid svg { color: var(--w-emerald); margin-bottom: 1.25rem; }
h3 { font-size: 1.2rem; font-weight: 500; margin: 0 0 .65rem; letter-spacing: -.025em; }
.example-grid p, .terms-list p, .process-list p { color: var(--w-ink-soft); font-size: 1rem; max-width: 43ch; margin: 0; }
.terms-section { background: var(--w-cream-2); }
.terms-layout { display: grid; grid-template-columns: 1fr 1.1fr; gap: 5rem; }
.terms-list { display: grid; gap: 2.25rem; }
.terms-list article { display: flex; gap: 1rem; }
.terms-list svg { color: var(--w-emerald); flex-shrink: 0; margin-top: .2rem; }
.process-list { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin: 3rem 0 0; }
.process-list li { position: relative; border-top: 1px solid var(--w-hair); padding-top: 1.5rem; }
.process-list li::before { content: ''; position: absolute; top: -1px; left: 0; right: 0; height: 2px; background: var(--w-emerald); transform: scaleX(var(--line-scale, 1)); transform-origin: left; }
.process-list span { display: block; font-size: 1.2rem; font-weight: 500; margin-bottom: 1rem; }
.apply-section { display: grid; grid-template-columns: 1fr 1.15fr; gap: 5rem; border-top: 1px solid var(--w-hair); }
.small-note { font-size: .85rem; color: var(--w-ink-soft); max-width: 35ch; margin-top: 2rem; }
.application-surface { background: var(--w-cream-2); padding: clamp(1.5rem, 3vw, 2.5rem); border-radius: 16px; }
form { display: grid; gap: 1.5rem; }
.form-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
label { display: grid; gap: .6rem; font-size: .875rem; font-weight: 500; }
input:not([type=checkbox]), textarea { width: 100%; min-width: 0; border: 1px solid var(--w-emerald-edge); border-radius: 8px; padding: .8rem; background: var(--w-cream); color: var(--w-ink); font: inherit; font-size: 1rem; }
textarea { resize: vertical; }
input:focus-visible, textarea:focus-visible { outline: 2px solid var(--w-emerald); outline-offset: 2px; }
.field-help { font-size: .78rem; color: var(--w-ink-soft); font-weight: 400; }
.consent { display: flex; align-items: flex-start; gap: .75rem; font-weight: 400; font-size: .8rem; color: var(--w-ink-soft); }
.consent input { margin-top: .25rem; accent-color: var(--w-emerald); flex-shrink: 0; width: 17px; height: 17px; }
.form-error { color: #912b26; font-size: .875rem; margin: 0; }
.success-state { padding-block: 2rem; }
.success-state svg { color: var(--w-emerald); margin-bottom: 1.5rem; }
.success-state p { color: var(--w-ink-soft); }
.faq-section { display: grid; grid-template-columns: .9fr 1.1fr; gap: 4rem; border-top: 1px solid var(--w-hair); }
details { border-bottom: 1px solid var(--w-hair); padding-block: 1.2rem; }
summary { display: flex; justify-content: space-between; align-items: center; gap: 1rem; cursor: pointer; font-size: 1rem; font-weight: 500; list-style: none; }
summary::-webkit-details-marker { display: none; }
summary span { font-size: 1.4rem; font-weight: 300; }
details[open] summary span { transform: rotate(45deg); }
details p { color: var(--w-ink-soft); font-size: .95rem; margin: 1rem 0 0; }
.fix-footer { display: flex; align-items: center; gap: 2rem; padding-block: 2rem; border-top: 1px solid var(--w-hair); }
.fix-footer p { font-size: .85rem; color: var(--w-ink-soft); margin: 0; }
.fix-footer a:last-child { display: flex; align-items: center; gap: .5rem; margin-left: auto; font-size: .85rem; color: var(--w-ink); text-decoration: none; }
section[id] { scroll-margin-top: 1.5rem; }
@media (max-width: 767px) {
  .repair-screen { min-height: calc(100svh - 76px); }
  .repair-screen .fix-hero { gap: 1rem; padding-top: 1.5rem; padding-bottom: 0; }
  .repair-screen .campaign-allocation { padding: 1rem; }
  .repair-screen .allocation-number { font-size: 2.8rem; margin: .6rem 0; }
  .repair-screen .allocation-slots { grid-template-columns: repeat(10, 1fr); gap: 3px; }
  .repair-screen .allocation-slots span { font-size: 9px; }
  .repair-screen .allocation-copy { margin: .6rem 0; }
  .repair-screen .allocation-note { margin-top: .5rem; }
  .repair-guide { margin-top: 0; padding-block: 18px; align-items: flex-start; }
  .repair-guide button { max-width: 110px; flex-shrink: 0; text-align: left; }
  .screen-bandage { width: 220px; height: 74px; left: calc(50% - 110px); }
  .bandage-label { width: 100px; height: 52px; font-size: 18px; }
  .picker-next { flex-direction: column; align-items: flex-start; gap: .75rem; }
  .diagnosis-list li { grid-template-columns: 1fr; gap: .5rem; }
  .hero-secondary { margin-left: 0; display: block; }
  .fix-nav { height: 76px; gap: 1rem; justify-content: space-between; }
  .nav-terms { display: none; }
  .fix-hero { grid-template-columns: 1fr; padding-top: 2.5rem; padding-bottom: 2rem; gap: 2rem; }
  h1 { font-size: clamp(2.3rem, 9vw, 3.4rem); }
  .campaign-allocation { padding: 1.4rem; }
  .hero-description { max-width: 32ch; }
  .hero-art img { aspect-ratio: 1.7; }
  .promise-strip { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .promise-strip p:last-child { grid-column: 1 / -1; }
  .promise-strip strong { font-size: 2.2rem; }
  .example-grid, .terms-layout, .process-list, .apply-section, .faq-section { grid-template-columns: 1fr; gap: 2.5rem; }
  .example-grid { margin-top: 2.5rem; }
  .form-pair { grid-template-columns: 1fr; gap: 1.5rem; }
  .fix-footer { flex-wrap: wrap; gap: 1rem; }
  .fix-footer p { width: 100%; order: 3; }
}
/* Full-screen page fragments: the page is the scene, never a framed demo. */
.repair-screen { height: 100svh; min-height: 0; justify-content: center; }
.repair-completed .exposed-source, .repair-completed .page-tear, .repair-completed .screen-bandage { display: none; }
.repair-completed .repair-screen { height: auto; min-height: calc(100svh - 88px); padding-bottom: 100px; }
.repair-completed .repair-screen .fix-hero { max-height: none; overflow: visible; opacity: 1 !important; transform: none !important; }
.repair-screen .fix-hero { max-height: calc(100% - 100px); overflow-y: auto; padding-block: 30px; }
.exposed-source { inset: 0; background: #183e30; clip-path: none; }
.exposed-source .raw-code { top: 40%; left: 17%; font: clamp(11px, 1.6vw, 20px)/1.65 monospace; color: #f4ecda; transform: rotate(-3deg); }
.broken-top, .broken-bottom { position: absolute; left: -5%; width: 110%; background: var(--w-cream); color: var(--w-ink); }
.broken-top { top: -5%; height: 53%; clip-path: polygon(0 0, 100% 0, 100% 93%, 86% 86%, 72% 96%, 60% 88%, 45% 98%, 30% 89%, 16% 96%, 0 88%); transform-origin: 25% 30%; }
.broken-bottom { bottom: -5%; height: 52%; clip-path: polygon(0 12%, 16% 4%, 30% 11%, 45% 2%, 60% 12%, 72% 4%, 86% 14%, 100% 7%, 100% 100%, 0 100%); transform-origin: 80% 70%; }
.loose-brand { position: absolute; top: 14%; left: 12%; font: 15px var(--w-sans); transform: rotate(7deg); }
.torn-title { position: absolute; top: 30%; left: 10%; font: 500 clamp(64px, 11vw, 160px)/.9 var(--w-sans); letter-spacing: -.04em; white-space: nowrap; }
.torn-title > span { display: inline-block; transform: translate(15px, 28px) rotate(10deg); }
.fallen-letter { display: inline-block; transform: translateY(28px) rotate(-24deg); color: #a33c27; }
.torn-title small { position: absolute; right: -25px; bottom: -24px; font: 15px monospace; transform: rotate(-17deg); }
.loose-caption { position: absolute; bottom: 17%; right: 13%; font: 17px var(--w-sans); transform: rotate(5deg); }
.torn-offer { position: absolute; top: 26%; left: 13%; font: 400 clamp(28px, 4.5vw, 68px)/1.06 var(--w-sans); letter-spacing: -.03em; transform: rotate(-8deg); }
.loose-cta { position: absolute; top: 37%; right: 15%; background: var(--w-emerald); color: var(--w-bone); padding: 18px 28px; border-radius: 4px; font: 18px var(--w-sans); transform: rotate(12deg); }
.loose-cta span { display: inline-block; transform: translate(12px, 25px) rotate(15deg); }
.loose-scope { position: absolute; top: 67%; right: 15%; font: 18px/1.5 var(--w-sans); transform: rotate(-5deg); }
.loose-scope small { font-size: 13px; }
.screen-bandage { top: calc(50% - 45px); width: 320px; left: calc(50% - 160px); height: 100px; }
.repair-guide { position: absolute; left: 0; right: 0; bottom: 0; padding-block: 18px; background: var(--w-cream); margin: 0; }
@media (max-width: 767px) {
  .repair-screen { height: 100svh; min-height: 0; }
  .repair-screen .fix-hero { grid-template-columns: 1fr; max-height: calc(100% - 100px); padding-block: 20px; }
  .repair-screen .campaign-allocation { display: none; }
  .repair-screen h1 { font-size: clamp(2.1rem, 8vw, 3rem); }
  .repair-screen .hero-description { font-size: .95rem; }
  .torn-title { font-size: clamp(55px, 13vw, 100px); top: 32%; }
  .loose-caption { font-size: 13px; bottom: 16%; right: 10%; }
  .loose-brand { font-size: 13px; top: 15%; }
  .exposed-source .raw-code { top: 40%; left: 10%; font-size: 11px; }
  .torn-offer { font-size: 35px; top: 22%; }
  .loose-cta { font-size: 13px; top: 47%; right: 13%; padding: 12px 15px; }
  .loose-scope { font-size: 13px; top: 68%; right: 13%; }
  .loose-scope small { font-size: 11px; }
  .screen-bandage { width: 240px; height: 80px; left: calc(50% - 120px); top: calc(50% - 40px); }
  .repair-state { font-size: .8rem; }
  .repair-guide p { font-size: .7rem; max-width: 30ch; }
}
@media (prefers-reduced-motion: reduce) {
  .repair-screen { height: auto; min-height: 100svh; padding-bottom: 100px; }
  .repair-screen .fix-hero { max-height: none; overflow: visible; }
}
/* Once repaired, this is ordinary document content—not a pinned/clipped stage. */
.repair-completed .repair-screen { display: block; position: relative !important; inset: auto !important; height: auto !important; max-height: none; min-height: calc(100svh - 88px); overflow: visible; padding: 0; }
.repair-completed .repair-screen .fix-hero { max-height: none; overflow: visible; padding-block: clamp(48px, 8vh, 96px); }
.repair-completed .repair-guide { position: relative; inset: auto; margin-top: 0; padding-block: 20px; }
.repair-completed .repair-screen .campaign-allocation { display: block; }
.repair-screen h1.fixed-campaign-title { font-size: clamp(3.6rem, 8vw, 6rem); line-height: .98; letter-spacing: -.04em; margin-bottom: 1.25rem; }
.fixed-hero-tagline { font-size: clamp(1.2rem, 2.2vw, 1.65rem); line-height: 1.3; margin: 0 0 1.25rem; color: var(--w-ink); }
.repair-replay { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; }
@media (max-width: 767px) {
  .repair-screen h1.fixed-campaign-title { font-size: clamp(3.3rem, 14vw, 5rem); }
}
</style>
