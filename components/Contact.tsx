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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name} at ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nStage: ${form.stage}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@apexcompensation.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #D946EF, #FF6B6B)" }}
      />

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
                {
                  label: "Email",
                  value: "hello@apexcompensation.com",
                  href: "mailto:hello@apexcompensation.com",
                },
                {
                  label: "Best for",
                  value: "Series B-D B2B SaaS companies",
                  href: null,
                },
                {
                  label: "Response time",
                  value: "Within 1 business day",
                  href: null,
                },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium hover:opacity-70 transition-opacity">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0F1B4C" }}>Your email client is opening.</h3>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  Hit send and I'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#0F1B4C" }}>Start the conversation</h3>
                  <p className="text-sm" style={{ color: "#64748B" }}>Takes 60 seconds. No spam, ever.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Your name</label>
                    <input
                      required
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Alex Chen"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Company</label>
                    <input
                      required
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Work email</label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    style={inputStyle}
                    placeholder="alex@acme.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>Company stage</label>
                  <select
                    required
                    className={inputClass}
                    style={inputStyle}
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                  >
                    <option value="">Select stage...</option>
                    <option>Series B</option>
                    <option>Series C</option>
                    <option>Series D</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#64748B" }}>What's going on?</label>
                  <textarea
                    rows={4}
                    required
                    className={inputClass}
                    style={{ ...inputStyle, resize: "none" }}
                    placeholder="Tell me what's broken, what you're scaling into, or what you're not sure about yet."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-95"
                  style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
                >
                  Send it
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
