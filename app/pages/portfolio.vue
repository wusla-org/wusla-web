<script setup lang="ts">
import { ArrowUpRight, GraduationCap, Plane, ShoppingBag, Trophy } from "lucide-vue-next";
import { projects } from "~~/content/projects";

useSeoMeta({ title: "Selected work", description: "A selection of public products and platforms built with WUSLA." });

const root = ref<HTMLElement | null>(null);
const work = projects.map((project, index) => ({
  ...project,
  icon: [Plane, ShoppingBag, GraduationCap, Trophy][index],
  statement: [
    "Move through a country with less friction.",
    "Make everyday buying feel considered.",
    "Give a campus its own useful system.",
    "Bring a sports community closer together.",
  ][index],
}));

useScrollTimeline(root, ({ gsap }) => {
  gsap.fromTo(".archive-intro > *", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.11, duration: 0.7, ease: "power3.out" });
  gsap.fromTo(".work-panel", { opacity: 0, y: 52 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.75, ease: "power3.out", scrollTrigger: { trigger: ".work-archive", start: "top 75%" } });
  gsap.fromTo(".archive-closing", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".archive-closing", start: "top 82%" } });
});
</script>

<template>
  <main ref="root" class="portfolio-page">
    <section class="archive-intro">
      <div class="container-custom">
        <p class="archive-label">Selected public work</p>
        <h1>Software that<br>has somewhere to go.</h1>
        <div class="archive-lede"><p>Four public products made for real habits: movement, commerce, housing, and sport.</p><span>01 / 04</span></div>
      </div>
    </section>
    <section class="work-archive" aria-label="Selected work">
      <div class="container-custom work-grid">
        <a v-for="(project, index) in work" :key="project.num" :href="project.url" target="_blank" rel="noopener noreferrer" class="work-panel" :class="`work-panel-${index + 1}`" :aria-label="`Visit ${project.name}`">
          <div class="panel-meta"><span>{{ project.num }}</span><span>{{ project.category }}</span><span>Live product</span></div>
          <component :is="project.icon" class="panel-icon" :size="index === 0 || index === 3 ? 150 : 116" stroke-width="1.05" />
          <div class="panel-body"><p>{{ project.statement }}</p><h2>{{ project.name }}</h2><div class="panel-bottom"><span>{{ project.tags.join(" · ") }}</span><ArrowUpRight :size="23" /></div></div>
        </a>
      </div>
    </section>
    <section class="archive-closing"><div class="container-custom"><p>Not all of our work is ready to be shown. The important part is that it is being used.</p><NuxtLink to="/#contact">Bring us a hard problem <ArrowUpRight :size="19" /></NuxtLink></div></section>
  </main>
</template>

<style scoped>
.portfolio-page{background:#e6f0e9;color:#064a37}.archive-intro{padding:clamp(9rem,16vw,15rem) 0 6rem;background:#f5f1e4}.archive-label,.panel-meta,.panel-bottom span{font:650 .68rem/1.2 var(--font-mono);letter-spacing:.11em;text-transform:uppercase}.archive-label{color:#00815d}.archive-intro h1{max-width:10ch;margin:1.5rem 0 5.5rem;font-size:clamp(3.9rem,9vw,9.4rem);font-weight:680;line-height:.82;letter-spacing:-.045em}.archive-lede{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;padding-top:1.25rem;border-top:1px solid rgba(6,74,55,.24)}.archive-lede p{max-width:34rem;font-size:clamp(1.05rem,1.55vw,1.35rem);line-height:1.45;color:#426d5e}.archive-lede span{color:#00815d;font:600 .7rem var(--font-mono);letter-spacing:.1em}.work-archive{padding:2rem 0 9rem}.work-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:1.4rem}.work-panel{position:relative;isolation:isolate;display:flex;min-height:clamp(27rem,47vw,39rem);flex-direction:column;overflow:hidden;padding:1.8rem;color:#f5f1e4;transition:transform .45s var(--ease-out),box-shadow .45s var(--ease-out)}.work-panel-1,.work-panel-4{grid-column:span 7}.work-panel-2,.work-panel-3{grid-column:span 5}.work-panel-1{background:#005b43}.work-panel-2{background:#175f4b}.work-panel-3{background:#d2e7db;color:#064a37}.work-panel-4{background:#0b4938}.work-panel::before{position:absolute;z-index:-1;inset:0;content:"";background-image:linear-gradient(rgba(244,241,225,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(244,241,225,.1) 1px,transparent 1px);background-size:2.1rem 2.1rem;opacity:.17;transform:scale(1.06);transition:opacity .45s var(--ease-out),transform .65s var(--ease-out)}.work-panel-3::before{background-image:linear-gradient(rgba(6,74,55,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(6,74,55,.12) 1px,transparent 1px)}.panel-meta{display:flex;justify-content:space-between;gap:.75rem}.panel-meta span:nth-child(2){margin-right:auto;margin-left:2rem}.panel-meta span:last-child{opacity:.68}.panel-icon{margin:auto 0 1.4rem;opacity:.96;transition:transform .55s var(--ease-out)}.panel-body>p{max-width:22rem;margin-bottom:.8rem;font-size:1rem;line-height:1.4;opacity:.78}.panel-body h2{max-width:10ch;font-size:clamp(2.7rem,5.2vw,5.7rem);font-weight:640;line-height:.86;letter-spacing:-.045em}.panel-bottom{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:2rem;padding-top:1rem;border-top:1px solid currentColor}.panel-bottom span{opacity:.7}.archive-closing{padding:8rem 0;background:#064a37;color:#f5f1e4}.archive-closing p{max-width:16ch;font-size:clamp(2.8rem,5.6vw,6.4rem);font-weight:620;line-height:.91;letter-spacing:-.04em}.archive-closing a{display:inline-flex;align-items:center;gap:.6rem;margin-top:3rem;padding-bottom:.5rem;border-bottom:1px solid currentColor;font-weight:700}@media(hover:hover) and (pointer:fine){.work-panel:hover{transform:translateY(-10px) rotate(-.5deg);box-shadow:14px 18px 0 rgba(6,74,55,.16)}.work-panel:nth-child(even):hover{transform:translateY(-10px) rotate(.5deg)}.work-panel:hover::before{opacity:.34;transform:scale(1)}.work-panel:hover .panel-icon{transform:translate(4%,-7%) rotate(-6deg) scale(1.06)}}@media(max-width:760px){.archive-intro{padding-top:8.5rem}.archive-intro h1{margin-bottom:4rem}.archive-lede{display:block}.archive-lede span{display:block;margin-top:1.5rem}.work-archive{padding-bottom:5rem}.work-grid{grid-template-columns:1fr;gap:1rem}.work-panel,.work-panel-1,.work-panel-2,.work-panel-3,.work-panel-4{grid-column:1;min-height:30rem}.panel-meta span:last-child{display:none}.panel-meta span:nth-child(2){margin-left:1rem}.archive-closing{padding:5.5rem 0}.panel-bottom span{font-size:.58rem}}@media(max-width:480px){.archive-intro{padding-top:7.75rem;padding-bottom:4.5rem}.archive-intro h1{margin:1.25rem 0 3.25rem;font-size:clamp(3.25rem,15.5vw,4.75rem);line-height:.86}.archive-lede p{font-size:1rem}.work-archive{padding-top:1.125rem;padding-bottom:4.25rem}.work-panel,.work-panel-1,.work-panel-2,.work-panel-3,.work-panel-4{min-height:25rem;padding:1.25rem}.panel-icon{margin-bottom:1rem}.panel-body h2{font-size:clamp(2.45rem,12vw,3.6rem)}.panel-bottom{margin-top:1.4rem}.archive-closing{padding:4.75rem 0}.archive-closing p{font-size:clamp(2.7rem,13.5vw,4.1rem)}}
</style>
