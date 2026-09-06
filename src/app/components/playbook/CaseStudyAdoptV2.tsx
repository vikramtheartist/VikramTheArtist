import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Eye,
  Heart,
  Target,
  Zap,
  Award,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Maximize2,
  X,
  FileText,
  Users,
  Compass,
  MessageSquare,
  BarChart3,
  Bot,
  UserCheck,
  Quote,
  Lock,
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
  Info,
  ExternalLink,
  Flame,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import "../../../styles/adopt-landing.css";
import "@/styles/copilot-case-study.css";

const PLAYBOOK_PASSWORD = "designtoimproveworld";

interface CaseStudyAdoptV2Props {
  onBack?: () => void;
  story?: "adoption" | "engage";
  mode?: "dark" | "light";
  initialMode?: "dark" | "light";
  onToggleTheme?: () => void;
}

export function CaseStudyAdoptV2({
  onBack,
  story = "engage",
  mode: controlledMode,
  initialMode = "light",
  onToggleTheme,
}: CaseStudyAdoptV2Props) {
  const isEngage = story === "engage";

  // Theme State: Controlled or Internal (defaults to light mode as requested)
  const [internalMode, setInternalMode] = useState<"dark" | "light">(controlledMode || initialMode);
  const currentMode = controlledMode !== undefined ? controlledMode : internalMode;
  const isDark = currentMode === "dark";

  const handleToggleTheme = () => {
    if (onToggleTheme) {
      onToggleTheme();
    } else {
      setInternalMode((m) => (m === "dark" ? "light" : "dark"));
    }
  };

  // Password Protection State - required on every visit
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("copilot_case_study_unlocked");
    }
  }, []);

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PLAYBOOK_PASSWORD) {
      setIsUnlocked(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Please try again.");
    }
  };

  // Navigation & Scroll State
  const [activeChapter, setActiveChapter] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Video State & Controls
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [videoStart, setVideoStart] = useState<number>(6); // Default 0:06
  const [activeVideoMoment, setActiveVideoMoment] = useState<number>(0);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll Progress & Active Chapter Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Dynamic menu active chapter detection based on scroll position
      const sectionToTabMap: Record<string, string> = {
        hero: "hero",
        solution: "solution",
        evidence: "solution",
        strategy: "challenge",
        challenge: "challenge",
        findings: "challenge",
        diagnosis: "diagnosis",
        decision: "diagnosis",
        response: "diagnosis",
        engine: "diagnosis",
        impact: "impact",
        leadership: "impact",
        closing: "impact",
      };
      const chapters = [
        "hero",
        "solution",
        "strategy",
        "challenge",
        "findings",
        "diagnosis",
        "decision",
        "engine",
        "impact",
        "leadership",
        "closing",
      ];
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveChapter(sectionToTabMap[chapters[i]] || chapters[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    const timer = setTimeout(handleScroll, 120);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, [isUnlocked]);

  // Helper for local video playback
  const playVideo = (startSeconds: number = 6) => {
    setVideoStart(startSeconds);
    setVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = startSeconds;
      videoRef.current.play().catch(() => {});
    }
  };

  const seekToMoment = (index: number, timestampSeconds: number) => {
    setActiveVideoMoment(index);
    setVideoStart(timestampSeconds);
    setVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = timestampSeconds;
      videoRef.current.play().catch(() => {});
    }
    const solutionEl = document.getElementById("solution");
    if (solutionEl) {
      const rect = solutionEl.getBoundingClientRect();
      if (rect.top < -50 || rect.top > 300) {
        solutionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Video Chapters Data (5 Product Journey Moments)
  const videoChapters = [
    {
      index: 0,
      timestamp: "0:16",
      seconds: 16,
      title: "Launch",
      desc: "Create a new Copilot Adoption Community—or convert an existing one—in a single click."
    },
    {
      index: 1,
      timestamp: "0:35",
      seconds: 35,
      title: "Prepare",
      desc: "Use a guided checklist to pin resources, organize FAQs and establish the community foundation."
    },
    {
      index: 2,
      timestamp: "0:48",
      seconds: 48,
      title: "Activate",
      desc: "Reach licensed users, early adopters and teams already exploring AI-powered work."
    },
    {
      index: 3,
      timestamp: "0:57",
      seconds: 57,
      title: "Sustain",
      desc: "Publish curated content, schedule relevant posts and connect members with trusted experts."
    },
    {
      index: 4,
      timestamp: "1:37",
      seconds: 97,
      title: "Measure",
      desc: "Track engagement, identify content patterns and understand community health."
    }
  ];

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

  // Section 08: Health Model Interactive Selection (ADOPT sequence) - Default AWARE (P0 Break)
  const [healthSelectedStage, setHealthSelectedStage] = useState<
    "aware" | "desire" | "open" | "proficient" | "transform"
  >("aware");

  // Section 08 Main Two Tabs: 1) Recommended Initiatives 2) Design Execution
  const [healthMainTab, setHealthMainTab] = useState<"initiatives" | "execution">("initiatives");

  // Section 08 Tab 2 Design Execution: Sub-Initiative Selector (A, B, C, D)
  const [openInitiative, setOpenInitiative] = useState<"A" | "B" | "C" | "D">("A");

  // Stage Data for Health Model (Standardized in ADOPT sequence)
  const engageHealthStagesData = {
    aware: {
      id: "aware",
      name: "Aware",
      adoptTag: "AWARE",
      behavioralSub: "Discovery & Entry",
      score: 18,
      status: "Critical (P0)",
      statusSubtitle: "Discovery Barrier",
      statusColor: isDark ? "text-rose-400" : "text-rose-600",
      statusBadge: isDark ? "bg-rose-950/80 text-rose-300 border-rose-500/40" : "bg-rose-50 text-rose-700 border-rose-200",
      barColor: "#f43f5e",
      isP0Break: true,
      stageIcon: Eye,
      iconBg: isDark ? "bg-rose-950/80 border-rose-500/30" : "bg-rose-50 border-rose-200",
      iconColor: isDark ? "text-rose-400" : "text-rose-600",
      pillClass: isDark ? "bg-[#25091a] border border-rose-900/60 text-rose-300" : "bg-rose-50 border border-rose-200 text-rose-700",
      oneLiner: "Employees could not choose a community they did not know existed.",
      priorityLabel: "Priority 01 · P0 Break",
      priorityBadge: isDark ? "border border-rose-500/40 bg-rose-950/60 text-rose-300" : "border border-rose-200 bg-rose-50 text-rose-700",
      priorityOrder: "Priority 01 · Primary Break · Invest First",
      breaking: "Discovery depended on isolated communications and accidental exposure. Relevant Copilot knowledge existed, but the path to it was fragmented across organizational surfaces.",
      whyItMatters: [
        "Discovery must happen in the natural flow of work, not as a disconnected destination",
        "Coordinated admin and in-product entry points connect licensed users from day one",
        "Solving awareness unlocks all downstream community participation and habit loops",
      ],
      downstreamDependency: "Critical entry gatekeeper: without discovering the community, no downstream value or habit can form.",
      decision: "Priority 01 · Primary break · Redesign discovery system",
      decisionBadge: isDark ? "bg-rose-950/60 border-rose-700/60 text-rose-300" : "bg-rose-50 border-rose-300 text-rose-700",
      initiatives: [
        { code: "A", icon: Compass, label: "Admin Center launch banner", desc: "Place high-visibility launch cues inside Viva Engage, Teams, and Microsoft 365 admin centers." },
        { code: "B", icon: Sparkles, label: "One-click community launch", desc: "Enable administrators to create or convert a verified Copilot Adoption Community in a single click." },
        { code: "C", icon: FileText, label: "Engage & Teams discovery cards", desc: "Surface contextual Copilot community cards directly inside first-run and Discover feeds." },
        { code: "D", icon: Users, label: "Suggested Members audience routing", desc: "Automate audience targeting to proactively invite licensed Copilot users and active team champions." },
      ],
    },
    desire: {
      id: "desire",
      name: "Desire",
      adoptTag: "DESIRE",
      behavioralSub: "Value Understanding",
      score: 26,
      status: "Weak (P1)",
      statusSubtitle: "Relevance Gap",
      statusColor: isDark ? "text-amber-400" : "text-amber-600",
      statusBadge: isDark ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-amber-50 text-amber-700 border-amber-200",
      barColor: "#f59e0b",
      isP0Break: false,
      stageIcon: Heart,
      iconBg: isDark ? "bg-amber-950/80 border-amber-500/30" : "bg-amber-50 border-amber-200",
      iconColor: isDark ? "text-amber-400" : "text-amber-600",
      pillClass: isDark ? "bg-[#251806] border border-amber-900/60 text-amber-300" : "bg-amber-50 border border-amber-200 text-amber-700",
      oneLiner: "Even when encountered, personal and role-specific value was not clear.",
      priorityLabel: "Priority 02 · P1 Friction",
      priorityBadge: isDark ? "border border-amber-500/30 bg-amber-950/40 text-amber-300" : "border border-amber-200 bg-amber-50 text-amber-700",
      priorityOrder: "Priority 02 · Secondary Barrier · Communicate Value",
      breaking: "The experience explained what the community was, but not quickly enough how it could help someone perform a real task, learn a relevant scenario, or solve a daily problem.",
      whyItMatters: [
        "Moves the value proposition before the commitment to join rather than after",
        "Role-based Copilot scenarios make AI practice tangible to everyday knowledge workers",
        "Peer proof converts passive curiosity into intentional community participation",
      ],
      downstreamDependency: "Bridges awareness into qualified, motivated visits and joining intent.",
      decision: "Priority 02 · Secondary barrier · Front-load value",
      decisionBadge: isDark ? "bg-amber-950/60 border-amber-700/60 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-700",
      initiatives: [
        { code: "A", icon: Heart, label: "Benefit-led community preview", desc: "Explain the tangible benefits, peer exchanges, and practical time savings before asking people to join." },
        { code: "B", icon: UserCheck, label: "Role-based Copilot scenarios", desc: "Provide relevant scenario previews tailored to functional workflows (HR, Sales, Finance, Engineering)." },
        { code: "C", icon: Quote, label: "Visible expert presence & peer proof", desc: "Highlight recognized internal champions and authentic success stories to build immediate trust." },
        { code: "D", icon: Sparkles, label: "Preview of Suggested Content", desc: "Display curated prompt recipes and weekly discussion topics so prospective members see immediate value." },
      ],
    },
    open: {
      id: "open",
      name: "Open",
      adoptTag: "OPEN",
      behavioralSub: "First-Run Experience",
      score: 62,
      status: "Healthy",
      statusSubtitle: "Supporting Activation",
      statusColor: isDark ? "text-sky-400" : "text-sky-600",
      statusBadge: isDark ? "bg-blue-950/80 text-blue-300 border-blue-500/40" : "bg-sky-50 text-sky-700 border-sky-200",
      barColor: "#0284c7",
      isP0Break: false,
      stageIcon: Target,
      iconBg: isDark ? "bg-blue-950/80 border-blue-500/30" : "bg-sky-50 border-sky-200",
      iconColor: isDark ? "text-blue-400" : "text-sky-600",
      pillClass: isDark ? "bg-[#0c1630] border border-blue-900/60 text-blue-300" : "bg-sky-50 border border-sky-200 text-sky-700",
      oneLiner: "Once intent existed, activation needed to feel effortless.",
      priorityLabel: "Priority 03 · Supporting",
      priorityBadge: isDark ? "border border-blue-500/30 bg-blue-950/40 text-blue-300" : "border border-sky-200 bg-sky-50 text-sky-700",
      priorityOrder: "Priority 03 · Activation Support · Healthy Baseline",
      breaking: "These experiences reduced friction after discovery, but they were not the primary problem the roadmap needed to solve first.",
      whyItMatters: [
        "Welcome checklist and seeded content provide immediate structure after joining",
        "Reduces blank-canvas friction once intent has successfully brought members into the space",
        "Supports healthy conversion without requiring premature redesign before discovery is fixed",
      ],
      downstreamDependency: "Provides the landing infrastructure that turns discovery intent into first participation.",
      decision: "Priority 03 · Support · Maintain activation flow",
      decisionBadge: isDark ? "bg-slate-900 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-700",
      initiatives: [
        { code: "A", icon: FileText, label: "Admin first-run checklist", desc: "Guide admins to pin resources, add members, review suggested content, and publish the first post." },
        { code: "B", icon: Sparkles, label: "Weekly suggested content", desc: "Microsoft-curated prompt recipes, weekly discussion topics, and suggested content ready to publish with one click." },
        { code: "C", icon: Compass, label: "Member guided tours · Future scope", desc: "Explain top questions, composer templates, and what changed since the member's last visit." },
        { code: "D", icon: Bot, label: "Contextual onboarding · Future scope", desc: "Explore AI onboarding bots, SSO pre-configuration, in-product help, and ambient assistance." },
      ],
    },
    proficient: {
      id: "proficient",
      name: "Proficient",
      adoptTag: "PROFICIENT",
      behavioralSub: "Repeat Engagement",
      score: 71,
      status: "Healthy among active participants",
      statusSubtitle: "Habit Engine",
      statusColor: isDark ? "text-emerald-400" : "text-emerald-600",
      statusBadge: isDark ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : "bg-emerald-50 text-emerald-700 border-emerald-200",
      barColor: "#10b981",
      isP0Break: false,
      stageIcon: Zap,
      iconBg: isDark ? "bg-emerald-950/80 border-emerald-500/30" : "bg-emerald-50 border-emerald-200",
      iconColor: isDark ? "text-emerald-400" : "text-emerald-600",
      pillClass: isDark ? "bg-[#092215] border border-emerald-900/60 text-emerald-300" : "bg-emerald-50 border border-emerald-200 text-emerald-700",
      oneLiner: "Participants established repeat practice through weekly rituals.",
      priorityLabel: "Priority 04 · Downstream",
      priorityBadge: isDark ? "border border-emerald-500/30 bg-emerald-950/40 text-emerald-300" : "border border-emerald-200 bg-emerald-50 text-emerald-700",
      priorityOrder: "Priority 04 · Habit Retention · Healthy among participants",
      breaking: "Members who found the space regularly engaged with prompt-first threads, analytics, and peer troubleshooting.",
      whyItMatters: [
        "Prompt-first threads turn reading into immediate Copilot practice",
        "Analytics give admins reach and response signals to sustain healthy community cadence",
        "Users recorded +10% more Copilot active days in weeks they engaged with CAC content",
      ],
      downstreamDependency: "Creates practitioner expertise and reusable evidence that powers organizational scale.",
      decision: "Priority 04 · Reinforce · Sustained practice",
      decisionBadge: isDark ? "bg-emerald-950/60 border-emerald-700/60 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-700",
      initiatives: [
        { code: "A", icon: MessageSquare, label: "Prompt-first threads", desc: "Publish a recurring Prompt of the Week with a preloaded Try in Copilot action that turns reading into practice." },
        { code: "B", icon: BarChart3, label: "Usage analytics", desc: "Give admins reach, engagement, response, and post-level signals to understand what sustains participation." },
        { code: "C", icon: Bot, label: "Agentic Framework", desc: "Use a Copilot-powered agentic framework to recommend role-relevant content ideas and help admins publish faster." },
        { code: "D", icon: GraduationCap, label: "Continuous learning & coaching · Future scope", desc: "Explore interactive skill builders, prompt labs, feedback prompts, and personalized learning pathways." },
      ],
    },
    transform: {
      id: "transform",
      name: "Transform",
      adoptTag: "TRANSFORM",
      behavioralSub: "Advocacy & Multipliers",
      score: 68,
      status: "Emerging organizational value",
      statusSubtitle: "Advocacy & Scale",
      statusColor: isDark ? "text-teal-400" : "text-teal-600",
      statusBadge: isDark ? "bg-teal-950/80 text-teal-300 border-teal-500/40" : "bg-teal-50 text-teal-700 border-teal-200",
      barColor: "#14b8a6",
      isP0Break: false,
      stageIcon: Award,
      iconBg: isDark ? "bg-teal-950/80 border-teal-500/30" : "bg-teal-50 border-teal-200",
      iconColor: isDark ? "text-teal-400" : "text-teal-600",
      pillClass: isDark ? "bg-[#08201d] border border-teal-900/60 text-teal-300" : "bg-teal-50 border border-teal-200 text-teal-700",
      oneLiner: "Top contributors shared workflows that compounded capability.",
      priorityLabel: "Priority 05 · Multipliers",
      priorityBadge: isDark ? "border border-teal-500/30 bg-teal-950/40 text-teal-300" : "border border-teal-200 bg-teal-50 text-teal-700",
      priorityOrder: "Priority 05 · Advocacy & Multipliers · Emerging Value",
      breaking: "Experts answered questions and shared workflows, creating reusable knowledge across departments.",
      whyItMatters: [
        "Recognized experts make participation feel credible, accessible, and safe",
        "Curated prompt playbooks turn local team wins into enterprise assets",
        "Completes the loop by improving discovery and relevance for new cohorts",
      ],
      downstreamDependency: "Completes the loop: champion knowledge improves discovery and relevance for new members.",
      decision: "Priority 05 · Scale · Collective intelligence",
      decisionBadge: isDark ? "bg-teal-950/60 border-teal-700/60 text-teal-300" : "bg-teal-50 border-teal-300 text-teal-700",
      initiatives: [
        { code: "A", icon: Award, label: "Recognition & rewards", desc: "Use behavior-based badges, earned profile recognition, and Top Members to make helpful contributors visible." },
        { code: "B", icon: UserCheck, label: "Champion programs · Future scope", desc: "Formalize pathways for trusted contributors to mentor members and shape community practice." },
        { code: "C", icon: Share2, label: "Member-led stories · Future scope", desc: "Explore user-led success stories, idea submission, spotlights, and community-driven content." },
        { code: "D", icon: BarChart2, label: "Copilot impact reports · Future scope", desc: "Generate reports that connect recognized community contributions to reusable knowledge and outcomes." },
      ],
    },
  };

  const currentHealthData = engageHealthStagesData[healthSelectedStage];

  if (!isUnlocked) {
    return (
      <div
        className={`min-h-screen ${isDark ? "bg-[#000213] text-white" : "adopt-page-wrapper text-[#0b0f19]"} flex flex-col items-center justify-center p-4 sm:p-6 relative font-sans transition-colors duration-300`}
        style={{
          backgroundColor: isDark ? "#000213" : undefined,
        }}
      >
        {/* Dynamic Animated Cosmic Gradient Background */}
        {isDark && (
          <div className="cosmic-gradient-bg hide-in-light fade-with-theme">
            <div className="cosmic-gradient-layer cosmic-grad-1" />
            <div className="cosmic-gradient-layer cosmic-grad-2" />
            <div className="cosmic-gradient-layer cosmic-grad-3" />
          </div>
        )}

        {/* Top Controls: Back and Theme Toggle */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between max-w-[1440px] mx-auto">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors shadow-sm ${
                isDark
                  ? "text-slate-300 hover:text-white bg-white/5 border border-white/12 hover:bg-white/10"
                  : "text-slate-700 hover:text-slate-900 bg-white/90 border border-slate-200 hover:bg-white"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </button>
          ) : <div />}

          <button
            onClick={handleToggleTheme}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isDark
                ? "bg-white/10 border-white/15 text-yellow-300 hover:bg-white/20"
                : "bg-white/90 border-slate-300 text-slate-700 hover:bg-white shadow-sm"
            }`}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="relative z-10 w-full max-w-[460px] mx-auto mt-12 sm:mt-0">
          <form
            onSubmit={handleUnlockSubmit}
            className={`w-full rounded-[28px] border p-7 sm:p-9 text-left backdrop-blur-2xl shadow-2xl transition-all ${
              isDark
                ? "bg-[#0b101e]/90 border-white/15 text-white"
                : "bg-white/95 border-slate-200/90 text-[#0b0f19]"
            }`}
            style={{
              boxShadow: isDark
                ? "0 24px 70px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)"
                : "0 20px 60px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)",
            }}
          >
            <div className={`flex items-center justify-center w-12 h-12 rounded-2xl mb-5 shadow-inner ${
              isDark
                ? "bg-indigo-500/15 border border-indigo-500/30 text-indigo-400"
                : "bg-indigo-50 border border-indigo-200 text-indigo-600"
            }`}>
              <Lock className="w-5 h-5 stroke-[2.2]" />
            </div>

            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-extrabold tracking-wider uppercase mb-3 font-sans ${
              isDark
                ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
            }`}>
              <span className="text-[11px] leading-none text-[#6366f1]">✦</span>
              <span>PROTECTED CASE STUDY</span>
            </div>

            <h2
              className={`text-2xl sm:text-[26px] font-bold tracking-tight leading-snug mb-2 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Scale Copilot Adoption through Engage
            </h2>
            <p className={`text-sm leading-relaxed font-normal mb-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              Access to this principal product design leadership case study is protected. Please enter the access password to continue.
            </p>

            <div className="space-y-3">
              <div className="relative">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (passwordError) setPasswordError("");
                  }}
                  placeholder="Enter password"
                  autoFocus
                  className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all ${
                    isDark
                      ? "text-white bg-white/5 border border-white/20 focus:border-indigo-400 focus:bg-white/8 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-500"
                      : "text-slate-900 bg-slate-50 border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                  }`}
                />
              </div>

              {passwordError && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{passwordError}</span>
                </div>
              )}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className={`w-full sm:w-auto px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer text-center ${
                    isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="adopt-hero-btn-primary group w-full sm:w-auto justify-center sm:justify-between px-6 py-3 cursor-pointer"
              >
                <span>Unlock Case Study</span>
                <span className="adopt-btn-circle-arrow">
                  <ArrowRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`copilot-case-study adopt-page-wrapper ${isDark ? "dark" : ""} min-h-screen selection:bg-indigo-500/30 selection:text-white font-sans antialiased transition-colors duration-300`}
      style={{
        backgroundColor: isDark ? "#000000" : undefined,
        color: isDark ? "#f8fafc" : "#0b0f19",
      }}
    >
      
      {/* ── STICKY MINIMALIST CHAPTER NAVIGATION ────────────────────── */}
      <header
        className={`sticky top-0 z-50 relative transition-colors duration-300 ${
          isDark
            ? "backdrop-blur-md bg-[#000000]/90 border-b border-slate-800/80"
            : "backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-xs"
        }`}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border cursor-pointer transition-colors shadow-2xs ${
                  isDark
                    ? "text-slate-200 hover:text-white bg-[#131c2e] border-slate-700 hover:bg-[#1a2740]"
                    : "text-slate-700 hover:text-slate-900 bg-slate-100 border-slate-300 hover:bg-slate-200"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Playbook</span>
              </button>
            )}
            <span className={`text-xs font-bold tracking-tight hidden sm:inline-block ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Scale Copilot Adoption through Engage
            </span>
          </div>

          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-1 sm:gap-2 overflow-x-hidden py-1">
              {[
                { id: "hero", label: "Overview" },
                { id: "solution", label: "Product Walkthrough" },
                { id: "challenge", label: "The Problem" },
                { id: "diagnosis", label: "ADOPT Diagnosis" },
                { id: "impact", label: "Impact & Leadership" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveChapter(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeChapter === item.id
                      ? isDark
                        ? "bg-[#0d223f] text-sky-300 border border-sky-400 shadow-sm font-semibold"
                        : "bg-[#eef2ff] text-[#4338ca] border border-[#c7d2fe] shadow-xs font-semibold"
                      : isDark
                      ? "bg-[#0b1325] text-slate-300 hover:text-white hover:bg-[#131f38] border border-slate-800"
                      : "bg-[#f8fafc] text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Theme Toggle Sun / Moon Button */}
            <button
              onClick={handleToggleTheme}
              className={`p-2 rounded-full border transition-all cursor-pointer shrink-0 ml-1 ${
                isDark
                  ? "bg-white/10 border-white/15 text-yellow-300 hover:bg-white/20"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 shadow-2xs"
              }`}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar at the bottom of the sticky menu */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] z-50 pointer-events-none ${
            isDark ? "bg-slate-800/80" : "bg-slate-200/90"
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400 transition-all duration-100 ease-out"
            style={{
              width: `${Math.min(100, Math.max(0, scrollProgress))}%`,
              boxShadow: isDark
                ? "0 0 10px rgba(56, 189, 248, 0.8), 0 0 18px rgba(99, 102, 241, 0.5)"
                : "0 0 8px rgba(99, 102, 241, 0.6)",
            }}
          />
        </div>
      </header>

      {/* ── 01 — HERO & IMPACT SECTION ────────────────────────────────── */}
      <section
        id="hero"
        className={`relative border-b overflow-hidden bg-no-repeat bg-right transition-colors duration-300 ${
          isDark ? "border-slate-800/80" : "border-slate-200/80"
        }`}
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}IMG/copilot-case-study/${isDark ? "Copilot%20Hero.png" : "Copilot%20Hero_Light.png"})`,
          backgroundColor: isDark ? "#000000" : "transparent",
          backgroundSize: "auto 120%",
          backgroundPosition: "right center",
        }}
      >
        <div className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-r from-black via-black/90 lg:via-black/70 to-transparent"
            : "bg-gradient-to-r from-[#f3f8fe] via-[#f3f8fe]/95 lg:via-[#f3f8fe]/80 to-transparent/30"
        }`} />

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
          <div className="max-w-3xl">
            {/* Eyebrow Pill */}
            <div className="mb-5">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9] shadow-2xs"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>MICROSOFT</span>
                <span className={isDark ? "text-slate-500" : "text-purple-300"}>·</span>
                <span>VIVA ENGAGE</span>
                <span className={isDark ? "text-slate-500" : "text-purple-300"}>·</span>
                <span>COPILOT</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 max-w-3xl">
              <span
                className="block text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7]"
                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
              >
                Scale Copilot Adoption
              </span>
              <span
                className={`block text-2xl sm:text-4xl md:text-5xl lg:text-[42px] font-normal tracking-tight leading-[1.25] mt-2 font-['Inter',sans-serif] ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}
              >
                through Engage
              </span>
            </h1>

            {/* Problem Statement */}
            <p className={`text-lg sm:text-xl font-normal leading-snug mb-3 max-w-2xl font-['Inter',sans-serif] ${
              isDark ? "text-white" : "text-[#0b0f19] font-medium"
            }`}>
              Copilot interest was growing. Confident, everyday use was not.
            </p>

            {/* Solution Statement */}
            <p className={`text-base leading-relaxed mb-4 max-w-2xl font-normal ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              We created Copilot Adoption Community—a verified Copilot community and ready-to-launch Viva Engage experience that helps organizations turn curiosity into sustained Copilot practice.
            </p>

            {/* Leadership Statement */}
            <p className={`text-sm leading-relaxed mb-8 max-w-2xl font-normal border-l-2 pl-3.5 ${
              isDark
                ? "text-slate-400 border-sky-500/50"
                : "text-slate-600 border-[#4f46e5]/60"
            }`}>
              I led the behavioral product strategy and end-to-end experience, using the ADOPT Playbook I created to diagnose where participation was breaking.
            </p>

            {/* Primary Impact Highlight & Metadata Labels */}
            <div className="space-y-3.5 max-w-3xl">
              <div className={`p-4 sm:p-5 rounded-[24px] border shadow-sm backdrop-blur-xl flex items-center justify-between gap-3 ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-white"
                  : "bg-white/90 border-slate-200 text-[#0b0f19]"
              }`}>
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold shrink-0 shadow-2xs ${
                    isDark
                      ? "bg-sky-950/70 border-sky-500/30 text-sky-400"
                      : "bg-[#eef2ff] border-[#c7d2fe] text-[#4338ca]"
                  }`}>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                      isDark ? "text-sky-400" : "text-[#4338ca]"
                    }`}>
                      PRIMARY IMPACT
                    </span>
                    <span className={`text-xl sm:text-2xl font-black tracking-tight ${
                      isDark ? "text-white" : "text-[#0b0f19]"
                    }`}>
                      300K → 1M WEEKLY ACTIVE USERS
                    </span>
                  </div>
                </div>
              </div>

              {/* Metadata Labels */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                {["Lead Product Designer", "Microsoft Viva Engage", "Copilot Adoption", "Behavioral Strategy"].map((tag, idx) => (
                  <div
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-full border font-medium ${
                      isDark
                        ? "bg-[#0b101e]/85 border-white/10 text-white"
                        : "bg-white/90 border-slate-200 text-slate-700 shadow-2xs"
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02 & 03 — PRODUCT SOLUTION, WALKTHROUGH & EVIDENCE ────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="solution">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Solution Intro */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>THE SOLUTION</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              One click to launch. One system to sustain adoption.
            </h2>
            <p className={`text-base font-normal leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              Copilot Adoption Community is a verified Copilot community and ready-to-launch Viva Engage experience where organizations can share resources, answer questions, host learning moments and help employees build Copilot skills together.
            </p>
          </div>

          {/* 16:9 Video Walkthrough Poster & Native Player */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className={`relative rounded-2xl overflow-hidden border shadow-xl group ${
              isDark
                ? "bg-[#030712] border-slate-800 shadow-[0_0_40px_rgba(56,189,248,0.12)]"
                : "bg-white border-slate-200 shadow-xl"
            }`}>
              
              {/* 1. Interactive Video Player */}
              {videoPlaying ? (
                <video
                  ref={videoRef}
                  src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/Scale%20Copilot%20Adoption.mp4`}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-auto aspect-video object-cover"
                />
              ) : (
                /* 2. Custom Video Poster Frame */
                <div className="relative w-full h-auto aspect-video">
                  <img
                    src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/thumbnail-035.png`}
                    alt="Product Walkthrough Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-[#000000]/40 transition-colors duration-300 group-hover:bg-[#000000]/25" />

                  {/* Centered Play Trigger Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => playVideo(videoStart)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-200 cursor-pointer group/btn"
                      aria-label="Play product walkthrough video"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                    </button>
                  </div>

                </div>
              )}
              
              {/* Video Chapter Rail */}
              <div className={`p-3 sm:p-3.5 border-t ${
                isDark ? "bg-[#060b18]/50 border-slate-800" : "bg-slate-50/90 border-slate-200"
              }`}>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full">
                  {videoChapters.map((ch) => {
                    const isSelected = activeVideoMoment === ch.index;
                    return (
                      <button
                        key={ch.index}
                        onClick={() => seekToMoment(ch.index, ch.seconds)}
                        className={`text-left px-3 py-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 min-h-[44px] ${
                          isSelected
                            ? isDark
                              ? "bg-[#0c2448] border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                              : "bg-[#eef2ff] border-[#4338ca] shadow-xs text-[#4338ca]"
                            : isDark
                            ? "bg-[#0a1224] border-slate-700 hover:border-slate-500 hover:bg-[#121f3d]"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700"
                        }`}
                      >
                        <span className={`text-xs font-bold font-mono ${
                          isSelected
                            ? isDark ? "text-sky-300" : "text-[#4338ca]"
                            : isDark ? "text-slate-300" : "text-slate-700"
                        }`}>
                          {`0${ch.index + 1} ${ch.title}`}
                        </span>
                        <span className={`text-[10px] font-mono ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                          {ch.timestamp}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Compact Evidence Card */}
          <div className={`mt-8 pt-8 border-t ${isDark ? "border-slate-800/80" : "border-slate-200/80"}`}>
            <div
              className="project-card p-6 sm:p-8 lg:p-9 rounded-[32px] sm:rounded-[40px] overflow-hidden transition-all duration-300 mb-4"
              style={{
                background: isDark ? "rgba(0,0,0,0.45)" : "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(14px) saturate(1.8) brightness(1.06)",
                WebkitBackdropFilter: "blur(14px) saturate(1.8) brightness(1.06)",
                boxShadow: isDark
                  ? [
                      "inset 0 0 0 1px rgba(255,255,255,0.16)",
                      "0 8px 32px rgba(0,0,0,0.40)",
                      "inset 0 1.5px 1px rgba(255,255,255,0.52)",
                      "inset 0 -2px 5px rgba(0,0,0,0.28)",
                    ].join(", ")
                  : [
                      "inset 0 0 0 1px rgba(255,255,255,0.9)",
                      "0 10px 30px -5px rgba(15, 23, 42, 0.08)",
                      "0 20px 40px -15px rgba(79, 70, 229, 0.06)",
                    ].join(", "),
                border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(226, 232, 240, 0.9)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Primary Metric Highlight (+30%) */}
                <div className={`lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-8 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}>
                  <span className="text-5xl sm:text-6xl lg:text-[64px] font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-400 tracking-tight leading-none mb-2 font-['Inter',sans-serif]">
                    +30%
                  </span>
                  <span className={`text-base sm:text-lg font-bold mb-1 font-['Inter',sans-serif] ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}>
                    More active Copilot days
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    Community participants vs non-participants over 12 weeks.
                  </p>
                </div>

                {/* Description & Scale Pairing */}
                <div className="lg:col-span-7 space-y-4">
                  <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}>
                    Employees who interacted with a Copilot Adoption Community recorded 30% more active days in Microsoft 365 Copilot than non-CAC users in the same network.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div
                      className={`p-4 sm:p-5 rounded-[22px] transition-all border ${
                        isDark
                          ? "bg-white/[0.03] border-white/12 text-white"
                          : "bg-slate-50/80 border-slate-200 text-[#0b0f19] shadow-2xs"
                      }`}
                    >
                      <span className={`text-[10.5px] font-['Inter',sans-serif] uppercase font-bold tracking-wider block mb-1 ${
                        isDark ? "text-sky-400" : "text-[#4338ca]"
                      }`}>
                        Scale of the community
                      </span>
                      <span className={`text-lg sm:text-xl font-bold font-['Inter',sans-serif] block mb-0.5 ${
                        isDark ? "text-white" : "text-[#0b0f19]"
                      }`}>
                        300K → 1M WAU
                      </span>
                      <span className={`text-xs font-normal ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        Enterprise reach achieved
                      </span>
                    </div>
                    <div
                      className={`p-4 sm:p-5 rounded-[22px] transition-all border ${
                        isDark
                          ? "bg-white/[0.03] border-white/12 text-white"
                          : "bg-slate-50/80 border-slate-200 text-[#0b0f19] shadow-2xs"
                      }`}
                    >
                      <span className={`text-[10.5px] font-['Inter',sans-serif] uppercase font-bold tracking-wider block mb-1 ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}>
                        Behavior associated with participation
                      </span>
                      <span className={`text-lg sm:text-xl font-bold font-['Inter',sans-serif] block mb-0.5 ${
                        isDark ? "text-white" : "text-[#0b0f19]"
                      }`}>
                        +30% active days
                      </span>
                      <span className={`text-xs font-normal ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        Statistically significant lift
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Collapsible Methodology Disclosure */}
            <div className="flex flex-col items-start">
              <button
                onClick={() => setIsMethodologyOpen(!isMethodologyOpen)}
                className={`text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                  isDark ? "text-slate-400 hover:text-sky-400" : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>How this was measured</span>
                {isMethodologyOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {isMethodologyOpen && (
                <div className={`mt-2 p-3.5 rounded-xl border text-xs leading-relaxed max-w-3xl animate-fadeIn ${
                  isDark
                    ? "bg-[#040916]/50 border-slate-800 text-slate-400"
                    : "bg-white/95 border-slate-200 text-slate-600 shadow-sm"
                }`}>
                  <p>
                    <strong>Source:</strong> Microsoft analysis, June 2024–July 2025. Copilot Adoption Community participants were compared with Microsoft 365 Copilot-enabled non-CAC users in the same network. Active days were measured over a 12-week period, and the observed difference was statistically significant.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── 05 — BEHIND-THE-PRODUCT TRANSITION ────────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b relative transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="strategy">
        <div className="copilot-wrap text-center max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="mb-4">
            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
              isDark
                ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
            }`}>
              <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
              <span>FROM VISIBILITY TO SCALABLE ADOPTION</span>
            </div>
          </div>

          <h2
            className={`text-xl sm:text-[32px] lg:text-[42px] font-bold tracking-tight leading-[1.14] mb-5 ${
              isDark ? "text-white" : "text-[#0b0f19]"
            }`}
            style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
          >
            The product is visible.<br />
            The adoption model made it scalable.
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-2xl ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}>
            We connected discovery, relevance and activation into one adoption journey. The walkthrough shows what we built; the rest of this case study explains the behavioral diagnosis behind it.
          </p>

          <a
            href="#challenge"
            className={`px-6 py-3 min-h-[44px] rounded-full border text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${
              isDark
                ? "bg-slate-900 hover:bg-slate-800 border-slate-700 text-white"
                : "bg-white hover:bg-slate-50 border-slate-300 text-slate-800 hover:border-slate-400"
            }`}
          >
            <span>Explore the strategy</span>
            <ChevronDown className="w-4 h-4 text-[#4338ca]" />
          </a>

        </div>
      </section>

      {/* ── 06 — PRODUCT CONTEXT COMPARISON ───────────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="challenge">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title, Context, and Insight */}
            <div className="lg:col-span-5 space-y-4">
              <div className="mb-2">
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                  isDark
                    ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                    : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
                }`}>
                  <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                  <span>CONTEXT &amp; PROBLEM</span>
                </div>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}
                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
              >
                The community worked—once people found it.
              </h2>
              <p className={`text-sm sm:text-base font-normal leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Employees who reached Copilot Adoption Communities found useful resources, relevant conversations and peer support. But discovery depended too heavily on chance, and the value of joining was often unclear until after employees had already arrived.
              </p>
              
              {/* Strong Insight Callout */}
              <div className={`p-4 sm:p-4.5 rounded-[20px] border text-xs sm:text-sm font-medium flex items-start gap-3 shadow-sm backdrop-blur-xl mt-2 ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-slate-200"
                  : "bg-white/95 border-slate-200 text-slate-800"
              }`}>
                <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <p className="leading-relaxed">
                  The experience worked once people arrived. <strong className={isDark ? "text-white" : "text-[#0b0f19]"}>The journey was breaking before discovery.</strong>
                </p>
              </div>
            </div>

            {/* Right Column: Side-by-Side What Worked vs What Broke Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              
              {/* Card 1: What worked after discovery */}
              <div className={`p-5 sm:p-6 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-white"
                  : "bg-white/95 border-sky-200/80 text-slate-900"
              }`}>
                <div>
                  <div className={`text-[11px] font-['Inter',sans-serif] font-bold tracking-wider uppercase mb-4 ${
                    isDark ? "text-sky-400" : "text-sky-600"
                  }`}>
                    WHAT WORKED AFTER DISCOVERY
                  </div>

                  <div className="space-y-3">
                    {[
                      "Relevant Copilot knowledge",
                      "Ready-to-use content",
                      "Peer expertise",
                      "Practical learning support",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-sky-400" : "text-sky-600"}`} />
                        <span className={`text-xs sm:text-sm font-medium leading-snug ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: What broke before discovery */}
              <div className={`p-5 sm:p-6 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-white"
                  : "bg-white/95 border-rose-200/80 text-slate-900"
              }`}>
                <div>
                  <div className={`text-[11px] font-['Inter',sans-serif] font-bold tracking-wider uppercase mb-4 ${
                    isDark ? "text-rose-400" : "text-rose-600"
                  }`}>
                    WHAT BROKE BEFORE DISCOVERY
                  </div>

                  <div className="space-y-3">
                    {[
                      "Communities were difficult to find",
                      "Entry points were inconsistent",
                      "Value was unclear before joining",
                      "Relevance appeared too late",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                          isDark
                            ? "bg-rose-950 border-rose-500/60 text-rose-400"
                            : "bg-rose-50 border-rose-300 text-rose-600"
                        }`}>
                          ✕
                        </div>
                        <span className={`text-xs sm:text-sm font-medium leading-snug ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 07 — RESEARCH FINDINGS ────────────────────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="findings">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* 2-Column Layout: Left Title & Description | Right Editorial List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
            
            {/* Left Column: Title & Narrative */}
            <div className="lg:col-span-5">
              <div className="mb-3">
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                  isDark
                    ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                    : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
                }`}>
                  <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                  <span>RESEARCH FINDINGS</span>
                </div>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-3 ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}
                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
              >
                Participation hid a discovery problem.
              </h2>
              <p className={`text-base font-normal leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Member count and engagement data reflected the people already inside the community. They did not reveal how many employees never discovered it, understood its relevance or considered joining.
              </p>
            </div>

            {/* Right Column: 4 Editorial Finding Rows */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Discovery depended on chance", desc: "Employees often found communities through forwarded links or one-off communication." },
                { num: "02", title: "Value appeared too late", desc: "Useful content became visible after the decision to join." },
                { num: "03", title: "Relevance was difficult to judge", desc: "Generic positioning did not connect the community to someone’s role or work." },
                { num: "04", title: "Existing members behaved differently", desc: "People who reached the community found practical support and continued participating." },
              ].map((finding, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                    isDark
                      ? "bg-[#0b101e]/85 border-white/12"
                      : "bg-white/95 border-slate-200/90 text-[#0b0f19]"
                  }`}
                >
                  <div>
                    <span className={`text-xs font-mono font-bold block mb-1.5 ${
                      isDark ? "text-slate-400" : "text-indigo-600"
                    }`}>
                      {finding.num}
                    </span>
                    <h3 className={`text-sm sm:text-base font-bold mb-1.5 ${
                      isDark ? "text-white" : "text-[#0b0f19]"
                    }`}>
                      {finding.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {finding.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Research Highlight Statement */}
          <div className={`p-6 sm:p-7 rounded-[28px] border shadow-sm backdrop-blur-xl text-center flex flex-col items-center justify-center ${
            isDark
              ? "bg-[#0b101e]/85 border-white/12 text-white"
              : "bg-white/95 border-slate-200/90 text-[#0b0f19]"
          }`}>
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-normal italic"
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              “The community was not underperforming. It was under-discovered.”
            </h3>
          </div>

        </div>
      </section>

      {/* ── 08 — THE STRATEGIC DIAGNOSIS: ADOPT HEALTH MODEL ──────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="diagnosis">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 sm:mb-10 items-start">
            <div className="lg:col-span-7">
              <div className="mb-3">
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                  isDark
                    ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                    : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
                }`}>
                  <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                  <span>THE STRATEGIC DIAGNOSIS</span>
                </div>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight leading-[1.15] ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}
                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
              >
                ADOPT found the break before participation.
              </h2>
            </div>
            <div className="lg:col-span-5 pt-1 lg:pt-6">
              <p className={`text-base leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                I used the ADOPT Playbook I created to separate a discovery problem from an activation problem. The earliest meaningful break was AWARE, followed by weak DESIRE—not OPEN.
              </p>
              <p className={`text-xs mt-2 italic font-normal ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}>
                Stage health reflects the quality of progression among people reaching each stage—not total population volume.
              </p>
            </div>
          </div>

          {/* Principal Design Decision Card */}
          <div
            className="project-card px-5 py-3.5 sm:px-6 sm:py-4 lg:px-7 lg:py-4 rounded-[18px] sm:rounded-[22px] overflow-hidden transition-all duration-300 mb-6"
            style={{
              background: isDark ? "rgba(0,0,0,0.45)" : "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(14px) saturate(1.8) brightness(1.06)",
              WebkitBackdropFilter: "blur(14px) saturate(1.8) brightness(1.06)",
              boxShadow: isDark
                ? [
                    "inset 0 0 0 1px rgba(255,255,255,0.16)",
                    "0 8px 32px rgba(0,0,0,0.40)",
                    "inset 0 1.5px 1px rgba(255,255,255,0.52)",
                    "inset 0 -2px 5px rgba(0,0,0,0.28)",
                  ].join(", ")
                : [
                    "inset 0 0 0 1px rgba(255,255,255,0.9)",
                    "0 10px 30px -5px rgba(15, 23, 42, 0.08)",
                    "0 20px 40px -15px rgba(79, 70, 229, 0.06)",
                  ].join(", "),
              border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(226, 232, 240, 0.9)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-center">
              
              {/* Left Column (8 cols): Decision & Description */}
              <div className="lg:col-span-8 space-y-1">
                <h3 className={`text-base sm:text-lg font-semibold tracking-tight leading-snug ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}>
                  I chose to fix discovery first.
                </h3>
                <p className={`text-xs sm:text-[13px] leading-normal font-normal max-w-2xl ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}>
                  Healthy participation masked an earlier break: employees were not consistently discovering the community or understanding its relevance.
                </p>
              </div>

              {/* Right Column (4 cols): Why Not Open? */}
              <div className={`lg:col-span-4 lg:border-l lg:pl-5 flex flex-col justify-center ${
                isDark ? "lg:border-white/10" : "lg:border-slate-200"
              }`}>
                <div>
                  <span className={`text-[10px] sm:text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-[0.12em] block mb-0.5 ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}>
                    WHY NOT OPEN?
                  </span>
                  <p className={`text-xs sm:text-[13px] leading-normal font-normal ${
                    isDark ? "text-slate-200" : "text-slate-600"
                  }`}>
                    Improving onboarding would optimize a journey most employees never reached.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 1. 5-Stage Health Strip with Floating Badges & Fixed Colors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 pt-3">
            {(
              [
                "aware",
                "desire",
                "open",
                "proficient",
                "transform",
              ] as Array<keyof typeof engageHealthStagesData>
            ).map((stageKey) => {
              const stage = engageHealthStagesData[stageKey];
              const isSelected = healthSelectedStage === stageKey;

              return (
                <button
                  key={stage.id}
                  onClick={() => setHealthSelectedStage(stageKey)}
                  className={`p-5 rounded-[22px] text-left transition-all duration-200 relative flex flex-col justify-between cursor-pointer min-h-[135px] backdrop-blur-xl ${
                    isDark ? "bg-[#0b101e]/85" : "bg-white/95 shadow-sm"
                  } ${
                    isSelected
                      ? stage.id === "aware"
                        ? "border-2 border-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.35)] scale-[1.02]"
                        : stage.id === "desire"
                        ? "border-2 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.25)] scale-[1.02]"
                        : stage.id === "open"
                        ? "border-2 border-sky-500 shadow-[0_0_25px_rgba(59,130,246,0.25)] scale-[1.02]"
                        : stage.id === "proficient"
                        ? "border-2 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-[1.02]"
                        : "border-2 border-teal-500 shadow-[0_0_25px_rgba(20,184,166,0.25)] scale-[1.02]"
                      : stage.id === "aware"
                      ? "border border-rose-500/30 hover:border-rose-500/70 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                      : stage.id === "desire"
                      ? "border border-amber-500/30 hover:border-amber-500/70 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                      : isDark
                      ? "border border-white/12 hover:border-slate-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      : "border border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Floating Pill Badges */}
                  {stage.id === "aware" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-rose-600 text-white font-['Inter',sans-serif] font-bold text-[10px] tracking-wider uppercase shadow-md whitespace-nowrap">
                      PRIMARY · P0 BREAK
                    </div>
                  )}
                  {stage.id === "desire" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-black font-['Inter',sans-serif] font-bold text-[10px] tracking-wider uppercase shadow-md whitespace-nowrap">
                      SECONDARY · P1
                    </div>
                  )}

                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <span className={`text-xs font-['Inter',sans-serif] font-bold tracking-wider uppercase ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}>
                        {stage.adoptTag}
                      </span>
                      <span className={`text-2xl font-bold font-['Inter',sans-serif] ${stage.statusColor}`}>
                        {stage.score}
                      </span>
                    </div>

                    <div className={`w-full h-1.5 rounded-full overflow-hidden mb-3 ${
                      isDark ? "bg-slate-800/80" : "bg-slate-100"
                    }`}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${stage.score}%`,
                          backgroundColor: stage.barColor,
                        }}
                      />
                    </div>

                    <div>
                      <span className={`text-xs font-bold font-['Inter',sans-serif] block ${stage.statusColor}`}>
                        {stage.status}
                      </span>
                      <span className={`text-[11px] block font-['Inter',sans-serif] font-normal mt-0.5 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>
                        {stage.statusSubtitle}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Two-Tab Navigation: Segmented Switcher Tabs from Adopt Landing Page */}
          <div className="flex items-center mb-6">
            <div className={`inline-flex p-1 rounded-full border shadow-2xs backdrop-blur-xl shrink-0 ${
              isDark ? "border-white/12 bg-[#0b101e]/85" : "border-slate-200 bg-white/90"
            }`}>
              <button
                type="button"
                onClick={() => setHealthMainTab("initiatives")}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  healthMainTab === "initiatives"
                    ? isDark
                      ? "bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-pink-300 border border-pink-500/40 shadow-sm"
                      : "bg-[#f3f0fe] text-[#6d28d9] border border-[#dcd1fc] shadow-2xs"
                    : isDark
                    ? "text-slate-400 hover:text-white border border-transparent"
                    : "text-slate-600 hover:text-slate-900 border border-transparent"
                }`}
              >
                <span className="text-[10px] text-pink-500">✦</span>
                <span>RECOMMENDED INITIATIVES</span>
                <span className="text-[11px] font-normal opacity-70">• {currentHealthData.name}</span>
              </button>

              <button
                type="button"
                onClick={() => setHealthMainTab("execution")}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  healthMainTab === "execution"
                    ? isDark
                      ? "bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-purple-300 border border-purple-500/40 shadow-sm"
                      : "bg-[#eef2ff] text-[#4338ca] border border-[#c7d2fe] shadow-2xs"
                    : isDark
                    ? "text-slate-400 hover:text-white border border-transparent"
                    : "text-slate-600 hover:text-slate-900 border border-transparent"
                }`}
              >
                <span className="text-[10px] text-purple-500">✦</span>
                <span>DESIGN EXECUTION WORKSPACE</span>
              </button>
            </div>
          </div>

          {/* TAB 1: RECOMMENDED INITIATIVES */}
          {healthMainTab === "initiatives" && (
            <div className={`rounded-[28px] border shadow-sm backdrop-blur-xl p-6 sm:p-8 animate-fadeIn ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
            }`}>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider ${
                        currentHealthData.priorityBadge
                      }`}>
                        STAGE {currentHealthData.adoptTag} · {currentHealthData.priorityLabel}
                      </span>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-black leading-snug mb-2 ${
                      isDark ? "text-white" : "text-[#0b0f19]"
                    }`}>
                      {currentHealthData.oneLiner}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {currentHealthData.breaking}
                    </p>
                  </div>

                  <div className={`p-4 sm:p-5 rounded-[20px] border ${
                    isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200"
                  }`}>
                    <span className={`text-[10.5px] font-['Inter',sans-serif] uppercase tracking-wider font-bold block mb-3 ${
                      isDark ? "text-sky-400" : "text-[#4338ca]"
                    }`}>
                      WHY THIS MATTERS FOR COPILOT
                    </span>
                    <ul className="space-y-2.5 text-xs">
                      {currentHealthData.whyItMatters.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? "text-sky-400" : "text-[#4338ca]"}`} />
                          <span className={`leading-snug ${isDark ? "text-slate-300" : "text-slate-700"}`}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Diagnosis Output Link Card */}
                  <div
                    onClick={() => setHealthMainTab("execution")}
                    className={`p-4 rounded-[20px] border text-xs flex flex-col gap-2.5 shadow-sm cursor-pointer transition-all group ${
                      isDark
                        ? "bg-[#080d1a]/80 border-white/10 text-slate-300 hover:border-white/20 hover:bg-[#0c1428]/80"
                        : "bg-slate-50/90 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isDark ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-indigo-50 border-indigo-200 text-indigo-600"
                      }`}>
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <div>
                        <strong className={`block font-bold mb-0.5 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                          Diagnosis Output
                        </strong>
                        <p className={`text-[11.5px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          These community interventions became the Engage design backlog.
                        </p>
                      </div>
                    </div>
                    <span className={`font-semibold underline flex items-center gap-1 text-xs pl-8 ${
                      isDark ? "text-sky-400 group-hover:text-sky-300" : "text-[#4338ca] group-hover:text-indigo-700"
                    }`}>
                      Explore Design Workspace →
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className={`lg:col-span-8 lg:border-l lg:pl-8 space-y-3 ${
                  isDark ? "lg:border-slate-800/80" : "lg:border-slate-200"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`text-xs font-bold uppercase tracking-widest font-['Inter',sans-serif] ${
                      isDark ? "text-pink-400" : "text-[#6d28d9]"
                    }`}>
                      RECOMMENDED COMMUNITY INITIATIVES
                    </h4>
                    <span className={`text-[10px] font-['Inter',sans-serif] uppercase tracking-wider ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      DIRECT BACKLOG OUTPUT
                    </span>
                  </div>

                  <div className="space-y-3">
                    {currentHealthData.initiatives.map((item, idx) => {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setOpenInitiative(item.code as any);
                            setHealthMainTab("execution");
                          }}
                          className={`w-full text-left p-4 sm:p-5 rounded-[20px] border flex items-center justify-between gap-5 shadow-sm transition-all cursor-pointer group ${
                            isDark
                              ? "bg-[#080d1a]/80 border-white/10 text-slate-200 hover:bg-[#0c1428]/90 hover:border-white/20"
                              : "bg-slate-50/90 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-300 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 font-bold font-['Inter',sans-serif] text-sm shadow-sm transition-colors ${
                              isDark
                                ? "bg-white/10 border-white/15 text-white"
                                : "bg-white border-slate-200 text-[#4338ca]"
                            }`}>
                              <span>{item.code}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <strong className={`text-sm sm:text-base font-bold block mb-1 ${
                                isDark ? "text-white" : "text-[#0b0f19]"
                              }`}>
                                {item.label}
                              </strong>
                              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                                isDark ? "text-slate-300" : "text-slate-600"
                              }`}>
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all shrink-0 shadow-2xs ${
                            isDark
                              ? "bg-white/5 border-white/15 text-slate-300 group-hover:bg-indigo-600 group-hover:border-indigo-500 group-hover:text-white"
                              : "bg-white border-slate-200 text-slate-700 group-hover:bg-[#4338ca] group-hover:border-[#4338ca] group-hover:text-white"
                          }`}>
                            View Design
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: DESIGN EXECUTION WORKSPACE */}
          {healthMainTab === "execution" && (() => {
            const currentInitIndex = currentHealthData.initiatives.findIndex((i) => i.code === openInitiative);
            const activeInitIndex = currentInitIndex >= 0 ? currentInitIndex : 0;
            const activeInit = currentHealthData.initiatives[activeInitIndex];

            // Image Artifact Resolver
            const getInitiativeArtifact = () => {
              if (currentHealthData.id === "aware") {
                if (activeInit.code === "B") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Aware%202.png`;
                if (activeInit.code === "C") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Aware%203.png`;
                return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Aware%201.png`;
              }
              if (currentHealthData.id === "desire") {
                if (activeInit.code === "C") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Desire%202.png`;
                return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Desire%201.png`;
              }
              if (currentHealthData.id === "open") {
                if (activeInit.code === "B") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Proficient%202.png`;
                if (activeInit.code === "C" || activeInit.code === "D") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Open%201.png`;
                return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Open%202.png`;
              }
              if (currentHealthData.id === "proficient") {
                if (activeInit.code === "B") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Proficient%203.png`;
                if (activeInit.code === "C") return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Proficient%201.png`;
                return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Proficient%202.png`;
              }
              return `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Transform.png`;
            };

            const engageDecisions: Record<string, Array<{ step: string; title: string; desc: string }>> = {
              aware: [
                { step: "01", title: "ADMIN SURFACING", desc: "Place launch recommendations in Engage, Teams, and Microsoft 365 admin centers." },
                { step: "02", title: "1-CLICK LAUNCH", desc: "Enable admins to create an official Copilot space their enterprise can trust instantly." },
                { step: "03", title: "DISCOVERY CUES", desc: "Embed Copilot community recommendations in first-run Discover Communities feeds." },
                { step: "04", title: "AUDIENCE ROUTING", desc: "Directly target licensed Copilot users with suggested membership invitations." },
              ],
              desire: [
                { step: "01", title: "BENEFIT-LED PREVIEW", desc: "Explain the tangible value and productivity gains before asking people to join." },
                { step: "02", title: "ROLE SCENARIOS", desc: "Demonstrate concrete Copilot prompt use cases tailored to functional job roles." },
                { step: "03", title: "CHAMPION PROOF", desc: "Highlight recognized internal champions and peer workflow testimonials." },
                { step: "04", title: "CONTENT PREVIEWS", desc: "Preview prompt recipes and discussion topics to establish immediate utility." },
              ],
              open: [
                { step: "01", title: "ADMIN FIRST-RUN CHECKLIST", desc: "Guide admins to pin resources, add members, review suggestions, and post." },
                { step: "02", title: "WEEKLY SUGGESTED CONTENT", desc: "Publish curated Copilot prompt recipes and weekly discussion topics in a single click." },
                { step: "03", title: "COMPOSER STARTERS", desc: "Offer templates to ask questions, share tips, or tell a Copilot story." },
                { step: "04", title: "GUIDED TOUR ROADMAP", desc: "Plan contextual tours for top questions, posting, and catch-up as future scope." },
              ],
              proficient: [
                { step: "01", title: "PROMPT-FIRST THREAD", desc: "Publish a recurring prompt with use case, full prompt, author, and discussion together." },
                { step: "02", title: "TRY IN COPILOT", desc: "Preload shared prompts in Copilot so members move directly from reading to doing." },
                { step: "03", title: "USAGE ANALYTICS", desc: "Expose reach, engagement, comments, shares, click-through, and post performance." },
                { step: "04", title: "AI SUPPORT ROADMAP", desc: "Plan role-relevant content suggestions and advanced learning paths as future scope." },
              ],
              transform: [
                { step: "01", title: "BEHAVIOR BADGES", desc: "Recognize asking, answering, first posts, active contribution, and support." },
                { step: "02", title: "PROFILE RECOGNITION", desc: "Carry earned badges onto member profiles so helpful behavior remains visible." },
                { step: "03", title: "TOP MEMBERS", desc: "Surface a lightweight leaderboard that helps newcomers identify active contributors." },
                { step: "04", title: "ADVOCACY ROADMAP", desc: "Extend into champion programs, user-led stories, spotlights, and impact reports." },
              ],
            };

            const artifactImg = getInitiativeArtifact();
            const currentDecisions = engageDecisions[currentHealthData.id] || engageDecisions.aware;

            return (
              <div className={`rounded-[28px] border shadow-sm backdrop-blur-xl p-6 sm:p-8 space-y-6 animate-fadeIn ${
                isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
              }`}>
                
                {/* Header with Initiative Switcher */}
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${
                  isDark ? "border-slate-800/80" : "border-slate-200"
                }`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        currentHealthData.priorityBadge
                      }`}>
                        {currentHealthData.name} · Initiative {activeInit.code}
                      </span>
                      <span className={`text-xs font-mono ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                        ({activeInitIndex + 1}/{currentHealthData.initiatives.length})
                      </span>
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                      {activeInit.label}
                    </h3>
                    <p className={`text-sm font-serif italic mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {activeInit.desc}
                    </p>
                  </div>

                  {/* Compact A B C D Pill Switcher */}
                  <div className={`flex items-center gap-1.5 p-1 rounded-xl border self-start sm:self-center shadow-inner ${
                    isDark ? "bg-[#050b1a]/50 border-slate-800" : "bg-slate-100 border-slate-200"
                  }`}>
                    <span className={`text-[10px] font-mono uppercase px-2 font-bold hidden sm:inline-block ${
                      isDark ? "text-slate-500" : "text-slate-500"
                    }`}>
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
                              ? "bg-[#4338ca] text-white shadow-md scale-105"
                              : isDark
                              ? "bg-[#0a1224] border border-slate-700 text-slate-300 hover:text-white hover:bg-[#131f38]"
                              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                          title={item.label}
                        >
                          {item.code}
                        </button>
                      );
                    })}
                  </div>
                </div>
                  
                {/* Diagnosis Barrier vs Design Goal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 sm:p-5 rounded-[20px] border flex flex-col justify-center ${
                    isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-rose-50/70 border-rose-200/80"
                  }`}>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1.5 ${
                      isDark ? "text-rose-400" : "text-rose-700"
                    }`}>
                      DIAGNOSIS BARRIER
                    </span>
                    <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      {currentHealthData.breaking}
                    </p>
                  </div>

                  <div className={`p-4 sm:p-5 rounded-[20px] border flex flex-col justify-center ${
                    isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-emerald-50/70 border-emerald-200/80"
                  }`}>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1.5 ${
                      isDark ? "text-emerald-400" : "text-emerald-700"
                    }`}>
                      DESIGN GOAL
                    </span>
                    <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      {activeInit.desc}
                    </p>
                  </div>
                </div>

                {/* High-Fidelity Artifact Frame */}
                <div
                  className={`w-full rounded-2xl overflow-hidden border cursor-pointer group shadow-xl transition-all p-3 sm:p-4 ${
                    isDark
                      ? "bg-[#050b1a]/50 border-slate-800 hover:border-sky-500/40"
                      : "bg-slate-50 border-slate-200 hover:border-indigo-400 shadow-md"
                  }`}
                  onClick={() =>
                    openLightbox(
                      artifactImg,
                      `${currentHealthData.name} · Recommendation ${activeInit.code} Artifact`,
                      activeInit.label,
                      activeInit.desc
                    )
                  }
                >
                  <div className={`p-2.5 border-b flex items-center justify-between mb-3 rounded-lg ${
                    isDark ? "bg-slate-900/60 border-slate-800/80" : "bg-white border-slate-200 shadow-2xs"
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className={`text-xs font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        {currentHealthData.name} · Recommendation {activeInit.code}: {activeInit.label}
                      </span>
                    </div>
                    <div className={`flex items-center gap-2 text-[11px] font-mono font-semibold transition-colors ${
                      isDark ? "text-sky-400 group-hover:text-sky-300" : "text-[#4338ca] group-hover:text-indigo-700"
                    }`}>
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to expand full screen ↗</span>
                    </div>
                  </div>
                  
                  <div className={`w-full flex justify-center rounded-xl overflow-hidden p-2 sm:p-4 ${
                    isDark ? "bg-[#02050e]" : "bg-white border border-slate-100"
                  }`}>
                    <img
                      src={artifactImg}
                      alt={activeInit.label}
                      className="w-full h-auto max-h-[560px] object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-300 shadow-lg"
                    />
                  </div>
                </div>

                {/* Key Design Decisions */}
                <div className={`p-5 sm:p-6 rounded-[24px] border space-y-4 ${
                  isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200"
                }`}>
                  <div className={`flex items-center justify-between border-b pb-3 ${
                    isDark ? "border-slate-800/80" : "border-slate-200"
                  }`}>
                    <span className={`text-xs font-bold uppercase tracking-wider font-mono ${
                      isDark ? "text-sky-400" : "text-[#4338ca]"
                    }`}>
                      Community Design Decisions · {activeInit.label}
                    </span>
                    <span className={`text-[10px] font-mono uppercase ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      4 UX Pillars
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                    {currentDecisions.map((dec) => (
                      <div key={dec.step} className={`p-3.5 rounded-[16px] border text-xs space-y-1 ${
                        isDark ? "bg-[#0b101e]/80 border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                      }`}>
                        <div className={`flex items-center gap-2 font-bold font-mono text-[11px] ${
                          isDark ? "text-sky-400" : "text-[#4338ca]"
                        }`}>
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

        </div>
      </section>

      {/* ── 09 — THE STRATEGIC DECISION: REDESIGNED PATH TO DISCOVERY ── */}
      <section className={`py-20 sm:py-24 lg:py-28 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="decision">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>THE DESIGN RESPONSE</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              We redesigned the path to discovery.
            </h2>
            <p className={`text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              We moved the value proposition before the commitment—connecting awareness, role relevance, and activation into one continuous path.
            </p>
          </div>

          {/* 3-Part Priority Architecture: 01 Be Seen -> 02 Be Relevant -> 03 Then Activate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {/* Priority 01: Be Seen */}
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-rose-200/80 text-slate-900"
            }`}>
              <div>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                  isDark ? "text-rose-400" : "text-rose-600"
                }`}>
                  01 · BE SEEN (AWARE)
                </span>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                  Be seen
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-4 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}>
                  Surface the community where adoption decisions already happen.
                </p>
              </div>
              <div className={`pt-3 border-t text-[11px] font-mono ${
                isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
              }`}>
                Admin Center · Teams · Discovery Cards
              </div>
            </div>

            {/* Priority 02: Be Relevant */}
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-amber-200/80 text-slate-900"
            }`}>
              <div>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                  isDark ? "text-amber-400" : "text-amber-600"
                }`}>
                  02 · BE RELEVANT (DESIRE)
                </span>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                  Be relevant
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-4 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}>
                  Show practical value before asking employees to join.
                </p>
              </div>
              <div className={`pt-3 border-t text-[11px] font-mono ${
                isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
              }`}>
                Role Previews · Prompt Recipes · Peer Proof
              </div>
            </div>

            {/* Priority 03: Then Activate */}
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
              isDark ? "bg-[#0b101e]/85 border-white/12 opacity-80" : "bg-white/95 border-slate-200 text-slate-900"
            }`}>
              <div>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}>
                  03 · THEN ACTIVATE (OPEN)
                </span>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                  Then activate
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-4 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  Make the first community action effortless once intent exists.
                </p>
              </div>
              <div className={`pt-3 border-t text-[11px] font-mono ${
                isDark ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-400"
              }`}>
                Checklist · Seeded Content · 1-Click Launch
              </div>
            </div>
          </div>

          {/* Two Detailed Intervention Stories */}
          <div className="space-y-8">
            
            {/* INTERVENTION 01 — AWARE */}
            <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl space-y-6 ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
            }`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
                isDark ? "border-slate-800/80" : "border-slate-200"
              }`}>
                <div>
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isDark ? "text-rose-400" : "text-rose-600"
                  }`}>
                    AWARE INTERVENTION
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Make the community difficult to miss.
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-full border text-xs font-mono self-start sm:self-auto ${
                  isDark
                    ? "bg-rose-950/60 border-rose-500/30 text-rose-300"
                    : "bg-rose-50 border-rose-200 text-rose-700"
                }`}>
                  Cross-Surface Discovery System
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <span className={`text-[10.5px] font-mono uppercase font-bold block mb-1 ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      BEHAVIORAL BARRIER
                    </span>
                    <p className={`text-sm font-semibold leading-relaxed ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      Employees and administrators could not act on an adoption resource they did not know existed.
                    </p>
                  </div>

                  <div>
                    <span className={`text-[10.5px] font-mono uppercase font-bold block mb-1 ${
                      isDark ? "text-rose-400" : "text-rose-600"
                    }`}>
                      ONE-SENTENCE RESPONSE
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}>
                      We connected communications, admin entry points and product surfaces into one discovery system.
                    </p>
                  </div>

                  <div className={`p-4 rounded-[20px] border text-xs ${
                    isDark ? "bg-[#080d1a]/80 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}>
                    <strong className={`block mb-0.5 font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                      Key Takeaway:
                    </strong>
                    Discovery became a coordinated system—not a single campaign.
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div
                    className={`rounded-2xl overflow-hidden border p-3 cursor-pointer group transition-all shadow-xl ${
                      isDark
                        ? "border-slate-800 bg-[#02050e] hover:border-rose-500/40"
                        : "border-slate-200 bg-white hover:border-rose-400 shadow-md"
                    }`}
                    onClick={() =>
                      openLightbox(
                        `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Aware%201.png`,
                        "Awareness System · Admin Launch Banner & Discovery",
                        "Cross-surface entry points in Microsoft Viva Engage"
                      )
                    }
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Aware%201.png`}
                      alt="Awareness Entry Points"
                      className="w-full h-auto rounded-lg object-contain group-hover:scale-[1.01] transition-transform duration-300"
                    />
                    <div className={`flex items-center justify-between text-[11px] pt-2 px-1 font-mono ${
                      isDark ? "text-rose-400" : "text-rose-600"
                    }`}>
                      <span>Admin Surfacing &amp; Discovery System</span>
                      <span>Click to expand ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERVENTION 02 — DESIRE */}
            <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl space-y-6 ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
            }`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
                isDark ? "border-slate-800/80" : "border-slate-200"
              }`}>
                <div>
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isDark ? "text-amber-400" : "text-amber-600"
                  }`}>
                    DESIRE INTERVENTION
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Make the value clear before asking people to join.
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-full border text-xs font-mono self-start sm:self-auto ${
                  isDark
                    ? "bg-amber-950/60 border-amber-500/30 text-amber-300"
                    : "bg-amber-50 border-amber-200 text-amber-700"
                }`}>
                  Pre-Commitment Relevance
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <span className={`text-[10.5px] font-mono uppercase font-bold block mb-1 ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      BEHAVIORAL BARRIER
                    </span>
                    <p className={`text-sm font-semibold leading-relaxed ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      Awareness alone did not create intent. Employees needed to understand why the community was relevant to their role and work.
                    </p>
                  </div>

                  <div>
                    <span className={`text-[10.5px] font-mono uppercase font-bold block mb-1 ${
                      isDark ? "text-amber-400" : "text-amber-600"
                    }`}>
                      ONE-SENTENCE RESPONSE
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}>
                      We surfaced practical scenarios, relevant content and expert support before commitment.
                    </p>
                  </div>

                  <div className={`p-4 rounded-[20px] border text-xs ${
                    isDark ? "bg-[#080d1a]/80 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}>
                    <strong className={`block mb-0.5 font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                      Key Takeaway:
                    </strong>
                    We moved the value proposition before the commitment—not after it.
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div
                    className={`rounded-2xl overflow-hidden border p-3 cursor-pointer group transition-all shadow-xl ${
                      isDark
                        ? "border-slate-800 bg-[#02050e] hover:border-amber-500/40"
                        : "border-slate-200 bg-white hover:border-amber-400 shadow-md"
                    }`}
                    onClick={() =>
                      openLightbox(
                        `${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Desire%201.png`,
                        "Desire System · Value-Led Landing & Role Scenarios",
                        "Communicating tangible Copilot value before joining"
                      )
                    }
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}IMG/copilot-case-study/Engage%20Communities/Desire%201.png`}
                      alt="Desire & Value Previews"
                      className="w-full h-auto rounded-lg object-contain group-hover:scale-[1.01] transition-transform duration-300"
                    />
                    <div className={`flex items-center justify-between text-[11px] pt-2 px-1 font-mono ${
                      isDark ? "text-amber-400" : "text-amber-600"
                    }`}>
                      <span>Value-Led Landing &amp; Role Scenarios</span>
                      <span>Click to expand ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 10 — COMMUNITY LEARNING LOOP ─────────────────────────────── */}
      <section className={`py-20 sm:py-24 lg:py-28 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="engine">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>THE LEARNING LOOP</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Every contribution made the next action easier.
            </h2>
            <p className={`text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              Every useful contribution became an input for someone else’s next Copilot action—connecting peer knowledge, product practice and organizational learning.
            </p>
          </div>

          {/* 4-Step Flywheel Loop Container */}
          <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl ${
            isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative items-stretch">
              
              {/* Step 01 */}
              <div className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border ${
                isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200 shadow-2xs"
              }`}>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono font-bold ${isDark ? "text-rose-400" : "text-rose-600"}`}>01</span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}>
                      DISCOVERY
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold mb-1.5 leading-snug ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}>
                    Discover relevant knowledge
                  </h3>
                  <p className={`text-xs leading-relaxed font-normal ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Employees find authentic prompt recipes and workflows shared by functional colleagues.
                  </p>
                </div>
                <div className={`hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 font-mono text-sm pointer-events-none ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}>
                  →
                </div>
              </div>

              {/* Step 02 */}
              <div className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border ${
                isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200 shadow-2xs"
              }`}>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono font-bold ${isDark ? "text-sky-400" : "text-sky-600"}`}>02</span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}>
                      PRACTICE
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold mb-1.5 leading-snug ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}>
                    Try it in Copilot
                  </h3>
                  <p className={`text-xs leading-relaxed font-normal ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Preloaded 1-click execution moves the user from reading about AI to immediate task practice.
                  </p>
                </div>
                <div className={`hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 font-mono text-sm pointer-events-none ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}>
                  →
                </div>
              </div>

              {/* Step 03 */}
              <div className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border ${
                isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200 shadow-2xs"
              }`}>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>03</span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}>
                      SHARING
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold mb-1.5 leading-snug ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}>
                    Share the result
                  </h3>
                  <p className={`text-xs leading-relaxed font-normal ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Users post adaptations and optimizations back to the community feed with one click.
                  </p>
                </div>
                <div className={`hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 font-mono text-sm pointer-events-none ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}>
                  →
                </div>
              </div>

              {/* Step 04 */}
              <div className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border ${
                isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200 shadow-2xs"
              }`}>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono font-bold ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>04</span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}>
                      COMPOUNDING
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold mb-1.5 leading-snug ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}>
                    Improve community knowledge
                  </h3>
                  <p className={`text-xs leading-relaxed font-normal ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Top workflows get curated into verified organizational prompt recipes and champion guides.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 11 — IMPACT ──────────────────────────────────────────────── */}
      <section className={`py-20 sm:py-24 lg:py-28 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="impact">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>VERIFIED IMPACT</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Better discovery expanded community value.
            </h2>
            <p className={`text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              The strongest signal came after discovery: employees who engaged in a community demonstrated sustained Copilot active days.
            </p>
          </div>

          {/* 3 Primary Metrics on One Shared Neutral Surface */}
          <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl ${
            isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
          }`}>
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x ${
              isDark ? "divide-slate-800" : "divide-slate-200"
            }`}>
              <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0 text-center sm:text-left flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 block mb-2 font-mono">
                    300K → 1M
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Weekly Active Users
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed mt-2 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Scale of enterprise users participating in Copilot adoption communities.
                </p>
              </div>

              <div className="pt-6 sm:pt-0 sm:px-6 text-center sm:text-left flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block mb-2 font-mono">
                    +30%
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Active Copilot Days
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed mt-2 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Associated lift in weekly active Copilot usage among participating members.
                </p>
              </div>

              <div className="pt-6 sm:pt-0 sm:px-6 last:pr-0 text-center sm:text-left flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 block mb-2 font-mono">
                    +24%
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Repeat Community Engagement
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed mt-2 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Verified increase in repeat return visits and peer interaction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 12 — LEADERSHIP OUTCOME ──────────────────────────────────── */}
      <section className={`py-20 sm:py-24 lg:py-28 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="leadership">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>LEADERSHIP REFLECTION</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              The roadmap became a behavioral system.
            </h2>
            <p className={`text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              How strategic product design aligned cross-functional partners around behavioral progression rather than isolated feature requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Leadership Pillar 1 */}
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-start ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-rose-200/80 text-slate-900"
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                isDark ? "text-rose-400" : "text-rose-600"
              }`}>
                I FOUND THE EARLIER PROBLEM
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Discovery over Participation
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Reframed the challenge from participation to discovery and relevance.
              </p>
            </div>

            {/* Leadership Pillar 2 */}
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-start ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-amber-200/80 text-slate-900"
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                isDark ? "text-amber-400" : "text-amber-600"
              }`}>
                I CHANGED THE PRIORITY
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Early Causal Barriers
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Redirected the roadmap toward the earliest AWARE and DESIRE barriers.
              </p>
            </div>

            {/* Leadership Pillar 3 */}
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-start ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-indigo-200/80 text-slate-900"
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                isDark ? "text-sky-400" : "text-[#4338ca]"
              }`}>
                I ALIGNED THE SYSTEM
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Cross-Functional Strategy
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Connected product, research, engineering, content and leadership around one discovery strategy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 13 — QUIET CLOSING ────────────────────────────────────────── */}
      <section className={`py-24 sm:py-32 lg:py-36 transition-colors duration-300 ${
        isDark ? "bg-[#000000]" : "bg-transparent"
      }`} id="closing">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          
          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.2] mb-4 max-w-3xl"
            style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
          >
            <span className={`block ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
              The breakthrough wasn’t more content.
            </span>
            <span className={`block ${isDark ? "text-slate-200" : "text-slate-600"}`}>
              It was earlier discovery.
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-normal ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            Once employees found a relevant path into the community, peer knowledge could become product practice.
          </p>

          {onBack && (
            <button
              onClick={onBack}
              className="adopt-hero-btn-primary group cursor-pointer"
            >
              <span>Back to Portfolio &amp; Playbook</span>
              <span className="adopt-btn-circle-arrow">
                <ArrowRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
              </span>
            </button>
          )}

        </div>
      </section>

      {/* ── FULL-SCREEN LIGHTBOX MODAL ──────────────────────────────── */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 lg:p-10 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className={`relative max-w-6xl w-full max-h-[90vh] flex flex-col rounded-2xl border overflow-hidden shadow-2xl ${
              isDark ? "bg-[#090e1c] border-slate-800" : "bg-white border-slate-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-4 border-b flex items-center justify-between ${
              isDark ? "bg-[#070b16] border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <div>
                <h4 className={`text-sm sm:text-base font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                  {lightbox.title}
                </h4>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {lightbox.subtitle}
                </p>
                {lightbox.annotation && (
                  <span className="text-[10px] font-mono text-pink-500 block mt-0.5">
                    {lightbox.annotation}
                  </span>
                )}
              </div>
              <button
                onClick={closeLightbox}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  isDark
                    ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    : "bg-white border-slate-300 text-slate-600 hover:text-slate-900 shadow-2xs"
                }`}
                aria-label="Close full screen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`flex-1 overflow-auto p-4 flex items-center justify-center ${
              isDark ? "bg-[#000000]" : "bg-slate-100"
            }`}>
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
