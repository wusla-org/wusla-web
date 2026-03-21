"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission — integrate with your backend
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <p className="label-caps" style={{ marginBottom: "48px" }}>
          06 / START A PROJECT
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "80px", alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 className="headline-section" style={{ marginBottom: "24px", fontSize: "clamp(32px, 4vw, 64px)" }}>
              Let&apos;s build<br />something.
            </h2>
            <p className="body-text" style={{ marginBottom: "48px" }}>
              Tell us what you are working on.<br />
              We will tell you exactly how we can help.
            </p>

            <div>
              {[
                { label: "RESPONSE TIME", value: "Within 24 hours" },
                { label: "AVAILABILITY", value: "Open to new projects" },
                { label: "CONSULTATION", value: "Free, no obligation" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: "16px",
                    padding: "16px 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <p className="label-caps">{row.label}</p>
                  <p className="body-text" style={{ fontSize: "14px" }}>{row.value}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div style={{ padding: "48px 0" }}>
                <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "12px" }}>
                  Message received.
                </p>
                <p className="body-text">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <label className="label-v4">Name</label>
                  <input
                    className="input-v4"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="label-v4">Email</label>
                  <input
                    className="input-v4"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="label-v4">Project Details</label>
                  <textarea
                    className="input-v4"
                    rows={5}
                    placeholder="What are you building?"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    required
                    style={{ resize: "none" }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-accent"
                    style={{ width: "100%", justifyContent: "center", padding: "16px 20px", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    Send Message
                  </button>
                  <p
                    className="label-caps"
                    style={{ marginTop: "16px", textAlign: "center" }}
                  >
                    Or reach us directly —{" "}
                    <a
                      href="mailto:wuslateam@gmail.com"
                      style={{ color: "var(--text-secondary)", textDecoration: "none" }}
                    >
                      wuslateam@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
