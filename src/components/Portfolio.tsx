"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(600px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg)`;
  }

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}

const projects = [
  {
    id: "01",
    name: "FinTrack Pro",
    category: "B2B SaaS",
    description: "Financial analytics platform with real-time dashboards, automated reporting, and multi-account management for growing businesses.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Recharts"],
    outcome: "$2M+ processed monthly",
    gradient: "from-emerald-950/60 to-transparent",
    featured: true,
  },
  {
    id: "02",
    name: "MedConnect",
    category: "Healthcare",
    description: "HIPAA-compliant patient portal with telemedicine integration, secure records management, and appointment scheduling.",
    stack: ["React", "Supabase", "WebRTC", "Twilio"],
    outcome: "60% reduction in admin time",
    gradient: "from-teal-950/60 to-transparent",
    featured: true,
  },
  {
    id: "03",
    name: "StyleHive",
    category: "E-Commerce",
    description: "High-performance fashion marketplace with AI product recommendations and seamless checkout.",
    stack: ["Next.js", "Shopify API", "Algolia"],
    outcome: "12k+ products listed",
    gradient: "from-violet-950/60 to-transparent",
    featured: false,
  },
  {
    id: "04",
    name: "BuildCore",
    category: "Construction SaaS",
    description: "Project management platform for contractors — scheduling, budgeting, and client communication in one place.",
    stack: ["React", "Node.js", "PostgreSQL"],
    outcome: "200+ contractors onboarded",
    gradient: "from-amber-950/60 to-transparent",
    featured: false,
  },
  {
    id: "05",
    name: "EduFlow",
    category: "EdTech",
    description: "Interactive learning platform with live classes, progress tracking, and certification for online educators.",
    stack: ["Next.js", "Firebase", "Stripe", "Zoom API"],
    outcome: "5k+ active learners",
    gradient: "from-indigo-950/60 to-transparent",
    featured: false,
  },
  {
    id: "06",
    name: "LogistIQ",
    category: "Supply Chain",
    description: "End-to-end logistics visibility platform with real-time tracking and predictive analytics for enterprise fleets.",
    stack: ["React", "Node.js", "Redis", "Google Maps"],
    outcome: "50+ enterprise clients",
    gradient: "from-cyan-950/60 to-transparent",
    featured: false,
  },
];

function FeaturedCard({ project }: { project: typeof projects[0] }) {
  const tilt = useTilt(8);
  return (
    <div ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} style={{ transition: "transform 0.15s ease" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="group relative bg-surface border border-white/8 overflow-hidden hover:border-brand-accent/30 transition-colors duration-500"
    >
      {/* Left emerald accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[350ms] ease-out" />

      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

      {/* Large bg project number */}
      <span className="absolute right-4 bottom-2 font-display font-bold text-[8rem] text-white/[0.035] leading-none pointer-events-none select-none">
        {project.id}
      </span>

      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[380px]">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">{project.category}</span>
            <span className="font-mono text-xs text-white/20">[{project.id}]</span>
          </div>

          <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 group-hover:text-brand-accent transition-colors duration-300">
            {project.name}
          </h3>

          <p className="text-text-secondary leading-relaxed mb-6 max-w-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1 border border-white/10 text-white/50 text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/8 pt-6">
          <span className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-bold text-xs font-mono px-3 py-1.5">
            {project.outcome}
          </span>
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

function RegularCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const tilt = useTilt(8);
  return (
    <div ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} style={{ transition: "transform 0.15s ease" }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-surface border border-white/8 overflow-hidden hover:border-brand-accent/30 transition-colors duration-500"
    >
      {/* Left emerald accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[350ms] ease-out" />

      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

      {/* Large bg project number */}
      <span className="absolute right-3 bottom-1 font-display font-bold text-[5.5rem] text-white/[0.035] leading-none pointer-events-none select-none">
        {project.id}
      </span>

      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">{project.category}</span>
            <span className="font-mono text-xs text-white/20">[{project.id}]</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="border-t border-white/8 pt-4 mt-4 flex items-center justify-between">
          <span className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-mono px-2.5 py-1">
            {project.outcome}
          </span>
          <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default function Portfolio() {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">02</span>
          <div className="flex-1 h-px bg-white/8" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Our Work</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-white text-5xl md:text-7xl tracking-tighter leading-tight mb-4">
            Selected <span className="text-stroke-accent">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Platforms and products we have shipped for clients across industries.
          </p>
        </div>

        {/* Featured grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* Regular grid — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {regular.map((project, i) => (
            <RegularCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-white/50 text-sm font-mono uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
