"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const NAV_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={prefersReducedMotion ? { opacity: 1 } : { y: -36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: NAV_EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/82 backdrop-blur-xl py-3.5 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Left: desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white text-[0.95rem] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:border-white/45 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4 text-white" />
          </button>

          {/* Center: Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-display text-2xl font-bold tracking-tight text-white hover:text-brand-accent transition-colors duration-300">
              WUSLA
            </span>
          </Link>

          {/* Right: remaining nav + CTA */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white text-[0.95rem] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-md bg-brand-accent text-white text-[0.95rem] font-semibold hover:bg-white hover:text-background transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl text-white flex flex-col"
          >
            <div className="container-custom py-5 flex justify-between items-center border-b border-white/10">
              <span className="font-display text-xl font-bold tracking-tight">WUSLA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:border-white/45 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 container-custom flex flex-col justify-center space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-4 py-4 border-b border-white/10 hover:border-brand-accent/35 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xs text-brand-accent/85 font-medium">0{i + 1}</span>
                    <span className="font-display font-semibold text-4xl tracking-tight text-white group-hover:text-brand-accent transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="container-custom py-8 border-t border-white/10">
              <Link
                href="#contact"
                className="flex items-center justify-center px-8 py-4 rounded-md bg-brand-accent text-white font-semibold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
