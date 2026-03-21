"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">05</span>
          <div className="flex-1 h-px bg-white/8" />
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Start a Project</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        {/* Scarcity banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 flex items-start gap-3 border border-brand-accent/25 bg-brand-accent/5 px-5 py-4"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent mt-1 flex-shrink-0" style={{ animation: "pulse 2s infinite" }} />
          <div>
            <p className="text-white text-sm font-semibold mb-0.5">2 project slots available for Q2 2026</p>
            <p className="text-text-secondary text-sm">We take on limited projects to ensure quality. Reserve your spot early.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16">
          {/* Left — statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tighter leading-tight mb-6">
              Let&apos;s Build<br />
              <span className="text-brand-accent">Something</span><br />
              Real.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Tell us about your project. We respond within 24 hours and we will schedule a discovery call to define the best path forward.
            </p>
            <div className="space-y-4 text-text-secondary text-sm font-mono">
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">→</span>
                <span>wuslateam@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">→</span>
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">→</span>
                <span>Free discovery call</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="md:col-span-7"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-brand-accent uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full py-4 bg-transparent border-b border-white/15 focus:border-brand-accent focus:outline-none transition-colors text-white text-lg placeholder:text-white/15"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-brand-accent uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full py-4 bg-transparent border-b border-white/15 focus:border-brand-accent focus:outline-none transition-colors text-white text-lg placeholder:text-white/15"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-mono text-brand-accent uppercase tracking-widest">Service</label>
                  <select
                    id="service"
                    className="w-full py-4 bg-transparent border-b border-white/15 focus:border-brand-accent focus:outline-none transition-colors text-white text-lg appearance-none cursor-pointer"
                  >
                    <option className="bg-background text-white">Web Application</option>
                    <option className="bg-background text-white">Product Design</option>
                    <option className="bg-background text-white">Backend & APIs</option>
                    <option className="bg-background text-white">Mobile App</option>
                    <option className="bg-background text-white">E-Commerce</option>
                    <option className="bg-background text-white">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xs font-mono text-brand-accent uppercase tracking-widest">Budget (USD)</label>
                  <select
                    id="budget"
                    className="w-full py-4 bg-transparent border-b border-white/15 focus:border-brand-accent focus:outline-none transition-colors text-white text-lg appearance-none cursor-pointer"
                  >
                    <option className="bg-background text-white">$5k – $15k</option>
                    <option className="bg-background text-white">$15k – $30k</option>
                    <option className="bg-background text-white">$30k – $60k</option>
                    <option className="bg-background text-white">$60k+</option>
                    <option className="bg-background text-white">Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-brand-accent uppercase tracking-widest">Project Details</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full py-4 bg-transparent border-b border-white/15 focus:border-brand-accent focus:outline-none transition-colors text-white text-lg placeholder:text-white/15 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-10 py-5 bg-brand-accent text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-background transition-all duration-300"
              >
                <span>Reserve My Project Slot</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
