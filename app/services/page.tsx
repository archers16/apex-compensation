import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Apex Compensation",
  description:
    "Three productized service tiers for Series B-D SaaS companies. From a 2-week diagnostic to full annual comp architecture.",
};

const services = [
  {
    id: "diagnostic",
    name: "Comp Diagnostic",
    duration: "2-3 weeks",
    price: "$5,000 - $8,000",
    tagline: "Find out what's broken before you rebuild it.",
    description:
      "Before you design a new comp plan, you need to know why the current one isn't working. Most companies skip this step. They assume they know the problem and jump straight to solutions. The result: a new plan that fixes the wrong things.",
    descriptionTwo:
      "The Comp Diagnostic gives you a clear-eyed view of where your current structure is creating the wrong behaviors, where your quota methodology is broken, and what your reps actually think about how they're being paid.",
    deliverables: [
      "Comp plan audit and annotated review",
      "Rep interview summary (anonymized)",
      "Quota methodology assessment",
      "Competitive pay benchmarking",
      "Behavioral gap analysis",
      "Prioritized fix roadmap with estimated impact",
    ],
    idealFor:
      "Companies that suspect their comp is broken but aren't sure exactly where. Series B companies building a real comp function for the first time. Companies with high rep turnover or low attainment.",
    outcome:
      "A clear diagnosis with a specific, prioritized action plan. You'll know exactly what to fix and in what order.",
  },
  {
    id: "sprint",
    name: "Plan Design Sprint",
    duration: "4-6 weeks",
    price: "$12,000 - $20,000",
    tagline: "A complete plan rebuild. Designed to drive behavior, not confuse it.",
    description:
      "The Plan Design Sprint is our most common starting point for companies that know they need a real overhaul. We go from your current broken structure to a fully documented, behaviorally engineered comp plan that your RevOps team can implement and your reps can actually understand.",
    descriptionTwo:
      "We build in phases: diagnostic first, design second, documentation and rollout last. By the end, you have more than a plan. You have a system.",
    deliverables: [
      "Everything in the Comp Diagnostic",
      "Full compensation plan architecture",
      "Quota model and territory design",
      "Accelerator and threshold structure",
      "Role-specific plan documents (formatted for reps)",
      "RevOps implementation guide",
      "Manager communication playbook",
      "Rollout support and Q&A sessions",
    ],
    idealFor:
      "Series B-D companies rebuilding their comp from scratch or after a major GTM shift. Companies adding new roles, entering new markets, or transitioning from founder-led to structured sales.",
    outcome:
      "A production-ready comp plan with everything you need to implement it and communicate it confidently.",
    featured: true,
  },
  {
    id: "architecture",
    name: "Annual Comp Architecture",
    duration: "6-12 months",
    price: "$25,000 - $50,000",
    tagline: "Your embedded comp partner. For companies that move fast.",
    description:
      "For companies scaling quickly, comp isn't a set-it-and-forget-it function. New roles, new products, new markets, new leadership. Each change is a reason your comp might stop working. The Annual Comp Architecture keeps you ahead of it.",
    descriptionTwo:
      "Think of us as your fractional comp leader. We design, iterate, and advise as your GTM evolves. You get the benefit of a full-time comp expert without the full-time headcount.",
    deliverables: [
      "Everything in the Plan Design Sprint",
      "Quarterly plan reviews and iteration",
      "New role comp design (as needed)",
      "Executive and leadership comp advisory",
      "SPIF and incentive program design",
      "Annual quota-setting methodology",
      "Unlimited revision cycles",
      "Priority access and response SLA",
    ],
    idealFor:
      "Series C-D companies where the GTM motion is evolving rapidly. Revenue leaders who don't have internal comp expertise and can't afford to build it yet. Boards looking for comp governance.",
    outcome:
      "An always-current comp strategy that scales with your team. Your reps and leaders always know what they're being paid and why.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #D946EF, transparent)" }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-apex-gradient" />
            <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
              Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Three ways to work together.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Every engagement is productized for clarity. You know what you're getting,
            how long it takes, and what it costs. No retainer ambiguity. No scope creep.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left: content */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate tracking-widest uppercase">
                    {service.duration} &nbsp;&#183;&nbsp; {service.price}
                  </span>
                  {service.featured && (
                    <span className="ml-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-apex-gradient">
                      Most Popular
                    </span>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
                  {service.name}
                </h2>
                <p className="text-lg font-medium gradient-text mb-6">
                  {service.tagline}
                </p>
                <p className="text-slate leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-slate leading-relaxed mb-8">
                  {service.descriptionTwo}
                </p>

                <div className="bg-cloud rounded-xl p-4 border border-gray-100 mb-8">
                  <p className="text-xs font-semibold text-slate tracking-widest uppercase mb-2">
                    Ideal For
                  </p>
                  <p className="text-sm text-dark leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                <div className="bg-dark-gradient rounded-xl p-4 mb-8">
                  <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-2">
                    What You Walk Away With
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex px-7 py-3.5 rounded-full font-semibold text-white bg-apex-gradient hover:opacity-90 transition-opacity text-sm"
                >
                  Start with {service.name}
                </Link>
              </div>

              {/* Right: deliverables */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className={`rounded-2xl p-8 ${
                    service.featured
                      ? "bg-dark-gradient"
                      : "bg-cloud border border-gray-100"
                  }`}
                >
                  <h3
                    className={`text-sm font-semibold tracking-widest uppercase mb-6 ${
                      service.featured ? "text-white/40" : "text-slate"
                    }`}
                  >
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="gradient-text font-bold mt-0.5 shrink-0">
                          &#10003;
                        </span>
                        <span
                          className={`text-sm leading-relaxed ${
                            service.featured ? "text-white/80" : "text-dark"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cloud py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How do you typically start a new engagement?",
                a: "Almost always with a discovery call where I learn about your current comp structure, team size, GTM motion, and what's not working. From there, I'll recommend the right tier and we'll define scope before anything is signed.",
              },
              {
                q: "Can we start with a Diagnostic and upgrade to a Sprint?",
                a: "Yes, and it's actually the most common path. The Diagnostic gives us both a clear picture of the problems before we design solutions. The Diagnostic cost also applies toward a Sprint if you decide to move forward.",
              },
              {
                q: "Do you work with the entire RevOps org or just comp design?",
                a: "The focus is comp strategy and plan design. I'm not a full RevOps implementation partner. That said, I work closely with whoever owns comp administration to make sure what I design is actually implementable.",
              },
              {
                q: "How do you handle confidential compensation data?",
                a: "Everything is covered under NDA before we start. I don't share client data across engagements, ever. Anonymized learnings may inform frameworks, but your specific numbers and structures stay private.",
              },
              {
                q: "Do you offer ongoing support after a project ends?",
                a: "Yes. If you complete a Sprint and want ongoing support, we can transition to Annual Architecture, or I offer lightweight quarterly check-ins for past clients at a reduced rate.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-8">
                <h3 className="text-base font-semibold text-dark mb-3">
                  {item.q}
                </h3>
                <p className="text-slate leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gradient py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which tier is right?
          </h2>
          <p className="text-white/60 mb-8">
            Most companies start with a quick conversation. Tell me what's going on and
            I'll give you an honest read on where to start.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full font-semibold text-white bg-apex-gradient hover:opacity-90 transition-opacity"
          >
            Let's talk
          </Link>
        </div>
      </section>
    </>
  );
}
