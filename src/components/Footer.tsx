"use client";

import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const sitemap = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/wusla-org", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/wusla", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/wusla", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@wusla.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/8 pt-16 pb-8">
      <div className="container-custom">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/">
              <span className="font-display text-3xl font-bold tracking-tighter text-white hover:text-brand-accent transition-colors">
                WUSLA
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mt-4 max-w-xs">
              Custom software agency building web apps, platforms, and digital products for ambitious businesses worldwide.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">Navigate</h4>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:text-brand-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">Get in Touch</h4>
            <p className="text-white/60 text-sm mb-2">hello@wusla.com</p>
            <p className="text-text-secondary text-xs mb-6">We reply within 24 hours.</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 font-mono uppercase tracking-widest">
          <p>© {currentYear} WUSLA. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
