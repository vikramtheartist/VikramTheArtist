import React, { useId } from "react";

interface AdoptionRealitySectionProps {
  isDark?: boolean;
}

interface Milestone {
  id: string;
  number: string;
  title: string;
  description: string;
  emphasis: "primary" | "supporting";
  tone: "cyan" | "coral" | "blue" | "magenta" | "violet" | "teal";
  nodeX: number;
  nodeY: number;
  cardPlacement: "top" | "bottom";
  cardOffsetX?: number;
  cardOffsetY?: number;
}

const MILESTONES: Milestone[] = [
  {
    id: "first-use",
    number: "01",
    title: "First use",
    description: "AI feels instantly powerful.",
    emphasis: "primary",
    tone: "cyan",
    nodeX: 110,
    nodeY: 210,
    cardPlacement: "top",
    cardOffsetX: 0,
    cardOffsetY: -16,
  },
  {
    id: "generic-output",
    number: "02",
    title: "Generic output",
    description: "The task lacks enough context.",
    emphasis: "supporting",
    tone: "coral",
    nodeX: 270,
    nodeY: 360,
    cardPlacement: "bottom",
    cardOffsetX: 0,
    cardOffsetY: 16,
  },
  {
    id: "better-result",
    number: "03",
    title: "Better result",
    description: "A useful outcome appears.",
    emphasis: "supporting",
    tone: "blue",
    nodeX: 460,
    nodeY: 275,
    cardPlacement: "top",
    cardOffsetX: -15,
    cardOffsetY: -16,
  },
  {
    id: "trust-check",
    number: "04",
    title: "Trust check",
    description: "Can I rely on this?",
    emphasis: "primary",
    tone: "magenta",
    nodeX: 710,
    nodeY: 185,
    cardPlacement: "top",
    cardOffsetX: 0,
    cardOffsetY: -16,
  },
  {
    id: "recalibration",
    number: "05",
    title: "Recalibration",
    description: "Change the prompt, tool or approach.",
    emphasis: "supporting",
    tone: "coral",
    nodeX: 890,
    nodeY: 365,
    cardPlacement: "bottom",
    cardOffsetX: 0,
    cardOffsetY: 16,
  },
  {
    id: "learn-boundaries",
    number: "06",
    title: "Learn the boundaries",
    description: "Know where AI helps—and where it doesn’t.",
    emphasis: "supporting",
    tone: "violet",
    nodeX: 1060,
    nodeY: 285,
    cardPlacement: "top",
    cardOffsetX: -25,
    cardOffsetY: -16,
  },
  {
    id: "build-workflow",
    number: "07",
    title: "Build a workflow",
    description: "Make the value repeatable.",
    emphasis: "primary",
    tone: "teal",
    nodeX: 1220,
    nodeY: 225,
    cardPlacement: "top",
    cardOffsetX: 15,
    cardOffsetY: -16,
  },
];

export const AdoptionRealitySection: React.FC<AdoptionRealitySectionProps> = ({ isDark = false }) => {
  const gradientId = useId();

  return (
    <section
      id="reality-of-adoption"
      aria-label="The Reality of Adoption"
      className="relative w-full overflow-hidden transition-colors duration-300 py-16 sm:py-20 lg:py-24 select-text"
    >
      {/* Accessible offscreen summary for screen readers */}
      <div className="sr-only">
        <h2>The Reality of Adoption</h2>
        <p>
          AI adoption moves through excitement, generic results, experimentation, trust checks,
          recalibration and learning before becoming part of a repeatable workflow.
        </p>
      </div>

      <div className="max-w-[1480px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-text">
        {/* ── 1. SECTION INTRODUCTION ──────────────────────────────── */}
        <div className="text-center max-w-[1100px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow */}
          <div
            className={`inline-block text-[11.5px] sm:text-[12.5px] font-extrabold uppercase tracking-[0.25em] mb-3 sm:mb-4 transition-colors ${
              isDark ? "text-cyan-400" : "text-[#0284c7]"
            }`}
          >
            THE REALITY OF ADOPTION
          </div>

          {/* Headline */}
          <h2
            className="text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] font-black tracking-[-0.035em] leading-[1.06] mb-4 sm:mb-5 lg:whitespace-nowrap"
            style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#6366f1] to-[#b55fe6]">
              Adoption doesn’t follow
            </span>{" "}
            <span className={isDark ? "text-white" : "text-[#0b0f19]"}>
              a straight line.
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.5] max-w-[820px] mx-auto font-normal ${
              isDark ? "text-slate-300/85" : "text-[#475569]"
            }`}
          >
            Access may create a first try. Lasting value takes experimentation, trust and a workflow
            that fits the work.
          </p>
        </div>

        {/* ── 2. ASSUMED JOURNEY STRIP ─────────────────────────────── */}
        <div className="w-full mx-auto mb-6 sm:mb-8">
          {/* Glass Strip */}
          <div
            className={`w-full rounded-[20px] sm:rounded-[24px] px-6 sm:px-9 py-4 sm:py-5 flex flex-col justify-between gap-3 sm:gap-4 transition-all duration-300 ${
              isDark
                ? "bg-[#091122]/85 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-slate-200"
                : "bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] text-slate-800"
            }`}
          >
            {/* Top Label */}
            <div
              className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                isDark ? "text-slate-400" : "text-slate-700"
              }`}
            >
              WHAT ROLLOUT PLANS ASSUME
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between gap-2.5 sm:gap-6">
              {/* Left Label */}
              <div className="text-[12.5px] sm:text-[14.5px] font-bold tracking-tight shrink-0 whitespace-nowrap">
                Give everyone AI
              </div>

              {/* Middle Straight Line */}
              <div className="flex-1 flex items-center min-w-[50px] sm:min-w-[160px] px-1.5 sm:px-4">
                <div className="relative w-full flex items-center">
                  {/* Start Node */}
                  <div className="relative flex items-center justify-center shrink-0 z-10 mr-2.5 sm:mr-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2563eb] shadow-[0_0_12px_rgba(37,99,235,0.7)] flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Connecting Line with Directional Arrowhead */}
                  <div className="flex-1 flex items-center relative min-w-0 mr-3.5 sm:mr-6">
                    <div
                      className={`flex-1 h-[2px] ${
                        isDark
                          ? "bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#818cf8]"
                          : "bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#818cf8]"
                      }`}
                    />
                    {/* Clean vector arrowhead */}
                    <svg
                      className="w-2.5 h-3 sm:w-3 sm:h-3.5 shrink-0 -ml-[1px]"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 2L8.5 6L1 10Z"
                        fill={isDark ? "#818cf8" : "#818cf8"}
                        stroke={isDark ? "#818cf8" : "#818cf8"}
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* End Node */}
                  <div className="relative flex items-center justify-center shrink-0 z-10">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2563eb] shadow-[0_0_12px_rgba(37,99,235,0.7)] flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Label */}
              <div className="text-[12.5px] sm:text-[14.5px] font-bold tracking-tight shrink-0 whitespace-nowrap">
                Productivity improves
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. ACTUAL BEHAVIORAL JOURNEY (DESKTOP / TABLET) ──────── */}
        <div className="hidden md:block w-full mx-auto">
          {/* Main Integrated Behavioral Canvas */}
          <div
            className={`relative rounded-[28px] sm:rounded-[36px] overflow-hidden transition-all duration-300 ${
              isDark
                ? "bg-[#060c1c]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
                : "bg-gradient-to-b from-[#f8fafc]/90 via-[#f0f6fc]/80 to-[#fdf8ff]/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
            }`}
          >
            {/* Story-Zones Bar Header */}
            <div className="px-6 sm:px-8 lg:px-10 pt-6 pb-2 flex items-center justify-between border-b border-slate-200/50 dark:border-white/5">
              {/* Section Tag */}
              <div
                className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                  isDark ? "text-slate-400" : "text-slate-700"
                }`}
              >
                WHAT PEOPLE ACTUALLY EXPERIENCE
              </div>

              {/* 3 Story Zones */}
              <div className="flex items-center gap-6 lg:gap-14 text-[10px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>INITIAL EXCITEMENT</span>
                </div>
                <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  <span>TEST &amp; LEARN</span>
                </div>
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>INTEGRATE</span>
                </div>
              </div>
            </div>

            {/* SVG Behavioral Map Graphic Area - Full Width No Padding */}
            <div className="relative w-full aspect-[1600/510]">
              <svg
                viewBox="0 0 1600 510"
                className="w-full h-full absolute inset-0 overflow-visible"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  {/* Linear gradients for main path */}
                  <linearGradient id={`${gradientId}-mainPath`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d2ff" />
                    <stop offset="12%" stopColor="#0ea5e9" />
                    <stop offset="19%" stopColor="#f43f5e" />
                    <stop offset="36%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#d946ef" />
                    <stop offset="64%" stopColor="#f43f5e" />
                    <stop offset="74%" stopColor="#8b5cf6" />
                    <stop offset="85%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#00d2ff" />
                  </linearGradient>

                  {/* Terrain Wave Gradients spanning full width */}
                  <linearGradient id={`${gradientId}-terrain-cyan`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? "rgba(0, 210, 255, 0.22)" : "rgba(0, 210, 255, 0.14)"} />
                    <stop offset="100%" stopColor={isDark ? "rgba(59, 130, 246, 0.02)" : "rgba(59, 130, 246, 0.01)"} />
                  </linearGradient>

                  <linearGradient id={`${gradientId}-terrain-violet`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? "rgba(217, 70, 239, 0.20)" : "rgba(217, 70, 239, 0.12)"} />
                    <stop offset="100%" stopColor={isDark ? "rgba(139, 92, 246, 0.02)" : "rgba(139, 92, 246, 0.01)"} />
                  </linearGradient>

                  <linearGradient id={`${gradientId}-terrain-teal`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? "rgba(20, 184, 166, 0.25)" : "rgba(20, 184, 166, 0.15)"} />
                    <stop offset="100%" stopColor={isDark ? "rgba(0, 210, 255, 0.02)" : "rgba(0, 210, 255, 0.01)"} />
                  </linearGradient>

                  {/* Dotted Topographic Pattern */}
                  <pattern id={`${gradientId}-dots`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill={isDark ? "rgba(255,255,255,0.12)" : "rgba(59, 130, 246, 0.16)"} />
                  </pattern>

                  {/* Mask for dots texture */}
                  <mask id={`${gradientId}-dots-mask`}>
                    <radialGradient id={`${gradientId}-dots-rad`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#ffffff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                    <rect x="0" y="0" width="1600" height="510" fill={`url(#${gradientId}-dots-rad)`} />
                  </mask>

                  {/* Arrow markers */}
                  <marker id={`${gradientId}-arrow-blue`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 1 L 6 4 L 0 7 z" fill="#0284c7" />
                  </marker>
                  <marker id={`${gradientId}-arrow-violet`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 1 L 6 4 L 0 7 z" fill="#a855f7" />
                  </marker>
                  <marker id={`${gradientId}-arrow-coral`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 1 L 6 4 L 0 7 z" fill="#f43f5e" />
                  </marker>
                </defs>

                {/* ── ATMOSPHERIC TERRAIN BACKGROUND (Edge to Edge Full Width) ── */}
                <g className="opacity-90">
                  {/* Topographic Dots Field */}
                  <rect
                    x="0"
                    y="40"
                    width="1600"
                    height="440"
                    fill={`url(#${gradientId}-dots)`}
                    mask={`url(#${gradientId}-dots-mask)`}
                    className="opacity-70"
                  />

                  {/* Flowing Wave Surface 1 (Cyan/Blue) */}
                  <path
                    d="M 0 340 C 150 250 240 190 420 270 C 620 350 780 230 960 310 C 1160 390 1320 270 1600 230 L 1600 510 L 0 510 Z"
                    fill={`url(#${gradientId}-terrain-cyan)`}
                  />

                  {/* Flowing Wave Surface 2 (Violet/Pink) */}
                  <path
                    d="M 0 380 C 350 330 520 230 740 190 C 950 150 1030 370 1240 290 C 1440 210 1510 220 1600 210 L 1600 510 L 0 510 Z"
                    fill={`url(#${gradientId}-terrain-violet)`}
                  />

                  {/* Flowing Wave Surface 3 (Teal/Convergence) - Full Width */}
                  <path
                    d="M 0 440 C 350 450 680 430 950 390 C 1120 310 1260 250 C 1400 190 1490 200 1600 190 L 1600 510 L 0 510 Z"
                    fill={`url(#${gradientId}-terrain-teal)`}
                  />
                </g>

                {/* ── SUPPORTING ROUTES & RETRY LOOPS ── */}
                {/* 1. Retry loop: Generic Output (270, 360) -> Add context + try again -> Better Result (460, 275) */}
                <path
                  d="M 285 375 C 335 445, 410 415, 455 295"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  markerEnd={`url(#${gradientId}-arrow-blue)`}
                  className="opacity-90"
                />

                {/* 2. Overconfidence branch: Better Result (460, 275) -> Overconfidence creeps in -> (710, 185) */}
                <path
                  d="M 475 260 C 530 185, 610 155, 695 172"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  markerEnd={`url(#${gradientId}-arrow-violet)`}
                  className="opacity-80"
                />

                {/* 3. Abandoned Attempt: Recalibration (890, 365) -> Returns to old workflow -> (1000, 440) */}
                <path
                  d="M 900 375 C 930 415, 960 438, 1000 440"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-85"
                />
                {/* Terminating hollow circle for abandoned route */}
                <circle cx="1003" cy="441" r="5" fill="none" stroke="#f43f5e" strokeWidth="2.5" />

                {/* 4. Learning Routes (Converging through Test & Learn) */}
                <path
                  d="M 900 355 C 950 325, 990 295, 1050 290"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1.5"
                  className="opacity-40"
                />
                <path
                  d="M 905 370 C 970 400, 1020 370, 1090 305 C 1140 255, 1180 235, 1215 230"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="1.5"
                  className="opacity-45"
                />
                <path
                  d="M 1080 290 C 1125 305, 1170 280, 1215 235"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                  className="opacity-50"
                />

                {/* ── PRIMARY BEHAVIORAL JOURNEY PATH ── */}
                {/* Outer Glow Stroke */}
                <path
                  d="M 10 320 C 50 310, 80 245, 110 210 C 155 160, 210 280, 270 360 C 335 435, 410 350, 460 275 C 530 195, 635 140, 710 185 C 780 230, 825 395, 890 365 C 960 330, 1000 245, 1060 285 C 1115 325, 1170 245, 1220 225 C 1270 210, 1320 210, 1360 210"
                  fill="none"
                  stroke={`url(#${gradientId}-mainPath)`}
                  strokeWidth="8"
                  className="opacity-35 blur-[3px]"
                />

                {/* Core Sharp Stroke */}
                <path
                  d="M 10 320 C 50 310, 80 245, 110 210 C 155 160, 210 280, 270 360 C 335 435, 410 350, 460 275 C 530 195, 635 140, 710 185 C 780 230, 825 395, 890 365 C 960 330, 1000 245, 1060 285 C 1115 325, 1170 245, 1220 225 C 1270 210, 1320 210, 1360 210"
                  fill="none"
                  stroke={`url(#${gradientId}-mainPath)`}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* ── PATH ANNOTATION LABELS (SVG) ── */}
                {/* Curiosity turns into action */}
                <text
                  x="45"
                  y="345"
                  fill={isDark ? "#94a3b8" : "#64748b"}
                  fontSize="9.5"
                  fontWeight="800"
                  letterSpacing="0.12em"
                  className="uppercase font-sans select-text"
                >
                  <tspan x="45" dy="0">CURIOSITY</tspan>
                  <tspan x="45" dy="12">TURNS</tspan>
                  <tspan x="45" dy="12">INTO ACTION</tspan>
                </text>

                {/* Add context + try again */}
                <text
                  x="360"
                  y="440"
                  fill="#0284c7"
                  fontSize="9.5"
                  fontWeight="800"
                  letterSpacing="0.12em"
                  className="uppercase font-sans select-text"
                >
                  ADD CONTEXT + TRY AGAIN
                </text>

                {/* Overconfidence creeps in - centered cleanly in gap */}
                <text
                  x="530"
                  y="140"
                  fill="#9333ea"
                  fontSize="9.5"
                  fontWeight="800"
                  letterSpacing="0.12em"
                  className="uppercase font-sans select-text"
                >
                  <tspan x="530" dy="0">OVERCONFIDENCE</tspan>
                  <tspan x="530" dy="12">CREEPS IN</tspan>
                </text>

                {/* Returns to old workflow */}
                <text
                  x="1020"
                  y="435"
                  fill="#f43f5e"
                  fontSize="9.5"
                  fontWeight="800"
                  letterSpacing="0.12em"
                  className="uppercase font-sans select-text"
                >
                  <tspan x="1020" dy="0">RETURNS TO</tspan>
                  <tspan x="1020" dy="12">OLD WORKFLOW</tspan>
                </text>

                {/* Confidence through experience */}
                <text
                  x="1370"
                  y="360"
                  fill={isDark ? "#94a3b8" : "#64748b"}
                  fontSize="9.5"
                  fontWeight="800"
                  letterSpacing="0.12em"
                  className="uppercase font-sans select-text"
                >
                  <tspan x="1370" dy="0">CONFIDENCE</tspan>
                  <tspan x="1370" dy="12">THROUGH EXPERIENCE</tspan>
                </text>

                {/* ── NODES ON PATH ── */}
                {MILESTONES.map((m) => {
                  const toneColors = {
                    cyan: { fill: "#06b6d4", ring: "rgba(6, 182, 212, 0.45)" },
                    coral: { fill: "#f43f5e", ring: "rgba(244, 63, 94, 0.45)" },
                    blue: { fill: "#0ea5e9", ring: "rgba(14, 165, 233, 0.45)" },
                    magenta: { fill: "#d946ef", ring: "rgba(217, 70, 239, 0.45)" },
                    violet: { fill: "#8b5cf6", ring: "rgba(139, 92, 246, 0.45)" },
                    teal: { fill: "#14b8a6", ring: "rgba(20, 184, 166, 0.45)" },
                  }[m.tone];

                  return (
                    <g key={`node-${m.id}`}>
                      {/* Outer pulse halo */}
                      <circle cx={m.nodeX} cy={m.nodeY} r="14" fill={toneColors.ring} className="animate-pulse" />
                      {/* White border circle */}
                      <circle cx={m.nodeX} cy={m.nodeY} r="8" fill="#ffffff" />
                      {/* Inner colored node */}
                      <circle cx={m.nodeX} cy={m.nodeY} r="5.5" fill={toneColors.fill} />
                    </g>
                  );
                })}

                {/* ── DESTINATION NODE (1360, 210) ── */}
                <g>
                  <circle cx="1360" cy="210" r="22" fill="rgba(20, 184, 166, 0.4)" className="animate-pulse" />
                  <circle cx="1360" cy="210" r="11" fill="#ffffff" />
                  <circle cx="1360" cy="210" r="7.5" fill="#14b8a6" />
                </g>
              </svg>

              {/* ── HTML MILESTONE GLASS CARDS (Completely Non-overlapping) ── */}
              {MILESTONES.map((m) => {
                const leftPct = (m.nodeX / 1600) * 100;
                const topPct = (m.nodeY / 510) * 100;

                const isTop = m.cardPlacement === "top";
                const isPrimary = m.emphasis === "primary";

                const badgeColor = {
                  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-400/40",
                  coral: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-400/40",
                  blue: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-400/40",
                  magenta: "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-400/40",
                  violet: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-400/40",
                  teal: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-400/40",
                }[m.tone];

                return (
                  <div
                    key={`card-${m.id}`}
                    className="absolute pointer-events-auto select-text"
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: isTop
                        ? `translate(calc(-50% + ${m.cardOffsetX || 0}px), calc(-100% - ${Math.abs(m.cardOffsetY || 16)}px))`
                        : `translate(calc(-50% + ${m.cardOffsetX || 0}px), ${Math.abs(m.cardOffsetY || 16)}px)`,
                    }}
                  >
                    <div
                      className={`rounded-2xl transition-all duration-300 group hover:scale-105 cursor-default ${
                        isPrimary
                          ? "w-[135px] lg:w-[145px] p-2.5 sm:p-3"
                          : "w-[125px] lg:w-[135px] p-2 sm:p-2.5"
                      } ${
                        isDark
                          ? "bg-[#0b1329]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.45)] text-white"
                          : "bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.06)] text-slate-900"
                      }`}
                    >
                      {/* Header: Number Badge + Title */}
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span
                          className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-md border ${badgeColor}`}
                        >
                          {m.number}
                        </span>
                        <h3 className="text-[11.5px] lg:text-[12px] font-bold leading-tight tracking-tight">
                          {m.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-[10px] lg:text-[10.5px] leading-snug font-normal ${
                          isDark ? "text-slate-300/85" : "text-[#475569]"
                        }`}
                      >
                        {m.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* ── LASTING ADOPTION DESTINATION ISLAND ── */}
              <div
                className="absolute pointer-events-auto select-text"
                style={{
                  left: `${(1370 / 1600) * 100}%`,
                  top: `${(210 / 510) * 100}%`,
                  transform: "translate(0%, -50%)",
                }}
              >
                <div
                  className={`w-[180px] lg:w-[200px] rounded-[22px] lg:rounded-[24px] p-3 sm:p-3.5 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-[#071927]/92 backdrop-blur-2xl border border-teal-400/30 shadow-[0_12px_36px_rgba(20,184,166,0.25)] text-white"
                      : "bg-white/94 backdrop-blur-2xl border border-teal-200/90 shadow-[0_12px_36px_rgba(20,184,166,0.14)] text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                    <span className="text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
                      LASTING ADOPTION
                    </span>
                  </div>
                  <h3
                    className="text-[13px] sm:text-[14px] font-black leading-tight tracking-tight mb-1"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    AI becomes part of how work gets done.
                  </h3>
                  <p
                    className={`text-[9.5px] sm:text-[10.5px] leading-snug font-medium ${
                      isDark ? "text-slate-300/85" : "text-[#475569]"
                    }`}
                  >
                    Value becomes repeatable—not occasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. MOBILE INTENTIONAL RECOMPOSITION (<768px) ────────── */}
        <div className="block md:hidden w-full max-w-[500px] mx-auto">
          {/* Mobile Container with Vertical Flow */}
          <div
            className={`rounded-[24px] p-5 sm:p-6 transition-all duration-300 ${
              isDark
                ? "bg-[#060c1c]/90 backdrop-blur-xl border border-white/10"
                : "bg-gradient-to-b from-white/90 via-[#f0f6fc]/80 to-[#fdf8ff]/90 backdrop-blur-xl border border-slate-200/80"
            }`}
          >
            {/* Mobile Header Label */}
            <div
              className={`text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2 ${
                isDark ? "text-slate-400" : "text-slate-700"
              }`}
            >
              WHAT PEOPLE ACTUALLY EXPERIENCE
            </div>

            {/* Story-Zones Bar */}
            <div className="flex items-center justify-between gap-1 pb-3 mb-5 border-b border-slate-200/50 dark:border-white/5 text-[9.5px] font-extrabold tracking-wider uppercase">
              <span className="text-cyan-600 dark:text-cyan-400">EXCITEMENT</span>
              <span className="text-slate-400">→</span>
              <span className="text-fuchsia-600 dark:text-fuchsia-400">TEST &amp; LEARN</span>
              <span className="text-slate-400">→</span>
              <span className="text-teal-600 dark:text-teal-400">INTEGRATE</span>
            </div>

            {/* Vertical Milestone Flow */}
            <div className="space-y-3.5 relative">
              {/* Vertical connecting ambient line */}
              <div
                className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-teal-400 opacity-40 z-0"
              />

              {MILESTONES.map((m, idx) => {
                const badgeColor = {
                  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-400/40",
                  coral: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-400/40",
                  blue: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-400/40",
                  magenta: "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-400/40",
                  violet: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-400/40",
                  teal: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-400/40",
                }[m.tone];

                const dotColor = {
                  cyan: "bg-cyan-500",
                  coral: "bg-rose-500",
                  blue: "bg-sky-500",
                  magenta: "bg-fuchsia-500",
                  violet: "bg-purple-500",
                  teal: "bg-teal-500",
                }[m.tone];

                return (
                  <div key={`mobile-card-${m.id}`} className="relative z-10">
                    <div
                      className={`flex items-start gap-3.5 p-3.5 rounded-2xl transition-all ${
                        isDark
                          ? "bg-[#0b1329]/80 backdrop-blur-md border border-white/10 text-white"
                          : "bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-900"
                      }`}
                    >
                      {/* Node Dot */}
                      <div className="flex flex-col items-center shrink-0 mt-1">
                        <div
                          className={`w-3.5 h-3.5 rounded-full ${dotColor} flex items-center justify-center ring-4 ${
                            isDark ? "ring-white/10" : "ring-slate-100"
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded border ${badgeColor}`}
                          >
                            {m.number}
                          </span>
                          <h3 className="text-[13px] font-bold leading-tight tracking-tight">
                            {m.title}
                          </h3>
                        </div>
                        <p
                          className={`text-[11.5px] leading-snug font-normal ${
                            isDark ? "text-slate-300/85" : "text-[#475569]"
                          }`}
                        >
                          {m.description}
                        </p>
                      </div>
                    </div>

                    {/* Supporting Route Callout Pills on Mobile */}
                    {idx === 1 && (
                      <div className="ml-8 my-2 py-1 px-3 rounded-full text-[10px] font-extrabold tracking-wider uppercase inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-400/30">
                        <span>↺</span>
                        <span>ADD CONTEXT + TRY AGAIN</span>
                      </div>
                    )}
                    {idx === 3 && (
                      <div className="ml-8 my-2 py-1 px-3 rounded-full text-[10px] font-extrabold tracking-wider uppercase inline-flex items-center gap-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-400/30">
                        <span>↗</span>
                        <span>OVERCONFIDENCE CREEPS IN</span>
                      </div>
                    )}
                    {idx === 4 && (
                      <div className="ml-8 my-2 py-1 px-3 rounded-full text-[10px] font-extrabold tracking-wider uppercase inline-flex items-center gap-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-400/30">
                        <span>↘</span>
                        <span>RETURNS TO OLD WORKFLOW</span>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Lasting Adoption Destination */}
              <div className="relative z-10 pt-2">
                <div
                  className={`p-4 sm:p-5 rounded-[22px] ${
                    isDark
                      ? "bg-[#071927]/90 backdrop-blur-xl border border-teal-400/30 text-white"
                      : "bg-white/95 backdrop-blur-xl border border-teal-200/90 text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-300">
                      LASTING ADOPTION
                    </span>
                  </div>
                  <h3 className="text-[15px] font-black leading-tight tracking-tight mb-1.5">
                    AI becomes part of how work gets done.
                  </h3>
                  <p
                    className={`text-[12px] leading-snug font-normal ${
                      isDark ? "text-slate-300/85" : "text-[#475569]"
                    }`}
                  >
                    Value becomes repeatable—not occasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. CLOSING STAGE-AWARE TRANSITION ────────────────────── */}
        <div className="text-center max-w-[820px] mx-auto mt-12 sm:mt-16 lg:mt-20">
          {/* Main Transition Headline */}
          <h3
            className={`text-[20px] sm:text-[25px] lg:text-[28px] font-bold tracking-tight leading-[1.25] mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-[#0b0f19]"
            }`}
            style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
          >
            The journey is nonlinear. The response should be stage-aware.
          </h3>

          {/* Transition Description */}
          <p
            className={`text-[14px] sm:text-[16px] leading-[1.5] max-w-[760px] mx-auto font-normal ${
              isDark ? "text-slate-300/85" : "text-[#475569]"
            }`}
          >
            ADOPT helps teams recognize the moment, understand the friction and choose the
            intervention that moves behavior forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdoptionRealitySection;
