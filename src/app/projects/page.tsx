"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchRepositories, Repository } from "@/utils/github";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    fetchRepositories().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main
        className="min-h-[100dvh] pb-32"
        style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
      >
        <div className="container-custom pt-40 md:pt-52">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="mb-16 md:mb-24"
          >
            <div className="section-label">Open Source</div>
            <h1
              className="font-display font-bold tracking-tight leading-[1.0] mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--color-text)" }}
            >
              All<br />
              <span style={{ color: "var(--color-emerald)" }}>Projects</span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--color-text-muted)" }}
            >
              Open source contributions, experiments, and production-ready codebases
              from the WUSLA team.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-56 rounded-[14px] animate-pulse"
                  style={{ backgroundColor: "var(--color-bg-card)" }}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: EASE_OUT }}
                  className="group relative flex flex-col rounded-[14px] overflow-hidden transition-colors duration-200"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-bg-card)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")}
                >
                  <div className="p-7 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-5">
                      {repo.language && (
                        <span
                          className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "var(--color-emerald-dim)",
                            color: "var(--color-emerald)",
                            border: "1px solid rgba(0,208,132,0.2)",
                          }}
                        >
                          {repo.language}
                        </span>
                      )}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center ml-auto"
                        style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                        aria-hidden
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h2
                      className="font-display font-bold mb-3 leading-tight transition-colors duration-150"
                      style={{ fontSize: "1.3rem", color: "var(--color-text)" }}
                    >
                      {repo.name}
                    </h2>

                    <p
                      className="text-sm leading-relaxed mb-auto line-clamp-3"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {repo.description ?? "No description provided."}
                    </p>

                    <div
                      className="flex items-center gap-5 pt-5 mt-5 text-xs"
                      style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5" style={{ color: "var(--color-emerald)" }} aria-hidden />
                        {repo.stargazers_count}
                      </span>
                      <span>
                        Updated {new Date(repo.updated_at).toLocaleDateString("en-IN", { year: "numeric", month: "short" })}
                      </span>
                    </div>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label={`View ${repo.name} on GitHub`}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
