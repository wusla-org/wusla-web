"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Supabase", "Vercel",
  "Figma", "Firebase", "React Native", "Stripe",
  "Redis", "GraphQL", "Docker", "AWS",
];

export default function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-10 border-y border-white/8 bg-surface overflow-hidden">
      <div className="flex items-center gap-8 mb-6 container-custom">
        <span className="font-mono text-xs text-text-secondary uppercase tracking-widest flex-shrink-0">
          Technologies We Use
        </span>
        <div className="flex-1 h-px bg-white/8" />
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max"
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-2.5 border border-white/8 text-white/50 text-sm font-mono hover:text-white hover:border-brand-accent/30 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
