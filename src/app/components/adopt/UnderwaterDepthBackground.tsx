import React, { useEffect, useRef } from "react";

interface UnderwaterDepthBackgroundProps {
  isDark: boolean;
  scrollY?: number;
  mousePos?: { x: number; y: number };
}

export const UnderwaterDepthBackground: React.FC<UnderwaterDepthBackgroundProps> = ({
  isDark,
  scrollY = 0,
  mousePos = { x: 0, y: 0 },
}) => {
  if (!isDark) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* ── 1. BASE PROGRESSIVE OCEAN DEPTH GRADIENT ─────────────────── */}
      {/* Seamless transition: Surface (0-850px) -> Waterline/Behavior (850-1800px) -> Stages (1800-3000px) -> Abyss (3000-4800px) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(
            to bottom,
            #030712 0px,
            #040a1c 450px,
            #051329 850px,
            #061a38 1050px,
            #04162f 1450px,
            #031329 1900px,
            #041125 2400px,
            #050d22 3000px,
            #070b1e 3600px,
            #090918 4200px,
            #0b0816 100%
          )`,
        }}
      />

      {/* ── 2. DEPTH 1: WATERLINE VOLUMETRIC LIGHT RAYS & CAUSTICS (850px - 1900px) ─ */}
      <div className="absolute top-[850px] left-0 w-full h-[1100px] overflow-hidden pointer-events-none">
        {/* Overhead Waterline Shimmer Line */}
        <div
          className="absolute top-0 left-0 w-full h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.15) 15%, rgba(125,211,252,0.45) 50%, rgba(56,189,248,0.15) 85%, transparent 100%)",
            filter: "blur(1px)",
          }}
        />

        {/* Refractive Volumetric Light Shafts */}
        <svg
          className="absolute -top-10 left-0 w-full h-full opacity-40 mix-blend-screen"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rayGrad1" x1="0%" y1="0%" x2="30%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#0284c7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad2" x1="50%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad3" x1="80%" y1="0%" x2="95%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="45%" stopColor="#0369a1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Angled Light Rays from Waterline */}
          <polygon points="120,0 260,0 480,900 240,900" fill="url(#rayGrad1)" />
          <polygon points="460,0 640,0 920,900 680,900" fill="url(#rayGrad2)" />
          <polygon points="820,0 980,0 1340,900 1120,900" fill="url(#rayGrad3)" />
          <polygon points="1100,0 1280,0 1560,900 1360,900" fill="url(#rayGrad1)" opacity="0.6" />
        </svg>

        {/* Soft Subsurface Ambient Bioluminescence behind Iceberg */}
        <div
          className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.16) 0%, rgba(3, 105, 161, 0.08) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* ── 3. DEPTH 2: 5 ADOPT STAGES AMBIENT BEACONS & CONNECTING SPLINE (1900px - 3100px) ─ */}
      <div className="absolute top-[1850px] left-0 w-full h-[1250px] overflow-hidden pointer-events-none">
        {/* Distant Submerged Geological Formations (Low-contrast Crystalline Silhouettes) */}
        <svg
          className="absolute top-[280px] left-0 w-full h-[480px] opacity-25"
          viewBox="0 0 1440 480"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,480 L-50,320 Q180,180 380,290 T820,240 T1260,310 T1500,220 L1500,480 Z"
            fill="rgba(4, 22, 52, 0.65)"
          />
          <path
            d="M-50,480 L-50,380 Q240,260 520,350 T1040,290 T1500,360 L1500,480 Z"
            fill="rgba(3, 14, 36, 0.85)"
          />
        </svg>

        {/* 5 Distinct Ambient Color Pools behind each of the 5 Astronaut Stage Cards */}
        {/* 01 Aware: Cyan */}
        <div
          className="absolute top-[420px] left-[10%] w-[240px] h-[360px] rounded-full blur-[90px]"
          style={{ background: "rgba(2, 132, 199, 0.22)" }}
        />
        {/* 02 Desire: Magenta */}
        <div
          className="absolute top-[420px] left-[28%] w-[240px] h-[360px] rounded-full blur-[90px]"
          style={{ background: "rgba(244, 63, 94, 0.18)" }}
        />
        {/* 03 Open: Violet */}
        <div
          className="absolute top-[420px] left-[46%] w-[240px] h-[360px] rounded-full blur-[90px]"
          style={{ background: "rgba(139, 92, 246, 0.20)" }}
        />
        {/* 04 Proficient: Amber */}
        <div
          className="absolute top-[420px] left-[64%] w-[240px] h-[360px] rounded-full blur-[90px]"
          style={{ background: "rgba(245, 158, 11, 0.17)" }}
        />
        {/* 05 Transform: Teal */}
        <div
          className="absolute top-[420px] left-[82%] w-[240px] h-[360px] rounded-full blur-[90px]"
          style={{ background: "rgba(16, 185, 129, 0.18)" }}
        />

        {/* Luminous Curved Waypoint Spline Arc Connecting the 5 Stages */}
        <div className="absolute top-[520px] left-0 w-full max-w-[1440px] mx-auto px-6 sm:px-12 flex items-center justify-center">
          <svg
            className="w-full h-[220px] overflow-visible opacity-75"
            viewBox="0 0 1200 180"
            fill="none"
          >
            <defs>
              <linearGradient id="stageSplineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#f43f5e" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glowSpline" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing Smooth Curved Arc Passing Through All 5 Stages */}
            <path
              d="M 120,40 Q 360,165 600,165 T 1080,40"
              stroke="url(#stageSplineGrad)"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              filter="url(#glowSpline)"
            />

            {/* 5 Beacon Glow Nodes on the Spline */}
            {/* 01 Aware */}
            <circle cx="120" cy="40" r="5" fill="#38bdf8" filter="url(#glowSpline)" />
            <circle cx="120" cy="40" r="2" fill="#ffffff" />

            {/* 02 Desire */}
            <circle cx="340" cy="130" r="5" fill="#f43f5e" filter="url(#glowSpline)" />
            <circle cx="340" cy="130" r="2" fill="#ffffff" />

            {/* 03 Open */}
            <circle cx="600" cy="165" r="5" fill="#a855f7" filter="url(#glowSpline)" />
            <circle cx="600" cy="165" r="2" fill="#ffffff" />

            {/* 04 Proficient */}
            <circle cx="860" cy="130" r="5" fill="#fbbf24" filter="url(#glowSpline)" />
            <circle cx="860" cy="130" r="2" fill="#ffffff" />

            {/* 05 Transform */}
            <circle cx="1080" cy="40" r="5" fill="#34d399" filter="url(#glowSpline)" />
            <circle cx="1080" cy="40" r="2" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* ── 4. DEPTH 3: ABYSSAL SEABED & BIOLUMINESCENCE (3100px - END) ── */}
      <div className="absolute top-[3100px] left-0 w-full h-[1700px] overflow-hidden pointer-events-none">
        {/* Deep Ocean Trench Silhouette Contour */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[520px] opacity-40"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="trenchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#080d22" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#03040a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M-50,520 L-50,220 Q280,380 620,240 T1200,340 T1500,200 L1500,520 Z"
            fill="url(#trenchGrad)"
          />
        </svg>

        {/* Bioluminescent Hydrothermal / Rocket Glow behind Launchpad */}
        <div
          className="absolute top-[350px] left-[25%] w-[680px] h-[520px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.22) 0%, rgba(59, 130, 246, 0.16) 45%, rgba(13, 148, 136, 0.08) 70%, transparent 100%)",
          }}
        />

        <div
          className="absolute top-[750px] right-[15%] w-[600px] h-[450px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* ── 5. SUBMERGED SUSPENDED PARTICLES & MICROBUBBLES ──────────── */}
      {/* 30 Floating Luminescent Marine Dust Particles positioned with subtle drift */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {[
          { top: "950px", left: "14%", size: 3, opacity: 0.45, delay: "0s", duration: "22s" },
          { top: "1120px", left: "42%", size: 4, opacity: 0.6, delay: "-4s", duration: "26s" },
          { top: "1280px", left: "78%", size: 2.5, opacity: 0.35, delay: "-8s", duration: "18s" },
          { top: "1450px", left: "22%", size: 5, opacity: 0.5, delay: "-12s", duration: "24s" },
          { top: "1600px", left: "88%", size: 3, opacity: 0.4, delay: "-16s", duration: "20s" },
          { top: "1780px", left: "35%", size: 4.5, opacity: 0.55, delay: "-2s", duration: "28s" },
          { top: "1950px", left: "18%", size: 3, opacity: 0.45, delay: "-7s", duration: "21s" },
          { top: "2100px", left: "54%", size: 3.5, opacity: 0.6, delay: "-11s", duration: "25s" },
          { top: "2280px", left: "72%", size: 2, opacity: 0.3, delay: "-15s", duration: "19s" },
          { top: "2450px", left: "28%", size: 4, opacity: 0.5, delay: "-19s", duration: "27s" },
          { top: "2620px", left: "84%", size: 3, opacity: 0.4, delay: "-3s", duration: "22s" },
          { top: "2800px", left: "46%", size: 5, opacity: 0.55, delay: "-9s", duration: "30s" },
          { top: "3050px", left: "15%", size: 3, opacity: 0.35, delay: "-13s", duration: "23s" },
          { top: "3280px", left: "62%", size: 4, opacity: 0.5, delay: "-17s", duration: "26s" },
          { top: "3520px", left: "82%", size: 2.5, opacity: 0.35, delay: "-5s", duration: "20s" },
          { top: "3750px", left: "30%", size: 4.5, opacity: 0.45, delay: "-10s", duration: "28s" },
          { top: "4020px", left: "75%", size: 3, opacity: 0.4, delay: "-14s", duration: "22s" },
          { top: "4280px", left: "20%", size: 3.5, opacity: 0.35, delay: "-18s", duration: "24s" },
        ].map((p, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-cyan-300 animate-pulse pointer-events-none"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 3}px rgba(56, 189, 248, 0.8)`,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── 6. RIGHT-HAND OCEANIC DEPTH HUD RAIL (DESKTOP ONLY) ──────── */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-1 z-20 pointer-events-none select-none opacity-45 hover:opacity-80 transition-opacity duration-300">
        {/* Depth Markers HUD */}
        <div className="flex flex-col items-end gap-14 text-[9px] font-mono font-bold tracking-widest uppercase text-sky-400/80">
          {/* Surface: 0m */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-slate-400">SURFACE</span>
            <span className="text-[10px] text-sky-300">0m</span>
            <div className="w-2 h-2 rounded-full border border-sky-400/60 bg-sky-400/30" />
          </div>

          {/* Dotted Vertical Rail */}
          <div className="w-[1px] h-12 border-r border-dashed border-sky-400/30 self-end mr-[3px]" />

          {/* Behavior Depth: 100m */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-slate-400">BEHAVIOR</span>
            <span className="text-[10px] text-sky-300">100m</span>
            <div className="w-2 h-2 rounded-full border border-sky-400/60 bg-sky-400/30" />
          </div>

          {/* Dotted Vertical Rail */}
          <div className="w-[1px] h-12 border-r border-dashed border-sky-400/30 self-end mr-[3px]" />

          {/* Stages: 300m */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-slate-400">STAGES</span>
            <span className="text-[10px] text-sky-300">300m</span>
            <div className="w-2 h-2 rounded-full border border-purple-400/60 bg-purple-400/30" />
          </div>

          {/* Dotted Vertical Rail */}
          <div className="w-[1px] h-12 border-r border-dashed border-sky-400/30 self-end mr-[3px]" />

          {/* Applied Impact: 800m */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-slate-400">APPLIED IMPACT</span>
            <span className="text-[10px] text-sky-300">800m</span>
            <div className="w-2 h-2 rounded-full border border-teal-400/60 bg-teal-400/30" />
          </div>
        </div>
      </div>
    </div>
  );
};
