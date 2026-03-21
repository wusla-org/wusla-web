import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "WUSLA builds web apps, mobile apps, and business systems. Fixed-scope or ongoing retainer — we stay involved.",
};

const SERVICES = [
  {
    num: "01",
    name: "Web Applications",
    desc: "Custom platforms, dashboards, portals, LMS, booking engines. If your business needs a web product, we build it from scratch — no templates, no plugins.",
  },
  {
    num: "02",
    name: "Mobile Applications",
    desc: "iOS and Android. Built for real business use, not just a checkbox. We build apps that people actually use every day.",
  },
  {
    num: "03",
    name: "Business Systems",
    desc: "Operations software, management tools, customer portals, internal dashboards. Whatever keeps your business running — we build it to last.",
  },
  {
    num: "04",
    name: "Ongoing Development",
    desc: "We stay after delivery. Maintenance, features, improvements. We are your team as long as you need us — not a studio that hands off and moves on.",
  },
];

const PRICING = [
  { tier: "BUILD", range: "₹25,000 – ₹1,50,000", note: "One-time project. Clean handoff." },
  { tier: "GROW", range: "₹8,000 – ₹35,000/month", note: "Retainer. Ongoing. Our core offering." },
  { tier: "PARTNER", range: "₹50,000+/month", note: "Full dedicated team. Always on." },
];

export default function ServicesPage() {
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
              <span style={{ color: "var(--text-tertiary)" }}>{" — SERVICES"}</span>
            </p>
            <h1 className="headline-hero" style={{ marginBottom: "32px" }}>
              One team.<br />Everything built.
            </h1>
            <p className="body-text" style={{ maxWidth: "500px", fontSize: "16px" }}>
              We build the products. We maintain them. We grow them with you.
              One engagement, not a revolving door of freelancers.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section
          className="section-pad"
          style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="w-container">
            <p className="label-caps" style={{ marginBottom: "48px" }}>
              WHAT WE BUILD
            </p>
            {SERVICES.map((s) => (
              <div key={s.num} className="row-item">
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr]" style={{ gap: "24px", alignItems: "start" }}>
                  <p style={{ fontSize: "48px", fontWeight: 900, color: "var(--text-tertiary)", lineHeight: 1, opacity: 0.5 }}>
                    {s.num}
                  </p>
                  <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)" }}>
                    {s.name}
                  </p>
                  <p className="body-text">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          className="section-pad"
          style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="w-container">
            <p className="label-caps" style={{ marginBottom: "48px" }}>
              PRICING
            </p>
            {PRICING.map((p) => (
              <div key={p.tier} className="row-item">
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px", alignItems: "center" }}>
                  <p className="label-caps" style={{ color: "var(--text-primary)", fontSize: "16px" }}>
                    {p.tier}
                  </p>
                  <p className="body-text" style={{ color: "var(--text-primary)", fontSize: "15px" }}>
                    {p.range}
                  </p>
                  <p className="body-text" style={{ fontSize: "13px" }}>{p.note}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
              <Link href="/#contact" className="btn-accent">
                Start a Conversation
              </Link>
              <p className="label-caps">
                Exact pricing depends on scope. Free discovery call to figure it out.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
