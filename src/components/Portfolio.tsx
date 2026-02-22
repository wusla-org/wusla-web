"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
// import { fetchRepositories, Repository } from "@/utils/github";

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // State for scroll range
    const [scrollRange, setScrollRange] = useState(0);

    // Transform vertical scroll (0 to 1) into horizontal content movement (pixels)
    const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

    useEffect(() => {
        const updateScrollRange = () => {
            if (containerRef.current) {
                const scrollWidth = containerRef.current.scrollWidth;
                const clientWidth = window.innerWidth;
                setScrollRange(scrollWidth - clientWidth);
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(updateScrollRange, 100);
        window.addEventListener("resize", updateScrollRange);

        return () => {
            window.removeEventListener("resize", updateScrollRange);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative bg-background">
            {/* 
        Scroll Track: 400vh height
        The 'height' here determines how long the section remains pinned.
      */}
            <section ref={targetRef} id="work" className="relative h-[600vh]">

                {/* 
          Sticky Viewport
          MUST have `height: 100vh` and `top: 0` to work as a sticky container.
          We use `overflow-hidden` here to mask the horizontal content that is out of view.
        */}
                <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-background">

                    {/* Header Overlay (Static within the sticky view) */}
                    <div className="absolute top-8 left-4 md:left-12 z-20 pointer-events-none mix-blend-difference">
                        <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter">
                            Selected <span className="text-brand-accent">Work</span>
                        </h2>
                        <div className="flex items-center gap-2 text-white/50 font-medium mt-2">
                            <span>Scroll Down</span>
                            <div className="w-12 h-[1px] bg-white/20" />
                        </div>
                    </div>

                    {/* Horizontal Motion Track */}
                    <motion.div ref={containerRef} style={{ x }} className="flex gap-8 md:gap-16 pl-[5vw] items-center will-change-transform">

                        {/* Intro text spacer */}
                        <div className="w-[80vw] md:w-[600px] flex-shrink-0 flex flex-col justify-center px-8">
                            <p className="text-secondary text-2xl md:text-3xl leading-relaxed max-w-lg mt-32">
                                I don&apos;t just build websites. <br />
                                <span className="text-brand-accent">I build digital businesses.</span>
                            </p>
                        </div>

                        {/* Static Project 1: Export-Import */}
                        <div className="group relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[600px] flex-shrink-0 bg-surface rounded-[40px] border border-white/5 overflow-hidden hover:border-brand-accent/50 transition-colors duration-500 flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] group-hover:bg-brand-accent/20 transition-colors duration-500" />

                            <div className="relative h-full p-8 md:p-12 flex flex-col z-10">
                                <div className="flex justify-between items-start mb-auto">
                                    <span className="px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-full text-sm font-bold uppercase tracking-wider">
                                        In Development
                                    </span>
                                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 group-hover:text-brand-accent transition-colors break-words">
                                        Export-Import Platform
                                    </h3>
                                    <p className="text-secondary text-xl leading-relaxed line-clamp-4 group-hover:text-white/80 transition-colors mb-8">
                                        B2B website with product catalog, inquiry system, and mobile-responsive design for international trade.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-8 border-t border-white/10">
                                        {["Next.js", "Tailwind CSS", "WhatsApp API"].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Static Project 2: Portfolio Template */}
                        <div className="group relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[600px] flex-shrink-0 bg-surface rounded-[40px] border border-white/5 overflow-hidden hover:border-brand-accent/50 transition-colors duration-500 flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] group-hover:bg-brand-accent/20 transition-colors duration-500" />

                            <div className="relative h-full p-8 md:p-12 flex flex-col z-10">
                                <div className="flex justify-between items-start mb-auto">
                                    <span className="px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-bold uppercase tracking-wider">
                                        Live
                                    </span>
                                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 group-hover:text-brand-accent transition-colors break-words">
                                        Portfolio Template
                                    </h3>
                                    <p className="text-secondary text-xl leading-relaxed line-clamp-4 group-hover:text-white/80 transition-colors mb-8">
                                        Modern developer portfolio with dark mode, responsive design, and smooth animations.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-8 border-t border-white/10">
                                        {["Next.js 14", "Tailwind", "Framer Motion"].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Static Project 3: Business Landing Page */}
                        <div className="group relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[600px] flex-shrink-0 bg-surface rounded-[40px] border border-white/5 overflow-hidden hover:border-brand-accent/50 transition-colors duration-500 flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] group-hover:bg-brand-accent/20 transition-colors duration-500" />

                            <div className="relative h-full p-8 md:p-12 flex flex-col z-10">
                                <div className="flex justify-between items-start mb-auto">
                                    <span className="px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-bold uppercase tracking-wider">
                                        Live
                                    </span>
                                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 group-hover:text-brand-accent transition-colors break-words">
                                        Business Landing Page
                                    </h3>
                                    <p className="text-secondary text-xl leading-relaxed line-clamp-4 group-hover:text-white/80 transition-colors mb-8">
                                        High-converting landing page with modern UI, contact forms, and performance optimization.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-8 border-t border-white/10">
                                        {["Next.js", "SEO", "Optimization"].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* View All Folder Card */}
                        <TransitionLink
                            href="/projects"
                            className="group relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[400px] flex-shrink-0 flex items-center justify-center mr-[7.5vw] md:mr-[calc(50vw-200px)] perspective-1000"
                        >
                            <div className="relative w-64 h-48 md:w-80 md:h-60 transition-transform duration-500 group-hover:scale-105">
                                {/* Back Folder Plate */}
                                <div className="absolute inset-0 bg-white/10 rounded-tr-[100px] rounded-tl-lg rounded-bl-lg rounded-br-lg border border-white/5" />

                                {/* Paper Stack (Multiple items popping up) */}
                                <motion.div
                                    className="absolute inset-x-6 bottom-4 top-10 bg-white/80 rounded-t-lg shadow-lg z-0"
                                    initial={{ y: 0, scale: 0.95 }}
                                    whileHover={{ y: -60, rotate: -3 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                />
                                <motion.div
                                    className="absolute inset-x-4 bottom-4 top-8 bg-white/90 rounded-t-lg shadow-lg z-10 flex items-center justify-center"
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -50, rotate: 2 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <span className="font-display font-bold text-background text-2xl tracking-widest uppercase">
                                        All Projects
                                    </span>
                                </motion.div>

                                {/* Front Folder Flap */}
                                <motion.div
                                    className="absolute inset-0 bg-surface border border-white/10 rounded-tr-[100px] rounded-tl-lg rounded-bl-lg rounded-br-lg z-20 origin-bottom"
                                    style={{ transformStyle: "preserve-3d" }}
                                    initial={{ rotateX: 0 }}
                                    whileHover={{ rotateX: -25 }}
                                    transition={{ duration: 0.5, ease: "backOut" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors duration-300">
                                            <ArrowUpRight className="w-10 h-10 text-white group-hover:text-background" />
                                        </div>
                                    </div>
                                    {/* Folder Tab Detail */}
                                    <div className="absolute -top-3 left-0 w-1/3 h-4 bg-surface border-t border-l border-r border-white/10 rounded-t-lg" />
                                </motion.div>
                            </div>
                        </TransitionLink>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}
