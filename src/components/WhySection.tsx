export default function WhySection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <p className="label-caps" style={{ marginBottom: "48px" }}>
          05 / THE DIFFERENCE
        </p>

        {/* Quote */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "64px 0",
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            className="headline-section"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(22px, 3.5vw, 48px)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            &ldquo;Most studios build and disappear.<br />
            We are your team, not your vendor.&rdquo;
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "No recruitment cost or time",
              "No onboarding, no context loss",
              "One team that knows your product inside out",
            ].map((item) => (
              <p key={item} className="body-text" style={{ fontSize: "16px" }}>
                — {item}
              </p>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {["NO RECRUITMENT", "NO ONBOARDING", "NO STARTING OVER"].map((item) => (
              <p
                key={item}
                className="label-caps"
                style={{ color: "var(--text-primary)", fontSize: "14px" }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
