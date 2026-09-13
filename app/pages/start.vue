<script setup lang="ts">
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-vue-next";

definePageMeta({ layout: false });

useSeoMeta({
  title: "Start a project with WUSLA",
  description:
    "Tell WUSLA what you want to create, improve, or solve. Share a concise private project brief with our product and engineering team.",
  ogTitle: "Start a project with WUSLA",
  ogDescription:
    "Bring WUSLA the product idea, existing application, or difficult technical problem that needs a focused team.",
});

useHead({ meta: [{ name: "theme-color", content: "#064a37" }] });

const step = ref(0);
const submissionStatus = ref<"idle" | "sending" | "success" | "error">("idle");
const questionHeading = ref<HTMLElement | null>(null);

const brief = reactive({
  project: "",
  intent: "",
  stage: "",
  timing: "",
  budget: "",
  name: "",
  email: "",
  company: "",
  reference: "",
});

const steps = [
  { short: "The opportunity", prompt: "Tell us what should exist." },
  { short: "The work", prompt: "Name the kind of work." },
  { short: "The starting point", prompt: "Show us where things stand." },
  { short: "The timing", prompt: "Give the work some context." },
  { short: "The introduction", prompt: "Tell us where to reply." },
  { short: "Review your note", prompt: "Make sure it sounds like you." },
];

const intentOptions = [
  { value: "new-product", title: "A new software product", note: "Turn an idea or opportunity into a thoughtful, working application." },
  { value: "existing-product", title: "An existing product", note: "Improve, extend, or rethink software that is already in use." },
  { value: "technical-problem", title: "A difficult technical problem", note: "Untangle an important constraint in architecture, data, performance, or delivery." },
  { value: "not-sure", title: "We need help finding the right shape", note: "Start with the problem and work out the right intervention together." },
];

const stageOptions = [
  { value: "idea", title: "An idea or early research", note: "The opportunity is clear, but the product is not yet defined." },
  { value: "design", title: "Designs or a prototype", note: "The experience has begun taking shape and needs a path to production." },
  { value: "working", title: "A working product", note: "People already use it, and the next important move is now visible." },
  { value: "rebuild", title: "A rebuild or scale-up", note: "The current system is holding the product or business back." },
];

const timingOptions = [
  { value: "soon", title: "As soon as the right plan is clear" },
  { value: "one-three", title: "Within the next 1 to 3 months" },
  { value: "three-six", title: "Within the next 3 to 6 months" },
  { value: "exploring", title: "We are exploring, not scheduling yet" },
];

const labelFor = (options: { value: string; title: string }[], value: string) =>
  options.find((option) => option.value === value)?.title || "Not shared";

const canContinue = computed(() => {
  if (step.value === 0) return brief.project.trim().length >= 20;
  if (step.value === 1) return Boolean(brief.intent);
  if (step.value === 2) return Boolean(brief.stage);
  if (step.value === 3) return true;
  if (step.value === 5) return true;
  return Boolean(
    brief.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim()) &&
      (!brief.reference.trim() || /^https?:\/\/\S+\.\S+$/i.test(brief.reference.trim())),
  );
});

const progress = computed(() => ((step.value + 1) / steps.length) * 100);

async function focusQuestion() {
  await nextTick();
  questionHeading.value?.focus({ preventScroll: true });
}

function goNext() {
  if (!canContinue.value || step.value >= steps.length - 1) return;
  step.value += 1;
  focusQuestion();
}

function goBack() {
  if (submissionStatus.value === 'sending') return;
  if (step.value === 0) return;
  step.value -= 1;
  focusQuestion();
}

function visitStep(index: number) {
  if (submissionStatus.value === 'sending') return;
  if (index >= step.value) return;
  step.value = index;
  focusQuestion();
}

function projectMessage() {
  return [
    "PROJECT NOTE",
    "",
    `What we want to create or improve:\n${brief.project.trim()}`,
    "",
    `Kind of work: ${labelFor(intentOptions, brief.intent)}`,
    `Current stage: ${labelFor(stageOptions, brief.stage)}`,
    `Preferred timing: ${labelFor(timingOptions, brief.timing)}`,
    `Investment context: ${brief.budget.trim() || "Not shared"}`,
    `Company: ${brief.company.trim() || "Not shared"}`,
    `Reference: ${brief.reference.trim() || "Not shared"}`,
  ].join("\n");
}

async function submitBrief() {
  if (step.value !== 5 || submissionStatus.value === "sending" || brief.project.trim().length < 20 || !brief.intent || !brief.stage || brief.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim())) return;

  submissionStatus.value = "sending";
  try {
    const result = await $fetch<{ success: boolean }>("/api/contact", {
      method: "POST",
      body: {
        name: brief.name.trim(),
        email: brief.email.trim(),
        service: labelFor(intentOptions, brief.intent),
        message: projectMessage(),
      },
    });
    if (!result.success) throw new Error('Submission was not confirmed');
    submissionStatus.value = "success";
  } catch {
    submissionStatus.value = "error";
  }
}
</script>

<template>
  <main class="start-page">
    <header class="start-header">
      <NuxtLink to="/" class="start-wordmark" aria-label="WUSLA home">WUSLA</NuxtLink>
      <ThemeToggle />
      <NuxtLink to="/" class="return-link">
        <ArrowLeft :size="16" aria-hidden="true" />
        Return to website
      </NuxtLink>
    </header>

    <div class="intake-shell">
      <aside class="intake-intro">
        <div class="intro-copy">
          <p class="intro-label">Project enquiries</p>
          <h1>Tell us what should exist.</h1>
          <p class="intro-note">
            Start with the problem, the ambition, or the unfinished thought. We will work out the technical shape together.
          </p>
        </div>

        <ol class="step-list" aria-label="Project brief progress">
          <li v-for="(item, index) in steps" :key="item.short" :class="{ active: index === step, complete: index < step }">
            <button type="button" :disabled="index >= step || submissionStatus === 'sending'" :aria-current="index === step ? 'step' : undefined" @click="visitStep(index)">
              <span class="step-number">{{ String(index + 1).padStart(2, "0") }}</span>
              <span>{{ item.short }}</span>
              <Check v-if="index < step" :size="15" aria-hidden="true" />
            </button>
          </li>
        </ol>

        <p class="privacy-note">Your note is private and goes directly to WUSLA.</p>
      </aside>

      <section class="letter-surface" aria-labelledby="active-question">
        <div class="letter-header">
          <span>Private project note</span>
          <span class="letter-count">{{ String(step + 1).padStart(2, "0") }} / {{ String(steps.length).padStart(2, "0") }}</span>
        </div>

        <div class="mobile-progress" aria-hidden="true">
          <span v-for="(_, index) in steps" :key="index" :class="{ filled: index <= step }" />
        </div>

        <div v-if="submissionStatus !== 'success'" class="question-stage">
          <Transition name="question" mode="out-in" @after-enter="focusQuestion">
            <fieldset :key="step" class="question-panel">
              <legend class="sr-only">{{ steps[step]?.prompt }}</legend>

              <template v-if="step === 0">
                <p class="question-context">Begin with the substance</p>
                <h2 id="active-question" ref="questionHeading" tabindex="-1">What are you trying to create or improve?</h2>
                <p class="question-help">A few honest sentences are more useful than a polished pitch.</p>
                <label class="large-text-field">
                  <span class="sr-only">Describe the product, problem, or opportunity</span>
                  <textarea
                    v-model="brief.project"
                    rows="7"
                    maxlength="1800"
                    autofocus
                    placeholder="There is a problem we keep seeing..."
                    @keydown.ctrl.enter="goNext"
                  />
                  <span class="field-meta">
                    <span>At least 20 characters</span>
                    <span>{{ brief.project.length }} / 1800</span>
                  </span>
                </label>
              </template>

              <template v-else-if="step === 1">
                <p class="question-context">Define the engagement</p>
                <h2 id="active-question" ref="questionHeading" tabindex="-1">What kind of work is this?</h2>
                <p class="question-help">Choose the closest answer. It does not lock the project into a category.</p>
                <div class="choice-list">
                  <label v-for="option in intentOptions" :key="option.value" :class="{ selected: brief.intent === option.value }">
                    <input v-model="brief.intent" type="radio" name="intent" :value="option.value">
                    <span class="choice-mark"><Check :size="15" aria-hidden="true" /></span>
                    <span class="choice-copy"><strong>{{ option.title }}</strong><small>{{ option.note }}</small></span>
                  </label>
                </div>
              </template>

              <template v-else-if="step === 2">
                <p class="question-context">Locate the starting point</p>
                <h2 id="active-question" ref="questionHeading" tabindex="-1">Where is the work today?</h2>
                <p class="question-help">We can enter before the product is defined or after it is already running.</p>
                <div class="choice-list">
                  <label v-for="option in stageOptions" :key="option.value" :class="{ selected: brief.stage === option.value }">
                    <input v-model="brief.stage" type="radio" name="stage" :value="option.value">
                    <span class="choice-mark"><Check :size="15" aria-hidden="true" /></span>
                    <span class="choice-copy"><strong>{{ option.title }}</strong><small>{{ option.note }}</small></span>
                  </label>
                </div>
              </template>

              <template v-else-if="step === 3">
                <p class="question-context">Optional practical context</p>
                <h2 id="active-question" ref="questionHeading" tabindex="-1">When would you like to begin?</h2>
                <p class="question-help">Share what is useful. Both answers can be left open for the first conversation.</p>
                <div class="choice-list compact">
                  <label v-for="option in timingOptions" :key="option.value" :class="{ selected: brief.timing === option.value }">
                    <input v-model="brief.timing" type="radio" name="timing" :value="option.value">
                    <span class="choice-mark"><Check :size="15" aria-hidden="true" /></span>
                    <span class="choice-copy"><strong>{{ option.title }}</strong></span>
                  </label>
                </div>
                <label class="line-field budget-field">
                  <span>Investment range <small>Optional, any currency</small></span>
                  <input v-model="brief.budget" type="text" maxlength="120" autocomplete="off" placeholder="Share now, or discuss it with us later">
                </label>
              </template>

              <template v-else-if="step === 4">
                <p class="question-context">The introduction</p>
                <h2 id="active-question" ref="questionHeading" tabindex="-1">Who should we reply to?</h2>
                <p class="question-help">Your brief will be sent with these details and nothing more.</p>
                <div class="contact-grid">
                  <label class="line-field">
                    <span>Your name</span>
                    <input v-model="brief.name" type="text" maxlength="120" autocomplete="name" placeholder="Name" required>
                  </label>
                  <label class="line-field">
                    <span>Work email</span>
                    <input v-model="brief.email" type="email" maxlength="254" autocomplete="email" placeholder="you@company.com" required aria-describedby="email-help">
                    <small id="email-help">Enter a valid email so we can reply.</small>
                  </label>
                  <label class="line-field">
                    <span>Company <small>Optional</small></span>
                    <input v-model="brief.company" type="text" maxlength="160" autocomplete="organization" placeholder="Company or team">
                  </label>
                  <label class="line-field">
                    <span>Useful link <small>Optional</small></span>
                    <input v-model="brief.reference" type="url" maxlength="1000" autocomplete="url" placeholder="https://your-website.com" aria-describedby="reference-help">
                    <small id="reference-help">Use a full link beginning with https:// or http://.</small>
                  </label>
                </div>
              </template>
              <template v-else>
                <p class="question-context">Ready when you are</p>
                <h2 id="active-question" ref="questionHeading" tabindex="-1">Make sure it sounds like you.</h2>
                <p class="question-help">Review your note before sending. You can go back to change any answer.</p>
                <dl class="brief-review">
                  <div><dt>The opportunity <button type="button" @click="visitStep(0)">Edit</button></dt><dd class="review-message">{{ brief.project }}</dd></div>
                  <div><dt>The work <button type="button" @click="visitStep(1)">Edit</button></dt><dd>{{ labelFor(intentOptions, brief.intent) }}</dd></div>
                  <div><dt>Starting point <button type="button" @click="visitStep(2)">Edit</button></dt><dd>{{ labelFor(stageOptions, brief.stage) }}</dd></div>
                  <div><dt>Timing and investment <button type="button" @click="visitStep(3)">Edit</button></dt><dd>{{ labelFor(timingOptions, brief.timing) }}<br>{{ brief.budget || 'Investment not shared' }}</dd></div>
                  <div><dt>Your details <button type="button" @click="visitStep(4)">Edit</button></dt><dd>{{ brief.name }}<br>{{ brief.email }}<template v-if="brief.company"><br>{{ brief.company }}</template><template v-if="brief.reference"><br>{{ brief.reference }}</template></dd></div>
                </dl>
              </template>
            </fieldset>
          </Transition>
        </div>

        <div v-else class="success-panel" role="status">
          <span class="success-mark"><Check :size="24" aria-hidden="true" /></span>
          <p class="question-context">Note received</p>
          <h2>Your project note is with WUSLA.</h2>
          <p>We will read it carefully and reply to <strong>{{ brief.email }}</strong>.</p>
          <div class="success-actions">
            <NuxtLink to="/">Return to WUSLA <ArrowRight :size="17" aria-hidden="true" /></NuxtLink>
            <a href="mailto:wuslateam@gmail.com">Add something by email <ExternalLink :size="15" aria-hidden="true" /></a>
          </div>
        </div>

        <footer v-if="submissionStatus !== 'success'" class="letter-footer">
          <button v-if="step > 0" type="button" class="back-button" :disabled="submissionStatus === 'sending'" @click="goBack">
            <ArrowLeft :size="17" aria-hidden="true" /> Back
          </button>
          <span v-else class="direct-email">Prefer email? <a href="mailto:wuslateam@gmail.com">wuslateam@gmail.com</a></span>

          <button v-if="step < steps.length - 1" type="button" class="next-button" :disabled="!canContinue" @click="goNext">
            {{ step === 4 ? 'Review your note' : 'Continue' }} <ArrowRight :size="18" aria-hidden="true" />
          </button>
          <button v-else type="button" class="next-button" :disabled="!canContinue || submissionStatus === 'sending'" @click="submitBrief">
            {{ submissionStatus === "sending" ? "Sending note" : "Send to WUSLA" }}
            <ArrowRight v-if="submissionStatus !== 'sending'" :size="18" aria-hidden="true" />
          </button>
        </footer>

        <div class="progress-rule" aria-hidden="true"><span :style="{ width: `${progress}%` }" /></div>
        <p v-if="submissionStatus === 'error'" class="error-message" role="alert">
          The note could not be sent. Please try again or email <a href="mailto:wuslateam@gmail.com">wuslateam@gmail.com</a>.
        </p>
        <p class="sr-only" role="status">{{ submissionStatus === 'sending' ? 'Sending your project note.' : '' }}</p>
      </section>
    </div>
  </main>
</template>

<style scoped>

.start-page{min-height:100dvh;background:var(--color-bg);color:var(--color-text)}
.start-header{position:sticky;z-index:20;top:0;display:flex;align-items:center;gap:24px;justify-content:space-between;padding:18px 40px;height:80px;border-bottom:1px solid var(--color-border);background:var(--color-bg)}
.start-wordmark{font-size:1.6rem;font-weight:750;letter-spacing:-.06em}.start-header .theme-toggle{margin-left:auto}.return-link{display:inline-flex;align-items:center;gap:8px;min-height:44px;font-size:.875rem}
.intake-shell{display:grid;grid-template-columns:minmax(0,42%) minmax(0,58%);min-height:calc(100dvh - 80px)}
.intake-intro{position:sticky;top:80px;align-self:start;min-height:calc(100dvh - 80px);display:flex;flex-direction:column;padding:52px clamp(24px,4vw,66px) 32px;background:var(--color-bg-elevated)}
.intro-label,.question-context{font:500 .8125rem/1.5 var(--font-mono);color:var(--color-accent)}
.intro-copy h1{font-size:clamp(2.65rem,4.2vw,4.5rem);font-weight:550;letter-spacing:-.055em;line-height:1.06;margin-block:22px;max-width:9ch}
.intro-note{font-size:1rem;line-height:1.75;color:var(--color-text-muted);max-width:390px}
.step-list{list-style:none;padding:0;margin:38px 0 30px}.step-list li{border-top:1px solid var(--color-border)}.step-list button{display:grid;grid-template-columns:26px 1fr 18px;gap:14px;align-items:center;width:100%;text-align:left;min-height:44px;font-size:.875rem;color:var(--color-text-muted)}
.step-list .active button,.step-list .complete button{color:var(--color-text)}.step-list .active button{font-weight:700}.step-number{font:400 .75rem var(--font-mono);color:var(--color-accent)}.privacy-note{font-size:.8125rem;color:var(--color-text-muted);margin-top:auto}
.letter-surface{position:relative;display:flex;flex-direction:column;min-width:0;padding:36px clamp(24px,4.5vw,76px) 30px}
.letter-header{display:flex;justify-content:space-between;gap:20px;padding-bottom:20px;border-bottom:1px solid var(--color-border);font:400 .8125rem var(--font-mono);color:var(--color-text-muted)}
.mobile-progress{display:none}.question-stage{display:flex;align-items:center;flex:1;padding:36px 0}.question-panel{border:0;padding:0;margin:0;min-width:0;width:100%}
.question-context{margin-bottom:16px}.question-panel h2,.success-panel h2{max-width:16ch;font-size:clamp(2rem,3.2vw,3.4rem);font-weight:550;line-height:1.12;letter-spacing:-.05em}.question-panel h2:focus{outline:none}
.question-help{margin-top:20px;color:var(--color-text-muted);line-height:1.7;font-size:1rem}
.large-text-field{display:block;margin-top:28px;border-bottom:1px solid var(--color-border-bright)}.large-text-field:focus-within{outline:2px solid var(--color-accent);outline-offset:6px}
.large-text-field textarea{width:100%;display:block;background:transparent;border:0;resize:vertical;min-height:155px;font-size:1.125rem;color:var(--color-text);line-height:1.7;outline:none}
textarea::placeholder,input::placeholder{color:var(--color-text-muted)}
.field-meta{display:flex;justify-content:space-between;gap:10px;padding-block:12px;font:400 .75rem var(--font-mono);color:var(--color-text-muted)}
.choice-list{margin-top:28px;border-top:1px solid var(--color-border)}.choice-list label{position:relative;display:grid;grid-template-columns:24px 1fr;gap:15px;align-items:start;padding:17px 10px;border-bottom:1px solid var(--color-border);cursor:pointer;border-radius:4px;transition:background 160ms}
.choice-list label:hover,.choice-list label.selected{background:var(--color-bg-elevated)}.choice-list label:focus-within{outline:2px solid var(--color-accent);outline-offset:2px}
.choice-list input{position:absolute;opacity:0;width:1px;height:1px}.choice-mark{display:grid;place-items:center;width:22px;height:22px;border:1px solid var(--color-border-bright);border-radius:50%;color:transparent;margin-top:2px}.selected .choice-mark{background:var(--color-accent);border-color:var(--color-accent);color:var(--button-text)}
.choice-copy{display:flex;flex-direction:column;gap:6px}.choice-copy strong{font-size:1rem;font-weight:600}.choice-copy small{font-size:.875rem;line-height:1.6;color:var(--color-text-muted)}
.line-field{display:flex;flex-direction:column;gap:10px;min-width:0}.line-field>span{font-size:.875rem;font-weight:600}.line-field small{display:block;font-size:.75rem;font-weight:400;color:var(--color-text-muted);line-height:1.5}
.line-field input{background:var(--color-bg-card);border:1px solid var(--color-border-bright);border-radius:4px;padding:13px;width:100%;min-height:48px;font-size:1rem;color:var(--color-text)}
.budget-field{margin-top:25px}.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px 20px;margin-top:30px}
.letter-footer{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-top:24px;border-top:1px solid var(--color-border)}
.back-button,.next-button{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;font-size:.9375rem;font-weight:600;border-radius:5px}.back-button{color:var(--color-text-muted);padding:12px 0}
.next-button{background:var(--color-accent);color:var(--button-text);padding:13px 22px;white-space:nowrap}.next-button:hover:not(:disabled){background:var(--color-accent-dark)}.next-button:disabled{opacity:.45}
.direct-email{font-size:.8125rem;color:var(--color-text-muted);max-width:230px}.direct-email a{display:block;text-decoration:underline;overflow-wrap:anywhere}
.progress-rule{height:3px;background:var(--color-border);margin-top:26px}.progress-rule span{height:100%;display:block;background:var(--color-accent);transition:width 250ms}
.error-message{margin-top:20px;font-size:1rem;color:var(--color-text);border-left:3px solid var(--color-accent);padding-left:15px}.error-message a{text-decoration:underline}
.success-panel{padding:60px 0;display:flex;flex:1;flex-direction:column;justify-content:center}.success-mark{display:grid;place-items:center;background:var(--color-accent);color:var(--button-text);width:54px;height:54px;border-radius:50%;margin-bottom:25px}.success-panel>p:not(.question-context){margin-top:24px;font-size:1.0625rem;line-height:1.75;color:var(--color-text-muted)}
.success-actions{display:flex;gap:25px;flex-wrap:wrap;margin-top:30px}.success-actions a{display:inline-flex;align-items:center;gap:8px;min-height:44px;border-bottom:1px solid var(--color-border-bright);font-size:.9375rem}
.brief-review{margin-top:30px}.brief-review>div{padding:18px 0;border-top:1px solid var(--color-border)}.brief-review dt{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:.875rem;font-weight:600}.brief-review dt button{font-size:.8125rem;color:var(--color-accent);text-decoration:underline;min-height:44px;min-width:44px}.brief-review dd{margin:5px 0 0;font-size:1rem;line-height:1.7;color:var(--color-text-muted);overflow-wrap:anywhere}.review-message{white-space:pre-wrap}
.question-enter-active,.question-leave-active{transition:opacity 150ms,transform 200ms}.question-enter-from{opacity:0;transform:translateY(12px)}.question-leave-to{opacity:0;transform:translateY(-8px)}
@media(max-width:1050px){.contact-grid{grid-template-columns:1fr}.intake-intro{padding:36px 28px}.letter-surface{padding:30px}.intro-copy h1{font-size:3rem}}
@media(max-width:767px){.start-header{height:74px;padding:15px 20px;gap:12px}.return-link{font-size:.8125rem}.intake-shell{grid-template-columns:1fr}.intake-intro{position:static;min-height:auto;padding:35px 20px}.intro-copy h1{max-width:12ch;font-size:2.8rem;margin-block:18px}.intro-note{max-width:none}.step-list,.privacy-note{display:none}.letter-surface{padding:25px 20px 30px}.letter-header{font-size:.75rem}.question-stage{padding-block:30px}.question-panel h2,.success-panel h2{font-size:2.15rem}.large-text-field textarea{font-size:1rem}.letter-footer{gap:15px}.direct-email{max-width:160px;font-size:.75rem}.next-button{font-size:.875rem;padding-inline:17px}.brief-review>div{padding-block:13px}}
@media(prefers-reduced-motion:reduce){.question-enter-active,.question-leave-active,.progress-rule span{transition:none}}

</style>
