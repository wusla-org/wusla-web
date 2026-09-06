<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { projects } from "~~/content/projects";

const root = ref<HTMLElement | null>(null);

useScrollTimeline(root, ({ gsap }) => {
  gsap.fromTo(".reference-hero", { opacity: 0, scale: 1.025 }, { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" });
  gsap.to(".reference-hero img", { yPercent: -4, ease: "none", scrollTrigger: { trigger: ".reference-hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.fromTo(".reference-applications", { opacity: 0, y: 46 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".reference-applications", start: "top 78%" } });
  gsap.fromTo(".reference-company", { opacity: 0, y: 46 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".reference-company", start: "top 78%" } });
  gsap.fromTo(".work-list a", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.55, ease: "power2.out", scrollTrigger: { trigger: ".work-list", start: "top 82%" } });
});
</script>

<template>
  <main ref="root" class="wusla-home">
    <section class="reference-hero" aria-labelledby="home-title">
      <img src="/assets/wusla-hero-reference.png" alt="WUSLA — Software worth keeping. We build original software and partner with ambitious companies." width="1600" height="1000">
      <h1 id="home-title" class="sr-only">Software worth keeping</h1>
      <NuxtLink to="/company" class="hero-action">Let’s build</NuxtLink>
      <nav class="reference-nav" aria-label="Primary navigation"><NuxtLink to="/company">For companies</NuxtLink><NuxtLink to="/applications">Applications</NuxtLink><NuxtLink to="/portfolio">Work</NuxtLink></nav>
    </section>

    <section class="manifesto"><div class="container-custom manifesto-grid"><p class="section-kicker">One company. Two kinds of work.</p><div><h2>We make our own software.<br>We help other teams make theirs.</h2><p>WUSLA is an independent software company. We build products with a point of view, and we join companies that need serious product thinking and engineering.</p><NuxtLink to="/company" class="line-link">How we work <ArrowRight :size="17" /></NuxtLink></div></div></section>

    <section class="reference-applications" aria-labelledby="applications-title"><img src="/assets/wusla-applications-reference.png" alt="Applications: Private software in development, with three WUSLA applications in development." width="1600" height="1000"><h2 id="applications-title" class="sr-only">Private software in development</h2><NuxtLink to="/applications" class="media-link">Explore applications</NuxtLink></section>

    <section class="reference-company" aria-labelledby="company-title"><img src="/assets/wusla-company-reference.png" alt="For companies: Bring us the hard part. WUSLA helps companies understand, build, and improve software." width="1600" height="1000"><h2 id="company-title" class="sr-only">Bring us the hard part</h2><NuxtLink to="/company" class="media-link">Work with WUSLA</NuxtLink></section>

    <section class="work-block"><div class="container-custom"><div class="work-heading"><p class="section-kicker">Public work</p><h2>Made for the real world.</h2></div><div class="work-list"><a v-for="project in projects" :key="project.num" :href="project.url" target="_blank" rel="noopener noreferrer"><span>{{ project.num }}</span><strong>{{ project.name }}</strong><em>{{ project.category }}</em><ArrowRight :size="20" /></a></div><NuxtLink to="/portfolio" class="dark-button">See selected work <ArrowRight :size="19" /></NuxtLink></div></section>
    <Contact />
  </main>
</template>

<style scoped>
.wusla-home{background:#f5f4eb;color:#063f30}.reference-hero,.reference-applications,.reference-company{position:relative;overflow:hidden;line-height:0}.reference-hero{background:#005a42;min-height:min(100svh,62.5vw)}.reference-hero img,.reference-applications img,.reference-company img{display:block;width:100%;height:auto}.hero-action,.reference-nav,.media-link{position:absolute;line-height:1;z-index:2}.hero-action{left:4.8%;top:72.6%;width:18.4%;height:9.7%;color:transparent}.reference-nav{top:8%;right:45%;display:flex;gap:2rem}.reference-nav a{display:block;color:transparent;width:6rem;height:2rem}.media-link{inset:0;color:transparent}.manifesto{padding:11rem 0;background:#f5f4eb}.manifesto-grid{display:grid;grid-template-columns:.75fr 2fr;gap:4rem}.section-kicker{font:650 .72rem/1.2 var(--font-mono);letter-spacing:.11em;text-transform:uppercase;color:#00815d}.manifesto h2,.work-heading h2{font-size:clamp(3rem,5.5vw,6.4rem);line-height:.93;letter-spacing:-.075em;font-weight:650}.manifesto h2{margin-bottom:2.6rem}.manifesto-grid>div>p{max-width:40rem;color:#416a5c;font-size:1.2rem;line-height:1.55}.line-link{display:inline-flex;align-items:center;gap:.5rem;margin-top:2rem;padding-bottom:.35rem;border-bottom:1px solid currentColor;font-weight:700;line-height:1.2}.work-block{padding:10rem 0;background:#e7f0e9}.work-heading .section-kicker{margin-bottom:1.4rem}.work-list{margin:5rem 0;border-top:1px solid #b8d3c5}.work-list a{display:grid;grid-template-columns:4rem 1fr auto 1.5rem;gap:1rem;align-items:center;border-bottom:1px solid #b8d3c5;padding:1.75rem 0;transition:padding .25s var(--ease-out),background .25s var(--ease-out)}.work-list a:hover{padding-left:1rem;background:rgba(255,255,255,.3)}.work-list span,.work-list em{font:500 .7rem var(--font-mono);letter-spacing:.05em;font-style:normal;color:#527166}.work-list strong{font-size:clamp(1.4rem,2.4vw,2.1rem);letter-spacing:-.04em}.work-list svg{color:#00815d}.dark-button{display:inline-flex;align-items:center;gap:.8rem;padding:1.15rem 1.55rem;background:#064e3b;color:#f5f4eb;font-size:.92rem;font-weight:750;text-transform:uppercase;letter-spacing:.015em;line-height:1.2}@media(max-width:850px){.reference-hero{min-height:0}.reference-hero img,.reference-applications img,.reference-company img{width:auto;height:100svh;min-height:0;object-fit:cover;object-position:center}.reference-applications img,.reference-company img{height:auto;width:100%}.reference-nav{display:none}.hero-action{left:4.8%;top:72.6%;width:22%;height:9.7%}.manifesto,.work-block{padding:6rem 0}.manifesto-grid{display:block}.manifesto-grid>div{margin-top:2rem}.work-list{margin:3rem 0}.work-list a{grid-template-columns:2.2rem 1fr 1rem}.work-list em{display:none}}@media(max-width:480px){.reference-hero img{width:160%;max-width:none;transform:translateX(-20%)}.hero-action{left:7.6%;top:72.6%;width:31%;height:9.7%}}
</style>
