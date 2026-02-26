const beliefs = [
  {
    number: "01",
    title: "Kill your MBOs.",
    short: "Subjective comp creates subjective results.",
    body: "MBOs sound rigorous. In practice, they're where accountability goes to die. Managers give 4s and 5s because a 2 is uncomfortable. Reps learn to document selectively. If you can't measure it objectively, it doesn't belong in a comp plan.",
  },
  {
    number: "02",
    title: "Simplicity over sophistication.",
    short: "If reps can't explain it in 60 seconds, it's broken.",
    body: "Most Series B-D plans have six, eight, ten components. Each made sense when added. In aggregate, it's incomprehensible. Reps can't optimize for what they can't understand. Complexity isn't sophisticated. It's just confusing.",
  },
  {
    number: "03",
    title: "Stop using SPIFs as band-aids.",
    short: "A SPIF is an admission that your base plan isn't working.",
    body: "Every time you reach for a SPIF, you're papering over a structural problem. Reps game timing, hold deals, and chase SPIF dollars at the expense of high-value activity. Fix the underlying plan. SPIFs should be rare exceptions, not quarterly traditions.",
  },
  {
    number: "04",
    title: "Pay fast, not cautious.",
    short: "The psychological feedback loop matters more than accounting convenience.",
    body: "CFOs want to hold payouts until churn risk passes. Finance builds systems around monthly runs because it's operationally convenient. Behavioral science disagrees. The tighter the link between action and reward, the stronger the reinforcement. Show reps the impact of their work as fast as operationally possible.",
  },
  {
    number: "05",
    title: "Uncap the upside.",
    short: "Commission caps tell reps to stop selling.",
    body: "Every CEO wants hunters. Then Finance installs a cap at 150% of quota. That cap sends a message: hunt, but not too successfully. When a rep earns $500K, ask how much revenue they generated to get there. If you're nervous about paying it, the math probably still works in your favor.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 overflow-hidden" style={{ background: "#F8F9FB" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #FF6B6B, #D946EF)" }} />
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#64748B" }}>
              What we believe
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5" style={{ color: "#0F1B4C" }}>
            Five positions that define how we work.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
            These aren't just opinions. They're the principles that inform every recommendation we make. Reasonable people can disagree. But we've seen these play out enough times to have conviction.
          </p>
        </div>

        {/* Beliefs */}
        <div className="flex flex-col gap-0">
          {beliefs.map((belief, i) => (
            <div
              key={belief.number}
              className="group relative flex gap-8 py-10 border-t border-gray-200 hover:bg-white transition-colors duration-200 px-6 -mx-6 rounded-2xl cursor-default"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-12">
                <span className="text-3xl font-black" style={{ color: "#E5E7EB" }}>
                  {belief.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F1B4C" }}>
                    {belief.title}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: "#D946EF" }}>
                    {belief.short}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                    {belief.body}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(180deg, #FF6B6B, #D946EF)" }}
              />
            </div>
          ))}
          <div className="border-t border-gray-200" />
        </div>

        {/* Callout */}
        <div
          className="mt-16 rounded-2xl p-10 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)" }}
        >
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #D946EF)" }}
          />
          <div className="relative">
            <p className="text-2xl md:text-3xl font-black text-white leading-tight mb-4 max-w-2xl">
              The thread connecting all of it: stop treating sales comp as a back-office function.
            </p>
            <p className="text-white/60 text-lg mb-8 max-w-xl">
              Start treating it as behavioral engineering.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)" }}
            >
              Let's talk about your plan
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
