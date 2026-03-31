import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "WUSLA — Your Dedicated Software Team",
  description:
    "WUSLA acts as your dedicated software team on contract. Mobile apps, web platforms, desktop software, and UI/UX design for startups and growing businesses.",
  keywords: "software team, mobile app development, web development, startup, WUSLA, Kerala",
  authors: [{ name: "WUSLA" }],
  openGraph: {
    title: "WUSLA — Your Dedicated Software Team",
    description: "Mobile apps, web platforms & more — on contract, on your terms.",
    url: "https://wusla.com",
    siteName: "WUSLA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
        {children}
      </body>
    </html>
  );
}
