"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Applications",
    description: "High-performance web apps built for scale. We build SaaS products, internal tools, and customer-facing platforms using Next.js, React, and modern infrastructure.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "Product Design",
    description: "From user research to high-fidelity prototypes. We design interfaces that reduce friction, build trust, and convert visitors into customers.",
    tech: ["Figma", "Framer", "User Research", "Design Systems"],
  },
  {
    num: "03",
    title: "Backend & APIs",
    description: "Secure, scalable server-side architecture. REST and GraphQL APIs, database design, authentication, and cloud infrastructure that handles growth.",
    tech: ["Node.js", "PostgreSQL", "Supabase", "AWS", "Redis"],
  },
  {
    num: "04",
    title: "Mobile Platforms",
    description: "Cross-platform mobile applications and Progressive Web Apps. Native-feeling experiences that work everywhere your users are.",
    tech: ["React Native", "Expo", "PWA", "iOS", "Android"],
  },
  {
    num: "05",
    title: "E-Commerce",
    description: "Conversion-optimized storefronts and marketplaces. From Shopify customizations to fully custom commerce platforms with integrated payments.",
    tech: ["Shopify", "Stripe", "Next.js Commerce", "Algolia"],
  },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(
    280px circle at ${mouseX}px ${mouseY}px,
    rgba(0, 135, 90, 0.10),
    transparent 80%
  )`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      key={service.num}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative border-t border-white/8 py-8 grid grid-cols-12 gap-6 hover:border-brand-accent/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Mouse-tracking gradient spotlight */}
      <motion.div
        style={{ background }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Number */}
      <div className="relative col-span-2 md:col-span-1">
        <span className="font-display font-bold text-4xl md:text-5xl text-brand-accent leading-none">
          {service.num}
        </span>
      </div>

      {/* Content */}
      <div className="relative col-span-10 md:col-span-11 grid md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-4">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-brand-accent transition-colors duration-300 tracking-tight">
            {service.title}
          </h3>
        </div>
        <div className="md:col-span-5">
          <p className="text-text-secondary leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="md:col-span-3 flex flex-wrap gap-2">
          {service.tech.map((t) => (
            <span key={t} className="px-2 py-1 border border-white/10 text-white/40 text-xs font-mono group-hover:border-brand-accent/20 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="container-custom">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">01</span>
          <div className="flex-1 h-px bg-white/8" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">What We Build</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        <div className="mb-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter leading-tight mb-4">
            Our <span className="text-stroke-accent">Services</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            We build software that solves real business problems — not just pretty interfaces.
          </p>
        </div>

        {/* Services list */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} index={i} />
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/8" />
        </div>
      </div>
    </section>
  );
}
