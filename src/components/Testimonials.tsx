"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "WUSLA delivered our SaaS in 8 weeks — clean architecture, zero bugs on launch. They treated our product like it was their own.",
    name: "James R.",
    role: "CEO",
    company: "FinTrack Inc.",
    rating: 5,
  },
  {
    quote:
      "They understood our healthcare compliance needs better than we did. The portal they built has saved us thousands of hours in admin work.",
    name: "Sarah K.",
    role: "Founder",
    company: "MedConnect Health",
    rating: 5,
  },
  {
    quote:
      "On time, on budget, and the codebase is actually maintainable. Rare to find a team that delivers all three consistently.",
    name: "Ahmed M.",
    role: "CTO",
    company: "BuildCore Systems",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-custom">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Client Feedback</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-white text-5xl md:text-7xl tracking-tighter leading-tight mb-4">
            What Clients <span className="text-stroke-accent">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-white/8 p-8 flex flex-col justify-between hover:border-brand-accent/20 transition-colors duration-300"
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-brand-accent text-sm">★</span>
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="border-t border-white/8 pt-6">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-text-secondary text-xs font-mono mt-1">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
