import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Maximize2,
  Code2,
  BarChart3,
  RotateCw,
  Activity,
  TrendingUp,
  Compass,
  Radio,
  Sliders,
  Globe,
  Layers,
  Cpu,
  Share2
} from "lucide-react";
import "../../../styles/adopt-landing.css";

interface VibeCodingPageProps {
  onBack?: () => void;
  onNavigateAdopt?: () => void;
}

export function VibeCodingPage({ onBack, onNavigateAdopt }: VibeCodingPageProps) {
  const handleBackToHome = () => {
    if (onBack) {
      onBack();
    } else if (typeof window !== "undefined") {
      window.location.pathname = "/";
    }
  };

  const handleContactClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onBack) {
      onBack();
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else if (typeof window !== "undefined") {
      window.location.href = "/#contact";
    }
  };

  // Clean, sleek dark card styling without heavy glass reflections
  const cleanCardStyle: React.CSSProperties = {
    background: "#080c1d",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "28px",
    boxShadow: "0 12px 32px -8px rgba(0, 0, 0, 0.6)",
  };

  return (
    <div
      className="min-h-screen font-sans text-white selection:bg-[#38bdf8] selection:text-black"
      style={{
        backgroundColor: "#050711",
        backgroundImage: `
          radial-gradient(ellipse 90% 50% at 50% -10%, rgba(56, 189, 248, 0.06), transparent 70%),
          radial-gradient(ellipse 60% 40% at 90% 30%, rgba(129, 140, 248, 0.04), transparent 60%),
          radial-gradient(ellipse 70% 50% at 10% 70%, rgba(192, 132, 252, 0.03), transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(6, 10, 26, 1), #050711)
        `,
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ── Top Header Navigation ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050711]/90 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-white/60 group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-200" />
            <span>Back to Portfolio</span>
          </button>

          <button
            type="button"
            onClick={() => handleContactClick()}
            className="adopt-hero-btn-primary group"
            style={{
              textDecoration: "none",
              padding: "6px 6px 6px 18px",
              fontSize: "14px",
              gap: "10px",
            }}
          >
            <span>Collaborate</span>
            <span
              className="adopt-btn-circle-arrow"
              style={{ width: "28px", height: "28px" }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-[#3e38f5] stroke-[2.5]" />
            </span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 sm:pt-20 pb-28 space-y-16 sm:space-y-20">
        {/* ── Hero Listing Header (Clean 2-line title, No Image) ─────── */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border bg-[#090e21] border-white/10 text-[#cbd5e1]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>DESIGNING THROUGH CODE</span>
          </div>

          {/* 2-Line Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] tracking-tight font-normal text-white"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            From product intent <br />
            to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              working software.
            </span>
          </h1>

          <p
            className="text-base sm:text-lg text-white/70 leading-relaxed font-light max-w-2xl mx-auto"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif" }}
          >
            I use AI-assisted coding to explore complex interactions, test product hypotheses and build functional experiences—without losing design judgment, systems thinking or craft.
          </p>
        </section>

        {/* ── 4-Step Process Strip (Matching Clean Pill Design) ──────── */}
        <section className="max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-[28px] sm:rounded-full border bg-[#080c1d] border-white/[0.08] shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {/* Step 1: Frame */}
              <div className="flex items-center gap-3.5 pl-2 pt-2 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-sky-950/60 border-sky-500/25 text-sky-400">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Frame</div>
                  <div className="text-[12px] font-medium text-slate-400">Clarify intent & constraints</div>
                </div>
              </div>

              {/* Step 2: Build */}
              <div className="flex items-center gap-3.5 pl-2 md:pl-6 pt-3 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-indigo-950/60 border-indigo-500/25 text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Build</div>
                  <div className="text-[12px] font-medium text-slate-400">Compose systems & interactions</div>
                </div>
              </div>

              {/* Step 3: Evaluate */}
              <div className="flex items-center gap-3.5 pl-2 md:pl-6 pt-3 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-pink-950/60 border-pink-500/25 text-pink-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Evaluate</div>
                  <div className="text-[12px] font-medium text-slate-400">Test in context & measure</div>
                </div>
              </div>

              {/* Step 4: Refine */}
              <div className="flex items-center gap-3.5 pl-2 md:pl-6 pt-3 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-emerald-950/60 border-emerald-500/25 text-emerald-400">
                  <RotateCw className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Refine</div>
                  <div className="text-[12px] font-medium text-slate-400">Iterate with design judgment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 01: AdoptIQ.ai (Clean Simple Dark Card) ──── */}
        <section
          className="p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group hover:border-white/15"
          style={cleanCardStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border bg-white/[0.04] border-white/10 text-[#cbd5e1]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                <span>01 / BEHAVIORAL INTELLIGENCE</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                AdoptIQ.ai
              </h2>

              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Diagnosing where adoption breaks—and what teams should do next.
              </p>

              {/* 3-Column Spec Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/[0.06] pb-2">
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Purpose</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Turn behavioral signals into action</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Design focus</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Diagnosis and intervention</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Built as</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Functional AI product</div>
                </div>
              </div>

              {/* Feature Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Behavioral diagnosis</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <TrendingUp className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span>Actionable insights</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Compass className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Guided interventions</span>
                </span>
              </div>

              {/* Technology String */}
              <div className="text-xs text-white/50 font-mono pt-1">
                <span className="text-white/70">Technology:</span> React · TypeScript · Node.js · OpenAI
              </div>

              {/* Primary Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onNavigateAdopt || (() => { if (typeof window !== "undefined") window.location.pathname = "/adopt-landing"; })}
                  className="adopt-hero-btn-primary group"
                  style={{ textDecoration: "none" }}
                >
                  <span>Explore AdoptIQ.ai</span>
                  <span className="adopt-btn-circle-arrow">
                    <ArrowRight className="w-3.5 h-3.5 text-[#3e38f5] stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#050713] shadow-xl group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/IMG/AdoptIQDashboardCard.jpg"
                  alt="AdoptIQ.ai Behavioral Intelligence Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 02: PartyTogether (Clean Simple Dark Card) ── */}
        <section
          className="p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group hover:border-white/15"
          style={cleanCardStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border bg-white/[0.04] border-white/10 text-[#cbd5e1]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
                <span>02 / COLLABORATIVE INTERACTION</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                PartyTogether
              </h2>

              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                A synchronized social listening room designed around shared control.
              </p>

              {/* 3-Column Spec Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/[0.06] pb-2">
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Purpose</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Make listening social</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Design focus</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Shared playback and participation</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Built as</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Real-time interactive product</div>
                </div>
              </div>

              {/* Feature Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Radio className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span>Real-time sync</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Sliders className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Shared control</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Globe className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Cross-platform</span>
                </span>
              </div>

              {/* Technology String */}
              <div className="text-xs text-white/50 font-mono pt-1">
                <span className="text-white/70">Technology:</span> React Native · TypeScript · WebSocket · Supabase
              </div>

              {/* Secondary Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleContactClick()}
                  className="rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-[14px] sm:text-[15px] cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm bg-white/8 hover:bg-white/15 text-white border border-white/18"
                >
                  <span>View interactive demo</span>
                </button>
              </div>
            </div>

            {/* Right Visual Column: 3 Phone Screens */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#050713] shadow-xl group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/IMG/PartyTogetherPhones.jpg"
                  alt="PartyTogether Synchronized Audio App"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 03: Antigravity Token Studio (Clean Dark Card) ── */}
        <section
          className="p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group hover:border-white/15"
          style={cleanCardStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border bg-white/[0.04] border-white/10 text-[#cbd5e1]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>03 / DESIGN SYSTEM ENGINEERING</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Antigravity Token Studio
              </h2>

              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Turning design-system intent into production-ready components.
              </p>

              {/* 3-Column Spec Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/[0.06] pb-2">
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Purpose</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Close the design-to-code gap</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Design focus</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Semantic systems and automation</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Built as</div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium mt-1">Agentic engineering tool</div>
                </div>
              </div>

              {/* Feature Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Design-token sync</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>AST code generation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  <Cpu className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Production components</span>
                </span>
              </div>

              {/* Technology String */}
              <div className="text-xs text-white/50 font-mono pt-1">
                <span className="text-white/70">Technology:</span> TypeScript · AST · Tailwind · Vite
              </div>

              {/* Secondary Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleContactClick()}
                  className="rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-[14px] sm:text-[15px] cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm bg-white/8 hover:bg-white/15 text-white border border-white/18"
                >
                  <span>Inspect architecture</span>
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#050713] shadow-xl group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/IMG/TokenStudio.jpg"
                  alt="Antigravity Token Studio AST Workbench"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature Callout Card: "Vibe coding is not skipping design." ── */}
        <section
          className="p-8 sm:p-14 transition-all duration-300 relative overflow-hidden"
          style={cleanCardStyle}
        >
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Vibe coding is not skipping design.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Quadrant Points */}
            <div className="lg:col-span-4 space-y-10">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Frame the behavior</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed">
                    Define intent, success metrics, and edge cases.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#818cf8] shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Evaluate in context</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed">
                    Measure outcomes with real users and data.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Orbital Ring Visual */}
            <div className="lg:col-span-4 flex justify-center py-6 lg:py-0">
              <div className="relative w-64 h-48 sm:w-80 sm:h-56 flex items-center justify-center">
                {/* Outer glowing orbital ellipse */}
                <div
                  className="absolute inset-0 rounded-full border border-[#818cf8]/30 shadow-[0_0_30px_rgba(99,102,241,0.15)] transform -rotate-12"
                  style={{
                    boxShadow: "0 0 30px rgba(56, 189, 248, 0.15), inset 0 0 20px rgba(192, 132, 252, 0.1)",
                  }}
                />
                <div className="absolute inset-4 rounded-full border border-dashed border-white/15 transform -rotate-12" />

                {/* Glowing celestial center star */}
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#38bdf8]" />

                {/* Orbiting glowing node points */}
                <div className="absolute top-4 left-10 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]" />
                <div className="absolute bottom-6 right-10 w-2.5 h-2.5 rounded-full bg-[#c084fc] shadow-[0_0_12px_#c084fc]" />
                <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-[#818cf8] shadow-[0_0_10px_#818cf8]" />
                <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
              </div>
            </div>

            {/* Right Quadrant Points */}
            <div className="lg:col-span-4 space-y-10">
              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#c084fc] shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Model the interaction</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed">
                    Map flows, states, and feedback loops.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Build the system</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed">
                    Compose components, logic, and data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 04: Technical Explorations (Clean Dark Card) ─ */}
        <section
          className="p-6 sm:p-8 transition-all duration-300 shadow-lg"
          style={{ ...cleanCardStyle, borderRadius: "24px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Label */}
            <div className="md:col-span-3 text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-white/60">
              Technical explorations
            </div>

            {/* Middle Thumbnail */}
            <div className="md:col-span-4 rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-md">
              <img
                src="/IMG/CosmicSandbox.jpg"
                alt="Cosmic Kinetic Sandbox"
                className="w-full h-24 object-cover"
              />
            </div>

            {/* Right Details */}
            <div className="md:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">Cosmic Kinetic Sandbox</h3>
                <p className="text-xs text-[#c084fc] font-medium mt-0.5">3D Celestial N-Body Gravity Engine</p>
                <p className="text-xs text-white/60 font-light mt-1">
                  Interactive orbital mechanics visualizer with realistic particle streams and WebGL shaders.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleContactClick()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38bdf8] hover:text-white shrink-0 group/link transition-colors"
              >
                <span>Launch physics sandbox</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Closing Philosophy & Primary Action CTA ───────────────── */}
        <section className="text-center py-12 sm:py-16 space-y-6 max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-snug"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Designers should not stop <br />
            at describing the experience.
          </h2>

          <p className="text-sm sm:text-base text-white/60 font-light">
            Design judgment leads. AI expands the possible. Code makes it real.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={() => handleContactClick()}
              className="adopt-hero-btn-primary group"
              style={{
                textDecoration: "none",
                padding: "8px 8px 8px 24px",
                fontSize: "15px",
                gap: "12px",
              }}
            >
              <span>Discuss a product problem</span>
              <span
                className="adopt-btn-circle-arrow"
                style={{ width: "32px", height: "32px" }}
              >
                <ArrowRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
              </span>
            </button>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-10 px-6 sm:px-10 text-xs text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vikram Venkatesh — Principal Product Designer & UX Engineer</p>
          <button
            type="button"
            onClick={handleBackToHome}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Homepage</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
