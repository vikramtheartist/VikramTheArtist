import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Users,
  Layers,
  Sparkles,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Zap,
  Bot,
  Activity,
  Award,
  Compass,
  Heart,
  Send,
  Volume2,
  Database,
  BarChart3,
  Download,
  ShieldCheck,
  Mountain,
  Lock,
  X
} from "lucide-react";
import "../../../styles/adopt-landing.css";
import adoptIqImg from "../../../assets/img/AdoptIQ.png";
import copilotPlaybookImg from "../../../assets/img/Scale Copilot.png";
import awareCardImg from "../../../assets/img/Aware.png";
import desireCardImg from "../../../assets/img/Desire.png";
import openCardImg from "../../../assets/img/Open.png";
import proficientCardImg from "../../../assets/img/Proficient.png";
import transformCardImg from "../../../assets/img/Transform.png";

import awareModalImg from "../../../assets/img/Aware 1.png";
import desireModalImg from "../../../assets/img/Desire 1.png";
import openModalImg from "../../../assets/img/Open 1.png";
import proficientModalImg from "../../../assets/img/Proficient 1.png";
import transformModalImg from "../../../assets/img/Transform 1.png";

interface AdoptLandingPageProps {
  onBack?: () => void;
  onExplorePlaybook?: () => void;
  onViewCaseStudy?: () => void;
}

const STAGES_DATA = [
  {
    id: "aware",
    num: "01",
    title: "Aware",
    question: '"What is this?"',
    color: "#0284c7",
    colorBg: "bg-[#0284c7]",
    badgeBg: "bg-[#f0f9ff]/90",
    badgeBorder: "border-[#e0f2fe]/60",
    image: "Aware.png",
    cardImg: awareCardImg,
    modalImg: awareModalImg,
    pillar: "Signal",
    tagline: "Create awareness and promote about the existence of your product or feature.",
    body: "Awareness is the essential first step in adoption. If users are unaware of a feature or product, all other efforts to engage or convert them are ineffective.",
    quote: "You can’t sell a secret.",
    author: "Seth Godin",
    through: [
      {
        title: "In-Product Banners",
        desc: "Non-intrusive banners within relevant applications.",
      },
      {
        title: "Email Marketing",
        desc: "Segmented campaigns with personalized subject lines, highlighting benefits and new features.",
      },
      {
        title: "Leadership Communications",
        desc: "Top-down announcements from organizational leaders.",
      },
      {
        title: "Micro-Content/Short-Form Video",
        desc: "15-30 second clips demonstrating quick wins on internal platforms.",
      },
    ],
    keyPrinciples: "Cut through the noise with targeted, compelling messaging. Leverage multiple touchpoints where your users already are.",
    icon: "📣",
  },
  {
    id: "desire",
    num: "02",
    title: "Desire",
    question: '"Why should I care?"',
    color: "#f43f5e",
    colorBg: "bg-[#f43f5e]",
    badgeBg: "bg-[#fff1f2]/90",
    badgeBorder: "border-[#ffe4e6]/60",
    image: "Desire.png",
    cardImg: desireCardImg,
    modalImg: desireModalImg,
    pillar: "Emotional Pull",
    tagline: "Spark emotional connection and demonstrate tangible personal value.",
    body: "Curiosity alone does not drive behavior change. Users must see 'What’s in it for me?' to overcome inertia and the friction of changing their established workflow routines.",
    quote: "People don’t buy what you do; they buy why you do it.",
    author: "Simon Sinek",
    through: [
      {
        title: "Peer Success Stories",
        desc: "Relatable workflow wins shared by direct colleagues.",
      },
      {
        title: "Role-Specific ROI Demos",
        desc: "Quantified time-saved metrics tailored to specific job functions.",
      },
      {
        title: "Before & After Contrasts",
        desc: "Side-by-side workflow comparisons showcasing dramatic effort reduction.",
      },
      {
        title: "Executive Sponsorship",
        desc: "Leadership highlighting strategic priority and team empowerment.",
      },
    ],
    keyPrinciples: "Anchor value in human relief—saving time, eliminating cognitive drudgery, and elevating work quality.",
    icon: "❤️",
  },
  {
    id: "open",
    num: "03",
    title: "Open",
    question: '"How do I start?"',
    color: "#8b5cf6",
    colorBg: "bg-[#8b5cf6]",
    badgeBg: "bg-[#f5f3ff]/90",
    badgeBorder: "border-[#ede9fe]/60",
    image: "Open.png",
    cardImg: openCardImg,
    modalImg: openModalImg,
    pillar: "First Action",
    tagline: "Lower activation barriers and guide users to their first successful interaction.",
    body: "The gap between intention and first action is where most users drop off. Minimizing cognitive friction and guaranteeing early success creates positive momentum.",
    quote: "Make it easy, make it obvious, make it rewarding.",
    author: "James Clear",
    through: [
      {
        title: "1-Click Starter Prompts",
        desc: "Pre-configured templates embedded in everyday applications.",
      },
      {
        title: "Interactive Onboarding Wizards",
        desc: "60-second guided micro-tutorials with real-time feedback.",
      },
      {
        title: "Safe Sandbox Environments",
        desc: "Zero-risk practice spaces to experiment without consequences.",
      },
      {
        title: "Contextual Copilot Prompts",
        desc: "Timely suggestions triggered during active document creation.",
      },
    ],
    keyPrinciples: "Ensure the very first interaction delivers an undeniable AHA moment within 90 seconds.",
    icon: "🚀",
  },
  {
    id: "proficient",
    num: "04",
    title: "Proficient",
    question: '"How do I get better?"',
    color: "#f59e0b",
    colorBg: "bg-[#f59e0b]",
    badgeBg: "bg-[#fffbeb]/90",
    badgeBorder: "border-[#fef3c7]/60",
    image: "Proficient.png",
    cardImg: proficientCardImg,
    modalImg: proficientModalImg,
    pillar: "Reinforcement",
    tagline: "Deepen skills, build recurring workflow habits, and achieve mastery.",
    body: "Initial trial must mature into consistent daily habits. By reinforcing best practices and uncovering advanced capabilities, users transition from occasional experimenters to power users.",
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Will Durant",
    through: [
      {
        title: "Weekly Pro-Tip Micro-Drops",
        desc: "Bite-sized advanced workflow recipes delivered contextually.",
      },
      {
        title: "Prompt Engineering Clinics",
        desc: "Practical hands-on skill-building sessions for complex tasks.",
      },
      {
        title: "Workflow Chaining Guides",
        desc: "Connecting multiple AI actions into cohesive automated sequences.",
      },
      {
        title: "Milestones & Active Streaks",
        desc: "Recognizing consistent active days and productivity velocity.",
      },
    ],
    keyPrinciples: "Transform tool capability into automatic muscle memory through continuous positive reinforcement.",
    icon: "👑",
  },
  {
    id: "transform",
    num: "05",
    title: "Transform",
    question: '"How can I lead others?"',
    color: "#10b981",
    colorBg: "bg-[#10b981]",
    badgeBg: "bg-[#ecfdf5]/90",
    badgeBorder: "border-[#d1fae5]/60",
    image: "Transform.png",
    cardImg: transformCardImg,
    modalImg: transformModalImg,
    pillar: "Identity Shift",
    tagline: "Empower champions to scale knowledge, build community, and lead enterprise change.",
    body: "Sustainable enterprise adoption is self-propagating. When proficient users become vocal internal advocates and mentors, adoption reaches exponential network effects.",
    quote: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    through: [
      {
        title: "Champion Networks & Badges",
        desc: "Formal recognition and leadership circles for top enterprise power users.",
      },
      {
        title: "Internal Prompt Libraries",
        desc: "Company-wide sharing of customized high-performing prompt templates.",
      },
      {
        title: "Lunch & Learn Showcases",
        desc: "Peer-to-peer demo sessions and creative internal hackathons.",
      },
      {
        title: "Cross-Team Frameworks",
        desc: "Codifying success stories into standard operating procedures.",
      },
    ],
    keyPrinciples: "Elevate individual mastery into collective organizational capability and community pride.",
    icon: "🌟",
  },
];

const PLAYBOOK_PASSWORD = "designtoimproveworld";
const PLAYBOOK_LINK = "https://www.figma.com/deck/vGd7lTFMt1PeMQTr7dcz7l/ADOPT?node-id=1-125042&t=0hOVNm0DbUaw8jaK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1";

export const AdoptLandingPage: React.FC<AdoptLandingPageProps> = ({
  onBack,
  onExplorePlaybook,
  onViewCaseStudy,
  initialMode = "dark",
}) => {
  const [mode, setMode] = useState<"dark" | "light">(initialMode);
  const isDark = mode === "dark";
  const [scrollY, setScrollY] = useState(0);
  const [activeStageDetail, setActiveStageDetail] = useState<number | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordInput === PLAYBOOK_PASSWORD) {
      setShowPasswordModal(false);
      setPasswordError("");
      window.open(PLAYBOOK_LINK, "_blank", "noopener,noreferrer");
      return;
    }
    setPasswordError("Incorrect password. Please try again.");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent background page scrolling when modal window is open/active
  React.useEffect(() => {
    if (activeStageDetail !== null || showPasswordModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeStageDetail, showPasswordModal]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePos({
            x: (e.clientX / window.innerWidth - 0.5) * 2,
            y: (e.clientY / window.innerHeight - 0.5) * 2,
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`adopt-page-wrapper selection:bg-indigo-500 selection:text-white relative ${isDark ? "dark" : ""}`}>
      {/* ── CONTINUOUS FLOWING MOODBOARD GRADIENT ATMOSPHERE (FULL PAGE) ─ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Top Hero Glows: Pastel Mint/Cyan + Iris Violet/Lilac + Strawberry Pink */}
        <div className={`absolute -top-24 -left-20 w-[900px] h-[900px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-br from-cyan-500/22 via-sky-600/15 to-transparent"
            : "bg-gradient-to-br from-cyan-200/40 via-sky-100/25 to-transparent"
        }`} />
        <div className={`absolute -top-10 right-0 w-[850px] h-[850px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-bl from-pink-500/20 via-purple-600/22 to-transparent"
            : "bg-gradient-to-bl from-pink-200/35 via-purple-200/25 to-transparent"
        }`} />
        <div className={`absolute top-[450px] left-[25%] w-[700px] h-[550px] rounded-full blur-[130px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-tr from-violet-600/22 via-fuchsia-600/16 to-transparent"
            : "bg-gradient-to-tr from-violet-200/25 via-fuchsia-100/20 to-transparent"
        }`} />

        {/* Section 2 (Core Problem) Flow */}
        <div className={`absolute top-[1000px] -left-10 w-[850px] h-[800px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-transparent"
            : "bg-gradient-to-r from-blue-200/30 via-indigo-100/20 to-transparent"
        }`} />
        <div className={`absolute top-[1350px] -right-10 w-[900px] h-[850px] rounded-full blur-[150px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-l from-pink-600/22 via-rose-600/16 to-transparent"
            : "bg-gradient-to-l from-pink-200/35 via-rose-100/20 to-transparent"
        }`} />

        {/* Section 3 (5 Stages) Flow */}
        <div className={`absolute top-[1900px] left-[5%] w-[950px] h-[800px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-br from-cyan-500/22 via-sky-600/15 to-transparent"
            : "bg-gradient-to-br from-cyan-200/35 via-sky-100/25 to-transparent"
        }`} />
        <div className={`absolute top-[2300px] right-[5%] w-[900px] h-[800px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-bl from-purple-600/25 via-pink-600/20 to-transparent"
            : "bg-gradient-to-bl from-purple-200/35 via-pink-200/25 to-transparent"
        }`} />

        {/* Section 4 & 5 (Case Study & AdoptIQ) Flow */}
        <div className={`absolute top-[2900px] -left-20 w-[950px] h-[900px] rounded-full blur-[150px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-tr from-violet-600/24 via-sky-600/15 to-transparent"
            : "bg-gradient-to-tr from-violet-200/30 via-sky-100/25 to-transparent"
        }`} />
        <div className={`absolute top-[3500px] right-0 w-[950px] h-[850px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-l from-pink-600/24 via-purple-600/18 to-transparent"
            : "bg-gradient-to-l from-pink-200/35 via-purple-100/25 to-transparent"
        }`} />
        <div className={`absolute top-[4100px] left-[10%] w-[900px] h-[750px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-r from-cyan-600/22 via-indigo-600/18 to-transparent"
            : "bg-gradient-to-r from-cyan-200/30 via-indigo-100/20 to-transparent"
        }`} />
      </div>

      {/* ── TOP STICKY NAVIGATION BAR ─────────────────────────────────── */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 ${
        isDark ? "bg-[#030712]/80 border-b border-white/10 shadow-sm" : "bg-white/70 border-b border-slate-200/40"
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Back to Portfolio */}
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-all shadow-xs cursor-pointer ${
                  isDark
                    ? "text-white bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25"
                    : "text-slate-700 bg-white/90 hover:bg-white border border-slate-200/90 hover:border-slate-300"
                }`}
              >
                ← Portfolio
              </button>
            )}
          </div>

          {/* Center Nav Links */}
          <nav className={`hidden md:flex items-center gap-8 text-[14px] font-medium transition-colors ${
            isDark ? "text-slate-300" : "text-[#475569]"
          }`}>
            <a href="#problem" className={`transition-colors py-1 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-[#4344fa]"}`}>The Problem</a>
            <a href="#playbook-stages" className={`transition-colors py-1 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-[#4344fa]"}`}>5 Stages</a>
            <a href="#case-study" className={`transition-colors py-1 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-[#4344fa]"}`}>Copilot Case Study</a>
            <a href="#adoptiq" className={`transition-colors py-1 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-[#4344fa]"}`}>AdoptIQ Engine</a>
          </nav>

          {/* Right: Apple-Style Dark/Light Theme Mode Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 ${
                isDark
                  ? "bg-white/10 text-white border-white/15 hover:bg-white/18 hover:border-white/25"
                  : "bg-white/90 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300"
              }`}
              aria-label="Toggle Theme Mode"
            >
              {isDark ? (
                <>
                  <span className="text-amber-300 text-sm">☀️</span>
                  <span className="hidden sm:inline">Light Mode</span>
                </>
              ) : (
                <>
                  <span className="text-indigo-400 text-sm">🌙</span>
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── SECTION 1: HERO (SEAMLESS ATMOSPHERE) ────────────────────── */}
      <section
        id="hero"
        className="relative z-10 min-h-[92vh] lg:min-h-[98vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-transparent"
      >
        {/* Background Visual Asset: Fixed 8K 3D Translucent Waves & Glass Play Prism (Sticks to Screen on Scroll) */}
        <div
          className="fixed top-0 left-0 w-full h-screen pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end"
          style={{
            opacity: Math.max(0, 1 - scrollY / 900),
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        >
          {/* Multi-axis 3D Gyroscope Prism Container */}
          <div
            className="w-full h-full will-change-transform transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${50 + mousePos.x * 20}px, ${mousePos.y * 14}px, 0) scale(1.05) perspective(1000px) rotateY(${mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 3}deg)`,
              transformOrigin: "78% 50%",
            }}
          >
            <img
              src={isDark ? `${import.meta.env.BASE_URL}IMG/adopt_hero_glass_bg_Dark.png` : `${import.meta.env.BASE_URL}IMG/adopt_hero_glass_bg.jpg`}
              alt="ADOPT 8K 3D Glass Artwork"
              className="w-full h-full object-cover object-[80%_center] lg:object-[78%_center] opacity-95 transition-opacity duration-700 animate-hero-float scale-105"
            />
          </div>

          {/* Floating Atmospheric Sparkle Orbs with Mouse Gyroscope */}
          <div
            className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400/30 to-violet-400/40 blur-xl will-change-transform transition-transform duration-300"
            style={{
              transform: `translate3d(${mousePos.x * -28}px, ${mousePos.y * -20}px, 0)`,
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400/25 to-purple-400/35 blur-2xl will-change-transform transition-transform duration-300"
            style={{
              transform: `translate3d(${mousePos.x * 22}px, ${mousePos.y * 18}px, 0)`,
            }}
          />

          {/* Seamless luminous ambient gradient overlay on the left to perfectly integrate text */}
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-all duration-700"
            style={{
              background: isDark
                ? "linear-gradient(to right, rgba(3, 7, 18, 0.98) 0%, rgba(3, 7, 18, 0.88) 32%, rgba(3, 7, 18, 0.45) 55%, transparent 80%)"
                : "linear-gradient(to right, rgba(243, 248, 254, 0.98) 0%, rgba(243, 248, 254, 0.85) 32%, rgba(243, 248, 254, 0.45) 52%, transparent 78%)"
            }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10 my-auto">
          {/* Left Text Column */}
          <div
            className="max-w-2xl text-left will-change-transform transition-transform duration-200"
            style={{
              transform: `translate3d(${mousePos.x * -6}px, ${mousePos.y * -4}px, 0)`,
            }}
          >
            {/* Eyebrow Badge */}
            <div className="mb-4">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-2xs hover:scale-105 transition-transform cursor-default ${
                isDark ? "bg-white/8 border border-white/15 text-[#a5b4fc]" : "adopt-hero-badge"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1] animate-pulse">✦</span>
                <span>THE ADOPT FRAMEWORK</span>
              </div>
            </div>

            {/* Main Headline with Signature Cobalt-to-Purple Gradient */}
            <h1 className="text-[68px] sm:text-[84px] lg:text-[96px] font-black tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] leading-[0.92] mb-4 font-sans inline-block">
              ADOPT
            </h1>

            {/* Sub-headline */}
            <h2 className={`text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-tight leading-[1.25] mb-4 transition-colors ${
              isDark ? "text-white" : "text-[#1e293b]"
            }`}>
              The behavioral framework I built to scale AI adoption.
            </h2>

            {/* Description */}
            <p className={`text-[14px] sm:text-[16px] leading-[1.6] max-w-[540px] mb-7 font-normal transition-colors ${
              isDark ? "text-slate-400" : "text-[#64748b]"
            }`}>
              I created ADOPT from first principles to help product teams and organizations understand why AI adoption stalls—and design the behavioral path from awareness to sustained use.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExplorePlaybook || (() => scrollTo("playbook-stages"))}
                className="adopt-hero-btn-primary group"
              >
                <span>Explore the Framework</span>
                <span className="adopt-btn-circle-arrow">
                  <ArrowRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
                </span>
              </button>

              <button
                onClick={() => {
                  setPasswordInput("");
                  setPasswordError("");
                  setShowPasswordModal(true);
                }}
                className={`rounded-full px-6 py-3 font-semibold text-[15px] cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm ${
                  isDark
                    ? "bg-white/8 hover:bg-white/15 text-white border border-white/18"
                    : "adopt-hero-btn-secondary"
                }`}
              >
                <span>See the Case Study</span>
              </button>
            </div>
          </div>

          {/* Credibility Metric Bar with Differential Layer Parallax */}
          <div
            className="pt-4 relative z-10 will-change-transform transition-transform duration-200"
            style={{
              transform: `translate3d(0, ${scrollY * -0.1}px, 0)`,
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
              {/* Stat 1: 1M Users */}
              <div className={`group cursor-default transition-all ${
                isDark ? "flex items-center gap-3.5 p-3 rounded-2xl bg-[#0b101e]/85 backdrop-blur-xl border border-white/10 shadow-sm" : "flex items-center gap-3"
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border group-hover:scale-110 transition-transform ${
                  isDark ? "bg-purple-950/70 border-purple-500/30 text-purple-400" : "bg-[#f3f0fe]/90 border-purple-100/50 text-[#6d28d9]"
                }`}>
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>1M</div>
                  <div className={`text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>Users</div>
                </div>
              </div>

              {/* Stat 2: 5-stage framework */}
              <div className={`group cursor-default transition-all ${
                isDark ? "flex items-center gap-3.5 p-3 rounded-2xl bg-[#0b101e]/85 backdrop-blur-xl border border-white/10 shadow-sm" : "flex items-center gap-3"
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border group-hover:scale-110 transition-transform ${
                  isDark ? "bg-sky-950/70 border-sky-500/30 text-sky-400" : "bg-[#e8f1ff]/90 border-sky-100/50 text-[#2563eb]"
                }`}>
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>5-stage</div>
                  <div className={`text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>Framework</div>
                </div>
              </div>

              {/* Stat 3: 300K -> 1M growth */}
              <div className={`group cursor-default transition-all ${
                isDark ? "flex items-center gap-3.5 p-3 rounded-2xl bg-[#0b101e]/85 backdrop-blur-xl border border-white/10 shadow-sm" : "flex items-center gap-3"
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border group-hover:scale-110 transition-transform ${
                  isDark ? "bg-rose-950/70 border-rose-500/30 text-rose-400" : "bg-[#fef2f2]/90 border-rose-100/50 text-[#e11d48]"
                }`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>300K → 1M</div>
                  <div className={`text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>Copilot in W365</div>
                </div>
              </div>

              {/* Stat 4: Behavior-first */}
              <div className={`group cursor-default transition-all ${
                isDark ? "flex items-center gap-3.5 p-3 rounded-2xl bg-[#0b101e]/85 backdrop-blur-xl border border-white/10 shadow-sm" : "flex items-center gap-3"
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border group-hover:scale-110 transition-transform ${
                  isDark ? "bg-emerald-950/70 border-emerald-500/30 text-emerald-400" : "bg-[#ecfdf5]/90 border-emerald-100/50 text-[#059669]"
                }`}>
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>Behavior-first</div>
                  <div className={`text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>by design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CORE PROBLEM (FULL-WIDTH PARALLAX CENTERPIECE) ──── */}
      <section
        id="problem"
        className="w-full min-h-[100vh] lg:min-h-[105vh] relative z-20 py-16 lg:py-24 overflow-hidden flex items-center justify-center bg-transparent"
      >
        {/* Full-Bleed Parallax Iceberg Artwork Background */}
        <div
          className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden"
          style={{
            maskImage: isDark
              ? "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)"
              : "linear-gradient(to bottom, black 0%, black 75%, transparent 96%)",
            WebkitMaskImage: isDark
              ? "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)"
              : "linear-gradient(to bottom, black 0%, black 75%, transparent 96%)",
          }}
        >
          <div
            className="w-full h-full absolute inset-0 will-change-transform transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `translate3d(${mousePos.x * 8}px, ${(scrollY - 500) * -0.035 + mousePos.y * 6}px, 0) perspective(1200px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 1.5}deg)`,
            }}
          >
            <img
              src={isDark ? `${import.meta.env.BASE_URL}IMG/adopt_iceberg_bg.jpg` : `${import.meta.env.BASE_URL}IMG/adopt_iceberg_light_bg.jpg`}
              alt="AI Adoption Iceberg Analogy"
              className={`w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 ${
                isDark ? "opacity-100 scale-100 sm:scale-105" : "opacity-95 mix-blend-multiply"
              }`}
            />
          </div>
        </div>

        {/* Full-Width Centered Content Container */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10 my-auto flex flex-col justify-between min-h-[640px]">
          {/* Top Row (Above Water / Upper Content Area) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Top Left: Badge, Headline & Context */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-2xs ${
                  isDark ? "bg-purple-950/50 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]" : "bg-[#f3f0fe] border border-[#e0e7ff] text-[#6366f1]"
                }`}>
                  <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
                  <span>THE CORE PROBLEM</span>
                </div>
              </div>

              <h2 className={`text-[42px] sm:text-[50px] lg:text-[56px] font-black tracking-[-0.035em] leading-[1.05] mb-4 font-sans ${
                isDark ? "text-white" : "text-[#0a0e1a]"
              }`}>
                AI adoption is not<br />
                a feature problem.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
                  It’s a behavior<br className="hidden sm:inline" /> problem.
                </span>
              </h2>

              <p className={`text-[14px] sm:text-[15px] leading-relaxed max-w-[420px] font-normal mb-8 ${
                isDark ? "text-slate-400" : "text-[#64748b]"
              }`}>
                Even powerful products sit in limbo when they collide with familiar habits, uncertainty, and inertia.
              </p>
            </div>

            {/* Top Right: ABOVE THE SURFACE Callout Card with Sonar Beacon & Interactive 3D Tilt */}
            <div className="lg:col-span-6 flex justify-start lg:justify-end">
              <div
                className={`relative rounded-[22px] p-5 w-full max-w-[320px] text-left lg:-translate-x-[40px] mt-2 lg:mt-2 animate-adopt-float-1 transition-all duration-300 hover:scale-[1.03] group cursor-default ${
                  isDark
                    ? "bg-[#0b101e]/85 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-purple-400/40"
                    : "bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)]"
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 3.5}deg)`,
                }}
              >
                {/* Connecting Line to Mountain Peak with Pulsing Sonar Beacon */}
                <div className="hidden lg:block absolute -left-16 top-7 w-16 h-8 pointer-events-none">
                  {/* Glowing Radar Sonar Ping Node */}
                  <div className="absolute left-0 top-[25px] w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#a855f7] animate-adopt-sonar" />
                  <svg className="w-full h-full" viewBox="0 0 64 32" fill="none">
                    <path d="M64 10 L 22 10 L 0 28" stroke={isDark ? "#a855f7" : "#a5b4fc"} strokeWidth="1.4" className="animate-adopt-dash" />
                    <circle cx="0" cy="28" r="3.5" fill={isDark ? "#a855f7" : "#6366f1"} />
                    <circle cx="0" cy="28" r="6" stroke={isDark ? "#c084fc" : "#c7d2fe"} strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>

                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform ${
                    isDark
                      ? "bg-purple-950/80 border border-purple-500/40 text-purple-300"
                      : "bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] border border-[#c7d2fe] text-[#6366f1]"
                  }`}>
                    <Mountain className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className={`text-[13px] font-extrabold tracking-wider uppercase ${
                      isDark ? "text-white" : "text-[#0f172a]"
                    }`}>
                      ABOVE THE SURFACE
                    </div>
                    <div className={`text-[12px] font-medium ${
                      isDark ? "text-slate-400" : "text-[#64748b]"
                    }`}>
                      What tools prioritize
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pl-1">
                  {[
                    "Advanced capabilities",
                    "Continuous innovation",
                    "Feature-rich roadmaps",
                    "Enterprise-grade security",
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-2.5 text-[13px] font-medium transition-colors ${
                      isDark ? "text-slate-300 hover:text-white" : "text-[#334155] hover:text-[#0f172a]"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isDark ? "bg-[#38bdf8] shadow-[0_0_6px_rgba(56,189,248,0.8)]" : "bg-[#6366f1]"
                      }`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row (Below Water / Lower Content Area) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-12">
            {/* Bottom Left: 4 Checkmark Bullet Items with Interactive Micro-Slide */}
            <div className="lg:col-span-6 space-y-4 max-w-[440px] text-left">
              {[
                "Users don't resist products.",
                "They resist changing routines.",
                "Better technology does not automatically create behavior change.",
                "Sustainable adoption starts with human behavior.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 group cursor-default transition-all duration-300 hover:translate-x-1.5"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isDark
                      ? "bg-[#1e1b4b] border border-[#6366f1]/50 text-[#a5b4fc] shadow-[0_0_12px_rgba(99,102,241,0.3)] group-hover:border-purple-400"
                      : "bg-[#f5f3ff] border border-[#ddd6fe] text-[#7c3aed] shadow-2xs group-hover:bg-[#ede9fe] group-hover:border-[#c4b5fd] group-hover:shadow-[0_0_12px_rgba(124,58,237,0.3)]"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className={`text-[14px] sm:text-[15px] font-medium leading-normal transition-colors flex-1 ${
                    isDark ? "text-slate-200 group-hover:text-white" : "text-[#1e293b] group-hover:text-[#0f172a]"
                  }`}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Right: BELOW THE SURFACE Callout Card with Sonar Beacon & Interactive 3D Tilt */}
            <div className="lg:col-span-6 flex justify-start lg:justify-end">
              <div
                className={`relative rounded-[22px] p-5 w-full max-w-[320px] text-left lg:-translate-x-[40px] mb-2 animate-adopt-float-2 transition-all duration-300 hover:scale-[1.03] group cursor-default ${
                  isDark
                    ? "bg-[#0b101e]/85 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-purple-400/40"
                    : "bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)]"
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 3.5}deg)`,
                }}
              >
                {/* Connecting Line to Submerged Iceberg with Pulsing Sonar Beacon */}
                <div className="hidden lg:block absolute -left-16 top-7 w-16 h-4 pointer-events-none">
                  {/* Glowing Radar Sonar Ping Node */}
                  <div className="absolute left-0 top-[8px] w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#38bdf8] animate-adopt-sonar" />
                  <svg className="w-full h-full" viewBox="0 0 64 16" fill="none">
                    <path d="M64 8 L 0 8" stroke={isDark ? "#38bdf8" : "#38bdf8"} strokeWidth="1.4" className="animate-adopt-dash" />
                    <circle cx="0" cy="8" r="3.5" fill="#38bdf8" />
                    <circle cx="0" cy="8" r="6" stroke="#7dd3fc" strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>

                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform ${
                    isDark
                      ? "bg-purple-950/80 border border-purple-500/40 text-purple-300"
                      : "bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] border border-[#c7d2fe] text-[#6366f1]"
                  }`}>
                    <Lock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className={`text-[13px] font-extrabold tracking-wider uppercase ${
                      isDark ? "text-white" : "text-[#0f172a]"
                    }`}>
                      BELOW THE SURFACE
                    </div>
                    <div className={`text-[12px] font-medium ${
                      isDark ? "text-slate-400" : "text-[#64748b]"
                    }`}>
                      What tools adoption needs
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pl-1">
                  {[
                    "Familiar habits",
                    "Fear of change",
                    "Unclear personal value",
                    "Low motivation to switch",
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-2.5 text-[13px] font-medium transition-colors ${
                      isDark ? "text-slate-300 hover:text-white" : "text-[#334155] hover:text-[#0f172a]"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isDark ? "bg-[#38bdf8] shadow-[0_0_6px_rgba(56,189,248,0.8)]" : "bg-[#6366f1]"
                      }`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 5 STAGES OF THE ADOPT PLAYBOOK ─────────────────── */}
      <section
        id="playbook-stages"
        className="py-14 lg:py-22 relative overflow-hidden bg-transparent"
      >
        {/* Subtle Ambient Micro-Sparkles floating in continuous atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <span className="absolute top-10 left-[16%] text-cyan-400/45 text-sm select-none animate-pulse">✦</span>
          <span className="absolute top-24 left-[28%] text-sky-400/35 text-xs select-none">⋆</span>
          <span className="absolute top-14 right-[24%] text-pink-400/45 text-sm select-none animate-pulse" style={{ animationDelay: "1s" }}>✦</span>
          <span className="absolute top-8 right-[10%] text-purple-400/45 text-base select-none animate-pulse" style={{ animationDelay: "1.5s" }}>✧</span>
          <span className="absolute bottom-16 left-[22%] text-teal-400/35 text-xs select-none">⋆</span>
          <span className="absolute bottom-20 right-[32%] text-fuchsia-400/40 text-xs select-none animate-pulse" style={{ animationDelay: "0.5s" }}>✦</span>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
            {/* Left Header */}
            <div className="lg:col-span-7">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[
                  { label: "THE FRAMEWORK", dot: "bg-[#38bdf8]" },
                  { label: "BEHAVIORAL", dot: "bg-[#0284c7]" },
                  { label: "EXPERIMENTAL", dot: "bg-[#f43f5e]" },
                  { label: "SYSTEMIC", dot: "bg-[#8b5cf6]" },
                  { label: "SCALABLE", dot: "bg-[#f59e0b]" },
                ].map((cat, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-2xs ${
                      isDark
                        ? "bg-white/8 backdrop-blur-md border border-white/12 text-slate-200"
                        : "bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-700"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                    {cat.label}
                  </span>
                ))}
              </div>

              <h2 className={`text-[44px] sm:text-[52px] lg:text-[58px] font-black tracking-[-0.035em] leading-[1.04] mb-4 font-sans ${
                isDark ? "text-white" : "text-[#0a0e1a]"
              }`}>
                The 5 Stages of the<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899]">
                  ADOPT Framework
                </span>
              </h2>
              <p className={`text-[16px] sm:text-[17px] font-normal leading-relaxed mb-6 ${
                isDark ? "text-slate-400" : "text-[#64748b]"
              }`}>
                A behavioral journey that moves users from discovery to advocacy. Click any card below to launch the circular 3D experience view.
              </p>

              {/* Exploration Hint Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-2xs ${
                  isDark
                    ? "bg-white/8 backdrop-blur-md border border-white/12 text-slate-300"
                    : "bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-700"
                }`}>
                  <span className="text-[#a855f7] font-bold">✦</span>
                  <span>Click any card to explore full behavioral framework & tactics</span>
                </div>
              </div>
            </div>

            {/* Right: Journey Insight Card */}
            <div className="lg:col-span-5 flex justify-end">
              <div className={`rounded-[28px] p-6 flex items-center justify-between gap-6 max-w-[420px] w-full ${
                isDark
                  ? "bg-[#0b101e]/85 backdrop-blur-xl border border-white/12 shadow-[0_15px_35px_-8px_rgba(0,0,0,0.5)]"
                  : "bg-white/92 backdrop-blur-xl border border-slate-200/70 shadow-[0_15px_35px_-8px_rgba(15,23,42,0.05)]"
              }`}>
                <div>
                  <div className="flex items-center gap-1.5 text-[#a855f7] text-[11px] font-bold tracking-wider uppercase mb-1.5">
                    <span>📈</span>
                    <span>JOURNEY INSIGHT</span>
                  </div>
                  <p className={`text-[14px] font-medium leading-snug ${
                    isDark ? "text-slate-200" : "text-[#334155]"
                  }`}>
                    People rarely change.<br />
                    Design for where they are,<br />
                    not where you want them to be.
                  </p>
                </div>

                {/* Upward Curve Mini Graph */}
                <div className={`w-[80px] h-[80px] rounded-[20px] flex items-center justify-center p-2 shrink-0 shadow-2xs ${
                  isDark
                    ? "bg-[#141a2e] border border-purple-500/30"
                    : "bg-gradient-to-tr from-[#f5f3ff] via-[#fdf4ff] to-[#fff1f2] border border-[#f3e8ff]"
                }`}>
                  <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M6 48C18 48 24 38 34 26C42 16 48 10 54 8"
                      stroke="url(#insight_grad_full)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="insight_grad_full" x1="6" y1="48" x2="54" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#f43f5e" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── THE 5 STAGES OF THE ADOPT PLAYBOOK (5 GLASS CARDS GRID ON TRANSPARENT BG) ─ */}
          <div className="relative pt-4 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 relative z-10 items-stretch">
              {STAGES_DATA.map((stage, idx) => {
                const glowColors: Record<string, { light: string; core: string }> = {
                  aware: { light: "rgba(56, 189, 248, 0.65)", core: "rgba(2, 132, 199, 0.85)" },
                  desire: { light: "rgba(251, 113, 133, 0.65)", core: "rgba(244, 63, 94, 0.85)" },
                  open: { light: "rgba(167, 139, 250, 0.65)", core: "rgba(139, 92, 246, 0.85)" },
                  proficient: { light: "rgba(251, 191, 36, 0.65)", core: "rgba(245, 158, 11, 0.85)" },
                  transform: { light: "rgba(52, 211, 153, 0.65)", core: "rgba(16, 185, 129, 0.85)" },
                };
                const currentGlow = glowColors[stage.id] || { light: "rgba(99, 102, 241, 0.6)", core: "rgba(79, 70, 229, 0.8)" };

                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStageDetail(idx)}
                    onPointerMove={(e) => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const hw = rect.width / 2;
                      const hh = rect.height / 2;
                      const ratioX = (e.clientX - (rect.left + hw)) / hw;
                      const ratioY = (e.clientY - (rect.top + hh)) / hh;
                      card.style.setProperty("--ratio-x", `${ratioX}`);
                      card.style.setProperty("--ratio-y", `${ratioY}`);
                    }}
                    onPointerLeave={(e) => {
                      const card = e.currentTarget;
                      card.style.setProperty("--ratio-x", "0");
                      card.style.setProperty("--ratio-y", "0");
                    }}
                    className="stage-rollover-card flex flex-col h-full cursor-pointer group transition-all duration-300 relative"
                  >
                    {/* 3D Rollover Motion Inner Container */}
                    <div className="stage-rollover-card-inner relative w-full flex flex-col items-center">
                      {/* Glass Card (Scaled 10% smaller) */}
                      <div className="relative w-[90%] rounded-[26px] sm:rounded-[30px] overflow-hidden group-hover:drop-shadow-[0_20px_45px_rgba(67,68,250,0.25)] transition-all duration-300 flex items-center justify-center z-10">
                        <img
                          src={stage.cardImg}
                          alt={`ADOPT Stage ${stage.num}: ${stage.title} - ${stage.question}`}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>

                      {/* ── GLASSY BASE CAUSTIC LIGHT GLOW (TRANSPARENT BACKGROUND) ── */}
                      <div className="relative w-[90%] flex flex-col items-center justify-center -mt-4 sm:-mt-5 pointer-events-none z-0">
                        {/* 1. Core Intense Colored Glass Light Contact Point */}
                        <div
                          className="w-[72%] h-3.5 sm:h-4.5 rounded-[100%] blur-[5px] transition-all duration-500 group-hover:scale-115 group-hover:blur-[7px] opacity-85 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(ellipse at center, ${currentGlow.core} 0%, ${currentGlow.light} 55%, transparent 80%)`,
                            boxShadow: `0 3px 18px ${currentGlow.light}`,
                          }}
                        />

                        {/* 2. Soft Ambient Caustic Bloom */}
                        <div
                          className="w-[85%] h-5 sm:h-7 rounded-[100%] blur-lg -mt-3 transition-all duration-500 group-hover:scale-120 opacity-50 group-hover:opacity-85"
                          style={{
                            background: `radial-gradient(ellipse at center, ${currentGlow.light} 0%, transparent 70%)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── AUTHENTIC FROSTED GLASS STAGE DEEP-DIVE MODAL ──────── */}
          {activeStageDetail !== null && (
            <div
              className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in ${
                isDark ? "bg-black/75 backdrop-blur-md" : "bg-white/20"
              }`}
              onClick={() => setActiveStageDetail(null)}
            >
              {/* Frosted Glass Floating Card Container (Only Card Area is Blurred) */}
              <div
                className={`relative w-full max-w-[1400px] max-h-[92vh] overflow-y-auto adopt-custom-scrollbar p-6 sm:p-10 lg:p-12 text-left z-10 ${
                  isDark ? "bg-[#050814]/92 backdrop-blur-3xl border border-white/15 rounded-[36px] sm:rounded-[44px] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.8)]" : "frosted-glass-modal"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar: Minimalist Frosted Glass Close Button */}
                <div className="flex items-center justify-between pb-3 mb-4 relative z-20">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase ${
                    isDark ? "bg-white/10 border border-white/15" : "frosted-glass-pill"
                  }`} style={{ color: STAGES_DATA[activeStageDetail].color }}>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: STAGES_DATA[activeStageDetail].color }} />
                    <span>STAGE DEEP DIVE • {STAGES_DATA[activeStageDetail].pillar}</span>
                  </div>

                  <button
                    onClick={() => setActiveStageDetail(null)}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer ${
                      isDark ? "bg-white/10 hover:bg-white/20 text-white border border-white/15" : "frosted-glass-pill text-slate-700 hover:text-slate-950"
                    }`}
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* ── Main Split Content: Left Circular 3D Ring + Center/Right Rich Details ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Column: Pure 3D Revolving Character Carousel */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-0 sm:p-2 bg-transparent border-0">
                    {/* Compact 3D Viewport */}
                    <div className="adopt-3d-compact-viewport">
                      {/* Dynamic Colored Ground Caustic Shadow */}
                      <div
                        className="adopt-3d-compact-ground-shadow"
                        style={{
                          background: `radial-gradient(ellipse at center, ${STAGES_DATA[activeStageDetail].color}40 0%, ${STAGES_DATA[activeStageDetail].color}15 40%, transparent 70%)`,
                        }}
                      />

                      {/* Left / Right Arrow Controls */}
                      <button
                        onClick={() =>
                          setActiveStageDetail((prev) =>
                            prev === null || prev === 0
                              ? STAGES_DATA.length - 1
                              : prev - 1
                          )
                        }
                        className={`absolute left-1 sm:left-2 z-40 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 ${
                          isDark ? "bg-[#0b101e]/90 text-white border border-white/20 hover:text-sky-400" : "bg-white/90 text-slate-700 border border-white hover:text-[#4344fa]"
                        }`}
                        aria-label="Previous Stage"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>

                      <button
                        onClick={() =>
                          setActiveStageDetail((prev) =>
                            prev === null || prev === STAGES_DATA.length - 1
                              ? 0
                              : prev + 1
                          )
                        }
                        className={`absolute right-1 sm:right-2 z-40 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 ${
                          isDark ? "bg-[#0b101e]/90 text-white border border-white/20 hover:text-sky-400" : "bg-white/90 text-slate-700 border border-white hover:text-[#4344fa]"
                        }`}
                        aria-label="Next Stage"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Rotating 3D Character Ring */}
                      <div
                        className="adopt-3d-compact-ring"
                        style={{
                          transform: `rotateX(-9deg) rotateY(${-activeStageDetail * 72}deg)`,
                        }}
                      >
                        {STAGES_DATA.map((stage, idx) => {
                          const diff = (idx - activeStageDetail + 5) % 5;
                          const normalizedDiff = diff > 2 ? diff - 5 : diff;
                          const isActive = normalizedDiff === 0;
                          const isNeighbor = Math.abs(normalizedDiff) === 1;

                          return (
                            <div
                              key={stage.id}
                              onClick={() => setActiveStageDetail(idx)}
                              className={`adopt-3d-compact-card-wrapper cursor-pointer flex flex-col items-center justify-center ${
                                isActive ? "z-30" : isNeighbor ? "z-20" : "z-10"
                              }`}
                              style={{
                                transform: `rotateY(${idx * 72}deg) translateZ(210px) scale(${
                                  isActive ? 1.22 : isNeighbor ? 0.88 : 0.68
                                })`,
                                opacity: isActive ? 1 : isNeighbor ? 0.75 : 0.28,
                                filter: isActive
                                  ? "drop-shadow(0 18px 30px rgba(0,0,0,0.4))"
                                  : isNeighbor
                                  ? "drop-shadow(0 8px 16px rgba(0,0,0,0.2)) blur(0.5px)"
                                  : "blur(2px)",
                              }}
                            >
                              {/* Pure 3D Character Illustration Floating in Space */}
                              <div className="w-full h-full flex flex-col items-center justify-center relative select-none">
                                {/* Floor Contact Shadow */}
                                {isActive && (
                                  <div className="absolute bottom-3 w-28 h-6 bg-slate-950/40 rounded-full blur-md -z-10" />
                                )}
                                <img
                                  src={stage.modalImg}
                                  alt={`${stage.title} Character`}
                                  className={`w-auto h-full max-h-full object-contain transition-transform duration-500 ${
                                    isActive
                                      ? "scale-105 drop-shadow-2xl"
                                      : "scale-90 hover:scale-95"
                                  }`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Center & Right Section: Rich Stage Details in Frosted Glass UI */}
                  <div className="lg:col-span-7 flex flex-col items-start justify-between">
                    {/* Header: Title & Tagline */}
                    <div className="w-full mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[44px] sm:text-[56px] font-black tracking-tight leading-none"
                          style={{ color: STAGES_DATA[activeStageDetail].color }}
                        >
                          {STAGES_DATA[activeStageDetail].title}
                        </span>
                      </div>

                      {/* Bold Tagline */}
                      <h3 className={`text-[20px] sm:text-[24px] font-black tracking-tight leading-tight max-w-xl ${
                        isDark ? "text-white" : "text-[#0f172a]"
                      }`}>
                        {STAGES_DATA[activeStageDetail].tagline}
                      </h3>
                    </div>

                    {/* Explanatory Body Concept */}
                    <p className={`text-[15px] sm:text-[16px] leading-relaxed mb-6 font-medium max-w-3xl ${
                      isDark ? "text-slate-200" : "text-[#1e293b]"
                    }`}>
                      {STAGES_DATA[activeStageDetail].body}
                    </p>

                    {/* Quote Box with Frosted Glass Styling */}
                    <div className={`w-full p-5 rounded-[22px] mb-7 ${
                      isDark ? "bg-white/5 border border-white/10 text-white" : "frosted-glass-card text-[#0f172a]"
                    }`}>
                      <div className="text-[17px] sm:text-[19px] font-serif italic leading-snug">
                        “{STAGES_DATA[activeStageDetail].quote}”
                        <span className={`not-italic text-sm font-sans font-semibold ml-3 ${
                          isDark ? "text-slate-400" : "text-[#64748b]"
                        }`}>
                          — {STAGES_DATA[activeStageDetail].author}
                        </span>
                      </div>
                    </div>

                    {/* ── "THROUGH" Tactics & Channels Grid ── */}
                    <div className="w-full mb-7">
                      <div className={`text-[12px] font-black tracking-widest uppercase mb-3.5 ${
                        isDark ? "text-slate-400" : "text-[#475569]"
                      }`}>
                        T H R O U G H
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {STAGES_DATA[activeStageDetail].through.map((item, i) => (
                          <div
                            key={i}
                            className={`p-4.5 rounded-[20px] hover:-translate-y-0.5 transition-all flex flex-col items-start text-left ${
                              isDark ? "bg-white/5 border border-white/10 hover:bg-white/8 text-white" : "frosted-glass-card text-[#0f172a]"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div
                                className="w-2 h-2 rounded-full shrink-0 shadow-2xs"
                                style={{ backgroundColor: STAGES_DATA[activeStageDetail].color }}
                              />
                              <h4 className={`text-[14px] font-bold ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                                {item.title}
                              </h4>
                            </div>
                            <p className={`text-[13px] leading-relaxed font-normal ${
                              isDark ? "text-slate-300" : "text-[#475569]"
                            }`}>
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Principles Frosted Glass Footer Bar */}
                    <div className={`w-full p-4.5 rounded-[22px] text-[13px] sm:text-[14px] leading-relaxed ${
                      isDark ? "bg-white/5 border border-white/10 text-white" : "frosted-glass-card text-[#0f172a]"
                    }`}>
                      <strong
                        className="font-extrabold mr-1.5"
                        style={{ color: STAGES_DATA[activeStageDetail].color }}
                      >
                        Key Principles:
                      </strong>
                      <span className={isDark ? "text-slate-200" : "text-[#334155]"}>{STAGES_DATA[activeStageDetail].keyPrinciples}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Bottom Summary Ribbon (Concentric Radar + 5 Timeline Steps) ─ */}
          <div className={`mt-8 rounded-[26px] p-6 sm:p-7 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
            isDark ? "bg-[#0b101e]/85 backdrop-blur-xl border border-white/12" : "bg-white/92 backdrop-blur-xl border border-slate-200/70"
          }`}>
            {/* Left Radar and Text */}
            <div className={`lg:col-span-5 flex items-center gap-4 border-b lg:border-b-0 lg:border-r pb-5 lg:pb-0 lg:pr-6 ${
              isDark ? "border-white/10" : "border-slate-100"
            }`}>
              {/* Concentric Color Ring Icon */}
              <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-pink-400 shrink-0 flex items-center justify-center shadow-xs">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${isDark ? "bg-[#0b101e]" : "bg-white"}`}>
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-400 border-dashed animate-spin-slow flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`text-[16px] font-extrabold leading-snug ${
                  isDark ? "text-white" : "text-[#0f172a]"
                }`}>
                  Behavior changes in<br />
                  stages, not all at once.
                </h4>
                <p className={`text-[13px] mt-0.5 font-normal ${
                  isDark ? "text-slate-400" : "text-[#64748b]"
                }`}>
                  Swap the right support for the right mindset.
                </p>
              </div>
            </div>

            {/* Right 5 Steps Connected by Dotted Path */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3 relative">
              {[
                { icon: "📣", title: "Signal", desc: "Spot early signals for action.", color: "text-[#38bdf8]" },
                { icon: "❤️", title: "Emotional Pull", desc: "Tap into emotional motivation.", color: "text-[#f43f5e]" },
                { icon: "🚀", title: "First Action", desc: "Make the first step easy.", color: "text-[#8b5cf6]" },
                { icon: "👑", title: "Reinforcement", desc: "Help habits and confidence grow.", color: "text-[#f59e0b]" },
                { icon: "🌟", title: "Identity Shift", desc: "Turn users into advocates.", color: "text-[#10b981]" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-start p-1.5 relative">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[14px]">{step.icon}</span>
                    <span className={`text-[12px] font-bold ${isDark ? "text-white" : "text-[#0f172a]"}`}>{step.title}</span>
                  </div>
                  <span className={`text-[11px] leading-tight ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL SECTION: CONNECTED SHOWCASE, CTA BANNER & FOOTER ── */}
      {/* (APPLIED PLAYBOOK, AI ADOPTION ENGINE, CLOSING CTA & FOOTER) */}
      <section
        id="case-study"
        className="pt-14 sm:pt-20 lg:pt-24 pb-0 relative overflow-hidden bg-transparent"
      >
        {/* Anchors for navigation links */}
        <div id="adoptiq" className="absolute -top-24 left-0 pointer-events-none" />
        <div id="impact" className="absolute -top-24 left-0 pointer-events-none" />

        {/* ── SECTION 4: APPLIED PLAYBOOK (Scaled Copilot Adoption Case Study) ── */}
        <div id="case-study" className="relative w-full mb-16 sm:mb-20 lg:mb-24 pt-2">
          <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Free-Floating 3D Copilot Playbook Visual (Shifted Left) */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start lg:-translate-x-6 pointer-events-auto select-none">
                <img
                  src={copilotPlaybookImg}
                  alt="Scaled Copilot Adoption AI Adoption Framework 3D Dashboard"
                  className="w-full h-auto max-w-[660px] object-contain drop-shadow-[0_25px_60px_rgba(139,92,246,0.35)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Right: Narrative, Headlines, Metrics & Case Study CTA (Shifted Left) */}
              <div className="lg:col-span-6 flex flex-col items-start text-left pl-0 lg:-translate-x-4">
                {/* Eyebrow Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-3 shadow-2xs ${
                  isDark ? "bg-pink-500/15 border border-pink-500/30 text-pink-400" : "bg-[#fdf2f8] border border-[#fbcfe8] text-[#db2777]"
                }`}>
                  <span className="text-[12px]">✦</span>
                  <span>APPLIED FRAMEWORK</span>
                </div>

                {/* Brand Title with Exact Same Cobalt-to-Purple Gradient */}
                <h2 className="text-[44px] sm:text-[52px] lg:text-[58px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] tracking-[-0.035em] leading-[1.04] mb-2 font-sans">
                  Scaled Copilot Adoption
                </h2>

                {/* Sub-tagline */}
                <p className={`text-[15px] sm:text-[16px] font-semibold mb-4 tracking-tight ${
                  isDark ? "text-slate-400" : "text-[#64748b]"
                }`}>
                  Enterprise scale AI adoption case study
                </p>

                {/* Headline */}
                <h3 className={`text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15] mb-6 max-w-lg ${
                  isDark ? "text-white" : "text-[#0a0e1a]"
                }`}>
                  How the Adopt Framework drove awareness into repeat usage and advocacy
                </h3>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-lg mb-5">
                  <div className={`p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                    isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-pink-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#fbcfe8]"
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                    <div className={`text-[19px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                      935K → 3.4M
                    </div>
                    <div className={`text-[11px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>
                      Copilot MAU
                    </div>
                  </div>

                  <div className={`p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                    isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-sky-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#bfdbfe]"
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                    <div className={`text-[19px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                      33$ → 85$
                    </div>
                    <div className={`text-[11px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>
                      CAC Reduction 71%
                    </div>
                  </div>

                  <div className={`p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                    isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-purple-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#fbcfe8]"
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-[#ec4899]" />
                    <div className={`text-[19px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                      500K → 1.5M
                    </div>
                    <div className={`text-[11px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>
                      Telemetry MAU
                    </div>
                  </div>
                </div>

                {/* Featured Key Outcome Card (24% more Active Copilot days) */}
                <div className={`w-full max-w-lg p-3.5 sm:p-4 rounded-[22px] shadow-xs flex items-center gap-3.5 sm:gap-4 mb-7 transition-colors ${
                  isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-purple-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#ddd6fe]"
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-2xs ${
                    isDark ? "bg-purple-950/70 border border-purple-500/30 text-purple-400" : "bg-gradient-to-tr from-[#ede9fe] to-[#f5f3ff] border border-[#ddd6fe] text-[#7c3aed]"
                  }`}>
                    <TrendingUp className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className={`text-[20px] sm:text-[22px] font-black tracking-tight leading-tight ${
                      isDark ? "text-white" : "text-[#0f172a]"
                    }`}>
                      24% more
                    </span>
                    <span className={`text-[12.5px] sm:text-[13px] font-medium leading-snug ${
                      isDark ? "text-slate-300" : "text-[#475569]"
                    }`}>
                      Active Copilot daily & weekly MAU members
                    </span>
                  </div>
                </div>

                {/* CTA Button: Protected Figma Case Study */}
                <div className="pt-1 pb-3">
                  <button
                    onClick={() => {
                      setPasswordInput("");
                      setPasswordError("");
                      setShowPasswordModal(true);
                    }}
                    className="adopt-hero-btn-primary group"
                  >
                    <span>View Copilot Case Study</span>
                    <span className="adopt-btn-circle-arrow">
                      <ArrowRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 5: AI ADOPTION ENGINE (AdoptIQ.ai) ──────────────── */}
        <div id="adoptiq" className="relative w-full mb-16 sm:mb-20 lg:mb-24 pt-4 sm:pt-6">
          <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Free-Floating 3D SaaS Dashboard Visual (Shifted Left) */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start lg:-translate-x-6 pointer-events-auto select-none">
                <img
                  src={adoptIqImg}
                  alt="AdoptIQ.ai 3D Dashboard Engine at Work"
                  className="w-full h-auto max-w-[660px] object-contain drop-shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Right: Brand Title, Headline, Value Cards, Pipeline Pill & CTA (Shifted Left) */}
              <div className="lg:col-span-6 flex flex-col items-start text-left pl-0 lg:-translate-x-4">
                {/* Eyebrow Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-3 shadow-2xs ${
                  isDark ? "bg-purple-500/15 border border-purple-500/30 text-purple-400" : "bg-[#f5f3ff] border border-[#e0e7ff] text-[#7c3aed]"
                }`}>
                  <span className="text-[12px]">✦</span>
                  <span>AI ADOPTION ENGINE</span>
                </div>

                {/* Brand Title with Exact Same Cobalt-to-Purple Gradient */}
                <h2 className="text-[44px] sm:text-[52px] lg:text-[58px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] tracking-[-0.035em] leading-[1.04] mb-2 font-sans">
                  AdoptIQ.ai
                </h2>

                {/* Sub-tagline */}
                <p className={`text-[15px] sm:text-[16px] font-semibold mb-4 tracking-tight ${
                  isDark ? "text-slate-400" : "text-[#64748b]"
                }`}>
                  Independently designed and vibe-coded by Vikram
                </p>

                {/* Headline */}
                <h3 className={`text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15] mb-6 max-w-lg ${
                  isDark ? "text-white" : "text-[#0a0e1a]"
                }`}>
                  Turn your adoption problem into a clear UX action plan.
                </h3>

                {/* 4 Pipeline Flow Steps in Pill */}
                <div className={`w-full max-w-lg p-2.5 rounded-2xl shadow-xs flex items-center justify-between mb-5 ${
                  isDark ? "bg-[#0b101e]/90 border border-white/12 text-slate-300" : "bg-white border border-[#e2e8f0] text-[#334155]"
                }`}>
                  {[
                    { icon: "📋", label: "Plan" },
                    { icon: "🧠", label: "Diagnose" },
                    { icon: "🎯", label: "Prioritize" },
                    { icon: "🪄", label: "Generate" }
                  ].map((step, idx, arr) => (
                    <React.Fragment key={idx}>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[12px] font-bold ${
                        isDark ? "text-slate-200" : "text-[#334155]"
                      }`}>
                        <span className="text-[14px]">{step.icon}</span>
                        <span>{step.label}</span>
                      </div>
                      {idx < arr.length - 1 && <span className={isDark ? "text-slate-600 text-xs" : "text-slate-300 text-xs"}>→</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* 3 Core Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-lg mb-7">
                  <div className={`p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1.5 transition-colors ${
                    isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-indigo-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#c7d2fe]"
                  }`}>
                    <span className="text-xl">🧠</span>
                    <span className={`text-[11px] font-bold leading-snug ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                      Sentiment-to-Behavior Diagnosis
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1.5 transition-colors ${
                    isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-indigo-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#c7d2fe]"
                  }`}>
                    <span className="text-xl">🪄</span>
                    <span className={`text-[11px] font-bold leading-snug ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                      Predictive Contextual UX Interventions
                    </span>
                  </div>

                  <div className={`p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1.5 transition-colors ${
                    isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-indigo-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#c7d2fe]"
                  }`}>
                    <span className="text-xl">👥</span>
                    <span className={`text-[11px] font-bold leading-snug ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                      Effort-Free Roadmap Alignment
                    </span>
                  </div>
                </div>

                {/* CTA Button: Cobalt/Indigo Gradient Pill */}
                <div className="pt-1 pb-3">
                  <a
                    href="https://adoptiqai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="adopt-hero-btn-primary group text-decoration-none"
                  >
                    <span>Launch AdoptIQ.ai</span>
                    <span className="adopt-btn-circle-arrow">
                      <ArrowUpRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CLOSING CTA FOOTER CARD (Flush with Bottom Edge of UI) ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full mt-auto mb-0">
          <div
            className={`relative rounded-t-[28px] sm:rounded-t-[36px] rounded-b-none px-6 py-5 sm:px-10 sm:py-6 lg:px-12 lg:pt-6 lg:pb-3.5 overflow-hidden text-left ${
              isDark
                ? "border-t border-x border-purple-500/30 shadow-[0_-15px_50px_rgba(139,92,246,0.25)]"
                : "border-t border-x border-white/60 shadow-[0_-12px_40px_-8px_rgba(168,85,247,0.28)]"
            }`}
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 27, 75, 0.90) 50%, rgba(59, 7, 100, 0.96) 100%)"
                : "linear-gradient(105deg, #7888f8 0%, #9ca7fc 24%, #b79dfb 48%, #d896ea 74%, #f794ca 100%)",
            }}
          >
            {/* Elegant Soft Curved Wave Lines in Background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40 select-none"
              viewBox="0 0 1200 160"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-50 90 C 280 150, 680 20, 1250 110"
                stroke={isDark ? "#a855f7" : "white"}
                strokeWidth="1.5"
                strokeOpacity={isDark ? "0.45" : "0.65"}
                fill="none"
              />
              <path
                d="M-50 130 C 380 30, 780 160, 1250 50"
                stroke={isDark ? "#38bdf8" : "white"}
                strokeWidth="1.2"
                strokeOpacity={isDark ? "0.35" : "0.45"}
                fill="none"
              />
            </svg>

            {/* Glowing Atmosphere Nodes */}
            <div className={`absolute top-0 right-1/4 w-64 h-64 rounded-full blur-2xl pointer-events-none ${
              isDark ? "bg-purple-500/20" : "bg-white/15"
            }`} />
            <div className={`absolute bottom-0 left-1/3 w-64 h-64 rounded-full blur-2xl pointer-events-none ${
              isDark ? "bg-pink-500/20" : "bg-pink-300/20"
            }`} />

            {/* Main Action Content Row */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
              {/* Left Headline */}
              <div className="max-w-xl">
                <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight leading-[1.12]">
                  Design for behavior.<br className="hidden sm:inline" /> Build what lasts.
                </h2>
                <p className={`text-sm mt-1 font-normal ${isDark ? "text-slate-400" : "text-white/80"}`}>
                  Let's build adoption experiences that move people—not just ships.
                </p>
              </div>

              {/* Right Side: Center-Aligned Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
                {/* 1. Launch the Framework (Signature Blue Pill + Circular Arrow) */}
                <button
                  onClick={onExplorePlaybook || (() => scrollTo("playbook-stages"))}
                  className="adopt-hero-btn-primary group"
                >
                  <span>Launch the Framework</span>
                  <span className="adopt-btn-circle-arrow">
                    <ArrowRight className="w-4 h-4 text-[#3e38f5] stroke-[2.5]" />
                  </span>
                </button>

                {/* 2. Launch AdoptIQ.ai (Glossy White Pill + Purple Icon) */}
                <a
                  href="https://adoptiqai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 rounded-full font-bold text-[13px] shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 text-decoration-none group ${
                    isDark
                      ? "bg-white/10 hover:bg-white/18 text-white border border-white/20"
                      : "bg-white text-[#1e293b] hover:bg-slate-50"
                  }`}
                >
                  <span>Launch AdoptIQ.ai</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isDark ? "text-purple-400" : "text-[#8b5cf6]"
                  }`} />
                </a>
              </div>
            </div>

            {/* Integrated Attribution & Copyright Row Inside The Card */}
            <div className={`relative z-10 pt-3 mt-3.5 sm:mt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[11px] sm:text-[11.5px] ${
              isDark ? "border-white/10 text-slate-400" : "border-white/20 text-white/90"
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white tracking-wide">ADOPT</span>
                <span>is the blueprint for turning AI potential into human progress—at scale.</span>
              </div>
              <div>
                <span>Crafted with product passion by Vikram — all rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Protected Case Study Password Modal */}
      {showPasswordModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="playbook-password-title"
          className="fixed inset-0 z-[120] flex items-center justify-center px-6"
          style={{ background: "rgba(6, 9, 16, 0.72)", backdropFilter: "blur(6px)" }}
        >
          <form
            onSubmit={handlePasswordSubmit}
            className="w-full max-w-[420px] rounded-2xl border p-6 text-left"
            style={{
              background: "rgba(11, 14, 24, 0.94)",
              borderColor: "rgba(255,255,255,0.18)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
            }}
          >
            <h3
              id="playbook-password-title"
              style={{ color: "white", fontSize: "22px", fontWeight: 700, lineHeight: 1.2 }}
            >
              Enter password to open Case Study
            </h3>
            <p style={{ color: "rgba(255,255,255,0.68)", marginTop: "8px", fontSize: "14px", lineHeight: 1.6 }}>
              Access to this case study deck is protected.
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
              className="mt-4 w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
