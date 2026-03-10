import type { Metadata } from "next";
import { Syne, Bricolage_Grotesque, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CurtainLoader from "../components/CurtainLoader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wusla.com"),
  title: {
    default: "WUSLA | Custom Software & Web App Development Agency",
    template: "%s | WUSLA",
  },
  description:
    "WUSLA is a custom software development agency building web apps, platforms, and digital products for businesses worldwide.",
  keywords:
    "WUSLA, custom software development, web app development, software agency, React development, Next.js development, product design",
  authors: [{ name: "WUSLA" }],
  creator: "WUSLA",
  publisher: "WUSLA",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "WUSLA | Custom Software & Web App Development Agency",
    description: "We design and build web apps, platforms, and digital products for ambitious companies worldwide.",
    url: "https://wusla.com",
    siteName: "WUSLA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WUSLA | Custom Software & Web App Development Agency",
    description: "We design and build web apps, platforms, and digital products for ambitious companies worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WUSLA",
    "url": "https://wusla.com",
    "logo": "https://wusla.com/logo.png",
    "description": "Custom software development agency specializing in web apps, platforms, and digital products for businesses worldwide.",
    "sameAs": [
      "https://twitter.com/wusla",
      "https://github.com/wusla-org",
      "https://linkedin.com/company/wusla"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@wusla.com",
      "contactType": "customer service"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WUSLA",
    "url": "https://wusla.com",
    "description": "Custom software and web app development agency",
    "serviceType": ["Web Application Development", "Product Design", "Backend Development", "Mobile Development"],
    "areaServed": "Worldwide"
  };

  return (
    <html lang="en" className={`${syne.variable} ${bricolage.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
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
