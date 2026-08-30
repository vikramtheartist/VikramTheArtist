import React, { useState } from "react";
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
  Share2,
  ChevronRight,
  ExternalLink
} from "lucide-react";

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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else if (typeof window !== "undefined") {
      window.location.href = "/#contact";
    }
  };

  return (
    <div
      className="min-h-screen font-sans text-white selection:bg-[#38bdf8] selection:text-black"
      style={{
        backgroundColor: "#050711",
        backgroundImage: `
          radial-gradient(ellipse 90% 50% at 50% -10%, rgba(56, 189, 248, 0.08), transparent 70%),
          radial-gradient(ellipse 60% 40% at 90% 30%, rgba(129, 140, 248, 0.05), transparent 60%),
          radial-gradient(ellipse 70% 50% at 10% 70%, rgba(192, 132, 252, 0.04), transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(6, 10, 26, 1), #050711)
        `,
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ── Top Header Navigation ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/[0.06] bg-[#050711]/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-white/60 group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-200" />
            <span>Back to Portfolio</span>
          </button>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #4338ca 0%, #3b82f6 100%)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span>Collaborate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 sm:pt-20 pb-28 space-y-20 sm:space-y-24">
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-[#38bdf8] uppercase">
              DESIGNING THROUGH CODE
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight font-normal text-white"
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
              className="text-base sm:text-lg text-white/70 leading-relaxed font-light max-w-xl"
              style={{ fontFamily: "'Satoshi', 'Inter', sans-serif" }}
            >
              I use AI-assisted coding to explore complex interactions, test product hypotheses and build functional experiences—without losing design judgment, systems thinking or craft.
            </p>
          </div>

          {/* Right Column: Floating 3D Isometric Screen Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden border border-white/10 bg-[#070b19]/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm group hover:border-white/20 transition-all duration-500">
              <img
                src="/IMG/VibeCodingHero.jpg"
                alt="From product intent to working software"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── 4-Step Process Strip / Workflow Bar ───────────────────── */}
        <section className="rounded-2xl border border-white/[0.08] bg-[#090e21]/70 backdrop-blur-md p-6 sm:p-7 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
            {/* Step 1: Frame */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">Frame</div>
                <div className="text-xs text-white/55 font-light">Clarify intent & constraints</div>
              </div>
            </div>

            {/* Step 2: Build */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#818cf8] shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">Build</div>
                <div className="text-xs text-white/55 font-light">Compose systems & interactions</div>
              </div>
            </div>

            {/* Step 3: Evaluate */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">Evaluate</div>
                <div className="text-xs text-white/55 font-light">Test in context & measure</div>
              </div>
            </div>

            {/* Step 4: Refine */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#c084fc] shrink-0">
                <RotateCw className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">Refine</div>
                <div className="text-xs text-white/55 font-light">Iterate with design judgment</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 01: AdoptIQ.ai ─────────────────────────── */}
        <section className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0b1024]/90 to-[#070b1a]/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-white/15 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#38bdf8] uppercase">
                01 / BEHAVIORAL INTELLIGENCE
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Behavioral diagnosis</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <TrendingUp className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span>Actionable insights</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Compass className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Guided interventions</span>
                </span>
              </div>

              {/* Technology String */}
              <div className="text-xs text-white/50 font-mono pt-1">
                <span className="text-white/70">Technology:</span> React · TypeScript · Node.js · OpenAI
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onNavigateAdopt || (() => { if (typeof window !== "undefined") window.location.pathname = "/adopt-landing"; })}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#1e293b]/80 border border-white/20 hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-all duration-300 group/btn"
                >
                  <span>Explore AdoptIQ.ai</span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover/btn:translate-x-1 group-hover/btn:text-[#38bdf8] transition-all" />
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080d1f] shadow-2xl group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/IMG/AdoptIQDashboardCard.jpg"
                  alt="AdoptIQ.ai Behavioral Intelligence Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 02: PartyTogether ──────────────────────── */}
        <section className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0b1024]/90 to-[#070b1a]/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-white/15 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#818cf8] uppercase">
                02 / COLLABORATIVE INTERACTION
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Radio className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span>Real-time sync</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Sliders className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Shared control</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Globe className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Cross-platform</span>
                </span>
              </div>

              {/* Technology String */}
              <div className="text-xs text-white/50 font-mono pt-1">
                <span className="text-white/70">Technology:</span> React Native · TypeScript · WebSocket · Supabase
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#1e293b]/80 border border-white/20 hover:border-[#818cf8] hover:bg-[#818cf8]/10 transition-all duration-300 group/btn"
                >
                  <span>View interactive demo</span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover/btn:translate-x-1 group-hover/btn:text-[#818cf8] transition-all" />
                </button>
              </div>
            </div>

            {/* Right Visual Column: 3 Phone Screens */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080d1f] shadow-2xl group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/IMG/PartyTogetherPhones.jpg"
                  alt="PartyTogether Synchronized Audio App"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 03: Antigravity Token Studio ─────────────── */}
        <section className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0b1024]/90 to-[#070b1a]/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-white/15 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#10b981] uppercase">
                03 / DESIGN SYSTEM ENGINEERING
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Design-token sync</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>AST code generation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                  <Cpu className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Production components</span>
                </span>
              </div>

              {/* Technology String */}
              <div className="text-xs text-white/50 font-mono pt-1">
                <span className="text-white/70">Technology:</span> TypeScript · AST · Tailwind · Vite
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#1e293b]/80 border border-white/20 hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all duration-300 group/btn"
                >
                  <span>Inspect architecture</span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover/btn:translate-x-1 group-hover/btn:text-[#10b981] transition-all" />
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080d1f] shadow-2xl group-hover:border-white/20 transition-all duration-500">
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
        <section className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f26]/95 to-[#060918]/95 backdrop-blur-2xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
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
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/12 flex items-center justify-center text-[#38bdf8] shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
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
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/12 flex items-center justify-center text-[#818cf8] shrink-0 shadow-[0_0_15px_rgba(129,140,248,0.2)]">
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
                  className="absolute inset-0 rounded-full border border-[#818cf8]/40 shadow-[0_0_40px_rgba(99,102,241,0.25)] transform -rotate-12"
                  style={{
                    boxShadow: "0 0 50px rgba(56, 189, 248, 0.25), inset 0 0 30px rgba(192, 132, 252, 0.15)",
                  }}
                />
                <div className="absolute inset-4 rounded-full border border-dashed border-white/20 transform -rotate-12" />

                {/* Glowing celestial center star */}
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_20px_#ffffff,0_0_40px_#38bdf8]" />

                {/* Orbiting glowing node points */}
                <div className="absolute top-4 left-10 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8]" />
                <div className="absolute bottom-6 right-10 w-2.5 h-2.5 rounded-full bg-[#c084fc] shadow-[0_0_15px_#c084fc]" />
                <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-[#818cf8] shadow-[0_0_12px_#818cf8]" />
                <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]" />
              </div>
            </div>

            {/* Right Quadrant Points */}
            <div className="lg:col-span-4 space-y-10">
              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/12 flex items-center justify-center text-[#c084fc] shrink-0 shadow-[0_0_15px_rgba(192,132,252,0.2)]">
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
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/12 flex items-center justify-center text-[#38bdf8] shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
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

        {/* ── Showcase Card 04: Technical Explorations (Cosmic Sandbox) ─ */}
        <section className="rounded-2xl border border-white/[0.08] bg-[#090e21]/70 backdrop-blur-md p-6 sm:p-8 shadow-xl">
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
                onClick={handleContactClick}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38bdf8] hover:text-white shrink-0 group/link transition-colors"
              >
                <span>Launch physics sandbox</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Closing Philosophy & CTA ──────────────────────────────── */}
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

          <div className="pt-4">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-white transition-all duration-300 shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.65)] hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #4338ca 0%, #3b82f6 100%)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              <span>Discuss a product problem</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
