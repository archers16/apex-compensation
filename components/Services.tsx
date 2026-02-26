const services = [
  {
    name: "Comp Diagnostic",
    tagline: "Find what's broken. Fast.",
    duration: "2-3 weeks",
    priceLabel: "Starting at $6K",
    priceNote: "Fixed fee, scoped upfront",
    description:
      "We audit your existing comp plan, quota structure, and payout history to surface the gaps, misalignments, and silent killers in your current model. You get a clear diagnosis and a prioritized action list.",
    deliverables: [
      "Full comp plan audit",
      "Quota attainment analysis",
      "Behavior misalignment report",
      "Prioritized recommendations",
    ],
    ideal: "Companies who've been patching their plan and need an honest outside assessment.",
    accent: "#FF6B6B",
  },
  {
    name: "Plan Design Sprint",
    tagline: "Rebuild it right.",
    duration: "4-6 weeks",
    priceLabel: "$15K – $25K",
    priceNote: "Scoped to org size and complexity",
    description:
      "We redesign your comp plan from the ground up, built around the specific behaviors that drive revenue at your stage. No templates. No recycled frameworks. Custom architecture for your org.",
    deliverables: [
      "Custom comp plan design",
      "Quota and ramp modeling",
      "Accelerator and kicker structure",
      "Implementation playbook",
      "Rep communication guide",
    ],
    ideal: "Growing companies scaling into a new GTM motion, segment, or sales structure.",
    accent: "#D946EF",
    featured: true,
  },
  {
    name: "Annual Comp Architecture",
    tagline: "Strategic partner. Year-round.",
    duration: "6-12 months",
    priceLabel: "Custom retainer",
    priceNote: "Scoped by org size and scope",
    description:
      "Embedded comp leadership without the headcount. We own your compensation strategy, annual plan design, mid-year adjustments, and rep-level modeling. Think of us as your comp team.",
    deliverables: [
      "Full annual comp design",
      "Quarterly review and adjustment",
      "New role comp modeling",
      "SPIF strategy (when warranted)",
      "Board and leadership reporting",
      "Ongoing advisory access",
    ],
    ideal: "Scaling organizations building repeatable comp infrastructure ahead of the next phase of growth.",
    accent: "#E855D4",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#64748B" }}>
              What we do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5" style={{ color: "#0F1B4C" }}>
            Three ways to work with us.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
            Pricing reflects scope and org complexity — not a rate card. Every engagement starts with a free 30-minute discovery call where we figure out what actually makes sense.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 duration-200 ${
                service.featured ? "text-white" : "bg-gray-50 border border-gray-100"
              }`}
              style={service.featured ? { background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" } : {}}
            >
              {service.featured && (
                <div className="absolute top-6 right-6">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
                  >
                    Most popular
                  </span>
                </div>
              )}

              {/* Accent dot */}
              <div
                className="w-10 h-10 rounded-xl mb-6 flex items-center justify-center"
                style={{ background: `${service.accent}22` }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: service.accent }} />
              </div>

              {/* Name + tagline */}
              <div className="mb-4">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: service.featured ? "white" : "#0F1B4C" }}
                >
                  {service.name}
                </h3>
                <p className="text-sm font-semibold" style={{ color: service.accent }}>
                  {service.tagline}
                </p>
              </div>

              {/* Soft pricing */}
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{
                  background: service.featured ? "rgba(255,255,255,0.08)" : "#F1F5F9",
                }}
              >
                <p
                  className="text-lg font-black leading-tight"
                  style={{ color: service.featured ? "white" : "#0F1B4C" }}
                >
                  {service.priceLabel}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: service.featured ? "rgba(255,255,255,0.45)" : "#64748B" }}
                >
                  {service.priceNote} · {service.duration}
                </p>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: service.featured ? "rgba(255,255,255,0.7)" : "#64748B" }}
              >
                {service.description}
              </p>

              <ul className="flex-1 flex flex-col gap-2 mb-6">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8l3 3 7-7"
                        stroke={service.accent}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: service.featured ? "rgba(255,255,255,0.8)" : "#64748B" }}>
                      {d}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Ideal client */}
              <div
                className="text-xs italic mb-6 p-3 rounded-lg"
                style={{
                  background: service.featured ? "rgba(255,255,255,0.06)" : "#F1F5F9",
                  color: service.featured ? "rgba(255,255,255,0.45)" : "#64748B",
                }}
              >
                <strong>Best for:</strong> {service.ideal}
              </div>

              <a
                href="#contact"
                className="mt-auto text-center text-sm font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 active:scale-95"
                style={
                  service.featured
                    ? { background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)", color: "white" }
                    : { color: "#0F1B4C", border: "1px solid #E5E7EB" }
                }
              >
                Let's scope it
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "#64748B" }}>
          All engagements begin with a free 30-minute discovery call. No pressure, no pitch deck.
        </p>
      </div>
    </section>
  );
}
