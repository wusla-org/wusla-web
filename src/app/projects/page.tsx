"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, GitFork, Code } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchRepositories, Repository } from "@/utils/github";

export default function ProjectsPage() {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRepos = async () => {
            const data = await fetchRepositories();
            // Fetch ALL repos (or at least more than the homepage)
            setRepos(data);
            setLoading(false);
        };
        loadRepos();
    }, []);

    return (
        <main className="min-h-screen bg-background text-text-primary selection:bg-brand-accent selection:text-white pb-32">
            <Navbar />

            <div className="container-custom pt-40 md:pt-60">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-32"
                >
                    <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter mb-8">
                        All <span className="text-brand-accent">Projects</span>
                    </h1>
                    <p className="text-secondary text-xl md:text-2xl max-w-2xl leading-relaxed">
                        A complete archive of our open source contributions, experiments, and production-ready codebases.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-96 rounded-[32px] bg-white/5 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {repos.map((repo, i) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative h-[400px] bg-surface rounded-[32px] border border-white/5 overflow-hidden hover:border-brand-accent/50 transition-colors duration-500 flex flex-col"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

                                <div className="relative p-8 flex flex-col h-full z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-accent border border-white/10">{repo.language || "Code"}</span>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                                        {repo.name}
                                    </h3>

                                    <p className="text-secondary text-base leading-relaxed line-clamp-3 mb-auto">
                                        {repo.description || "No description provided."}
                                    </p>

                                    <div className="flex items-center gap-6 pt-6 border-t border-white/10 mt-6 text-sm text-white/50">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-brand-accent" />
                                            <span>{repo.stargazers_count}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`View ${repo.name}`} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
