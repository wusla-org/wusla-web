import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Projects",
  description:
    "Open source work from the WUSLA team — public repos, experiments, and production-ready codebases.",
  openGraph: {
    title: "Open Source Projects | WUSLA",
    description: "Open source work from the WUSLA team.",
    url: "https://wusla.com/projects",
  },
  alternates: { canonical: "https://wusla.com/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
