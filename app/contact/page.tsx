"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    service: defaultService,
    teamSize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setStatus("error");
      setErrorMsg(message);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-cloud rounded-2xl p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-apex-gradient mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-2xl">&#10003;</span>
        </div>
        <h3 className="text-2xl font-bold text-dark mb-3">Got it.</h3>
        <p className="text-slate max-w-md mx-auto">
          I'll review what you've shared and get back to you within one business day.
          Looking forward to learning more about what you're working on.
        </p>
        <p className="text-sm text-slate mt-4">
          In the meantime,{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-text font-semibold"
          >
            connect on LinkedIn
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-dark mb-2" htmlFor="name">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="First and last"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder-slate/50 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-2" htmlFor="company">
            Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder-slate/50 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-dark mb-2" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder-slate/50 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-2" htmlFor="role">
            Your role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            placeholder="CRO, VP Sales, RevOps..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder-slate/50 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-dark mb-2" htmlFor="service">
            What are you interested in?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm bg-white"
          >
            <option value="">Not sure yet</option>
            <option value="Comp Diagnostic">Comp Diagnostic ($5-8K)</option>
            <option value="Plan Design Sprint">Plan Design Sprint ($12-20K)</option>
            <option value="Annual Comp Architecture">Annual Comp Architecture ($25-50K)</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-2" htmlFor="teamSize">
            Sales team size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm bg-white"
          >
            <option value="">Select range</option>
            <option value="1-10">1-10 reps</option>
            <option value="11-25">11-25 reps</option>
            <option value="26-50">26-50 reps</option>
            <option value="50+">50+ reps</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-2" htmlFor="message">
          What's going on with your comp?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me what's not working, what you've tried, and what you're hoping to accomplish. The more context, the better."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder-slate/50 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-coral text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-full font-semibold text-white bg-apex-gradient hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      <p className="text-xs text-slate text-center">
        I respond to every message within one business day.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF6B6B, transparent)" }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-apex-gradient" />
            <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Let's talk comp.
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Tell me what's going on with your comp structure. I'll give you an honest
            read on what you're dealing with and where I can help.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-dark mb-4">What to expect</h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      text: "Fill out the form with as much detail as you can.",
                    },
                    {
                      step: "2",
                      text: "I'll review it and respond within one business day.",
                    },
                    {
                      step: "3",
                      text: "We'll schedule a 30-minute discovery call to go deeper.",
                    },
                    {
                      step: "4",
                      text: "I'll recommend the right engagement and scope.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-apex-gradient flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-slate text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm font-semibold text-dark mb-4">
                  Direct contact
                </h3>
                <a
                  href="mailto:hello@apexcompensation.com"
                  className="text-sm text-slate hover:text-dark transition-colors"
                >
                  hello@apexcompensation.com
                </a>
              </div>

              <div className="bg-cloud rounded-2xl p-6 border border-gray-100">
                <p className="text-xs font-semibold text-slate tracking-widest uppercase mb-3">
                  Good fit check
                </p>
                <p className="text-sm text-dark leading-relaxed">
                  Apex works best with Series B-D B2B SaaS companies that have 5+ reps
                  and a real comp problem. If that's not you, I'll tell you upfront.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <Suspense fallback={<div className="animate-pulse h-96 bg-cloud rounded-2xl" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
