const STEPS = [
  {
    num: "01",
    title: "We learn your business",
    desc: "Before any code. We understand what you need, why you need it, and what success looks like. No assumptions.",
  },
  {
    num: "02",
    title: "We build your system",
    desc: "Custom from scratch. Not a template, not a plugin. Built for how your specific operation runs.",
  },
  {
    num: "03",
    title: "We stay your team",
    desc: "After delivery. Maintenance, new features, improvements. We are involved as long as you need us.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <p className="label-caps" style={{ marginBottom: "48px" }}>
          04 / PROCESS
        </p>

        <h2 className="headline-section" style={{ marginBottom: "64px" }}>
          How WUSLA works.
        </h2>

        <div>
          {STEPS.map((step) => (
            <div key={step.num} className="row-item">
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr]" style={{ gap: "24px", alignItems: "start" }}>
                <p
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    color: "var(--text-tertiary)",
                    lineHeight: 1,
                    opacity: 0.5,
                  }}
                >
                  {step.num}
                </p>
                <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.3 }}>
                  {step.title}
                </p>
                <p className="body-text">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
