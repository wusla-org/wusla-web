import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-custom text-center">
        <p
          className="font-display font-bold mb-6 select-none"
          style={{ fontSize: "clamp(5rem,20vw,14rem)", color: "var(--color-bg-card)", lineHeight: 1 }}
          aria-hidden
        >
          404
        </p>
        <h1 className="font-display font-bold mb-4" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "var(--color-text)" }}>
          Page not found
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>
          This page doesn&apos;t exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 btn-press"
          style={{ backgroundColor: "var(--color-emerald)", color: "#000" }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
