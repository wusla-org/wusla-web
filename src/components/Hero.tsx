"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const terminalLines = [
  { type: "comment", text: "// wusla — your software team" },
  { type: "fn",      text: "async function buildProduct(idea) {" },
  { type: "indent",  text: "  const team    = await wusla.assemble();" },
  { type: "indent",  text: "  const product = await team.ship(idea);" },
  { type: "indent",  text: "  return product.launch();" },
  { type: "close",   text: "}" },
  { type: "blank",   text: "" },
  { type: "output",  text: "✓ MVP deployed in 3 weeks" },
  { type: "output",  text: "✓ 100% ownership transferred" },
];

const trust = ["Full Code Ownership", "Fixed Monthly Pricing", "Ships in 2–4 Weeks"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">

      {/* Large emerald radial glow — bottom-left */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          left: "-10%",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,208,132,0.07) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-bg-card)",
                color: "var(--color-text-muted)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "var(--color-emerald)",
                  boxShadow: "0 0 6px var(--color-emerald)",
                  animation: "pulse 2s infinite",
                }}
              />
              Software Team on Contract
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="font-display font-bold leading-[1.0] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--color-text)" }}
              >
                We Ship Software.
                <br />
                <span style={{ color: "var(--color-emerald)" }}>Your Business</span>
                <br />
                Grows.
              </motion.h1>
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "var(--color-text-muted)" }}
            >
              WUSLA plugs in as your dedicated engineering team — mobile apps, web
              platforms, desktop software. On contract, on your terms, code is 100% yours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-200"
                style={{ backgroundColor: "var(--color-emerald)", color: "#000" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "var(--color-emerald-dark)";
                  el.style.boxShadow = "0 0 32px rgba(0,208,132,0.35)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "var(--color-emerald)";
                  el.style.boxShadow = "none";
                }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-150"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border-bright)";
                  el.style.color = "var(--color-text)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.color = "var(--color-text-muted)";
                }}
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-x-7 gap-y-3"
            >
              {trust.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--color-emerald)" }}>✓</span>
                  <span style={{ color: "var(--color-text-muted)" }}>{item}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right — terminal card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            {/* Glow halo */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "0 0 80px rgba(0,208,132,0.12), 0 0 120px rgba(0,208,132,0.06)",
                borderRadius: "var(--radius-card)",
              }}
            />

            {/* Terminal window */}
            <div
              className="rounded-[14px] overflow-hidden"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-elevated)" }}
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
                <span className="ml-3 text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                  build.ts — wusla
                </span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-sm leading-7">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.07 }}
                    style={{
                      color:
                        line.type === "comment" ? "var(--color-text-muted)"
                        : line.type === "output" ? "var(--color-emerald)"
                        : line.type === "fn"     ? "#7DD3FC"
                        : "var(--color-text)",
                      minHeight: "1.75rem",
                    }}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-5 -left-6 px-4 py-2.5 rounded-xl text-xs font-semibold"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              <span style={{ color: "var(--color-emerald)" }}>40+</span> projects shipped
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute -top-5 -right-4 px-4 py-2.5 rounded-xl text-xs font-semibold"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              <span style={{ color: "var(--color-emerald)" }}>3+</span> yrs building
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
