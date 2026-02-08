export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
}

const GITHUB_USERNAME = "wusla-org";

export async function fetchRepositories(): Promise<Repository[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=6`);
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        return data.filter((repo: Repository) => repo.name !== ".github");
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}
