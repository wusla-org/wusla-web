<script setup lang="ts">
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-vue-next";

type Status = "idle" | "sending" | "success" | "error";

const services = ["New product", "Existing product", "Mobile application", "Web platform", "Desktop software", "Product design", "Technical partnership"];

const form = reactive({ name: "", email: "", service: "", message: "" });
const status = ref<Status>("idle");

async function handleSubmit() {
  status.value = "sending";
  try {
    const res = await $fetch.raw("/api/contact", {
      method: "POST",
      body: { ...form },
    });
    status.value = res.status === 200 ? "success" : "error";
  } catch {
    status.value = "error";
  }
}

function reset() {
  status.value = "idle";
  form.name = "";
  form.email = "";
  form.service = "";
  form.message = "";
}

const infoRows = [
  { k: "Email", type: "email" as const },
  { k: "Location", type: "text" as const, v: "Kerala, India" },
  { k: "Response time", type: "text" as const, v: "We will reply as soon as we can." },
];
</script>

<template>
  <section id="contact" class="py-28 md:py-36" style="background-color: var(--color-bg)">
    <div class="container-custom">
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
        <Reveal>
          <div class="mono-label mb-5">Contact</div>
          <h2 class="font-display font-bold leading-[1.0] mb-7" style="font-size: clamp(2.6rem, 5.5vw, 4.6rem); color: var(--color-text)">
            Start a conversation.
          </h2>
          <p class="text-base leading-relaxed mb-12 max-w-md text-pretty" style="color: var(--color-text-muted)">
            Tell us what you are building, where you need support, or what needs to improve.
          </p>

          <div class="flex flex-col gap-7">
            <div v-for="row in infoRows" :key="row.k">
              <p class="contact-label mb-1.5" style="color: var(--color-text-muted)">{{ row.k }}</p>
              <a v-if="row.type === 'email'" href="mailto:wuslateam@gmail.com" class="link-underline font-display font-semibold text-lg" style="color: var(--color-text)">
                wuslateam@gmail.com
              </a>
              <span v-else class="font-medium" style="color: var(--color-text)">{{ row.v }}</span>
            </div>
          </div>
        </Reveal>

        <Reveal :delay="0.08">
          <div class="surface p-7 md:p-10" style="border-radius: var(--radius-lg)">
            <div v-if="status === 'success'" class="success-panel flex flex-col items-center justify-center py-14 gap-4 text-center">
              <CheckCircle class="w-11 h-11" style="color: var(--color-accent)" />
              <h3 class="font-display font-bold text-2xl" style="color: var(--color-text)">Message sent</h3>
              <p class="text-sm max-w-xs" style="color: var(--color-text-muted)">Thanks. We will be in touch soon.</p>
              <button class="link-underline mt-2 font-mono text-xs uppercase tracking-widest" style="color: var(--color-text-muted)" @click="reset">
                Send another message
              </button>
            </div>

            <form v-else class="flex flex-col gap-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label for="name" class="contact-label" style="color: var(--color-text-muted)">Your name</label>
                  <input id="name" v-model="form.name" name="name" type="text" placeholder="Aisha Rahman" required class="field w-full px-4 py-3 text-sm" style="border-radius: var(--radius-btn)" >
                </div>
                <div class="flex flex-col gap-2">
                  <label for="email" class="contact-label" style="color: var(--color-text-muted)">Email</label>
                  <input id="email" v-model="form.email" name="email" type="email" placeholder="aisha@startup.com" required class="field w-full px-4 py-3 text-sm" style="border-radius: var(--radius-btn)" >
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label for="service" class="contact-label" style="color: var(--color-text-muted)">What do you need?</label>
                <select id="service" v-model="form.service" name="service" class="field w-full px-4 py-3 text-sm appearance-none cursor-pointer" style="border-radius: var(--radius-btn)">
                  <option value="">Select a service</option>
                  <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>

              <div class="flex flex-col gap-2">
                <label for="message" class="contact-label" style="color: var(--color-text-muted)">Tell us about your project</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  placeholder="What are you building? What's the timeline? Any context helps…"
                  required
                  class="field w-full px-4 py-3 text-sm resize-none"
                  style="border-radius: var(--radius-btn)"
                />
              </div>

              <div v-if="status === 'error'" class="flex items-center gap-2 text-sm" style="color: #dc2626">
                <AlertCircle class="w-4 h-4 shrink-0" />
                Something went wrong. Please email us directly at wuslateam@gmail.com
              </div>

              <button
                type="submit"
                :disabled="status === 'sending'"
                class="submit-btn group w-full inline-flex items-center justify-center gap-2 font-semibold text-base px-6 py-4 btn-press disabled:opacity-60 disabled:cursor-not-allowed"
                style="border-radius: var(--radius-btn)"
              >
                {{ status === "sending" ? "Sending…" : "Send message" }}
                <ArrowRight v-if="status !== 'sending'" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" style="transition-timing-function: var(--ease-out)" />
              </button>

              <p class="font-mono text-[11px] text-center" style="color: var(--color-text-faint)">
                Your details are used only to respond to this enquiry.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.surface {
  background: transparent;
  border: 0;
  border-top: 1px solid var(--color-border);
  border-radius: 0 !important;
  box-shadow: none;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.field { border-radius: 0 !important; }
.contact-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
.submit-btn {
  background-color: var(--color-ink);
  color: var(--color-bg);
  transition:
    box-shadow 220ms var(--ease-out),
    transform 160ms var(--ease-out);
}
.submit-btn:hover:not(:disabled) {
  box-shadow: var(--shadow-accent);
}
.success-panel {
  animation: success-in 300ms var(--ease-out);
}
@keyframes success-in {
  from {
    opacity: 0;
    transform: scale(0.97);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
