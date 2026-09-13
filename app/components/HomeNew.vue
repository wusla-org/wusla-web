<script setup lang="ts">
import { studioProjects, engagements, workingSteps } from '~~/content/studio';
import { siteFaqs } from '~~/content/faq';
</script>

<template>
  <div class="studio-home">
    <section class="studio-hero studio-container">
      <div class="hero-copy">
        <p class="eyebrow">Independent product studio</p>
        <h1>Move your<br>product <span>forward.</span></h1>
        <p class="hero-description">We turn complex ideas and difficult software into clear, useful products through strategy, design, and engineering.</p>
        <div class="hero-actions"><NuxtLink to="/start" class="button">Start a project <span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/portfolio" class="text-link">Explore our work <span aria-hidden="true">↗</span></NuxtLink></div>
      </div>
      <div class="hero-visual">
        <div class="hero-screen"><img src="/assets/work/bewingo-india.webp" alt="BeWingo India: a website presenting Kerala spices to global buyers" width="1200" height="833" fetchpriority="high"></div>
        <div class="hero-visual-caption"><span>BeWingo India</span><NuxtLink to="/portfolio/bewingo-india">Explore the project <span aria-hidden="true">↗</span></NuxtLink></div>
      </div>
    </section>
    <div class="proof-strip studio-container"><p>Ideas made tangible.<br>Products with a purpose.</p><div><span>BeWingo India</span><span>Muzari Exports</span><span>WAFY Sports</span></div></div>

    <section class="section-space studio-container" aria-labelledby="work-heading">
      <div class="section-heading"><h2 id="work-heading">Good work.<br><span>Out in the world.</span></h2><p>A selection of websites and applications, each built around a different business and the people it serves.</p></div>
      <div class="selected-projects"><ProjectPreview v-for="(project, index) in studioProjects.slice(0, 3)" :key="project.slug" :project="project" :featured="index === 0" /></div>
      <NuxtLink class="text-link section-link" to="/portfolio">Explore all work <span aria-hidden="true">↗</span></NuxtLink>
    </section>

    <section class="problems-section section-space" aria-labelledby="problems-heading"><div class="studio-container">
      <div class="section-heading"><p class="eyebrow">Where we can help</p><h2 id="problems-heading">A way through<br><span>the difficult part.</span></h2></div>
      <div class="problem-list"><NuxtLink v-for="item in engagements" :key="item.title" to="/capabilities" class="problem-row"><p>{{ item.situation }}</p><div><h3>{{ item.title }}</h3><p>{{ item.copy }}</p></div><span class="round-arrow" aria-hidden="true">↗</span></NuxtLink></div>
    </div></section>

    <section class="section-space studio-container" aria-labelledby="process-heading"><div class="section-heading"><h2 id="process-heading">From a first conversation<br><span>to something useful.</span></h2><p>One connected process. Clear decisions, tangible progress, and room to learn along the way.</p></div>
      <ol class="process-grid"><li v-for="item in workingSteps" :key="item.title"><h3>{{ item.title }}<span aria-hidden="true">↗</span></h3><p>{{ item.copy }}</p><span class="process-output">{{ item.output }}</span></li></ol>
    </section>

    <section class="studio-container lab-section" aria-labelledby="lab-heading"><div class="lab-art"><img src="/assets/studio-form.webp" alt="Sculptural emerald ribbon forming a continuous ascending path" width="1200" height="800" loading="lazy" decoding="async"></div><div class="lab-copy"><p class="eyebrow">Built with an owner's mindset</p><h2 id="lab-heading">We make<br><span>our own moves, too.</span></h2><p>Alongside our client work, we’re developing three original applications. Each will have its own place here when it’s ready.</p><NuxtLink to="/applications" class="text-link">Inside our product studio <span aria-hidden="true">↗</span></NuxtLink></div></section>

    <section class="section-space studio-container faq-section" aria-labelledby="faq-heading"><div class="section-heading"><h2 id="faq-heading">Before we begin.</h2><p>A few things you might be wondering.</p></div><div class="faq-list"><details v-for="faq in siteFaqs" :key="faq.question"><summary>{{ faq.question }}<span aria-hidden="true">+</span></summary><p>{{ faq.answer }}</p></details></div></section>
    <ProjectInvitation />
  </div>
</template>
