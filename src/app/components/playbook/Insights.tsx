/*
 * Insights — research takeaways with arrow markers.
 */

const INSIGHTS = [
  {
    lead: "Peers convert better than campaigns.",
    body:
      "Across 9 internal interviews, \"someone on my team uses it\" was the #1 reason people opened the Copilot community — outscoring launch emails, banners, and leadership posts combined.",
    shaped:
      "Shaped the Transform stage — badges, Top Members, and recognition surfaces that make champions visible inside the feed.",
  },
  {
    lead: "Habit locks in by the third interaction — or not at all.",
    body:
      "Engage telemetry showed members who completed three quality interactions in week one returned 4× more often. Below that threshold, users churned silently within 14 days.",
    shaped:
      "Shaped Open and Proficient — a four-task FRE for admins, plus Prompt of the Week to make returning the easiest thing to do.",
  },
  {
    lead: "Belonging retains — novelty doesn't.",
    body:
      "People stayed for communities that felt like theirs: recognised contributors, recurring rituals, shared language. Feature launches alone never moved retention in our cohorts.",
    shaped:
      "Treated tone, ritual, and recognition as core deliverables — not soft polish — across every stage of ADOPT.",
  },
  {
    lead: "Drop-offs tell you where to invest next.",
    body:
      "Each ADOPT stage owns a single metric — Reach, Demo signups, FRE completion, Feature adoption, Referrals. The biggest drop names the next play.",
    shaped:
      "ADOPT doubles as a measurement contract: every stage maps to a metric, so the funnel itself surfaces the next priority.",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="pb-eyebrow">Key Insights</div>
        <h2 className="pb-h2 mt-3 max-w-[820px]">
          Why communities <span className="pb-accent">go quiet</span> — and what
          brings them back
        </h2>
        <p className="pb-body mt-6 max-w-[720px]">
          9 internal interviews, telemetry across pilot tenants, and a
          comparison of active vs. dormant Viva Engage communities surfaced
          four findings that shaped every stage of ADOPT.
        </p>

        <ul className="mt-16 flex flex-col gap-8">
          {INSIGHTS.map((ins, i) => (
            <li key={ins.lead} className="pb-reveal pb-insight-item">
              <div className="pb-insight-index" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pb-insight-lead">{ins.lead}</div>
              <p className="pb-body mt-3 max-w-[720px]">{ins.body}</p>
              <p className="mt-4 max-w-[720px] text-sm">
                <span className="pb-accent font-medium">→ {ins.shaped}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
