"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16">
          <div className="section-label">04 / Contact</div>
          <h2
            className="font-display font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem,6vw,5rem)", color: "var(--color-text)" }}
          >
            Let&apos;s build<br />
            <span style={{ color: "var(--color-emerald)" }}>something.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--color-text-muted)" }}
            >
              Tell us about your idea. We&apos;ll reply within 24 hours with a clear plan — no
              sales pitch, no obligation.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Email
                </p>
                <a
                  href="mailto:hello@wusla.com"
                  className="font-display font-bold text-xl transition-colors duration-150"
                  style={{ color: "var(--color-emerald)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.8")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  hello@wusla.com
                </a>
              </div>

              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Location
                </p>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  Kerala, India
                </p>
              </div>

              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Response time
                </p>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  Within 24 hours — usually faster
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[14px] p-8 md:p-10"
            style={{
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-bg-card)",
            }}
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-150"
                    style={{
                      backgroundColor: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,208,132,0.12)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@startup.com"
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-150"
                    style={{
                      backgroundColor: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,208,132,0.12)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs font-mono font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-150 appearance-none cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,208,132,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <option value="" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Select a service</option>
                  <option value="mobile" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Mobile App</option>
                  <option value="web" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Web Platform</option>
                  <option value="desktop" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Desktop App</option>
                  <option value="design" style={{ backgroundColor: "var(--color-bg-elevated)" }}>UI / UX Design</option>
                  <option value="team" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Dedicated Team</option>
                  <option value="mvp" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Fast MVP</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What are you building? What's the timeline? Any context helps..."
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-150 resize-none"
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,208,132,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 font-semibold text-base px-6 py-4 rounded-lg transition-all duration-200"
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
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p
                className="text-xs text-center"
                style={{ color: "var(--color-text-muted)", opacity: 0.7 }}
              >
                We reply within 24 hours — usually much faster.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
