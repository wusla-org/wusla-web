"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
}

const FILTERS = ["ALL", "TYPESCRIPT", "JAVASCRIPT", "PYTHON", "WEB"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function RepoRow({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="row-item"
      style={{ display: "block" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_100px]" style={{ gap: "24px", alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "8px", flexWrap: "wrap" }}>
            <p style={{ fontSize: "22px", fontWeight: 500, color: "var(--text-primary)" }}>
              {repo.name}
            </p>
            {repo.language && (
              <p className="label-caps">{repo.language}</p>
            )}
          </div>
          {repo.description && (
            <p className="body-text" style={{ fontSize: "14px", marginBottom: "8px" }}>
              {repo.description}
            </p>
          )}
          {repo.topics.length > 0 && (
            <p className="label-caps" style={{ marginBottom: "6px", fontSize: "10px" }}>
              {repo.topics.join(", ")}
            </p>
          )}
          <p className="label-caps" style={{ fontSize: "11px" }}>
            Updated {formatDate(repo.updated_at)}
          </p>
        </div>
        <p className="label-caps hidden md:block" style={{ textAlign: "right" }}>
          ↗ GITHUB
        </p>
      </div>
    </a>
  );
}

function SkeletonRow() {
  return (
    <div style={{ padding: "32px 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ height: "20px", width: "40%", marginBottom: "12px", backgroundColor: "var(--bg-border)", animation: "page-fade 1s ease infinite alternate" }} />
      <div style={{ height: "14px", width: "65%", marginBottom: "8px", backgroundColor: "var(--bg-border)", animation: "page-fade 1s ease infinite alternate" }} />
      <div style={{ height: "12px", width: "25%", backgroundColor: "var(--bg-border)", animation: "page-fade 1s ease infinite alternate" }} />
    </div>
  );
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    fetch("https://api.github.com/orgs/wusla-org/repos?type=public&sort=updated&per_page=100", {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then((data: GitHubRepo[]) => {
        setRepos(data.filter((r) => r.name !== ".github"));
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const filtered = useMemo(() => {
    return repos.filter((repo) => {
      const matchesFilter =
        activeFilter === "ALL" ||
        repo.language?.toUpperCase() === activeFilter ||
        (activeFilter === "WEB" && repo.topics.some((t) => ["web", "nextjs", "react", "html"].includes(t.toLowerCase())));

      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        repo.name.toLowerCase().includes(q) ||
        repo.description?.toLowerCase().includes(q) ||
        repo.language?.toLowerCase().includes(q) ||
        repo.topics.some((t) => t.toLowerCase().includes(q));

      return matchesFilter && matchesQuery;
    });
  }, [repos, query, activeFilter]);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          className="section-pad"
          style={{
            backgroundColor: "var(--bg)",
            paddingTop: "calc(var(--nav-height) + 80px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="w-container">
            <p className="label-caps" style={{ marginBottom: "32px" }}>
              <span style={{ color: "var(--accent)" }}>WUSLA</span>
              <span style={{ color: "var(--text-tertiary)" }}>{" — OPEN SOURCE"}</span>
            </p>
            <h1 className="headline-hero" style={{ marginBottom: "24px" }}>
              What we<br />are building.
            </h1>
            <p className="body-text" style={{ maxWidth: "480px" }}>
              Public repositories from the WUSLA org on GitHub.
            </p>
          </div>
        </section>

        {/* Search + filter */}
        <section
          style={{
            backgroundColor: "var(--bg-subtle)",
            borderBottom: "1px solid var(--border)",
            padding: "32px 0",
          }}
        >
          <div className="w-container">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]" style={{ gap: "32px", alignItems: "end" }}>
              <div>
                <label className="label-v4">Search</label>
                <input
                  type="text"
                  className="input-v4"
                  placeholder="SEARCH PROJECTS"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingBottom: "14px" }}>
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="label-caps"
                    style={{
                      background: "none",
                      border: "none",
                      borderBottom: activeFilter === f ? "1px solid var(--text-primary)" : "1px solid transparent",
                      cursor: "pointer",
                      color: activeFilter === f ? "var(--text-primary)" : "var(--text-tertiary)",
                      paddingBottom: "2px",
                      transition: "color 150ms ease, border-color 150ms ease",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Repo list */}
        <section style={{ backgroundColor: "var(--bg)", padding: "0 0 80px" }}>
          <div className="w-container" style={{ paddingTop: "0" }}>
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
            ) : error ? (
              <div style={{ padding: "48px 0", borderTop: "1px solid var(--border)" }}>
                <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "16px" }}>
                  Could not load projects.
                </p>
                <a
                  href="https://github.com/wusla-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text"
                  style={{ color: "var(--text-secondary)" }}
                >
                  View them directly at github.com/wusla-org →
                </a>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ padding: "48px 0", borderTop: "1px solid var(--border)" }}>
                <p
                  className="headline-section"
                  style={{ color: "var(--text-tertiary)", fontStyle: "italic", fontSize: "clamp(20px,3vw,40px)" }}
                >
                  No projects found for &ldquo;{query}&rdquo;
                </p>
              </div>
            ) : (
              <>
                {filtered.map((repo) => <RepoRow key={repo.id} repo={repo} />)}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "0" }}>
                  <p className="label-caps">
                    {filtered.length} {filtered.length === 1 ? "REPOSITORY" : "REPOSITORIES"}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
