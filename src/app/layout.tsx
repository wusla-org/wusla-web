import type { Metadata } from "next";
import { Inter, Oswald, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CurtainLoader from "../components/CurtainLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WUSLA | Create the Unexpected",
  description: "WUSLA is a digital agency crafting high-performance mobile apps, web platforms, and desktop software. We convert complex ideas into elegant solutions.",
  keywords: "WUSLA, Web Development, React Native, Next.js, Digital Agency, Kerala, App Development",
  authors: [{ name: "WUSLA Team" }],
  openGraph: {
    title: "WUSLA - Create the Unexpected",
    description: "Premium digital agency.",
    url: "https://wusla.com",
    siteName: "WUSLA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AEO: Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WUSLA",
    "url": "https://wusla.com",
    "logo": "https://wusla.com/logo.png",
    "description": "Premium digital agency specializing in high-performance web and mobile applications.",
    "sameAs": [
      "https://twitter.com/wusla",
      "https://github.com/wusla",
      "https://linkedin.com/company/wusla"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@wusla.com",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-text-primary selection:bg-brand-accent selection:text-brand-white">
        <CurtainLoader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
