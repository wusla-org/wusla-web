"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Us",   href: "#why-us",   id: "why-us" },
  { label: "Work",     href: "#work",     id: "work" },
  { label: "Contact",  href: "#contact",  id: "contact" },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(8,9,11,0.72)" : "transparent",
          backdropFilter:  scrolled ? "blur(18px) saturate(140%)" : "none",
          boxShadow: scrolled
            ? "inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 0 var(--color-border), 0 20px 40px -32px rgba(0,0,0,0.8)"
            : "none",
          padding: scrolled ? "12px 0" : "22px 0",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <div className="container-custom flex items-center justify-between">

          {/* Wordmark */}
          <Link href="/" className="flex items-baseline gap-1.5 btn-press" aria-label="WUSLA home">
            <span className="font-display text-lg font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
              wusla
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ backgroundColor: "var(--color-emerald)", boxShadow: "0 0 8px var(--color-emerald)" }}
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                data-active={active === l.id}
                className="link-underline text-sm font-medium transition-colors duration-200"
                style={{ color: active === l.id ? "var(--color-text)" : "var(--color-text-muted)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-[10px] btn-press"
              style={{
                color: "var(--color-text)",
                border: "1px solid var(--color-border-bright)",
                transition: "border-color 200ms var(--ease-out), background-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-bg-card)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" style={{ color: "var(--color-emerald)" }} />
            </Link>

            <button
              className="md:hidden p-2 rounded-lg btn-press"
              style={{ color: "var(--color-text)" }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="fixed inset-0 z-50 flex flex-col md:hidden"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div
              className="container-custom flex items-center justify-between py-5"
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              <span className="font-display text-lg font-bold" style={{ color: "var(--color-text)" }}>
                wusla<span style={{ color: "var(--color-emerald)" }}>.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg btn-press"
                style={{ color: "var(--color-text-muted)" }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 container-custom flex flex-col justify-center gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, ease: EASE_OUT, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-3xl font-bold"
                    style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="w-6 h-6" style={{ color: "var(--color-emerald)" }} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="container-custom py-6">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center font-semibold py-4 rounded-[10px] btn-press"
                style={{ backgroundColor: "var(--color-emerald)", color: "#04140D" }}
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
