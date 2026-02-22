"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Zap, GitBranch } from "lucide-react";

const technologies = [
    { name: "Next.js", icon: <Zap className="w-6 h-6" /> },
    { name: "React", icon: <Code2 className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Layout className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Supabase", icon: <Database className="w-6 h-6" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
];

export default function TechStack() {
    return (
        <section className="py-12 border-b border-white/5 bg-background">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-1">
                            Technologies I Work With
                        </h3>
                        <p className="text-secondary text-sm">
                            Modern, scalable, production-ready stack.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-brand-accent/50 transition-colors"
                            >
                                {tech.icon}
                                <span className="font-medium text-sm">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
