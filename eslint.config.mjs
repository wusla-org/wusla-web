// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    ignores: [".claude/**", ".remember/**", ".superpowers/**", ".agents/**"],
  },
  {
    rules: {
      // Single-word section/layout component names (Navbar, Footer, Work, ...)
      // are clear and unambiguous here; not worth the churn of renaming.
      "vue/multi-word-component-names": "off",
    },
  },
);
