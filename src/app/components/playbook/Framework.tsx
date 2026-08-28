/*
 * Framework — full-viewport ADOPT stage carousel with scroll-driven progression.
 */

import { useState } from "react";
import { ImpactSnapshot } from "./ImpactSnapshot";

type Initiative = {
  title: string;
  status: "implemented" | "future-scope";
  description?: string;
  image?: string;
  imagePlaceholder?: string;
};

type Stage = {
  letter: string;
  name: string;
  emoji: string;
  image?: string;
  state: string;
  description: string;
  task: { heading: string; emoji: string };
  methods: { title: string; desc: string }[];
  actorsMs: string[];
  actorsTenant: string[];
  milestone: string;
  metrics: string[];
  initiatives: Initiative[];
};

const STAGES: Stage[] = [
  {
    letter: "A",
    name: "Aware",
    emoji: "📣",
    image: "IMG/Aware.png",
    state: "Know about the community",
    description:
      "Key Principles: Cut through the noise with targeted, compelling messaging. Leverage multiple touchpoints where your users already are.",
    task: { heading: "Broadcast awareness", emoji: "📣" },
    methods: [
      { title: "In-Product Banners", desc: "Non-intrusive banners within relevant applications." },
      { title: "Email Marketing", desc: "Segmented campaigns with personalised subject lines, highlighting benefits and new features." },
      { title: "Leadership Communications", desc: "Top-down announcements from organisational leaders." },
      { title: "Micro-Content / Short-Form Video", desc: "15–30 second clips demonstrating quick wins on internal platforms." },
    ],
    actorsMs: [
      "Product Marketing & Sales",
      "Customer Success Managers",
      "Product, Design, Eng & Content Teams",
      "Comms & Social Teams",
    ],
    actorsTenant: ["Admins", "Internal Communications Team"],
    milestone: "Users see the community across multiple channels.",
    metrics: ["Reach", "Click through rate"],
    initiatives: [
      {
        title: "In-Product Banners",
        status: "implemented",
        description:
          "Cards in the FRE & Discover community ++ section(s) — created to make Members aware of the Copilot community across surfaces like Engage Admin Center, Teams Admin Center, Microsoft Admin Center, and Engage Discovery, so they could join the community.",
        imagePlaceholder: "Discover communities surface mockup",
      },
    ],
  },
  {
    letter: "D",
    name: "Desire",
    emoji: "❤️",
    image: "IMG/Desire.png",
    state: "Ignite interest to explore",
    description:
      "Key Principles: Focus on benefits, not just features. Show, don't just tell. Appeal to their immediate needs and aspirations.",
    task: { heading: "Cultivate Interest", emoji: "❤️" },
    methods: [
      { title: "Landing page", desc: "A dedicated page that clearly explains community benefits, member stories, and use cases—designed to spark interest and encourage exploration." },
      { title: "Take a tour sliders", desc: "Guided walkthroughs that highlight a unique benefit tailored to the user's role." },
      { title: "Benefit-Oriented Messaging", desc: "Action-driven messages that focus on how the product helps users complete tasks, not just what it does." },
      { title: "User Testimonials / Case Studies", desc: "Short, relatable stories from early users showing real impact on their work." },
      { title: "Interactive Demos / Simulations", desc: "Hands-on, low-risk experiences that let users explore key features while solving a specific problem." },
    ],
    actorsMs: [
      "Product Marketing & Sales",
      "Customer Success Managers",
      "Product, Design, Eng & Content Teams",
      "Comms & Social Teams",
    ],
    actorsTenant: [
      "Admins",
      "Internal Communications Team",
      "Community experts or Pilot Users",
    ],
    milestone: "User clicks on a demo or signs up for a pilot, visits the Landing page.",
    metrics: ["Demo signups", "Clicks on learn more"],
    initiatives: [
      {
        title: "Landing page",
        status: "implemented",
        description:
          "Explains the unique benefits and impacts of launching a verified Copilot community to increase user interest — including a section that surfaces testimonials and impact stories from organizations.",
        imagePlaceholder: "Viva Engage Copilot Community landing page mockup",
      },
      {
        title: "Take a tour sliders",
        status: "future-scope",
        description:
          "Guided in-product tour and \"Welcome to the new Copilot community\" tips carousel to walk new members through what the space offers.",
        imagePlaceholder: "Introducing communities tour + tips carousel mockup",
      },
    ],
  },
  {
    letter: "O",
    name: "Open",
    emoji: "🔓",
    image: "IMG/Open.png",
    state: "Take the first action",
    description:
      "Key Principles: Simplicity, clarity, and immediate gratification. Reduce cognitive load and provide clear pathways.",
    task: { heading: "Enable First Use", emoji: "🎯" },
    methods: [
      { title: "FRE & Guided Tours", desc: "Step-by-step guides that break down complex tasks and show users how to navigate key features." },
      { title: "Quick Start Guides / Cheat Sheets", desc: "Printable, easy-to-follow instructions for common tasks." },
      { title: "AI-Powered Onboarding Bots", desc: "Smart chatbots that answer setup questions and guide users in real time." },
      { title: "Single Sign-On (SSO) & Pre-configuration", desc: "Fast setup with pre-filled user data and one-click login." },
      { title: "In-Product Help & Tooltips", desc: "On-screen tips that explain features right when users need them." },
      { title: "Contextual Help", desc: "Support tailored to the user's current screen or task." },
    ],
    actorsMs: [
      "Support Teams / Copilot Assistants",
      "Customer Success Managers",
      "Product, Design, Eng & Content Teams",
    ],
    actorsTenant: [
      "Enablement Teams / Admin",
      "Helpdesk / Support Teams",
    ],
    milestone: "Admin completes onboarding or first task. Members make their first engagement — views, likes, or even a post.",
    metrics: ["Onboarding completion rates", "First-time usage"],
    initiatives: [
      {
        title: "Quick Start Guides / Cheat Sheets",
        status: "implemented",
        description:
          "First-run experience that pushes the admin to finish onboarding and complete the initial tasks — Pin resources, Add members, Review suggested content, Write a post — so the community gets the most out of it for members to utilise. Paired with bi-weekly content recommendations to admins.",
        imagePlaceholder: "Welcome to your new community FRE + Suggested content mockup",
      },
      {
        title: "FRE & Guided Tours",
        status: "future-scope",
        description:
          "Guided tours pointing to and explaining the community features — Review top questions, Start a conversation, What's new in the community — to push users to actively use the community.",
        imagePlaceholder: "Community guided tour tooltips mockup",
      },
    ],
  },
  {
    letter: "P",
    name: "Proficient",
    emoji: "⚙️",
    image: "IMG/Proficient.png",
    state: "Use it routinely",
    description:
      "Key Principles: Continuous learning, reinforcement, and addressing pain points. Encourage deeper engagement.",
    task: { heading: "Enable skill-building", emoji: "👑" },
    methods: [
      { title: "Automated Task Support", desc: "Copilot helps users complete repetitive or complex tasks by suggesting shortcuts, templates, or automation flows based on usage patterns." },
      { title: "Advanced Tutorials", desc: "In-depth sessions covering advanced features, tips, and best practices." },
      { title: "User Forums / Communities", desc: "Spaces for peer learning and Q&A (e.g., \"Copilot Adoption Community\" on Viva Engage)." },
      { title: "Knowledge Base / FAQs", desc: "Searchable self-help articles for quick answers and learning." },
      { title: "In-App Surveys / Feedback Prompts", desc: "Quick ways to gather user feedback and identify improvement areas." },
      { title: "Usage Analytics", desc: "Track user behavior to spot challenges and improve the experience." },
      { title: "Personalized Learning Paths", desc: "Suggested content based on user role or activity." },
    ],
    actorsMs: [
      "Training & Enablement Teams",
      "Community Managers",
      "Product, Design, Eng & Content Teams",
      "Data Analysts",
    ],
    actorsTenant: [
      "L&D Teams",
      "Power Users / Community experts",
      "Support Teams",
    ],
    milestone: "User uses 3+ core features regularly.",
    metrics: ["Feature adoption", "Session frequency"],
    initiatives: [
      {
        title: "Agentic Playbook — Copilot-Powered Content Suggestions",
        status: "implemented",
        description:
          "Role-relevant content ideas recommended to admins for easy publishing — helping users engage faster. Community agents draft suggested answers and admins approve, edit, or dismiss them from a single review surface.",
        imagePlaceholder: "Agentic playbook + AI-suggested answers review mockup",
      },
      {
        title: "Prompt First Threads — Prompt of the Week",
        status: "implemented",
        description:
          "Weekly community posts featuring a curated Copilot prompt. Members click the prompt card to launch Copilot Chat pre-loaded, and a recurring rhythm (paired with aka.ms/MyPromptOfTheWeek) keeps the community returning for fresh ideas.",
        imagePlaceholder: "Prompt of the Week post + Try in Copilot card mockup",
      },
      {
        title: "Usage Analytics",
        status: "implemented",
        description:
          "Viva Engage analytics dashboard surfacing reach, engagement, and post-by-post breakdowns for community campaigns — giving leaders impact summaries and tuning levers for the next play.",
        imagePlaceholder: "Viva Engage analytics dashboard mockup",
      },
    ],
  },
  {
    letter: "T",
    name: "Transform",
    emoji: "🚀",
    image: "IMG/Transform.png",
    state: "Become a champion",
    description:
      "Key Principles: Recognize power users, encourage sharing, and facilitate organic growth. Turn users into evangelists.",
    task: { heading: "Scale advocacy", emoji: "🚀" },
    methods: [
      { title: "Champions Programs", desc: "Empower users to lead, mentor, and advocate for the product." },
      { title: "User-Led Success Stories", desc: "Encourage users to share real impact through posts or videos." },
      { title: "Idea Submission", desc: "Ways for users to suggest new features or improvements through a feedback loop." },
      { title: "Community Spotlights", desc: "Highlight top contributors to inspire others." },
      { title: "Community-Driven Content", desc: "Let users share their own tutorials, templates, or tips." },
      { title: "Recognition & Rewards", desc: "Celebrate top contributors and innovators publicly." },
      { title: "Copilot-Generated Impact Reports", desc: "Summarize user contributions and usage highlights." },
    ],
    actorsMs: [
      "Training & Enablement Teams",
      "Community Managers",
      "Product, Design, Eng & Content Teams",
      "Data Analysts",
    ],
    actorsTenant: [
      "L&D Teams",
      "Power Users / Community experts",
      "Evangelists / Champions",
    ],
    milestone: "User becomes an advocate or innovator — sharing success stories, mentoring others, or contributing to product evolution.",
    metrics: ["Referrals", "Community contributions", "Mentoring or peer support activity"],
    initiatives: [
      {
        title: "Recognition & Rewards — Badges & Leaderboards",
        status: "implemented",
        description:
          "Earnable community badges (Curious Mind, Question Expert, First Post, Champion, Helper, Supportive, Active Contributor, Community Champion, Community Support) tied to member actions, surfaced on the member profile, alongside a Top Members leaderboard — recognising power users publicly and turning consistent contribution into status.",
        imagePlaceholder: "Member profile badges + Top Members + Community Badges grid mockup",
      },
    ],
  },
];

type Tab = "playbook" | "initiatives";

const STAGE_COLORS = ["#6f716b", "#b72210", "#d7c09c", "#2f468f", "#1f6a4d"];

export function Framework() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<Tab>("playbook");
  const [isExpanded, setIsExpanded] = useState(false);
  const stage = STAGES[active];
  const center = active;
  const left = (active + STAGES.length - 1) % STAGES.length;
  const right = (active + 1) % STAGES.length;

  const cleanPrinciples = (text: string) =>
    text.replace(/^Key Principles:\s*/i, "").trim();

  const openStage = (i: number) => {
    setActive(i);
    setTab("playbook");
    setIsExpanded(true);
  };

  const navigate = (direction: "next" | "prev") => {
    setTab("playbook");
    setActive((prev) => {
      return direction === "next"
        ? (prev + 1) % STAGES.length
        : (prev + STAGES.length - 1) % STAGES.length;
    });
  };

  return (
    <section
      id="framework"
      className="pb-section relative scroll-mt-24 md:scroll-mt-28 px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-24"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div>
          <div className="pb-eyebrow">The Playbook</div>
          <h2 className="pb-h2 mt-3 max-w-[820px]">
            A <span className="pb-accent">behavior-led playbook</span> called{" "}
            <span className="pb-accent-bright">ADOPT</span>
          </h2>
          <p className="pb-body mt-6 max-w-[940px]">
            Members didn&rsquo;t need more features; they needed <span className="pb-accent">value, belonging, and a reason to return</span>. ADOPT provides that path in five clear stages, turning first touchpoints into lasting champion behavior.
          </p>
        </div>

        {!isExpanded && (
          <div className="mt-10">
            <div className="grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-5">
              {STAGES.map((s, i) => (
                <button
                  key={s.letter}
                  type="button"
                  onClick={() => openStage(i)}
                  className="group relative min-h-[360px] border-r border-white/10 text-left last:border-r-0"
                  style={{ backgroundColor: STAGE_COLORS[i] }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.28) 100%)",
                    }}
                  />
                  <div className="relative z-10 p-4">
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-white/80">{s.letter}</div>
                    <div className="mt-2 text-sm font-semibold text-white">{s.name}</div>
                  </div>
                  {s.image && (
                    <img
                      src={`${import.meta.env.BASE_URL}${s.image}`}
                      alt={s.name}
                      className="absolute bottom-0 left-1/2 h-[88%] -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/65">Click a stage to expand details and explore Playbook or Initiatives.</p>
          </div>
        )}

        <div
          className={`overflow-hidden rounded-3xl border border-white/12 transition-all duration-500 ${
            isExpanded ? "mt-10 opacity-100" : "pointer-events-none mt-0 max-h-0 opacity-0"
          }`}
        >
          <div
            className="relative min-h-[280px] overflow-hidden md:min-h-[360px]"
            style={{
              background: `linear-gradient(110deg, ${STAGE_COLORS[active]} 0%, ${STAGE_COLORS[active]}CC 40%, #0b101d 100%)`,
            }}
          >
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="absolute left-4 top-4 z-20 rounded-full border border-white/35 bg-black/25 px-3 py-1 text-xs font-medium text-white transition hover:bg-black/40"
            >
              Back to all stages
            </button>

            <button
              type="button"
              aria-label="Previous stage"
              onClick={() => navigate("prev")}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/30 text-xl text-white transition hover:bg-black/45"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next stage"
              onClick={() => navigate("next")}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/30 text-xl text-white transition hover:bg-black/45"
            >
              →
            </button>

            <div className="grid h-full items-end gap-4 px-12 pb-4 pt-14 md:grid-cols-[1fr_1fr] md:px-16 md:pb-0">
              <div className="relative h-[220px] md:h-[320px]">
                {STAGES.map((s, i) => {
                  const role = i === center ? "center" : i === left ? "left" : i === right ? "right" : "far";
                  const roleStyle =
                    role === "center"
                      ? {
                          left: "50%",
                          opacity: 1,
                          transform: "translateX(-50%) scale(1)",
                          filter: "blur(0px)",
                          zIndex: 20,
                        }
                      : role === "left"
                      ? {
                          left: "24%",
                          opacity: 0.16,
                          transform: "translateX(-50%) scale(0.8)",
                          filter: "blur(3px)",
                          zIndex: 10,
                        }
                      : role === "right"
                      ? {
                          left: "76%",
                          opacity: 0.16,
                          transform: "translateX(-50%) scale(0.8)",
                          filter: "blur(3px)",
                          zIndex: 10,
                        }
                      : {
                          left: "50%",
                          opacity: 0,
                          transform: "translateX(-50%) scale(0.72)",
                          filter: "blur(6px)",
                          zIndex: 6,
                        };

                  return (
                    <img
                      key={s.letter}
                      src={`${import.meta.env.BASE_URL}${s.image}`}
                      alt=""
                      className="absolute bottom-0 h-full w-full object-contain"
                      style={{
                        transition:
                          "transform 560ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 560ms cubic-bezier(0.2, 0.8, 0.2, 1), left 560ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 560ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                        ...roleStyle,
                      }}
                    />
                  );
                })}
              </div>

              <div className="pb-4 text-white md:pb-10">
                <div className="text-xs font-semibold tracking-[0.2em] text-white/75">{stage.letter} · {stage.name.toUpperCase()}</div>
                <h3 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{stage.task.heading}</h3>
                <p className="mt-3 text-base text-white/85 md:max-w-[520px]">{cleanPrinciples(stage.description)}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f7f4ec] p-5 text-[#111827] md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setTab("playbook")}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  tab === "playbook"
                    ? "border-[#1b2430] bg-[#1b2430] text-white"
                    : "border-[#1b2430]/20 bg-white text-[#1b2430]"
                }`}
              >
                Playbook
              </button>
              <button
                onClick={() => setTab("initiatives")}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  tab === "initiatives"
                    ? "border-[#1b2430] bg-[#1b2430] text-white"
                    : "border-[#1b2430]/20 bg-white text-[#1b2430]"
                }`}
              >
                Initiatives in my project
                {stage.initiatives.length > 0 && (
                  <span className="ml-2 rounded-full bg-[#d6f14a] px-2 py-[1px] text-xs font-semibold text-[#10151d]">
                    {stage.initiatives.length}
                  </span>
                )}
              </button>
            </div>

            {tab === "playbook" && (
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">
                  {stage.name.toUpperCase()} STAGE · {stage.task.heading} {stage.task.emoji}
                </h3>
                <p className="mt-2 text-base text-[#1f2937]">{stage.state}</p>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {stage.methods.map((m) => (
                    <div
                      key={m.title}
                      className="rounded-xl border border-[#111827]/12 bg-white px-4 py-3 text-sm font-medium text-[#111827]"
                    >
                      {m.title}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-base text-[#1f2937]">
                  <span className="font-semibold text-[#0f172a]">Key Principles:</span>{" "}
                  {cleanPrinciples(stage.description)}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#4b5563]">MILESTONE</p>
                  <p className="mt-2 text-base text-[#1f2937]">{stage.milestone}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#4b5563]">METRICS TO TRACK</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {stage.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="rounded-full border border-[#111827]/15 bg-white px-3 py-1 text-xs font-medium text-[#111827]"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "initiatives" && (
              <div className="mt-6">
                {stage.initiatives.length === 0 ? (
                  <div className="rounded-2xl border border-[#111827]/12 bg-white p-8 text-center">
                    <div className="text-xl font-semibold">Coming soon</div>
                    <p className="mt-2 text-[#374151]">
                      Initiatives for the {stage.name} stage will appear here as they ship.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {stage.initiatives.map((ini) => (
                      <div key={ini.title} className="rounded-2xl border border-[#111827]/12 bg-white p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-lg font-semibold text-[#111827]">{ini.title}</span>
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${
                              ini.status === "implemented"
                                ? "bg-[#dcfce7] text-[#166534]"
                                : "bg-[#fef3c7] text-[#92400e]"
                            }`}
                          >
                            {ini.status === "implemented" ? "Implemented" : "Future Scope"}
                          </span>
                        </div>

                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">
                          {ini.description && <p className="text-sm leading-relaxed text-[#374151]">{ini.description}</p>}
                          {ini.image ? (
                            <img
                              src={`${import.meta.env.BASE_URL}${ini.image}`}
                              alt={ini.title}
                              className="pb-initiative-image"
                            />
                          ) : ini.imagePlaceholder ? (
                            <div className="pb-initiative-placeholder">
                              <span>{ini.imagePlaceholder}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 pb-card p-6 flex items-center gap-3 flex-wrap">
          <span className="pb-accent font-semibold">Transform</span>
          <span className="pb-body">adoption from</span>
          <span className="pb-from">one-time activity</span>
          <span className="pb-arrow-sm">→</span>
          <span className="pb-to">a continuous behavior loop</span>
        </div>

        {/* Impact proof-point — moved below explorer so intro flows directly into the framework */}
        <div className="mt-10 md:mt-12">
          <ImpactSnapshot />
        </div>
      </div>
    </section>
  );
}
