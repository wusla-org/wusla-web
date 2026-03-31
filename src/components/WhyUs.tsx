"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40+",    label: "Projects shipped" },
  { value: "100%",   label: "Code ownership" },
  { value: "2–4 wk", label: "MVP delivery" },
  { value: "3+",     label: "Years building" },
];

const reasons = [
  {
    num: "01",
    title: "You Own Everything",
    description:
      "Every line of code, every design file — 100% yours from day one. No lock-in, no hidden fees, no hostage-ware.",
  },
  {
    num: "02",
    title: "Real Team, Not an Assembly Line",
    description:
      "No offshore relay races. A focused team that communicates clearly, ships quality code, and treats your product as their own.",
  },
  {
    num: "03",
    title: "Predictable Monthly Cost",
    description:
      "Fixed contracts. You know exactly what you're paying, what you're getting, and when it ships. Zero surprises.",
  },
  {
    num: "04",
    title: "Embedded From Day One",
    description:
      "No months of hiring, onboarding, or training. We plug into your Slack, GitHub, and Notion — and we're productive immediately.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16">
          <div className="section-label">02 / Why WUSLA</div>
          <h2
            className="font-display font-bold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "var(--color-text)" }}
          >
            A team that ships —<br />
            <span style={{ color: "var(--color-emerald)" }}>and actually cares.</span>
          </h2>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16 rounded-[14px] overflow-hidden"
          style={{ border: "1px solid var(--color-border)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col justify-center px-8 py-8"
              style={{
                backgroundColor: "var(--color-bg-card)",
                borderRight: i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <p
                className="font-display font-bold leading-none mb-2"
                style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--color-emerald)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Reason blocks 2×2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative px-7 py-7 rounded-[14px] transition-all duration-200 overflow-hidden"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-bg-card)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--color-emerald)";
                (e.currentTarget as HTMLElement).style.borderLeftWidth = "2px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.borderLeftWidth = "1px";
              }}
            >
              <span
                className="text-xs font-mono font-bold uppercase tracking-widest mb-4 block"
                style={{ color: "var(--color-emerald)" }}
              >
                {r.num}
              </span>
              <h3
                className="font-display font-bold text-xl mb-3 leading-snug"
                style={{ color: "var(--color-text)" }}
              >
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
