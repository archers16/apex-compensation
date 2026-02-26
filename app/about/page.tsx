import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Apex Compensation",
  description:
    "Meet Saxton and learn why Apex is the fresh face in an otherwise boring field.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #E855D4, transparent)" }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-apex-gradient" />
            <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
              About
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            The fresh face in an otherwise boring field.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Apex exists because sales comp deserves better than what most companies
            get from traditional consultants.
          </p>
        </div>
      </section>

      {/* Main about content */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cloud border border-gray-100 relative">
                {/* Replace with actual photo */}
                <div className="absolute inset-0 bg-dark-gradient flex items-end p-8">
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
                      Founder
                    </p>
                    <p className="text-white text-2xl font-bold">Saxton</p>
                    <p className="text-white/60 text-sm">Apex Compensation</p>
                  </div>
                </div>
              </div>
              {/* Decorative gradient accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-30 blur-2xl bg-apex-gradient" />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                I'm Saxton.
              </h2>
              <div className="space-y-5 text-slate leading-relaxed">
                <p>
                  I started Apex because I kept seeing the same pattern: smart revenue
                  leaders working with poorly designed comp plans that were actively
                  working against them. Reps sandbagging. Managers giving out MBO scores
                  they didn't believe. Finance and Sales fighting about commission
                  disputes that should never have happened.
                </p>
                <p>
                  The root cause was almost always the same. Someone built the comp plan
                  to be defensible, not effective. Designed for Finance to approve, not
                  for reps to act on.
                </p>
                <p>
                  I built Apex around a different thesis: sales compensation is behavioral
                  engineering. Every component you put in a comp plan is a signal. It tells
                  your reps what you value, how much, and in what order. If you don't design
                  that intentionally, the signals are random, and so is the behavior.
                </p>
                <p>
                  I work exclusively with Series B-D B2B SaaS companies because that's
                  where the comp complexity hits hardest. You've moved past the scrappy
                  stage. You have a real sales team. The founders aren't closing every deal
                  anymore. And the comp plan you built two years ago is creating problems
                  you didn't anticipate.
                </p>
                <p>
                  I'm not a Big Four firm. I don't have 40 consultants or a 300-slide
                  methodology deck. What I have is focused expertise, practical deliverables,
                  and a genuine interest in whether your comp plan actually works.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full font-semibold text-white bg-apex-gradient hover:opacity-90 transition-opacity text-sm"
                >
                  Work with me
                </Link>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full font-semibold text-dark border border-gray-200 hover:border-gray-400 transition-colors text-sm"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Why Apex */}
          <div className="border-t border-gray-100 pt-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
                Why Apex is different
              </h2>

              <div className="space-y-12">
                {[
                  {
                    heading: "Premium expertise, without the overhead",
                    body: "Big Four firms bring credibility and cost. The credibility comes from the name. The cost comes from the org chart. You're paying for partners, directors, and associates you'll never meet. At Apex, you work directly with me, from kickoff to delivery.",
                  },
                  {
                    heading: "Productized, not open-ended",
                    body: "Retainers are ambiguous. You never know exactly what you're getting or when it ends. Apex engagements have clear scope, clear timelines, and clear deliverables. You know what you're buying before you sign.",
                  },
                  {
                    heading: "SaaS-native by design",
                    body: "Most comp consultants apply generic frameworks to any industry. Apex is built specifically for B2B SaaS go-to-market. The quota structures, accelerator math, and role design are all built for how SaaS companies actually work.",
                  },
                  {
                    heading: "Behavioral, not just financial",
                    body: "The lens I apply to comp is behavioral first, financial second. The question isn't just \"does this pay enough?\" It's \"what behaviors does this reward, and are those the behaviors we actually want?\"",
                  },
                ].map((item) => (
                  <div key={item.heading} className="flex gap-6 items-start">
                    <div className="w-2 h-2 rounded-full bg-apex-gradient mt-2.5 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-2">
                        {item.heading}
                      </h3>
                      <p className="text-slate leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-cloud py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Who I work with
            </h2>
            <p className="text-slate max-w-xl mx-auto">
              Apex is intentionally focused. Not every company is a good fit, and I'd
              rather be honest about that upfront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "CROs and VP Sales",
                body: "Revenue leaders who need comp to drive the behavior that hits their number. You own the outcome, you should own the comp design.",
              },
              {
                title: "RevOps Leaders",
                body: "You're the one who has to administer whatever gets designed. You deserve comp plans that are actually implementable, not theoretical frameworks.",
              },
              {
                title: "CEOs and Founders",
                body: "You're scaling past founder-led sales. The comp plan that worked at 5 reps won't work at 25. You need a structure that scales and a process that doesn't require you to make comp decisions every quarter.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-apex-gradient mb-4" />
                <h3 className="text-lg font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gradient py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Think we're a fit?
          </h2>
          <p className="text-white/60 mb-8">
            Most conversations start with a quick call to talk through your current
            comp structure and what you're trying to solve. No pitch, no pressure.
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
