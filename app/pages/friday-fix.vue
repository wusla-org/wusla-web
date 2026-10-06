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

useScrollTimeline(page, ({ gsap }) => {
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
  { title: 'A form that won’t send.', copy: 'Repair an existing submission flow that fails or never reaches its destination.' },
  { title: 'A feature that stopped working.', copy: 'Find and fix an error in something your software already does.' },
  { title: 'A layout that breaks on mobile.', copy: 'Restore an existing screen so people can use it on smaller devices.' },
  { title: 'An integration that fails.', copy: 'Investigate an existing connection that returns errors or no longer behaves as expected.' },
];
const faqs = [
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
      <section class="fix-hero fix-shell">
        <div class="hero-copy">
          <p class="campaign-label">A little help from WUSLA</p>
          <h1>Friday Fix.</h1>
          <p class="hero-description">10 software projects. Fixed for free. Bring us the broken feature you’ve been putting up with.</p>
          <a href="#apply" class="fix-button">Apply for a fix <ArrowUpRight :size="19" aria-hidden="true" /></a>
        </div>
        <FridayFixRepair class="hero-art" />
      </section>

      <section class="promise-strip fix-shell" aria-label="Campaign scope">
        <p><strong>10</strong><span>Selected software projects</span></p>
        <p><strong>₹0</strong><span>For the repair work</span></p>
        <p><Wrench :size="30" aria-hidden="true" /><span>Fix what exists.<br>No new or removed features.</span></p>
      </section>

      <section class="fix-shell fix-section">
        <h2>It worked once.<br>Let’s make it work again.</h2>
        <p class="section-copy">A small broken detail can get in everyone’s way. We’re making room to help with the software you already have.</p>
        <div class="example-grid">
          <article v-for="example in examples" :key="example.title">
            <Wrench :size="21" aria-hidden="true" />
            <h3>{{ example.title }}</h3>
            <p>{{ example.copy }}</p>
          </article>
        </div>
      </section>

      <section id="conditions" class="terms-section">
        <div class="fix-shell fix-section terms-layout">
          <div>
            <h2>A fix.<br>With a clear scope.</h2>
            <p class="section-copy">Free should still mean thoughtful work. Here’s what makes a project a good fit.</p>
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
          <li><span>We check the fit</span><p>We review your application and agree on a focused repair if selected.</p></li>
          <li><span>We fix and test it</span><p>We repair the agreed issue and walk you through what changed.</p></li>
        </ol>
      </section>

      <section id="apply" class="apply-section fix-shell fix-section">
        <div class="apply-intro">
          <p class="campaign-label">Friday Fix applications</p>
          <h2>What’s<br><em>not working?</em></h2>
          <p class="section-copy">Tell us about one existing problem. We’ll reply by email after reviewing whether we can help.</p>
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
            <button class="fix-button" type="submit" :disabled="status === 'sending'">{{ status === 'sending' ? 'Sending application…' : 'Apply for a fix' }}<ArrowRight :size="18" aria-hidden="true" /></button>
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
.fix-hero { display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 2rem; padding-top: 48px; padding-bottom: 56px; }
.campaign-label { font-size: .875rem; color: var(--w-emerald); margin: 0 0 1.25rem; }
h1 { font-family: var(--w-sans); font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 400; letter-spacing: -.055em; line-height: 1.15; margin: 0 0 1.5rem; }
em { font-weight: 400; }
.hero-description { max-width: 35ch; font-size: 1.125rem; line-height: 1.6; color: var(--w-ink-soft); margin-bottom: 2rem; }
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
@media (prefers-reduced-motion: no-preference) { .hero-copy { animation: fix-enter .7s both; } @keyframes fix-enter { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } } }
@media (max-width: 767px) {
  .fix-nav { height: 76px; gap: 1rem; justify-content: space-between; }
  .nav-terms { display: none; }
  .fix-hero { grid-template-columns: 1fr; padding-top: 2.5rem; padding-bottom: 2rem; gap: 2rem; }
  h1 { font-size: clamp(3rem, 12vw, 4rem); }
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
</style>
