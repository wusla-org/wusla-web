import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://wusla.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "WUSLA — Your Dedicated Software Team",
    template: "%s | WUSLA",
  },
  description:
    "WUSLA acts as your dedicated software team on contract. Mobile apps, web platforms, desktop software, and UI/UX design for startups and growing businesses.",
  keywords: ["software team", "mobile app development", "web development", "startup", "WUSLA", "Kerala"],
  authors: [{ name: "WUSLA", url: BASE_URL }],
  openGraph: {
    title: "WUSLA — Your Dedicated Software Team",
    description: "Mobile apps, web platforms & more — on contract, on your terms.",
    url: BASE_URL,
    siteName: "WUSLA",
    type: "website",
    images: [
      {
        url: "/assets/wusla_square.png",
        width: 400,
        height: 400,
        alt: "WUSLA — Your Dedicated Software Team",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "WUSLA — Your Dedicated Software Team",
    description: "Mobile apps, web platforms & more — on contract, on your terms.",
    images: ["/assets/wusla_square.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WUSLA",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/wusla_square.png`,
  email: "wuslateam@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "wuslateam@gmail.com",
    contactType: "customer support",
    availableLanguage: ["English", "Malayalam"],
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/wusla-org",
    "https://twitter.com/wusla",
    "https://linkedin.com/company/wusla",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
        {children}
      </body>
    </html>
  );
}
