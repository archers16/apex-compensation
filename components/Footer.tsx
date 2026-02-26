const ApexMark = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 52 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="footerMarkGrad" x1="15%" y1="100%" x2="85%" y2="0%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="45%" stopColor="#E855D4" />
        <stop offset="100%" stopColor="#D946EF" />
      </linearGradient>
      <mask id="footerMarkMask">
        <rect width="52" height="48" fill="white" />
        <polygon points="26,22 17,41 35,41" fill="black" />
      </mask>
    </defs>
    <path
      d="M5 45 L26 5 L47 45"
      stroke="url(#footerMarkGrad)"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
      mask="url(#footerMarkMask)"
    />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-12" style={{ background: "#F8F9FB", borderColor: "#E5E7EB" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand lockup */}
          <div className="flex items-center gap-2.5">
            <ApexMark size={32} />
            <div className="leading-none">
              <div className="font-black text-lg tracking-tight leading-tight" style={{ color: "#0F1B4C" }}>
                apex
              </div>
              <div className="text-[9px] font-bold tracking-[0.18em] uppercase leading-tight" style={{ color: "#64748B" }}>
                compensation
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {[
              { label: "Services", href: "#services" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="hover:opacity-60 transition-opacity"
                style={{ color: "#64748B" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Email + LinkedIn */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:saxtonparcher@gmail.com"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#0F1B4C" }}
            >
              saxtonparcher@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/saxtonarcher"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center border hover:border-violet-400 transition-colors"
              style={{ borderColor: "#E5E7EB" }}
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  stroke="#0F1B4C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="4" cy="4" r="2" stroke="#0F1B4C" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderColor: "#E5E7EB", color: "#64748B" }}
        >
          <p>© {year} Apex Compensation. All rights reserved.</p>
          <p
            className="font-medium italic"
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #D946EF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sales comp, engineered.
          </p>
        </div>
      </div>
    </footer>
  );
}
