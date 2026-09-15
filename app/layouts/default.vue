<template>
  <div>
    <a href="#main-content" class="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content" tabindex="-1"><slot /></main>
    <Footer />
    <MobileCta />
  </div>
</template>
