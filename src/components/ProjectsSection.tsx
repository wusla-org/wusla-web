import Link from "next/link";
import { getWUSLARepos, GitHubRepo } from "@/lib/github";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default async function ProjectsSection() {
  let repos: GitHubRepo[] = [];
  try {
    const all = await getWUSLARepos();
    repos = all.slice(0, 3);
  } catch {
    // Silent fail — show fallback
  }

  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <p className="label-caps" style={{ marginBottom: "48px" }}>
          03 / OPEN SOURCE
        </p>

        <h2 className="headline-section" style={{ marginBottom: "64px" }}>
          What we<br />are building.
        </h2>

        <div>
          {repos.length === 0 ? (
            <div className="row-item">
              <p className="body-text">
                Public repositories from{" "}
                <a
                  href="https://github.com/wusla-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-primary)" }}
                >
                  github.com/wusla-org
                </a>
              </p>
            </div>
          ) : (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="row-item"
                style={{ display: "block" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]" style={{ gap: "24px", alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "8px", flexWrap: "wrap" }}>
                      <p style={{ fontSize: "18px", fontWeight: 500, color: "var(--text-primary)" }}>
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
                    <p className="label-caps" style={{ fontSize: "11px" }}>
                      Updated {formatDate(repo.updated_at)}
                    </p>
                  </div>
                  <p className="label-caps hidden md:block" style={{ whiteSpace: "nowrap" }}>
                    ↗ GITHUB
                  </p>
                </div>
              </a>
            ))
          )}
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link href="/projects" className="btn-ghost">
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
