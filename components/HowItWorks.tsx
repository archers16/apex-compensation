const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We start with a free 30-minute call. No deck, no pitch. Just an honest conversation about where your comp plan is, what's driving the pain, and whether Apex is the right fit.",
    accent: "#FF6B6B",
  },
  {
    number: "02",
    title: "Scoping and proposal",
    description:
      "Based on your org size, number of roles, and what needs to get done, I scope the engagement and send a clear proposal. Fixed fee or retainer, depending on the work. No surprises.",
    accent: "#E855D4",
  },
  {
    number: "03",
    title: "Design and build",
    description:
      "I work directly with you and your leadership team. Weekly check-ins, real-time collaboration, and a process built around your timeline. No junior staff, no handoffs mid-engagement.",
    accent: "#D946EF",
  },
  {
    number: "04",
    title: "Handoff and enablement",
    description:
      "You get a plan your reps can understand in 60 seconds and your leadership can defend in a board meeting. We build the documentation, communication materials, and rollout support to make it stick.",
    accent: "#D946EF",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28" style={{ background: "#F8F9FB" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#64748B" }}>
              The process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5" style={{ color: "#0F1B4C" }}>
            What working with Apex actually looks like.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
            From first conversation to rollout, here's how every engagement runs. Simple, direct, no black boxes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">

              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-px z-10"
                  style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)", opacity: 0.3 }}
                />
              )}

              <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full flex flex-col">
                {/* Number */}
                <div
                  className="text-4xl font-black mb-4 leading-none"
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {step.number}
                </div>

                <h3 className="text-lg font-bold mb-3" style={{ color: "#0F1B4C" }}>
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "#64748B" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
          >
            Start with a discovery call
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
