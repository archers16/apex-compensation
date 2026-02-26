import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #D946EF, #FF6B6B)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
              <span className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase">
                Series B-D B2B SaaS
              </span>
            </div>

            {/* Main headline */}
            <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Your reps are optimizing for exactly what{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                you're paying them to do.
              </span>
            </h1>

            {/* Subhead */}
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-white/60 font-normal leading-relaxed mb-10">
              The question is whether that's what you actually want. We help Series B-D SaaS companies engineer comp plans that drive the right behaviors.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mb-16">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/80 font-medium text-sm border border-white/20 hover:border-white/40 transition-colors"
              >
                See our services
              </a>
            </div>

            {/* Social proof strip */}
            <div className="animate-fade-up-delay-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-8">
              {[
                { stat: "Series B-D", label: "focused" },
                { stat: "B2B SaaS", label: "native" },
                { stat: "White-glove", label: "delivery" },
                { stat: "No fluff,", label: "just results" },
              ].map(({ stat, label }) => (
                <div key={stat} className="flex items-center gap-1.5">
                  <span
                    className="font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat}
                  </span>
                  <span className="text-white/40 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real Apex logo — stacked lockup on dark BG is a perfect match */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              {/* Glow behind logo */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)", transform: "scale(0.85)" }}
              />
              <div className="relative rounded-3xl overflow-hidden" style={{ width: 340, height: 340 }}>
                <Image
                  src="/logo-stacked-dark.jpg"
                  alt="Apex Compensation"
                  width={340}
                  height={340}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
