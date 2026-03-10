import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Review selected WUSLA client projects, case studies, and technology capabilities across web and mobile products.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "WUSLA Portfolio",
    description:
      "Review selected WUSLA client projects, case studies, and technology capabilities across web and mobile products.",
    url: "https://wusla.com/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
