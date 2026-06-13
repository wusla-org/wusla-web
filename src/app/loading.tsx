export default function Loading() {
  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: "var(--color-emerald)", borderTopColor: "transparent" }}
        />
        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
          Loading
        </span>
      </div>
    </div>
  );
}
