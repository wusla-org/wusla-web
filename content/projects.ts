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
    category: "Travel Platform",
    name: "BeWingo India",
    description:
      "A travel discovery and booking platform for the Indian market. Built for speed, clarity, and a seamless end-to-end booking experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    metric: "Live",
    url: "https://bewingoindia.com/",
  },
  {
    num: "02",
    category: "E-Commerce",
    name: "Muzari",
    description:
      "A modern commerce platform serving the Indian audience. Clean product browsing, fast checkout, and a mobile-first experience throughout.",
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
    metric: "Live",
    url: "https://pgcampuskalikav.vercel.app/",
  },
  {
    num: "04",
    category: "Sports Platform",
    name: "WAFY Sports",
    description:
      "A sports discovery and community platform connecting athletes, teams, and enthusiasts across regions with a polished, fast interface.",
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
