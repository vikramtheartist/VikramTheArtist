import React from "react";
import {
  GraduationCap,
  Megaphone,
  Users,
  BarChart3,
  Target,
  Zap,
  GitFork,
  RotateCw,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface StrategicShiftDiagramProps {
  isDark?: boolean;
}

export default function StrategicShiftDiagram({ isDark = true }: StrategicShiftDiagramProps) {
  return (
    <section
      id="strategic-shift"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* ── 1. Top Header Block ─────────────────────────────────── */}
        <div className="text-left max-w-[1240px] mx-auto mb-10 sm:mb-14">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase mb-3 shadow-xs bg-[#121829]/90 border border-white/12 text-slate-300 backdrop-blur-md">
            <span>THE ADOPT SHIFT</span>
          </div>

          {/* Prefix Line (Matching "The 5 Stages of the" style) */}
          <div className={`text-[20px] sm:text-[26px] lg:text-[32px] font-normal tracking-tight leading-[1.25] mb-1.5 transition-colors ${
            isDark ? "text-white" : "text-[#1e293b]"
          }`}>
            From launching adoption to
          </div>

          {/* Main Headline (Matching "ADOPT Playbook" gradient style) */}
          <h2
            className="text-[40px] sm:text-[50px] lg:text-[56px] font-black tracking-[-0.035em] leading-[1.04] mb-4 inline-block"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7]">
              designing behavior change.
            </span>
          </h2>

          {/* Subtitle / Description */}
          <p className={`text-[14px] sm:text-[16px] font-normal leading-[1.6] max-w-[860px] ${
            isDark ? "text-slate-300" : "text-[#475569]"
          }`}>
            Traditional adoption builds awareness. ADOPT diagnoses friction and designs the path to lasting behavior change.
          </p>
        </div>

        {/* ── 2. Simplified 2-Card Glassmorphic Representation ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1240px] mx-auto items-stretch">
          {/* ── CARD 1: TRADITIONAL MODEL (Faded / Dull Muted Glass) ───── */}
          <div
            className={`rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group cursor-default hover:scale-[1.01] opacity-75 hover:opacity-90 ${
              isDark
                ? "text-slate-300"
                : "bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_25px_-8px_rgba(15,23,42,0.06)]"
            }`}
            style={{
              ...(isDark
                ? {
                    background: "rgba(0, 0, 0, 0.35)",
                    backdropFilter: "blur(12px) saturate(1.2) brightness(0.95)",
                    WebkitBackdropFilter: "blur(12px) saturate(1.2) brightness(0.95)",
                    boxShadow: [
                      "inset 0 0 0 1px rgba(255,255,255,0.08)",
                      "0 8px 24px rgba(0,0,0,0.35)",
                      "inset 0 1.5px 1px rgba(255,255,255,0.25)",
                      "inset 0 -2px 5px rgba(0,0,0,0.20)",
                    ].join(", "),
                  }
                : {}),
            }}
          >
            <div className="relative z-10">
              {/* Top Header Row: Icon + Title on left, Status badge on top right (Single Line) */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-6">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center justify-center text-slate-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform shrink-0">
                    <GraduationCap className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-[15px] sm:text-[17px] lg:text-[19px] font-semibold tracking-tight uppercase whitespace-nowrap ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                      TRADITIONAL MODEL
                    </h3>
                    <div className="text-[11.5px] text-slate-400/80 font-normal mt-0.5 truncate">
                      Linear enablement approach
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/8 text-[11px] font-normal text-slate-400/80 shrink-0 whitespace-nowrap">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400/60" />
                  <span>One-time, unreinforced effort</span>
                </div>
              </div>

              {/* 4 Feature Items */}
              <div className="space-y-3">
                {[
                  {
                    icon: GraduationCap,
                    title: "Knowledge without behavior change",
                    desc: "More training slides don't remove daily task friction."
                  },
                  {
                    icon: Megaphone,
                    title: "Exposure without personal relevance",
                    desc: "Broad marketing pushes optimize awareness, not habit."
                  },
                  {
                    icon: Users,
                    title: "Generic one-size-fits-all campaigns",
                    desc: "Treats beginners and power users with the same message."
                  },
                  {
                    icon: BarChart3,
                    title: "Activity metrics without progression",
                    desc: "Tracks logins instead of actual behavioral advancement."
                  }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3.5 p-3.5 rounded-[18px] border transition-all ${
                        isDark
                          ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
                          : "bg-slate-50/60 border-slate-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/6 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-[13.5px] font-medium leading-snug ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {item.title}
                        </div>
                        <div className={`text-[11.5px] leading-relaxed mt-0.5 ${isDark ? "text-slate-400/80" : "text-slate-500"}`}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── CARD 2: ADOPT MODEL (Exact 100% Match to Traditional Model) ─ */}
          <div
            className={`rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group cursor-default hover:scale-[1.01] ${
              isDark
                ? "text-white"
                : "bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)]"
            }`}
            style={{
              ...(isDark
                ? {
                    background: "rgba(0, 0, 0, 0.45)",
                    backdropFilter: "blur(14px) saturate(1.8) brightness(1.06)",
                    WebkitBackdropFilter: "blur(14px) saturate(1.8) brightness(1.06)",
                    boxShadow: [
                      "inset 0 0 0 1px rgba(255,255,255,0.16)",
                      "0 8px 32px rgba(0,0,0,0.40)",
                      "inset 0 1.5px 1px rgba(255,255,255,0.52)",
                      "inset 0 -2px 5px rgba(0,0,0,0.28)",
                    ].join(", "),
                  }
                : {}),
            }}
          >
            <div className="relative z-10">
              {/* Top Header Row: Icon + Title on left, Status badge on top right (Single Line) */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-6">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/25 via-sky-500/25 to-purple-500/25 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform shrink-0">
                    <Target className="w-6 h-6 text-sky-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-[15px] sm:text-[17px] lg:text-[19px] font-semibold tracking-tight uppercase whitespace-nowrap ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      ADOPT MODEL
                    </h3>
                    <div className="text-[11.5px] text-slate-400 font-normal mt-0.5 truncate">
                      Continuous behavioral flywheel
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-[11px] font-medium text-sky-300 shrink-0 whitespace-nowrap shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Sustained adoption flywheel</span>
                </div>
              </div>

              {/* 4 Feature Items with Subtle Color Accents */}
              <div className="space-y-3">
                {[
                  {
                    icon: Target,
                    title: "Action-oriented behavior design",
                    desc: "Design the exact next task action, not just more knowledge.",
                    iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/25",
                    tileBg: isDark ? "bg-sky-950/15 border-sky-500/15 hover:border-sky-500/30 hover:bg-sky-950/25" : "bg-sky-50/60 border-sky-100 hover:bg-sky-50"
                  },
                  {
                    icon: Zap,
                    title: "Immediate task value realization",
                    desc: "Deliver immediate, tangible task outcomes to spark desire.",
                    iconColor: "text-pink-400 bg-pink-500/10 border-pink-500/25",
                    tileBg: isDark ? "bg-pink-950/15 border-pink-500/15 hover:border-pink-500/30 hover:bg-pink-950/25" : "bg-pink-50/60 border-pink-100 hover:bg-pink-50"
                  },
                  {
                    icon: GitFork,
                    title: "Stage-specific diagnostic interventions",
                    desc: "Match the precise solution to where the user is blocked.",
                    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/25",
                    tileBg: isDark ? "bg-purple-950/15 border-purple-500/15 hover:border-purple-500/30 hover:bg-purple-950/25" : "bg-purple-50/60 border-purple-100 hover:bg-purple-50"
                  },
                  {
                    icon: RotateCw,
                    title: "Continuous reinforcement loop",
                    desc: "Diagnose → intervene → measure → reinvest in the next constraint.",
                    iconColor: "text-teal-400 bg-teal-500/10 border-teal-500/25",
                    tileBg: isDark ? "bg-teal-950/15 border-teal-500/15 hover:border-teal-500/30 hover:bg-teal-950/25" : "bg-teal-50/60 border-teal-100 hover:bg-teal-50"
                  }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3.5 p-3.5 rounded-[18px] border transition-all ${item.tileBg}`}
                    >
                      <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 shadow-xs ${item.iconColor}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-[13.5px] font-medium leading-snug ${isDark ? "text-white" : "text-slate-800"}`}>
                          {item.title}
                        </div>
                        <div className={`text-[11.5px] leading-relaxed mt-0.5 ${isDark ? "text-slate-300" : "text-slate-500"}`}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
