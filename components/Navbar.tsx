"use client";
import { useState, useEffect } from "react";

// Accurate recreation of the Apex "A" mark:
// - Thick rounded legs forming an A shape
// - Coral-to-violet gradient (matching brand spec)
// - Triangular counter punched out via SVG mask
// - Transparent background so it works on any surface
const ApexMark = ({ size = 36 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 52 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="navMarkGrad" x1="15%" y1="100%" x2="85%" y2="0%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="45%" stopColor="#E855D4" />
        <stop offset="100%" stopColor="#D946EF" />
      </linearGradient>
      <mask id="navMarkMask">
        <rect width="52" height="48" fill="white" />
        {/* Inner counter triangle — transparent hole in the A */}
        <polygon points="26,22 17,41 35,41" fill="black" />
      </mask>
    </defs>
    {/* Two thick rounded legs: left foot → peak → right foot */}
    <path
      d="M5 45 L26 5 L47 45"
      stroke="url(#navMarkGrad)"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
      mask="url(#navMarkMask)"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo lockup */}
        <a href="#" className="flex items-center gap-2.5 group">
          <ApexMark size={36} />
          <div className="leading-none">
            <div
              className={`font-black text-lg tracking-tight transition-colors leading-tight ${
                scrolled ? "text-navy" : "text-white"
              }`}
              style={{ fontFamily: "Inter, Arial, sans-serif" }}
            >
              apex
            </div>
            <div
              className={`text-[9px] font-bold tracking-[0.18em] uppercase transition-colors leading-tight ${
                scrolled ? "text-slate-500" : "text-white/60"
              }`}
            >
              compensation
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-opacity hover:opacity-60 ${
                scrolled ? "text-navy" : "text-white/90"
              }`}
              style={{ color: scrolled ? "#0F1B4C" : undefined }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 ${scrolled ? "bg-navy" : "bg-white"}`} style={{ background: scrolled ? "#0F1B4C" : "white" }} />
          <span className={`block w-5 h-0.5 ${scrolled ? "bg-navy" : "bg-white"}`} style={{ background: scrolled ? "#0F1B4C" : "white" }} />
          <span className={`block w-5 h-0.5 ${scrolled ? "bg-navy" : "bg-white"}`} style={{ background: scrolled ? "#0F1B4C" : "white" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-sm"
              style={{ color: "#0F1B4C" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
