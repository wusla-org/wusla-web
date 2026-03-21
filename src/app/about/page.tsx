import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "WUSLA is your dedicated tech team. We build and maintain software products for founders who want to grow, not recruit.",
};

const VALUES = [
  { num: "01", title: "Build to last", desc: "We do not ship fast and move on. We build things that hold up under real use, real load, and real time." },
  { num: "02", title: "Stay involved", desc: "Delivery is not the end. We maintain, improve, and grow with you for as long as you need a tech team." },
  { num: "03", title: "Say what we mean", desc: "Honest timelines. Honest assessments. If something is not the right approach, we say so." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          className="section-pad"
          style={{
            backgroundColor: "var(--bg)",
            paddingTop: "calc(var(--nav-height) + 80px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="w-container">
            <p className="label-caps" style={{ marginBottom: "32px" }}>
              <span style={{ color: "var(--accent)" }}>WUSLA</span>
              <span style={{ color: "var(--text-tertiary)" }}>{" — ABOUT"}</span>
            </p>
            <h1 className="headline-hero" style={{ marginBottom: "48px" }}>
              We are<br />WUSLA.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "64px" }}>
              <div>
                <p className="body-text" style={{ marginBottom: "24px", fontSize: "16px" }}>
                  WUSLA comes from the Arabic word for <em>connection</em>. That is what we are — the connection between what founders envision and what engineers build.
                </p>
                <p className="body-text" style={{ marginBottom: "24px", fontSize: "16px" }}>
                  We started because we kept seeing the same problem: non-technical founders spending months trying to hire developers, onboarding them, watching them leave, then starting over.
                </p>
                <p className="body-text" style={{ fontSize: "16px" }}>
                  WUSLA replaces that cycle. We become your tech team from day one. We build the product, we maintain it, we grow with you. No recruitment. No onboarding. No disappearing.
                </p>
              </div>

              <div>
                {[
                  { label: "FOUNDED", value: "2025" },
                  { label: "LOCATION", value: "Malappuram, Kerala" },
                  { label: "CONTACT", value: "wuslateam@gmail.com" },
                  { label: "AVAILABLE", value: "Open to new projects" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr",
                      gap: "16px",
                      padding: "16px 0",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <p className="label-caps">{item.label}</p>
                    <p className="body-text" style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid var(--border)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="section-pad"
          style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="w-container">
            <p className="label-caps" style={{ marginBottom: "48px" }}>
              HOW WE WORK
            </p>
            {VALUES.map((v) => (
              <div key={v.num} className="row-item">
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr]" style={{ gap: "24px", alignItems: "start" }}>
                  <p style={{ fontSize: "48px", fontWeight: 900, color: "var(--text-tertiary)", lineHeight: 1, opacity: 0.5 }}>
                    {v.num}
                  </p>
                  <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)" }}>
                    {v.title}
                  </p>
                  <p className="body-text">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="section-pad"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <div className="w-container" style={{ textAlign: "center" }}>
            <h2 className="headline-section" style={{ marginBottom: "32px" }}>
              Ready to stop<br />recruiting?
            </h2>
            <Link href="/#contact" className="btn-accent">
              Start the Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
