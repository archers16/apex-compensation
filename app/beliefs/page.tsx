import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beliefs | Apex Compensation",
  description:
    "The Apex manifesto. Five positions on why most sales comp plans fail and what to do about it.",
};

const beliefs = [
  {
    number: "01",
    title: "Kill your MBOs",
    tagline: "Subjective comp creates subjective results.",
    body: [
      "Management by Objectives sounds rigorous. There's a rubric. There are quarterly reviews. There's documentation. It feels like accountability. It's not.",
      "MBOs are where accountability goes to die. Here's what actually happens: managers give 4s and 5s because giving a 2 is uncomfortable. Reps learn to document selectively. The \"strategic objectives\" never actually move the needle because there's no real consequence for missing them and no real verification that hitting them mattered.",
      "MBOs exist because someone couldn't figure out how to measure something objectively, so they defaulted to subjective evaluation with a veneer of process. The result? Overpayment for mediocre performance, an easy path for gaming the system, and compensation that rarely accomplishes what the business actually wanted.",
    ],
    bottom: "If you can't measure it objectively, it doesn't belong in a comp plan.",
  },
  {
    number: "02",
    title: "Simplicity over sophistication",
    tagline: "If they can't calculate it on a napkin, you've already lost.",
    body: [
      "Most comp plans at Series B-D companies have six, eight, ten components. There's a base rate, an accelerator, a kicker for multi-year deals, a modifier for strategic products, a team overlay, an MBO (which we already covered), and something someone added two years ago that nobody remembers why.",
      "Each component made sense when it was added. In aggregate, it's incomprehensible.",
      "Here's the test: can your reps calculate their commission on a napkin? If the answer is no, your plan is broken. Reps can't optimize for what they can't understand. They'll default to doing whatever feels right and hope the math works out. That's not behavioral engineering. That's hope.",
      "Complexity also creates administrative burden. Every component requires tracking, validation, exception handling, and dispute resolution. Your RevOps team spends more time explaining the plan than enabling reps to hit it.",
    ],
    bottom: "If your reps can't explain how they get paid in under sixty seconds, your plan isn't sophisticated. It's just confusing.",
  },
  {
    number: "03",
    title: "Stop using SPIFs as band-aids",
    tagline: "A SPIF is an admission. Treat it like one.",
    body: [
      "When a company wants to push a new product, accelerate pipeline, or shift rep behavior, someone inevitably suggests a SPIF. It feels surgical. Targeted. Time-bound.",
      "It's actually a confession.",
      "A SPIF is an admission that your base comp plan isn't driving the behavior you need. Instead of fixing the underlying structure, you're papering over it with a temporary incentive and hoping nobody notices.",
      "SPIFs also create chaos. Reps start gaming timing, holding deals to qualify, or chasing SPIF dollars at the expense of higher-value activities. The comp team scrambles to administer something that wasn't built into their systems. And when the SPIF ends, behavior snaps back to baseline because you never fixed the root cause.",
    ],
    bottom: "If you need a SPIF to get reps to do something, ask why your comp plan isn't already rewarding it. SPIFs should be rare exceptions, not quarterly traditions.",
  },
  {
    number: "04",
    title: "Pay fast, not cautious",
    tagline: "The psychological feedback loop matters more than accounting convenience.",
    body: [
      "Most comp plans are designed to make Finance comfortable, not to make reps perform. CFOs want to hold payouts until revenue is recognized, clawback periods expire, and churn risk passes. RevOps builds systems around monthly or quarterly commission runs because that's operationally convenient.",
      "The entire comp governance industry is built on the premise that you need to protect against overpayment.",
      "But here's what behavioral science tells us: the tighter the connection between action and reward, the stronger the reinforcement. A rep who closes a deal and immediately sees their commission number tick up gets a dopamine hit that motivates the next call. A rep who waits weeks or months to see it on a paystub? The psychological link is broken.",
      "Yes, there are legitimate reasons to delay payment in certain situations. But too many companies default to caution when speed would serve them better.",
    ],
    bottom: "Show reps the impact of their work as fast as operationally possible.",
  },
  {
    number: "05",
    title: "Uncap the upside",
    tagline: "Commission caps are how companies tell reps to stop selling.",
    body: [
      "Every CEO says they want a \"hunter mentality.\" Every CRO talks about \"swinging for the fences.\" Then Finance installs a commission cap at 150% of quota, and suddenly the message is: hunt, but not too successfully.",
      "Commission caps exist because someone ran a model where a rep hypothetically earns $400K in a quarter and panicked. But that panic reveals a broken mental model. That rep didn't get lucky. They generated massive revenue. The commission isn't a cost; it's a percentage of money the company wouldn't have without them.",
      "Caps also send a signal. They tell your best performers that there's a ceiling on how much you value their contribution. And when top reps hit that ceiling, they slow down, sandbag into next quarter, or start taking recruiter calls.",
      "Yes, there should be windfall policies for truly anomalous situations. But in most scenarios, caps are counterproductive. If someone closes a huge deal and blows their number out of the water, the company should be thrilled to pay those commissions.",
    ],
    bottom: "If you're nervous about paying someone $500K, ask yourself how much revenue they brought in to earn it.",
  },
];

export default function BeliefsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-gradient pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF6B6B, transparent)" }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-apex-gradient" />
            <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
              The Apex Manifesto
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            What we believe.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            These aren't best practices pulled from a whitepaper. They're positions
            we hold because we've seen what happens when companies do the opposite.
            The thread: stop treating sales comp as a back-office function and start
            treating it as behavioral engineering.
          </p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-32">
          {beliefs.map((belief) => (
            <article key={belief.number} id={`belief-${belief.number}`} className="scroll-mt-24">
              {/* Number and title */}
              <div className="flex items-start gap-6 mb-8">
                <span className="text-6xl md:text-8xl font-bold text-gray-100 leading-none mt-1 select-none shrink-0">
                  {belief.number}
                </span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-dark mb-2">
                    {belief.title}
                  </h2>
                  <p className="text-base md:text-lg font-medium gradient-text">
                    {belief.tagline}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-coral via-violet to-transparent mb-8" />

              {/* Body */}
              <div className="space-y-5 text-slate leading-relaxed text-base md:text-lg pl-0 md:pl-28">
                {belief.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {/* Bottom line callout */}
                <div className="mt-8 bg-dark-gradient rounded-2xl p-6 md:p-8">
                  <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-3">
                    The Bottom Line
                  </p>
                  <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
                    {belief.bottom}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cloud py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            These aren't just opinions.
          </h2>
          <p className="text-slate text-lg mb-10">
            They're the principles we apply in every engagement. If they resonate,
            we're probably a good fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold text-white bg-apex-gradient hover:opacity-90 transition-opacity"
            >
              Let's talk comp
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full font-semibold text-dark border border-gray-200 hover:border-gray-400 transition-colors"
            >
              See how we work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
