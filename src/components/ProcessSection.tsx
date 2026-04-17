"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "We learn your business",
    desc: "Before any code. We understand what you need, why you need it, and what success looks like. No assumptions.",
    detail: "Discovery · Requirements · Architecture",
  },
  {
    num: "02",
    title: "We build your system",
    desc: "Custom from scratch. Not a template, not a plugin. Built for how your specific operation runs.",
    detail: "Design · Development · QA · Launch",
  },
  {
    num: "03",
    title: "We stay your team",
    desc: "After delivery. Maintenance, new features, improvements. We are involved as long as you need us.",
    detail: "Maintenance · Growth · Support",
  },
];

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProcessSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <motion.p
          className="label-caps"
          style={{ marginBottom: "20px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          04 / PROCESS
        </motion.p>

        <motion.h2
          className="headline-section"
          style={{ marginBottom: "80px" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.1 }}
        >
          How WUSLA works.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_EXPO, delay: i * 0.15 }}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 1fr",
                gap: "32px",
                alignItems: "start",
                borderTop: "1px solid var(--border)",
                padding: "48px 0",
                position: "relative",
              }}
            >
              {/* Large step number */}
              <div>
                <span
                  className="headline-display"
                  style={{
                    fontSize: "clamp(48px, 6vw, 80px)",
                    color: "transparent",
                    WebkitTextStroke: "1px var(--text-tertiary)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Title + detail pill */}
              <div>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                    marginBottom: "16px",
                  }}
                >
                  {step.title}
                </p>
                <p
                  className="label-caps"
                  style={{ color: "var(--accent-bright)", letterSpacing: "0.06em" }}
                >
                  {step.detail}
                </p>
              </div>

              {/* Description */}
              <p className="body-text" style={{ paddingTop: "4px" }}>
                {step.desc}
              </p>

              {/* Accent line on last item */}
              {i === STEPS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "var(--border)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
