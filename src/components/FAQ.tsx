"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does WUSLA do?",
    a: "WUSLA is a custom software development agency. We design and build web applications, platforms, and digital products for businesses worldwide — from early-stage startups to established companies.",
  },
  {
    q: "What types of projects do you take on?",
    a: "We work on SaaS products, internal tools, e-commerce platforms, customer portals, mobile apps, and marketing websites. If your business needs custom software, we can help.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take 6–16 weeks depending on scope. A focused MVP with core features can launch in 6–8 weeks. Larger platforms with complex integrations take 12–20 weeks. We'll give you a clear timeline estimate after our discovery call.",
  },
  {
    q: "How much does it cost to work with WUSLA?",
    a: "Projects typically start at $5,000 for focused engagements and scale based on complexity. We offer fixed-price projects for defined scope and retainer arrangements for ongoing development. We'll propose the right structure after understanding your needs.",
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, and Tailwind CSS. For mobile, we use React Native and Expo. We choose the right tools for the job — not just what we're comfortable with.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Our clients are based across the US, UK, Europe, Middle East, and Southeast Asia. We run asynchronous-first workflows that work across time zones, with regular video check-ins at mutually convenient times.",
  },
  {
    q: "Do you offer support after launch?",
    a: "We offer post-launch support plans that cover bug fixes, performance monitoring, feature additions, and infrastructure management. We don't ship and disappear — we build long-term partnerships.",
  },
  {
    q: "How do we get started?",
    a: "Fill out the contact form below with your project details and we'll respond within 24 hours. We'll schedule a discovery call to understand your goals, then propose a clear plan and timeline.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">04</span>
          <div className="flex-1 h-px bg-white/8" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Common Questions</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tighter leading-tight">
              Frequently<br />Asked<br />
              <span className="text-brand-accent">Questions</span>
            </h2>
          </div>

          <div className="md:col-span-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-t border-white/8"
              >
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display font-bold text-lg text-white group-hover:text-brand-accent transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 text-brand-accent">
                    {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary leading-relaxed pb-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </div>
    </section>
  );
}
