<script setup lang="ts">
import { Github, Twitter, Linkedin, Mail } from "lucide-vue-next";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/wusla-org", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/wusla", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/wusla", label: "LinkedIn" },
  { icon: Mail, href: "mailto:wuslateam@gmail.com", label: "Email" },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer style="background-color: var(--color-bg); border-top: 1px solid var(--color-border)">
    <div class="container-custom py-16 md:py-20">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
        <div>
          <NuxtLink to="/" class="inline-flex items-baseline gap-1.5 mb-5">
            <span class="font-display text-lg font-bold tracking-tight" style="color: var(--color-text)">wusla</span>
            <span
              class="w-1.5 h-1.5 rounded-full"
              style="background-color: var(--color-accent); box-shadow: 0 0 8px rgba(161, 98, 7, 0.45)"
            />
          </NuxtLink>
          <p
            class="font-display font-bold leading-[1.05] max-w-md"
            style="font-size: clamp(1.6rem, 3vw, 2.4rem); color: var(--color-text)"
          >
            Your dedicated software team.
          </p>
        </div>

        <NuxtLink to="#contact" class="footer-cta group inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 btn-press self-start lg:self-auto">
          Start a project →
        </NuxtLink>
      </div>

      <div class="hairline mb-10" />

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <nav class="flex flex-wrap gap-x-7 gap-y-3">
          <NuxtLink v-for="l in nav" :key="l.label" :to="l.href" class="link-underline text-sm" style="color: var(--color-text-muted)">
            {{ l.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            :target="s.href.startsWith('http') ? '_blank' : undefined"
            :rel="s.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            :aria-label="s.label"
            class="lift w-9 h-9 rounded-lg flex items-center justify-center"
            style="border: 1px solid var(--color-border); color: var(--color-text-muted)"
          >
            <component :is="s.icon" :size="15" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-10">
        <p class="font-mono text-xs" style="color: var(--color-text-faint)">© {{ year }} WUSLA. All rights reserved.</p>
        <p class="font-mono text-xs" style="color: var(--color-text-faint)">Kerala, India — wuslateam@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-cta {
  background-color: var(--color-ink);
  color: var(--color-bg);
  border-radius: var(--radius-btn);
  transition:
    box-shadow 220ms var(--ease-out),
    transform 160ms var(--ease-out);
}
.footer-cta:hover {
  box-shadow: var(--shadow-accent);
}
</style>
