"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    name: "Web Applications",
    desc: "Custom platforms, dashboards, portals, LMS, booking systems. Built for your operation — not a template.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "02",
    name: "Mobile Applications",
    desc: "iOS and Android. Built for real business use, not just to check a box. Apps people actually use every day.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    num: "03",
    name: "Business Systems",
    desc: "Operations software, management tools, customer portals. Whatever keeps your business running — built to last.",
    tags: ["ERP", "Portals", "Automation"],
  },
  {
    num: "04",
    name: "Ongoing Development",
    desc: "We stay after delivery. Maintain, improve, grow with you as long as you need us. Not a studio that hands off.",
    tags: ["Maintenance", "Scale", "Support"],
  },
];

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / rect.height) * 8,
      y: ((e.clientX - cx) / rect.width) * -8,
    });
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      className="service-card"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE_EXPO, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.01 : 1})`,
        transition: hovered
          ? "transform 0.1s ease, border-color 250ms ease, box-shadow 250ms ease"
          : "transform 0.5s ease, border-color 250ms ease, box-shadow 250ms ease",
      }}
    >
      {/* Number watermark */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "20px",
          right: "28px",
          fontFamily: "var(--font-display)",
          fontSize: "80px",
          lineHeight: 1,
          color: "var(--text-tertiary)",
          opacity: 0.4,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "0.04em",
        }}
      >
        {service.num}
      </span>

      <h3
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          marginBottom: "16px",
          position: "relative",
        }}
      >
        {service.name}
      </h3>

      <p
        className="body-text"
        style={{ marginBottom: "28px", position: "relative", maxWidth: "320px" }}
      >
        {service.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", position: "relative" }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "11px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              border: "1px solid var(--border)",
              padding: "4px 10px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Shimmer line at bottom — visible on hover via CSS */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, var(--accent-bright), transparent)",
          opacity: hovered ? 0.6 : 0,
          transition: "opacity 300ms ease",
        }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          <div>
            <p className="label-caps" style={{ marginBottom: "20px" }}>
              02 / SERVICES
            </p>
            <h2 className="headline-section">
              One team.<br />Everything built.
            </h2>
          </div>
          <p
            className="body-text"
            style={{ maxWidth: "320px", textAlign: "right" }}
          >
            From first commit to long-term maintenance —<br />
            we handle every layer of your stack.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
