"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const services = [
  {
    id: "01",
    title: "Mobile Apps",
    short: "iOS & Android",
    description:
      "Cross-platform and native mobile applications that users actually love. From MVP to full product, built for performance and retention.",
    tags: ["React Native", "Swift", "Kotlin", "Expo"],
  },
  {
    id: "02",
    title: "Web Platforms",
    short: "SaaS & Portals",
    description:
      "Full-stack web applications — SaaS dashboards, client portals, marketing sites. Built on modern stacks, optimised for scale.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
  },
  {
    id: "03",
    title: "Desktop Software",
    short: "Cross-platform Apps",
    description:
      "Custom desktop tooling for Windows, macOS, and Linux. Internal platforms, data tools, and workflow software your team will actually use.",
    tags: ["Electron", "Tauri", "Rust", "Node.js"],
  },
  {
    id: "04",
    title: "UI / UX Design",
    short: "Product Design",
    description:
      "Design that converts. From wireframe to polished product — user research, prototyping, and production-ready design systems.",
    tags: ["Figma", "Prototyping", "Design Systems", "Motion"],
  },
  {
    id: "05",
    title: "Dedicated Team",
    short: "Monthly Contract",
    description:
      "Your full software team embedded into your workflow, on a monthly contract. Slack, GitHub, standups — however you work.",
    tags: ["Contract", "Long-term", "Embedded", "Agile"],
  },
  {
    id: "06",
    title: "Fast MVPs",
    short: "2–4 Week Delivery",
    description:
      "Validate your idea with real users before burning runway. We scope, design, and ship a production-ready MVP in weeks.",
    tags: ["MVP", "Rapid Build", "Validation", "Launch"],
  },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <section id="services" className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-elevated)" }}>
      <div className="container-custom">

        <Reveal className="mb-16 max-w-3xl">
          <div className="mono-label mb-5">What we build</div>
          <h2
            className="font-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2.1rem,4.6vw,3.6rem)", color: "var(--color-text)" }}
          >
            Everything your product needs, under one roof.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-5 lg:gap-8">

          {/* Index — hairline rows, accent rail only on active */}
          <Reveal y={16} className="flex flex-col">
            {services.map((s, i) => {
              const on = active === i;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className="group w-full flex items-center gap-4 px-4 py-4 text-left rounded-xl btn-press"
                  style={{
                    backgroundColor: on ? "var(--color-bg-card)" : "transparent",
                    boxShadow: on ? "inset 2px 0 0 var(--color-emerald)" : "inset 2px 0 0 transparent",
                    transition: "background-color 200ms var(--ease-out)",
                  }}
                  aria-pressed={on}
                >
                  <span
                    className="font-mono text-xs nums w-6 shrink-0"
                    style={{ color: on ? "var(--color-text)" : "var(--color-text-faint)" }}
                  >
                    {s.id}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold" style={{ color: on ? "var(--color-text)" : "var(--color-text-muted)" }}>
                      {s.title}
                    </span>
                    <span className="block font-mono text-[11px] mt-0.5" style={{ color: "var(--color-text-faint)" }}>
                      {s.short}
                    </span>
                  </span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 transition-all duration-200"
                    style={{
                      color: "var(--color-emerald)",
                      opacity: on ? 1 : 0,
                      transform: on ? "translateX(0)" : "translateX(-6px)",
                    }}
                  />
                </button>
              );
            })}
          </Reveal>

          {/* Detail — large editorial panel */}
          <Reveal y={16} delay={0.05}>
            <div
              className="surface h-full p-8 md:p-12 flex flex-col justify-between"
              style={{ borderRadius: "var(--radius-lg)", minHeight: "440px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                >
                  <span className="font-mono text-xs nums tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                    {current.id} — {current.short}
                  </span>
                  <h3
                    className="font-display font-bold mt-4 mb-5 leading-tight"
                    style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", color: "var(--color-text)" }}
                  >
                    {current.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-8 max-w-xl text-pretty" style={{ color: "var(--color-text-muted)" }}>
                    {current.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-3 py-1.5 rounded-md"
                        style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 font-semibold text-sm mt-10"
                style={{ color: "var(--color-text)" }}
              >
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--color-emerald)", transitionTimingFunction: "var(--ease-out)" }} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
