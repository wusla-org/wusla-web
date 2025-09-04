import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WUSLA - Building Digital Excellence | Web Development & Cloud Solutions",
  description: "Professional web development, mobile apps, and cloud solutions. We specialize in React, Next.js, Node.js, Python, and modern technology stacks to drive business growth.",
  keywords: "web development, mobile apps, cloud solutions, React, Next.js, Node.js, Python, digital transformation, software development, WUSLA",
  authors: [{ name: "WUSLA Team" }],
  creator: "WUSLA",
  publisher: "WUSLA",
  metadataBase: new URL("https://wusla.com"),
  openGraph: {
    title: "WUSLA - Building Digital Excellence",
    description: "Professional web development, mobile apps, and cloud solutions that drive business growth.",
    url: "https://wusla.com",
    siteName: "WUSLA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WUSLA - Building Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WUSLA - Building Digital Excellence",
    description: "Professional web development, mobile apps, and cloud solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
