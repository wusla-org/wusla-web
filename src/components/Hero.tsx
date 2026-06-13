"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

const trust = ["Full code ownership", "Ships in 2–4 weeks", "Fixed monthly pricing"];
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Single ambient wash — low and to the side, not centered */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-15%", width: "65vw", height: "65vw",
          background: "radial-gradient(ellipse at center, rgba(31,191,128,0.06) 0%, transparent 62%)",
          filter: "blur(30px)",
        }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-x-16 gap-y-20 items-center">

          {/* Left — copy */}
          <div>
            <motion.div {...rise(0)} className="mono-label mb-7">
              Software team on contract
            </motion.div>

            <h1
              className="font-display font-extrabold leading-[0.98] mb-7"
              style={{ fontSize: "clamp(2.9rem, 6.4vw, 5.4rem)", color: "var(--color-text)" }}
            >
              <motion.span className="block" {...rise(0.05)}>Your dedicated</motion.span>
              <motion.span className="block" {...rise(0.12)}>software team.</motion.span>
            </h1>

            <motion.p
              {...rise(0.22)}
              className="text-lg leading-relaxed mb-10 max-w-xl text-pretty"
              style={{ color: "var(--color-text-muted)" }}
            >
              WUSLA plugs in as your engineering team — mobile, web, and desktop
              products, shipped fast. On your terms, and the code is 100% yours.
            </motion.p>

            <motion.div {...rise(0.32)} className="flex flex-col sm:flex-row gap-3.5 mb-12">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-3.5 rounded-[10px] btn-press"
                style={{
                  backgroundColor: "var(--color-emerald)",
                  color: "#04140D",
                  transition: "box-shadow 220ms var(--ease-out), transform 160ms var(--ease-out)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-emerald)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ transitionTimingFunction: "var(--ease-out)" }} />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-3.5 rounded-[10px] btn-press"
                style={{
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border-bright)",
                  transition: "background-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-bg-card)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                See our work
              </Link>
            </motion.div>

            <motion.div {...rise(0.42)} className="flex flex-wrap gap-x-6 gap-y-2">
              {trust.map((item) => (
                <span key={item} className="font-mono text-xs tracking-wide" style={{ color: "var(--color-text-muted)" }}>
                  <span style={{ color: "var(--color-emerald)" }}>◇</span>&nbsp; {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — signature visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
            className="hidden sm:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
