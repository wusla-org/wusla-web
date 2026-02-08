"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Parallax from "./Parallax";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">

            {/* Cleaner Horizon Glow Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Main center glow - Horizon style */}
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-brand-accent/30 rounded-[100%] blur-[150px] mix-blend-screen opacity-60"></div>
                {/* Subtle top ambient */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-zinc-800 rounded-full blur-[200px] opacity-40"></div>
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                {/* Animated Badge - Simplified */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80 tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                        Available for New Projects
                    </span>
                </motion.div>

                {/* Main Title - Stacked & Imposing */}
                <Parallax offset={-30} className="w-full max-w-7xl mx-auto mb-16">
                    <div className="relative flex flex-col items-center justify-center font-display font-bold tracking-tighter leading-[0.9] text-white">

                        {/* Top Line */}
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                            className="text-[clamp(4rem,11vw,12rem)] z-10"
                        >
                            WE BUILD
                        </motion.h1>

                        {/* Middle Line + Accent */}
                        <div className="relative z-0">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                                className="text-[clamp(4rem,11vw,12rem)] text-transparent text-stroke-accent relative z-10" // Outline style for depth
                            >
                                DIGITAL
                            </motion.h1>

                            {/* Handwriting - "Signature" style placement */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-hand text-brand-accent text-[clamp(3rem,8vw,9rem)] z-0 mix-blend-overlay opacity-60 pointer-events-none whitespace-nowrap"
                            >
                                digital futures
                            </motion.div>
                        </div>

                        {/* Bottom Line */}
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                            className="text-[clamp(4rem,11vw,12rem)] z-10"
                        >
                            FUTURES
                        </motion.h1>
                    </div>
                </Parallax>

                {/* CTA Buttons - Simplified & Premium */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link
                        href="#contact"
                        className="group relative flex items-center gap-3 px-10 py-5 bg-brand-accent text-white font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_10px_40px_-10px_rgba(0,111,74,0.5)]"
                    >
                        <span>START A PROJECT</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="#work"
                        className="group flex items-center gap-2 text-white/60 font-medium hover:text-white transition-colors uppercase tracking-widest text-sm"
                    >
                        <span className="border-b border-transparent group-hover:border-white pb-1 transition-all">View Work</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
