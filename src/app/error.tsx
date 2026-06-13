"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-custom text-center">
        <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-emerald)" }}>
          Error
        </p>
        <h1 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--color-text)" }}>
          Something went wrong
        </h1>
        <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: "var(--color-text-muted)" }}>
          An unexpected error occurred. Try again or return home.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 btn-press"
            style={{ backgroundColor: "var(--color-emerald)", color: "#000" }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-150"
            style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
