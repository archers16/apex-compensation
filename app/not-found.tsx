import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
    >
      {/* Orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #D946EF, #FF6B6B)" }}
      />

      <div className="relative z-10 max-w-lg">
        {/* 404 number */}
        <div
          className="text-[120px] font-black leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>

        <h1 className="text-3xl font-black text-white mb-4">
          This page doesn't exist.
        </h1>

        <p className="text-white/50 text-lg leading-relaxed mb-10">
          Kind of like a comp plan with 12 components and no clear payout logic.
          Let's get you back somewhere useful.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
          >
            Back to home
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/75 font-medium text-sm border border-white/20 hover:border-white/40 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
