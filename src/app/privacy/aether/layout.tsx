import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aether Privacy Policy",
  description:
    "Read the privacy policy for Aether and learn how WUSLA handles data for the app.",
  alternates: {
    canonical: "/privacy/aether",
  },
  openGraph: {
    title: "Aether Privacy Policy",
    description:
      "Read the privacy policy for Aether and learn how WUSLA handles data for the app.",
    url: "https://wusla.com/privacy/aether",
    type: "article",
  },
};

export default function AetherPrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
