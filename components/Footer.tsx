import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-12" style={{ background: "#F8F9FB", borderColor: "#E5E7EB" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo - full color transparent PNG on light footer background */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo-transparent.png"
              alt="Apex Compensation"
              width={80}
              height={80}
              className="object-contain"
            />
          </a>

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
              className="w-8 h-8 rounded-full flex items-center justify-center border hover:border-gray-400 transition-colors"
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

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderColor: "#E5E7EB", color: "#64748B" }}
        >
          <p>© {year} Apex Compensation. All rights reserved.</p>
          <p
            className="font-semibold italic"
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
