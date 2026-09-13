<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next';
import { engagements, studioProjects } from '~~/content/studio';

const page = ref<HTMLElement | null>(null);
const activeService = ref(0);

const featuredProject = studioProjects[0]!;
const serviceProjects = engagements.map((service) => (
  studioProjects.find((project) => project.slug === service.project) ?? featuredProject
));
const serviceImages = serviceProjects.map((project) => project.image ?? featuredProject.image!);

function selectService(index: number) {
  activeService.value = index;
}

function moveHeroMedia(event: PointerEvent) {
  if (event.pointerType === 'touch' || window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)').matches) return;
  const target = event.currentTarget as HTMLElement;
  const bounds = target.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
  target.style.setProperty('--pointer-x', `${x}px`);
  target.style.setProperty('--pointer-y', `${y}px`);
}

function resetHeroMedia(event: PointerEvent) {
  const target = event.currentTarget as HTMLElement;
  target.style.setProperty('--pointer-x', '0px');
  target.style.setProperty('--pointer-y', '0px');
}

useScrollTimeline(page, ({ gsap }) => {
  const entrance = gsap.timeline({ defaults: { ease: 'power4.out' } });

  entrance
    .from('.hp-hero-line > span', { yPercent: 112, duration: 0.86, stagger: 0.1 }, 0)
    .from('.hp-hero-support', { opacity: 0, y: 20, duration: 0.58 }, 0.32)
    .from('.hp-release', { opacity: 0, clipPath: 'inset(12% 0 8% 16%)', duration: 0.9 }, 0.16)
    .from('.hp-release-caption > span', { opacity: 0, y: 10, duration: 0.42, stagger: 0.06 }, 0.62);

  if (window.matchMedia('(min-width: 901px)').matches) {
    const heroScroll = gsap.timeline({
      scrollTrigger: {
        trigger: '.hp-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.75,
      },
    });

    heroScroll
      .to('.hp-hero-copy', { yPercent: -12, opacity: 0.18, ease: 'none' }, 0)
      .to('.hp-release', { xPercent: -8, scale: 1.12, clipPath: 'inset(0% 0 0% 0)', ease: 'none' }, 0);
  }

  gsap.from('.hp-proof-intro > *', {
    opacity: 0,
    y: 24,
    duration: 0.72,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hp-proof-intro',
      start: 'top 78%',
      once: true,
    },
  });

  gsap.from('.hp-proof-media', {
    opacity: 0.7,
    clipPath: 'inset(0 14% 0 0)',
    ease: 'power3.out',
    duration: 1.05,
    scrollTrigger: {
      trigger: '.hp-proof-media',
      start: 'top 78%',
      once: true,
    },
  });

  gsap.to('.hp-proof-media img', {
    yPercent: 4,
    scale: 1.035,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hp-proof-media',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.from('.hp-proof-beat', {
    x: 24,
    duration: 0.62,
    stagger: 0.13,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hp-proof-beats',
      start: 'top 78%',
      once: true,
    },
  });

  gsap.from('.hp-service-option', {
    xPercent: 8,
    duration: 0.68,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hp-service-options',
      start: 'top 76%',
      once: true,
    },
  });

  gsap.from('.hp-services-intro > *', {
    opacity: 0,
    y: 24,
    duration: 0.72,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hp-services-intro',
      start: 'top 78%',
      once: true,
    },
  });

  gsap.from('.hp-service-answer', {
    opacity: 0,
    clipPath: 'inset(0 0 14% 0)',
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hp-service-answer',
      start: 'top 78%',
      once: true,
    },
  });

  gsap.from('.hp-cta h2 span', {
    xPercent: -8,
    duration: 0.78,
    stagger: 0.09,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.hp-cta',
      start: 'top 70%',
      once: true,
    },
  });

  gsap.from('.hp-cta-actions', {
    opacity: 0,
    y: 18,
    duration: 0.58,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hp-cta',
      start: 'top 66%',
      once: true,
    },
  });
});
</script>

<template>
  <div ref="page" class="hp-page">
    <section class="hp-hero" aria-labelledby="homepage-title">
      <div class="studio-container hp-hero-stage">
        <div class="hp-hero-copy">
          <h1 id="homepage-title">
            <span class="hp-hero-line"><span>Anyone can generate.</span></span>
            <span class="hp-hero-line hp-hero-line-accent"><span>We make it worth shipping.</span></span>
          </h1>
          <div class="hp-hero-support">
            <p>WUSLA turns complex ideas into dependable web, mobile, and desktop software.</p>
            <div class="hp-actions">
              <NuxtLink to="/start" class="hp-primary-action">Start a project</NuxtLink>
              <a href="#proof" class="hp-secondary-action">See the proof</a>
            </div>
          </div>
        </div>

        <figure class="hp-release">
          <div class="hp-release-picture" @pointermove="moveHeroMedia" @pointerleave="resetHeroMedia">
            <img
              :src="featuredProject.image"
              alt="The released BeWingo India website presenting Kerala spices to international buyers"
              width="1200"
              height="833"
              fetchpriority="high"
            >
          </div>
          <figcaption class="hp-release-caption">
            <span>{{ featuredProject.name }}</span>
            <span>Direction, design, engineering, release</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="proof" class="hp-proof" aria-labelledby="proof-title">
      <div class="studio-container hp-proof-shell">
        <div class="hp-proof-intro">
          <p>One release, examined</p>
          <h2 id="proof-title">A useful product begins before the interface.</h2>
        </div>

        <div class="hp-proof-layout">
          <a
            :href="featuredProject.url"
            class="hp-proof-media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the live BeWingo India website"
          >
            <img
              :src="featuredProject.image"
              alt="BeWingo India website homepage"
              width="1200"
              height="833"
              loading="lazy"
              decoding="async"
            >
            <span>Visit the live site <ArrowUpRight aria-hidden="true" :size="18" :stroke-width="1.8" /></span>
          </a>

          <article class="hp-proof-story">
            <div class="hp-project-title">
              <p>{{ featuredProject.category }}</p>
              <h3>{{ featuredProject.name }}</h3>
              <p>{{ featuredProject.summary }}</p>
            </div>

            <dl class="hp-proof-beats">
              <div class="hp-proof-beat">
                <dt>The problem</dt>
                <dd>Present Kerala spices credibly to international buyers without losing the story of origin.</dd>
              </div>
              <div class="hp-proof-beat">
                <dt>The decision</dt>
                <dd>Lead with product, sourcing, and place. Keep the route from interest to enquiry direct.</dd>
              </div>
              <div class="hp-proof-beat">
                <dt>What shipped</dt>
                <dd>A responsive public website built around discovery, brand presentation, and business enquiries.</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>

    <section class="hp-services" aria-labelledby="services-title">
      <div class="studio-container hp-services-shell">
        <div class="hp-services-intro">
          <h2 id="services-title">Bring us the hard part.</h2>
          <p>Choose the situation closest to yours. The work changes, but responsibility stays connected.</p>
        </div>

        <div class="hp-service-workbench">
          <div class="hp-service-options" aria-label="Ways WUSLA can help">
            <button
              v-for="(service, index) in engagements"
              :key="service.title"
              type="button"
              class="hp-service-option"
              :class="{ 'is-active': activeService === index }"
              :aria-pressed="activeService === index"
              @click="selectService(index)"
              @focus="selectService(index)"
              @pointerenter="selectService(index)"
            >
              <span>{{ service.situation }}</span>
              <strong>{{ service.title }}</strong>
              <ArrowRight aria-hidden="true" :size="22" :stroke-width="1.7" />
            </button>
          </div>

          <div class="hp-service-answer" aria-live="polite">
            <Transition name="hp-service-shift" mode="out-in">
              <div :key="activeService" class="hp-service-answer-inner">
                <div class="hp-service-copy">
                  <p>{{ engagements[activeService]!.copy }}</p>
                  <ul aria-label="Typical outcomes">
                    <li v-for="output in engagements[activeService]!.outputs" :key="output">{{ output }}</li>
                  </ul>
                </div>
                <div class="hp-service-evidence">
                  <img
                    :src="serviceImages[activeService]"
                    :alt="`${serviceProjects[activeService]!.name} project interface`"
                    width="1200"
                    height="833"
                    loading="lazy"
                    decoding="async"
                  >
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div class="hp-trust-line">
          <p>One team stays close from the first decision to the release.</p>
          <NuxtLink to="/capabilities">How we work <ArrowRight aria-hidden="true" :size="18" :stroke-width="1.8" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="hp-cta" aria-labelledby="cta-title">
      <div class="studio-container hp-cta-shell">
        <h2 id="cta-title">
          <span><span>Something worth shipping?</span></span>
          <span><span>Let’s make it real.</span></span>
        </h2>
        <div class="hp-cta-actions">
          <NuxtLink to="/start" class="hp-cta-primary">
            Start a project
            <ArrowRight aria-hidden="true" :size="23" :stroke-width="1.8" />
          </NuxtLink>
          <a href="mailto:wuslateam@gmail.com" class="hp-cta-email">wuslateam@gmail.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hp-page {
  --hp-deep: #073c2f;
  --hp-ink: #092e24;
  --hp-mint: #dff0e7;
  --hp-bright: #00a878;
  overflow: clip;
}

.hp-hero {
  min-height: min(52rem, calc(100dvh - 80px));
  display: flex;
  align-items: stretch;
  padding-block: clamp(2.8rem, 5.5vh, 4.5rem);
}

.hp-hero-stage {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: 1fr auto;
  align-items: end;
  gap: clamp(2rem, 4vw, 4rem) clamp(1rem, 2vw, 2rem);
}

.hp-hero-copy {
  position: relative;
  z-index: 2;
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: start;
  min-width: 0;
}

.hp-hero h1 {
  max-width: none;
  font-size: clamp(3.5rem, 6.6vw, 6.55rem);
  font-weight: 560;
  line-height: 0.94;
  letter-spacing: -0.052em;
}

.hp-hero-line,
.hp-cta h2 > span {
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
}

.hp-hero-line > span,
.hp-cta h2 > span > span {
  display: block;
}

@media (min-width: 901px) {
  .hp-hero-line > span {
    white-space: nowrap;
  }
}

.hp-hero-line-accent {
  color: var(--color-accent);
}

.hp-hero-support {
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) auto;
  align-items: end;
  gap: 2rem;
  max-width: 49rem;
  margin-top: clamp(1.8rem, 3.5vw, 3rem);
}

.hp-hero-support > p {
  max-width: 29rem;
  color: var(--color-text-muted);
  font-size: 1.04rem;
  line-height: 1.6;
  text-wrap: pretty;
}

.hp-actions {
  display: flex;
  align-items: center;
  gap: 1.15rem;
}

.hp-primary-action,
.hp-cta-primary {
  min-height: 3.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.2rem;
  background: var(--color-accent);
  color: var(--button-text);
  border-radius: 0.25rem;
  font-weight: 700;
  transition: background-color 180ms ease, transform 140ms ease;
}

.hp-primary-action:hover {
  background: var(--color-accent-dark);
}

.hp-cta-primary:hover svg {
  transform: translateX(0.25rem);
}

.hp-primary-action:active,
.hp-cta-primary:active {
  transform: scale(0.98);
}

.hp-cta-primary svg {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hp-secondary-action {
  min-height: 2.75rem;
  display: inline-flex;
  align-items: center;
  color: var(--color-text);
  font-weight: 650;
  border-bottom: 1px solid var(--color-border-bright);
  transition: color 180ms ease, border-color 180ms ease;
}

.hp-secondary-action:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.hp-release {
  --pointer-x: 0px;
  --pointer-y: 0px;
  position: relative;
  z-index: 1;
  grid-column: 6 / -1;
  grid-row: 1 / 3;
  align-self: end;
  justify-self: end;
  width: min(100%, 46rem);
  min-width: 0;
  margin: 0;
  clip-path: inset(0 0 0 0);
  transform-origin: 70% 55%;
}

.hp-release-picture {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1200 / 833;
  background: var(--color-bg-elevated);
  clip-path: polygon(9% 0, 100% 0, 100% 91%, 88% 100%, 0 100%, 0 12%);
  isolation: isolate;
}

.hp-release-picture::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  border: 1px solid color-mix(in srgb, var(--color-accent) 45%, transparent);
  clip-path: inherit;
}

.hp-release-picture > img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: 40% center;
  transform: translate3d(var(--pointer-x), var(--pointer-y), 0) scale(1.035);
  transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 400ms ease;
}

.hp-release-picture:hover > img {
  filter: saturate(1.05) contrast(1.02);
}

.hp-release-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding-top: 0.9rem;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 650;
}

.hp-release-caption > span:last-child {
  text-align: right;
}

.hp-proof {
  padding-block: clamp(5rem, 10vw, 9rem);
  background: var(--color-bg-card);
}

.hp-proof-intro {
  max-width: 54rem;
  margin-left: clamp(0rem, 7vw, 7rem);
}

.hp-proof-intro > p,
.hp-project-title > p:first-child {
  color: var(--color-accent);
  font-size: 0.84rem;
  font-weight: 700;
}

.hp-proof-intro h2 {
  margin-top: 0.8rem;
  font-size: clamp(2.7rem, 5.4vw, 5.35rem);
  font-weight: 560;
  line-height: 1.02;
  letter-spacing: -0.038em;
}

.hp-proof-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(22rem, 0.78fr);
  align-items: start;
  gap: clamp(2.5rem, 6vw, 6.5rem);
  margin-top: clamp(3.5rem, 7vw, 6rem);
}

.hp-proof-media {
  display: block;
  overflow: hidden;
}

.hp-proof-media img {
  width: 100%;
  display: block;
  background: var(--color-bg-elevated);
  border-radius: 0.35rem;
  transform-origin: center;
}

.hp-proof-media > span {
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 0.85rem;
  color: var(--color-text);
  font-size: 0.88rem;
  font-weight: 700;
  border-bottom: 1px solid var(--color-border);
}

.hp-proof-media:hover > span {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.hp-proof-story {
  padding-top: clamp(0rem, 3vw, 3rem);
}

.hp-project-title h3 {
  margin-top: 0.55rem;
  font-size: clamp(2.2rem, 3.2vw, 3.4rem);
  font-weight: 620;
  letter-spacing: -0.035em;
}

.hp-project-title > p:last-child {
  max-width: 27rem;
  margin-top: 1rem;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.62;
}

.hp-proof-beats {
  margin: 2.8rem 0 0;
}

.hp-proof-beat {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 1.2rem;
  padding-block: 1.4rem;
  border-bottom: 1px solid var(--color-border);
}

.hp-proof-beat:first-child {
  border-top: 1px solid var(--color-border);
}

.hp-proof-beat dt {
  color: var(--color-accent);
  font-size: 0.82rem;
  font-weight: 700;
}

.hp-proof-beat dd {
  margin: 0;
  color: var(--color-text);
  line-height: 1.6;
}

.hp-services {
  padding-block: clamp(5.5rem, 10vw, 9rem);
  background: var(--hp-deep);
  color: #f3faf6;
}

.hp-services-intro {
  max-width: 50rem;
}

.hp-services-intro h2 {
  max-width: 9ch;
  font-size: clamp(3.1rem, 6.2vw, 5.8rem);
  font-weight: 560;
  line-height: 0.98;
  letter-spacing: -0.038em;
}

.hp-services-intro p {
  max-width: 35rem;
  margin-top: 1.6rem;
  color: #b7d3c8;
  font-size: 1.05rem;
  line-height: 1.65;
}

.hp-service-workbench {
  display: grid;
  grid-template-columns: minmax(21rem, 0.83fr) minmax(0, 1.17fr);
  gap: clamp(2rem, 5vw, 5rem);
  margin-top: clamp(3.5rem, 7vw, 6rem);
}

.hp-service-options {
  border-top: 1px solid rgb(183 211 200 / 0.42);
}

.hp-service-option {
  width: 100%;
  min-height: 8rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'situation arrow' 'title arrow';
  align-items: center;
  gap: 0.55rem 1.5rem;
  padding: 1.45rem 0.25rem;
  color: #b7d3c8;
  text-align: left;
  border: 0;
  border-bottom: 1px solid rgb(183 211 200 / 0.42);
  background: transparent;
  transition: color 220ms ease, padding 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hp-service-option > span {
  grid-area: situation;
  font-size: 0.82rem;
}

.hp-service-option strong {
  grid-area: title;
  color: inherit;
  font-size: clamp(1.35rem, 2vw, 1.9rem);
  font-weight: 620;
  letter-spacing: -0.025em;
}

.hp-service-option svg {
  grid-area: arrow;
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hp-service-option.is-active {
  padding-inline: 1.1rem;
  color: #f3faf6;
  background: rgb(255 255 255 / 0.075);
}

.hp-service-option.is-active svg {
  transform: translateX(0.35rem);
}

.hp-service-option:focus-visible {
  outline-color: #8ce0b6;
}

.hp-service-answer {
  min-width: 0;
  position: sticky;
  top: 7rem;
  align-self: start;
}

.hp-service-answer-inner {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2rem;
}

.hp-service-copy {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2rem;
  align-items: end;
}

.hp-service-copy > p {
  max-width: 34rem;
  font-size: clamp(1.35rem, 2.15vw, 2rem);
  line-height: 1.35;
  letter-spacing: -0.022em;
}

.hp-service-copy ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.hp-service-copy li {
  padding: 0.55rem 0.75rem;
  color: #cde2da;
  font-size: 0.78rem;
  border: 1px solid rgb(205 226 218 / 0.36);
  border-radius: 999px;
}

.hp-service-evidence {
  overflow: hidden;
  min-height: 22rem;
  background: #0a2f26;
  border-radius: 0.35rem;
}

.hp-service-evidence img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.hp-service-shift-enter-active,
.hp-service-shift-leave-active {
  transition: opacity 180ms ease, transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hp-service-shift-enter-from {
  opacity: 0;
  transform: translateY(0.8rem);
}

.hp-service-shift-leave-to {
  opacity: 0;
  transform: translateY(-0.45rem);
}

.hp-trust-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 4.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgb(183 211 200 / 0.42);
}

.hp-trust-line p {
  max-width: 38rem;
  color: #cde2da;
  font-size: 1.05rem;
}

.hp-trust-line a {
  min-height: 2.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #f3faf6;
  font-weight: 700;
}

.hp-trust-line a:hover svg {
  transform: translateX(0.25rem);
}

.hp-trust-line svg {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hp-cta {
  padding-block: clamp(6rem, 12vw, 11rem);
  color: #f3faf6;
  background: #052d24;
}

.hp-cta-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
  align-items: end;
  gap: 4rem;
}

.hp-cta h2 {
  font-size: clamp(3.4rem, 7vw, 6rem);
  font-weight: 560;
  line-height: 0.98;
  letter-spacing: -0.038em;
}

.hp-cta h2 span {
  color: inherit;
}

.hp-cta h2 > span:last-child {
  color: #8ce0b6;
}

.hp-cta-actions {
  display: grid;
  justify-items: start;
  gap: 1.15rem;
  padding-bottom: 0.35rem;
}

.hp-cta-primary {
  width: min(100%, 21rem);
  background: #8ce0b6;
  color: #062f25;
}

.hp-cta-primary:hover {
  background: #b4edd0;
}

.hp-cta-email {
  min-height: 2.75rem;
  display: inline-flex;
  align-items: center;
  color: #cde2da;
  border-bottom: 1px solid rgb(205 226 218 / 0.45);
}

.hp-cta-email:hover {
  color: #f3faf6;
  border-color: #f3faf6;
}

@media (max-width: 1100px) {
  .hp-hero h1 {
    font-size: clamp(3.5rem, 6.5vw, 4.65rem);
  }

  .hp-hero-support {
    grid-template-columns: 1fr;
  }

  .hp-release {
    grid-column: 6 / -1;
    width: min(100%, 39rem);
  }

  .hp-proof-layout {
    grid-template-columns: minmax(0, 1fr) minmax(19rem, 0.75fr);
    gap: 3rem;
  }

  .hp-service-workbench {
    grid-template-columns: minmax(18rem, 0.8fr) minmax(0, 1.2fr);
    gap: 2.5rem;
  }

  .hp-service-copy {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .hp-hero {
    min-height: auto;
    padding-block: 4.5rem 5.5rem;
  }

  .hp-hero-stage {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 3.5rem;
  }

  .hp-hero-copy,
  .hp-release {
    grid-column: 1;
    grid-row: auto;
  }

  .hp-hero h1 {
    max-width: 12ch;
    font-size: clamp(3.4rem, 9vw, 5.6rem);
  }

  .hp-release {
    width: min(100%, 46rem);
    margin-left: auto;
    transform: none !important;
    opacity: 1 !important;
  }

  .hp-proof-intro {
    margin-left: 0;
  }

  .hp-proof-layout {
    grid-template-columns: 1fr;
  }

  .hp-proof-story {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 2.5rem;
    padding-top: 0;
  }

  .hp-proof-beats {
    margin-top: 0;
  }

  .hp-service-workbench {
    grid-template-columns: 1fr;
  }

  .hp-service-answer {
    position: static;
  }

  .hp-service-answer-inner {
    min-height: 0;
  }

  .hp-service-evidence {
    min-height: 0;
    aspect-ratio: 1.45;
  }

  .hp-cta-shell {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 2.75rem;
  }
}

@media (max-width: 640px) {
  .hp-hero {
    padding-block: 2.8rem 4.5rem;
  }

  .hp-hero h1 {
    max-width: none;
    font-size: clamp(2.8rem, 12.4vw, 4.05rem);
    line-height: 1.01;
  }

  .hp-hero-support {
    gap: 1.5rem;
  }

  .hp-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hp-primary-action {
    width: 100%;
  }

  .hp-secondary-action {
    align-self: flex-start;
  }

  .hp-release-picture {
    aspect-ratio: 1.15;
    clip-path: polygon(8% 0, 100% 0, 100% 91%, 89% 100%, 0 100%, 0 10%);
  }

  .hp-release-picture > img {
    object-position: 38% center;
  }

  .hp-release-caption {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.15rem;
  }

  .hp-release-caption > span:last-child {
    text-align: left;
  }

  .hp-proof-intro h2 {
    font-size: clamp(2.55rem, 11.5vw, 4rem);
  }

  .hp-proof-story {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hp-proof-beat {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .hp-services-intro h2,
  .hp-cta h2 {
    max-width: none;
    font-size: clamp(2.9rem, 13vw, 4.4rem);
  }

  .hp-service-option {
    min-height: 7.2rem;
  }

  .hp-service-copy > p {
    font-size: 1.35rem;
  }

  .hp-service-evidence {
    aspect-ratio: 1.15;
  }

  .hp-service-evidence img {
    object-position: 38% center;
  }

  .hp-trust-line {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 3.5rem;
  }

  .hp-cta-primary {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hp-release-picture {
    transform: none !important;
  }

  .hp-service-shift-enter-active,
  .hp-service-shift-leave-active {
    transition: none;
  }
}
</style>
