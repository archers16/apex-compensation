"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    stage: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition-all focus:border-violet-400 bg-white";
  const inputStyle = { borderColor: "#E5E7EB", color: "#0F1B4C" };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
    >
      {/* Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }} />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #D946EF, #FF6B6B)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Copy */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
              <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
                Get in touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Let's talk about what your comp plan is actually doing.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Every conversation starts with a free 30-minute call. No pitch deck, no sales process. Just an honest look at where your plan is and what it could be.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Email", value: "saxtonparcher@gmail.com", href: "mailto:saxtonparcher@gmail.com" },
                { label: "Best for", value: "High-growth companies scaling their sales org", href: null },
                { label: "Response time", value: "Within 1 business day", href: null },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-1">{label}</p>
                  {href
                    ? <a href={href} className="text-white font-medium hover:opacity-70 transition-opacity">{value}</a>
                    : <p className="text-white font-medium">{value}</p>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendly + Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">

            {/* Calendly CTA */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1" style={{ color: "#0F1B4C" }}>Ready to talk?</h3>
              <p className="text-sm mb-4" style={{ color: "#64748B" }}>Book a free 30-minute discovery call directly on my calendar.</p>
              <a
                href="https://calendly.com/apexcompensation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95"
                style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Book a discovery call
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px" style={{ background: "#E5E7EB" }} />
              <span className="text-xs font-medium" style={{ color: "#64748B" }}>or send a message first</span>
              <div className="flex-1 h-px" style={{ background: "#E5E7EB" }} />
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0F1B4C" }}>Message sent.</h3>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  I'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#0F1B4C" }}>Not ready to book yet?</h3>
                  <p className="text-sm" style={{ color: "#64748B" }}>Send a note and we'll go from there.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Your name</label>
                    <input required className={inputClass} style={inputStyle} placeholder="Alex Chen"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Company</label>
                    <input className={inputClass} style={inputStyle} placeholder="Acme Inc."
                      value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Work email</label>
                  <input required type="email" className={inputClass} style={inputStyle} placeholder="alex@acme.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Company size</label>
                  <select className={inputClass} style={inputStyle}
                    value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })}>
                    <option value="">Select size...</option>
                    <option>Under 50 employees</option>
                    <option>50 to 200 employees</option>
                    <option>200 to 500 employees</option>
                    <option>500 to 1,000 employees</option>
                    <option>1,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>What's going on?</label>
                  <textarea rows={4} required className={inputClass} style={{ ...inputStyle, resize: "none" }}
                    placeholder="Tell me what's broken, what you're scaling into, or what you're not sure about yet."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Email me directly at saxtonparcher@gmail.com.
                  </p>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}>
                  {status === "sending" ? "Sending..." : "Send it"}
                </button>

                <p className="text-center text-xs" style={{ color: "#64748B" }}>
                  No pitch deck. No pressure. Just a real conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
