import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  onBack: () => void;
}

/* ── Data ─────────────────────────────────────────────────────── */

const STAGE_DETAILS = [
  {
    letter: "A",
    name: "Aware",
    emoji: "👋",
    pose: "adopt_aware.png",
    accent: "rgb(110,160,255)",
    state: "Know about the community",
    intent: "Create awareness and promote the existence of your product or feature.",
    what: {
      definition:
        "Awareness is the essential first step in adoption. If users are unaware of a feature or product, all other efforts to engage or convert them are ineffective.",
      quote: { text: "You can't sell a secret.", author: "Seth Godin" },
    },
    through: {
      principle:
        "Cut through the noise with targeted, compelling messaging. Leverage multiple touchpoints where your users already are.",
      methods: [
        { title: "In-Product Banners", desc: "Non-intrusive banners surfaced within relevant applications." },
        { title: "Email Marketing", desc: "Segmented campaigns with personalised subject lines highlighting benefits and new features." },
        { title: "Leadership Communications", desc: "Top-down announcements from organisational leaders." },
        { title: "Micro-Content / Short Video", desc: "15–30 second clips demonstrating quick wins on internal channels." },
      ],
    },
    task: {
      heading: "Broadcast awareness",
      headingEmoji: "📣",
      actorsMs: [
        "Product Marketing & Sales",
        "Customer Success Managers",
        "Product, Design, Eng & Content Teams",
        "Comms & Social Teams",
      ],
      actorsTenant: ["Admins", "Internal Communications Team"],
      milestone: "Users see the community across multiple channels.",
      metrics: ["Reach", "Click-through rate"],
    },
    implementation: {
      story:
        "Created a multi-channel awareness campaign targeting admins across Microsoft’s ecosystem to drive discovery of the Copilot Adoption Community.",
      initiatives: [
        {
          title: "In-Product Banners",
          did: "Designed and deployed banners within Microsoft Admin Center, Viva Engage Admin Center, and Teams Admin Center.",
          impact:
            "Promoted awareness to admins about the Copilot community and enabled one-click launch of verified copilot communities in their organisation.",
          note: "Entry points across admin centers with clear CTAs.",
        },
        {
          title: "Email Marketing Campaigns",
          did: "Launched segmented email campaigns with personalised subject lines targeting different admin personas.",
          impact: "Reached 50K+ admins with tailored messaging highlighting benefits and quick wins.",
          note: "Email templates with progressive disclosure.",
        },
      ],
    },
  },
  {
    letter: "D",
    name: "Desire",
    emoji: "❤️",
    pose: "adopt_desire.png",
    accent: "rgb(255,120,160)",
    state: "Ignite interest to explore",
    intent: "Build emotional connection and desire to engage with the product or community.",
    what: {
      definition:
        "Desire converts curiosity into intent. People move forward when they can see themselves succeeding with the product — not when they’re told it works.",
      quote: { text: "People don’t buy what you do; they buy why you do it.", author: "Simon Sinek" },
    },
    through: {
      principle:
        "Make value visible. Surface real outcomes from peers and curate moments that tie product capability to everyday work.",
      methods: [
        { title: "Success Stories", desc: "Curated narratives from real users showing tangible wins in their workflows." },
        { title: "Prompt of the Week", desc: "Lightweight, repeatable content that gives a reason to try something today." },
        { title: "Peer Spotlights", desc: "Community members shown solving familiar problems with the product." },
        { title: "Use-Case Galleries", desc: "Role-based collections that help users see themselves in the value." },
      ],
    },
    task: {
      heading: "Ignite curiosity",
      headingEmoji: "💞",
      actorsMs: [
        "Product Marketing",
        "Customer Success",
        "Community Managers",
        "Content Designers",
      ],
      actorsTenant: ["Champions", "Adoption Leads"],
      milestone: "Users move from “heard about it” to “want to try it”.",
      metrics: ["Engagement on stories", "Saves / shares", "Profile visits"],
    },
    implementation: {
      story:
        "Designed a curation system inside the Copilot Adoption Community to surface real value moments and peer success — pulling curiosity into intent.",
      initiatives: [
        {
          title: "Curated Success Stories",
          did: "Built a weekly story format featuring real employees solving real tasks with Copilot, tagged by role and scenario.",
          impact: "Created a steady stream of relatable proof that drove community visits and prompt saves.",
          note: "Story templates designed for skim-readable layouts.",
        },
        {
          title: "Prompt of the Week",
          did: "Designed a lightweight, repeatable prompt unit shown across CAC, with categorised, role-based variants.",
          impact: "Gave hesitant users a low-effort first step — and a reason to come back next week.",
          note: "Rhythm > volume — one strong prompt beats five generic ones.",
        },
      ],
    },
  },
  {
    letter: "O",
    name: "Open",
    emoji: "🧭",
    pose: "adopt_open.png",
    accent: "rgb(140,130,255)",
    state: "Start getting value",
    intent: "Enable users to access and start getting real value from the product.",
    what: {
      definition:
        "The first interaction is the conversion gate. If users don’t reach a quick, meaningful win, they leave — regardless of how much awareness or desire was built.",
      quote: { text: "The first ten minutes decide the next ten years.", author: "Onboarding adage" },
    },
    through: {
      principle:
        "Reduce time-to-first-value. Design guided, just-in-time interactions that make the first success feel effortless.",
      methods: [
        { title: "Just-in-Time Nudges", desc: "Context-aware prompts that appear inside the user’s existing workflow." },
        { title: "Guided First Tasks", desc: "Pre-built micro-flows that walk users to a tangible outcome in under two minutes." },
        { title: "Smart Defaults", desc: "Pre-selected, role-relevant prompts so users never face a blank screen." },
        { title: "Quick-Wins Library", desc: "A curated set of one-tap prompts that produce visible value immediately." },
      ],
    },
    task: {
      heading: "Open the value door",
      headingEmoji: "🧭",
      actorsMs: [
        "Product Designers",
        "Engineering",
        "Onboarding Specialists",
        "Customer Success",
      ],
      actorsTenant: ["End Users", "Power Users"],
      milestone: "Users complete their first meaningful Copilot action.",
      metrics: ["Time-to-first-value", "First-action completion", "Return within 7 days"],
    },
    implementation: {
      story:
        "Designed the first-run experience inside the Copilot Adoption Community to remove friction and put a meaningful win within reach in the first session.",
      initiatives: [
        {
          title: "Bell-Notification Nudges",
          did: "Designed contextual notification prompts that surfaced relevant Copilot actions inside the user’s current workflow.",
          impact: "Cut time-to-first-value sharply and increased return visits in the first week.",
          note: "Nudge fatigue avoided through frequency capping and dismissal memory.",
        },
        {
          title: "Quick-Win Prompt Library",
          did: "Curated and shipped a role-aware library of one-tap prompts inside CAC, tied to common admin and employee tasks.",
          impact: "Lowered the cost of trying — users went from zero prompts to a saved prompt in one session.",
          note: "Each prompt was a single-tap entry, not a tutorial.",
        },
      ],
    },
  },
  {
    letter: "P",
    name: "Proficient",
    emoji: "👑",
    pose: "adopt_proficient.png",
    accent: "rgb(255,200,80)",
    state: "Engage in the community",
    intent: "Help users become competent and expert through engagement and practice.",
    what: {
      definition:
        "Proficiency forms only when usage repeats with rising confidence. Single moments don’t create habit — closed loops do.",
      quote: { text: "We are what we repeatedly do.", author: "Will Durant" },
    },
    through: {
      principle:
        "Design engagement loops, not events. Make the next useful action obvious and the next visit feel earned.",
      methods: [
        { title: "Weekly Content Cadence", desc: "A predictable rhythm of themes, prompts, and conversations across the community." },
        { title: "Campaign-Driven Activities", desc: "Multi-week challenges that turn one-time use into repeated practice." },
        { title: "Conversation Prompts", desc: "Structured discussion starters that invite contribution, not just consumption." },
        { title: "Skill Pathways", desc: "Tiered tracks that reveal the next capability once a user has mastered the previous." },
      ],
    },
    task: {
      heading: "Build everyday fluency",
      headingEmoji: "👑",
      actorsMs: [
        "Community Managers",
        "Content Designers",
        "Customer Success",
        "Product Marketing",
      ],
      actorsTenant: ["Power Users", "Champions", "Team Leads"],
      milestone: "Users engage repeatedly and grow capability week over week.",
      metrics: ["Repeat-engagement frequency", "Active days per week", "Depth of use"],
    },
    implementation: {
      story:
        "Built the engagement engine for the Copilot Adoption Community — turning isolated prompts into multi-week behaviour loops with measurable depth.",
      initiatives: [
        {
          title: "Weekly Theme Cadence",
          did: "Designed a posting rhythm tied to each ADOPT stage — every week the community led with a new theme and a clear contribution path.",
          impact: "Drove a 2.4× lift in repeat-engagement frequency and gave admins a calendar they could trust.",
          note: "Cadence beats volume — a steady drumbeat outperformed bursts.",
        },
        {
          title: "Campaign-Driven Challenges",
          did: "Designed multi-week campaigns with role-relevant tasks, social proof loops, and embedded prompts.",
          impact: "Active days per week rose +48% within CAC cohorts during campaign windows.",
          note: "Light competition + visible peer progress = sustained return.",
        },
      ],
    },
  },
  {
    letter: "T",
    name: "Transform",
    emoji: "🚀",
    pose: "adopt_transform.png",
    accent: "rgb(255,140,120)",
    state: "Pillar for the community",
    intent: "Empower users to become pillars of the community and advocates for others.",
    what: {
      definition:
        "Sustained adoption needs social reinforcement, not solo discipline. Pillars convert their own habit into momentum for everyone around them.",
      quote: { text: "The best way to learn is to teach.", author: "Frank Oppenheimer" },
    },
    through: {
      principle:
        "Surface advocates, give them tools to teach, and make impact visible. Turn proficiency into community leverage.",
      methods: [
        { title: "Champions & Advocates", desc: "Identified pillars given visibility, recognition, and lightweight tooling." },
        { title: "Peer-Led Learning", desc: "Sessions and content authored by community members, not just Microsoft." },
        { title: "Analytics for Admins", desc: "Dashboards that quantify compound effect and reveal where to invest next." },
        { title: "Advocacy Toolkit", desc: "Pre-built assets so advocates can teach others without starting from zero." },
      ],
    },
    task: {
      heading: "Turn habit into leverage",
      headingEmoji: "🚀",
      actorsMs: [
        "Community Managers",
        "Customer Success",
        "Product Analytics",
        "Research",
      ],
      actorsTenant: ["Champions", "Pillars", "Admins"],
      milestone: "Users teach, advocate, and lift the people around them.",
      metrics: ["Advocacy ratio", "Peer-influenced activations", "Long-term retention"],
    },
    implementation: {
      story:
        "Designed a community-driven learning system where users learn, share, and reinforce usage with each other — turning advocates into pillars.",
      initiatives: [
        {
          title: "Champion Program",
          did: "Built recognition, surfacing, and lightweight tools for identified champions across the Copilot Adoption Community.",
          impact: "Sustained Copilot usage rose +30–35% in cohorts touched by champion-led activity.",
          note: "Visibility + tooling — not perks — made the difference.",
        },
        {
          title: "Admin Analytics Dashboard",
          did: "Designed an admin-facing analytics view that made compound effect of community activity legible — surfacing where to invest next.",
          impact: "Gave admins the proof and the next step they needed to keep investing in the community.",
          note: "Measure compound effect, not single posts.",
        },
      ],
    },
  },
] as const;

type StageDetail = (typeof STAGE_DETAILS)[number];

const INSIGHTS = [
  { title: "Continuity beats launch",  body: "Users try Copilot once but don't return. Adoption fails without an ongoing reason to come back." },
  { title: "Admins lack the tools",    body: "Sustaining adoption took high manual effort — creating drop-off and inconsistent rollouts." },
  { title: "Social learning works",    body: "Peer-driven discovery and shared moments lifted usage more than top-down enablement." },
  { title: "Freshness drives return",  body: "Static systems lose relevance fast. A content cadence brings people back week after week." },
];

const PRINCIPLES = [
  { title: "Visible, guided, repeatable", body: "Adoption surfaces should be easy to find, easy to follow, and easy to repeat." },
  { title: "Design for participation",    body: "Build for contribution and conversation — not passive consumption." },
  { title: "Lower effort, raise contribution", body: "Every friction point shaved off is one more chance for someone to engage." },
  { title: "Reinforce through loops",     body: "Single touchpoints fade; closed loops compound into habit." },
];

const SOLUTIONS = [
  {
    letter: "A", stage: "Aware",
    approach: "Surfaced the Copilot Adoption Community across high-intent surfaces — Admin Center, in-product entry points, and discovery moments inside Engage.",
    why: "Adoption has to be visible where decisions actually happen.",
    outcome: "CAC recognised as the central entry point for AI adoption.",
  },
  {
    letter: "D", stage: "Desire",
    approach: "Showcased value moments through curated prompts, success stories, and tangible use-cases tied to everyday work.",
    why: "Curiosity converts to commitment when people see themselves in the value.",
    outcome: "More users moved from “heard about it” to “want to try”.",
  },
  {
    letter: "O", stage: "Open",
    approach: "Designed guided first interactions and just-in-time prompts so the first Copilot use was effortless and rewarding.",
    why: "The first value moment is the conversion gate for sustained use.",
    outcome: "Faster time-to-first-value across new community members.",
  },
  {
    letter: "P", stage: "Proficient",
    approach: "Built engagement loops — prompt-based conversations, a weekly content cadence, and campaign-driven activities.",
    why: "Proficiency only forms when usage repeats with rising confidence.",
    outcome: "A significant increase in engagement frequency and depth.",
  },
  {
    letter: "T", stage: "Transform",
    approach: "Created a community-driven learning system where users learn, share, and reinforce usage with each other — turning advocates into pillars.",
    why: "Sustained adoption needs social reinforcement, not solo discipline.",
    outcome: "+30–35% lift in Copilot usage and long-term habit formation.",
  },
];

const LEARNINGS = {
  worked: [
    "Community + structure equals scalable adoption",
    "Reducing admin effort unlocked organic growth",
    "Repeat loops compounded into measurable habit shifts",
  ],
  didnt: [
    "Awareness alone didn’t sustain usage",
    "Surface integration needed to go deeper into workflows",
    "Generic journeys missed nuance for different tenant maturities",
  ],
  next: [
    "Personalised adoption journeys based on maturity",
    "Embed ADOPT deeper into product surfaces",
    "Extend the framework to other Copilot scenarios",
  ],
};

const CONTRIBUTION = [
  "Developed the ADOPT framework to scale adoption as a system",
  "Led end-to-end UX and strategy for the Copilot Adoption Community",
  "Defined adoption as a continuous behaviour loop, not a launch activity",
  "Aligned PM, research, content, and engineering on measurable adoption loops",
];

/* ── Reveal-on-scroll wrapper ─────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  style,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("cs-revealed");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      // @ts-ignore
      ref={ref}
      className={`cs-reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export function CaseStudyAdopt({ onBack }: Props) {
  useEffect(() => {
    const prev = document.title;
    document.title = "Scaling Copilot Adoption · Vikram";
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, []);

  return (
    <div
      className="cs-page"
      style={{
        background: "#070a16",
        minHeight: "100vh",
        color: "white",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Style />
      <BgAtmosphere />
      <Topbar onBack={onBack} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <TLDR />
        <ChallengeGoal />        {/* 01 · The adoption problem */}
        <BehaviourFunnel />      {/*    + Behaviour funnel visual */}
        <BeforeAfter />          {/* 02 · Why existing approaches failed */}
        <Solution />             {/* 03 · A behaviour-led framework */}
        <Framework />            {/* 04 · How ADOPT works */}
        <Surfaces />             {/* 05 · Across product surfaces */}
        <Solutions />            {/* 06 · ADOPT in the Copilot Adoption Community */}
        <Decisions />            {/* 07 · Key decisions & trade-offs */}
        <Impact />               {/* 08 · Impact */}
        <Toolkit />              {/* 09 · ADOPT toolkit */}
        <Learnings />            {/* 10 · Reflection & next plays */}
        <Contribution />         {/* 11 · My contribution */}
        <WhyThisMatters />       {/* 12 · Why this matters */}
        <Closing />
        <FooterBack onBack={onBack} />
      </main>
    </div>
  );
}

/* ── Shared CSS ────────────────────────────────────────────────── */

function Style() {
  return (
    <style>{`
      .cs-page * { box-sizing: border-box; }

      .cs-reveal {
        opacity: 0;
        transform: translateY(28px);
        transition:
          opacity 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .cs-reveal.cs-revealed { opacity: 1; transform: translateY(0); }

      .cs-eyebrow {
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(197, 220, 75, 0.85);
        font-weight: 500;
        margin: 0;
      }
      .cs-h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: clamp(2.4rem, 5vw, 4rem);
        line-height: 1.1;
        background: linear-gradient(180deg, #ffffff 0%, #c8cce0 55%, #8890b0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
      }
      .cs-h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: clamp(1.8rem, 3.4vw, 2.4rem);
        line-height: 1.2;
        background: linear-gradient(180deg, #ffffff 0%, #d0d4ec 50%, #9098c0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0 0 32px 0;
      }
      .cs-body {
        font-family: 'Inter', sans-serif;
        font-size: 17px;
        line-height: 1.75;
        color: rgba(255,255,255,0.78);
        margin: 0;
      }

      .cs-card {
        background: linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 100%);
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 18px;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
      }
      .cs-card--accent { border-top: 1px solid rgba(197,220,75,0.30); }

      .cs-chip {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 9px 18px;
        border-radius: 9999px;
        font-size: 13px;
        line-height: 1;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.08);
      }
      .cs-chip--accent {
        background: rgba(197,220,75,0.05);
        border-color: rgba(197,220,75,0.25);
      }

      .cs-section {
        max-width: 920px;
        margin: 0 auto;
        padding: 110px 32px 0;
      }
      .cs-section--wide { max-width: 1120px; }

      .cs-2col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        align-items: start;
      }
      @media (max-width: 820px) {
        .cs-2col { grid-template-columns: 1fr; }
      }

      .cs-stages {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0;
        align-items: start;
      }
      .cs-stage {
        padding: 0 18px;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .cs-stage:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 22px;
        right: 0;
        bottom: 22px;
        width: 1px;
        background: linear-gradient(180deg, transparent 0%, rgba(197,220,75,0.32) 50%, transparent 100%);
      }
      .cs-stage-icon {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
        border: 1px solid rgba(255,255,255,0.10);
        box-shadow: 0 10px 32px var(--stage-glow, transparent), inset 0 1px 0 rgba(255,255,255,0.10);
      }
      .cs-stage-letter {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 0.28em;
        color: rgba(197,220,75,0.95);
        margin-bottom: 6px;
      }
      .cs-stage-name {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: white;
        margin: 0 0 12px;
        letter-spacing: -0.005em;
      }
      .cs-stage-desc {
        font-size: 13px;
        line-height: 1.55;
        color: rgba(255,255,255,0.6);
        margin: 0;
        max-width: 160px;
      }

      .cs-outcome {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 16px;
        border-radius: 9999px;
        font-size: 13px;
        line-height: 1;
        color: rgba(220, 235, 175, 0.95);
        background: rgba(197,220,75,0.06);
        border: 1px solid rgba(197,220,75,0.26);
      }
      .cs-outcome::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #c5dc4b;
        box-shadow: 0 0 10px rgba(197,220,75,0.55);
      }

      .cs-letter {
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 64px;
        line-height: 1;
        color: rgba(197,220,75,0.95);
        text-shadow: 0 6px 24px rgba(197,220,75,0.18);
      }

      @media (max-width: 900px) {
        .cs-stages { grid-template-columns: 1fr; gap: 26px; }
        .cs-stage { padding: 0; }
        .cs-stage:not(:last-child)::after { display: none; }
        .cs-stage-desc { max-width: none; }
      }
      @media (max-width: 720px) {
        .cs-section { padding: 80px 22px 0; }
      }

      /* ── Interactive ADOPT framework · chevron flow ─────────── */

      .adopt-strip {
        position: relative;
        display: flex;
        margin: 0 0 14px;
        padding: 0;
        background: transparent;
        border: none;
      }

      .adopt-stage {
        position: relative;
        flex: 1;
        padding: 18px 28px 18px 24px;
        border: none;
        background: rgba(255,255,255,0.025);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 4px;
        color: rgba(255,255,255,0.78);
        cursor: pointer;
        opacity: 0.7;
        transition:
          opacity 0.45s ease,
          background 0.45s ease,
          color 0.45s ease;
        font-family: 'Inter', sans-serif;
        clip-path: polygon(
          0% 0%,
          calc(100% - 14px) 0%,
          100% 50%,
          calc(100% - 14px) 100%,
          0% 100%,
          14px 50%
        );
      }
      .adopt-stage:first-child {
        clip-path: polygon(
          0% 0%,
          calc(100% - 14px) 0%,
          100% 50%,
          calc(100% - 14px) 100%,
          0% 100%
        );
        padding-left: 20px;
      }
      .adopt-stage:last-child {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 100%,
          0% 100%,
          14px 50%
        );
        padding-right: 20px;
      }
      .adopt-stage:not(:first-child) {
        margin-left: -14px;
      }
      .adopt-stage:hover {
        opacity: 0.92;
        background: rgba(255,255,255,0.045);
      }
      .adopt-stage.is-active {
        opacity: 1;
        background:
          linear-gradient(180deg,
            color-mix(in srgb, var(--accent) 18%, rgba(255,255,255,0.06)) 0%,
            color-mix(in srgb, var(--accent) 8%, rgba(255,255,255,0.03)) 100%);
        color: white;
        z-index: 2;
      }
      .adopt-stage:hover,
      .adopt-stage.is-active { z-index: 1; }
      .adopt-stage.is-active { z-index: 2; }

      .adopt-stage-pose-wrap {
        width: 100%;
        aspect-ratio: 1 / 1.15;
        max-height: 132px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        overflow: hidden;
      }
      .adopt-stage-pose {
        max-height: 100%;
        max-width: 70%;
        object-fit: contain;
        opacity: 0.85;
        transition:
          transform 0.45s cubic-bezier(0.34,1.4,0.64,1),
          opacity 0.45s ease;
      }
      .adopt-stage:hover .adopt-stage-pose { opacity: 1; transform: translateY(-2px) scale(1.03); }
      .adopt-stage.is-active .adopt-stage-pose { opacity: 1; transform: translateY(-1px) scale(1.04); }

      .adopt-stage-name {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: inherit;
        letter-spacing: -0.003em;
        margin-top: 8px;
      }
      .adopt-stage-state {
        font-size: 11px;
        color: rgba(255,255,255,0.45);
        line-height: 1.35;
      }
      .adopt-stage.is-active .adopt-stage-state {
        color: rgba(255,255,255,0.75);
      }

      /* ── Connector + Detail panel ────────────────────────────── */

      .adopt-detail {
        position: relative;
        margin-top: 12px;
        padding: 44px 44px 48px;
        border-radius: 22px;
        background: rgba(255,255,255,0.022);
        border: 1px solid rgba(255,255,255,0.07);
        backdrop-filter: blur(14px) saturate(1.2);
        -webkit-backdrop-filter: blur(14px) saturate(1.2);
        animation: adoptFadeIn 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both;
      }
      /* Connector tip — slides between active tile centers (flex+overlap math) */
      .adopt-detail::before {
        content: '';
        position: absolute;
        top: -7px;
        left: calc(
          10%
          + 20% * var(--active-idx, 0)
          + 5.6px
          - 2.8px * var(--active-idx, 0)
        );
        width: 12px;
        height: 12px;
        background: rgba(255,255,255,0.022);
        border-top: 1px solid rgba(255,255,255,0.07);
        border-left: 1px solid rgba(255,255,255,0.07);
        transform: translateX(-50%) rotate(45deg);
        backdrop-filter: blur(14px) saturate(1.2);
        -webkit-backdrop-filter: blur(14px) saturate(1.2);
        transition: left 0.55s cubic-bezier(0.34, 1.4, 0.64, 1);
      }

      .adopt-detail-hero {
        margin-bottom: 28px;
        max-width: 760px;
      }
      .adopt-detail-name {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: clamp(2.2rem, 3.8vw, 3rem);
        line-height: 1.05;
        color: white;
        margin: 0 0 10px;
        letter-spacing: -0.022em;
      }
      .adopt-detail-intent {
        font-size: 16px;
        line-height: 1.55;
        color: rgba(255,255,255,0.68);
        margin: 0;
        max-width: 640px;
      }

      /* Tabs — refined underline style */
      .adopt-tabs {
        display: flex;
        gap: 28px;
        border-bottom: 1px solid rgba(255,255,255,0.07);
        margin-bottom: 36px;
      }
      .adopt-tab {
        position: relative;
        padding: 10px 0;
        border: none;
        background: transparent;
        color: rgba(255,255,255,0.42);
        font-family: 'Poppins', sans-serif;
        font-size: 10.5px;
        font-weight: 500;
        letter-spacing: 0.20em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.25s ease;
      }
      .adopt-tab:hover { color: rgba(255,255,255,0.78); }
      .adopt-tab.is-active { color: white; }
      .adopt-tab.is-active::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        height: 2px;
        border-radius: 2px;
        background: var(--accent);
      }

      /* Tab content */
      .adopt-tab-panel { position: relative; }
      .adopt-tab-fade { animation: adoptFadeIn 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both; }
      @keyframes adoptFadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .adopt-section-label {
        font-family: 'Poppins', sans-serif;
        font-size: 10.5px;
        font-weight: 500;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.40);
        margin: 0 0 14px;
      }

      /* Definition intro */
      .adopt-def-intro {
        max-width: 780px;
        margin: 0 0 56px;
      }
      .adopt-definition {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: clamp(1.15rem, 1.5vw, 1.35rem);
        line-height: 1.55;
        color: rgba(255,255,255,0.92);
        margin: 0 0 26px;
        letter-spacing: -0.008em;
      }
      .adopt-quote {
        font-family: 'Merriweather', serif;
        font-style: italic;
        font-size: 16px;
        line-height: 1.55;
        color: rgba(255,255,255,0.72);
        margin: 0;
        padding-left: 20px;
        border-left: 2px solid var(--accent);
      }
      .adopt-quote-author {
        color: rgba(255,255,255,0.45);
        font-style: normal;
        font-family: 'Inter', sans-serif;
        font-size: 13.5px;
        letter-spacing: 0.01em;
      }

      /* Section blocks */
      .adopt-block {
        margin-bottom: 56px;
      }
      .adopt-block:last-child { margin-bottom: 0; }
      .adopt-block-head {
        margin-bottom: 24px;
      }
      .adopt-block-lead {
        font-size: 16px;
        line-height: 1.55;
        color: rgba(255,255,255,0.72);
        margin: 0;
        max-width: 720px;
      }

      /* Method cards — Microsoft-style 4-up grid */
      .adopt-method-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
      }
      .adopt-method-card {
        position: relative;
        padding: 22px 22px 24px;
        border-radius: 14px;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.06);
        transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
      }
      .adopt-method-card:hover {
        background: rgba(255,255,255,0.04);
        border-color: rgba(255,255,255,0.12);
        transform: translateY(-2px);
      }
      .adopt-method-num {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 11px;
        letter-spacing: 0.18em;
        color: var(--accent);
        display: block;
        margin-bottom: 14px;
      }
      .adopt-method-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 15.5px;
        line-height: 1.3;
        color: white;
        margin: 0 0 8px;
        letter-spacing: -0.005em;
      }
      .adopt-method-desc {
        font-size: 13.5px;
        line-height: 1.5;
        color: rgba(255,255,255,0.58);
        margin: 0;
      }

      /* Task panel */
      .adopt-task-heading {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: clamp(1.4rem, 2vw, 1.7rem);
        line-height: 1.2;
        color: white;
        margin: 0;
        letter-spacing: -0.012em;
      }
      .adopt-task-panel {
        border-radius: 16px;
        background: rgba(255,255,255,0.022);
        border: 1px solid rgba(255,255,255,0.06);
        overflow: hidden;
      }
      .adopt-task-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding: 26px 28px;
      }
      .adopt-task-row--bordered {
        border-top: 1px solid rgba(255,255,255,0.06);
      }
      .adopt-task-cell { min-width: 0; }
      .adopt-actor-sublabel {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.38);
        margin: 0 0 12px;
      }
      .adopt-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .adopt-list li {
        font-size: 14.5px;
        color: rgba(255,255,255,0.82);
        line-height: 1.45;
      }
      .adopt-milestone-body {
        font-size: 15.5px;
        color: white;
        margin: 0;
        font-weight: 500;
        line-height: 1.45;
      }
      .adopt-metric-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .adopt-metric-chip {
        display: inline-flex;
        align-items: center;
        padding: 6px 12px;
        border-radius: 9999px;
        font-size: 12.5px;
        color: rgba(255,255,255,0.88);
        background: rgba(255,255,255,0.035);
        border: 1px solid rgba(255,255,255,0.10);
      }

      /* Implementation tab */
      .adopt-story {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: clamp(1.05rem, 1.4vw, 1.2rem);
        line-height: 1.6;
        color: rgba(255,255,255,0.85);
        margin: 0 0 36px;
        max-width: 760px;
        letter-spacing: -0.005em;
      }
      .adopt-init-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .adopt-init {
        display: grid;
        grid-template-columns: 48px 1fr;
        gap: 20px;
        padding: 26px 28px;
        border-radius: 14px;
        background: rgba(255,255,255,0.022);
        border: 1px solid rgba(255,255,255,0.06);
        transition: background 0.25s ease, border-color 0.25s ease;
      }
      .adopt-init:hover {
        background: rgba(255,255,255,0.035);
        border-color: rgba(255,255,255,0.12);
      }
      .adopt-init-number {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 24px;
        color: rgba(255,255,255,0.30);
        line-height: 1;
        padding-top: 2px;
        letter-spacing: -0.01em;
      }
      .adopt-init-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 17px;
        color: white;
        margin: 0 0 16px;
        letter-spacing: -0.005em;
      }
      .adopt-init-label {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.36);
        margin: 0 0 5px;
      }
      .adopt-init-text {
        font-size: 14.5px;
        line-height: 1.55;
        color: rgba(255,255,255,0.80);
        margin: 0 0 14px;
      }
      .adopt-init-text:last-child { margin-bottom: 0; }

      /* ── Responsive ───────────────────────────────────────────── */
      @media (max-width: 1080px) {
        .adopt-method-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 900px) {
        .adopt-strip {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .adopt-stage {
          flex: 0 0 152px;
          scroll-snap-align: start;
          padding: 14px 22px 14px 20px;
        }
        .adopt-stage:first-child { padding-left: 18px; }
        .adopt-stage:last-child { padding-right: 18px; }
        .adopt-detail { padding: 32px 24px 36px; }
        .adopt-detail::before { display: none; }
        .adopt-task-row { grid-template-columns: 1fr; gap: 22px; padding: 22px 24px; }
        .adopt-init { grid-template-columns: 1fr; gap: 8px; padding: 22px 24px; }
      }
      @media (max-width: 640px) {
        .adopt-stage { flex: 0 0 138px; }
        .adopt-method-grid { grid-template-columns: 1fr; }
        .adopt-tabs { gap: 22px; }
      }
    `}</style>
  );
}

/* ── Background atmosphere ─────────────────────────────────────── */

function BgAtmosphere() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-15%",
        width: "70vw",
        height: "70vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(100,130,255,0.10) 0%, rgba(80,60,200,0.06) 30%, transparent 62%)",
        filter: "blur(70px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-15%",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(150,90,220,0.08) 0%, rgba(60,80,180,0.05) 35%, transparent 62%)",
        filter: "blur(80px)",
      }} />
    </div>
  );
}

/* ── Top bar ───────────────────────────────────────────────────── */

function Topbar({ onBack }: { onBack: () => void }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{ padding: "22px 32px" }}
    >
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,0.75)",
          fontSize: "13px",
          letterSpacing: "0.04em",
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          padding: "8px 14px 8px 4px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          transition: "color 0.25s ease, transform 0.25s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateX(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.transform = "translateX(0)"; }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        Back to portfolio
      </button>
      <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
        Case Study · ADOPT
      </span>
    </nav>
  );
}

/* ── Hero ──────────────────────────────────────────────────────── */

function Hero() {
  const proofChips = [
    { value: "+30–35%", label: "sustained Copilot usage" },
    { value: "CAC",     label: "as adoption engine (admins → employees)" },
    { value: "5-stage", label: "behaviour loop across surfaces" },
  ];

  const handleJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="cs-section cs-section--wide" style={{ paddingTop: "170px" }}>
      <Reveal as="p" className="cs-eyebrow" style={{ marginBottom: "22px" }}>
        Case Study · ADOPT
      </Reveal>

      {/* HOOK — punchy memorable line */}
      <Reveal as="h1" style={{ margin: "0 0 18px", maxWidth: "1100px" }}>
        <span style={{
          display: "block",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--text-1)",
        }}>
          ADOPT — behaviour systems that scale Copilot adoption.
        </span>
      </Reveal>

      {/* Surfaces label — instantly signals real product context */}
      <Reveal delay={70} style={{ marginBottom: "44px" }}>
        <p style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          margin: 0,
          padding: "8px 16px",
          borderRadius: "9999px",
          border: "1px solid var(--border-soft)",
          background: "var(--surface-soft)",
          fontSize: "12.5px",
          color: "var(--text-3)",
          letterSpacing: "0.04em",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px rgba(197,220,75,0.55)" }} />
          Adoption loop across surfaces
          <span style={{ color: "var(--text-4)" }}>→</span>
          <span style={{ color: "var(--text-2)" }}>Engage · Admin · Campaigns · Community</span>
        </p>
      </Reveal>

      {/* Two-line narrative hook */}
      <Reveal delay={110}>
        <h2 style={{
          fontFamily: "'Merriweather', serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
          lineHeight: 1.25,
          color: "var(--text-1)",
          margin: "0 0 22px",
          maxWidth: "880px",
        }}>
          Copilot launched. Curiosity spiked.{" "}
          <span style={{
            background: "linear-gradient(180deg, #c8d4ff 0%, #9098d0 55%, #5a6498 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Then usage flatlined.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <p className="cs-body" style={{ maxWidth: "740px", margin: "0 0 14px" }}>
          We weren’t failing at building features. We were failing at getting people to use them.
        </p>
        <p className="cs-body" style={{ maxWidth: "740px", marginBottom: "40px" }}>
          So I reframed adoption as the product — and designed a system to turn intent into habit.
        </p>
      </Reveal>

      {/* Role · duration · uplift meta line */}
      <Reveal delay={180}>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "var(--text-2)",
            margin: "0 0 30px",
          }}
        >
          Lead Product Designer
          <span style={{ color: "var(--text-4)", margin: "0 12px" }}>·</span>
          6–9 months
          <span style={{ color: "var(--text-4)", margin: "0 12px" }}>·</span>
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>+30–35% sustained Copilot usage</span>
        </p>
      </Reveal>

      {/* Primary CTAs */}
      <Reveal delay={220}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "44px" }}>
          <a
            href="#framework"
            onClick={handleJump("framework")}
            className="shine-wrap"
            style={{ textDecoration: "none" }}
          >
            <span
              className="shine-inner"
              style={{
                padding: "12px 26px",
                fontSize: "13.5px",
                color: "var(--text-1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              Explore the system
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </span>
          </a>
          <a
            href="#impact"
            onClick={handleJump("impact")}
            style={{
              padding: "12px 24px",
              fontSize: "13.5px",
              color: "var(--text-2)",
              borderRadius: "9999px",
              border: "1px solid var(--border-soft)",
              background: "transparent",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "color 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-1)";
              e.currentTarget.style.borderColor = "var(--border-strong)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-2)";
              e.currentTarget.style.borderColor = "var(--border-soft)";
            }}
          >
            See outcomes
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </Reveal>

      {/* Proof bar — kept as small chips */}
      <Reveal delay={260}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "38px" }}>
          {proofChips.map((p, i) => (
            <span
              key={p.value}
              className={i === 0 ? "cs-chip cs-chip--accent" : "cs-chip"}
              style={{ gap: "12px" }}
            >
              <span
                style={{
                  color: i === 0 ? "var(--accent)" : "var(--text-1)",
                  fontWeight: 600,
                  letterSpacing: i === 0 ? "-0.005em" : "0.04em",
                  fontSize: i === 0 ? "14px" : "12.5px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {p.value}
              </span>
              <span style={{ color: "var(--text-3)", fontSize: "13px" }}>{p.label}</span>
            </span>
          ))}
        </div>
      </Reveal>

      {/* Micro before/after strip — instant transformation read */}
      <Reveal delay={300}>
        <div
          className="cs-card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            padding: 0,
            overflow: "hidden",
            maxWidth: "880px",
          }}
        >
          <div style={{ padding: "20px 24px" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#e8a374", margin: "0 0 12px" }}>
              Before
            </p>
            <p style={{ fontSize: "14.5px", color: "var(--text-2)", margin: 0, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              Curiosity
              <span style={{ color: "var(--text-4)" }}>→</span>
              <span style={{ color: "var(--text-3)" }}>Drop-off</span>
            </p>
          </div>
          <div style={{
            padding: "20px 24px",
            borderTop: "1px solid var(--border-soft)",
            background: "linear-gradient(180deg, rgba(197,220,75,0.05) 0%, rgba(197,220,75,0.01) 100%)",
          }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 12px" }}>
              After
            </p>
            <p style={{ fontSize: "14.5px", color: "var(--text-1)", margin: 0, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              Curiosity
              <span style={{ color: "var(--text-4)" }}>→</span>
              Loop
              <span style={{ color: "var(--text-4)" }}>→</span>
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>Habit ✓</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── TL;DR strip ───────────────────────────────────────────────── */

function TLDR() {
  const items = [
    { label: "Problem",   value: "Curiosity wasn’t converting to sustained Copilot usage." },
    { label: "Who",       value: "Admins, comms leads, and AI-curious employees." },
    { label: "What I built", value: "ADOPT — a 5-stage behaviour system mapped to real surfaces." },
    { label: "Impact",    value: "+30–35% lift in sustained usage across CAC cohorts.", accent: true },
    { label: "Leadership", value: "Reframed adoption as the product. Aligned PM / research / engineering." },
  ];
  return (
    <section className="cs-section cs-section--wide" style={{ paddingTop: "0" }}>
      <Reveal>
        <div
          className="cs-card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            padding: "8px",
          }}
        >
          {items.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "20px 22px",
                borderLeft: i === 0 ? "none" : "1px solid var(--border-soft)",
              }}
            >
              <p
                style={{
                  fontSize: "10.5px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-4)",
                  margin: "0 0 8px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.45,
                  margin: 0,
                  color: s.accent ? "var(--accent)" : "var(--text-1)",
                  fontWeight: s.accent ? 500 : 400,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ── Section heading helper ────────────────────────────────────── */

function SectionHead({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <Reveal style={{ marginBottom: "32px", textAlign: center ? "center" : undefined }}>
      <p className="cs-eyebrow" style={{ marginBottom: "14px" }}>{eyebrow}</p>
      <h2 className="cs-h2" style={{ marginBottom: 0 }}>{title}</h2>
    </Reveal>
  );
}

/* ── Challenge + Goal (combined) ────────────────────────────────── */

const OBSERVATIONS = [
  {
    label: "Users",
    items: ["Tried Copilot once — didn’t return", "Struggled to find consistent value"],
  },
  {
    label: "Admins",
    items: ["High effort to drive engagement", "No scalable way to sustain adoption"],
  },
  {
    label: "Organisation",
    items: ["Adoption was treated as a launch", "No system to reinforce behaviour"],
  },
];

const SHIFT_FROM = [
  "Adoption as a moment",
  "Passive learning",
  "Fragmented experiences",
];
const SHIFT_TO = [
  "Adoption as a system",
  "Guided journeys",
  "Continuous behaviour loops",
];

function ChallengeGoal() {
  return (
    <section className="cs-section cs-section--wide">
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "32px" }}>01 · The adoption problem</p>
      </Reveal>

      <Reveal>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "var(--text-1)",
            margin: "0 0 22px",
            maxWidth: "980px",
          }}
        >
          Adoption stalled — despite the AI momentum.
        </h2>
      </Reveal>

      <Reveal>
        <p className="cs-body" style={{ maxWidth: "780px", marginBottom: "56px", fontSize: "clamp(1.05rem, 1.4vw, 1.18rem)", lineHeight: 1.65 }}>
          The Copilot Adoption Community (CAC) in Viva Engage saw strong early interest. But that
          interest didn’t turn into sustained usage.
        </p>
      </Reveal>

      {/* What we observed — three columns */}
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "20px", color: "var(--text-4)" }}>
          What we observed
        </p>
      </Reveal>
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
          marginBottom: "44px",
        }}
      >
        {OBSERVATIONS.map((col) => (
          <div key={col.label} className="cs-card" style={{ padding: "26px 28px" }}>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "var(--text-1)",
                margin: "0 0 16px",
              }}
            >
              {col.label}
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.items.map((it) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14.5px",
                    lineHeight: 1.55,
                    color: "var(--text-3)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "9px",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "var(--text-4)",
                    }}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      {/* Insight callout */}
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "18px 24px",
            borderRadius: "14px",
            border: "1px solid rgba(197,220,75,0.28)",
            background: "linear-gradient(180deg, rgba(197,220,75,0.06) 0%, rgba(255,255,255,0.005) 100%)",
            marginBottom: "72px",
            maxWidth: "880px",
          }}
        >
          <span style={{ fontSize: "18px" }}>💡</span>
          <p style={{ margin: 0, fontSize: "16px", color: "var(--text-1)", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>
            The drop-off wasn’t surprising — it was predictable.
          </p>
        </div>
      </Reveal>

      {/* The real problem */}
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "20px", color: "var(--text-4)" }}>
          The real problem
        </p>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
            lineHeight: 1.35,
            color: "var(--text-2)",
            margin: "0 0 56px",
            maxWidth: "920px",
            letterSpacing: "-0.005em",
          }}
        >
          Adoption wasn’t failing because of features. It was failing because it lacked{" "}
          <span style={{ color: "var(--text-1)", fontWeight: 500 }}>structure</span> and{" "}
          <span style={{ color: "var(--text-1)", fontWeight: 500 }}>continuity</span>.
        </p>
      </Reveal>

      {/* The shift — From / To */}
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "20px", color: "var(--text-4)" }}>
          The shift
        </p>
      </Reveal>
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
          marginBottom: "48px",
        }}
      >
        <div className="cs-card" style={{ padding: "26px 28px" }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#e8a374",
            margin: "0 0 18px",
          }}>
            From
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {SHIFT_FROM.map((it) => (
              <li key={it} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "var(--text-3)" }}>
                <span style={{ color: "#e8a374" }}>✕</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cs-card"
          style={{
            padding: "26px 28px",
            borderTop: "1px solid rgba(197,220,75,0.35)",
            background: "linear-gradient(180deg, rgba(197,220,75,0.06) 0%, rgba(255,255,255,0.005) 100%)",
          }}
        >
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: "0 0 18px",
          }}>
            To
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {SHIFT_TO.map((it) => (
              <li key={it} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "var(--text-1)" }}>
                <span style={{ color: "var(--accent)" }}>✓</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Outcome strip */}
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "20px", color: "var(--text-4)" }}>
          Outcome
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
            fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            color: "var(--text-3)",
            margin: 0,
            letterSpacing: "-0.005em",
          }}
        >
          <span>curiosity</span>
          <span style={{ color: "var(--text-4)" }}>→</span>
          <span style={{ color: "var(--text-2)" }}>first value</span>
          <span style={{ color: "var(--text-4)" }}>→</span>
          <span style={{ color: "var(--text-1)" }}>repeat usage</span>
          <span style={{ color: "var(--text-4)" }}>→</span>
          <span style={{ color: "var(--accent)" }}>habit ✓</span>
        </div>
      </Reveal>
    </section>
  );
}

/* ── The Solution (intro to ADOPT) ─────────────────────────────── */

function Solution() {
  return (
    <section className="cs-section cs-section--wide">
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "32px" }}>03 · The Solution</p>
      </Reveal>

      <Reveal>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
            margin: "0 0 36px",
            maxWidth: "880px",
          }}
        >
          A behaviour-led framework
        </h2>
      </Reveal>

      {/* Thesis pair */}
      <Reveal>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
            lineHeight: 1.35,
            color: "var(--text-3)",
            margin: "0 0 8px",
            maxWidth: "880px",
            letterSpacing: "-0.005em",
          }}
        >
          Adoption isn’t a feature.
        </p>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
            lineHeight: 1.35,
            color: "var(--text-1)",
            margin: "0 0 32px",
            maxWidth: "880px",
            letterSpacing: "-0.005em",
          }}
        >
          It’s a system of behaviours.
        </p>
      </Reveal>

      <Reveal>
        <p
          className="cs-body"
          style={{
            fontSize: "clamp(1.05rem, 1.45vw, 1.25rem)",
            lineHeight: 1.6,
            color: "var(--text-3)",
            margin: "0 0 56px",
            maxWidth: "780px",
          }}
        >
          I designed{" "}
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              borderRadius: "6px",
              background: "var(--surface-soft)",
              border: "1px solid var(--border-strong)",
              color: "var(--text-1)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              fontSize: "0.92em",
            }}
          >
            ADOPT
          </span>{" "}
          to make adoption{" "}
          <span style={{ color: "var(--text-1)", fontWeight: 500 }}>visible, guided, and repeatable</span>{" "}
          — wired into real product surfaces.
        </p>
      </Reveal>

      <Reveal>
        <div style={{ height: "1px", background: "var(--border-soft)", margin: "0 0 40px" }} />
      </Reveal>

      {/* ADOPT → A continuous behaviour loop */}
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "20px", color: "var(--text-4)" }}>
          ADOPT → A continuous behaviour loop
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
            padding: "12px 22px",
            borderRadius: "9999px",
            background: "var(--surface-soft)",
            border: "1px solid var(--border-soft)",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            color: "var(--text-2)",
            letterSpacing: "0.01em",
            flexWrap: "wrap",
          }}
        >
          <span>One-time activation</span>
          <svg width="22" height="10" viewBox="0 0 24 10" fill="none">
            <path d="M2 5h18M14 1l6 4-6 4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>Sustained usage</span>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Framework ─────────────────────────────────────────────────── */

const TABS = [
  { id: "playbook",       label: "Playbook" },
  { id: "implementation", label: "Implementation" },
] as const;
type TabId = (typeof TABS)[number]["id"];

function Framework() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<TabId>("playbook");
  const stage = STAGE_DETAILS[activeIdx];

  return (
    <section id="framework" className="cs-section cs-section--wide">
      <SectionHead eyebrow="04 · Framework" title="Adoption is a system, not a feature" />
      <Reveal>
        <p className="cs-body" style={{ marginBottom: "36px", maxWidth: "720px" }}>
          ADOPT is the framework I developed to move enterprise adoption from one-time activation
          into a continuous behaviour loop.
          <span style={{ color: "var(--text-3)" }}> Tap a stage to expand.</span>
        </p>
      </Reveal>

      {/* ── Stage journey strip ───────────────────────────────────── */}
      <Reveal>
        <div className="adopt-strip" role="tablist" aria-label="ADOPT stages">
          {STAGE_DETAILS.map((s, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={s.letter}
                role="tab"
                aria-selected={isActive}
                className={`adopt-stage${isActive ? " is-active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                <div className="adopt-stage-pose-wrap">
                  <img className="adopt-stage-pose" src={`/IMG/${s.pose}`} alt="" aria-hidden />
                </div>
                <div className="adopt-stage-name">{s.name}</div>
                <div className="adopt-stage-state">{s.state}</div>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* ── Expandable detail panel ───────────────────────────────── */}
      <Reveal>
        <div
          className="adopt-detail"
          key={stage.letter}
          style={{ ["--active-idx" as never]: activeIdx }}
        >
          <div className="adopt-detail-hero">
            <h3 className="adopt-detail-name">{stage.name}</h3>
            <p className="adopt-detail-intent">{stage.intent}</p>
          </div>

          <div className="adopt-tabs" role="tablist" aria-label={`${stage.name} sections`}>
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTab === t.id}
                onClick={() => setActiveTab(t.id)}
                className={`adopt-tab${activeTab === t.id ? " is-active" : ""}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="adopt-tab-panel" key={`${stage.letter}-${activeTab}`}>
            {activeTab === "playbook" && <TabDefinition stage={stage} />}
            {activeTab === "implementation" && <TabImpl stage={stage} />}
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: "44px", display: "flex", justifyContent: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "14px",
          padding: "10px 22px", borderRadius: "9999px",
          background: "rgba(197,220,75,0.04)",
          border: "1px solid rgba(197,220,75,0.20)",
          fontSize: "12px", color: "rgba(220,235,175,0.85)", letterSpacing: "0.08em",
        }}>
          <span>One-time activation</span>
          <svg width="22" height="10" viewBox="0 0 24 10" fill="none">
            <path d="M2 5h18M14 1l6 4-6 4" stroke="rgba(197,220,75,0.75)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Continuous behaviour loop</span>
        </div>
      </Reveal>

      {/* Behaviour gap → Design response table */}
      <Reveal style={{ marginTop: "72px" }}>
        <p className="cs-eyebrow" style={{ marginBottom: "12px", color: "var(--text-4)" }}>
          Each stage solves a specific behavioural gap
        </p>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.4rem, 2vw, 1.7rem)",
            lineHeight: 1.3,
            color: "var(--text-1)",
            margin: "0 0 28px",
            letterSpacing: "-0.005em",
          }}
        >
          Adoption is a system — not a feature.
        </h3>
      </Reveal>

      <Reveal>
        <div className="cs-card" style={{ overflow: "hidden" }}>
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px minmax(180px, 1fr) minmax(220px, 1.4fr)",
              gap: "20px",
              padding: "16px 28px",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-4)" }}>
              Stage
            </span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-4)" }}>
              Behaviour gap
            </span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-4)" }}>
              Design response
            </span>
          </div>

          {[
            { letter: "A", gap: "“Where do I start?”",   resp: "Surface entry points in high-intent surfaces." },
            { letter: "D", gap: "“What can I do?”",      resp: "Guided prompts and curated discovery." },
            { letter: "O", gap: "“How do I succeed?”",   resp: "Pre-built campaigns and playbooks." },
            { letter: "P", gap: "“Why come back?”",      resp: "Engagement loops and content cadence." },
            { letter: "T", gap: "“Why stay?”",           resp: "Community-driven learning and reinforcement." },
          ].map((row, i, arr) => (
            <div
              key={row.letter}
              style={{
                display: "grid",
                gridTemplateColumns: "60px minmax(180px, 1fr) minmax(220px, 1.4fr)",
                gap: "20px",
                padding: "20px 28px",
                borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--border-soft)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "22px",
                  color: "var(--accent)",
                  letterSpacing: "0.02em",
                }}
              >
                {row.letter}
              </span>
              <span
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "15.5px",
                  color: "var(--text-2)",
                  lineHeight: 1.4,
                }}
              >
                {row.gap}
              </span>
              <span style={{ fontSize: "15px", color: "var(--text-1)", lineHeight: 1.5 }}>
                {row.resp}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ── Framework · Tab panels ────────────────────────────────────── */

function TabDefinition({ stage }: { stage: StageDetail }) {
  return (
    <div className="adopt-tab-fade">
      {/* Definition block */}
      <div className="adopt-def-intro">
        <p className="adopt-definition">{stage.what.definition}</p>
        <p className="adopt-quote">
          “{stage.what.quote.text}”
          <span className="adopt-quote-author"> — {stage.what.quote.author}</span>
        </p>
      </div>

      {/* Methods — 4-card horizontal grid (Microsoft-style) */}
      <div className="adopt-block">
        <div className="adopt-block-head">
          <p className="adopt-section-label">Through · Methods</p>
          <p className="adopt-block-lead">{stage.through.principle}</p>
        </div>
        <div className="adopt-method-grid">
          {stage.through.methods.map((m, i) => (
            <div key={m.title} className="adopt-method-card">
              <span className="adopt-method-num">{String(i + 1).padStart(2, "0")}</span>
              <p className="adopt-method-title">{m.title}</p>
              <p className="adopt-method-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task — structured info panel */}
      <div className="adopt-block">
        <div className="adopt-block-head">
          <p className="adopt-section-label">Task</p>
          <h4 className="adopt-task-heading">{stage.task.heading}</h4>
        </div>

        <div className="adopt-task-panel">
          <div className="adopt-task-row">
            <div className="adopt-task-cell">
              <p className="adopt-actor-sublabel">Actors — Microsoft</p>
              <ul className="adopt-list">
                {stage.task.actorsMs.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="adopt-task-cell">
              <p className="adopt-actor-sublabel">Actors — Tenant</p>
              <ul className="adopt-list">
                {stage.task.actorsTenant.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>

          <div className="adopt-task-row adopt-task-row--bordered">
            <div className="adopt-task-cell">
              <p className="adopt-actor-sublabel">Milestone</p>
              <p className="adopt-milestone-body">{stage.task.milestone}</p>
            </div>
            <div className="adopt-task-cell">
              <p className="adopt-actor-sublabel">Metrics to track</p>
              <div className="adopt-metric-row">
                {stage.task.metrics.map((m) => (
                  <span key={m} className="adopt-metric-chip">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabImpl({ stage }: { stage: StageDetail }) {
  return (
    <div className="adopt-tab-fade">
      <p className="adopt-story">{stage.implementation.story}</p>
      <p className="adopt-section-label" style={{ marginBottom: "16px" }}>
        Initiatives executed
      </p>
      <div className="adopt-init-list">
        {stage.implementation.initiatives.map((init, i) => (
          <div key={init.title} className="adopt-init">
            <span className="adopt-init-number" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h5 className="adopt-init-title">{init.title}</h5>
              <p className="adopt-init-label">What I did</p>
              <p className="adopt-init-text">{init.did}</p>
              <p className="adopt-init-label">Impact</p>
              <p className="adopt-init-text">{init.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Discovery ─────────────────────────────────────────────────── */

function Discovery() {
  return (
    <section className="cs-section">
      <SectionHead eyebrow="04 · Discovery" title="What the data revealed" />
      <Reveal>
        <p className="cs-body" style={{ marginBottom: "32px" }}>
          Through usage analysis, funnel breakdowns, community behaviour patterns, and stakeholder
          interviews, four insights consistently surfaced.
        </p>
      </Reveal>
      <Reveal style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "18px",
      }}>
        {INSIGHTS.map((i, idx) => (
          <div key={i.title} className="cs-card" style={{ padding: "26px 28px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "10px" }}>
              <span style={{
                fontSize: "11px", color: "rgba(197,220,75,0.8)",
                letterSpacing: "0.18em", fontFamily: "'Poppins', sans-serif",
              }}>
                0{idx + 1}
              </span>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "18px", color: "white", margin: 0 }}>
                {i.title}
              </h3>
            </div>
            <p className="cs-body" style={{ fontSize: "15px" }}>{i.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Principles ────────────────────────────────────────────────── */

function Principles() {
  return (
    <section className="cs-section">
      <SectionHead eyebrow="05 · Principles" title="Four rules that shaped every decision" />
      <Reveal style={{ display: "flex", flexDirection: "column" }}>
        {PRINCIPLES.map((p, idx) => (
          <div key={p.title} style={{
            display: "flex", alignItems: "flex-start", gap: "20px",
            padding: "22px 4px",
            borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 200,
              fontSize: "30px", lineHeight: 1,
              color: "rgba(197,220,75,0.65)", minWidth: "48px",
            }}>
              0{idx + 1}
            </span>
            <div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "18px", color: "white", margin: "0 0 6px" }}>
                {p.title}
              </h3>
              <p className="cs-body" style={{ fontSize: "15px" }}>{p.body}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Solutions ─────────────────────────────────────────────────── */

function Solutions() {
  return (
    <section className="cs-section">
      <SectionHead eyebrow="06 · Solutions" title="ADOPT applied to the Copilot Adoption Community" />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {SOLUTIONS.map((s) => (
          <Reveal key={s.letter}>
            <div className="cs-card cs-card--accent" style={{
              display: "grid",
              gridTemplateColumns: "minmax(120px, 140px) 1fr",
              gap: "30px", padding: "32px 34px",
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <div className="cs-letter">{s.letter}</div>
                <div style={{
                  fontSize: "11px", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "rgba(197,220,75,0.85)",
                }}>{s.stage}</div>
              </div>
              <div>
                <p style={{
                  fontSize: "11px", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.42)",
                  margin: "0 0 10px",
                }}>Approach</p>
                <p className="cs-body" style={{ marginBottom: "16px" }}>{s.approach}</p>
                <p style={{ margin: "0 0 20px", fontStyle: "italic", color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>
                  “{s.why}”
                </p>
                <div className="cs-outcome">{s.outcome}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Impact ────────────────────────────────────────────────────── */

function Impact() {
  const stats = [
    { value: "+30–35%", label: "sustained Copilot usage",  accent: true },
    { value: "+2.4×",   label: "repeat-engagement frequency" },
    { value: "+48%",    label: "active days per week (CAC cohort)" },
  ];
  return (
    <section id="impact" className="cs-section cs-section--wide">
      <SectionHead eyebrow="08 · Impact" title="The behaviour shift in numbers" />

      {/* Row 1 — big numbers */}
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginBottom: "48px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="cs-card"
            style={{
              padding: "28px 30px",
              borderTop: s.accent ? "1px solid rgba(197,220,75,0.45)" : undefined,
              background: s.accent
                ? "linear-gradient(180deg, rgba(197,220,75,0.08) 0%, rgba(255,255,255,0.01) 100%)"
                : undefined,
            }}
          >
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 200,
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: s.accent ? "var(--accent)" : "var(--text-1)",
                marginBottom: "10px",
              }}
            >
              {s.value}
            </div>
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.04em",
                color: "var(--text-3)",
                margin: 0,
                lineHeight: 1.4,
                textTransform: "uppercase",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </Reveal>

      {/* Row 2 — directional trendline */}
      <Reveal>
        <div
          className="cs-card"
          style={{
            padding: "28px 30px 24px",
            marginBottom: "48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--text-4)",
                margin: 0,
              }}
            >
              Sustained-usage trend · CAC vs non-CAC
            </p>
            <div style={{ display: "flex", gap: "16px", fontSize: "11px", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "2px", background: "var(--accent)", borderRadius: "1px" }} />
                CAC
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "2px", background: "var(--text-4)", borderRadius: "1px" }} />
                Non-CAC
              </span>
            </div>
          </div>
          <svg viewBox="0 0 600 180" preserveAspectRatio="none" style={{ width: "100%", height: "180px", display: "block" }}>
            <defs>
              <linearGradient id="cac-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(197,220,75,0.35)" />
                <stop offset="100%" stopColor="rgba(197,220,75,0)" />
              </linearGradient>
            </defs>
            {/* Baseline grid */}
            {[0.2, 0.4, 0.6, 0.8].map((y) => (
              <line key={y} x1="0" x2="600" y1={180 * y} y2={180 * y} stroke="var(--border-soft)" strokeWidth="1" />
            ))}
            {/* Non-CAC flatline */}
            <path
              d="M 0 140 C 80 138, 160 142, 240 138 S 400 144, 480 140 S 580 140, 600 140"
              fill="none"
              stroke="var(--text-4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* CAC growth */}
            <path
              d="M 0 140 C 80 132, 160 118, 240 102 S 400 60, 480 40 S 580 22, 600 18 L 600 180 L 0 180 Z"
              fill="url(#cac-grad)"
              stroke="none"
            />
            <path
              d="M 0 140 C 80 132, 160 118, 240 102 S 400 60, 480 40 S 580 22, 600 18"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Endpoint dot */}
            <circle cx="600" cy="18" r="4" fill="var(--accent)" />
          </svg>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "11px", color: "var(--text-4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <span>Week 0 · Launch</span>
            <span>Directional · anonymised</span>
            <span>Week 12+</span>
          </div>
        </div>
      </Reveal>

      {/* Hero stat (big +30-35%) */}
      <Reveal style={{ textAlign: "center", padding: "40px 20px 50px", position: "relative" }}>
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -55%)",
          width: "min(640px, 80%)", height: "60%",
          background: "radial-gradient(ellipse, rgba(197,220,75,0.18) 0%, rgba(197,220,75,0.06) 35%, transparent 70%)",
          filter: "blur(30px)", pointerEvents: "none", zIndex: 0,
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          fontFamily: "'Poppins', sans-serif", fontWeight: 200,
          fontSize: "clamp(5rem, 14vw, 10rem)", lineHeight: 0.95,
          background: "linear-gradient(180deg, #ffffff 0%, #e8f5b0 45%, #c5dc4b 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text", letterSpacing: "-0.02em",
        }}>
          +30–35%
        </div>
        <p style={{
          position: "relative", zIndex: 1, marginTop: "20px",
          fontSize: "15px", color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>
          uplift in sustained Copilot usage across CAC tenants
        </p>
      </Reveal>

      <Reveal style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px", marginTop: "20px",
      }}>
        {[
          { from: "Exploration",         to: "Habit formation" },
          { from: "Individual usage",    to: "Community learning" },
          { from: "One-time activation", to: "Continuous loop" },
        ].map((s, i) => (
          <div key={i} className="cs-card" style={{ padding: "24px 26px" }}>
            <div style={{
              fontSize: "10px", color: "rgba(197,220,75,0.85)",
              letterSpacing: "0.22em", marginBottom: "14px",
              textTransform: "uppercase", fontFamily: "'Poppins', sans-serif",
            }}>
              Shift 0{i + 1}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px" }}>{s.from}</span>
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none">
                <path d="M2 6h18M14 1l6 5-6 5" stroke="rgba(197,220,75,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>{s.to}</span>
            </div>
          </div>
        ))}
      </Reveal>

      {/* Reusability — ADOPT generalises beyond CAC */}
      <Reveal>
        <div
          className="cs-card"
          style={{
            marginTop: "40px",
            padding: "26px 30px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
            borderTop: "1px solid rgba(197,220,75,0.35)",
            background: "linear-gradient(180deg, rgba(197,220,75,0.06) 0%, rgba(255,255,255,0.005) 100%)",
          }}
        >
          <div style={{ flex: "1 1 240px", minWidth: 0 }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 8px" }}>
              Reusable framework
            </p>
            <p style={{ fontSize: "16px", color: "var(--text-1)", margin: 0, lineHeight: 1.5 }}>
              ADOPT now generalises to other Copilot scenarios — and any AI surface where adoption
              is the real bottleneck.
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["Copilot in Word", "Copilot in Teams", "AI features across M365"].map((c) => (
              <span key={c} className="cs-chip" style={{ fontSize: "12px" }}>{c}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Learnings ─────────────────────────────────────────────────── */

function Learnings() {
  const cols = [
    { label: "What worked",          color: "#c5dc4b", items: LEARNINGS.worked },
    { label: "Where it fell short",  color: "#e8b774", items: LEARNINGS.didnt },
    { label: "Next plays",           color: "#a8b8ff", items: LEARNINGS.next },
  ];
  return (
    <section className="cs-section">
      <SectionHead eyebrow="10 · Reflection & next plays" title="What worked, what didn’t, what’s next" />
      <Reveal style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "18px",
      }}>
        {cols.map((col) => (
          <div key={col.label} className="cs-card" style={{ padding: "26px 26px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: col.color, boxShadow: `0 0 10px ${col.color}55` }} />
              <span style={{
                fontSize: "11px", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.78)",
                fontFamily: "'Poppins', sans-serif",
              }}>
                {col.label}
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.items.map((it, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  fontSize: "14.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.78)",
                }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: col.color, marginTop: "9px", flexShrink: 0 }} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Contribution ──────────────────────────────────────────────── */

function Contribution() {
  return (
    <section className="cs-section">
      <SectionHead eyebrow="11 · My contribution" title="Leadership through frameworks" />
      <Reveal as="ul" style={{
        listStyle: "none", padding: 0, margin: 0,
        display: "flex", flexDirection: "column",
      }}>
        {CONTRIBUTION.map((c, i) => (
          <li key={i} style={{
            display: "flex", gap: "20px", alignItems: "flex-start",
            padding: "20px 4px",
            borderTop: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 300,
              fontSize: "14px", color: "rgba(197,220,75,0.7)",
              letterSpacing: "0.12em", minWidth: "32px", marginTop: "3px",
            }}>0{i + 1}</span>
            <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>{c}</span>
          </li>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Before / After contrast ───────────────────────────────────── */

function BeforeAfter() {
  const before = [
    "Engagement collapsed after launch week",
    "Adoption was treated as a one-time event",
    "Scattered touchpoints with no shared narrative",
    "Admins had no playbook for sustaining usage",
  ];
  const after = [
    "A structured 5-stage adoption funnel",
    "Integrated nudges across in-product surfaces",
    "Community-led learning that compounds over time",
    "Admins equipped with pre-built campaigns and signals",
  ];
  return (
    <section className="cs-section cs-section--wide">
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "32px" }}>02 · Why existing approaches failed</p>
      </Reveal>
      <Reveal>
        <h2 className="cs-h2" style={{ maxWidth: "880px", marginBottom: "48px" }}>
          Adoption was treated as a launch — not a system.
        </h2>
      </Reveal>
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          { label: "Before", tint: "#e8a374", items: before },
          { label: "After",  tint: "#c5dc4b", items: after  },
        ].map((col) => (
          <div
            key={col.label}
            className="cs-card"
            style={{
              padding: "30px 32px",
              borderTop: `1px solid ${col.tint}55`,
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: col.tint,
                margin: "0 0 22px",
              }}
            >
              {col.label}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {col.items.map((it) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "15.5px",
                    lineHeight: 1.55,
                    color: "var(--text-2)",
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    marginTop: "9px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: col.tint,
                    boxShadow: `0 0 10px ${col.tint}55`,
                  }} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Across product surfaces ───────────────────────────────────── */

function Surfaces() {
  const rows = [
    { stage: "Aware",      surface: "Email + Banners",        action: "Top-of-funnel campaigns introduce Copilot scenarios to the right audiences." },
    { stage: "Desire",     surface: "Community posts",        action: "Curated success stories and prompts in CAC build interest where peers are." },
    { stage: "Open",       surface: "Bell notifications",     action: "Just-in-time nudges trigger the first meaningful Copilot use." },
    { stage: "Proficient", surface: "Campaigns + Cadence",    action: "Weekly themes and challenges turn one-time use into repeated practice." },
    { stage: "Transform",  surface: "Analytics + Advocacy",   action: "Pillars surface as community advocates; admins measure compound effect." },
  ];
  return (
    <section className="cs-section cs-section--wide">
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "32px" }}>04 · Across product surfaces</p>
      </Reveal>
      <Reveal>
        <h2 className="cs-h2" style={{ maxWidth: "880px", marginBottom: "20px" }}>
          ADOPT mapped to the surfaces people actually use.
        </h2>
      </Reveal>
      <Reveal>
        <p className="cs-body" style={{ maxWidth: "780px", marginBottom: "48px" }}>
          The framework only works if every stage has a tangible touchpoint. Each ADOPT stage was
          wired into a real Viva Engage / Microsoft 365 surface — not left as theory.
        </p>
      </Reveal>
      <Reveal>
        <div className="cs-card" style={{ overflow: "hidden" }}>
          {rows.map((r, i) => (
            <div
              key={r.stage}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(120px, 160px) minmax(160px, 220px) 1fr",
                gap: "24px",
                padding: "22px 28px",
                borderTop: i === 0 ? "none" : "1px solid var(--border-soft)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                {r.stage}
              </span>
              <span style={{ fontSize: "15px", color: "var(--text-1)", fontWeight: 500 }}>
                {r.surface}
              </span>
              <span style={{ fontSize: "14.5px", color: "var(--text-2)", lineHeight: 1.55 }}>
                {r.action}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ── Key decisions & trade-offs ────────────────────────────────── */

function Decisions() {
  const items = [
    {
      title: "Campaigns over standalone announcements",
      body: "Single posts dropped off in days. Multi-week campaigns gave each ADOPT stage a sustained narrative, even when individual posts varied in performance.",
      tradeoff: "Higher upfront content cost, but compounding return on engagement.",
    },
    {
      title: "Community-led participation over admin push",
      body: "We prioritised peer prompts and shared stories over admin broadcasts. Peer signal outperformed authority in driving repeat use.",
      tradeoff: "Slower week-1 numbers; durable week-4+ adoption.",
    },
    {
      title: "Bell notifications over email reminders",
      body: "Email felt like noise; in-product nudges met users where they were already working, and tied directly to a Copilot moment.",
      tradeoff: "Tighter scope per nudge, but higher click-to-value rate.",
    },
    {
      title: "Built into existing workflows, not a new app",
      body: "ADOPT lived inside Viva Engage instead of a separate destination, so adoption didn’t demand a new habit — it amplified existing ones.",
      tradeoff: "Less room for bespoke UX; more leverage from familiar surfaces.",
    },
  ];
  return (
    <section className="cs-section cs-section--wide">
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "32px" }}>06 · Key decisions &amp; trade-offs</p>
      </Reveal>
      <Reveal>
        <h2 className="cs-h2" style={{ maxWidth: "880px", marginBottom: "48px" }}>
          Where I chose behaviour over feature volume.
        </h2>
      </Reveal>
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "18px",
        }}
      >
        {items.map((d) => (
          <div key={d.title} className="cs-card" style={{ padding: "28px 30px" }}>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                color: "var(--text-1)",
                margin: "0 0 12px",
                lineHeight: 1.35,
              }}
            >
              {d.title}
            </h3>
            <p className="cs-body" style={{ fontSize: "15px", marginBottom: "16px" }}>
              {d.body}
            </p>
            <p
              style={{
                fontSize: "12.5px",
                letterSpacing: "0.04em",
                color: "var(--accent)",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span style={{ color: "var(--text-4)", marginRight: "6px" }}>Trade-off →</span>
              {d.tradeoff}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Behaviour funnel (drop-off + intervention) ────────────────── */

function BehaviourFunnel() {
  const steps = [
    { label: "Curious",        share: 100, friction: "Heard about Copilot",         fix: "Awareness — surface value where decisions happen" },
    { label: "First try",      share: 64,  friction: "Couldn't find the entry",     fix: "Discovery — guided prompts and curated starts" },
    { label: "First success",  share: 36,  friction: "Generic output, no fit",      fix: "Onboarding — admin-led templates per scenario" },
    { label: "Repeat usage",   share: 18,  friction: "Nothing to come back for",    fix: "Participation — weekly campaigns + cadence" },
    { label: "Habit",          share: 9,   friction: "Solo, no reinforcement",      fix: "Transformation — community proof + advocacy" },
  ];
  return (
    <section className="cs-section cs-section--wide">
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "26px" }}>Behaviour funnel</p>
      </Reveal>
      <Reveal>
        <h2 className="cs-h2" style={{ maxWidth: "880px", marginBottom: "16px" }}>
          The drop-off was predictable — and fixable.
        </h2>
      </Reveal>
      <Reveal>
        <p className="cs-body" style={{ maxWidth: "780px", marginBottom: "48px" }}>
          From curiosity to habit, only ~9% of users made it through. Each break has a friction
          point — and a specific ADOPT intervention.
        </p>
      </Reveal>

      <Reveal>
        <div className="cs-card" style={{ padding: "32px 32px 28px" }}>
          {/* Funnel bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "26px" }}>
            {steps.map((s, i) => {
              const lost = i === 0 ? 0 : steps[i - 1].share - s.share;
              return (
                <div key={s.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "14px", color: "var(--text-1)", letterSpacing: "-0.005em" }}>
                      {s.label}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--text-3)", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.04em" }}>
                      {s.share}%{lost > 0 && <span style={{ color: "var(--text-4)", marginLeft: "10px" }}>−{lost}% dropped</span>}
                    </span>
                  </div>
                  <div style={{ height: "8px", borderRadius: "9999px", background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${s.share}%`,
                        background: `linear-gradient(90deg, var(--accent), rgba(197,220,75,${0.4 + (s.share / 200)}))`,
                        borderRadius: "9999px",
                        transition: "width 0.6s ease",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Friction → Fix legend */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0",
              borderTop: "1px solid var(--border-soft)",
              paddingTop: "20px",
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "14px 18px",
                  borderLeft: i === 0 ? "none" : "1px solid var(--border-soft)",
                }}
              >
                <p style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-4)", margin: "0 0 6px", fontFamily: "'Poppins', sans-serif" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-3)", margin: "0 0 8px", lineHeight: 1.45 }}>
                  <span style={{ color: "#e8a374" }}>Friction → </span>
                  {s.friction}
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-2)", margin: 0, lineHeight: 1.45 }}>
                  <span style={{ color: "var(--accent)" }}>Fix → </span>
                  {s.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── ADOPT Toolkit (reusable artefacts) ────────────────────────── */

function Toolkit() {
  const assets = [
    {
      title: "Campaign template",
      sub: "Plug-and-play scaffold for a 4-week adoption arc.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5" />
        </svg>
      ),
    },
    {
      title: "Weekly cadence calendar",
      sub: "Posting rhythm tied to each ADOPT stage.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18M9 15h2M14 15h2M9 18h2" />
        </svg>
      ),
    },
    {
      title: "Prompt library",
      sub: "Starter pack of high-intent Copilot prompts.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" /><path d="M8 10h8M8 14h5" />
        </svg>
      ),
    },
    {
      title: "Admin launch checklist",
      sub: "Step-by-step from setup to sustained adoption.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8l2 2 4-4M9 14l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Maturity model",
      sub: "Bronze · Silver · Gold adoption levels with signals.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 21V10M12 21V5M18 21v-8" /><path d="M3 21h18" />
        </svg>
      ),
    },
    {
      title: "Behaviour signal map",
      sub: "What to measure at each ADOPT stage.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17l4-4 4 4 4-6 6 8" /><circle cx="3" cy="17" r="1" /><circle cx="7" cy="13" r="1" /><circle cx="11" cy="17" r="1" /><circle cx="15" cy="11" r="1" /><circle cx="21" cy="19" r="1" />
        </svg>
      ),
    },
  ];
  return (
    <section id="toolkit" className="cs-section cs-section--wide" style={{ paddingTop: "140px" }}>
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "26px" }}>ADOPT Toolkit</p>
      </Reveal>
      <Reveal>
        <h2 className="cs-h2" style={{ maxWidth: "880px", marginBottom: "16px" }}>
          Reusable artefacts the team can copy tomorrow.
        </h2>
      </Reveal>
      <Reveal>
        <p className="cs-body" style={{ maxWidth: "780px", marginBottom: "48px" }}>
          ADOPT isn’t just a framework — it ships with everything a comms or admin team needs to
          run it end-to-end.
        </p>
      </Reveal>
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {assets.map((a) => (
          <div
            key={a.title}
            className="cs-card"
            style={{
              padding: "26px 26px",
              transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "var(--border-strong)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--border-soft)";
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                background: "rgba(197,220,75,0.08)",
                border: "1px solid rgba(197,220,75,0.22)",
                color: "var(--accent)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px",
              }}
            >
              {a.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "var(--text-1)",
                margin: "0 0 8px",
              }}
            >
              {a.title}
            </h3>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "var(--text-3)", margin: 0 }}>
              {a.sub}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ── Why this matters (thesis) ─────────────────────────────────── */

function WhyThisMatters() {
  return (
    <section className="cs-section cs-section--wide" style={{ paddingTop: "140px" }}>
      <Reveal>
        <p className="cs-eyebrow" style={{ marginBottom: "32px" }}>12 · Why this matters</p>
      </Reveal>
      <Reveal>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--text-1)",
            margin: "0 0 24px",
            maxWidth: "1020px",
          }}
        >
          AI products don’t fail because of capability.
          <br />
          <span style={{ color: "var(--accent)" }}>They fail because of adoption.</span>
        </h2>
      </Reveal>
      <Reveal>
        <p
          className="cs-body"
          style={{
            fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
            maxWidth: "780px",
            marginBottom: "32px",
          }}
        >
          The hardest problem in shipping AI isn’t the model — it’s the moment a user decides to
          use it again. ADOPT exists to engineer that moment, repeatedly, until usage becomes
          behaviour and behaviour becomes habit.
        </p>
      </Reveal>
      <Reveal>
        <p
          style={{
            fontFamily: "'Merriweather', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.4rem, 2.1vw, 1.8rem)",
            lineHeight: 1.4,
            color: "var(--text-1)",
            margin: 0,
            maxWidth: "880px",
            paddingLeft: "24px",
            borderLeft: "2px solid var(--accent)",
          }}
        >
          ADOPT turns AI from a feature into behaviour.
        </p>
      </Reveal>
    </section>
  );
}

/* ── Closing ───────────────────────────────────────────────────── */

function Closing() {
  return (
    <section className="cs-section" style={{ paddingTop: "140px" }}>
      <Reveal style={{ maxWidth: "780px", margin: "0 auto" }}>
        <blockquote style={{
          margin: 0, padding: "0 20px",
          fontFamily: "'Merriweather', serif",
          fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(1.5rem, 3vw, 2.1rem)", lineHeight: 1.45,
          textAlign: "center", color: "rgba(255,255,255,0.92)",
        }}>
          “Scaling adoption isn’t about adding features — it’s about designing systems that turn
          behaviour into habit.”
        </blockquote>
      </Reveal>
    </section>
  );
}

/* ── Footer back ───────────────────────────────────────────────── */

function FooterBack({ onBack }: { onBack: () => void }) {
  return (
    <section className="cs-section" style={{ padding: "100px 32px 120px", textAlign: "center" }}>
      <Reveal>
        <span className="shine-wrap">
          <button
            onClick={onBack}
            className="shine-inner text-white/75 hover:text-white text-sm"
            style={{
              padding: "10px 26px", border: "none", cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              display: "inline-flex", alignItems: "center", gap: "10px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back to portfolio
          </button>
        </span>
      </Reveal>
    </section>
  );
}
