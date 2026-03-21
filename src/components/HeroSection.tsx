"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "Web Applications",
  "Mobile Apps",
  "Business Systems",
  "Dedicated Team",
  "Open Source",
];

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE_EXPO, delay },
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
      {/* Radial emerald glow — barely perceptible depth layer */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 800px 400px at 50% -100px, rgba(26,77,60,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="w-container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top label */}
        <motion.p className="label-caps" style={{ marginBottom: "32px" }} {...fadeUp(0.05)}>
          <span style={{ color: "var(--accent)" }}>WUSLA</span>{"  ·  "}Software Studio{"  ·  "}Est. 2025
        </motion.p>

        {/* Availability */}
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "48px" }}
          {...fadeUp(0.15)}
        >
          <span className="dot-pulse" />
          <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
            Available for new projects
          </span>
        </motion.div>

        {/* Headline — two lines, each animated independently */}
        <h1 className="headline-hero" style={{ marginBottom: "32px", maxWidth: "900px" }}>
          <motion.div {...fadeUp(0.25)}>Your tech team.</motion.div>
          <motion.div {...fadeUp(0.35)}>Without the hiring.</motion.div>
        </h1>

        {/* Subheadline */}
        <motion.p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: "520px",
            marginBottom: "48px",
          }}
          {...fadeUp(0.5)}
        >
          We plug in as your dedicated software team.
          Build, maintain, grow — no recruitment,
          no onboarding, no starting over.
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}
          {...fadeUp(0.65)}
        >
          <Link href="/#contact" className="btn-accent">
            Start a Project
          </Link>
          <Link href="/projects" className="btn-ghost">
            See Our Work →
          </Link>
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
          zIndex: 1,
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
