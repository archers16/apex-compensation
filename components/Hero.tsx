export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise"
      style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
    >
      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #D946EF, #FF6B6B)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-3 mb-8">
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }}
            />
            <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
              Series B-D B2B SaaS
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Your reps are optimizing for exactly what{" "}
            <span className="gradient-text">you're paying them to do.</span>
          </h1>

          {/* Subhead */}
          <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-white/65 font-normal leading-relaxed max-w-2xl mb-12">
            The question is whether that's what you actually want. We help Series B-D SaaS companies engineer comp plans that drive the right behaviors.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mb-20">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-transform hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
            >
              Start the conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/80 font-medium text-base border border-white/20 hover:border-white/40 transition-colors"
            >
              See our services
            </a>
          </div>

          {/* Social proof strip */}
          <div className="animate-fade-up-delay-4 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
            {[
              { stat: "Series B-D", label: "focus" },
              { stat: "B2B SaaS", label: "native" },
              { stat: "White-glove", label: "delivery" },
              { stat: "No fluff.", label: "just results" },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="gradient-text font-bold text-base">{stat}</span>
                <span className="text-white/40 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
