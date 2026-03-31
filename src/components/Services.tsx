"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-24 md:py-32" style={{ backgroundColor: "var(--color-bg-elevated)" }}>
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16">
          <div className="section-label">01 / What We Build</div>
          <h2
            className="font-display font-bold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "var(--color-text)" }}
          >
            Everything your product needs —<br />
            <span style={{ color: "var(--color-emerald)" }}>under one roof.</span>
          </h2>
        </div>

        {/* Tabbed layout */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8">

          {/* Left — service list */}
          <div
            className="rounded-[14px] overflow-hidden"
            style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-card)" }}
          >
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-150 group"
                style={{
                  borderBottom: i < services.length - 1 ? "1px solid var(--color-border)" : "none",
                  backgroundColor: active === i ? "var(--color-bg-elevated)" : "transparent",
                  borderLeft: active === i ? "2px solid var(--color-emerald)" : "2px solid transparent",
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: active === i ? "var(--color-emerald)" : "var(--color-text-muted)" }}
                  >
                    {s.id}
                  </span>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: active === i ? "var(--color-text)" : "var(--color-text-muted)" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)", opacity: 0.7 }}>
                      {s.short}
                    </p>
                  </div>
                </div>
                {active === i && (
                  <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "var(--color-emerald)" }} />
                )}
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div
            className="rounded-[14px] p-10 flex flex-col justify-between"
            style={{
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-bg-card)",
              minHeight: "420px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex-1"
              >
                <span
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-4 block"
                  style={{ color: "var(--color-emerald)" }}
                >
                  {current.id} / {current.short}
                </span>
                <h3
                  className="font-display font-bold mb-5 leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--color-text)" }}
                >
                  {current.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-8 max-w-xl"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: "var(--color-emerald-dim)",
                        color: "var(--color-emerald)",
                        border: "1px solid rgba(0,208,132,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-150"
              style={{ color: "var(--color-emerald)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "12px")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "8px")}
            >
              Let&apos;s build this <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
