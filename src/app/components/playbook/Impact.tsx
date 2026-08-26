/*
 * Impact — three headline metrics + a simple animated bar chart showing the
 * weekly active member trend across the rollout.
 */

import { useEffect, useRef } from "react";

const METRICS = [
  { value: "+30–35%", label: "Higher Copilot usage among CAC users" },
  { value: "2.5×", label: "Growth in CAC tenants & CAC weekly active users" },
  { value: "3×", label: "Copilot weekly active user growth in CAC tenants" },
];

// Faux weekly trend — pre-rollout (gray) vs post-rollout (accent), 16 weeks.
const TREND: { w: string; h: number; phase: "pre" | "post" }[] = [
  { w: "W1", h: 18, phase: "pre" },
  { w: "W2", h: 22, phase: "pre" },
  { w: "W3", h: 20, phase: "pre" },
  { w: "W4", h: 24, phase: "pre" },
  { w: "W5", h: 26, phase: "pre" },
  { w: "W6", h: 23, phase: "pre" },
  { w: "W7", h: 28, phase: "pre" },
  { w: "W8", h: 32, phase: "pre" },
  { w: "W9", h: 42, phase: "post" },
  { w: "W10", h: 51, phase: "post" },
  { w: "W11", h: 58, phase: "post" },
  { w: "W12", h: 64, phase: "post" },
  { w: "W13", h: 72, phase: "post" },
  { w: "W14", h: 80, phase: "post" },
  { w: "W15", h: 86, phase: "post" },
  { w: "W16", h: 92, phase: "post" },
];

export function Impact() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("pb-chart-wrap--animate");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="impact"
      className="pb-section relative px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="pb-eyebrow">The Impact</div>
        <h2 className="pb-h2 mt-3 max-w-[820px]">
          The behavior shift, <span className="pb-accent">in numbers</span>
        </h2>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label} className="pb-card p-8">
              <div className="pb-metric">{m.value}</div>
              <div className="pb-body mt-4">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div ref={chartRef} className="pb-chart-wrap pb-card mt-8 p-8">
          <div className="flex items-end justify-between gap-1.5 h-[260px]">
            {TREND.map((b, i) => (
              <div key={b.w} className="flex flex-col items-center flex-1 gap-1.5">
                <div
                  className={`pb-bar-anim ${b.phase === "post" ? "pb-bar-post" : "pb-bar-pre"}`}
                  style={
                    { "--bar-h": `${b.h}%`, "--bar-i": i } as React.CSSProperties
                  }
                />
                <span className="text-[10px] text-white/30 hidden sm:block">{b.w}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-sm pb-bar-pre" />
              <span className="text-white/60">Pre-rollout (weekly active)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-sm pb-bar-post" />
              <span className="text-white/60">Post-rollout (weekly active)</span>
            </div>
          </div>
        </div>

        {/* Selected metric note */}
        <div className="pb-card mt-6 p-6">
          <div className="pb-meta-label">SELECTED METRIC</div>
          <p className="pb-body mt-3">
            <span className="pb-accent font-semibold">+30–35% higher Copilot usage</span> among CAC users —
            the clearest signal the community changed behavior, not just attention.
          </p>
        </div>
      </div>
    </section>
  );
}
