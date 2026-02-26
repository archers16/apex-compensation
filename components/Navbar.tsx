"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    { label: "How It Works", href: "#how-it-works" },
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
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo - transparent PNG, white on dark / full color on white */}
        <a href="#" className="flex items-center">
          <div className="relative" style={{ width: 72, height: 72 }}>
            {/* Full color version - visible on white navbar */}
            <Image
              src="/logo-transparent.png"
              alt="Apex Compensation"
              width={72}
              height={72}
              className={`absolute inset-0 transition-opacity duration-300 object-contain ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            {/* White version - visible over dark hero */}
            <Image
              src="/logo-white.png"
              alt="Apex Compensation"
              width={72}
              height={72}
              className={`absolute inset-0 transition-opacity duration-300 object-contain ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: scrolled ? "#0F1B4C" : "rgba(255,255,255,0.9)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/saxtonarcher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-opacity hover:opacity-60"
            aria-label="LinkedIn"
            style={{ color: scrolled ? "#0F1B4C" : "rgba(255,255,255,0.9)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
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
          {[0,1,2].map(i => (
            <span
              key={i}
              className="block w-5 h-0.5 transition-colors"
              style={{ background: scrolled ? "#0F1B4C" : "white" }}
            />
          ))}
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
          <a
            href="https://www.linkedin.com/in/saxtonarcher"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm flex items-center gap-2"
            style={{ color: "#0F1B4C" }}
            onClick={() => setMobileOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
