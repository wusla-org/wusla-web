"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Work",     href: "#work" },
  { label: "Contact",  href: "#contact" },
];

const socials = [
  { icon: Github,   href: "https://github.com/wusla-org",       label: "GitHub" },
  { icon: Twitter,  href: "https://twitter.com/wusla",          label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/wusla", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:wuslateam@gmail.com",         label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container-custom py-16 md:py-20">

        {/* Big closing line */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1.5 mb-5">
              <span className="font-display text-lg font-bold tracking-tight" style={{ color: "var(--color-text)" }}>wusla</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-emerald)", boxShadow: "0 0 8px var(--color-emerald)" }} />
            </Link>
            <p
              className="font-display font-bold leading-[1.05] max-w-md"
              style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "var(--color-text)" }}
            >
              Your dedicated software team.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-[10px] btn-press self-start lg:self-auto"
            style={{ backgroundColor: "var(--color-emerald)", color: "#04140D", transition: "box-shadow 220ms var(--ease-out), transform 160ms var(--ease-out)" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-emerald)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            Start a project →
          </Link>
        </div>

        <div className="hairline mb-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {nav.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="link-underline text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="lift w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
              >
                <Icon size={15} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-10">
          <p className="font-mono text-xs" style={{ color: "var(--color-text-faint)" }}>
            © {year} WUSLA. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--color-text-faint)" }}>
            Kerala, India — wuslateam@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
