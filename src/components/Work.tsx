"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    num: "01",
    category: "Web Platform",
    name: "Auditorium",
    description:
      "A live audio experience platform built on Cloudflare Workers. Real-time rooms, low-latency streaming, and a clean interface that just works.",
    tags: ["Cloudflare Workers", "Web Audio API", "TypeScript"],
    metric: "< 200ms latency",
    url: "https://auditorium.wuslateam.workers.dev/",
  },
  {
    num: "02",
    category: "SaaS Dashboard",
    name: "Client Portal",
    description:
      "An internal project management and invoicing portal for a logistics company. Cut their admin overhead by 60% in the first month.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    metric: "60% less admin",
    url: null,
  },
  {
    num: "03",
    category: "Mobile App",
    name: "Field Sales App",
    description:
      "Offline-first Android app for a regional FMCG distributor. Orders, route planning, and real-time sync when connectivity returns.",
    tags: ["React Native", "SQLite", "REST API"],
    metric: "Offline-first",
    url: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-elevated)" }}>
      <div className="container-custom">

        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mono-label mb-5">Selected work</div>
            <h2
              className="font-display font-bold leading-[1.05]"
              style={{ fontSize: "clamp(2.1rem,4.6vw,3.6rem)", color: "var(--color-text)" }}
            >
              Products we&apos;ve shipped, built to last.
            </h2>
          </div>
          <Link
            href="#contact"
            className="link-underline font-mono text-xs uppercase tracking-widest hidden sm:inline-block"
            style={{ color: "var(--color-text-muted)" }}
          >
            Start yours →
          </Link>
        </Reveal>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => {
            const inner = (
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 px-7 py-8 md:px-10 md:py-10">

                    {/* Index + metric — the asymmetric left rail */}
                    <div className="flex lg:flex-col lg:w-32 shrink-0 items-baseline lg:items-start gap-4 lg:gap-3">
                      <span
                        className="font-display font-bold nums leading-none select-none"
                        style={{ fontSize: "3.4rem", color: "var(--color-border-bright)" }}
                        aria-hidden
                      >
                        {project.num}
                      </span>
                      <span
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md"
                        style={{ color: "var(--color-emerald)", backgroundColor: "var(--color-emerald-dim)" }}
                      >
                        {project.metric}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-muted)" }}>
                        {project.category}
                      </p>
                      <h3
                        className="font-display font-bold mb-3 leading-tight"
                        style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", color: "var(--color-text)" }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-5 max-w-2xl text-pretty" style={{ color: "var(--color-text-muted)" }}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-md"
                            style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Affordance */}
                    <div
                      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center self-start lg:self-center transition-all duration-200"
                      style={{
                        border: "1px solid var(--color-border)",
                        color: project.url ? "var(--color-text-muted)" : "var(--color-text-faint)",
                        opacity: project.url ? 1 : 0.5,
                      }}
                    >
                      <ArrowUpRight
                        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ transitionTimingFunction: "var(--ease-out)" }}
                      />
                    </div>
                  </div>
            );

            return (
              <Reveal key={project.num} delay={i * 0.08}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lift surface group block"
                    style={{ borderRadius: "var(--radius-lg)" }}
                    aria-label={`View ${project.name}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="lift surface group block" style={{ borderRadius: "var(--radius-lg)" }}>
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
