"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(7,12,16,0.85)" : "transparent",
          backdropFilter:   scrolled ? "blur(16px)" : "none",
          borderBottom:     scrolled ? "1px solid var(--color-border)" : "none",
          padding:          scrolled ? "14px 0" : "20px 0",
        }}
      >
        <div className="container-custom flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-display text-xl font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
              wusla
            </span>
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "var(--color-emerald)",
                boxShadow: "0 0 8px var(--color-emerald)",
                animation: "pulse 2s infinite",
              }}
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "var(--color-emerald)",
                color: "#000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-emerald-dark)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,208,132,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-emerald)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Start a Project
            </Link>

            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
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
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div
              className="container-custom flex items-center justify-between py-5"
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              <span className="font-display text-xl font-bold" style={{ color: "var(--color-text)" }}>
                wusla<span style={{ color: "var(--color-emerald)" }}>.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg"
                style={{ color: "var(--color-text-muted)" }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 container-custom flex flex-col justify-center gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-3xl font-bold transition-colors"
                    style={{
                      color: "var(--color-text)",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-emerald)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                  >
                    <span>{l.label}</span>
                    <span style={{ color: "var(--color-emerald)", fontSize: "1.5rem" }}>↗</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="container-custom py-6">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center font-semibold py-4 rounded-lg transition-all"
                style={{ backgroundColor: "var(--color-emerald)", color: "#000" }}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
