const SERVICES = [
  {
    name: "Web Applications",
    desc: "Custom platforms, dashboards, portals, LMS, booking systems. Built for your operation — not a template.",
  },
  {
    name: "Mobile Applications",
    desc: "iOS and Android. Built for real business use, not just to check a box. Apps people actually use every day.",
  },
  {
    name: "Business Systems",
    desc: "Operations software, management tools, customer portals. Whatever keeps your business running — built to last.",
  },
  {
    name: "Ongoing Development",
    desc: "We stay after delivery. Maintain, improve, grow with you as long as you need us. Not a studio that hands off and disappears.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="w-container">
        <p className="label-caps" style={{ marginBottom: "48px" }}>
          02 / SERVICES
        </p>

        <h2 className="headline-section" style={{ marginBottom: "64px" }}>
          One team.<br />Everything built.
        </h2>

        <div>
          {SERVICES.map((service) => (
            <div key={service.name} className="row-item">
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px", alignItems: "start" }}>
                <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.3 }}>
                  {service.name}
                </p>
                <p className="body-text">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
