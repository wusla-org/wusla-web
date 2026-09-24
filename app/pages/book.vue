<script setup lang="ts">
import { ArrowLeft, ArrowRight, Check } from "lucide-vue-next";

definePageMeta({ layout: false });

useSeoMeta({
  title: "Book a call with WUSLA",
  description: "Request a time to talk with WUSLA. We'll confirm by email and send a calendar invite.",
  ogTitle: "Book a call with WUSLA",
  ogDescription: "Request a time to talk with WUSLA. We'll confirm by email and send a calendar invite.",
});

useHead({ meta: [{ name: "theme-color", content: "#FBFBEA" }], bodyAttrs: { class: "w-body" } });

const form = reactive({ name: "", email: "", date: "", time: "", notes: "" });
const submissionStatus = ref<"idle" | "sending" | "success" | "error">("idle");

const todayIso = new Date().toISOString().slice(0, 10);
const maxDateIso = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const canSubmit = computed(() =>
  form.name.trim().length >= 2 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
  Boolean(form.date) &&
  Boolean(form.time),
);

const whenPreview = computed(() => {
  if (!form.date || !form.time) return "";
  const start = new Date(`${form.date}T${form.time}`);
  if (Number.isNaN(start.getTime())) return "";
  return start.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" });
});

async function submitBooking() {
  if (!canSubmit.value || submissionStatus.value === "sending") return;
  const start = new Date(`${form.date}T${form.time}`);
  if (Number.isNaN(start.getTime())) return;

  submissionStatus.value = "sending";
  try {
    const result = await $fetch<{ success: boolean }>("/api/book", {
      method: "POST",
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        notes: form.notes.trim(),
        startIso: start.toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    });
    if (!result.success) throw new Error("Submission was not confirmed");
    submissionStatus.value = "success";
  } catch {
    submissionStatus.value = "error";
  }
}
</script>

<template>
  <main class="book-page w-body">
    <header class="book-header">
      <NuxtLink to="/" class="book-wordmark" aria-label="WUSLA home" translate="no">WUSLA</NuxtLink>
      <NuxtLink to="/" class="return-link">
        <ArrowLeft :size="16" aria-hidden="true" />
        Return to website
      </NuxtLink>
    </header>

    <div class="book-shell">
      <section class="book-form-surface">
        <template v-if="submissionStatus !== 'success'">
          <p class="intro-label">Book a call</p>
          <h1>Request a time that works.</h1>
          <p class="intro-note">
            Pick a date and time — we'll confirm by email and send a calendar invite either way.
          </p>

          <form class="booking-form" @submit.prevent="submitBooking">
            <div class="field-grid">
              <label class="line-field">
                <span>Your name</span>
                <input v-model="form.name" type="text" maxlength="120" autocomplete="name" placeholder="Name" required>
              </label>
              <label class="line-field">
                <span>Email</span>
                <input v-model="form.email" type="email" maxlength="254" autocomplete="email" placeholder="you@company.com" required>
              </label>
              <label class="line-field">
                <span>Preferred date</span>
                <input v-model="form.date" type="date" :min="todayIso" :max="maxDateIso" required>
              </label>
              <label class="line-field">
                <span>Preferred time</span>
                <input v-model="form.time" type="time" required>
              </label>
            </div>

            <label class="line-field notes-field">
              <span>What's this about? <small>Optional</small></span>
              <textarea v-model="form.notes" rows="4" maxlength="2000" placeholder="A line or two of context helps us prepare." />
            </label>

            <p v-if="whenPreview" class="when-preview">Requesting: <strong>{{ whenPreview }}</strong> ({{ Intl.DateTimeFormat().resolvedOptions().timeZone }})</p>

            <button type="submit" class="submit-button" :disabled="!canSubmit || submissionStatus === 'sending'">
              {{ submissionStatus === "sending" ? "Sending request" : "Request this time" }}
              <ArrowRight v-if="submissionStatus !== 'sending'" :size="18" aria-hidden="true" />
            </button>

            <p v-if="submissionStatus === 'error'" class="error-message" role="alert">
              The request could not be sent. Please try again or email <a href="mailto:hello@wusla.co">hello@wusla.co</a>.
            </p>
          </form>

          <p class="privacy-note">Prefer to write instead? <NuxtLink to="/start">Start a project</NuxtLink> or email <a href="mailto:hello@wusla.co">hello@wusla.co</a>.</p>
        </template>

        <div v-else class="success-panel" role="status">
          <span class="success-mark"><Check :size="24" aria-hidden="true" /></span>
          <p class="intro-label">Request sent</p>
          <h1>We'll confirm shortly.</h1>
          <p class="intro-note">
            A calendar invite for <strong>{{ whenPreview }}</strong> is on its way to <strong>{{ form.email }}</strong>. We'll reply by email to confirm.
          </p>
          <NuxtLink to="/" class="return-home">Return to WUSLA <ArrowRight :size="17" aria-hidden="true" /></NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.book-page{--w-hair-strong:rgba(20,20,15,.22);min-height:100dvh;background:var(--w-cream);color:var(--w-ink);font-family:var(--w-sans)}
.book-header{position:sticky;z-index:20;top:0;display:flex;align-items:center;gap:24px;justify-content:space-between;padding:18px 40px;height:80px;border-bottom:1px solid var(--w-hair);background:var(--w-cream)}
.book-wordmark{font-size:1.0625rem;font-weight:600;letter-spacing:-.008em;text-decoration:none;color:var(--w-ink);margin-right:auto}
.return-link{display:inline-flex;align-items:center;gap:8px;min-height:44px;font-size:.875rem;color:var(--w-ink-soft)}
.return-link:hover{color:var(--w-ink)}
.book-shell{max-width:640px;margin-inline:auto;padding:52px clamp(20px,4vw,40px) 80px}
.book-form-surface{width:100%}
.intro-label{font:500 .8125rem/1.5 var(--w-sans);color:var(--w-emerald)}
.book-form-surface h1{font-family:var(--w-serif);font-weight:400;font-size:clamp(2.2rem,4vw,3rem);letter-spacing:-.022em;line-height:1.08;margin-block:16px}
.intro-note{font-size:1.0625rem;line-height:1.7;color:var(--w-ink-soft);max-width:52ch}
.booking-form{margin-top:36px;display:flex;flex-direction:column;gap:24px}
.field-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.line-field{display:flex;flex-direction:column;gap:10px;min-width:0}
.line-field>span{font-size:.875rem;font-weight:600}
.line-field small{font-weight:400;color:var(--w-ink-soft)}
.line-field input,.line-field textarea{background:var(--w-cream-2);border:1px solid var(--w-hair-strong);border-radius:10px;padding:13px;width:100%;min-height:48px;font:inherit;font-size:1rem;color:var(--w-ink)}
.line-field textarea{min-height:96px;resize:vertical}
.notes-field{margin-top:2px}
.when-preview{font-size:.9375rem;color:var(--w-ink-soft);padding:14px 16px;background:var(--w-emerald-hover);border-radius:10px}
.when-preview strong{color:var(--w-ink)}
.submit-button{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;font-size:.9375rem;font-weight:500;font-family:var(--w-sans);cursor:pointer;background:var(--w-emerald);color:var(--w-bone);border:1px solid var(--w-emerald);border-radius:999px;padding:0 26px;transition:background 200ms var(--w-ease),border-color 200ms var(--w-ease);align-self:flex-start}
.submit-button:hover:not(:disabled){background:var(--w-emerald-lit);border-color:var(--w-emerald-lit)}
.submit-button:disabled{opacity:.45;cursor:not-allowed}
.error-message{font-size:.9375rem;color:var(--w-ink);border-left:3px solid var(--w-emerald);padding-left:15px}
.error-message a{text-decoration:underline}
.privacy-note{margin-top:28px;font-size:.875rem;color:var(--w-ink-soft)}
.privacy-note a{color:var(--w-emerald);text-decoration:underline}
.success-panel{padding:20px 0}
.success-mark{display:grid;place-items:center;background:var(--w-emerald);color:var(--w-bone);width:54px;height:54px;border-radius:50%;margin-bottom:22px}
.return-home{display:inline-flex;align-items:center;gap:8px;min-height:44px;margin-top:28px;border-bottom:1px solid var(--w-hair-strong);font-size:.9375rem}
@media(max-width:640px){.book-header{height:74px;padding:15px 20px}.book-shell{padding:32px 20px 50px}.field-grid{grid-template-columns:1fr}}
</style>
