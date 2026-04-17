import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wusla.io"),
  title: {
    default: "WUSLA | Your Tech Team. Without the Hiring.",
    template: "%s | WUSLA",
  },
  description:
    "WUSLA is your dedicated tech team. We build web apps, mobile apps, and business systems — and stay involved long after delivery. No recruitment. No onboarding. No disappearing.",
  keywords:
    "WUSLA, dedicated tech team, software development, web apps, mobile apps, business systems, no hiring",
  authors: [{ name: "WUSLA" }],
  creator: "WUSLA",
  robots: { index: true, follow: true },
  openGraph: {
    title: "WUSLA | Your Tech Team. Without the Hiring.",
    description:
      "Your dedicated tech team. We build, maintain and grow your product — with no recruitment, no onboarding, no disappearing.",
    url: "https://wusla.io",
    siteName: "WUSLA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WUSLA | Your Tech Team. Without the Hiring.",
    description:
      "Your dedicated tech team. We build, maintain and grow your product.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WUSLA",
    url: "https://wusla.io",
    description:
      "Dedicated tech team — web apps, mobile apps, and business systems. No hiring needed.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "wuslateam@gmail.com",
      contactType: "customer service",
    },
    sameAs: ["https://github.com/wusla-org"],
  };

  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
