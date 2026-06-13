"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const services = [
  "Mobile App",
  "Web Platform",
  "Desktop App",
  "UI / UX Design",
  "Dedicated Team",
  "Fast MVP",
];

export default function Contact() {
  const reduce = useReducedMotion();

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const labelCls = "font-mono text-[11px] font-medium uppercase tracking-widest";

  return (
    <section id="contact" className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">

          {/* Left — statement */}
          <Reveal>
            <div className="mono-label mb-5">Contact</div>
            <h2
              className="font-display font-bold leading-[1.0] mb-7"
              style={{ fontSize: "clamp(2.6rem,5.5vw,4.6rem)", color: "var(--color-text)" }}
            >
              Let&apos;s build something.
            </h2>
            <p className="text-base leading-relaxed mb-12 max-w-md text-pretty" style={{ color: "var(--color-text-muted)" }}>
              Tell us about your idea. We&apos;ll reply within 24 hours with a clear
              plan — no sales pitch, no obligation.
            </p>

            <div className="flex flex-col gap-7">
              {[
                { k: "Email", v: <a href="mailto:wuslateam@gmail.com" className="link-underline font-display font-semibold text-lg" style={{ color: "var(--color-text)" }}>wuslateam@gmail.com</a> },
                { k: "Location", v: <span className="font-medium" style={{ color: "var(--color-text)" }}>Kerala, India</span> },
                { k: "Response time", v: <span className="font-medium" style={{ color: "var(--color-text)" }}>Within 24 hours — usually faster</span> },
              ].map((row) => (
                <div key={row.k}>
                  <p className={`${labelCls} mb-1.5`} style={{ color: "var(--color-text-muted)" }}>{row.k}</p>
                  {row.v}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.08}>
            <div className="surface p-7 md:p-10" style={{ borderRadius: "var(--radius-lg)" }}>
              {status === "success" ? (
                <motion.div
                  initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="flex flex-col items-center justify-center py-14 gap-4 text-center"
                >
                  <CheckCircle className="w-11 h-11" style={{ color: "var(--color-emerald)" }} />
                  <h3 className="font-display font-bold text-2xl" style={{ color: "var(--color-text)" }}>
                    Message sent
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: "var(--color-text-muted)" }}>
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", service: "", message: "" }); }}
                    className="link-underline mt-2 font-mono text-xs uppercase tracking-widest"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className={labelCls} style={{ color: "var(--color-text-muted)" }}>Your name</label>
                      <input
                        id="name" name="name" type="text" placeholder="Aisha Rahman" required
                        value={form.name} onChange={handleChange}
                        className="field w-full rounded-[10px] px-4 py-3 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className={labelCls} style={{ color: "var(--color-text-muted)" }}>Email</label>
                      <input
                        id="email" name="email" type="email" placeholder="aisha@startup.com" required
                        value={form.email} onChange={handleChange}
                        className="field w-full rounded-[10px] px-4 py-3 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className={labelCls} style={{ color: "var(--color-text-muted)" }}>What do you need?</label>
                    <select
                      id="service" name="service" value={form.service} onChange={handleChange}
                      className="field w-full rounded-[10px] px-4 py-3 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" style={{ backgroundColor: "var(--color-bg-elevated)" }}>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "var(--color-bg-elevated)" }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className={labelCls} style={{ color: "var(--color-text-muted)" }}>Tell us about your project</label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="What are you building? What's the timeline? Any context helps…"
                      required value={form.message} onChange={handleChange}
                      className="field w-full rounded-[10px] px-4 py-3 text-sm resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm" style={{ color: "#F87171" }}>
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please email us directly at wuslateam@gmail.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full inline-flex items-center justify-center gap-2 font-semibold text-base px-6 py-4 rounded-[10px] btn-press disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--color-emerald)",
                      color: "#04140D",
                      transition: "box-shadow 220ms var(--ease-out), transform 160ms var(--ease-out)",
                    }}
                    onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.boxShadow = "var(--shadow-emerald)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    {status !== "sending" && (
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ transitionTimingFunction: "var(--ease-out)" }} />
                    )}
                  </button>

                  <p className="font-mono text-[11px] text-center" style={{ color: "var(--color-text-faint)" }}>
                    We reply within 24 hours — usually much faster.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
