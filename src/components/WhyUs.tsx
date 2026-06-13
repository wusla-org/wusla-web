"use client";

import Reveal from "./Reveal";

const stats = [
  { value: "40+",    label: "Projects shipped" },
  { value: "100%",   label: "Code ownership" },
  { value: "2–4 wk", label: "MVP delivery" },
  { value: "3+",     label: "Years building" },
];

const reasons = [
  {
    num: "01",
    title: "You own everything",
    description:
      "Every line of code, every design file — 100% yours from day one. No lock-in, no hidden fees, no hostage-ware.",
  },
  {
    num: "02",
    title: "A real team, not an assembly line",
    description:
      "No offshore relay races. A focused team that communicates clearly, ships quality code, and treats your product as their own.",
  },
  {
    num: "03",
    title: "Predictable monthly cost",
    description:
      "Fixed contracts. You know exactly what you're paying, what you're getting, and when it ships. Zero surprises.",
  },
  {
    num: "04",
    title: "Embedded from day one",
    description:
      "No months of hiring, onboarding, or training. We plug into your Slack, GitHub, and Notion — and we're productive immediately.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-custom">

        {/* Editorial two-column: statement left, reasons right */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 mb-24">
          <Reveal>
            <div className="mono-label mb-5">Why WUSLA</div>
            <h2
              className="font-display font-bold leading-[1.04] mb-6"
              style={{ fontSize: "clamp(2.1rem,4.6vw,3.6rem)", color: "var(--color-text)" }}
            >
              A team that ships — and actually cares.
            </h2>
            <p className="text-base leading-relaxed max-w-md text-pretty" style={{ color: "var(--color-text-muted)" }}>
              Most agencies optimise for billable hours. We optimise for shipped
              products you fully own. Here&apos;s what that means in practice.
            </p>
          </Reveal>

          <div className="flex flex-col">
            {reasons.map((r, i) => (
              <Reveal key={r.num} delay={i * 0.06}>
                <div
                  className="group flex gap-6 md:gap-8 py-7"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <span className="font-mono text-sm nums pt-1 shrink-0" style={{ color: "var(--color-text-faint)" }}>
                    {r.num}
                  </span>
                  <div>
                    <h3
                      className="font-display font-semibold text-xl mb-2 leading-snug transition-colors duration-200"
                      style={{ color: "var(--color-text)" }}
                    >
                      {r.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-lg text-pretty" style={{ color: "var(--color-text-muted)" }}>
                      {r.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats band — big tabular numbers, hairline dividers (not boxed cards) */}
        <Reveal>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{
              backgroundColor: "var(--color-border)",
              borderTop: "1px solid var(--color-border)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-8 md:py-10"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <p
                  className="font-display font-bold nums leading-none mb-2.5"
                  style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--color-text)" }}
                >
                  {stat.value}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
