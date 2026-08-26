/*
 * Challenge — three numbered cards spelling out what wasn't working.
 */

const CHALLENGES = [
  {
    num: "01",
    title: "Low Discovery",
    body:
      "Communities lived deep in navigation and got found by accident. Members needed help inside the moments they were stuck — not through emails, banners, or word-of-mouth.",
  },
  {
    num: "02",
    title: "No Engagement",
    body:
      "Once inside, posts went unanswered, prompts felt generic, and threads died within hours. There was no clear next step, so members rarely returned for a second visit.",
  },
  {
    num: "03",
    title: "Hidden Value",
    body:
      "The few power users carrying communities stayed invisible. Their wins, prompts, and patterns never surfaced — leaving newcomers without role models or proof the space was worth showing up to.",
  },
];

export function Challenge() {
  return (
    <section
      id="challenge"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="pb-eyebrow">The Challenge</div>
        <h2 className="pb-h2 mt-3 max-w-[820px]">
          Despite AI buzz, Copilot community adoption{" "}
          <span className="pb-accent">remained low</span> in Viva Engage
        </h2>
        <p className="pb-body mt-6 max-w-[760px]">
          The Copilot community inherited the same gravity that pulls every
          Viva Engage community toward silence — three problems that compound
          on each other.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CHALLENGES.map((c) => (
            <article key={c.num} className="pb-reveal pb-challenge-card flex flex-col">
              <span className="pb-challenge-ghost" aria-hidden>{c.num}</span>
              <div className="pb-challenge-num">{c.num}</div>
              <h3 className="pb-h3 mt-8">{c.title}</h3>
              <p className="pb-body mt-4">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
