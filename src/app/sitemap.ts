import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wusla.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
    { path: "/aether", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy/aether", changeFrequency: "yearly", priority: 0.4 },
  ] as const;

  const now = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
