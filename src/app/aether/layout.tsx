import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aether App",
  description:
    "Aether by WUSLA is an offline-first productivity app for notes, tasks, diary, and calendar in one private experience.",
  alternates: {
    canonical: "/aether",
  },
  openGraph: {
    title: "Aether | Offline Productivity App",
    description:
      "Notes, tasks, diary, and calendar in one private, offline-first app built by WUSLA.",
    url: "https://wusla.com/aether",
    type: "website",
    images: [
      {
        url: "/assets/aether/splash.png",
        width: 2048,
        height: 2048,
        alt: "Aether app splash image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether | Offline Productivity App",
    description:
      "Notes, tasks, diary, and calendar in one private, offline-first app built by WUSLA.",
    images: ["/assets/aether/splash.png"],
  },
};

export default function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
