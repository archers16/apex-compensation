const services = [
  {
    name: "Comp Diagnostic",
    tagline: "Find what's broken. Fast.",
    duration: "2-3 weeks",
    price: "$5,000 - $8,000",
    description:
      "We audit your existing comp plan, quota structure, and payout history to surface the gaps, misalignments, and silent killers in your current model. You get a clear diagnosis and a prioritized action list.",
    deliverables: [
      "Full comp plan audit",
      "Quota attainment analysis",
      "Behavior misalignment report",
      "Prioritized recommendations",
    ],
    ideal: "Series B teams who've been patching their plan and need a reset.",
    accent: "#FF6B6B",
  },
  {
    name: "Plan Design Sprint",
    tagline: "Rebuild it right.",
    duration: "4-6 weeks",
    price: "$12,000 - $20,000",
    description:
      "We redesign your comp plan from the ground up, built around the specific behaviors that drive revenue at your stage. No templates. No recycled frameworks. Custom architecture for your org.",
    deliverables: [
      "Custom comp plan design",
      "Quota and ramp modeling",
      "Accelerator and kicker structure",
      "Implementation playbook",
      "Rep communication guide",
    ],
    ideal: "Series B-C companies scaling into a new GTM motion or AE segment.",
    accent: "#D946EF",
    featured: true,
  },
  {
    name: "Annual Comp Architecture",
    tagline: "Strategic partner. Year-round.",
    duration: "6-12 months",
    price: "$25,000 - $50,000",
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
    ideal: "Series C-D companies pre- or post-Series C building repeatable comp infrastructure.",
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
            <div className="h-px w-8 bg-gradient-to-r from-coral to-violet" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
            <span className="text-slate text-sm font-medium tracking-widest uppercase" style={{ color: "#64748B" }}>
              What we do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-5" style={{ color: "#0F1B4C" }}>
            Three ways to work with us.
          </h2>
          <p className="text-lg text-slate leading-relaxed" style={{ color: "#64748B" }}>
            Each engagement is scoped to match where you are and what you actually need. No bloated retainers, no junior consultants delivering senior work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 duration-200 ${
                service.featured
                  ? "text-white"
                  : "bg-gray-50 border border-gray-100"
              }`}
              style={
                service.featured
                  ? { background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }
                  : {}
              }
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

              <div className="mb-2">
                <h3
                  className={`text-xl font-bold mb-1 ${service.featured ? "text-white" : "text-navy"}`}
                  style={!service.featured ? { color: "#0F1B4C" } : {}}
                >
                  {service.name}
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: service.accent }}
                >
                  {service.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-3 my-4">
                <span
                  className={`text-2xl font-black ${service.featured ? "text-white" : ""}`}
                  style={!service.featured ? { color: "#0F1B4C" } : {}}
                >
                  {service.price}
                </span>
              </div>

              <div
                className={`flex gap-4 text-xs font-medium mb-5 pb-5 border-b ${
                  service.featured ? "border-white/15 text-white/60" : "border-gray-200 text-slate"
                }`}
                style={!service.featured ? { color: "#64748B" } : {}}
              >
                <span>{service.duration}</span>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.featured ? "text-white/70" : "text-slate"
                }`}
                style={!service.featured ? { color: "#64748B" } : {}}
              >
                {service.description}
              </p>

              <ul className="flex-1 flex flex-col gap-2 mb-6">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke={service.accent}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={service.featured ? "text-white/80" : "text-slate"}
                      style={!service.featured ? { color: "#64748B" } : {}}
                    >
                      {d}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`text-xs italic mb-6 p-3 rounded-lg ${
                  service.featured ? "bg-white/10 text-white/60" : "bg-gray-100 text-slate"
                }`}
                style={!service.featured ? { color: "#64748B" } : {}}
              >
                <strong>Best for:</strong> {service.ideal}
              </div>

              <a
                href="#contact"
                className={`mt-auto text-center text-sm font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 active:scale-95 ${
                  service.featured
                    ? "text-white"
                    : "text-navy border border-navy/20 hover:border-navy/40"
                }`}
                style={
                  service.featured
                    ? { background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }
                    : { color: "#0F1B4C" }
                }
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm mt-8" style={{ color: "#64748B" }}>
          All engagements begin with a free 30-minute discovery call. No pressure, no pitch deck.
        </p>
      </div>
    </section>
  );
}
