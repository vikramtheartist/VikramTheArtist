/*
 * Role — "My Role" section. Sits between the Prologue and Vision ("My Approach").
 * Establishes ownership (end-to-end UX) and the cross-functional team, then
 * presents the process triad (Empathize → Conceptualize → Design) as the
 * section's visual centerpiece.
 *
 * Visual language follows the playbook tokens: lime accent over a purple glow,
 * a ghost outlined headline, and gradient process rings.
 */

// Cross-functional partners on the engagement.
const COLLAB = [
  { count: "4", role: "Product Managers" },
  { count: "2", role: "Eng Managers" },
  { count: "12", role: "Engineers" },
  { count: "1", role: "Program Manager" },
  { count: "1", role: "UX Researcher" },
  { count: "1", role: "UX Writer" },
];

// Process triad — the lens, the leap, the craft.
const STEPS = [
  {
    n: "01",
    title: "Empathize",
    body: "Understand the user's needs, pain points, and the context they work in.",
  },
  {
    n: "02",
    title: "Conceptualize",
    body: "Transform insights into ideas and shape a clear vision for the solution.",
  },
  {
    n: "03",
    title: "Design",
    body: "Bring the vision to life with user-centered design and iterative refinement.",
  },
];

export function Role() {
  return (
    <section
      id="role"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-16"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 25% 20%, rgba(124,58,237,0.12) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 80% 85%, rgba(197,220,75,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px]">
        {/* ── Ghost headline + role badge ─────────────────────── */}
        <div className="relative">
          <div className="pb-role-ghost" aria-hidden>
            MY ROLE
          </div>
          <div className="pb-role-badge">
            <span>Senior Product Designer</span>
            <svg
              className="pb-role-squiggle"
              viewBox="0 0 180 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 7C18 1.5 34 1.5 50 7C66 12.5 82 12.5 98 7C114 1.5 130 1.5 146 7C162 12.5 174 8 178 5"
                stroke="url(#pb-squiggle)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="pb-squiggle" x1="0" y1="0" x2="180" y2="0">
                  <stop stopColor="#a855f7" />
                  <stop offset="1" stopColor="#c5dc4b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ── Narrative + collaborators ───────────────────────── */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <p className="pb-body max-w-[560px] lg:text-[18px] lg:leading-[1.6]">
            As the lead designer for Copilot adoption in{" "}
            <span className="pb-accent">Viva Engage</span>, I owned the
            end-to-end user experience — from research and ideation through
            design to launch — partnering closely with cross-functional teams to
            ship a successful MVP.
          </p>

          <div>
            <div className="pb-meta-label">Partnered with</div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-px pb-collab-grid">
              {COLLAB.map((c) => (
                <div key={c.role} className="pb-collab-cell">
                  <div className="pb-collab-count">{c.count}</div>
                  <div className="pb-collab-role">{c.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Process triad — centerpiece panel ───────────────── */}
        <div className="pb-process-panel mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[24px]"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(124,58,237,0.10) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="pb-process-head">
              <div className="pb-eyebrow">My Process</div>
              <h3 className="pb-h3 mt-3 max-w-[560px] mx-auto">
                A human-centered loop, run end to end
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
              {STEPS.map((s, idx) => (
                <div key={s.n} className="pb-step">
                  <div className="pb-step-ring">
                    <div className="pb-step-ring-inner">
                      <span className="pb-step-num">{s.n}</span>
                      <span className="pb-step-label">STEP</span>
                    </div>
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div className="pb-step-connector" aria-hidden />
                  )}
                  <h4 className="pb-step-title mt-6">{s.title}</h4>
                  <p className="pb-body mt-3 max-w-[280px]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
