import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "WUSLA | Premium Digital Agency | Web & Mobile App Development",
  description: "WUSLA is a digital agency crafting high-performance mobile apps, web platforms, and desktop software. We convert complex ideas into elegant solutions.",
  keywords: "WUSLA, Web Development, React Native, Next.js, Digital Agency, Kerala, App Development",
  authors: [{ name: "WUSLA Team" }],
  openGraph: {
    title: "WUSLA - Redefining Digital Experiences",
    description: "Premium web and mobile application development agency.",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-text-primary">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
