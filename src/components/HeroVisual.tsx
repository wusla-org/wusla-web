"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

const SPRING = { stiffness: 140, damping: 18, mass: 0.6 };
const bars = [42, 64, 38, 78, 56, 88, 70];

/**
 * Signature hero object: a layered, depth-offset composition of the products
 * WUSLA ships (a dashboard surface, a mobile app card, a deploy chip), tilting
 * with the cursor via spring physics. Static on touch / reduced-motion.
 */
export default function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  // Raw pointer offset (-0.5 .. 0.5), spring-smoothed.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, SPRING);
  const sy = useSpring(my, SPRING);

  const rotateY = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const transform = useMotionTemplate`perspective(1300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Only wire pointer tracking on fine pointers without reduced-motion.
  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setInteractive(fine);
    if (!fine) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => { mx.set(0); my.set(0); };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, mx, my]);

  return (
    <div ref={ref} className="relative w-full" style={{ perspective: "1300px" }}>
      {/* Ambient accent glow behind the stack */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          inset: "-12% -8% -8% -8%",
          background: "radial-gradient(60% 55% at 65% 35%, rgba(31,191,128,0.16), transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      <motion.div
        aria-hidden
        className="relative"
        style={{
          transform: interactive ? transform : "perspective(1300px) rotateX(2deg) rotateY(-8deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* ── Dashboard surface (main pane) ── */}
        <div
          className="surface relative overflow-hidden"
          style={{ transform: "translateZ(0px)", borderRadius: "var(--radius-lg)" }}
        >
          {/* window bar */}
          <div
            className="flex items-center gap-2 px-5 py-3.5"
            style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-elevated)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#3A4048" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#3A4048" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#3A4048" }} />
            <span className="ml-3 font-mono text-xs" style={{ color: "var(--color-text-muted)" }}>
              analytics — production
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-end justify-between mb-1">
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                Monthly active
              </p>
              <span
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ color: "var(--color-emerald)", backgroundColor: "var(--color-emerald-dim)" }}
              >
                +18.4%
              </span>
            </div>
            <p className="font-display font-bold nums leading-none mb-6" style={{ fontSize: "2.2rem", color: "var(--color-text)" }}>
              48,120
            </p>

            {/* faux bar chart */}
            <div className="flex items-end gap-2.5" style={{ height: "92px" }}>
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-[4px]" style={{ height: `${h}%`,
                  background: i === bars.length - 2
                    ? "linear-gradient(180deg, var(--color-emerald), rgba(31,191,128,0.25))"
                    : "var(--color-border-bright)" }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile app card (overlaps front-left, lifted in Z) ── */}
        <div
          className="surface absolute overflow-hidden"
          style={{
            width: "112px",
            left: "-34px",
            bottom: "-30px",
            transform: "translateZ(60px)",
            borderRadius: "20px",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          <div className="px-3 pt-3 pb-3.5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full" style={{ background: "linear-gradient(135deg, var(--color-emerald), var(--color-emerald-dark))" }} />
              <div className="flex-1">
                <span className="block h-1.5 rounded-full mb-1" style={{ width: "70%", backgroundColor: "var(--color-border-bright)" }} />
                <span className="block h-1.5 rounded-full" style={{ width: "45%", backgroundColor: "var(--color-border)" }} />
              </div>
            </div>
            <span className="block h-1.5 rounded-full mb-1.5" style={{ backgroundColor: "var(--color-border)" }} />
            <span className="block h-1.5 rounded-full mb-1.5" style={{ width: "85%", backgroundColor: "var(--color-border)" }} />
            <span className="block h-1.5 rounded-full mb-3.5" style={{ width: "60%", backgroundColor: "var(--color-border)" }} />
            <div className="h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--color-emerald)" }}>
              <span className="font-mono text-[9px] font-semibold" style={{ color: "#04140D" }}>SHIP IT</span>
            </div>
          </div>
        </div>

        {/* ── Deploy status chip (floats top-right, highest Z) ── */}
        <div
          className="absolute flex items-center gap-2 px-3.5 py-2.5 rounded-xl"
          style={{
            top: "-22px",
            right: "-18px",
            transform: "translateZ(95px)",
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border-bright)",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ backgroundColor: "var(--color-emerald)", boxShadow: "0 0 8px var(--color-emerald)" }} />
          <span className="font-mono text-xs font-medium" style={{ color: "var(--color-text)" }}>deployed</span>
          <span className="font-mono text-xs nums" style={{ color: "var(--color-text-muted)" }}>·  3.2s</span>
        </div>

        {/* ── Code sliver (floats mid-right) ── */}
        <div
          className="absolute font-mono text-[11px] leading-5 px-3.5 py-3 rounded-xl"
          style={{
            right: "-30px",
            bottom: "56px",
            transform: "translateZ(120px)",
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          <div style={{ color: "var(--color-text-muted)" }}>$ git push</div>
          <div style={{ color: "var(--color-emerald)" }}>✓ build passed</div>
        </div>
      </motion.div>
    </div>
  );
}
