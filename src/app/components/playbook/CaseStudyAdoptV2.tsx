import { useState, useEffect, useCallback, useMemo } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  CheckCircle,
  Sparkles,
  Shield,
  Compass,
  Target,
  Users,
  BookOpen,
  Layers,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  Award,
  Eye,
  Lock,
  Zap,
  Quote,
  Check,
  ChevronRight,
  UserCheck,
  Clock,
  Activity,
  BarChart3,
  Search,
  Maximize2,
  X,
  Bot,
  Terminal,
  FileText
} from "lucide-react";
import "@/styles/copilot-case-study.css";

interface CaseStudyAdoptV2Props {
  onBack?: () => void;
}

const chapters = [
  { id: "hero", num: "00", label: "Overview" },
  { id: "challenge", num: "01", label: "Opportunity" },
  { id: "diagnosis", num: "02", label: "Diagnosis" },
  { id: "health", num: "03", label: "Health Model" },
  { id: "principles", num: "04", label: "Principles" },
  { id: "roadmap", num: "05", label: "Execution" },
  { id: "deep-dive", num: "06", label: "UX Deep Dive" },
  { id: "scale", num: "07", label: "Ecosystem" },
  { id: "flywheel", num: "08", label: "Flywheel" },
  { id: "impact", num: "09", label: "Impact" },
  { id: "reflection", num: "10", label: "Reflection" },
];

export function CaseStudyAdoptV2({ onBack }: CaseStudyAdoptV2Props) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [promptTab, setPromptTab] = useState<"all" | "meetings" | "research" | "writing" | "planning">("all");
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  // Scroll spy for sticky chapter navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openLightbox = (src: string, title: string, subtitle: string) => {
    setActiveModalImage({ src, title, subtitle });
  };

  const closeLightbox = () => {
    setActiveModalImage(null);
  };

  return (
    <div className="copilot-page select-text">
      {/* ── TOPBAR NAVIGATION ────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#08090b]/90 backdrop-blur-xl border-b border-white/10 h-16 flex items-center">
        <div className="copilot-wrap flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack || (() => { window.location.href = "/"; })}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </button>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white font-bold tracking-wider text-xs uppercase hidden sm:inline">Vikram Venkatesh</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Product Design Leadership
            </span>
          </div>
        </div>
      </header>

      {/* ── STICKY CHAPTER NAVIGATION ──────────────────────────────── */}
      <nav className="copilot-sticky-nav" aria-label="Case study chapters">
        <div className="copilot-wrap h-full flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToSection(ch.id)}
              className={`copilot-nav-link ${activeSection === ch.id ? "active" : ""}`}
            >
              <span className="nav-num text-xs font-bold text-slate-400">{ch.num}</span>
              <span>{ch.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── CHAPTER 00: HERO & OPERATING SYSTEM ─────────────────────── */}
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-white/10" id="hero">
        <div className="copilot-wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative & Proof Triad */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                Microsoft Copilot
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                Behavior Change
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/25 text-indigo-300">
                0 → 1 Adoption System
              </span>
            </div>

            <h1 className="mb-6">
              Scaling Copilot{" "}
              <span className="bg-gradient-to-r from-white via-indigo-200 to-pink-300 bg-clip-text text-transparent">
                Adoption
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug mb-4">
              Despite growing interest in AI, many teams struggled to adopt Copilot meaningfully and consistently.
            </p>

            <p className="copilot-lede mb-8">
              Organizations were investing heavily in AI transformation. Licenses were assigned. Training was completed. Curiosity was high. Yet Copilot still wasn’t becoming part of everyday work.
            </p>

            {/* Proof Triad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 text-center">
                Access wasn’t the gap
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 text-center">
                Awareness wasn’t the gap
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 text-center">
                Behavior change was ✓
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-indigo-500/30 text-sm text-indigo-200 mb-10">
              <strong>The core challenge:</strong> Turn curiosity into repeatable value, and repeatable value into habit.
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">Role</span>
                <strong className="text-white text-sm">Lead Product Designer</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Scope</span>
                <strong className="text-white text-sm">Strategy → UX → Metrics</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Focus</span>
                <strong className="text-white text-sm">AI Adoption &amp; Habit</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Outcome</span>
                <strong className="text-emerald-300 text-sm">2.4× Adoption Lift</strong>
              </div>
            </div>
          </div>

          {/* Right: Interactive Orbit Behavior Instrument */}
          <div className="lg:col-span-5">
            <div className="copilot-instrument" aria-label="Behavior change adoption system illustration">
              <span className="copilot-orbit-dot d1" />
              <span className="copilot-orbit-dot d2" />
              <span className="copilot-orbit-dot d3" />
              <div className="copilot-orb">
                <span>Behavior Change</span>
              </div>
              <div className="absolute left-6 right-6 bottom-6 flex justify-between text-[11px] font-semibold text-slate-300">
                <span>Curiosity → First value → Habit</span>
                <span>Signal → Barrier → Intervention</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── HERO OPERATING SYSTEM ARTIFACT ────────────────────────── */}
        <div className="copilot-wrap mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="copilot-eyebrow text-emerald-400 mb-2">Hero Artifact · Operating System</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                From adoption signals to highest-leverage interventions.
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-xl">
              The operating model behind the work: diagnose the journey, quantify health, prioritize the weakest constraint, design the intervention, reinforce the behavior, and measure progression.
            </p>
          </div>

          <div className="copilot-os-grid">
            <div className="copilot-os-node">
              <span className="text-xs font-bold text-slate-400">01</span>
              <div>
                <small className="text-[10px] uppercase font-bold text-sky-400 block mb-1">Research</small>
                <b className="text-sm text-white block mb-1">Find the friction</b>
                <span className="text-xs text-slate-400">Telemetry, journey signals, interviews, community telemetry.</span>
              </div>
            </div>

            <div className="copilot-os-node">
              <span className="text-xs font-bold text-slate-400">02</span>
              <div>
                <small className="text-[10px] uppercase font-bold text-indigo-400 block mb-1">Health Model</small>
                <b className="text-sm text-white block mb-1">Quantify health</b>
                <span className="text-xs text-slate-400">Awareness → Interest → First Value → Habit → Advocacy.</span>
              </div>
            </div>

            <div className="copilot-os-node focus">
              <span className="text-xs font-bold text-pink-400">03</span>
              <div>
                <small className="text-[10px] uppercase font-bold text-pink-400 block mb-1">Prioritize</small>
                <b className="text-sm text-white block mb-1">Fix constraint</b>
                <span className="text-xs text-slate-300 font-medium">First Value (29/100) was the critical bottleneck.</span>
              </div>
            </div>

            <div className="copilot-os-node">
              <span className="text-xs font-bold text-slate-400">04</span>
              <div>
                <small className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Intervene</small>
                <b className="text-sm text-white block mb-1">Design behavior</b>
                <span className="text-xs text-slate-400">Onboarding, role prompts, learning, nudges, analytics.</span>
              </div>
            </div>

            <div className="copilot-os-node">
              <span className="text-xs font-bold text-slate-400">05</span>
              <div>
                <small className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Flywheel</small>
                <b className="text-sm text-white block mb-1">Reinforce loop</b>
                <span className="text-xs text-slate-400">Community, champions, expert support, shared proof.</span>
              </div>
            </div>

            <div className="copilot-os-node">
              <span className="text-xs font-bold text-slate-400">06</span>
              <div>
                <small className="text-[10px] uppercase font-bold text-blue-400 block mb-1">Impact</small>
                <b className="text-sm text-white block mb-1">Measure lift</b>
                <span className="text-xs text-slate-400">Did users transition to repeatable everyday work?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 01: THE OPPORTUNITY & STRATEGIC SHIFT ───────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="challenge">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-sky-400 mb-2">01 / The Opportunity</span>
              <h2>AI deployment was growing. Everyday behavior wasn’t changing with it.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                The visible signs looked positive: licenses assigned, training completed, and curiosity high. But those signals masked the real problem—users tried Copilot once without integrating it into the way they worked.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {/* The Visible Problem */}
            <div className="copilot-card">
              <span className="copilot-eyebrow text-rose-400 mb-3">The Visible Problem</span>
              <h3 className="text-xl font-bold text-white mb-4">Adoption looked healthy on the surface.</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                  <span>Licenses assigned across the organization but not actively utilized</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                  <span>Initial curiosity fading quickly after an underwhelming first attempt</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                  <span>Training modules completed without creating repeat weekday habits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs shrink-0">✕</span>
                  <span>Successful workflows remaining isolated in individual silos</span>
                </li>
              </ul>
            </div>

            {/* The Design Question */}
            <div className="copilot-card accent-violet">
              <span className="copilot-eyebrow text-pink-300 mb-3">The Design Question</span>
              <h3 className="text-xl font-bold text-white mb-4">What actually makes someone return?</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Traditional metrics told us whether people activated. They did not explain why they stopped, what made them confident, or how value became a habit.
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="copilot-eyebrow text-purple-300 mb-1">Strategic Reframe</span>
                <p className="text-lg font-bold text-white">
                  The challenge wasn't deploying Copilot. <strong className="text-pink-300">It was helping people realize repeatable value from it.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="my-14 text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-4xl font-bold text-slate-100 font-serif leading-snug">
              “Technology alone doesn’t transform how people work. <em className="text-emerald-400 not-italic">Behavior does.</em>”
            </blockquote>
          </div>

          {/* Strategic Shift Table */}
          <div className="copilot-card p-6 sm:p-10 mb-14">
            <span className="copilot-eyebrow text-emerald-400 mb-2">The Strategic Shift</span>
            <h3 className="text-2xl font-bold text-white mb-6">Why traditional adoption programs were stalling</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold text-slate-400 block mb-2">Traditional Adoption</span>
                {[
                  { title: "More Training", desc: "Assumes knowledge automatically changes everyday behavior." },
                  { title: "More Awareness", desc: "Optimizes exposure even when awareness is already high." },
                  { title: "Generic Campaigns", desc: "Treats all users as if they are at the same maturity level." },
                  { title: "Usage Metrics", desc: "Measures logins without explaining drop-off or progression." },
                  { title: "One-Time Launch", desc: "Front-loads effort instead of reinforcing habits over time." },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl flex items-start gap-3">
                    <span className="text-rose-400 font-bold text-sm">✕</span>
                    <div>
                      <strong className="text-xs text-slate-200 block">{item.title}</strong>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase font-bold text-emerald-400 block mb-2">This Behavioral Approach</span>
                {[
                  { title: "Behavior Design", desc: "Designs the next action, not just the next training slide." },
                  { title: "Value Realization", desc: "Optimizes for immediate, tangible task outcomes." },
                  { title: "Stage-Specific Interventions", desc: "Matches the solution to where the user is actually stuck." },
                  { title: "Progression Metrics", desc: "Measures whether users advance from one stage to the next." },
                  { title: "Continuous Loop", desc: "Diagnose → Intervene → Measure → Reinvest in next constraint." },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <div>
                      <strong className="text-xs text-emerald-200 block">{item.title}</strong>
                      <span className="text-xs text-slate-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contribution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-sky-400 block mb-2">Product Strategy</span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li>• Defined maturity framework</li>
                <li>• Created health assessment</li>
                <li>• Built prioritization logic</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-indigo-400 block mb-2">UX Strategy</span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li>• Identified journey leaks</li>
                <li>• Mapped barriers to bets</li>
                <li>• Connected behavior to metrics</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-pink-400 block mb-2">Experience Design</span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li>• Onboarding &amp; prompt library</li>
                <li>• Learning in the flow of work</li>
                <li>• Community &amp; admin toolkits</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-emerald-400 block mb-2">Leadership</span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li>• Partnered with PM &amp; Eng</li>
                <li>• Influenced roadmap bets</li>
                <li>• Created shared vocabulary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 02: DIAGNOSIS & WHERE BEHAVIOR BREAKS ───────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="diagnosis">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-sky-400 mb-2">02 / Diagnosis</span>
              <h2>Look beyond usage metrics. Find where behavior breaks.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                I combined qualitative signals, engagement patterns, and journey mapping around one question: what prevents Copilot from becoming part of everyday work?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Awareness wasn't the constraint",
                desc: "Most users knew what Copilot was. The harder question was where it created meaningful value in their specific role."
              },
              {
                num: "02",
                title: "Training grew knowledge, not habit",
                desc: "Users completed training and still returned to old habits. Knowing how Copilot worked didn't create a reason to use it tomorrow."
              },
              {
                num: "03",
                title: "Largest leak at first success",
                desc: "People were willing to try, but blank prompts and generic examples caused high drop-off before reaching a first win."
              },
              {
                num: "04",
                title: "Workflows remained isolated",
                desc: "When champions discovered powerful workflows, those practices stayed local instead of becoming shared company knowledge."
              }
            ].map((finding, idx) => (
              <div key={idx} className="copilot-card p-6 flex flex-col justify-between">
                <span className="text-3xl font-bold text-sky-400 block mb-3 font-serif">{finding.num}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{finding.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{finding.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-bold text-slate-300">Signals behind the findings:</span>
            <div className="flex flex-wrap gap-2">
              {["Customer & Tenant Conversations", "Champion Feedback", "Usage & Telemetry Patterns", "Community Behavior", "Journey Mapping"].map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 03: ADOPTION HEALTH & PRIORITIZATION ENGINE ──────── */}
      <section className="py-20 lg:py-28 border-b border-white/10 bg-[#090b0e]" id="health">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-emerald-400 mb-2">03 / Adoption Health</span>
              <h2>Turning qualitative diagnosis into a stage-by-stage health model.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                To prioritize roadmap investments, I created an adoption health model across five behavioral stages. It gave the cross-functional team a common compass: where was the journey leaking, and which constraint to invest in first?
              </p>
            </div>
          </div>

          {/* 5-Stage Health Meter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { stage: "Awareness", score: 82, status: "Strong", color: "#4df2b5", desc: "Copilot awareness was broad; more broadcasts would not unlock the next wave." },
              { stage: "Interest", score: 57, status: "Mixed", color: "#9a70ff", desc: "People understood the promise, but role relevance and urgency were inconsistent." },
              { stage: "First Value", score: 29, status: "Weakest", color: "#ec67d7", desc: "Critical bottleneck: interest was not turning into a first meaningful success." },
              { stage: "Habit", score: 41, status: "Priority 02", color: "#5e8cff", desc: "Repeat usage plateaued after initial experimentation without reinforcement." },
              { stage: "Advocacy", score: 63, status: "Emerging", color: "#ffd36b", desc: "Power users existed, but systems for scaling their knowledge were uneven." },
            ].map((st, i) => (
              <div key={i} className="health-card" style={{ "--score": `${st.score}%`, "--health-color": st.color } as any}>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase tracking-wider text-[11px]">{st.stage}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px]">{st.status}</span>
                </div>
                <div className="text-3xl font-extrabold text-white my-3 font-serif">
                  {st.score}<span className="text-xs text-slate-400 font-sans">/100</span>
                </div>
                <div className="health-track">
                  <span />
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Priority Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="copilot-card accent-violet">
              <span className="copilot-eyebrow text-pink-300 mb-2">Priority 01 · Highest Leverage</span>
              <h3 className="text-2xl font-bold text-white mb-3">Open: Get users to first meaningful value.</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The largest behavioral drop-off was between “I want to try” and “I got something useful.” Guided onboarding, role prompt starter cards, preconfiguration, and first-success feedback became the primary investment.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 font-semibold">Health 29/100</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300">High user volume</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300">Unlocks downstream stages</span>
              </div>
            </div>

            <div className="copilot-card accent-blue">
              <span className="copilot-eyebrow text-blue-300 mb-2">Priority 02 · Next Constraint</span>
              <h3 className="text-2xl font-bold text-white mb-3">Proficient: Turn wins into repeat weekday habits.</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Once initial activation improved, the next constraint was sustaining momentum. Investment shifted toward contextual nudges, prompt-first learning, agentic support, and cohort analytics.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 font-semibold">Health 41/100</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300">Repeat-use gap</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300">Drives long-term retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 04: DESIGN PRINCIPLES ───────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="principles">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-sky-400 mb-2">04 / Design Principles</span>
              <h2>Four principles shaped how we designed the experience.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                The health model told us where to invest. These four principles governed how every screen, prompt, and workflow was designed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Design the next behavior, not the next feature.",
                desc: "Every intervention needed to make the next useful action clearer, easier, and more compelling."
              },
              {
                num: "02",
                title: "Reduce friction before increasing capability.",
                desc: "Advanced capabilities have zero value if users cannot confidently reach their first meaningful success."
              },
              {
                num: "03",
                title: "Teach in context, not in advance.",
                desc: "Guidance is 10× more effective when it appears around a real task rather than isolated in generic training."
              },
              {
                num: "04",
                title: "Scale expertise through systems.",
                desc: "Individual wins should become reusable prompts, peer support, and organizational playbooks."
              }
            ].map((p, i) => (
              <div key={i} className="copilot-card p-7 flex flex-col justify-between">
                <span className="text-3xl font-bold text-emerald-400 font-serif block mb-4">{p.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAPTER 05: ACTING ON THE DIAGNOSIS (BEHAVIOR JOURNEYS) ─── */}
      <section className="py-20 lg:py-28 border-b border-white/10 bg-[#090b0e]" id="roadmap">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-pink-400 mb-2">05 / Execution Journeys</span>
              <h2>How strategy translated into progressive user journeys.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                The two weakest stages received the deepest design treatment. Rather than presenting static screens, we mapped each into an end-to-end behavioral progression.
              </p>
            </div>
          </div>

          {/* First Value Journey (Priority 01) */}
          <div className="copilot-card p-6 sm:p-10 mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="copilot-eyebrow text-pink-400 mb-1">Priority 01 · First Value</span>
                <h3 className="text-2xl font-bold text-white">From a blank start to a guided first win</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/30 self-start sm:self-auto">
                Health 29 / 100
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1: Prompt Starter */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Step 01</span>
                <h4 className="text-base font-bold text-white mb-2">Role Starter Cards</h4>
                <p className="text-xs text-slate-300 mb-4">Replaces the blank canvas with high-confidence starter actions.</p>
                <div
                  className="visual-frame-container"
                  onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/open-quick-start.png`, "Role Prompt Starter Cards", "Quick-start guidance and seeded templates")}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/open-quick-start.png`}
                    alt="Quick start prompt cards"
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Step 2: Guided Tour */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Step 02</span>
                <h4 className="text-base font-bold text-white mb-2">Contextual Guided Tour</h4>
                <p className="text-xs text-slate-300 mb-4">Teaches in context at the exact moment the user needs guidance.</p>
                <div
                  className="visual-frame-container"
                  onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/open-guided-tour.png`, "Contextual Guided Tour", "Step-by-step onboarding experience")}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/open-guided-tour.png`}
                    alt="Guided tour experience"
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Step 3: Success State */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-1">Step 03</span>
                  <h4 className="text-base font-bold text-white mb-2">Visible Success State</h4>
                  <p className="text-xs text-slate-300 mb-6">Confirms value immediately and recommends the next relevant workflow.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <strong className="text-sm text-white block">First Task Completed</strong>
                  <span className="text-xs text-slate-400 block mt-1">Next: Try a meeting summary workflow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Habit Loop (Priority 02) */}
          <div className="copilot-card p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="copilot-eyebrow text-blue-400 mb-1">Priority 02 · Habit</span>
                <h3 className="text-2xl font-bold text-white">Turn one successful moment into a repeatable loop</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 self-start sm:self-auto">
                Health 41 / 100
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Deliverable 1: Prompt-First Learning */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Loop 01</span>
                <h4 className="text-base font-bold text-white mb-2">Prompt-First Learning</h4>
                <p className="text-xs text-slate-300 mb-4">Connects education directly to executable action in Copilot.</p>
                <div
                  className="visual-frame-container"
                  onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-prompt-first.png`, "Prompt-First Learning", "Turn education into immediately actionable Copilot use")}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-prompt-first.png`}
                    alt="Prompt first learning"
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Deliverable 2: Agentic Support */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Loop 02</span>
                <h4 className="text-base font-bold text-white mb-2">Agentic Support + Escalation</h4>
                <p className="text-xs text-slate-300 mb-4">AI resolves repetitive questions; human experts handle complex edge cases.</p>
                <div
                  className="visual-frame-container"
                  onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-agentic-framework.png`, "Agentic Support Framework", "AI breadth with human expert escalation")}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-agentic-framework.png`}
                    alt="Agentic support framework"
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Deliverable 3: Analytics */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Loop 03</span>
                <h4 className="text-base font-bold text-white mb-2">Cohort Diagnostics</h4>
                <p className="text-xs text-slate-300 mb-4">Tracks progression and reveals which teams need the next nudge.</p>
                <div
                  className="visual-frame-container"
                  onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-usage-analytics.png`, "Usage Analytics & Cohort Diagnostics", "Identify plateaus and prioritize interventions")}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-usage-analytics.png`}
                    alt="Usage analytics"
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 06: UX DEEP DIVE ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="deep-dive">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-sky-400 mb-2">06 / UX Deep Dive</span>
              <h2>Translating strategy into interface execution.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                Here is how key initiatives were designed: from initial problem framing and UX explorations to trade-offs and final high-fidelity experiences.
              </p>
            </div>
          </div>

          {/* Interactive Prompt Library Component */}
          <div className="prompt-lib-shell mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="copilot-eyebrow text-blue-400 mb-1">Interactive Component</span>
                <h3 className="text-xl font-bold text-white">Role-Based Prompt Library</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Filter by category:</span>
                <div className="flex flex-wrap gap-1.5">
                  {(["all", "meetings", "research", "writing", "planning"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setPromptTab(tab)}
                      className={`prompt-tab-pill capitalize ${promptTab === tab ? "active" : ""}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { cat: "meetings", title: "Turn Notes into Decisions", desc: "Summarize decisions, owners, and unresolved questions from sprint planning.", tag: "Meetings" },
                { cat: "research", title: "Synthesize User Feedback", desc: "Identify repeated themes, tensions, and quotes from 12 qualitative interviews.", tag: "Research" },
                { cat: "writing", title: "Refine Executive Narrative", desc: "Clarify the core proposal without losing strategic nuance or technical depth.", tag: "Writing" },
                { cat: "planning", title: "Create Phase 1 Project Plan", desc: "Convert product goals and dependencies into sprints, risks, and next moves.", tag: "Planning" },
              ]
                .filter((p) => promptTab === "all" || p.cat === promptTab)
                .map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1">{item.tag}</span>
                      <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 text-xs font-semibold border border-blue-500/30 transition-colors flex items-center justify-center gap-2">
                      <span>Try in Copilot</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Scope of Artifacts Produced */}
          <div className="copilot-card p-6 sm:p-8">
            <span className="copilot-eyebrow text-emerald-400 mb-2">Deliverables &amp; Artifacts</span>
            <h3 className="text-2xl font-bold text-white mb-6">The work spanned systems, UX, and product execution</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Behavior Framework</strong>
                <span className="text-slate-400">Shared maturity language and stage definitions.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Journey Maps</strong>
                <span className="text-slate-400">Behavioral progression and critical drop-off points.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Health Model</strong>
                <span className="text-slate-400">Stage scoring and prioritization formulas.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Service Blueprints</strong>
                <span className="text-slate-400">Product, enablement, and community integration.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Prototypes &amp; Flows</strong>
                <span className="text-slate-400">Onboarding, prompt, support, and community flows.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Analytics Toolkits</strong>
                <span className="text-slate-400">Cohort diagnostics and priority recommendations.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">User Flows</strong>
                <span className="text-slate-400">First value and expert escalation journeys.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded-xl">
                <strong className="text-white block mb-1">Executive Narratives</strong>
                <span className="text-slate-400">Decision documents used to align PM &amp; leadership.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 07: ECOSYSTEM DESIGN ────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10 bg-[#090b0e]" id="scale">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-emerald-400 mb-2">07 / Ecosystem Design</span>
              <h2>Product experiences changed behavior. The ecosystem helped it scale.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                A verified Copilot Community in Viva Engage became a persistent reinforcement layer—helping users discover value, get expert support, learn from peers, and contribute back.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {/* Step 1: Interest */}
            <div className="copilot-card p-5">
              <div
                className="visual-frame-container mb-4"
                onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/desire-landing-page.png`, "Personalized Landing Page", "Role-relevant value and proof")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/desire-landing-page.png`}
                  alt="Personalized landing page"
                />
              </div>
              <small className="text-[10px] uppercase font-bold text-indigo-400 block mb-1">01 · Interest</small>
              <h4 className="text-base font-bold text-white mb-1">Discover Value</h4>
              <p className="text-xs text-slate-400">Role-specific use cases and proof that explain why Copilot matters.</p>
            </div>

            {/* Step 2: First Value */}
            <div className="copilot-card p-5">
              <div
                className="visual-frame-container mb-4"
                onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/open-quick-start.png`, "Copilot Quick Start", "Guided onboarding and starter templates")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/open-quick-start.png`}
                  alt="Quick start experience"
                />
              </div>
              <small className="text-[10px] uppercase font-bold text-pink-400 block mb-1">02 · First Value</small>
              <h4 className="text-base font-bold text-white mb-1">Get Started</h4>
              <p className="text-xs text-slate-400">Short, guided sequence to a first win with seeded content.</p>
            </div>

            {/* Step 3: Habit */}
            <div className="copilot-card p-5">
              <div
                className="visual-frame-container mb-4"
                onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-prompt-first.png`, "Prompt-First Learning", "Practical prompts for continuous skill depth")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-prompt-first.png`}
                  alt="Prompt first learning"
                />
              </div>
              <small className="text-[10px] uppercase font-bold text-blue-400 block mb-1">03 · Habit</small>
              <h4 className="text-base font-bold text-white mb-1">Keep Learning</h4>
              <p className="text-xs text-slate-400">Contextual nudges, expert support, and continuous learning moments.</p>
            </div>

            {/* Step 4: Advocacy */}
            <div className="copilot-card p-5">
              <div
                className="visual-frame-container mb-4"
                onClick={() => openLightbox(`${import.meta.env.BASE_URL}IMG/copilot-case-study/transform-recognition.png`, "Recognition & Badges", "Celebrate champions and make expertise visible")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/transform-recognition.png`}
                  alt="Recognition and badges"
                />
              </div>
              <small className="text-[10px] uppercase font-bold text-amber-400 block mb-1">04 · Advocacy</small>
              <h4 className="text-base font-bold text-white mb-1">Give Back</h4>
              <p className="text-xs text-slate-400">Turn successful users into advocates through contribution and badges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 08: ADOPTION FLYWHEEL ───────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="flywheel">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-emerald-400 mb-2">08 / Adoption Flywheel</span>
              <h2>A self-reinforcing loop that compounds with every cohort.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                Each intervention helped a user progress, but the larger system became more valuable when successful behavior created the proof, knowledge, and peer support that helped the next user begin.
              </p>
            </div>
          </div>

          <div className="copilot-card p-6 sm:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {[
                { step: "01", title: "Discover", desc: "See a relevant reason to care." },
                { step: "02", title: "Try", desc: "Take a low-friction first step." },
                { step: "03", title: "First Win", desc: "Experience meaningful value." },
                { step: "04", title: "Repeat Use", desc: "Reapply in real work tasks." },
                { step: "05", title: "Confidence", desc: "Expand into deeper workflows." },
                { step: "06", title: "Advocacy", desc: "Share what works with others." },
                { step: "07", title: "Community", desc: "Turn expertise into reusable proof." },
              ].map((f, idx) => (
                <div key={idx} className="flywheel-step-card">
                  <span className="text-[10px] font-bold text-emerald-400 block mb-1">{f.step}</span>
                  <strong className="text-xs text-white block mb-1">{f.title}</strong>
                  <span className="text-[11px] text-slate-400 block leading-tight">{f.desc}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center text-xs text-emerald-300 font-medium">
              ✨ <strong>Community learning feeds the next discovery moment</strong> → the adoption loop becomes easier to enter with every new cohort.
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 09: IMPACT & OUTCOMES ───────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10 bg-[#090b0e]" id="impact">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-emerald-400 mb-2">09 / Measurable Impact</span>
              <h2>The outcome was a durable behavior system—not just vanity spikes.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                The most important change was that adoption became predictable to diagnose, prioritize, and improve.
              </p>
            </div>
          </div>

          {/* Before vs After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="copilot-card">
              <span className="copilot-eyebrow text-rose-400 mb-2">Before</span>
              <h3 className="text-xl font-bold text-white mb-4">Strong awareness. Weak progression.</h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Users tried Copilot once and dropped off due to blank-prompt friction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>First-value guidance was inconsistent across roles and departments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Adoption programs operated as disconnected training activities</span>
                </li>
              </ul>
            </div>

            <div className="copilot-card accent-emerald">
              <span className="copilot-eyebrow text-emerald-300 mb-2">After</span>
              <h3 className="text-xl font-bold text-white mb-4">A clear path from curiosity to confidence.</h3>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Structured role-based paths to first meaningful value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Repeat weekday behavior became an explicit product goal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Shared health model used across PM, Design, and Adoption teams</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quantitative Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="copilot-card p-6 text-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-serif block mb-2">+35%</span>
              <strong className="text-sm text-white block mb-1">Community Engagement</strong>
              <span className="text-xs text-slate-400">Increase in weekly active peer learning</span>
            </div>
            <div className="copilot-card p-6 text-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-blue-400 font-serif block mb-2">2.4×</span>
              <strong className="text-sm text-white block mb-1">Adoption Momentum</strong>
              <span className="text-xs text-slate-400">Faster progression into repeat usage</span>
            </div>
            <div className="copilot-card p-6 text-center">
              <span className="text-4xl sm:text-5xl font-extrabold text-pink-400 font-serif block mb-2">+48%</span>
              <strong className="text-sm text-white block mb-1">Repeat Behaviors</strong>
              <span className="text-xs text-slate-400">Users returning for 3+ weekly workflows</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 10: REFLECTION & LEADERSHIP CLOSE ──────────────── */}
      <section className="py-20 lg:py-32 border-b border-white/10" id="reflection">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="copilot-eyebrow text-sky-400 mb-2">10 / Reflection</span>
              <h2>The lesson was not that users needed more training.</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="copilot-lede">
                They needed a clearer path from curiosity to confidence—and a system that made every successful behavior easier to repeat and easier for others to learn from.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-[#0d1015] border border-white/15 mb-14">
            <Quote className="w-10 h-10 text-emerald-400 mb-4 opacity-75" />
            <blockquote className="text-2xl sm:text-4xl font-bold text-white font-serif leading-snug mb-6">
              “People don’t adopt AI because it is available. They adopt it when <span className="text-emerald-300">value becomes visible, achievable, and repeatable.</span>”
            </blockquote>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Once users can see a relevant reason to try, reach a meaningful first success, and repeat that success in real work, adoption begins to behave less like a launch campaign and more like a self-reinforcing system.
            </p>
          </div>

          {/* Closing Card & Action */}
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-emerald-950/40 to-indigo-950/50 border border-emerald-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span className="copilot-eyebrow text-emerald-400 mb-2">Final Takeaway</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl">
                Scaling adoption isn’t about adding features—it’s about designing systems that turn behavior into habit.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to top</span>
              </button>
              <button
                onClick={onBack || (() => { window.location.href = "/"; })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-900 hover:bg-emerald-50 transition-colors shadow-lg cursor-pointer"
              >
                <span>Explore more work</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="py-8 bg-[#07080a] border-t border-white/10 text-xs text-slate-400">
        <div className="copilot-wrap flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Scaling Copilot Adoption · Product Design Leadership Case Study by Vikram Venkatesh</span>
          <span>© {new Date().getFullYear()} Vikram The Artist · All rights reserved</span>
        </div>
      </footer>

      {/* ── LIGHTBOX MODAL ─────────────────────────────────────────── */}
      {activeModalImage && (
        <div className="copilot-modal-backdrop" onClick={closeLightbox}>
          <div className="copilot-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#11141a]">
              <div>
                <h4 className="text-sm font-bold text-white">{activeModalImage.title}</h4>
                <p className="text-xs text-slate-400">{activeModalImage.subtitle}</p>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 flex items-center justify-center bg-black/80">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
