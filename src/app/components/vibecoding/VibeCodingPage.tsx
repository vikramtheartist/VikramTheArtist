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
  Lock,
  X,
  Target,
  Network
} from "lucide-react";
import "../../../styles/adopt-landing.css";

const PLAYBOOK_PASSWORD = "designtoimproveworld";

interface VibeCodingPageProps {
  onBack?: () => void;
  onNavigateAdopt?: () => void;
}

export function VibeCodingPage({ onBack, onNavigateAdopt }: VibeCodingPageProps) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [modalTitle, setModalTitle] = useState("Enter password to open Project");

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

  // Protected card button handler
  const handleProtectedAction = (actionTitle: string, actionCallback?: () => void) => {
    setModalTitle(`Enter password to open ${actionTitle}`);
    setPasswordInput("");
    setPasswordError("");
    setPendingAction(() => actionCallback || null);
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordInput === PLAYBOOK_PASSWORD) {
      setShowPasswordModal(false);
      setPasswordError("");
      if (pendingAction) {
        pendingAction();
      }
    } else {
      setPasswordError("Incorrect password. Please try again.");
    }
  };

  // Clean, sleek dark card styling matching ADOPT Dark Mode card containers
  const cleanCardStyle: React.CSSProperties = {
    background: "#080c1d",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "28px",
    boxShadow: "0 12px 32px -8px rgba(0, 0, 0, 0.6)",
  };

  return (
    <div
      className="adopt-page-wrapper dark relative selection:bg-indigo-500 selection:text-white"
      style={{
        backgroundColor: "#030712",
        color: "#f8fafc",
        overflowX: "hidden",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      {/* ── CONTINUOUS FLOWING MOODBOARD GRADIENT ATMOSPHERE (ADOPT DARK MODE) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Top Hero Glows: Cyan/Sky + Lilac/Purple */}
        <div className="absolute -top-24 -left-20 w-[900px] h-[900px] rounded-full blur-[140px] bg-gradient-to-br from-cyan-500/22 via-sky-600/15 to-transparent transition-all duration-700" />
        <div className="absolute -top-10 right-0 w-[850px] h-[850px] rounded-full blur-[140px] bg-gradient-to-bl from-pink-500/20 via-purple-600/22 to-transparent transition-all duration-700" />
        <div className="absolute top-[450px] left-[25%] w-[700px] h-[550px] rounded-full blur-[130px] bg-gradient-to-tr from-violet-600/22 via-fuchsia-600/16 to-transparent transition-all duration-700" />

        {/* Mid Section Flow */}
        <div className="absolute top-[1000px] -left-10 w-[850px] h-[800px] rounded-full blur-[140px] bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-transparent transition-all duration-700" />
        <div className="absolute top-[1350px] -right-10 w-[900px] h-[850px] rounded-full blur-[150px] bg-gradient-to-l from-pink-600/22 via-rose-600/16 to-transparent transition-all duration-700" />

        {/* Lower Section Flow */}
        <div className="absolute top-[1900px] left-[5%] w-[950px] h-[800px] rounded-full blur-[140px] bg-gradient-to-br from-cyan-500/22 via-sky-600/15 to-transparent transition-all duration-700" />
        <div className="absolute top-[2300px] right-[5%] w-[900px] h-[800px] rounded-full blur-[140px] bg-gradient-to-bl from-purple-600/25 via-pink-600/20 to-transparent transition-all duration-700" />
        <div className="absolute top-[2900px] -left-20 w-[950px] h-[900px] rounded-full blur-[150px] bg-gradient-to-tr from-violet-600/24 via-sky-600/15 to-transparent transition-all duration-700" />
      </div>

      {/* ── TOP STICKY NAVIGATION BAR (MATCHING ADOPT LANDING PAGE) ──── */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 bg-[#030712]/80 border-b border-white/10 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Back to Portfolio (Adopt Landing Pattern) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBackToHome}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-all shadow-xs cursor-pointer text-white bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25"
            >
              ← Portfolio
            </button>
          </div>

          {/* Right: Action / Collaborate Button */}
          <div className="flex items-center gap-3">
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
        </div>
      </header>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 sm:pt-20 pb-28 space-y-16 sm:space-y-20 relative z-10">
        {/* ── Hero Listing Header (Clean 2-line title, No Image) ─────── */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border shadow-xs bg-white/8 border-white/15 text-[#cbd5e1]">
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
            className="text-base sm:text-lg text-slate-300/80 leading-relaxed font-light max-w-2xl mx-auto"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif" }}
          >
            I use AI-assisted coding to explore complex interactions, test product hypotheses and build functional experiences—without losing design judgment, systems thinking or craft.
          </p>
        </section>

        {/* ── 4-Step Process Strip (Adopt Landing Pill Bar) ─────────── */}
        <section className="max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-[28px] sm:rounded-full border bg-[#0b101e]/85 border-white/12 shadow-lg backdrop-blur-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Step 1: Frame */}
              <div className="flex items-center gap-3.5 pl-2 pt-2 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-sky-950/70 border-sky-500/30 text-sky-400">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Frame</div>
                  <div className="text-[12px] font-medium text-slate-400">Clarify intent & constraints</div>
                </div>
              </div>

              {/* Step 2: Build */}
              <div className="flex items-center gap-3.5 pl-2 md:pl-6 pt-3 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-indigo-950/70 border-indigo-500/30 text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Build</div>
                  <div className="text-[12px] font-medium text-slate-400">Compose systems & interactions</div>
                </div>
              </div>

              {/* Step 3: Evaluate */}
              <div className="flex items-center gap-3.5 pl-2 md:pl-6 pt-3 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-pink-950/70 border-pink-500/30 text-pink-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[17px] sm:text-[18px] font-bold text-white leading-tight">Evaluate</div>
                  <div className="text-[12px] font-medium text-slate-400">Test in context & measure</div>
                </div>
              </div>

              {/* Step 4: Refine */}
              <div className="flex items-center gap-3.5 pl-2 md:pl-6 pt-3 md:pt-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-emerald-950/70 border-emerald-500/30 text-emerald-400">
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

        {/* ── Showcase Card 01: AdoptIQ.ai (Password Protected) ────── */}
        <section
          className="p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group hover:border-white/15"
          style={cleanCardStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border backdrop-blur-md shadow-xs bg-white/8 border-white/15 text-[#cbd5e1]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                <span>01 / BEHAVIORAL INTELLIGENCE</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                AdoptIQ.ai
              </h2>

              <p className="text-sm sm:text-base text-slate-300/80 font-light leading-relaxed">
                Diagnosing where adoption breaks—and what teams should do next.
              </p>

              {/* 3-Column Spec Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/[0.08] pb-2">
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

              {/* Password-Protected Primary Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleProtectedAction("AdoptIQ.ai Case Study", () => {
                    if (onNavigateAdopt) onNavigateAdopt();
                    else if (typeof window !== "undefined") window.location.pathname = "/adopt-landing";
                  })}
                  className="adopt-hero-btn-primary group cursor-pointer"
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

        {/* ── Showcase Card 02: PartyTogether (Password Protected) ──── */}
        <section
          className="p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group hover:border-white/15"
          style={cleanCardStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border backdrop-blur-md shadow-xs bg-white/8 border-white/15 text-[#cbd5e1]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
                <span>02 / COLLABORATIVE INTERACTION</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                PartyTogether
              </h2>

              <p className="text-sm sm:text-base text-slate-300/80 font-light leading-relaxed">
                A synchronized social listening room designed around shared control.
              </p>

              {/* 3-Column Spec Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/[0.08] pb-2">
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

              {/* Password-Protected Secondary Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleProtectedAction("PartyTogether Interactive Demo")}
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



        {/* ── Feature Callout Card: "Vibe coding is not skipping design." (Redesigned matching mockup) ── */}
        <section
          id="vibe-philosophy"
          className="p-8 sm:p-12 lg:p-14 transition-all duration-300 relative overflow-hidden group hover:border-white/15"
          style={cleanCardStyle}
        >
          {/* Top Row: Headline & Prism Convergence Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-5 flex items-start gap-5">
              {/* Vertical Accent Line */}
              <div className="flex flex-col items-center shrink-0 pt-2">
                <div className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
                <div className="w-[2px] h-28 sm:h-32 bg-gradient-to-b from-[#38bdf8] via-[#a855f7] to-[#ec4899] my-1" />
                <div className="w-2 h-2 rounded-full bg-[#ec4899] shadow-[0_0_10px_#ec4899]" />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-4">
                <h2
                  className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-white tracking-tight leading-[1.12]"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Vibe coding is<br />
                  not skipping design.
                </h2>

                <p className="text-sm sm:text-[15px] text-slate-300/80 font-light leading-relaxed max-w-sm">
                  AI accelerates the build. Design still gives it direction.
                </p>
              </div>
            </div>

            {/* Right Visual Column: Dual-Node Prism Convergence Visual */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#030614] border border-white/[0.08] shadow-2xl p-2 sm:p-4 group-hover:border-white/15 transition-all">
                {/* Floating Node Labels */}
                <div className="absolute top-4 left-6 z-20 pointer-events-none text-left">
                  <div className="text-xs sm:text-[13px] font-semibold text-white tracking-tight">Human intent</div>
                  <div className="text-[11px] text-[#38bdf8] font-light">Purpose & judgment</div>
                </div>

                <div className="absolute bottom-6 left-6 z-20 pointer-events-none text-left">
                  <div className="text-xs sm:text-[13px] font-semibold text-white tracking-tight">AI generation</div>
                  <div className="text-[11px] text-[#c084fc] font-light">Speed & possibility</div>
                </div>

                {/* 3D Prism Illustration */}
                <img
                  src="/IMG/vibe-coding-prism.jpg"
                  alt="Human Intent and AI Generation converging into a glass prism lens producing layered UI software"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Process Pipeline Capsule */}
          <div className="mt-10 sm:mt-12 rounded-[22px] sm:rounded-[26px] bg-[#040715]/90 border border-white/[0.12] p-5 sm:p-7 relative overflow-hidden shadow-inner">
            {/* Background Wavy Glowing Flow Line */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-16 pointer-events-none opacity-40 hidden sm:block">
              <svg className="w-full h-full" viewBox="0 0 1000 60" preserveAspectRatio="none" fill="none">
                <path
                  d="M 50 30 Q 250 10, 450 30 T 850 30"
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="35%" stopColor="#818cf8" />
                    <stop offset="70%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Pipeline Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 items-center relative z-10">
              {/* Step 01 */}
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-950/70 border border-sky-500/30 flex items-center justify-center text-[#38bdf8] shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight">01 Frame intent</div>
                  <div className="text-[11px] text-slate-400 font-light">Behavior, value, constraints</div>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center text-[#818cf8] shrink-0 shadow-[0_0_12px_rgba(129,140,248,0.2)]">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight">02 Model experience</div>
                  <div className="text-[11px] text-slate-400 font-light">Flows, states, feedback</div>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-[#c084fc] shrink-0 shadow-[0_0_12px_rgba(192,132,252,0.2)]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight">03 Build with AI</div>
                  <div className="text-[11px] text-slate-400 font-light">Components, logic, data</div>
                </div>
              </div>

              {/* Step 04 */}
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-pink-950/70 border border-pink-500/30 flex items-center justify-center text-[#ec4899] shrink-0 shadow-[0_0_12px_rgba(236,72,153,0.2)]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight">04 Validate in context</div>
                  <div className="text-[11px] text-slate-400 font-light">People, evidence, outcomes</div>
                </div>
              </div>

              {/* End Goal Badge */}
              <div className="flex justify-start sm:justify-end lg:justify-center">
                <div className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 shadow-[0_0_20px_rgba(168,85,247,0.35)] border border-white/20 select-none">
                  Meaningful product
                </div>
              </div>
            </div>

            {/* Dotted Return Feedback Loop Arrow */}
            <div className="pt-4 mt-2 border-t border-white/[0.06] flex items-center justify-between text-[10.5px] text-slate-400/80 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                <span>Iterative Feedback Loop</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <span>Refine intent with live telemetry & design judgment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ec4899]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Showcase Card 04: Technical Explorations (Password Protected) ─ */}
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
                <p className="text-xs text-slate-400 font-light mt-1">
                  Interactive orbital mechanics visualizer with realistic particle streams and WebGL shaders.
                </p>
              </div>

              {/* Password-Protected Link Button */}
              <button
                type="button"
                onClick={() => handleProtectedAction("Cosmic Kinetic Sandbox")}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38bdf8] hover:text-white shrink-0 group/link transition-colors cursor-pointer"
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

          <p className="text-sm sm:text-base text-slate-400 font-light">
            Design judgment leads. AI expands the possible. Code makes it real.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={() => handleContactClick()}
              className="adopt-hero-btn-primary group cursor-pointer"
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
      <footer className="border-t border-white/[0.06] py-10 px-6 sm:px-10 text-xs text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vikram Venkatesh — Principal Product Designer & UX Engineer</p>
          <button
            type="button"
            onClick={handleBackToHome}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Homepage</span>
          </button>
        </div>
      </footer>

      {/* ── PROTECTED PROJECT PASSWORD MODAL (MATCHING ADOPT LANDING MODAL) ─ */}
      {showPasswordModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-password-title"
          className="fixed inset-0 z-[120] flex items-center justify-center px-6"
          style={{ background: "rgba(6, 9, 16, 0.75)", backdropFilter: "blur(6px)" }}
        >
          <form
            onSubmit={handlePasswordSubmit}
            className="w-full max-w-[420px] rounded-2xl border p-6 text-left relative"
            style={{
              background: "rgba(11, 14, 24, 0.96)",
              borderColor: "rgba(255,255,255,0.18)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setShowPasswordModal(false);
                setPasswordError("");
              }}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#38bdf8]">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Protected Showcase</span>
            </div>

            <h3
              id="project-password-title"
              style={{ color: "white", fontSize: "20px", fontWeight: 700, lineHeight: 1.25 }}
            >
              {modalTitle}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.68)", marginTop: "8px", fontSize: "13.5px", lineHeight: 1.5 }}>
              Access to this interactive build is protected.
            </p>

            <input
              type="password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              placeholder="Enter password"
              autoFocus
              className="mt-4 w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            />

            {passwordError && (
              <p className="mt-2 text-xs font-semibold text-rose-400">{passwordError}</p>
            )}

            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordError("");
                }}
                className="px-4 py-2 text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Unlock
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
