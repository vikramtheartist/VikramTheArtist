import { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowRight, ArrowLeft, ArrowUp, CheckCircle, Sparkles, Shield, Compass, Target, Users, BookOpen, Layers, Lightbulb } from "lucide-react";
import "@/styles/feedback-360.css";

interface Feedback360PageProps {
  onNavigateHome?: () => void;
  onNavigateWork?: () => void;
}

const chapters = [
  { id: "frame", num: "01", label: "Frame" },
  { id: "discover", num: "02", label: "Discover" },
  { id: "decide", num: "03", label: "Decide" },
  { id: "design", num: "04", label: "Design" },
  { id: "validate", num: "05", label: "Validate" },
  { id: "reflect", num: "06", label: "Reflect" },
];

export function Feedback360Page({ onNavigateHome, onNavigateWork }: Feedback360PageProps) {
  const [activeSection, setActiveSection] = useState<string>("frame");

  // Scroll spy for sticky chapter navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
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
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="feedback-page select-text">
      {/* ── TOPBAR NAVIGATION ────────────────────────────────────────── */}
      <header className="feedback-hero" id="top">
        <div className="fb-signal fb-signal-a" />
        <div className="fb-signal fb-signal-b" />
        <div className="fb-signal fb-signal-c" />

        <nav className="feedback-wrap flex items-center justify-between h-20 border-b border-white/20 relative z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome || (() => { window.location.href = "/"; })}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </button>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white font-bold tracking-wider text-xs uppercase hidden sm:inline">Vikram Venkatesh</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-sky-200/80 font-medium hidden md:inline">
              Product Design Leadership Case Study · 6 Months
            </span>
          </div>
        </nav>

        {/* ── HERO CONTENT ───────────────────────────────────────────── */}
        <div className="feedback-wrap grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-12 pb-24 lg:pt-16 lg:pb-36 relative z-10">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7">
            <p className="text-sky-300 font-bold uppercase tracking-widest text-xs mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Feedback 360° · Lead Product Designer
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02] mb-6">
              From feedback<br />
              anxiety to <em className="italic font-normal text-sky-200">growth.</em>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200/90 leading-relaxed font-normal max-w-2xl mb-8">
              I led a cross-functional team from an ambiguous workplace problem to two validated feedback experiences—designed to make reflection safer, more useful and easier to act on.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("frame")}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold bg-white text-slate-900 hover:bg-sky-50 shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all cursor-pointer group"
              >
                <span>Read the case study</span>
                <ArrowRight className="w-4 h-4 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Hero Interface Composition */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center">
            {/* Phone A: Feedback Request (Developmental) */}
            <div className="fb-phone fb-phone-a">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">Feedback Request</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                How did we collaborate in sprint planning?
              </h4>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 space-y-1.5 mt-2">
                <div className="h-2 w-3/4 bg-white/20 rounded" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-2.5 space-y-1 mt-auto">
                <span className="text-[10px] text-sky-300 block">Perspective Cues</span>
                <div className="h-1.5 w-full bg-sky-400/20 rounded" />
              </div>
            </div>

            {/* Phone B: Your Growth Insights */}
            <div className="fb-phone fb-phone-b">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Growth Synthesis</span>
                <span className="text-[10px] text-slate-400">3 Themes</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                Clarity in ambiguity &amp; cross-team alignment
              </h4>
              <div className="space-y-1.5 mt-2">
                <div className="bg-indigo-500/15 border border-indigo-500/25 rounded-md p-2 flex items-center justify-between">
                  <span className="text-[10px] text-indigo-200">Strengths identified</span>
                  <span className="text-[10px] font-bold text-indigo-300">88%</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-300">Actionable next step</span>
                  <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4-FACT IMPACT STRIP ────────────────────────────────────── */}
        <div className="border-t border-white/15 bg-[#0b0d10]/95 backdrop-blur-md relative z-10">
          <div className="feedback-wrap grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 py-6 sm:py-8">
            <div className="px-3 sm:px-6 py-2 sm:py-0">
              <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-1">Scope</span>
              <strong className="text-base sm:text-lg font-bold text-white">0 → 1 Product Vision</strong>
            </div>
            <div className="px-3 sm:px-6 py-2 sm:py-0">
              <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-1">Method</span>
              <strong className="text-base sm:text-lg font-bold text-white">5-Day Design Sprint</strong>
            </div>
            <div className="px-3 sm:px-6 py-2 sm:py-0">
              <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-1">Leadership</span>
              <strong className="text-base sm:text-lg font-bold text-white">Cross-Functional Alignment</strong>
            </div>
            <div className="px-3 sm:px-6 py-2 sm:py-0">
              <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-1">Outcome</span>
              <strong className="text-base sm:text-lg font-bold text-white">2 Validated Directions</strong>
            </div>
          </div>
        </div>
      </header>

      {/* ── STICKY CHAPTER NAVIGATION ──────────────────────────────── */}
      <nav className="fb-chapter-nav" aria-label="Case study chapters">
        <div className="feedback-wrap h-full flex items-center justify-start sm:justify-between gap-6 overflow-x-auto no-scrollbar">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToSection(ch.id)}
              className={`inline-flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSection === ch.id ? "active text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className="text-sky-400 font-bold">{ch.num}</span>
              <span>{ch.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── CHAPTER 01: FRAME THE OPPORTUNITY ───────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="frame">
        <div className="feedback-wrap">
          <div className="fb-chapter-tag">
            <span className="badge">01</span>
            <span>Frame the opportunity</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Feedback should create momentum—not anxiety.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                People wanted a clearer view of their strengths and growth areas. Yet workplace feedback felt formal, fragmented and tied to high-stakes moments. The opportunity was not simply to digitize a review—it was to redesign the behavior around it.
              </p>
            </div>
          </div>

          {/* Brief Grid: Challenge, Role, Success Criteria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* 1. The Challenge */}
            <div className="bg-[#12151a] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-3">The Challenge</span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  How might we make feedback feel supportive enough to seek—and useful enough to revisit?
                </h3>
              </div>
            </div>

            {/* 2. My Role */}
            <div className="bg-[#12151a] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-3">My Leadership Role</span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I framed the opportunity, planned and facilitated the sprint, aligned product, research, content and engineering, translated insight into interaction models, and guided the work through validation.
                </p>
              </div>
            </div>

            {/* 3. Success Criteria */}
            <div className="bg-[#12151a] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-3">Success Criteria</span>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Make growth areas easier to understand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Reduce anxiety in asking and responding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Create a repeatable feedback habit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK / ATMOSPHERE BANNER ─────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900/40 via-sky-950/60 to-[#0d0f12] border-y border-white/10">
        <div className="feedback-wrap relative z-10">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400 block mb-2">Discovery Phase</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Before designing the interface,<br className="hidden sm:inline" />
            we aligned on the human tension.
          </h2>
        </div>
      </section>

      {/* ── CHAPTER 02: DISCOVER THE REAL PROBLEM ───────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="discover">
        <div className="feedback-wrap">
          <div className="fb-chapter-tag">
            <span className="badge">02</span>
            <span>Discover the real problem</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Five focused days turned ambiguity into a shared point of view.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                A Design Sprint helped the team reduce risk in sequence: understand context, map the journey, invite diverse perspectives, explore broadly, decide together, prototype the critical path and learn with users.
              </p>
            </div>
          </div>

          {/* 5-Day Design Sprint Flow */}
          <div className="sprint-timeline my-12 pt-4">
            {[
              { day: "Day 1", title: "Understand", step: "01", desc: "Empathy mapping, user journey mapping & lightning talks" },
              { day: "Day 2", title: "Sketch", step: "02", desc: "How Might We reframing & collaborative sketching" },
              { day: "Day 3", title: "Decide", step: "03", desc: "Heatmap voting, decision matrix & storyboard convergence" },
              { day: "Day 4", title: "Prototype", step: "04", desc: "High-fidelity clickable mobile & desktop flows" },
              { day: "Day 5", title: "Validate", step: "05", desc: "Moderated usability sessions & behavior observation" },
            ].map((s, i) => (
              <div key={i} className="sprint-day">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">{s.day}</span>
                <strong className="text-lg font-bold text-white block mb-1.5">{s.title}</strong>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Evidence Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
            {/* Evidence Block 1: Empathy Map */}
            <div className="bg-[#12151a] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-2">What People Felt</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  The hardest part was not writing feedback. It was navigating vulnerability.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Empathy mapping surfaced fear of judgment, uncertainty about intent and the cognitive load of finding the “right” words.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Empathy Map Synthesis · 12 cross-functional interviews</span>
              </div>
            </div>

            {/* Evidence Block 2: Journey Map */}
            <div className="bg-[#12151a] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-2">Where Momentum Broke</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  The journey continued long after someone pressed submit.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Journey mapping showed that interpretation and follow-through were as important as requesting and responding. A report without a next step was only a document.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>End-to-End Journey Mapping · Drop-off at reflection</span>
              </div>
            </div>
          </div>

          {/* Defining Insight Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-200 block mb-3">The Defining Insight</span>
              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-6">
                “People do not avoid feedback because they do not value growth. They avoid the emotional cost of the process.”
              </blockquote>
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
                That distinction moved the team from designing a more efficient form to designing a safer relationship between giver, receiver and organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 03: STRATEGIC DESIGN DECISIONS ──────────────────── */}
      <section className="py-20 lg:py-28 bg-[#12151a] border-b border-white/10" id="decide">
        <div className="feedback-wrap">
          <div className="fb-chapter-tag">
            <span className="badge">03</span>
            <span>Make the strategic decisions</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                We designed the rules of the experience before its screens.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Research became three principles the whole team could use to evaluate ideas. This created a durable decision system—not a collection of individual opinions.
              </p>
            </div>
          </div>

          {/* 3 Decision Principle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#171a20] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-sky-400 block mb-4">01</span>
                <h3 className="text-xl font-bold text-white mb-3">Separate growth from evaluation</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Developmental feedback needs psychological safety. Performance evaluation needs clarity and accountability. Treating them as one experience weakened both.
                </p>
              </div>
            </div>

            <div className="bg-[#171a20] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-sky-400 block mb-4">02</span>
                <h3 className="text-xl font-bold text-white mb-3">Prompt perspective, not opinion</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Specific, contextual prompts helped people recall observable moments and reduced the pressure of an intimidating blank page.
                </p>
              </div>
            </div>

            <div className="bg-[#171a20] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-sky-400 block mb-4">03</span>
                <h3 className="text-xl font-bold text-white mb-3">Turn input into a next move</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Receiving comments was not the finish line. The experience had to help people recognize patterns and translate them into action.
                </p>
              </div>
            </div>
          </div>

          {/* Judge vs Mentor Comparison Card */}
          <div className="bg-[#0b0d10] border border-white/15 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
              {/* What We Moved Away From */}
              <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6">
                <span className="text-xs uppercase tracking-widest font-bold text-rose-400 block mb-2">What We Moved Away From</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">The Judge</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Infrequent, formal and score-led. Feedback arrives as a verdict after the moment has passed.
                </p>
              </div>

              {/* Transformation Arrow */}
              <div className="md:col-span-1 flex items-center justify-center py-2">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 font-bold">
                  →
                </div>
              </div>

              {/* What We Designed Toward */}
              <div className="md:col-span-5 bg-sky-950/40 border border-sky-500/30 rounded-2xl p-6">
                <span className="text-xs uppercase tracking-widest font-bold text-sky-400 block mb-2">What We Designed Toward</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">The Mentor</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Timely, contextual and action-led. Feedback becomes a conversation that supports the next attempt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 04: TRANSLATE STRATEGY INTO PRODUCT (DESIGN EXECUTION) ─ */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="design">
        <div className="feedback-wrap">
          <div className="fb-chapter-tag">
            <span className="badge">04</span>
            <span>Translate strategy into product</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                One system. Two distinct feedback moments.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                The execution phase explored how the principles should behave across mobile and web. Instead of forcing every need into one flow, we developed two complementary concepts around different user intent.
              </p>
            </div>
          </div>

          {/* CONCEPT 01 — DEVELOPMENTAL (LIGHT VISUAL ENVIRONMENT) */}
          <div className="bg-[#f8fafc] text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl mb-12 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Description & Attributes */}
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest font-bold text-blue-600 block mb-2">Concept 01 · Developmental</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
                  Open, reflective feedback
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  A private space to ask trusted colleagues for perspective, identify themes and shape a personal growth plan.
                </p>

                <div className="space-y-3">
                  {[
                    "Guided request prompts with observable context",
                    "Perspective-taking cues to reduce writing friction",
                    "Theme synthesis highlighting patterns across replies",
                    "Personal next steps & coaching conversation bridge"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Light Interface Mockup Showcase */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Screen 1: Request Feedback */}
                <div className="fb-mockup-light p-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Ask for Perspective</span>
                    <span className="text-xs text-slate-400">1/3</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    What would you like perspective on?
                  </h4>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-semibold text-slate-800">Sprint planning facilitation</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      "Looking for thoughts on how clearly the roadmap priorities were communicated."
                    </p>
                  </div>
                  <button className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors">
                    Continue to reviewers
                  </button>
                </div>

                {/* Screen 2: Theme Synthesis */}
                <div className="fb-mockup-light p-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Growth Synthesis</span>
                    <span className="text-xs text-emerald-600 font-semibold">Private</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    Key themes from 4 reviews
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-between">
                      <span className="text-xs text-indigo-950 font-medium">Communicates with clarity</span>
                      <span className="text-xs font-bold text-indigo-600">Top theme</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-700">Creates safe space for ideas</span>
                      <span className="text-xs font-bold text-slate-500">Observed</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="text-[11px] text-blue-900">Recommended 1:1 conversation starter ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONCEPT 02 — EVALUATIVE (DARK VISUAL ENVIRONMENT) */}
          <div className="bg-[#171a20] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Description & Attributes */}
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest font-bold text-sky-400 block mb-2">Concept 02 · Evaluative</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Structured, instant feedback
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  A focused experience for clear expectations, shared criteria and timely input—without confusing evaluation with coaching.
                </p>

                <div className="space-y-3">
                  {[
                    "Visible objective criteria with clear benchmarks",
                    "Response progress and considerate smart reminders",
                    "Secure, role-based review with high accountability",
                    "Consistent response structure across team milestones"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                      <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark Interface Mockup Showcase */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Screen 1: Evaluative Criteria */}
                <div className="fb-mockup-dark p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Milestone Review</span>
                    <span className="text-xs text-emerald-400 font-semibold">Structured</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Review against criteria
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center justify-between">
                      <span className="text-xs text-slate-200">Execution Velocity</span>
                      <span className="text-xs text-sky-300 font-bold">Exceeds</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center justify-between">
                      <span className="text-xs text-slate-200">Stakeholder Alignment</span>
                      <span className="text-xs text-sky-300 font-bold">On Track</span>
                    </div>
                  </div>
                  <button className="w-full py-2.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors">
                    Submit Formal Review
                  </button>
                </div>

                {/* Screen 2: Secure Review Progress */}
                <div className="fb-mockup-dark p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Audit &amp; Governance</span>
                    <Shield className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Secure accountability log
                  </h4>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Peer responses</span>
                      <span className="text-sky-300 font-bold">4 of 4 completed</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-full rounded-full" />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight pt-1">
                      Results synced with performance cycle repository.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 05: VALIDATE THE BEHAVIOR ───────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f1f5f9] text-slate-900 border-b border-slate-300" id="validate">
        <div className="feedback-wrap">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-blue-700 mb-8">
            <span className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-extrabold text-xs">05</span>
            <span>Validate the behavior</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                We tested comprehension, confidence and willingness—not visual preference.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                The prototype focused on the moments with the greatest behavioral risk: beginning a request, answering honestly, understanding what came back and deciding what to do next.
              </p>
            </div>
          </div>

          {/* 3 Validation Findings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-blue-600 block mb-3">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Guidance unlocked action</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Specific prompts gave users a place to begin while preserving room for their own voice.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-blue-600 block mb-3">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy needed to be explicit</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Trust depended on clearly communicating who could see the response and how it would be used.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-blue-600 block mb-3">03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The summary needed a bridge</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Patterns became meaningful only when connected to a practical next step or conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Iteration Engine */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 sm:gap-2 items-center text-xs font-bold uppercase tracking-wider text-slate-800">
              <div className="p-3 bg-slate-50 rounded-lg">Research Signal</div>
              <div className="text-blue-600 font-black">→</div>
              <div className="p-3 bg-slate-50 rounded-lg">Design Decision</div>
              <div className="text-blue-600 font-black">→</div>
              <div className="p-3 bg-slate-50 rounded-lg">Prototype Behavior</div>
              <div className="text-blue-600 font-black">→</div>
              <div className="p-3 bg-blue-50 text-blue-900 rounded-lg">User Evidence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 06: LEAD THE OUTCOME (REFLECT) ──────────────────── */}
      <section className="py-20 lg:py-28 border-b border-white/10" id="reflect">
        <div className="feedback-wrap">
          <div className="fb-chapter-tag">
            <span className="badge">06</span>
            <span>Lead the outcome</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                The deliverable was more than a set of screens.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                The work aligned a cross-functional group around a clearer product strategy: separate feedback intents, make psychological safety visible, and design the moment after feedback with the same care as the moment of asking.
              </p>
            </div>
          </div>

          {/* 3 Leadership Reflections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-[#12151a] border-t-2 border-t-sky-500 border-x border-b border-white/10 rounded-b-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-2">What I Changed</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">From feature debate to decision principles</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I made research usable as a shared evaluation lens, helping the team converge without reducing healthy disagreement.
                </p>
              </div>
            </div>

            <div className="bg-[#12151a] border-t-2 border-t-sky-500 border-x border-b border-white/10 rounded-b-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-2">What I Protected</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">The emotional integrity of the experience</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Efficiency mattered, but not at the expense of trust, agency or the meaning behind the exchange.
                </p>
              </div>
            </div>

            <div className="bg-[#12151a] border-t-2 border-t-sky-500 border-x border-b border-white/10 rounded-b-2xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block mb-2">What I Learned</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Design the system around intent</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  One “feedback” flow could not serve growth and evaluation equally well. Naming that tension unlocked the product direction.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement & Portfolio Links */}
          <div className="bg-gradient-to-r from-blue-900/50 to-indigo-950/60 border border-white/15 rounded-3xl p-8 sm:p-14 text-left relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-sky-400 block mb-2">Feedback 360°</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
                  Designing feedback as a path forward—not a verdict.
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span>Back to top</span>
                </button>
                <button
                  onClick={onNavigateHome || (() => { window.location.href = "/"; })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-slate-900 hover:bg-sky-50 transition-colors cursor-pointer shadow-lg"
                >
                  <span>Explore more work</span>
                  <ArrowRight className="w-4 h-4 text-sky-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="py-8 bg-[#090b0e] border-t border-white/10 text-xs text-slate-400">
        <div className="feedback-wrap flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>Feedback 360° · Product Design Leadership Case Study by Vikram Venkatesh</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Vikram The Artist · All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
