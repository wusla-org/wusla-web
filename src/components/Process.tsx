"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We learn your business, goals, and users. We define scope, success metrics, and technical requirements so we build the right thing — not just any thing.",
  },
  {
    num: "02",
    title: "Design",
    description: "High-fidelity wireframes and interactive prototypes. We validate the design with your team before a single line of production code is written.",
  },
  {
    num: "03",
    title: "Development",
    description: "Clean, tested, documented code. Weekly demos and continuous delivery so you always know where your project stands.",
  },
  {
    num: "04",
    title: "Delivery",
    description: "Thorough QA, performance optimization, and launch. We handle deployment and stay on hand post-launch to iron out any issues.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="container-custom">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">03</span>
          <div className="flex-1 h-px bg-white/8" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">How We Work</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        <div className="mb-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter leading-tight mb-4">
            Our <span className="text-stroke-accent">Process</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            A transparent, structured workflow — from first call to successful launch.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-white/8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-surface p-8 hover:bg-background/60 transition-colors duration-300"
            >
              <div className="font-display font-bold text-5xl text-brand-accent mb-6 leading-none">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
