import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wusla.com";
  return [
    { url: base,               lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`,  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
  ];
}
