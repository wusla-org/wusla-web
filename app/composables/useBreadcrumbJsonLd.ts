/**
 * BreadcrumbList structured data for an inner page. Search and answer
 * engines use this to show the page's place in the site instead of a bare
 * URL, and to understand how pages relate to each other.
 */
export function useBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  const BASE_URL = "https://wusla.co";

  useHead({
    script: [{
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${BASE_URL}${item.path}`,
        })),
      }),
    }],
  });
}
