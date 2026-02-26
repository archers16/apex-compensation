const ApexLogo = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="100%" stopColor="#D946EF" />
      </linearGradient>
    </defs>
    <path d="M18 4L32 30H4L18 4Z" fill="url(#footerLogoGrad)" />
    <path d="M12 22H24M15 17H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-12" style={{ background: "#F8F9FB", borderColor: "#E5E7EB" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <ApexLogo />
            <div>
              <div className="font-bold text-sm tracking-tight" style={{ color: "#0F1B4C" }}>
                APEX COMPENSATION
              </div>
              <div className="text-xs font-medium" style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Sales comp, engineered.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {[
              { label: "Services", href: "#services" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="hover:opacity-60 transition-opacity" style={{ color: "#64748B" }}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:hello@apexcompensation.com" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#0F1B4C" }}>
              hello@apexcompensation.com
            </a>
            <a
              href="https://linkedin.com/company/apexcompensation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center border hover:border-violet-400 transition-colors"
              style={{ borderColor: "#E5E7EB" }}
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="#0F1B4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="4" r="2" stroke="#0F1B4C" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: "#E5E7EB", color: "#64748B" }}>
          <p>© {year} Apex Compensation. All rights reserved.</p>
          <p>Built for Series B-D B2B SaaS revenue teams.</p>
        </div>
      </div>
    </footer>
  );
}
