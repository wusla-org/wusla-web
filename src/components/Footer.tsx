"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        padding: "48px 0",
      }}
    >
      <div className="w-container">
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "32px", alignItems: "start", marginBottom: "32px" }}
        >
          <p style={{ fontWeight: 700, fontSize: "20px", color: "var(--accent)", letterSpacing: "-0.03em" }}>
            WUSLA
          </p>
          <p style={{ fontSize: "14px", color: "var(--text-tertiary)", lineHeight: 1.6 }}>
            Your tech team. Without the hiring.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "14px",
                  color: "var(--text-tertiary)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
            © 2026 WUSLA
          </p>
          <a
            href="mailto:wuslateam@gmail.com"
            style={{ fontSize: "12px", color: "var(--text-tertiary)", textDecoration: "none" }}
          >
            wuslateam@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
