"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  videoUrl?: string;
  featured: boolean;
  completedDate: string;
  client: string;
  testimonial: string;
  status?: string;
  scope?: string;
}

interface PortfolioData {
  projects: Project[];
  categories: string[];
  capabilities: {
    totalTechnologies: string;
    focusAreas: string;
    approachType: string;
    clientBase: string;
  };
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const categoryIcon: Record<string, string> = {
  "Mobile Development": "📱",
  "Cloud Solutions": "☁️",
  "AI Integration": "🤖",
};

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [selected, setSelected] = useState("All");
  const [filtered, setFiltered] = useState<Project[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((r) => r.json())
      .then((data: PortfolioData) => {
        setPortfolioData(data);
        setFiltered(data.projects);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!portfolioData) return;
    setFiltered(
      selected === "All"
        ? portfolioData.projects
        : portfolioData.projects.filter((p) => p.category === selected)
    );
  }, [selected, portfolioData]);

  return (
    <>
      <Navbar />
      <main
        className="min-h-[100dvh]"
        style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
      >
        {/* Header */}
        <section className="pt-36 pb-20">
          <div className="container-custom">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
            >
              <div className="section-label">Our Work</div>
              <h1
                className="font-display font-bold tracking-tight leading-[1.0] mb-6"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--color-text)" }}
              >
                Selected<br />
                <span style={{ color: "var(--color-emerald)" }}>Projects</span>
              </h1>
              <p
                className="text-lg leading-relaxed max-w-xl"
                style={{ color: "var(--color-text-muted)" }}
              >
                A cross-section of what we&apos;ve shipped — across mobile, web, cloud, and AI.
              </p>
            </motion.div>

            {/* Capabilities */}
            {portfolioData && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-[14px] overflow-hidden"
                style={{ border: "1px solid var(--color-border)" }}
              >
                {[
                  { value: portfolioData.capabilities.totalTechnologies, label: "Technologies" },
                  { value: portfolioData.capabilities.focusAreas, label: "Focus Areas" },
                  { value: portfolioData.capabilities.approachType, label: "Approach" },
                  { value: portfolioData.capabilities.clientBase, label: "Client Range" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex flex-col justify-center px-6 py-6"
                    style={{
                      backgroundColor: "var(--color-bg-card)",
                      borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <p
                      className="font-display font-bold leading-none mb-1"
                      style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "var(--color-emerald)" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Category filter */}
        {portfolioData && (
          <section
            className="py-8 sticky top-16 z-30"
            style={{ backgroundColor: "rgba(7,12,16,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--color-border)" }}
          >
            <div className="container-custom">
              <div className="flex flex-wrap gap-3">
                {["All", ...portfolioData.categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelected(cat)}
                    className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: selected === cat ? "var(--color-emerald)" : "var(--color-bg-card)",
                      color: selected === cat ? "#000" : "var(--color-text-muted)",
                      border: "1px solid",
                      borderColor: selected === cat ? "var(--color-emerald)" : "var(--color-border)",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects */}
        <section className="py-20">
          <div className="container-custom">
            {!portfolioData ? (
              <div className="flex flex-col gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-64 rounded-[14px] animate-pulse"
                    style={{ backgroundColor: "var(--color-bg-card)" }}
                  />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <p className="text-center py-20" style={{ color: "var(--color-text-muted)" }}>
                No projects in this category.
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, delay: i * 0.07, ease: EASE_OUT }}
                    className="grid md:grid-cols-[1fr_auto] gap-8 rounded-[14px] p-8 md:p-10"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-bg-card)",
                    }}
                  >
                    <div>
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
                        {project.status && (
                          <span className="text-xs font-semibold" style={{ color: "var(--color-emerald)" }}>
                            {project.status}
                          </span>
                        )}
                      </div>

                      <h2
                        className="font-display font-bold mb-3 leading-tight"
                        style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--color-text)" }}
                      >
                        {project.title}
                      </h2>

                      <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
                        {project.description}
                      </p>

                      <div className="flex flex-col gap-1.5 text-xs mb-6" style={{ color: "var(--color-text-muted)" }}>
                        <span><span className="font-semibold">Client:</span> {project.client}</span>
                        {project.scope && <span><span className="font-semibold">Scope:</span> {project.scope}</span>}
                        <span>
                          <span className="font-semibold">Completed:</span>{" "}
                          {new Date(project.completedDate).toLocaleDateString("en-IN", { year: "numeric", month: "long" })}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-3 py-1.5 rounded-full"
                            style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold transition-opacity duration-150"
                            style={{ color: "var(--color-emerald)" }}
                          >
                            View Live ↗
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold transition-opacity duration-150"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            View Code ↗
                          </a>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold transition-opacity duration-150"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            Play Store ↗
                          </a>
                        )}
                      </div>

                      {project.testimonial && (
                        <blockquote
                          className="mt-6 text-sm leading-relaxed italic border-l-2 pl-4"
                          style={{ borderColor: "var(--color-emerald)", color: "var(--color-text-muted)" }}
                        >
                          &ldquo;{project.testimonial}&rdquo;
                        </blockquote>
                      )}
                    </div>

                    {/* Category icon */}
                    <div
                      className="hidden md:flex items-center justify-center w-28 h-28 rounded-2xl text-4xl shrink-0"
                      style={{ backgroundColor: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}
                      aria-hidden
                    >
                      {categoryIcon[project.category] ?? "💻"}
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: "var(--color-bg-elevated)" }}>
          <div className="container-custom text-center">
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-text)" }}
            >
              Want to be our next project?
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-semibold text-base px-8 py-4 rounded-lg btn-press"
              style={{
                backgroundColor: "var(--color-emerald)",
                color: "#000",
                transition: "background-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
              }}
            >
              Start a Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
