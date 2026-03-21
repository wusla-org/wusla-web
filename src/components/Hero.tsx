"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ROTATING_WORDS = ["startups", "scaleups", "enterprises", "visionaries"];

const SHOWCASE_PROJECTS = [
  {
    name: "FinTrack Pro",
    category: "B2B · SaaS · FinTech",
    metrics: [
      { value: "$2M+",  label: "Monthly" },
      { value: "12k",   label: "Trans/day" },
      { value: "99.9%", label: "Uptime" },
    ],
    stack: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    accentFrom: "#00875A",
    accentTo: "#00B37A",
  },
  {
    name: "MedConnect",
    category: "Healthcare · B2B · HIPAA",
    metrics: [
      { value: "60%",  label: "Time saved" },
      { value: "4k+",  label: "Patients" },
      { value: "5★",   label: "Rating" },
    ],
    stack: ["React", "Node.js", "Supabase", "Twilio"],
    accentFrom: "#3B82F6",
    accentTo: "#60A5FA",
  },
  {
    name: "StyleHive",
    category: "E-Commerce · D2C · Retail",
    metrics: [
      { value: "340%",  label: "Conversion" },
      { value: "15k+",  label: "Products" },
      { value: "$1.2M", label: "Q1 Revenue" },
    ],
    stack: ["Next.js", "Shopify", "Algolia", "Vercel"],
    accentFrom: "#F59E0B",
    accentTo: "#FCD34D",
  },
];

const STATS = [
  { v: "50+",  l: "Projects" },
  { v: "30+",  l: "Clients"  },
  { v: "4.9★", l: "Rating"   },
  { v: "100%", l: "On-Time"  },
];

const STRIP = [
  "Web Apps", "·", "Mobile Apps", "·", "SaaS Platforms", "·",
  "E-Commerce", "·", "Custom APIs", "·", "AI Integration", "·",
  "DevOps", "·", "UI/UX Design", "·",
];
const MARQUEE_ITEMS = [...STRIP, ...STRIP];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [wordIdx, setWordIdx]         = useState(0);
  const [projectIdx, setProjectIdx]   = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const rectCache  = useRef({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    function cache() {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      rectCache.current = { left: r.left, top: r.top, width: r.width, height: r.height };
    }
    cache();
    const ro = new ResizeObserver(cache);
    if (sectionRef.current) ro.observe(sectionRef.current);
    window.addEventListener("scroll", cache, { passive: true });
    return () => { ro.disconnect(); window.removeEventListener("scroll", cache); };
  }, []);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spX  = useSpring(rawX, { stiffness: 35, damping: 28 });
  const spY  = useSpring(rawY, { stiffness: 35, damping: 28 });
  const cardX = useTransform(spX, [-600, 600], [-14, 14]);
  const cardY = useTransform(spY, [-400, 400], [-8,  8]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = rectCache.current;
    rawX.set(e.clientX - left - width  / 2);
    rawY.set(e.clientY - top  - height / 2);
  }, [rawX, rawY]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t1 = setInterval(() => setWordIdx(i    => (i + 1) % ROTATING_WORDS.length),          2400);
    const t2 = setInterval(() => setProjectIdx(i => (i + 1) % SHOWCASE_PROJECTS.length),       4000);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, [prefersReducedMotion]);

  const project = SHOWCASE_PROJECTS[projectIdx];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background flex flex-col"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background: strong gradient atmosphere ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 10% 15%, rgba(0,135,90,0.22) 0%, transparent 65%), " +
            "radial-gradient(ellipse 45% 40% at 85% 80%, rgba(0,60,100,0.14) 0%, transparent 60%)",
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 flex-1 flex flex-col">

        {/* Push content below fixed navbar */}
        <div className="flex-1 flex items-center pt-24 pb-10">
          <div className="container-custom w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center">

              {/* ══════════ LEFT ══════════ */}
              <div>
                {/* Label */}
                <motion.div
                  className="inline-flex items-center gap-2.5 mb-8 px-3 py-1.5 border border-white/10 rounded-full"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent" />
                  </span>
                  <span className="font-mono text-[11px] text-white/50 tracking-widest uppercase">
                    Software Studio · Open for Projects
                  </span>
                </motion.div>

                {/* Headline */}
                <h1 aria-label={`We craft software built for ${ROTATING_WORDS[wordIdx]} that actually ships.`}>
                  <div className="overflow-hidden mb-1">
                    <motion.span
                      className="block font-display font-extrabold text-white leading-[1.0] tracking-[-0.03em]"
                      style={{ fontSize: "clamp(3rem, 6.5vw, 6.5rem)" }}
                      initial={prefersReducedMotion ? {} : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
                    >
                      We craft software
                    </motion.span>
                  </div>
                  <div className="overflow-hidden mb-1">
                    <motion.span
                      className="flex items-baseline gap-[0.2em] flex-wrap font-display font-extrabold leading-[1.0] tracking-[-0.03em]"
                      style={{ fontSize: "clamp(3rem, 6.5vw, 6.5rem)" }}
                      initial={prefersReducedMotion ? {} : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
                    >
                      <span className="text-white">built for</span>
                      <span
                        className="relative overflow-hidden inline-flex text-brand-accent"
                        style={{ minWidth: "13ch" }}
                        aria-live="polite"
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={wordIdx}
                            className="block"
                            initial={prefersReducedMotion ? {} : { y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={prefersReducedMotion ? {} : { y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE }}
                          >
                            {ROTATING_WORDS[wordIdx]}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                    </motion.span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span
                      className="block font-display font-extrabold text-white/25 leading-[1.0] tracking-[-0.03em]"
                      style={{ fontSize: "clamp(3rem, 6.5vw, 6.5rem)" }}
                      initial={prefersReducedMotion ? {} : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
                    >
                      that actually ships.
                    </motion.span>
                  </div>
                </h1>

                {/* Rule */}
                <motion.div
                  className="w-16 h-px bg-brand-accent/60 my-8"
                  initial={prefersReducedMotion ? {} : { scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
                  aria-hidden="true"
                />

                {/* Description */}
                <motion.p
                  className="text-white/65 text-base md:text-lg leading-relaxed max-w-[400px] mb-9"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.44 }}
                >
                  From first commit to production — we build web apps, platforms,
                  and digital products for teams that ship fast and scale further.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="flex flex-wrap items-center gap-3 mb-10"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.52 }}
                >
                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-brand-accent text-white font-semibold text-sm rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(0,135,90,0.5)]"
                  >
                    <span className="relative z-10">Get a Free Quote</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {/* Hover fill */}
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" aria-hidden="true" />
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-[1]" aria-hidden="true" />
                    <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                      {/* invisible duplicate for color swap — handled via CSS below */}
                    </span>
                  </Link>
                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white/70 font-medium text-sm rounded-md hover:border-white/35 hover:text-white transition-all duration-200"
                  >
                    See Our Work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="flex items-center"
                  initial={prefersReducedMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.62 }}
                >
                  {STATS.map((s, i) => (
                    <div key={s.l} className="flex items-center">
                      {i > 0 && (
                        <div className="w-px h-7 bg-white/12 mx-5" aria-hidden="true" />
                      )}
                      <div>
                        <p className="font-display font-bold text-white text-2xl leading-none mb-1">{s.v}</p>
                        <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest">{s.l}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ══════════ RIGHT — showcase card ══════════ */}
              <div className="hidden lg:flex flex-col gap-3" aria-label="Project showcase">

                {/* Main project card — entrance + parallax via nested wrappers */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: 40, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.85, ease: EASE, delay: 0.35 }}
                >
                  <motion.div style={{ x: cardX, y: cardY }}>
                    <div className="rounded-xl overflow-hidden border border-white/[0.09] shadow-[0_32px_80px_rgba(0,0,0,0.7)] bg-[#131313]">

                      {/* Colored accent bar */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={projectIdx + "-bar"}
                          className="h-[3px]"
                          style={{ background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})`, transformOrigin: "left" }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, ease: EASE }}
                        />
                      </AnimatePresence>

                      {/* Card header */}
                      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={projectIdx + "-header"}
                            initial={prefersReducedMotion ? {} : { opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={prefersReducedMotion ? {} : { opacity: 0, y: -4 }}
                            transition={{ duration: 0.3, ease: EASE }}
                          >
                            <p className="font-display font-bold text-white text-lg leading-none">{project.name}</p>
                            <p className="font-mono text-[11px] text-white/35 mt-1">{project.category}</p>
                          </motion.div>
                        </AnimatePresence>
                        <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest" style={{ color: project.accentFrom }}>
                          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: project.accentFrom }} />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: project.accentFrom }} />
                          </span>
                          LIVE
                        </span>
                      </div>

                      {/* Metrics grid */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={projectIdx + "-metrics"}
                          className="grid grid-cols-3 divide-x divide-white/[0.07]"
                          initial={prefersReducedMotion ? {} : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={prefersReducedMotion ? {} : { opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
                        >
                          {project.metrics.map((m) => (
                            <div key={m.label} className="px-5 py-5 text-center">
                              <p className="font-display font-bold text-white text-2xl leading-none mb-1.5">{m.value}</p>
                              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest">{m.label}</p>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>

                      {/* Divider */}
                      <div className="border-t border-white/[0.07]" aria-hidden="true" />

                      {/* Stack tags */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={projectIdx + "-stack"}
                          className="px-5 py-4 flex items-center gap-2 flex-wrap"
                          initial={prefersReducedMotion ? {} : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={prefersReducedMotion ? {} : { opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE, delay: 0.1 }}
                        >
                          {project.stack.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] font-mono text-[11px] text-white/50 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Availability strip */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.85, ease: EASE, delay: 0.5 }}
                >
                  <motion.div style={{ x: cardX, y: cardY }}>
                    <Link
                      href="#contact"
                      className="group flex items-center justify-between px-5 py-4 rounded-xl border border-brand-accent/25 bg-brand-accent/[0.07] hover:bg-brand-accent/[0.12] hover:border-brand-accent/40 transition-all duration-200 shadow-[0_8px_32px_rgba(0,135,90,0.1)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-brand-accent" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm leading-none mb-1">Ready to start your project?</p>
                          <p className="font-mono text-[11px] text-white/40">Free consult · 24hr response</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Services marquee ── */}
        <motion.div
          className="border-t border-white/8 py-4 overflow-hidden"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.div
            className="flex gap-7 items-center whitespace-nowrap w-max"
            animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {MARQUEE_ITEMS.map((item, i) => (
              <span
                key={i}
                className={`font-mono text-xs uppercase tracking-widest flex-shrink-0 ${
                  item === "·" ? "text-brand-accent/50" : "text-white/25"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
