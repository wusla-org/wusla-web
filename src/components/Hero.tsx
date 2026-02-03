"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Parallax Effect
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
    };

    // Staggered Text Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50, rotateX: -45 },
        show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const title1 = "BUILD THE";
    const title2 = "IMPOSSIBLE";

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background with Parallax */}
            <div className="absolute inset-0 z-0 bg-background">
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008080]/15 via-transparent to-transparent opacity-60"
                    animate={{ x: mousePosition.x * -20, y: mousePosition.y * -20 }}
                    transition={{ type: "tween", ease: "linear", duration: 0.2 }}
                ></motion.div>

                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#008080]/10 rounded-full blur-[100px]"
                    animate={{ x: mousePosition.x * -50, y: mousePosition.y * -50, scale: [1, 1.1, 1] }}
                    transition={{ x: { type: "spring", damping: 50 }, scale: { duration: 5, repeat: Infinity } }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
                    animate={{ x: mousePosition.x * 30, y: mousePosition.y * 30 }}
                    transition={{ type: "spring", damping: 50 }}
                />
            </div>

            <div className="container-custom relative z-10 text-center px-4 perspective-1000">
                <div className="flex flex-col items-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#008080]/30 bg-[#008080]/5 text-xs font-medium text-[#008080] backdrop-blur-sm hover:bg-[#008080]/10 transition-colors cursor-default shadow-[0_0_15px_rgba(0,128,128,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008080] animate-pulse"></span>
                            Accepting New Projects for Q2 2026
                        </span>
                    </motion.div>

                    {/* Main Title with Cinematic Reveal */}
                    <motion.div
                        style={{ rotateX: mousePosition.y * 5, rotateY: mousePosition.x * -5 }}
                        className="mb-8"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] flex flex-col items-center">
                            {/* First Line */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="flex gap-4 overflow-hidden"
                            >
                                {title1.split(" ").map((word, i) => (
                                    <span key={i} className="flex text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                                        {word.split("").map((char, j) => (
                                            <motion.span key={j} variants={item}>{char}</motion.span>
                                        ))}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Second Line */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="relative block text-white mt-[-0.1em]"
                            >
                                <div className="flex gap-1">
                                    {title2.split("").map((char, i) => (
                                        <motion.span key={i} variants={item} className="inline-block">
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                                {/* Decorative line */}
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }}
                                    className="absolute -bottom-2 left-0 h-1 bg-[#008080] rounded-full shadow-[0_0_20px_#008080]"
                                ></motion.span>
                            </motion.div>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed font-light"
                    >
                        We engineer <span className="text-white font-medium">digital dominance</span>.
                        Creating high-performance ecosystems defined by <span className="text-[#008080] font-medium">radical minimalism</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-[#008080] text-white font-bold text-lg rounded-full overflow-hidden w-full sm:w-auto hover:shadow-[0_0_30px_rgba(0,128,128,0.4)] transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Start Project
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        </Link>

                        <Link
                            href="#work"
                            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/5 hover:border-[#008080] hover:text-[#008080] transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            View Showreel
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary text-xs"
            >
                <span>SCROLL</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-[#008080]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
