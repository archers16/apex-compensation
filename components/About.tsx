import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Photo card
              On mobile: no overflow, no absolute-positioned cards, clean centered layout
              On desktop: full layout with floating stat cards */}
          <div className="relative">

            {/* The dark photo card — no overflow-visible on mobile */}
            <div
              className="relative rounded-2xl flex items-center justify-center overflow-visible"
              style={{
                background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)",
                aspectRatio: "4/5",
              }}
            >
              {/* Decorative blob */}
              <div
                className="absolute top-8 right-8 w-48 h-48 rounded-full opacity-30 blur-2xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
              />

              {/* Photo + name */}
              <div className="relative z-10 flex flex-col items-center gap-5 px-4">
                <div
                  className="rounded-full p-[3px]"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
                >
                  <div className="rounded-full overflow-hidden w-52 h-52">
                    <Image
                      src="/saxton.jpg"
                      alt="Saxton Archer, Founder of Apex Compensation"
                      width={208}
                      height={208}
                      className="object-cover object-top w-full h-full"
                      priority
                    />
                  </div>
                </div>

                <div className="text-center pb-4">
                  <div
                    className="h-px w-10 mx-auto mb-4"
                    style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }}
                  />
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Founder</p>
                  <p className="text-white text-2xl font-bold">Saxton Archer</p>
                  <div className="flex items-baseline gap-1 justify-center">
                    <span
                      className="text-sm font-black"
                      style={{
                        background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      apex
                    </span>
                    <span className="text-white/50 text-[9px] font-bold tracking-widest uppercase">
                      compensation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards — desktop only */}
            <div className="hidden md:block absolute -right-6 top-12 rounded-xl px-5 py-4 bg-white shadow-xl border border-gray-100">
              <p className="text-xs mb-1" style={{ color: "#64748B" }}>Typical comp plans have</p>
              <p className="text-2xl font-black" style={{ color: "#0F1B4C" }}>
                8+{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  components.
                </span>
              </p>
              <p className="text-xs mt-1" style={{ color: "#64748B" }}>We aim for 3.</p>
            </div>

            <div className="hidden md:block absolute -left-6 bottom-16 rounded-xl px-5 py-4 bg-white shadow-xl border border-gray-100">
              <p className="text-xs mb-1" style={{ color: "#64748B" }}>The Apex promise</p>
              <p className="text-sm font-bold" style={{ color: "#0F1B4C" }}>No junior consultants.</p>
              <p
                className="text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                No recycled frameworks.
              </p>
            </div>

            {/* Mobile-only stat pills — shown instead of floating cards */}
            <div className="flex md:hidden gap-3 mt-4">
              <div className="flex-1 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
                <p className="text-xs mb-0.5" style={{ color: "#64748B" }}>Typical plans</p>
                <p className="text-base font-black" style={{ color: "#0F1B4C" }}>
                  8+{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    components
                  </span>
                </p>
                <p className="text-xs" style={{ color: "#64748B" }}>We aim for 3.</p>
              </div>
              <div className="flex-1 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
                <p className="text-xs mb-0.5" style={{ color: "#64748B" }}>The promise</p>
                <p className="text-sm font-bold" style={{ color: "#0F1B4C" }}>No juniors.</p>
                <p
                  className="text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  No templates.
                </p>
              </div>
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

            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ color: "#0F1B4C" }}
            >
              I'm Saxton. I built Apex because I kept seeing the same problems.
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "#64748B" }}>
              <p>
                Sales comp consulting has a reputation problem. Big firms send junior analysts armed
                with recycled templates. Older independents deliver reports that look impressive and
                collect dust. Nobody actually owns the outcome.
              </p>
              <p>
                Apex is different by design. Every engagement is run by me, directly. No layers. No
                handoffs. No "the senior partner will review this." When you hire Apex, you get
                someone who has seen what happens when comp plans are built to manage cost instead of
                drive behavior, and who knows how to fix it.
              </p>
              <p>
                I work with CROs, VP Sales, and RevOps leaders at companies that are scaling — from
                high-growth startups to large enterprise teams — who need comp that actually works,
                not comp that just passes a board review.
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
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "#0F1B4C" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
              >
                Work with me
              </a>
              <a
                href="https://www.linkedin.com/in/saxtonarcher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm border transition-colors hover:border-gray-300"
                style={{ color: "#0F1B4C", borderColor: "#E5E7EB" }}
              >
                LinkedIn
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
