/*
 * ImpactSnapshot — results proof-point. Embedded inside the Framework section,
 * between the ADOPT intro and the stage explorer: "here's the proof it works"
 * before the reader dives into the stages. Three big, simple, powerful metrics.
 */

const METRICS = [
  {
    value: "+30–35%",
    label: "Higher Copilot usage among CAC users",
  },
  {
    value: "2.5×",
    label: "Growth in CAC tenants & CAC weekly active users",
  },
  {
    value: "3×",
    label: "Growth in Copilot weekly active users in CAC tenants",
  },
];

export function ImpactSnapshot() {
  return (
    <div className="pb-impact-snapshot relative mt-16">
      {/* Lime glow to signal momentum */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-8 h-40"
        style={{
          background:
            "radial-gradient(ellipse 55% 100% at 50% 0%, rgba(197,220,75,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="pb-eyebrow">The Impact So Far</div>
        <p className="pb-body mt-4 max-w-[640px]">
          Before you explore the stages, here&rsquo;s the proof the playbook
          works — what ADOPT moved for Copilot adoption across CAC tenants.
        </p>

        <div className="pb-impact-band mt-10">
          {METRICS.map((m) => (
            <div key={m.label} className="pb-impact-cell">
              <div className="pb-impact-num">{m.value}</div>
              <div className="pb-impact-label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="pb-impact-caption mt-6">
          <span className="pb-impact-tag">ADOPT</span>
          Measured across CAC tenants. WAU = weekly active users.
        </div>
      </div>
    </div>
  );
}
