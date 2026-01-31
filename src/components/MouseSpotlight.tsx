"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            containerRef.current.style.setProperty("--x", `${clientX}px`);
            containerRef.current.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at var(--x) var(--y), rgba(0, 128, 128, 0.15), transparent 40%)`
            }}
        />
    );
}
