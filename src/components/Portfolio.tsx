"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Aether",
        category: "Productivity App",
        description: "Offline-first AI notes & tasks app. Privacy-focused architecture with on-device intelligence.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        href: "/aether"
    },
    {
        title: "FoodHub",
        category: "Marketplace",
        description: "Hyper-local food delivery platform serving 50k+ users with real-time tracking.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
        href: "#"
    },
    {
        title: "TaskMaster",
        category: "SaaS Platform",
        description: "Enterprise project management suite for remote teams. Electron-based desktop client.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        href: "#"
    },
    {
        title: "MediCare",
        category: "HealthTech",
        description: "HIPAA-compliant hospital management system deployed across 3 major institutions.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
        href: "#"
    }
];

export default function Portfolio() {
    return (
        <section id="work" className="py-32">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h2>
                        <p className="text-secondary text-lg max-w-xl">
                            A collection of projects that define our commitment to quality and innovation.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="group flex items-center gap-2 text-white font-medium border-b border-white/20 pb-1 hover:border-white transition-colors"
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-surface-hover">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-xs font-mono text-tertiary uppercase tracking-wider mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary leading-relaxed max-w-sm">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
