/*
 * Vision — high-level strategic approach and goal statement.
 * Sets up "scale Copilot adoption through an official community in
 * Viva Engage" before the Challenge dives into why that's hard.
 */

export function Vision() {
  return (
    <section
      id="vision"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(160,120,220,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1080px]">
        <div className="pb-eyebrow">My Approach</div>
        <h2 className="pb-h2 mt-3 max-w-[840px]">
          Scale Copilot adoption through an{" "}
          <span className="pb-accent">official community</span> in Viva Engage
        </h2>

        <p className="pb-body mt-6 max-w-[680px]">
          Treat community as the product — a single, verified place where
          Copilot users learn from each other, ask questions, and watch
          champions emerge.
        </p>

        {/* Goal statement — focal quote */}
        <div className="pb-vision-block pb-reveal">
          <div className="pb-meta-label">GOAL</div>
          <p className="pb-vision-goal mt-4">
            Empower every organization&rsquo;s Copilot journey through a{" "}
            <span className="pb-accent-bright">one-click Copilot community</span>{" "}
            that drives learning, feedback, and adoption at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
