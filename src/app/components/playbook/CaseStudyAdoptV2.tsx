import React, { useState, useCallback, useEffect } from "react";
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
  TrendingDown,
  Award,
  Eye,
  Lock,
  Unlock,
  Heart,
  Zap,
  Quote,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  UserCheck,
  Clock,
  Activity,
  BarChart3,
  Search,
  Maximize2,
  X,
  Bot,
  Terminal,
  FileText,
  Sun,
  Moon,
  GraduationCap,
  Megaphone,
  BarChart2,
  Rocket,
  RefreshCw,
  Layout,
  Workflow,
  Layers2,
  Play,
  Filter,
  Share2,
  HelpCircle,
  AlertCircle,
  Database,
  Sliders,
  Info
} from "lucide-react";
import "@/styles/copilot-case-study.css";

interface CaseStudyAdoptV2Props {
  onBack?: () => void;
}

export function CaseStudyAdoptV2({ onBack }: CaseStudyAdoptV2Props) {
  // Navigation & Scroll State
  const [activeChapter, setActiveChapter] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Scroll Progress & Active Chapter Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Dynamic menu active chapter detection based on scroll position
      const chapters = ["hero", "challenge", "diagnosis", "health", "ecosystem", "principles", "flywheel", "impact", "reflection"];
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveChapter(chapters[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for score-based sentiment emojis
  const getSentimentEmoji = (score: number) => {
    if (score < 25) return { emoji: "😫", label: "Severe Leak", bg: "bg-rose-950/60 border-rose-500/40 text-rose-300" };
    if (score < 50) return { emoji: "🙁", label: "Struggling Bottleneck", bg: "bg-pink-950/60 border-pink-500/40 text-pink-300" };
    if (score < 75) return { emoji: "😐", label: "Mixed Retention", bg: "bg-purple-950/60 border-purple-500/40 text-purple-300" };
    if (score < 90) return { emoji: "🙂", label: "Healthy / Stable", bg: "bg-blue-950/60 border-blue-500/40 text-blue-300" };
    return { emoji: "🤩", label: "Thriving / Compounding", bg: "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" };
  };

  // Lightbox Modal State
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imgUrl: string;
    title: string;
    subtitle: string;
    annotation?: string;
  }>({
    isOpen: false,
    imgUrl: "",
    title: "",
    subtitle: "",
    annotation: "",
  });

  const openLightbox = useCallback((imgUrl: string, title: string, subtitle: string, annotation?: string) => {
    setLightbox({ isOpen: true, imgUrl, title, subtitle, annotation });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  // Keyboard support for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox]);

  // Section 03: Health Model Interactive Selection (ADOPT sequence, Open highlighted by default)
  const [healthSelectedStage, setHealthSelectedStage] = useState<
    "aware" | "desire" | "open" | "proficient" | "transform"
  >("open");

  // Section 03 Main Two Tabs: 1) Recommended Initiatives 2) Design Execution
  const [healthMainTab, setHealthMainTab] = useState<"initiatives" | "execution">("initiatives");

  // Section 03 Tab 2 Design Execution: Sub-Initiative Selector (A, B, C, D)
  const [openInitiative, setOpenInitiative] = useState<"A" | "B" | "C" | "D">("A");

  // Section 04: Design Principles Active Pill
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  // Stage Data for Health Model (Standardized in ADOPT sequence)
  const healthStagesData = {
    aware: {
      id: "aware",
      name: "Aware",
      adoptTag: "AWARE",
      behavioralSub: "Awareness",
      score: 82,
      status: "Strong",
      statusBadge: "bg-blue-950/80 text-blue-300 border-blue-500/40",
      barColor: "#3b82f6",
      stageIcon: Eye,
      iconBg: "bg-blue-950/80 border-blue-500/30",
      iconColor: "text-blue-400",
      pillClass: "bg-[#0c1630] border border-blue-900/60 text-blue-300",
      oneLiner: "Broad awareness drove healthy top-of-funnel intent.",
      priorityLabel: "Priority 05",
      priorityBadge: "border border-blue-500/30 bg-blue-950/40 text-blue-300",
      priorityOrder: "Priority 05 · Awareness · Baseline Strong",
      breaking: "No major friction at top-of-funnel; enterprise communications and kickoffs were highly effective.",
      whyItMatters: [
        "Broad enterprise baseline already achieved at scale",
        "Over-investing here yields diminishing returns",
        "Requires light-touch maintenance while prioritizing lower funnel",
      ],
      downstreamDependency: "Feeds Desire by establishing initial curiosity and license provisioning.",
      decision: "Priority 05 · Maintain · Baseline strong",
      decisionBadge: "bg-slate-900 border-slate-700 text-slate-300",
      initiatives: [
        { code: "A", icon: Compass, label: "In-product discovery prompts", desc: "Contextual discovery banners embedded within standard Microsoft 365 apps." },
        { code: "B", icon: Sparkles, label: "Executive milestone broadcasts", desc: "Leadership momentum videos and executive sponsor kickoffs." },
        { code: "C", icon: FileText, label: "Department rollout playbook", desc: "Step-by-step organizational enablement and launch checklists." },
        { code: "D", icon: Database, label: "Tenant provisioning checklist", desc: "IT automated license validation and permission sanity checks." },
      ],
    },
    desire: {
      id: "desire",
      name: "Desire",
      adoptTag: "DESIRE",
      behavioralSub: "Interest",
      score: 57,
      status: "Mixed",
      statusBadge: "bg-purple-950/80 text-purple-300 border-purple-500/40",
      barColor: "#8b5cf6",
      stageIcon: Heart,
      iconBg: "bg-purple-950/80 border-purple-500/30",
      iconColor: "text-purple-400",
      pillClass: "bg-[#1a1033] border border-purple-900/60 text-purple-300",
      oneLiner: "Promise understood, but relevance was inconsistent across roles.",
      priorityLabel: "Priority 03",
      priorityBadge: "border border-purple-500/30 bg-purple-950/40 text-purple-300",
      priorityOrder: "Priority 03 · Interest · Role Relevance",
      breaking: "Users understood generic AI capabilities but struggled to identify where it mattered in their specific daily deliverable workflow.",
      whyItMatters: [
        "Moderate friction before users take their first real action",
        "Role skepticism delays conversion of curious users",
        "Improves qualified conversion to first-run trial",
      ],
      downstreamDependency: "Direct bridge between awareness and the willingness to attempt a first task.",
      decision: "Priority 03 · Strengthen · Role relevance",
      decisionBadge: "bg-purple-950 border-purple-500/50 text-purple-300",
      initiatives: [
        { code: "A", icon: Compass, label: "Role-personalized landing pages", desc: "Tailored value propositions organized by discipline and job function." },
        { code: "B", icon: Sparkles, label: "Department use-case gallery", desc: "Interactive gallery showing tangible before/after artifacts per department." },
        { code: "C", icon: FileText, label: "Peer success spotlight stories", desc: "Authentic customer case studies from credible departmental peers." },
        { code: "D", icon: Database, label: "Targeted workflow campaigns", desc: "Role-specific email and in-app triggers around high-volume seasonal tasks." },
      ],
    },
    open: {
      id: "open",
      name: "Open",
      adoptTag: "OPEN",
      behavioralSub: "First Value",
      score: 29,
      status: "Weakest (P0)",
      statusBadge: "bg-pink-950/80 text-pink-300 border-pink-500/40",
      barColor: "#ec4899",
      stageIcon: Unlock,
      iconBg: "bg-pink-950/80 border-pink-500/40",
      iconColor: "text-pink-400",
      pillClass: "bg-[#2a0e20] border border-pink-500/50 text-pink-300 font-bold",
      oneLiner: "Interest wasn’t converting into first meaningful value.",
      priorityLabel: "Priority 01 · P0",
      priorityBadge: "border border-pink-500/50 bg-pink-950/50 text-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.3)] font-bold",
      priorityOrder: "Priority 01 · Primary Bottleneck · Invest Now",
      breaking: "Users were interested and willing to try Copilot, but many stalled before reaching a meaningful first success.",
      whyItMatters: [
        "Largest behavioral drop-off point in the entire journey",
        "High user volume encountering first-run friction",
        "Weak first value directly blocks repeat use and retention",
        "Blocks downstream Habit formation and Advocacy",
        "Highest leverage point for immediate product UX intervention",
      ],
      downstreamDependency: "Critical gatekeeper: without a first success, users never enter the habit loop.",
      decision: "Priority 01 · Primary bottleneck · Highest leverage (P0)",
      decisionBadge: "bg-pink-950/80 border border-pink-500/50 text-pink-300",
      initiatives: [
        { code: "A", icon: Compass, label: "Guided onboarding journeys", desc: "Reduce uncertainty and progressively guide users toward their first meaningful task." },
        { code: "B", icon: Sparkles, label: "First-prompt experiences", desc: "Replace the blank canvas with high-confidence starting actions." },
        { code: "C", icon: FileText, label: "Role-based prompt libraries", desc: "Make prompt discovery relevant to the user’s actual role, task, and outcome." },
        { code: "D", icon: Database, label: "Admin seeded content", desc: "Help community admins launch useful experiences without starting from an empty destination." },
      ],
    },
    proficient: {
      id: "proficient",
      name: "Proficient",
      adoptTag: "PROFICIENT",
      behavioralSub: "Habit",
      score: 41,
      status: "Next Constraint (P1)",
      statusBadge: "bg-sky-950/80 text-sky-300 border-sky-500/40",
      barColor: "#38bdf8",
      stageIcon: Activity,
      iconBg: "bg-sky-950/80 border-sky-500/30",
      iconColor: "text-sky-400",
      pillClass: "bg-[#0c1e36] border border-sky-900/60 text-sky-300",
      oneLiner: "Repeat use plateaued after initial experimentation.",
      priorityLabel: "Priority 02 · P1",
      priorityBadge: "border border-sky-500/30 bg-sky-950/40 text-sky-300",
      priorityOrder: "Priority 02 · Habit Retention · Invest Next",
      breaking: "Initial experimentation did not convert into ongoing workflows because daily tasks lacked natural re-engagement triggers.",
      whyItMatters: [
        "Users fell back to legacy habits without contextual nudges",
        "Prevents realization of compounding team productivity",
        "Direct bridge to organizational advocacy and mastery",
      ],
      downstreamDependency: "Sustains long-term active use and creates the expert knowledge that powers Transform.",
      decision: "Priority 02 · Invest next · Retention engine",
      decisionBadge: "bg-sky-950 border-sky-500/50 text-sky-300",
      initiatives: [
        { code: "A", icon: Compass, label: "Contextual in-task recommendations", desc: "Contextual nudges embedded within daily apps proposing relevant prompt actions." },
        { code: "B", icon: Sparkles, label: "Prompt-first learning modules", desc: "Interactive skill builders where every educational tip is immediately runnable." },
        { code: "C", icon: BarChart3, label: "Adoption analytics diagnostics", desc: "Adoption intelligence instrument for diagnosing stage drop-offs and cohorts." },
        { code: "D", icon: Bot, label: "Agentic support + expert escalation", desc: "Instant AI answers paired with verified human champion escalation." },
      ],
    },
    transform: {
      id: "transform",
      name: "Transform",
      adoptTag: "TRANSFORM",
      behavioralSub: "Advocacy",
      score: 63,
      status: "Emerging",
      statusBadge: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
      barColor: "#34d399",
      stageIcon: Rocket,
      iconBg: "bg-emerald-950/80 border-emerald-500/30",
      iconColor: "text-emerald-400",
      pillClass: "bg-[#0c261e] border border-emerald-900/60 text-emerald-300",
      oneLiner: "Champions existed, but knowledge was trapped in silos.",
      priorityLabel: "Priority 04",
      priorityBadge: "border border-emerald-500/30 bg-emerald-950/40 text-emerald-300",
      priorityOrder: "Priority 04 · Advocacy · Scale Multipliers",
      breaking: "Power users succeeded privately; their custom workflows were not compounding across the broader organization.",
      whyItMatters: [
        "Peer proof accelerates early adoption stages for new cohorts",
        "Reduces central training burden via community playbooks",
        "Scales organic bottom-up AI transformation",
      ],
      downstreamDependency: "Completes the flywheel: champion assets feed back into Desire and Open for the next wave.",
      decision: "Priority 04 · Scale · Peer multipliers",
      decisionBadge: "bg-emerald-950 border-emerald-500/50 text-emerald-300",
      initiatives: [
        { code: "A", icon: Compass, label: "User-generated prompt playbooks", desc: "Shared repositories of peer-vetted prompt workflows by role." },
        { code: "B", icon: Award, label: "Champion recognition & badges", desc: "Certification, public badges, and executive visibility for power users." },
        { code: "C", icon: FileText, label: "Success spotlight series", desc: "Company-wide showcases celebrating time-saved achievements." },
        { code: "D", icon: Database, label: "Cross-department sharing forums", desc: "Viva Engage interactive communities for peer prompt exchange." },
      ],
    },
  };

  const currentHealthData = healthStagesData[healthSelectedStage];

  // Design Principles Data
  const principlesData = [
    {
      num: "01",
      title: "Design the next behavior, not the next feature",
      desc: "Measure success by whether users take the next meaningful action, not how many capabilities we expose at once.",
    },
    {
      num: "02",
      title: "Earn the first win before teaching the system",
      desc: "Solve blank-canvas paralysis first. Advanced prompt syntax means nothing if a user never experiences their first victory.",
    },
    {
      num: "03",
      title: "Teach at the moment of need",
      desc: "Replace upfront heavy training videos with contextual, progressive guidance embedded directly inside live work deliverables.",
    },
    {
      num: "04",
      title: "Turn expert behavior into reusable infrastructure",
      desc: "Transform private power-user breakthroughs into public prompt libraries and playbooks that compound organizational capability.",
    },
  ];

  return (
    <div className="copilot-case-study bg-[#000000] text-slate-100 min-h-screen selection:bg-sky-500/30 selection:text-white font-sans antialiased">
      
      {/* ── STICKY MINIMALIST CHAPTER NAVIGATION ────────────────────── */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#000000]/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Playbook</span>
              </button>
            )}
            <span className="text-xs font-bold text-white tracking-tight hidden sm:inline-block">
              Scaling Copilot Adoption
            </span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "hero", label: "Overview" },
              { id: "challenge", label: "Opportunity" },
              { id: "diagnosis", label: "Diagnosis" },
              { id: "health", label: "Adoption Health" },
              { id: "ecosystem", label: "Ecosystem" },
              { id: "principles", label: "Principles" },
              { id: "flywheel", label: "Flywheel" },
              { id: "impact", label: "Impact" },
              { id: "reflection", label: "Reflection" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveChapter(item.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  activeChapter === item.id
                    ? "bg-sky-500/15 text-sky-400 border border-sky-500/40 shadow-sm font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Scroll Progress Bar at the bottom of the sticky menu */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-900/60 z-50">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-pink-500 to-amber-400 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative bg-black border-b border-slate-800/80 overflow-hidden bg-no-repeat bg-right bg-cover lg:bg-contain"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}IMG/copilot-case-study/Copilot%20Hero.png)`,
          backgroundColor: "#000000",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 lg:via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <div className="max-w-3xl">
            {/* Category Eyebrow Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#090e18]/90 border border-slate-700/60 text-slate-300">
                MICROSOFT COPILOT
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#090e18]/90 border border-slate-700/60 text-slate-300">
                BEHAVIOR CHANGE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#090e18]/90 border border-slate-700/60 text-slate-300">
                0 → 1 ADOPTION SYSTEM
              </span>
            </div>

            {/* Title (Level 1) */}
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight text-white leading-[1.04] mb-6">
              Scaling Copilot<br />
              <span className="bg-gradient-to-r from-[#38bdf8] via-[#ec4899] to-[#fb923c] bg-clip-text text-transparent">
                Adoption
              </span>
            </h1>

            {/* Subtitle / Lede */}
            <p className="text-xl sm:text-2xl lg:text-[26px] font-medium leading-snug mb-5 text-slate-100 max-w-2xl">
              Despite soaring interest in enterprise AI, teams struggled to adopt Copilot <strong className="text-white font-bold">meaningfully and consistently.</strong>
            </p>

            {/* Body Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Organizations were investing heavily in rollout. Licenses were assigned, kickoffs were completed, and trial curiosity was high. Yet Copilot was not converting into everyday work habits.
            </p>

            {/* Proof Triad (Level 2 Evidence) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
              <div className="px-4 py-2.5 rounded-xl border border-slate-800 bg-[#070b14]/90 text-xs sm:text-sm font-medium text-slate-400 flex items-center justify-center gap-2">
                <span className="text-slate-500 font-bold">⊘</span>
                <span>Access wasn’t the gap</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl border border-slate-800 bg-[#070b14]/90 text-xs sm:text-sm font-medium text-slate-400 flex items-center justify-center gap-2">
                <span className="text-slate-500 font-bold">⊘</span>
                <span>Awareness wasn’t the gap</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl border border-sky-500/50 bg-[#0c163b]/90 text-xs sm:text-sm font-bold text-sky-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <span className="text-sky-400 font-bold">✦</span>
                <span>Behavior change was</span>
              </div>
            </div>

            {/* Core Challenge Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070b16]/90 border border-slate-800 text-sm text-slate-200 flex items-start sm:items-center gap-4 mb-8 max-w-2xl">
              <div className="w-9 h-9 rounded-xl bg-sky-950 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-sky-300 font-bold block sm:inline mr-1">The core challenge:</strong>
                <span>Turn one-time trial into repeatable value, and repeatable value into daily work habits.</span>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800/80 text-xs max-w-2xl">
              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase font-semibold text-[11px]">Role</span>
                <strong className="text-sm font-bold text-white">Lead Product Designer</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase font-semibold text-[11px]">Scope</span>
                <strong className="text-sm font-bold text-white">Strategy → UX → Metrics</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase font-semibold text-[11px]">Focus</span>
                <strong className="text-sm font-bold text-white">Behavior Change &amp; Habit</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase font-semibold text-[11px]">Outcome</span>
                <strong className="text-sky-400 text-sm font-bold">2.4× Adoption Momentum</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO ARTIFACT · OPERATING SYSTEM ─────────────────────────── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80 bg-[#040817]">
        <div className="copilot-wrap">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-2 font-mono">
                OPERATING SYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                From behavioral friction signals to highest-leverage interventions.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
              The systematic framework behind the work: diagnose the journey, quantify stage health, isolate the weakest bottleneck, design targeted UX interventions, and reinforce habits through the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {[
              { num: "01", tag: "Research", tagColor: "text-sky-400", title: "Find the friction", desc: "Telemetry, journey signals, user interviews, community feedback.", focus: false },
              { num: "02", tag: "Health Model", tagColor: "text-indigo-400", title: "Quantify health", desc: "Aware → Desire → Open → Proficient → Transform.", focus: false },
              { num: "03", tag: "Prioritize", tagColor: "text-pink-400", title: "Fix bottleneck", desc: "Open (29/100) emerged as the critical P0 constraint.", focus: true },
              { num: "04", tag: "Intervene", tagColor: "text-sky-400", title: "Design behavior", desc: "Onboarding, first prompts, role recipes, in-app coaching.", focus: false },
              { num: "05", tag: "Flywheel", tagColor: "text-purple-400", title: "Reinforce loop", desc: "Peer playbooks, champion recognition, shared assets.", focus: false },
              { num: "06", tag: "Impact", tagColor: "text-emerald-400", title: "Measure lift", desc: "Track verified progression from trial into daily habits.", focus: false },
            ].map((node, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  node.focus
                    ? "bg-[#160b1e] border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                    : "bg-[#070b16] border-slate-800/80"
                }`}
              >
                <span className={`text-xs font-mono font-bold block mb-2 ${node.focus ? "text-pink-400" : "text-slate-500"}`}>{node.num}</span>
                <div>
                  <small className={`text-[10px] uppercase font-mono font-extrabold tracking-wider block mb-1 ${node.tagColor}`}>{node.tag}</small>
                  <b className="text-sm font-bold block mb-1.5 text-white">{node.title}</b>
                  <span className="text-xs text-slate-400 leading-relaxed block">{node.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAPTER 01: THE OPPORTUNITY ─────────────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-slate-800/80 bg-[#000000]" id="challenge">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-sky-400 font-mono font-bold tracking-widest text-xs uppercase block mb-3">
                01 / THE OPPORTUNITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12]">
                AI deployment was growing.<br />
                Everyday behavior wasn’t changing with it.
              </h2>
            </div>
            <div className="lg:col-span-5 pt-2 lg:pt-8">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Enterprise organizations were rolling out Copilot across tens of thousands of seats. On paper, deployment was a resounding success: licenses allocated, video training completed, curiosity peak. But underneath, users tried it once, struggled to reach meaningful value, and retreated to familiar manual workflows.
              </p>
            </div>
          </div>

          {/* Sophisticated False-Positive Contrast (Level 2 Evidence) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#050b1a] border border-slate-800/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-200">What looked healthy</h3>
                  </div>
                  <span className="text-[11px] uppercase font-mono tracking-wider text-slate-500">Surface Signals</span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-300">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800/60">
                    <span className="text-slate-500 font-bold">•</span>
                    <span>Licenses were assigned at enterprise scale</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800/60">
                    <span className="text-slate-500 font-bold">•</span>
                    <span>Initial curiosity and interest were high</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800/60">
                    <span className="text-slate-500 font-bold">•</span>
                    <span>Introductory training sessions completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 font-bold">•</span>
                    <span>Initial launch metrics met IT milestones</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs text-slate-500 italic">
                Reported as deployment success by standard IT enablement scorecards
              </div>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#180a14] to-[#0c0610] border border-rose-500/40 shadow-[0_0_35px_rgba(244,63,94,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-500/20">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">What was actually broken</h3>
                  </div>
                  <span className="text-[11px] uppercase font-mono tracking-wider text-rose-400 font-bold">True Friction</span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-200">
                  <div className="flex items-center gap-3 pb-3 border-b border-rose-500/20">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span className="font-semibold text-white">Weak first-use value conversion</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-rose-500/20">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span className="font-semibold text-white">Rapid drop-off after initial trial attempt</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-rose-500/20">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span className="font-semibold text-white">Habits were not forming in daily deliverables</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span className="font-semibold text-white">Successful prompt breakthroughs remained trapped in silos</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-rose-500/20 text-xs text-rose-300 font-medium">
                The behavioral reality: high trial intent, but severe drop-off before first success
              </div>
            </div>
          </div>

          {/* Strategic Insight Callout */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#040e1c] border border-sky-500/40 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
            <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug">
              Product opportunity: design a progression system that moves people from{" "}
              <span className="text-sky-300 font-black">“I know it exists”</span> to{" "}
              <span className="text-sky-300 font-black">“this is how I work every day.”</span>
            </p>
            <div className="shrink-0 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-950/60 text-xs text-sky-300 font-mono self-start md:self-auto">
              Focus: optimize for value realization, not feature exposure
            </div>
          </div>

          {/* Strategic Leadership Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold text-sky-400 block mb-2 font-mono uppercase">Product Strategy</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Established the adoption-health model used to prioritize organizational investments and diagnose journey drop-offs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold text-indigo-400 block mb-2 font-mono uppercase">UX Strategy</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Translated behavioral drop-off barriers into stage-specific interventions and progressive guidance systems.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold text-pink-400 block mb-2 font-mono uppercase">Experience Design</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Architected and designed onboarding, role prompt libraries, prompt-first learning, support, and analytics instruments.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold text-emerald-400 block mb-2 font-mono uppercase">Leadership</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aligned Product, UX, Adoption, Enablement, and Community leadership around one unified behavioral operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 02: RESEARCH FINDINGS ────────────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-slate-800/80 bg-[#000000]" id="diagnosis">
        <div className="copilot-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-3 font-mono">
                02 / RESEARCH &amp; DIAGNOSIS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12]">
                Look beyond usage metrics.<br />
                Find where behavior breaks.
              </h2>
            </div>
            <div className="lg:col-span-5 pt-2 lg:pt-8">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                I synthesized qualitative research, engagement telemetry, and end-to-end journey maps around one central question: what stops Copilot from becoming part of everyday knowledge work?
              </p>
            </div>
          </div>

          {/* 4 Core Evidentiary Findings (Level 2 Evidence) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Awareness wasn't the constraint", desc: "Most users knew what Copilot was. The harder question was where it created tangible value in their specific daily deliverables.", evidence: "Observed in customer + tenant conversations" },
              { num: "02", title: "Training grew knowledge, not habit", desc: "Users completed videos and still returned to old habits. Knowing what Copilot could do didn't build confidence to use it tomorrow.", evidence: "Seen in usage patterns + champion feedback" },
              { num: "03", title: "Largest drop-off at first success", desc: "People were willing to try, but blank input boxes and generic examples caused massive drop-off before reaching a first win.", evidence: "Repeated across journey telemetry mapping" },
              { num: "04", title: "Workflows remained isolated", desc: "When champions discovered powerful workflows, those practices stayed local instead of becoming shared organizational capability.", evidence: "Observed in community sharing behavior" }
            ].map((finding, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-[#050b1a] border border-slate-800/90 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-4xl font-extrabold text-sky-400 font-mono block mb-4">{finding.num}</span>
                  <h3 className="text-lg font-bold mb-2.5 text-white leading-snug">{finding.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">{finding.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">Evidence Source:</span>
                  <span className="text-xs font-medium text-sky-400 leading-tight block">{finding.evidence}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology bar */}
          <div className="p-5 rounded-2xl bg-[#050b1a] border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm shadow-sm mb-8">
            <span className="font-bold text-white font-mono uppercase text-xs">Research Methodology &amp; Sources:</span>
            <div className="flex flex-wrap gap-2">
              {["Customer & Tenant Conversations", "Champion Feedback", "Usage & Telemetry Patterns", "Community Behavior", "Journey Mapping"].map((s, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Conclusion Callout */}
          <div className="p-6 rounded-3xl bg-[#040e1c] border border-sky-500/40 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(56,189,248,0.08)]">
            <p className="text-base sm:text-lg font-bold text-white leading-snug max-w-xl">
              The diagnosis revealed one fundamental truth:{" "}
              <span className="text-sky-300 font-black">adoption health was uneven across the journey.</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-md md:text-right">
              The next step was to quantify where momentum was strongest, where it was breaking, and what to fix first.
            </p>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 03: ADOPTION HEALTH & UX EXECUTION WORKSPACE ──────── */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-slate-800/80 bg-[#040817]" id="health">
        <div className="copilot-wrap">
          {/* Section 03 Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-sky-400 font-mono font-bold tracking-widest text-xs uppercase block mb-3">
                03 / ADOPTION HEALTH &amp; DESIGN EXECUTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12]">
                From behavioral health diagnosis<br />
                directly into UX execution.
              </h2>
            </div>
            <div className="lg:col-span-5 pt-2 lg:pt-8">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                To identify high-leverage opportunities, I built an adoption health diagnosis model across five stages. The diagnosis identified Open as the P0 bottleneck and generated the exact design backlog explored below.
              </p>
            </div>
          </div>

            {/* Model Card Header with Context & Target Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-sky-400 font-mono text-xs tracking-wider uppercase font-bold block mb-1">
                  INTERACTIVE ADOPTION HEALTH MODEL
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  <strong>Journey order stays fixed:</strong> Aware → Desire → Open → Proficient → Transform
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="px-4 py-1.5 rounded-full border border-pink-500/40 bg-pink-950/30 text-xs font-mono text-pink-300 shadow-sm font-semibold flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Investment Priority = Lowest health first (Open P0)</span>
                </div>
              </div>
            </div>

            {/* Top 5 Clickable Stage Cards in Fixed ADOPT Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
              {(
                [
                  "aware",
                  "desire",
                  "open",
                  "proficient",
                  "transform",
                ] as Array<keyof typeof healthStagesData>
              ).map((stageKey) => {
                const stage = healthStagesData[stageKey];
                const isSelected = healthSelectedStage === stageKey;
                const IconComp = stage.stageIcon;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setHealthSelectedStage(stageKey)}
                    className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? stage.id === "open"
                          ? "bg-[#110a1d] border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.35)] scale-[1.02]"
                          : "bg-[#09152e] border-2 border-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.25)] scale-[1.02]"
                        : "bg-[#060c1d] border border-slate-800/80 hover:border-slate-700 hover:bg-[#081026]"
                    }`}
                  >
                    <div>
                      {/* Top Row: Icon inside Circle + Stage Name */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-full border ${stage.iconBg} ${stage.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-base sm:text-lg font-bold text-white tracking-tight">{stage.name}</span>
                      </div>

                      {/* Middle: Big Score */}
                      <div className="flex items-baseline mb-3">
                        <span className="text-4xl sm:text-5xl font-black text-white">{stage.score}</span>
                        <span className="text-xs sm:text-sm text-slate-500 ml-1 font-mono">/100</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 sm:h-2 rounded-full bg-slate-800/90 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${stage.score}%`, backgroundColor: stage.barColor }}
                        />
                      </div>

                      {/* Bottom Priority Pill */}
                      <div className="mt-3.5">
                        <span className={`block w-full text-center py-1 px-2.5 rounded-full text-[11px] font-mono font-medium ${stage.pillClass}`}>
                          {stage.priorityLabel}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── TWO MAIN TABS: 1) Recommended Initiatives 2) Design Execution ── */}
            <div className="flex items-center gap-2 mb-6 p-1.5 rounded-2xl bg-[#030712] border border-slate-800 max-w-fit shadow-md">
              <button
                onClick={() => setHealthMainTab("initiatives")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  healthMainTab === "initiatives"
                    ? "bg-sky-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>1 · Recommended Initiatives</span>
              </button>
              <button
                onClick={() => setHealthMainTab("execution")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  healthMainTab === "execution"
                    ? "bg-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>2 · Design Execution</span>
              </button>
            </div>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* ── TAB 1: RECOMMENDED INITIATIVES (40% LEFT / 60% RIGHT) ───────── */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            {healthMainTab === "initiatives" && (
              <div className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-[#040817] border border-blue-950/60 shadow-2xl animate-fadeIn space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (5 cols / 42% width) */}
                  <div className="lg:col-span-5 space-y-5">
                    
                    {/* Row 1: Hero Diagnostic Statement */}
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-800/80">
                      <div className="w-11 h-11 rounded-full border border-pink-500/50 bg-pink-950/50 text-pink-400 flex items-center justify-center text-xl font-bold shrink-0 shadow-md">
                        !
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {currentHealthData.oneLiner}
                      </h3>
                    </div>

                    {/* What was breaking */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 block">
                        WHAT WAS BREAKING:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {currentHealthData.breaking}
                      </p>
                    </div>

                    {/* Downstream Dependency */}
                    <div className="p-4 rounded-xl bg-[#060c1e] border border-slate-800/80">
                      <span className="text-xs font-mono font-bold uppercase text-sky-400 block mb-1">
                        DOWNSTREAM DEPENDENCY:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                        {currentHealthData.downstreamDependency}
                      </p>
                    </div>

                    {/* Why this stage mattered */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 font-mono">
                        WHY THIS STAGE MATTERED
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                        {currentHealthData.whyItMatters.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column (7 cols / 58% width) */}
                  <div className="lg:col-span-7 lg:border-l lg:border-slate-800/80 lg:pl-8 space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-pink-400 font-mono">
                        RECOMMENDED UX INITIATIVES
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                        DIRECT BACKLOG OUTPUT
                      </span>
                    </div>

                    <div className="space-y-3">
                      {currentHealthData.initiatives.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setOpenInitiative(item.code as any);
                            setHealthMainTab("execution");
                          }}
                          className="w-full text-left p-4 rounded-2xl bg-[#060c1e] border border-slate-800/90 text-xs font-medium text-slate-200 flex items-center justify-between gap-4 shadow-sm hover:border-pink-500/60 hover:bg-[#09122a] hover:scale-[1.01] transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-9 h-9 rounded-full bg-pink-950/70 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0 font-bold font-mono text-sm shadow-sm group-hover:bg-pink-900/80 group-hover:border-pink-400 transition-colors">
                              <span>{item.code}</span>
                            </div>
                            <div>
                              <strong className="text-sm sm:text-base font-bold text-white block mb-0.5 group-hover:text-pink-300 transition-colors">
                                {item.label}
                              </strong>
                              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-pink-400 group-hover:translate-x-1 transition-all shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Full-Width Bottom Banner */}
                <div
                  onClick={() => setHealthMainTab("execution")}
                  className="p-4 rounded-2xl bg-gradient-to-r from-[#180816] via-[#100615] to-[#180816] border border-pink-500/40 text-xs sm:text-sm text-pink-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg cursor-pointer hover:border-pink-400 hover:bg-pink-950/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-pink-950 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Diagnosis Output:</strong> These recommendations became the design backlog.
                    </span>
                  </div>
                  <span className="text-pink-400 font-bold underline group-hover:text-pink-300 transition-colors flex items-center gap-1">
                    Explore Design Execution Tab →
                  </span>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* ── TAB 2: DESIGN EXECUTION WORKSPACE DETAILS (FOCUSED & MINIMAL) ── */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            {healthMainTab === "execution" && (() => {
              const currentInitIndex = currentHealthData.initiatives.findIndex((i) => i.code === openInitiative);
              const activeInitIndex = currentInitIndex >= 0 ? currentInitIndex : 0;
              const activeInit = currentHealthData.initiatives[activeInitIndex];

              // Stage-specific images and design details
              const getInitiativeArtifact = () => {
                if (currentHealthData.id === "aware") {
                  return activeInit.code === "A"
                    ? `${import.meta.env.BASE_URL}IMG/copilot-case-study/aware-member-discovery.png`
                    : `${import.meta.env.BASE_URL}IMG/copilot-case-study/aware-admin-banner.png`;
                }
                if (currentHealthData.id === "desire") {
                  return `${import.meta.env.BASE_URL}IMG/copilot-case-study/desire-landing-page.png`;
                }
                if (currentHealthData.id === "open") {
                  if (activeInit.code === "A") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/open-guided-tour.png`;
                  if (activeInit.code === "B") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/open-quick-start.png`;
                  if (activeInit.code === "C") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/desire-landing-page.png`;
                  return `${import.meta.env.BASE_URL}IMG/copilot-case-study/aware-admin-banner.png`;
                }
                if (currentHealthData.id === "proficient") {
                  if (activeInit.code === "C") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-usage-analytics.png`;
                  if (activeInit.code === "D") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-agentic-framework.png`;
                  return `${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-prompt-first.png`;
                }
                // Transform
                return `${import.meta.env.BASE_URL}IMG/copilot-case-study/transform-recognition.png`;
              };

              // Stage and Initiative-specific Key Design Decisions
              const getInitiativeKeyDecisions = () => {
                const map: Record<string, Record<string, Array<{ step: string; title: string; desc: string }>>> = {
                  aware: {
                    A: [
                      { step: "01", title: "NATIVE ENTRYPOINTS", desc: "Embed discovery cues directly inside Teams, Outlook, and Word instead of a disconnected portal." },
                      { step: "02", title: "LIGHT-TOUCH TRIGGERS", desc: "Display contextual banners triggered by document drafting rather than intrusive modal interruptions." },
                      { step: "03", title: "ROLE-AWARE TEASERS", desc: "Preview tangible time-saving opportunities customized to the user's specific functional domain." },
                      { step: "04", title: "ZERO-FRICTION ONRAMP", desc: "Provide 1-click feature activation without requiring complex multi-step IT authentication." },
                    ],
                    B: [
                      { step: "01", title: "LEADERSHIP ENDORSEMENT", desc: "Leverage respected department leaders to broadcast verified early adoption milestones." },
                      { step: "02", title: "METRIC TRANSPARENCY", desc: "Publish organization-wide hours saved and efficiency gains to build broad confidence." },
                      { step: "03", title: "CONCRETE BUSINESS WINS", desc: "Feature real cross-functional team stories alongside quantitative adoption figures." },
                      { step: "04", title: "ENTERPRISE SECURITY", desc: "Reiterate compliance and data-boundary protections in all executive-facing updates." },
                    ],
                    C: [
                      { step: "01", title: "PHASED COHORTS", desc: "Stagger team rollouts systematically to refine support before enterprise-wide launch." },
                      { step: "02", title: "CHAMPION TOOLKITS", desc: "Provide departmental champions with pre-built slide decks and quick-start guides." },
                      { step: "03", title: "READINESS AUDITS", desc: "Verify IT permissions and tenant configurations prior to scheduling team launch dates." },
                      { step: "04", title: "LIVE FEEDBACK LOOPS", desc: "Maintain real-time issue escalation channels to rapidly remove onboarding blockers." },
                    ],
                    D: [
                      { step: "01", title: "AUTOMATED HEALTH CHECKS", desc: "Empower IT administrators with self-service tenant policy and license validation." },
                      { step: "02", title: "BULK PROVISIONING", desc: "Streamline seat allocation mapped directly to active directory security groups." },
                      { step: "03", title: "DATA GUARDRAILS", desc: "Ensure boundary policies and DLP rules are actively enforced before user invitations." },
                      { step: "04", title: "VELOCITY MONITORING", desc: "Track activation rates and license claim latency in a consolidated admin dashboard." },
                    ],
                  },
                  desire: {
                    A: [
                      { step: "01", title: "ROLE-SPECIFIC TAXONOMY", desc: "Tailor value propositions directly to Finance, HR, Sales, and Engineering workflows." },
                      { step: "02", title: "TANGIBLE DELIVERABLES", desc: "Showcase realistic before/after work artifacts rather than abstract AI feature lists." },
                      { step: "03", title: "PEER TESTIMONIALS", desc: "Highlight peer case studies from identical departments to make value immediately relatable." },
                      { step: "04", title: "1-CLICK STARTER RECIPES", desc: "Provide instant jump-links to pre-configured starter prompts tailored to their role." },
                    ],
                    B: [
                      { step: "01", title: "CURATED RECIPE CATALOG", desc: "Organize proven prompt recipes by business impact, functional domain, and task type." },
                      { step: "02", title: "COMPLEXITY TAGGING", desc: "Clearly distinguish 2-minute quick wins from complex multi-document syntheses." },
                      { step: "03", title: "1-CLICK CLONING", desc: "Enable one-click prompt copying directly into the user's active Copilot workspace." },
                      { step: "04", title: "PEER UPVOTING", desc: "Incorporate community ratings to naturally surface the highest-impact workflows." },
                    ],
                    C: [
                      { step: "01", title: "AUTHENTIC STORIES", desc: "Spotlight everyday employees overcoming authentic operational friction points." },
                      { step: "02", title: "QUANTIFIED TIME SAVED", desc: "Spotlight measurable hours reclaimed each week for strategic, deep-focus tasks." },
                      { step: "03", title: "PROMPT ANATOMY REVEAL", desc: "Show the exact multi-turn prompts and iterative refinements used to reach success." },
                      { step: "04", title: "CHAMPION VISIBILITY", desc: "Recognize early innovators across internal communication channels to inspire peers." },
                    ],
                    D: [
                      { step: "01", title: "CADENCE ALIGNMENT", desc: "Align prompt recommendations with company calendar milestones like quarterly reviews." },
                      { step: "02", title: "MICRO-LEARNING NUDGES", desc: "Deliver 60-second actionable tips in ambient collaboration channels without interruption." },
                      { step: "03", title: "WEEKLY EXPERIMENTS", desc: "Encourage users to test one specific high-leverage micro-workflow each week." },
                      { step: "04", title: "MOMENTUM CELEBRATION", desc: "Acknowledge team milestone completions to maintain adoption enthusiasm." },
                    ],
                  },
                  open: {
                    A: [
                      { step: "01", title: "FIRST 3-MINUTE VALUE", desc: "Guide first-time users to a verified successful completion within their first 180 seconds." },
                      { step: "02", title: "PROGRESSIVE DISCLOSURE", desc: "Keep the initial canvas clean; reveal advanced controls only after the first success." },
                      { step: "03", title: "IN-SITU GUIDANCE", desc: "Anchor lightweight tooltips directly where user interaction occurs to eliminate ambiguity." },
                      { step: "04", title: "SUCCESS VERIFICATION", desc: "Celebrate output generation with guided suggestions on how to inspect and refine results." },
                    ],
                    B: [
                      { step: "01", title: "BLANK-CANVAS ELIMINATION", desc: "Replace intimidating empty input boxes with contextual, high-confidence starters." },
                      { step: "02", title: "1-CLICK EXECUTION", desc: "Allow instant execution of starter prompts so users immediately witness AI capability." },
                      { step: "03", title: "VARIABLE BRACKETS", desc: "Use clear syntax cues like [Client Name] to teach prompt customization intuitively." },
                      { step: "04", title: "REFINEMENT CUES", desc: "Provide instant follow-up prompts to teach iterative output improvement." },
                    ],
                    C: [
                      { step: "01", title: "ROLE-AWARE FILTERING", desc: "Surface curated prompt packs mapped to job title, seniority, and daily task profiles." },
                      { step: "02", title: "VERIFIED QUALITY GATES", desc: "Ensure every library prompt is pre-tested to consistently deliver high-quality outputs." },
                      { step: "03", title: "DAILY TASK COVERAGE", desc: "Focus library offerings on the top 5 repetitive drafting and synthesis workflows." },
                      { step: "04", title: "FAVORITE & PIN", desc: "Allow users to pin their most frequent prompts directly to their personal quick bar." },
                    ],
                    D: [
                      { step: "01", title: "ZERO-STATE SEEDING", desc: "Pre-populate new workspace channels with approved prompt templates from day one." },
                      { step: "02", title: "GOVERNANCE COMPLIANCE", desc: "Ensure default seeded prompts adhere to enterprise data privacy and IP standards." },
                      { step: "03", title: "ADMIN CURATION PORTAL", desc: "Provide community leads an intuitive portal to publish and manage team-wide prompts." },
                      { step: "04", title: "USAGE TELEMETRY", desc: "Track which seeded templates generate the highest initial trial and repeat adoption." },
                    ],
                  },
                  proficient: {
                    A: [
                      { step: "01", title: "IN-TASK CONTEXT", desc: "Suggest prompt recipes tailored dynamically to the specific document type currently open." },
                      { step: "02", title: "INTENT RECOGNITION", desc: "Detect drafting bottlenecks and offer real-time suggestions to sharpen prompt phrasing." },
                      { step: "03", title: "PERIPHERAL SURFACING", desc: "Anchor assistance in a non-intrusive side pane that preserves active drafting flow." },
                      { step: "04", title: "ADVANCED PROMPT CHAINING", desc: "Progressively introduce multi-stage prompting as baseline proficiency solidifies." },
                    ],
                    B: [
                      { step: "01", title: "INTERACTIVE SANDBOX", desc: "Provide a safe, risk-free playground to experiment with complex prompt structures." },
                      { step: "02", title: "BEFORE & AFTER DIFFS", desc: "Show how adding constraints and tone parameters elevates output from raw to polished." },
                      { step: "03", title: "MICRO-CREDENTIALS", desc: "Reward proficiency milestones with shareable digital badges and champion status." },
                      { step: "04", title: "3-MINUTE BITE SCENARIOS", desc: "Structure learning into concise, interactive workflow challenges rather than long videos." },
                    ],
                    C: [
                      { step: "01", title: "COHORT MASTERY METRICS", desc: "Track transition from simple one-shot prompts to sophisticated iterative workflows." },
                      { step: "02", title: "FRICTION DETECTION", desc: "Identify drop-off points in adoption funnels to deploy targeted enablement support." },
                      { step: "03", title: "DEPARTMENT BENCHMARKS", desc: "Provide team leads with comparative adoption benchmarks against top enterprise peers." },
                      { step: "04", title: "ROI & HOURS RECLAIMED", desc: "Calculate verified productivity ROI and aggregate hours saved for leadership review." },
                    ],
                    D: [
                      { step: "01", title: "EMBEDDED AI COACH", desc: "Provide an in-app helper agent that diagnoses failed prompts and suggests fixes instantly." },
                      { step: "02", title: "1-CLICK EXPERT ESCALATION", desc: "Enable seamless routing of complex workflow queries to certified internal champions." },
                      { step: "03", title: "SHARED RESOLUTION FAQ", desc: "Automatically transform resolved support tickets into searchable team prompt tips." },
                      { step: "04", title: "PEER OFFICE HOURS", desc: "Integrate calendar booking for hands-on prompt engineering coaching sessions." },
                    ],
                  },
                  transform: {
                    A: [
                      { step: "01", title: "DECENTRALIZED PUBLISHING", desc: "Empower domain power users to author and publish multi-stage workflow playbooks." },
                      { step: "02", title: "PEER REVIEW GATES", desc: "Implement community review and quality ratings to maintain playbook standards." },
                      { step: "03", title: "1-CLICK WORKSPACE FORKING", desc: "Allow departments to clone and customize enterprise playbooks for unique sub-tasks." },
                      { step: "04", title: "IMPACT ATTRIBUTION", desc: "Quantify and celebrate the organizational hours saved by each author's shared playbook." },
                    ],
                    B: [
                      { step: "01", title: "EXPERT CREDENTIALING", desc: "Award recognized internal credentials and advisory roles to active adoption champions." },
                      { step: "02", title: "ALL-HANDS SHOWCASES", desc: "Feature top prompt innovators in monthly all-hands meetings and company publications." },
                      { step: "03", title: "MENTORSHIP LEADERBOARD", desc: "Gamify peer coaching with transparent recognition of community assistance hours." },
                      { step: "04", title: "EXECUTIVE ACCESS", desc: "Connect top champions directly with product leadership for roadmap co-creation." },
                    ],
                    C: [
                      { step: "01", title: "CROSS-DEPARTMENT SPOTLIGHTS", desc: "Produce concise case studies showcasing AI transformations across non-technical teams." },
                      { step: "02", title: "CROSS-POLLINATION", desc: "Facilitate workflow knowledge transfer between disconnected business units." },
                      { step: "03", title: "VERIFIED BUSINESS IMPACT", desc: "Pair personal employee satisfaction narratives with hard organizational metrics." },
                      { step: "04", title: "DOWNLOADABLE BLUEPRINTS", desc: "Bundle complete prompt templates and workflow recipes with every published story." },
                    ],
                    D: [
                      { step: "01", title: "CENTRAL KNOWLEDGE REPO", desc: "Maintain a unified, searchable hub of enterprise-approved prompts, agents, and guides." },
                      { step: "02", title: "INTERNAL HACKATHONS", desc: "Host recurring cross-functional hackathons to solve complex business problems with AI." },
                      { step: "03", title: "ASYNC EXPERT CHANNELS", desc: "Maintain dedicated community forums where power users answer peer questions in minutes." },
                      { step: "04", title: "GOVERNANCE SYNC", desc: "Conduct regular alignment sessions between champions, IT, and legal to evolve AI policy." },
                    ],
                  },
                };

                return map[currentHealthData.id]?.[activeInit.code] || map.open.A;
              };

              const artifactImg = getInitiativeArtifact();
              const currentDecisions = getInitiativeKeyDecisions();

              return (
                <div className="rounded-3xl bg-[#070e24] border border-slate-800/90 p-6 sm:p-8 shadow-2xl space-y-6 animate-fadeIn">
                  
                  {/* Clean Focused Header with Minimalist Initiative Switcher */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                          currentHealthData.id === "open"
                            ? "bg-pink-500/20 text-pink-300"
                            : currentHealthData.id === "proficient"
                            ? "bg-sky-500/20 text-sky-300"
                            : currentHealthData.id === "desire"
                            ? "bg-purple-500/20 text-purple-300"
                            : currentHealthData.id === "transform"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-blue-500/20 text-blue-300"
                        }`}>
                          {currentHealthData.name} · Initiative {activeInit.code}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          ({activeInitIndex + 1}/{currentHealthData.initiatives.length})
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {activeInit.label}
                      </h3>
                      <p className="text-sm text-slate-400 font-serif italic mt-0.5">
                        {activeInit.desc}
                      </p>
                    </div>

                    {/* Compact A B C D Pill Switcher */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#050b1a] border border-slate-800 self-start sm:self-center shadow-inner">
                      <span className="text-[10px] font-mono text-slate-500 uppercase px-2 font-bold hidden sm:inline-block">
                        Initiative:
                      </span>
                      {currentHealthData.initiatives.map((item) => {
                        const isSelected = openInitiative === item.code;
                        return (
                          <button
                            key={item.code}
                            onClick={() => setOpenInitiative(item.code as any)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer flex items-center justify-center ${
                              isSelected
                                ? currentHealthData.id === "open"
                                  ? "bg-pink-600 text-white shadow-md scale-105"
                                  : currentHealthData.id === "proficient"
                                  ? "bg-sky-600 text-white shadow-md scale-105"
                                  : currentHealthData.id === "desire"
                                  ? "bg-purple-600 text-white shadow-md scale-105"
                                  : currentHealthData.id === "transform"
                                  ? "bg-emerald-600 text-white shadow-md scale-105"
                                  : "bg-blue-600 text-white shadow-md scale-105"
                                : "text-slate-400 hover:text-white hover:bg-slate-850"
                            }`}
                            title={item.label}
                          >
                            {item.code}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                    
                    {/* Diagnosis Barrier vs Design Goal Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#050b1a] border border-slate-800/90 flex flex-col justify-center">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1.5">
                          DIAGNOSIS BARRIER
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                          {currentHealthData.breaking}
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 rounded-2xl bg-[#050b1a] border border-slate-800/90 flex flex-col justify-center">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1.5">
                          DESIGN GOAL
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                          {activeInit.desc}
                        </p>
                      </div>
                    </div>

                    {/* ── FULL-WIDTH HIGH-FIDELITY ARTIFACT FRAME ──────────────── */}
                    <div
                      className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#050b1a] cursor-pointer group shadow-2xl hover:border-sky-500/40 transition-all p-3 sm:p-4"
                      onClick={() =>
                        openLightbox(
                          artifactImg,
                          `${currentHealthData.name} · Recommendation ${activeInit.code} Artifact`,
                          activeInit.label,
                          activeInit.desc
                        )
                      }
                    >
                      <div className="p-2.5 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between mb-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-xs font-semibold text-slate-200">
                            {currentHealthData.name} · Recommendation {activeInit.code}: {activeInit.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-sky-400 font-mono font-semibold group-hover:text-sky-300 transition-colors">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Click to expand full screen ↗</span>
                        </div>
                      </div>
                      
                      <div className="w-full flex justify-center bg-[#02050e] rounded-xl overflow-hidden p-2 sm:p-4">
                        <img
                          src={artifactImg}
                          alt={activeInit.label}
                          className="w-full h-auto max-h-[560px] object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-300 shadow-lg"
                        />
                      </div>
                    </div>

                    {/* ── KEY DESIGN DECISIONS (BELOW SCREENSHOT & TAILORED PER INITIATIVE) */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                        <span className="text-xs font-bold uppercase text-sky-400 tracking-wider font-mono">
                          Key Design Decisions · {activeInit.label}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          4 UX Pillars
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                        {currentDecisions.map((dec) => (
                          <div key={dec.step} className="p-3.5 rounded-xl bg-[#070e24]/70 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                            <div className="flex items-center gap-2 text-sky-400 font-bold font-mono text-[11px]">
                              <span>{dec.step}</span>
                              <span>{dec.title}</span>
                            </div>
                            <p className="leading-relaxed">{dec.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

            {/* Downstream Impact Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#040e1c] border border-sky-500/40 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8 shadow-[0_0_25px_rgba(56,189,248,0.08)]">
              <p className="text-sm sm:text-base font-bold text-white leading-snug">
                This model helped identify{" "}
                <span className="text-sky-300 font-extrabold">where intervention would create the greatest downstream impact.</span>
              </p>
              <div className="shrink-0 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/60 text-xs text-sky-300 font-mono self-start md:self-auto">
                Health → priority → investment
              </div>
            </div>
        </div>
      </section>

      {/* ── CHAPTER 04: ECOSYSTEM REINFORCEMENT ─────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-slate-800/80 bg-[#000000]" id="ecosystem">
        <div className="copilot-wrap">
          <div className="max-w-3xl mb-16">
            <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-3 font-mono">
              04 / ECOSYSTEM REINFORCEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12] mb-4">
              The product experiences changed behavior. The ecosystem helped it compound.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              The ecosystem operates as a direct extension of product UX. Each product intervention feeds an organic community reinforcement loop that accelerates onboarding for the next wave.
            </p>
          </div>

          {/* 4 Explicit Ecosystem Loop Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="p-7 rounded-3xl bg-[#050b1a] border border-slate-800/90 hover:border-sky-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() =>
                openLightbox(
                  `${import.meta.env.BASE_URL}IMG/copilot-case-study/desire-landing-page.png`,
                  "First Value → Community Discovery",
                  "Seeded community content lowers discovery friction for the next cohort"
                )
              }
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase text-purple-400 block mb-2">First Value Loop</span>
                <h4 className="text-lg font-bold text-white mb-2.5">First Value → Discovery</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Seeded community starter templates make practical use cases visible before users start drafting.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-sky-400 font-medium">
                → Easier discovery for next wave
              </div>
            </div>

            <div
              className="p-7 rounded-3xl bg-[#050b1a] border border-slate-800/90 hover:border-sky-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() =>
                openLightbox(
                  `${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-prompt-first.png`,
                  "Habit Loop → Prompt-First Learning",
                  "Prompt-first modules turn passive readers into repeat active creators"
                )
              }
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase text-sky-400 block mb-2">Habit Loop</span>
                <h4 className="text-lg font-bold text-white mb-2.5">Habit → Repeat Use</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Prompt-first learning and contextual in-app nudges trigger weekly repeat habits around live deliverables.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-sky-400 font-medium">
                → +48% repeat weekly prompts
              </div>
            </div>

            <div
              className="p-7 rounded-3xl bg-[#050b1a] border border-slate-800/90 hover:border-sky-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() =>
                openLightbox(
                  `${import.meta.env.BASE_URL}IMG/copilot-case-study/proficient-agentic-framework.png`,
                  "Expert Support Loop",
                  "Community knowledge registry creates reusable organizational answers"
                )
              }
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase text-indigo-400 block mb-2">Support Loop</span>
                <h4 className="text-lg font-bold text-white mb-2.5">Support → Reusable Answers</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Instant AI answers paired with verified champion escalation turn resolved questions into shared team assets.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-sky-400 font-medium">
                → Scalable peer resolution
              </div>
            </div>

            <div
              className="p-7 rounded-3xl bg-[#050b1a] border border-slate-800/90 hover:border-sky-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() =>
                openLightbox(
                  `${import.meta.env.BASE_URL}IMG/copilot-case-study/transform-recognition.png`,
                  "Advocacy Loop",
                  "Champion recognition scales organic trust across departments"
                )
              }
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 block mb-2">Advocacy Loop</span>
                <h4 className="text-lg font-bold text-white mb-2.5">Advocacy → Playbooks</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Spotlighting certified power users turns private success into enterprise-wide prompt playbooks.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-sky-400 font-medium">
                → Self-sustaining organic growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 05: DESIGN PRINCIPLES (AUTHORED DOCTRINE) ────────── */}
      <section className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#000000]" id="principles">
        <div className="copilot-wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-2 font-mono">
                05 / CORE PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The diagnosis changed how I approached the design.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              A concise design doctrine that shifted execution from feature launches to progressive confidence building.
            </p>
          </div>

          {/* 4 Clean Editorial Principle Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principlesData.map((item, idx) => {
              const isActive = activePrinciple === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePrinciple(idx)}
                  className={`p-7 rounded-3xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-[#0a122c] border-2 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                      : "bg-[#050b1a] border border-slate-800/90 hover:border-slate-700 hover:bg-[#070e24]"
                  }`}
                >
                  <div>
                    <span className="text-3xl font-mono font-extrabold text-sky-400 block mb-3">{item.num}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHAPTER 06: ADOPTION FLYWHEEL (CAUSALITY CHAIN) ─────────── */}
      <section className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#040817]" id="flywheel">
        <div className="copilot-wrap text-center max-w-5xl mx-auto">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-3 font-mono">
            06 / THE COMPOUNDING ADOPTION FLYWHEEL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
            A self-reinforcing behavioral engine.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-12 text-left">
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-[11px] font-mono text-pink-400 uppercase font-bold block mb-1.5">01 First Win</span>
              <strong className="text-sm text-white block mb-1.5">First success creates confidence</strong>
              <p className="text-xs text-slate-400 leading-relaxed">Overcomes blank-canvas paralysis.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-[11px] font-mono text-sky-400 uppercase font-bold block mb-1.5">02 Habit</span>
              <strong className="text-sm text-white block mb-1.5">Confidence enables repeat use</strong>
              <p className="text-xs text-slate-400 leading-relaxed">Forms weekday productivity rhythm.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-[11px] font-mono text-indigo-400 uppercase font-bold block mb-1.5">03 Mastery</span>
              <strong className="text-sm text-white block mb-1.5">Repeat use creates expertise</strong>
              <p className="text-xs text-slate-400 leading-relaxed">Builds multi-turn prompt mastery.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold block mb-1.5">04 Playbooks</span>
              <strong className="text-sm text-white block mb-1.5">Expertise creates shared assets</strong>
              <p className="text-xs text-slate-400 leading-relaxed">Turns private wins into public recipes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#050b1a] border border-sky-500/40 bg-sky-950/20">
              <span className="text-[11px] font-mono text-sky-400 uppercase font-bold block mb-1.5">05 Next Cohort ↻</span>
              <strong className="text-sm text-white block mb-1.5">Assets accelerate new users</strong>
              <p className="text-xs text-slate-400 leading-relaxed">Lowers entry friction for the next wave.</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#050b1a] border border-slate-800/90 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-serif italic">
              “The goal was not to optimize isolated interventions. The goal was to create a self-reinforcing adoption system where each cohort makes adoption faster for the next.”
            </p>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 07: MEASURABLE IMPACT ───────────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-slate-800/80 bg-[#000000]" id="impact">
        <div className="copilot-wrap">
          <div className="max-w-3xl mb-16">
            <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-3 font-mono">
              07 / MEASURABLE IMPACT &amp; OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12] mb-4">
              Proven shifts in user behavior, team alignment, and product systems.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              By connecting behavioral diagnosis directly to product UX and community reinforcement, the initiative moved beyond vanity logins to durable behavioral change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 block mb-2 font-mono">01 · Behavioral Impact</span>
              <h3 className="text-lg font-bold text-white mb-4">User Level</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5"><span>•</span><span>More users reached first meaningful value in under 3 minutes</span></li>
                <li className="flex items-start gap-2.5"><span>•</span><span>More successful workflows were repeated across weekday deliverables</span></li>
                <li className="flex items-start gap-2.5"><span>•</span><span>Community participation and peer learning increased significantly</span></li>
              </ul>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2 font-mono">02 · Organizational Impact</span>
              <h3 className="text-lg font-bold text-white mb-4">Team Level</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5"><span>•</span><span>Created a shared prioritization language for Product, UX, and IT</span></li>
                <li className="flex items-start gap-2.5"><span>•</span><span>Aligned cross-functional enablement teams around highest-leverage bets</span></li>
                <li className="flex items-start gap-2.5"><span>•</span><span>Shifted executive measurement from raw logins to journey progression</span></li>
              </ul>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#050b1a] border border-slate-800/90">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2 font-mono">03 · Product System Impact</span>
              <h3 className="text-lg font-bold text-white mb-4">System Level</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5"><span>•</span><span>Created a repeatable ADOPT operating model for future AI products</span></li>
                <li className="flex items-start gap-2.5"><span>•</span><span>Connected telemetry diagnostics directly to roadmap funding decisions</span></li>
                <li className="flex items-start gap-2.5"><span>•</span><span>Linked UI, support, learning, and community into one compound system</span></li>
              </ul>
            </div>
          </div>

          {/* Unified Metric Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="p-8 rounded-3xl bg-[#050b1a] border border-sky-500/30 text-center shadow-lg">
              <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 block mb-2">
                +48%
              </span>
              <h4 className="text-base font-bold text-white mb-1.5">Repeat Behaviors</h4>
              <p className="text-xs sm:text-sm text-slate-400">Stronger contextual reinforcement after initial first success</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#050b1a] border border-purple-500/30 text-center shadow-lg">
              <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 block mb-2">
                2.4×
              </span>
              <h4 className="text-base font-bold text-white mb-1.5">Adoption Momentum</h4>
              <p className="text-xs sm:text-sm text-slate-400">Higher velocity of users advancing from trial to daily active habit</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#050b1a] border border-emerald-500/30 text-center shadow-lg">
              <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block mb-2">
                +30–35%
              </span>
              <h4 className="text-base font-bold text-white mb-1.5">Community Knowledge Sharing</h4>
              <p className="text-xs sm:text-sm text-slate-400">Increased peer learning, user prompt recipes, and workflow contributions</p>
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs text-slate-500 italic">
              *Observed across target customer cohorts participating in the combined behavioral adoption operating system.
            </span>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 08: STRATEGIC REFLECTION ─────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#000000]" id="reflection">
        <div className="copilot-wrap text-center max-w-4xl mx-auto">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase block mb-4 font-mono">
            08 / STRATEGIC REFLECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
            The lesson wasn’t that people needed more training.<br />They needed a clearer path from curiosity to confidence.
          </h2>

          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#091024] to-[#050b1a] border border-sky-500/30 shadow-2xl my-12 relative overflow-hidden space-y-8">
            <Quote className="w-12 h-12 text-sky-500/20 mx-auto" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-slate-100 leading-snug">
              “People don’t adopt AI because it is available. They adopt it when value becomes visible, achievable, and repeatable.”
            </p>
            <div className="w-20 h-0.5 bg-sky-500/40 mx-auto" />
            <p className="text-base sm:text-lg font-sans text-sky-200 max-w-2xl mx-auto leading-relaxed">
              <strong>The job of adoption design is not to persuade people to use AI.</strong> It is to make the next valuable behavior easier to discover, achieve, and repeat.
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="px-7 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-sm font-bold text-white hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Playbook</span>
              </button>
            )}
            <a
              href="#hero"
              className="px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-sm font-bold text-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FULL-SCREEN LIGHTBOX MODAL ──────────────────────────────── */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 lg:p-10 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col rounded-2xl bg-[#090e1c] border border-slate-800 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-800 bg-[#070b16] flex items-center justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">{lightbox.title}</h4>
                <p className="text-xs text-slate-400">{lightbox.subtitle}</p>
                {lightbox.annotation && (
                  <span className="text-[10px] font-mono text-pink-400 block mt-0.5">
                    {lightbox.annotation}
                  </span>
                )}
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close full screen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#000000]">
              <img
                src={lightbox.imgUrl}
                alt={lightbox.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
