import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WUSLA - Full-Stack Development | Mobile, Web & Desktop Apps | Kerala",
  description: "WUSLA delivers mobile apps, web platforms, and desktop solutions. 50+ projects launched, 100K+ active users, ₹2Cr+ revenue generated. From concept to production in 30 days. React Native, Next.js, Electron expertise.",
  keywords: "full-stack developer Kerala, mobile app development India, web development Kerala, desktop app development, React Native, Next.js, Electron, startup development, enterprise solutions, freelance developer Kerala",
  authors: [{ name: "WUSLA Team" }],
  creator: "WUSLA",
  publisher: "WUSLA",
  metadataBase: new URL("https://wusla.com"),
  openGraph: {
    title: "WUSLA - React Native & Mobile App Development from Kerala",
    description: "Expert mobile app development with React Native. Cross-platform apps for iOS & Android. Based in Kerala, India with Arabic market expertise.",
    url: "https://wusla.com",
    siteName: "WUSLA",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WUSLA - React Native Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WUSLA - React Native Development from Kerala",
    description: "Expert mobile app development with React Native. Cross-platform iOS & Android apps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-primary">
        {children}
      </body>
    </html>
  );
}
