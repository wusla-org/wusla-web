<template>
  <footer class="studio-footer studio-container">
    <div class="footer-main"><NuxtLink to="/" class="studio-wordmark" aria-label="WUSLA home">wusla<span aria-hidden="true">↗</span></NuxtLink><p>Independent minds.<br>Useful software.</p><nav aria-label="Footer navigation"><NuxtLink to="/portfolio">Work</NuxtLink><NuxtLink to="/capabilities">Capabilities</NuxtLink><NuxtLink to="/company">Company</NuxtLink><NuxtLink to="/applications">Applications</NuxtLink></nav><div class="footer-contact"><a href="mailto:wuslateam@gmail.com">wuslateam@gmail.com ↗</a><a href="https://github.com/wusla-org" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div>
    <div class="footer-bottom-line"><span>© {{ new Date().getFullYear() }} WUSLA</span><span>Based in Kerala, India.</span><NuxtLink to="/start">Have something in mind? ↗</NuxtLink></div>
  </footer>
</template>
