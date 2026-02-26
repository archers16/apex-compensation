export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
            >
              {/* Decorative blobs */}
              <div
                className="absolute top-8 right-8 w-48 h-48 rounded-full opacity-30 blur-2xl"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
              />
              {/* Person icon placeholder - swap with next/image when you have a photo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="22" r="14" stroke="white" strokeWidth="2" />
                  <path d="M6 58c0-14.359 11.641-26 26-26s26 11.641 26 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
                <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Founder</p>
                <p className="text-white text-2xl font-bold">Saxton</p>
                <p className="text-sm font-semibold" style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Apex Compensation
                </p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -right-6 top-12 rounded-xl px-5 py-4 bg-white shadow-xl border border-gray-100">
              <p className="text-xs mb-1" style={{ color: "#64748B" }}>Typical comp plans have</p>
              <p className="text-2xl font-black" style={{ color: "#0F1B4C" }}>
                8+{" "}
                <span style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  components.
                </span>
              </p>
              <p className="text-xs mt-1" style={{ color: "#64748B" }}>We aim for 3.</p>
            </div>

            <div className="absolute -left-6 bottom-16 rounded-xl px-5 py-4 bg-white shadow-xl border border-gray-100">
              <p className="text-xs mb-1" style={{ color: "#64748B" }}>The Apex promise</p>
              <p className="text-sm font-bold" style={{ color: "#0F1B4C" }}>No junior consultants.</p>
              <p
                className="text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                No recycled frameworks.
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
              <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#64748B" }}>
                About
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: "#0F1B4C" }}>
              I'm Saxton. I built Apex because I kept seeing the same problems.
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "#64748B" }}>
              <p>
                Sales comp consulting has a reputation problem. Big firms send junior analysts armed with recycled templates. Older independents deliver reports that look impressive and collect dust. Nobody actually owns the outcome.
              </p>
              <p>
                Apex is different by design. Every engagement is run by me, directly. No layers. No handoffs. No "the senior partner will review this." When you hire Apex, you get someone who has seen what happens when comp plans are built to manage cost instead of drive behavior, and who knows how to fix it.
              </p>
              <p>
                I work with CROs, VP Sales, and RevOps leaders at Series B-D SaaS companies who need comp that actually works, not comp that just passes a board review.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {[
                "Custom plans. No templates, no copy-paste.",
                "White-glove attention on every engagement.",
                "Plain language. No jargon for jargon's sake.",
                "Opinions backed by reasoning, not convention.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "#0F1B4C" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
              >
                Work with me
              </a>
              <a
                href="https://linkedin.com/in/saxtonbell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm border"
                style={{ color: "#0F1B4C", borderColor: "#E5E7EB" }}
              >
                LinkedIn
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
