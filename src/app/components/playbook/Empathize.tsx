/*
 * Empathize — the research phase, told through a lead-user-researcher lens.
 * A phase pill + headline + research visual, an icon-driven methods bar, a
 * "Talked to Users" timeline with a persona map, and a "Explored the Market"
 * benchmark grid. Sits after Vision ("My Approach") and before the Challenge.
 */

import type { ReactNode } from "react";

/* ── Inline line-icon set (feather/lucide-style, currentColor) ─────────── */
const ICONS: Record<string, ReactNode> = {
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.6 8.4 13.5 13.5 8.4 15.6 10.5 10.5 15.6 8.4" />
    </>
  ),
  trophy: (
    <>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.6V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22" />
      <path d="M14 14.6V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </>
  ),
  sprout: (
    <>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </>
  ),
  chart: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a14 14 0 0 1 3.6 9 14 14 0 0 1-3.6 9 14 14 0 0 1-3.6-9A14 14 0 0 1 12 3z" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.6 4.8L18 9.4l-4.4 1.6L12 16l-1.6-4.9L6 9.4l4.4-1.6z" />
  ),
};

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}

/* ── Content ───────────────────────────────────────────────────────────── */
const METHODS = [
  { icon: "users", count: "9", label: "User interviews" },
  { icon: "user", count: "5", label: "Personas mapped" },
  { icon: "search", count: "3", label: "Pilot tenants studied" },
  { icon: "flag", count: "6", label: "Communities benchmarked" },
];

const TALKED = [
  "I interviewed representatives across the adoption journey — community admins, champions, newly-licensed users, and the IT leads accountable for rollout — to map their goals, friction, and the moments they quietly drop off.",
  "Scattered anecdotes became a shared language: how people actually discover a community, decide to post, and choose whether to return — something the whole team could design against.",
];

const PERSONAS = [
  { icon: "compass", name: "Community Admin", need: "Wants the space to feel alive without a full-time moderator." },
  { icon: "trophy", name: "Copilot Champion", need: "Wants their prompts and wins seen and celebrated." },
  { icon: "sprout", name: "New Copilot User", need: "Just got a license — unsure where to start or who to ask." },
  { icon: "chart", name: "Adoption Manager", need: "Accountable for org-wide usage and measurable ROI." },
  { icon: "users", name: "Team Lead", need: "Wants the team to build a habit, not just try it once." },
];

const BENCHMARKS = [
  { name: "Microsoft Tech Community", take: "Recognized MVPs and structured spaces build trust and longevity." },
  { name: "Slack Communities", take: "Lightweight rituals — weekly prompts, threads — keep conversation warm." },
  { name: "Discord", take: "Roles and badges turn silent lurkers into identifiable contributors." },
  { name: "Reddit", take: "Visible upvotes surface the best answers fast — and reward them." },
];

export function Empathize() {
  return (
    <section
      id="empathize"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 12%, rgba(124,58,237,0.12) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 88% 30%, rgba(197,220,75,0.07) 0%, transparent 62%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px]">
        {/* ── Header — copy + research visual ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="pb-phase-pill">
              <span className="pb-phase-dot" />
              Phase 01 · Empathize
            </div>

            <h2 className="pb-h2 mt-6 max-w-[620px]">
              Understanding the people behind the{" "}
              <span className="pb-accent">adoption gap</span>
            </h2>

            <div className="pb-title-rule" />

            <p className="pb-body mt-6 max-w-[560px]">
              Before sketching a single screen, I led the discovery myself —
              listening to the people who live inside Viva Engage communities
              every day, and studying how the best communities on the internet
              earn attention and keep it.
            </p>
          </div>

          {/* Research visual */}
          <div className="hidden lg:block">
            <div className="pb-emp-visual">
              <div className="pb-emp-orbit" />
              <div className="pb-emp-core pb-float">
                <Icon name="search" className="pb-emp-core-icon" />
                <span className="pb-emp-core-tag">RESEARCH</span>
              </div>
              <span className="pb-emp-bubble pb-emp-bubble--chat">
                <Icon name="chat" />
              </span>
              <span className="pb-emp-bubble pb-emp-bubble--users">
                <Icon name="users" />
              </span>
              <span className="pb-emp-bubble pb-emp-bubble--heart">
                <Icon name="heart" />
              </span>
            </div>
          </div>
        </div>

        {/* ── Methods bar ─────────────────────────────────────── */}
        <div className="pb-method-bar mt-14">
          {METHODS.map((m) => (
            <div key={m.label} className="pb-method-cell">
              <div className="pb-method-icon">
                <Icon name={m.icon} className="pb-icon-18" />
              </div>
              <div>
                <div className="pb-method-num">{m.count}</div>
                <div className="pb-method-label">{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Talked to Users + Personas ──────────────────────── */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          <div>
            <div className="pb-subhead-row">
              <span className="pb-subhead-badge">
                <Icon name="chat" className="pb-icon-18" />
              </span>
              <span className="pb-subhead">Talked to Users</span>
            </div>

            <div className="pb-timeline">
              {TALKED.map((t, idx) => (
                <div key={idx} className="pb-timeline-item">
                  <span className="pb-tl-dot" />
                  <p className="pb-body max-w-[460px]">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="pb-section-label">
              <span className="pb-section-label-text">Personas I designed for</span>
              <span className="pb-section-label-line" />
              <Icon name="sparkle" className="pb-section-label-spark" />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONAS.map((p) => (
                <div key={p.name} className="pb-persona">
                  <div className="pb-persona-avatar">
                    <Icon name={p.icon} className="pb-icon-20" />
                  </div>
                  <div>
                    <div className="pb-persona-name">{p.name}</div>
                    <div className="pb-persona-need">{p.need}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Explored the Market ─────────────────────────────── */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="pb-section-label">
              <span className="pb-section-label-text">What strong communities taught us</span>
              <span className="pb-section-label-line" />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BENCHMARKS.map((b) => (
                <div key={b.name} className="pb-bench">
                  <div className="pb-bench-name">{b.name}</div>
                  <div className="pb-bench-take">{b.take}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="pb-subhead-row">
              <span className="pb-subhead-badge">
                <Icon name="globe" className="pb-icon-18" />
              </span>
              <span className="pb-subhead">Explored the Market</span>
            </div>
            <p className="pb-body mt-5 max-w-[460px]">
              I studied how thriving communities — inside and outside Microsoft —
              turn first-time visitors into regulars, then into contributors.
            </p>
            <p className="pb-body mt-4 max-w-[460px]">
              Benchmarking the rituals, recognition, and feedback loops behind
              them revealed the patterns adoption-led programs rely on — and the
              gaps Viva Engage hadn&rsquo;t yet closed.
            </p>
          </div>
        </div>

        {/* ── Bridge to the Challenge ─────────────────────────── */}
        <p className="pb-prologue-kicker mt-16 max-w-[780px]">
          Together, these conversations and comparisons made the real problem
          impossible to ignore.
        </p>
      </div>
    </section>
  );
}
