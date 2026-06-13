import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects by WUSLA — mobile apps, web platforms, and desktop software shipped for startups and growing businesses.",
  openGraph: {
    title: "Portfolio | WUSLA",
    description: "Selected projects by WUSLA.",
    url: "https://wusla.com/portfolio",
  },
  alternates: { canonical: "https://wusla.com/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
