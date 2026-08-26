/*
 * Hero — case-study opener. Tag pills, title, highlighted subtext, metadata,
 * a glassmorphism ADOPT card on the right, and Opportunity + Problem cards
 * that frame the project below.
 */

const TAGS = ["UX Case Study", "Microsoft • Viva Engage"];
const META = [
  { label: "ROLE", value: "Senior Product Designer" },
  { label: "TEAM", value: "Cross-functional" },
];
const CONTEXT = [
  {
    title: "The Opportunity",
    body:
      "Microsoft launched Copilot into a market hungry for AI but unsure how to use it. Viva Engage was uniquely positioned to host the conversations that turn curiosity into capability.",
  },
  {
    title: "The Problem",
    body:
      "People discovered Copilot, then drifted away — no clear path from interest to habit, no sense of belonging or progress.",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="pb-section relative flex min-h-screen items-center px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(120,80,200,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(60,80,200,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div className="flex flex-col justify-center pb-reveal">
            <div className="flex flex-wrap gap-3">
              {TAGS.map((t) => (
                <span key={t} className="pb-tag">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="pb-h1 mt-8">Scaling Copilot Adoption</h1>

            <p className="pb-body mt-8 max-w-[540px]">
              How a behavior-led framework drove{" "}
              <span className="pb-accent">2.5–3× community growth</span>{" "}
              by transforming users from unaware to champions
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-[420px]">
              {META.map((m) => (
                <div key={m.label}>
                  <div className="pb-meta-label">{m.label}</div>
                  <div className="pb-meta-value mt-2">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — ADOPT glass card */}
          <div className="flex items-center justify-center pb-reveal pb-reveal--d2">
            <div className="pb-adopt-card pb-float relative w-full max-w-[560px] aspect-square overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-12">
                <div className="pb-adopt-word">ADOPT</div>
                <div className="pb-adopt-sub mt-4 text-center">
                  A Framework for<br />Behavior-Led Adoption
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Context cards — Opportunity + Problem */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CONTEXT.map((c) => (
            <article key={c.title} className="pb-card p-8 flex flex-col pb-reveal pb-reveal--d3">
              <h3 className="pb-h3">{c.title}</h3>
              <p className="pb-body mt-4">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
