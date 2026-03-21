import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore WUSLA's complete archive of open source repositories, experiments, and production-ready software projects.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "WUSLA Projects",
    description:
      "Explore WUSLA's complete archive of open source repositories, experiments, and production-ready software projects.",
    url: "https://wusla.com/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
