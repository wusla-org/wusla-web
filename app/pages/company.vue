<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight, Blocks, Compass, Gauge, Layers3, Sparkles } from "lucide-vue-next";

useSeoMeta({
  title: "For companies",
  description: "WUSLA partners with companies to shape, build, and improve important software products.",
});

const root = ref<HTMLElement | null>(null);
const engagements = [
  { number: "01", title: "Find the shape of it.", label: "New applications", copy: "Turn a real business need into a product with a clear first release, a useful experience, and a technical direction that can hold up.", detail: "Product direction · UX systems · Technical strategy", icon: Compass },
  { number: "02", title: "Make the difficult part work.", label: "Existing products", copy: "Bring focus to the product that is stuck, unclear, slow, or no longer carrying its weight. We work from the real constraint outward.", detail: "Product design · Platform work · Experience repair", icon: Blocks },
  { number: "03", title: "Add force where it matters.", label: "Technical partnership", copy: "Work alongside your people when an important decision, delivery, or system needs senior attention rather than another layer of process.", detail: "Embedded teams · Senior engineering · Ongoing improvement", icon: Gauge },
];

useScrollTimeline(root, ({ gsap }) => {
  gsap.fromTo(".company-opening > *", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.82, ease: "power4.out", force3D: true });
  gsap.fromTo(".principle-copy > *", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.72, ease: "power4.out", force3D: true, scrollTrigger: { trigger: ".principle", start: "top 74%" } });
  gsap.fromTo(".engagement", { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.72, ease: "power4.out", force3D: true, scrollTrigger: { trigger: ".engagements", start: "top 74%" } });
  gsap.fromTo(".company-invitation > *", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.72, ease: "power4.out", force3D: true, scrollTrigger: { trigger: ".company-invitation", start: "top 80%" } });
});
</script>

<template>
  <main ref="root" class="company-page">
    <section class="company-opening">
      <div class="container-custom opening-grid">
        <p class="page-kicker">For companies</p>
        <h1>Bring us<br>the hard part.</h1>
        <div class="opening-note"><p>WUSLA works with companies building something that needs more than hands on keyboards.</p><NuxtLink to="/#contact">Start a conversation <ArrowUpRight :size="18" /></NuxtLink></div>
        <div class="opening-mark" aria-hidden="true"><span>W</span><i /><span>01</span></div>
      </div>
    </section>

    <section class="principle">
      <div class="container-custom principle-grid">
        <div class="principle-copy"><p class="page-kicker">A working relationship</p><h2>We stay close to the problem, not just the brief.</h2></div>
        <div class="principle-note"><Layers3 :size="29" stroke-width="1.35" /><p>Product, design, and engineering work better when they are close enough to question one another.</p></div>
      </div>
    </section>

    <section class="engagements" aria-labelledby="engagements-title">
      <div class="container-custom">
        <div class="engagements-heading"><p class="page-kicker">Ways we work</p><h2 id="engagements-title">Three ways to move meaningful work forward.</h2></div>
        <article v-for="engagement in engagements" :key="engagement.number" class="engagement">
          <div class="engagement-index"><span>{{ engagement.number }}</span><span class="index-line" /></div>
          <div class="engagement-main"><p>{{ engagement.label }}</p><h3>{{ engagement.title }}</h3></div>
          <div class="engagement-detail"><component :is="engagement.icon" :size="42" stroke-width="1.25" /><p>{{ engagement.copy }}</p><small>{{ engagement.detail }}</small></div>
          <ArrowDownRight class="engagement-arrow" :size="27" stroke-width="1.35" />
        </article>
      </div>
    </section>

    <section class="company-invitation">
      <div class="container-custom invitation-grid">
        <Sparkles :size="30" stroke-width="1.3" aria-hidden="true" />
        <p>There is no substitute for people who care about the result as much as the release.</p>
        <NuxtLink to="/#contact">Tell us what needs to happen <ArrowUpRight :size="19" /></NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.company-page{background:#e6f0e9;color:#064a37}.company-opening{min-height:100svh;display:flex;align-items:flex-end;padding:8.8rem 0 4.5rem;background:#064a37;color:#f5f1e4;overflow:hidden}.opening-grid{position:relative;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:1.5rem}.page-kicker,.engagement-main>p,.engagement-detail small{font:650 .68rem/1.25 var(--font-mono);letter-spacing:.115em;text-transform:uppercase}.page-kicker{color:#8bd3ad}.company-opening .page-kicker{grid-column:1/-1}.company-opening h1{grid-column:1/9;max-width:8ch;margin:3.5rem 0 0;font-size:clamp(4.6rem,10.5vw,10.5rem);font-weight:650;line-height:.79;letter-spacing:-.055em}.opening-note{grid-column:10/-1;align-self:end;padding-bottom:.55rem}.opening-note p{font-size:clamp(1.05rem,1.45vw,1.32rem);line-height:1.42;color:#cce6d8}.opening-note a,.company-invitation a{display:inline-flex;align-items:center;gap:.55rem;margin-top:2rem;padding-bottom:.55rem;border-bottom:1px solid currentColor;color:#f5f1e4;font-weight:700}.opening-mark{position:absolute;right:3.8%;top:2.2rem;display:flex;align-items:center;gap:.8rem;color:#8bd3ad;font:650 .72rem var(--font-mono);letter-spacing:.1em}.opening-mark span:first-child{font:700 3rem/1 var(--font-display);letter-spacing:-.06em;color:#f5f1e4}.opening-mark i{width:5.3rem;height:1px;background:#8bd3ad;opacity:.65}.principle{padding:clamp(6rem,11vw,11rem) 0;background:#f5f1e4}.principle-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:1.5rem}.principle-copy{grid-column:1/9}.principle h2{max-width:12ch;margin-top:1.4rem;font-size:clamp(3rem,6.5vw,7.1rem);font-weight:630;line-height:.87;letter-spacing:-.045em}.principle-note{grid-column:10/-1;align-self:end;padding:1.6rem 0;border-top:1px solid #8aafa0}.principle-note svg{color:#00815d}.principle-note p{margin-top:3.5rem;font-size:1.08rem;line-height:1.5;color:#426d5e}.engagements{padding:clamp(5.5rem,9vw,9rem) 0 7rem}.engagements-heading{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:1.5rem;margin-bottom:4.4rem}.engagements-heading .page-kicker{grid-column:1/4;color:#00815d}.engagements-heading h2{grid-column:5/12;max-width:15ch;font-size:clamp(2.5rem,5vw,5rem);font-weight:630;line-height:.9;letter-spacing:-.04em}.engagement{position:relative;display:grid;grid-template-columns:1.1fr 3.4fr 4fr .5fr;gap:1.5rem;align-items:start;min-height:20rem;padding:2rem 0;border-top:1px solid #a9c6b7;will-change:transform;transition:transform .32s var(--ease-out),background-color .32s ease,color .25s ease,box-shadow .32s var(--ease-out)}.engagement:last-child{border-bottom:1px solid #a9c6b7}.engagement-index{display:flex;align-items:center;gap:.8rem;font:650 .7rem var(--font-mono);letter-spacing:.1em;color:#00815d}.index-line{width:2.5rem;height:1px;background:currentColor;transform-origin:left;transition:transform .32s var(--ease-out)}.engagement-main>p{color:#417665}.engagement-main h3{max-width:10ch;margin-top:.9rem;font-size:clamp(2.25rem,4.2vw,4.7rem);font-weight:625;line-height:.86;letter-spacing:-.04em}.engagement-detail{display:grid;grid-template-columns:3.6rem 1fr;column-gap:1rem}.engagement-detail svg{grid-row:span 2;color:#00815d;transition:transform .38s var(--ease-out)}.engagement-detail p{max-width:27rem;font-size:1.05rem;line-height:1.48;color:#426d5e}.engagement-detail small{grid-column:2;margin-top:2.2rem;color:#508672;line-height:1.55}.engagement-arrow{justify-self:end;color:#00815d;transition:transform .32s var(--ease-out)}.company-invitation{padding:clamp(6rem,10vw,10rem) 0;background:#195440;color:#f5f1e4}.invitation-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:1.5rem}.invitation-grid>svg{grid-column:1/2;color:#98dfb9}.invitation-grid>p{grid-column:4/11;max-width:13ch;font-size:clamp(3rem,6.4vw,7rem);font-weight:620;line-height:.87;letter-spacing:-.045em}.invitation-grid>a{grid-column:4/8;justify-self:start}@media(hover:hover) and (pointer:fine){.engagement:hover{z-index:1;transform:translate3d(0,-5px,0);background:#064a37;color:#f5f1e4;box-shadow:0 14px 24px rgba(6,74,55,.13)}.engagement:hover .engagement-main>p,.engagement:hover .engagement-detail p,.engagement:hover .engagement-detail small{color:#cce6d8}.engagement:hover .engagement-index,.engagement:hover .engagement-detail svg,.engagement:hover .engagement-arrow{color:#97dfb9}.engagement:hover .index-line{transform:scaleX(1.55)}.engagement:hover .engagement-detail svg{transform:rotate(-7deg) scale(1.06)}.engagement:hover .engagement-arrow{transform:translate3d(5px,-5px,0)}}@media(max-width:760px){.company-opening{min-height:44rem;padding-top:8rem;padding-bottom:3.5rem}.opening-grid,.principle-grid,.engagements-heading,.invitation-grid{grid-template-columns:1fr}.company-opening h1,.opening-note,.principle-copy,.principle-note,.engagements-heading .page-kicker,.engagements-heading h2,.invitation-grid>svg,.invitation-grid>p,.invitation-grid>a{grid-column:1}.company-opening h1{margin-top:3rem;font-size:clamp(4rem,18vw,6rem);letter-spacing:-.045em}.opening-note{margin-top:3rem;max-width:25rem}.opening-mark{right:1.5rem;top:1.2rem}.opening-mark i{width:2.8rem}.principle{padding:5.5rem 0}.principle h2{font-size:clamp(3rem,14vw,5rem)}.principle-note{margin-top:3rem}.principle-note p{margin-top:2.3rem}.engagements{padding:5rem 0}.engagements-heading{gap:1rem;margin-bottom:2.5rem}.engagement{grid-template-columns:1fr auto;gap:1rem;min-height:auto;padding:1.5rem 0}.engagement-index{grid-column:1}.engagement-arrow{grid-column:2;grid-row:1;align-self:center}.engagement-main{grid-column:1/-1}.engagement-main h3{font-size:clamp(2.45rem,11vw,4rem)}.engagement-detail{grid-column:1/-1;grid-template-columns:3rem 1fr;margin-top:1rem}.engagement-detail p{font-size:1rem}.engagement-detail small{margin-top:1.5rem}.company-invitation{padding:5.5rem 0}.invitation-grid{gap:1.6rem}.invitation-grid>p{font-size:clamp(3rem,14vw,5rem)}.invitation-grid>a{margin-top:.4rem}}@media(max-width:390px){.company-opening{min-height:40rem}.company-opening h1{font-size:clamp(3.55rem,17vw,4.5rem)}.opening-note{margin-top:2.25rem}.engagement-detail{grid-template-columns:2.5rem 1fr}.engagement-detail small{font-size:.58rem}.invitation-grid>p{font-size:clamp(2.75rem,13.5vw,3.8rem)}}
</style>
