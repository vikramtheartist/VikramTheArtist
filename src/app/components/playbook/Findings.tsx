/*
 * Findings — merged research summary that combines challenge + insights into
 * one concise "what users actually wanted" section and translates signals into
 * concrete UX action items.
 */

const RESEARCH_SIGNALS = [
  {
    num: "01",
    title: "Low Discovery",
    body:
      "Users found communities by accident. Discovery needed to happen inside real work moments, not through broad campaigns.",
  },
  {
    num: "02",
    title: "No Engagement Loop",
    body:
      "After first visit, there was no clear next step. Generic prompts and silent threads made people drop off quickly.",
  },
  {
    num: "03",
    title: "Hidden Proof of Value",
    body:
      "Power users created value but stayed invisible. New members lacked role models, social proof, and reasons to return.",
  },
];

const UX_ACTIONS = [
  {
    num: "01",
    theme: "Peer Proof Over Campaigns",
    insight:
      "People trusted teammates more than launch comms.",
    action:
      "Make champions visible in-feed and convert wins into reusable community patterns.",
    ships: [
      "Top Members module with role-aware proof points",
      "Weekly spotlight format for real prompts + outcomes",
    ],
    metric: "Champion-driven interactions per week",
  },
  {
    num: "02",
    theme: "Three Interactions Create Habit",
    insight:
      "Retention rose sharply when users completed three quality actions in week one.",
    action:
      "Design a guided first-run experience that gets users to a meaningful third interaction quickly.",
    ships: [
      "4-step first-run checklist for admins and members",
      "Prompt of the Week to make return behavior easy",
    ],
    metric: "3-action completion rate in first 7 days",
  },
  {
    num: "03",
    theme: "Belonging Beats Novelty",
    insight:
      "Communities retained users through rituals, language, and recognition, not one-off feature drops.",
    action:
      "Treat tone and ritual as product surfaces, not content polish.",
    ships: [
      "Recurring ritual posts with fixed cadence",
      "Recognition moments mapped across the adoption journey",
    ],
    metric: "Weekly return rate and contribution depth",
  },
  {
    num: "04",
    theme: "Drop-Offs Define Priority",
    insight:
      "The largest stage drop consistently showed where design investment had to go next.",
    action:
      "Bind each journey stage to one decision metric and use that signal to drive the backlog.",
    ships: [
      "Stage scorecard: Reach, Demo, FRE, Adoption, Referrals",
      "Monthly review that auto-prioritises the biggest drop",
    ],
    metric: "Largest stage-drop delta month over month",
  },
];

export function Findings() {
  return (
    <section
      id="findings"
      className="pb-section relative overflow-hidden px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="relative mx-auto w-full max-w-[1100px]">
        <div className="relative text-center">
          <div className="pb-role-ghost mx-auto">FINDINGS</div>
        </div>
        <div className="-mt-8 md:-mt-12 flex flex-col items-center text-center">
          <div className="pb-phase-pill">
            <span className="pb-phase-dot" />
            Research Findings · Voice of the User
          </div>
          <h2 className="pb-h2 mt-6 max-w-[780px]">
            What users <span className="pb-accent">actually</span> wanted
          </h2>
          <p className="pb-body mt-5 max-w-[640px]">
            We combined interview and telemetry evidence into one decision
            frame: people do not change through features alone. They change
            through clear guidance, social proof, and repeatable behavior
            loops.
          </p>
        </div>

        <div className="mt-8 mx-auto max-w-[820px] text-center">
          <p className="pb-body">
            Research conclusion: the gap was not a feature gap. It was a
            system gap. Different people adopt in different ways, so the
            experience needed a structured journey that supports discovery,
            first value, and return behavior over time.
          </p>
        </div>

        <div className="mt-14">
          <div className="pb-eyebrow">What We Saw</div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {RESEARCH_SIGNALS.map((signal) => (
              <article key={signal.num} className="pb-reveal pb-challenge-card flex flex-col">
                <span className="pb-challenge-ghost" aria-hidden>{signal.num}</span>
                <div className="pb-challenge-num">{signal.num}</div>
                <h3 className="pb-h3 mt-8">{signal.title}</h3>
                <p className="pb-body mt-4">{signal.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-18">
          <div className="pb-eyebrow">UX Action Items</div>
          <div className="mt-6 flex flex-col gap-6">
            {UX_ACTIONS.map((item) => (
              <article key={item.num} className="pb-reveal project-card pb-work-card flex rounded-[32px] overflow-hidden">
                <div className="project-card-text pb-work-card__text flex flex-col justify-between">
                  <div>
                    <div className="pb-work-card__kicker">Action {item.num}</div>
                    <h3 className="project-card-title pb-work-card__title">{item.theme}</h3>
                    <p className="pb-body mt-3"><span className="pb-accent">Signal:</span> {item.insight}</p>
                    <p className="pb-body mt-2"><span className="pb-accent">UX action:</span> {item.action}</p>
                  </div>
                </div>

                <aside className="pb-work-card__side">
                  <div className="pb-work-card__side-label">What to ship</div>
                  <ul className="pb-work-card__ship-list">
                    {item.ships.map((ship) => (
                      <li key={ship}>{ship}</li>
                    ))}
                  </ul>
                  <div className="pb-work-card__metric-label">Success metric</div>
                  <p className="pb-work-card__metric">{item.metric}</p>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
