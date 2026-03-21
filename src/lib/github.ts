export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  visibility: string;
}

/**
 * Fetch all public repos from the wusla-org GitHub organisation.
 * Uses ISR with 1-hour revalidation.
 * Set GITHUB_TOKEN in .env.local to avoid rate limiting.
 */
export async function getWUSLARepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/orgs/wusla-org/repos?type=public&sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status}`);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => r.name !== ".github");
  } catch (err) {
    console.error("Failed to fetch GitHub repos:", err);
    return [];
  }
}
