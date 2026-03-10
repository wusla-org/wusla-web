"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const line1 = ["We", "Build", "Software"];
const line2 = ["Your", "Business", "Needs."];

const chips = ["Web Apps & SaaS", "Mobile Apps", "Custom Platforms", "E-Commerce"];

const previewCards = [
  { id: "01", name: "FinTrack Pro", category: "B2B SaaS", outcome: "$2M+ monthly" },
  { id: "02", name: "MedConnect", category: "Healthcare", outcome: "60% time saved" },
  { id: "03", name: "StyleHive", category: "E-Commerce", outcome: "12k+ products" },
];

const heroStats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "4.9★", label: "Rating" },
  { value: "100%", label: "On-Time" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fade = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE, delay },
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-24 pb-0">
      <div className="container-custom relative z-10">
        {/* Top bar */}
        <motion.div {...fade(0)} className="border-b border-white/10 pb-4 mb-14 flex items-center justify-between">
          <p className="text-sm text-white/55 tracking-wide font-mono">WUSLA — Software Studio</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" style={{ animation: "pulse 2s infinite" }} />
            <span className="text-xs text-white/40 font-mono">Available for projects</span>
          </div>
        </motion.div>

        {/* Headline — curtain reveal */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-x-[0.28em]" style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)" }}>
            {line1.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className="block font-display font-bold text-white leading-[1.03]"
                  initial={prefersReducedMotion ? {} : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-[0.28em]" style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)" }}>
            {line2.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className={`block font-display font-bold leading-[1.03] ${word === "Needs." ? "text-brand-accent" : "text-white"}`}
                  initial={prefersReducedMotion ? {} : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: (line1.length + i) * 0.12 }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Service chips */}
        <motion.div {...fade(0.5)} className="flex flex-wrap gap-2 mb-12">
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-4 py-1.5 border border-white/12 text-white/50 text-sm font-mono rounded-full hover:border-brand-accent/40 hover:text-white/70 transition-colors duration-200 cursor-default"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Description + CTAs */}
        <motion.div {...fade(0.6)} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-md mb-3">
              We engineer software for companies serious about growth.
            </p>
            <p className="text-white/25 text-xs font-mono">Free consult · 24hr response</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-brand-accent text-white font-semibold text-base rounded-md hover:bg-white hover:text-background transition-all duration-300"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#work"
              className="text-white/65 font-medium text-base hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>

        {/* Work preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {previewCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.9 + i * 0.08 }}
              className="group relative bg-surface border border-white/8 p-5 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Large bg number */}
              <span className="absolute right-2 bottom-0 font-display font-bold text-[5.5rem] text-white/[0.04] leading-none pointer-events-none select-none">
                {card.id}
              </span>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">{card.category}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-4">{card.name}</h3>
                <span className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-mono px-2.5 py-1">
                  {card.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-px bg-white/10" />
      </div>

      {/* Stats strip */}
      <motion.div
        {...fade(1.1)}
        className="relative z-10 w-full border-t border-white/10"
      >
        <div className="container-custom">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {heroStats.map((stat, i) => (
              <div key={i} className="py-6 px-5 md:px-6 first:pl-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/90" />
                  <span className="font-display font-semibold text-xl text-white">{stat.value}</span>
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
