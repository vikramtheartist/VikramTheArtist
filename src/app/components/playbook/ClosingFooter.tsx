/*
 * ClosingFooter — takeaways + signature quote + author.
 */

const TAKEAWAYS = [
  {
    title: "What Worked",
    body:
      "Champion-led storytelling, instrumented funnels, and rituals that gave the community a heartbeat.",
  },
  {
    title: "Next Plays",
    body:
      "Open ADOPT as a tenant-configurable playbook; productize champion matching; instrument outcome-level metrics by role.",
  },
];

export function ClosingFooter() {
  return (
    <section
      id="footer"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="pb-eyebrow text-center pb-reveal">Key Takeaways</div>
        <h2 className="pb-h2 mt-3 text-center pb-reveal pb-reveal--d1">From the journey</h2>

        <div className="pb-close-grid">
          {TAKEAWAYS.map((t, i) => (
            <article
              key={t.title}
              className={`pb-reveal pb-close-card${i === 1 ? " pb-reveal--d2" : " pb-reveal--d1"}`}
            >
              <div className="pb-close-card-label">{t.title}</div>
              <p className="pb-body">{t.body}</p>
            </article>
          ))}
        </div>

        {/* Quote */}
        <div className="pb-quote-wrap pb-reveal pb-reveal--d2">
          <div className="pb-close-rule" />
          <p className="pb-quote">
            Scaling adoption isn't about adding features —
            <br />
            <span className="pb-accent-bright">
              it's about designing systems that turn behavior into habit.
            </span>
          </p>
          <div className="mt-10 flex flex-col items-center gap-1">
            <div className="pb-author-name">Vikram Venkatesh</div>
            <div className="pb-author-role">
              Lead Product Designer • Microsoft Viva Engage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
