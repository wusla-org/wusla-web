"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

const TICKER_ITEMS = [
  "Web Applications",
  "Mobile Apps",
  "Business Systems",
  "Dedicated Team",
  "Open Source",
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Retention" },
  { value: "3+", label: "Years Building" },
];

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE_EXPO, delay },
  };
}

export default function HeroSection() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D particle network canvas */}
      <HeroCanvas />

      {/* Radial emerald glow — atmospheric depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 900px 500px at 60% 30%, rgba(26,77,60,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Bottom gradient fade for ticker */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="w-container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 24px 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Top label */}
        <motion.p className="label-caps" style={{ marginBottom: "40px" }} {...fadeUp(0.05)}>
          <span style={{ color: "var(--accent-bright)" }}>WUSLA</span>
          {"  ·  "}Software Studio{"  ·  "}Est. 2025
        </motion.p>

        {/* Availability */}
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}
          {...fadeUp(0.15)}
        >
          <span className="dot-pulse" />
          <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
            Available for new projects
          </span>
        </motion.div>

        {/* Headline — Bebas Neue display font for maximum impact */}
        <div style={{ marginBottom: "48px", overflow: "hidden" }}>
          <motion.h1
            className="headline-display"
            {...fadeUp(0.25)}
          >
            <span style={{ display: "block" }}>Your Tech</span>
            <span
              style={{
                display: "block",
                color: "transparent",
                WebkitTextStroke: "2px var(--accent-bright)",
                textShadow: "0 0 60px rgba(34,197,94,0.3)",
              }}
            >
              Team.
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(32px, 5vw, 72px)",
                letterSpacing: "0.06em",
                color: "var(--text-secondary)",
                marginTop: "8px",
              }}
            >
              Without The Hiring.
            </span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: "480px",
            marginBottom: "48px",
          }}
          {...fadeUp(0.45)}
        >
          We plug in as your dedicated software team — build, maintain,
          grow. No recruitment, no onboarding, no starting over.
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", marginBottom: "80px" }}
          {...fadeUp(0.6)}
        >
          <Link href="/#contact" className="btn-accent">
            Start a Project
          </Link>
          <Link href="/projects" className="btn-ghost">
            See Our Work →
          </Link>
        </motion.div>

        {/* Stats row — social proof above the fold */}
        <motion.div
          style={{
            display: "flex",
            gap: "0",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: "40px",
          }}
          {...fadeUp(0.75)}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: "1 1 140px",
                paddingRight: "40px",
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                paddingLeft: i > 0 ? "40px" : "0",
              }}
            >
              <p className="stat-number">{stat.value}</p>
              <p className="label-caps" style={{ marginTop: "6px" }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker */}
      <div
        className="ticker-wrap"
        style={{
          backgroundColor: "var(--bg-subtle)",
          borderTop: "1px solid var(--border)",
          padding: "14px 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="ticker-track">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="label-caps"
              style={{ marginRight: "48px", whiteSpace: "nowrap" }}
            >
              {item} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
