export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
      />
      <div
        className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #D946EF, #FF6B6B)" }}
      />

      {/* Content - pb-40 pushes proof strip well above the fade zone */}
      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-40 w-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
          <span className="text-white/50 text-xs font-semibold tracking-[0.22em] uppercase">
            Sales Compensation Consulting
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
          Your reps optimize for exactly what{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            you pay them to do.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-xl text-white/55 font-normal leading-relaxed mb-12 max-w-2xl">
          The question is whether that's what you actually want. Apex Compensation designs incentive plans and comp architecture that engineer the behaviors your business needs to grow.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/75 font-medium text-sm border border-white/20 hover:border-white/40 transition-colors"
          >
            See our services
          </a>
        </div>

        {/* Proof strip - now well above the fade */}
        <div className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: "High-growth", label: "companies at an inflection point." },
            { stat: "Any industry,", label: "if you run a sales org." },
            { stat: "White-glove", label: "delivery on every engagement." },
            { stat: "No caps,", label: "no MBOs, no band-aids." },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div
                className="text-base font-bold mb-0.5"
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat}
              </div>
              <div className="text-white/60 text-xs leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade - pushed to very bottom so it doesn't overlap content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
