export interface Project {
  num: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  metric: string;
  url: string;
}

/**
 * Single source of truth for "our work" — consumed by both the homepage Work
 * section and the /portfolio page. Previously these showed two different,
 * contradictory project lists; this unifies them on the real shipped work.
 */
export const projects: Project[] = [
  {
    num: "01",
    category: "Brand Website / Export",
    name: "BeWingo India",
    description:
      "A digital home for Kerala spices, with a product catalogue, sourcing story, and export enquiries.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    metric: "Live",
    url: "https://bewingoindia.com/",
  },
  {
    num: "02",
    category: "Business Website / Agriculture",
    name: "Muzari Exports",
    description:
      "A public website presenting Indian agricultural produce, sourcing, and export enquiries for international buyers.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    metric: "Live",
    url: "https://muzari.in/",
  },
  {
    num: "03",
    category: "Web App",
    name: "PG Campus Kalikav",
    description:
      "Campus accommodation management for Kalikav. Streamlines PG listings, room bookings, and resident coordination in one place.",
    tags: ["Next.js", "Vercel", "TypeScript"],
    metric: "Archived",
    url: "https://pgcampuskalikav.vercel.app/",
  },
  {
    num: "04",
    category: "Sports Platform",
    name: "WAFY Sports",
    description:
      "A sports competition application with event information, results, and championship standings.",
    tags: ["React", "Next.js", "Vercel"],
    metric: "Live",
    url: "https://sportify-wafy-sports.vercel.app/",
  },
];

/** Capabilities stat band on /portfolio — derived from the unified data, not hardcoded placeholder copy. */
export function getCapabilities() {
  const distinctTags = new Set(projects.flatMap((p) => p.tags));
  const distinctCategories = new Set(projects.map((p) => p.category));
  return {
    totalTechnologies: `${distinctTags.size}+`,
    focusAreas: `${distinctCategories.size}`,
    approachType: "Contract-Based",
    projectsShipped: `${projects.length}`,
  };
}
