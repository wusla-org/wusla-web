<script setup lang="ts">
import { studioProjects } from "~~/content/studio";
import WRevealText from "~/components/WRevealText.vue";

const rail = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);

/** Projects with a screenshot ride the rail as image cards. */
const shown = computed(() => studioProjects.filter((p) => Boolean(p.image)));
/** The archived one has no screenshot, so its card is text only. */
const archived = computed(() => studioProjects.filter((p) => !p.image));

useScrollTimeline(rail, ({ gsap }) => {
  /*
   * Below 900px the CSS turns this rail back into a swipeable row, so
   * nothing is pinned there. A scroll hijack on touch is worse than a
   * native scroller in every way.
   */
  if (!window.matchMedia("(min-width: 901px)").matches) return;

  const el = track.value;
  const wrap = rail.value;
  if (!el || !wrap) return;

  const distance = () => el.scrollWidth - window.innerWidth;

  const pan = gsap.to(el, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      trigger: wrap,
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  /*
   * Each card comes up as it reaches the middle and settles back once
   * it has passed, so one project reads at a time. `containerAnimation`
   * is what lets a trigger measure an element that is being moved
   * horizontally by another tween rather than scrolled by the page.
   */
  gsap.utils.toArray<HTMLElement>(".w-card").forEach((card) => {
    gsap
      .timeline({
        defaults: { ease: "none", duration: 1 },
        scrollTrigger: {
          trigger: card,
          containerAnimation: pan,
          start: "left 88%",
          end: "right 12%",
          scrub: true,
        },
      })
      .fromTo(card, { opacity: 0.4, scale: 0.93 }, { opacity: 1, scale: 1 })
      .to(card, { opacity: 0.4, scale: 0.93 });
  });
});
</script>

<template>
  <section id="work" ref="rail" class="w-night w-rail">
    <div class="w-rail-in">
      <!-- The head needs its own element inside the shell. Putting
           .w-shell and .w-rail-head on one node lets the narrower
           max-width win and `margin-inline: auto` then centres that
           block instead of aligning it to the page grid. -->
      <div class="w-shell">
        <div class="w-rail-head">
          <WRevealText
            as="h2"
            class="w-section-title"
            text="Four projects. Real addresses."
            :stagger="0.05"
          />
          <p class="w-sub">Every one of these is live, or was. Open them and judge for yourself.</p>
        </div>
      </div>

      <div ref="track" class="w-track">
        <article v-for="project in shown" :key="project.slug" class="w-card">
          <div class="w-card-shot">
            <img
              :src="project.image"
              :alt="`The ${project.name} site, built by WUSLA.`"
              width="1200"
              height="750"
              loading="lazy"
            >
          </div>
          <div class="w-card-body">
            <h3 class="w-item-title">{{ project.name }}</h3>
            <p class="w-card-meta">{{ project.category }}</p>
            <p class="w-card-copy">{{ project.summary }}</p>
            <p class="w-card-link">
              <a class="w-link-bone" :href="project.url" target="_blank" rel="noopener">
                {{ project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") }}
              </a>
            </p>
          </div>
        </article>

        <article v-for="project in archived" :key="project.slug" class="w-card w-card-text">
          <div class="w-card-body">
            <p class="w-card-flag">Archived</p>
            <h3 class="w-item-title">{{ project.name }}</h3>
            <p class="w-card-meta">{{ project.category }}</p>
            <p class="w-card-copy">
              {{ project.summary }} The public demo is no longer available.
            </p>
          </div>
        </article>

        <div class="w-track-tail" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>
