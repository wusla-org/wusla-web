const COLUMNS = [
  {
    label: "POST A JOB",
    body: "Weeks pass. CVs pile up. Most don't fit. The few who do want equity, benefits, and three rounds of interviews.",
  },
  {
    label: "HIRE SOMEONE",
    body: "Three months of onboarding. They sort of understand the product. Then the real work can maybe start.",
  },
  {
    label: "THEY LEAVE",
    body: "You start over. Everything they knew walks out with them. The cycle costs you months you don't have.",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        {/* Label */}
        <p className="label-caps" style={{ marginBottom: "48px" }}>
          01 / THE PROBLEM
        </p>

        {/* Headline */}
        <h2 className="headline-section" style={{ marginBottom: "64px", maxWidth: "700px" }}>
          The hiring cycle<br />costs you months.
        </h2>

        {/* Three columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "0", borderTop: "1px solid var(--border)" }}
        >
          {COLUMNS.map((col, i) => (
            <div
              key={col.label}
              style={{
                padding: "40px 32px 40px 0",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
                paddingLeft: i > 0 ? "32px" : "0",
              }}
            >
              <p className="label-caps" style={{ marginBottom: "16px" }}>
                {col.label}
              </p>
              <p className="body-text">{col.body}</p>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "48px 0",
            textAlign: "center",
            marginTop: "0",
          }}
        >
          <p
            className="headline-section"
            style={{ fontStyle: "italic", fontSize: "clamp(24px, 3.5vw, 52px)" }}
          >
            &ldquo;WUSLA skips all of it.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
