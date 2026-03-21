"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-height)",
          zIndex: 100,
          backgroundColor: "var(--bg)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "border-color 200ms ease",
        }}
      >
        <div
          className="w-container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "var(--accent)",
              textDecoration: "none",
              letterSpacing: "-0.03em",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
          >
            WUSLA
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "32px" }}
          >
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
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-accent">
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "var(--text-primary)",
                transition: "transform 150ms ease, opacity 150ms ease",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "var(--text-primary)",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 150ms ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "var(--text-primary)",
                transition: "transform 150ms ease, opacity 150ms ease",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 24px",
          }}
        >
          {[
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "About", href: "/about" },
            { label: "Let's Talk", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(32px, 8vw, 56px)",
                fontWeight: 700,
                color: "var(--text-primary)",
                textDecoration: "none",
                lineHeight: 1.2,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
