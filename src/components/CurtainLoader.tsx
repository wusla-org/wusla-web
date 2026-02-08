"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CurtainLoader() {
    const [isVisible, setIsVisible] = useState(true);

    const pathname = usePathname();

    useEffect(() => {
        const handleStart = () => {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        };

        window.addEventListener("route-transition-start", handleStart);

        // Initial load logic
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
        }, 2500);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("route-transition-start", handleStart);
            document.body.style.overflow = "";
        };
    }, []);

    // Effect to handle route changes (Success state)
    useEffect(() => {
        // When pathname changes (navigation complete):
        // 1. Reset scroll to top immediately
        window.scrollTo(0, 0);

        // 2. Hide loader after a short delay (smooth reveal)
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-text-primary"
                >
                    {/* Content Container */}
                    <div className="relative overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                            className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter"
                        >
                            WUSLA
                        </motion.h1>
                    </div>

                    {/* Optional: Simple tagline or loading indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute bottom-12 font-mono text-sm uppercase tracking-widest text-white/50"
                    >
                        Create the Unexpected
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
