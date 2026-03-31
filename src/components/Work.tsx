"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    category: "Web Platform",
    name: "Auditorium",
    description:
      "A live audio experience platform built on Cloudflare Workers. Real-time rooms, low-latency streaming, and a clean interface that just works.",
    tags: ["Cloudflare Workers", "Web Audio API", "TypeScript"],
    url: "https://auditorium.wuslateam.workers.dev/",
  },
  {
    num: "02",
    category: "SaaS Dashboard",
    name: "Client Portal",
    description:
      "An internal project management and invoicing portal for a logistics company. Reduced their admin overhead by 60% in the first month.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    url: null,
  },
  {
    num: "03",
    category: "Mobile App",
    name: "Field Sales App",
    description:
      "Offline-first Android app for a regional FMCG distributor. Orders, route planning, and real-time sync when connectivity returns.",
    tags: ["React Native", "SQLite", "REST API"],
    url: null,
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg-elevated)" }}
    >
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16">
          <div className="section-label">03 / Our Work</div>
          <h2
            className="font-display font-bold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "var(--color-text)" }}
          >
            Products we&apos;ve shipped —<br />
            <span style={{ color: "var(--color-emerald)" }}>built to last.</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-[14px] overflow-hidden transition-all duration-200"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-bg-card)",
                borderBottom: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderBottomColor = "var(--color-emerald)";
                el.style.backgroundColor = "var(--color-bg-elevated)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderBottomColor = "var(--color-border)";
                el.style.backgroundColor = "var(--color-bg-card)";
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 px-8 py-8 md:px-10 md:py-10">

                {/* Large faded number */}
                <div
                  className="hidden lg:block shrink-0 select-none font-display font-bold leading-none"
                  style={{
                    fontSize: "6rem",
                    color: "var(--color-border)",
                    lineHeight: 1,
                    width: "7rem",
                    transition: "color 0.2s",
                  }}
                >
                  {project.num}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--color-emerald-dim)",
                        color: "var(--color-emerald)",
                        border: "1px solid rgba(0,208,132,0.2)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold mb-3 leading-tight transition-colors duration-200"
                    style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--color-text)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-emerald)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")
                    }
                  >
                    {project.name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-5 max-w-2xl"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
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
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                ) : (
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-muted)",
                      opacity: 0.3,
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Want to see more?{" "}
            <Link
              href="#contact"
              className="font-semibold transition-colors duration-150"
              style={{ color: "var(--color-emerald)" }}
            >
              Get in touch →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
