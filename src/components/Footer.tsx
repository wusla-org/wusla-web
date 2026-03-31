"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Mobile Apps",    href: "#services" },
    { label: "Web Platforms",  href: "#services" },
    { label: "Desktop Apps",   href: "#services" },
    { label: "UI/UX Design",   href: "#services" },
    { label: "Dedicated Team", href: "#services" },
  ],
  Company: [
    { label: "Our Work",  href: "#work" },
    { label: "Why WUSLA", href: "#why-us" },
    { label: "Contact",   href: "#contact" },
  ],
};

const socials = [
  { icon: Github,   href: "https://github.com/wusla-org",       label: "GitHub" },
  { icon: Twitter,  href: "https://twitter.com/wusla",          label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/wusla", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:hello@wusla.com",             label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "2px solid var(--color-emerald)",
      }}
    >
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5 group">
              <span
                className="font-display text-xl font-bold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                wusla
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "var(--color-emerald)",
                  boxShadow: "0 0 8px var(--color-emerald)",
                }}
              />
            </Link>

            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Your dedicated software team on contract. Mobile apps, web platforms,
              desktop software, and UI/UX design for startups.
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-emerald)";
                    el.style.color = "var(--color-emerald)";
                    el.style.backgroundColor = "var(--color-emerald-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-muted)";
                    el.style.backgroundColor = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--color-text-muted)", opacity: 0.5 }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)", opacity: 0.5 }}>
            &copy; {year} WUSLA. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)", opacity: 0.5 }}>
            Kerala, India &mdash; hello@wusla.com
          </p>
        </div>
      </div>
    </footer>
  );
}
