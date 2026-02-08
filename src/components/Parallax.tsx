"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
    direction?: "up" | "down";
}

export default function Parallax({ children, offset = 50, className = "", direction = "up" }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const start = direction === "up" ? offset : -offset;
    const end = direction === "up" ? -offset : offset;

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const physicsY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div ref={ref} className={`${className}`}>
            <motion.div style={{ y: physicsY }}>
                {children}
            </motion.div>
        </div>
    );
}
