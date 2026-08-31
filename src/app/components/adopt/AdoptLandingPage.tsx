import React, { useState, useRef } from "react";
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
import adoptIqDarkImg from "../../../assets/img/AdoptIQ_Dark.png";
import copilotPlaybookImg from "../../../assets/img/Scale Copilot.png";
import copilotPlaybookDarkImg from "../../../assets/img/Scale Copilot_Dark.png";
import awareCardImg from "../../../assets/img/Aware.png";
import awareCardDarkImg from "../../../assets/img/Aware_Dark.png";
import desireCardImg from "../../../assets/img/Desire.png";
import desireCardDarkImg from "../../../assets/img/Desire_Dark.png";
import openCardImg from "../../../assets/img/Open.png";
import openCardDarkImg from "../../../assets/img/Open_Dark.png";
import proficientCardImg from "../../../assets/img/Proficient.png";
import proficientCardDarkImg from "../../../assets/img/Proficient_Dark.png";
import transformCardImg from "../../../assets/img/Transform.png";
import transformCardDarkImg from "../../../assets/img/Transform_Dark.png";

import awareModalImg from "../../../assets/img/Aware 1.png";
import awareModalDarkImg from "../../../assets/img/Aware 1_Dark.png";
import desireModalImg from "../../../assets/img/Desire 1.png";
import desireModalDarkImg from "../../../assets/img/Desire 1_Dark.png";
import openModalImg from "../../../assets/img/Open 1.png";
import openModalDarkImg from "../../../assets/img/Open 1_Dark.png";
import proficientModalImg from "../../../assets/img/Proficient 1.png";
import proficientModalDarkImg from "../../../assets/img/Proficient 1_Dark.png";
import transformModalImg from "../../../assets/img/Transform 1.png";
import transformModalDarkImg from "../../../assets/img/Transform 1 _Dark.png";
import arrowImg from "../../../assets/img/Arrow.png";
import ballImg from "../../../assets/img/Ball.png";

interface AdoptLandingPageProps {
  onBack?: () => void;
  onExplorePlaybook?: () => void;
  onViewCaseStudy?: () => void;
  mode?: "dark" | "light";
  onToggleTheme?: () => void;
  initialMode?: "dark" | "light";
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
    cardDarkImg: awareCardDarkImg,
    modalImg: awareModalImg,
    modalDarkImg: awareModalDarkImg,
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
    cardDarkImg: desireCardDarkImg,
    modalImg: desireModalImg,
    modalDarkImg: desireModalDarkImg,
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
    cardDarkImg: openCardDarkImg,
    modalImg: openModalImg,
    modalDarkImg: openModalDarkImg,
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
    cardDarkImg: proficientCardDarkImg,
    modalImg: proficientModalImg,
    modalDarkImg: proficientModalDarkImg,
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
    cardDarkImg: transformCardDarkImg,
    modalImg: transformModalImg,
    modalDarkImg: transformModalDarkImg,
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
        title: "Cross-Team Playbooks",
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
  mode: controlledMode,
  onToggleTheme,
  initialMode = "dark",
}) => {
  const [internalMode, setInternalMode] = useState<"dark" | "light">(controlledMode || initialMode);
  const mode = controlledMode !== undefined ? controlledMode : internalMode;
  const isDark = mode === "dark";

  const handleToggleTheme = () => {
    if (onToggleTheme) {
      onToggleTheme();
    } else {
      setInternalMode((m) => (m === "dark" ? "light" : "dark"));
    }
  };

  const [scrollY, setScrollY] = useState(0);
  const [activeStageDetail, setActiveStageDetail] = useState<number | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showcaseSlide, setShowcaseSlide] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [activeMobileStage, setActiveMobileStage] = useState(0);
  const mobileStageSliderRef = useRef<HTMLDivElement>(null);

  const handleMobileStageScroll = () => {
    const el = mobileStageSliderRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const itemWidth = el.scrollWidth / STAGES_DATA.length;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveMobileStage(Math.max(0, Math.min(STAGES_DATA.length - 1, index)));
  };

  const scrollToMobileStage = (index: number) => {
    const el = mobileStageSliderRef.current;
    if (!el) return;
    const children = el.children;
    if (children && children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      setShowcaseSlide(1);
    } else if (diff < -50) {
      setShowcaseSlide(0);
    }
    setTouchStartX(null);
  };

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
            <button
              onClick={() => {
                setShowcaseSlide(0);
                scrollTo("case-study");
              }}
              className={`transition-colors py-1 cursor-pointer bg-transparent border-0 font-medium text-[14px] ${isDark ? "text-slate-300 hover:text-white" : "text-[#475569] hover:text-[#4344fa]"}`}
            >
              Copilot Case Study
            </button>
            <button
              onClick={() => {
                setShowcaseSlide(1);
                scrollTo("case-study");
              }}
              className={`transition-colors py-1 cursor-pointer bg-transparent border-0 font-medium text-[14px] ${isDark ? "text-slate-300 hover:text-white" : "text-[#475569] hover:text-[#4344fa]"}`}
            >
              AdoptIQ Engine
            </button>
          </nav>

          {/* Right: Apple-Style Dark/Light Theme Mode Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleTheme}
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
        className="relative z-10 min-h-[92vh] lg:min-h-[98vh] flex flex-col justify-between pt-24 sm:pt-28 pb-20 sm:pb-24 lg:pb-28 overflow-hidden bg-transparent"
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
          {/* Layer 1: Background Glass Slabs Artwork (Deepest Plane) */}
          <div
            className="w-full h-full will-change-transform"
            style={{
              transform: `translate3d(${50 + mousePos.x * 12}px, ${mousePos.y * 8 - scrollY * 0.08}px, 0) scale(1.05) perspective(1200px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 1.5}deg)`,
              transformOrigin: "78% 50%",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src={isDark ? `${import.meta.env.BASE_URL}IMG/adopt_hero_glass_bg_Dark.png` : `${import.meta.env.BASE_URL}IMG/adopt_hero_glass_bg.jpg`}
              alt="ADOPT 8K 3D Glass Artwork"
              className={`w-full h-full object-cover object-[80%_center] lg:object-[78%_center] ${
                isDark ? "opacity-100" : "opacity-90"
              } transition-opacity duration-700 animate-hero-bg-zoom`}
              style={{
                animation: "hero-slow-zoom 14s ease-in-out infinite alternate",
                transformOrigin: "76% 48%",
                willChange: "transform",
              }}
            />
          </div>

          {/* Layer 2: Small Floating 3D Ball (Top Right, Mid-Deep Depth) */}
          {isDark && (
            <div
              className="absolute inset-0 flex items-start justify-end pointer-events-none z-10 select-none will-change-transform"
              style={{
                transform: `translate3d(${mousePos.x * 22}px, ${mousePos.y * 16 - scrollY * 0.22}px, 0) perspective(1000px) rotateY(${mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 2.5}deg)`,
                transformOrigin: "86% 20%",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div
                className="relative animate-hero-float"
                style={{
                  width: "min(4.8vw, 68px)",
                  marginRight: "12%",
                  marginTop: "7.5%",
                  filter: "drop-shadow(0 14px 28px rgba(168, 85, 247, 0.55)) drop-shadow(0 0 22px rgba(56, 189, 248, 0.4))",
                  animationDelay: "-2.4s",
                }}
              >
                <img
                  src={ballImg}
                  alt="Small 3D Glass Sphere"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  style={{
                    transform: `rotate(${mousePos.x * 5 + scrollY * 0.04}deg)`,
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </div>
          )}

          {/* Layer 3: Central 3D Floating Arrow Prism (Mid-Foreground Focal Element) */}
          {isDark && (
            <div
              className="absolute inset-0 flex items-center justify-end pointer-events-none z-10 select-none will-change-transform"
              style={{
                transform: `translate3d(${mousePos.x * 34 - scrollY * 0.42}px, ${mousePos.y * 24 - scrollY * 0.42}px, 0) perspective(1000px) rotateY(${mousePos.x * 5.2}deg) rotateX(${-mousePos.y * 4.2}deg)`,
                transformOrigin: "75% 50%",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div
                className="relative animate-hero-float"
                style={{
                  width: "min(34vw, 490px)",
                  marginRight: "21%",
                  marginTop: "-4%",
                  filter: "drop-shadow(0 25px 50px rgba(59, 130, 246, 0.45)) drop-shadow(0 0 42px rgba(168, 85, 247, 0.38))",
                  animationDelay: "0s",
                }}
              >
                <img
                  src={arrowImg}
                  alt="ADOPT 3D Glass Arrow Prism"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  style={{
                    transform: `rotate(${mousePos.x * 2.5}deg)`,
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </div>
          )}

          {/* Layer 4: Big Floating 3D Ball (Bottom Right, Closest Foreground Depth) */}
          {isDark && (
            <div
              className="absolute inset-0 flex items-end justify-end pointer-events-none z-10 select-none will-change-transform"
              style={{
                transform: `translate3d(${mousePos.x * 52}px, ${mousePos.y * 36 - scrollY * 0.58}px, 0) perspective(1000px) rotateY(${mousePos.x * 7.5}deg) rotateX(${-mousePos.y * 6}deg)`,
                transformOrigin: "92% 82%",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div
                className="relative animate-hero-float"
                style={{
                  width: "min(10.5vw, 142px)",
                  marginRight: "4.5%",
                  marginBottom: "8%",
                  filter: "drop-shadow(0 28px 50px rgba(168, 85, 247, 0.65)) drop-shadow(0 0 38px rgba(56, 189, 248, 0.5))",
                  animationDelay: "-4.2s",
                }}
              >
                <img
                  src={ballImg}
                  alt="Big 3D Glass Sphere"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  style={{
                    transform: `rotate(${mousePos.x * -7 - scrollY * 0.06}deg)`,
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </div>
          )}

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

          {/* Seamless luminous ambient gradient overlay on the left to perfectly integrate text with reduced fade */}
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-all duration-700"
            style={{
              background: isDark
                ? "linear-gradient(to right, rgba(3, 7, 18, 0.96) 0%, rgba(3, 7, 18, 0.82) 28%, rgba(3, 7, 18, 0.35) 48%, transparent 72%)"
                : "linear-gradient(to right, rgba(243, 248, 254, 0.85) 0%, rgba(243, 248, 254, 0.42) 22%, rgba(243, 248, 254, 0.1) 36%, transparent 52%)"
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
                <span>THE ADOPT PLAYBOOK</span>
              </div>
            </div>

            {/* Main Headline with Cyan-to-Cobalt-to-Purple Gradient */}
            <h1
              className="text-[48px] sm:text-[76px] lg:text-[96px] font-black tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] leading-[0.92] mb-4 inline-block"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ADOPT
            </h1>

            {/* Sub-headline */}
            <h2 className={`text-[20px] sm:text-[26px] lg:text-[32px] font-bold tracking-tight leading-[1.25] mb-4 transition-colors ${
              isDark ? "text-white" : "text-[#1e293b]"
            }`}>
              The behavioral playbook I built to scale AI adoption.
            </h2>

            {/* Description */}
            <p className={`text-[14px] sm:text-[16px] leading-[1.6] max-w-[540px] mb-7 font-normal transition-colors ${
              isDark ? "text-slate-400" : "text-[#64748b]"
            }`}>
              I created ADOPT from first principles to help product teams and organizations understand why AI adoption stalls—and design the behavioral path from awareness to sustained use.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExplorePlaybook || (() => scrollTo("playbook-stages"))}
                className="adopt-hero-btn-primary group"
              >
                <span>Explore the Playbook</span>
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
                className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-[14px] sm:text-[15px] cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm ${
                  isDark
                    ? "bg-white/8 hover:bg-white/15 text-white border border-white/18"
                    : "adopt-hero-btn-secondary"
                }`}
              >
                <span>Protected Playbook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Metrics Pill Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12 w-full relative z-10 pt-8">
          <div className={`p-4 sm:p-5 rounded-[28px] shadow-sm backdrop-blur-xl border transition-colors ${
            isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/90 border-slate-200/70"
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 md:divide-x divide-slate-200/40">
              <div className="flex items-center gap-3 p-1.5 sm:pl-2">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border transition-transform ${
                  isDark ? "bg-sky-950/70 border-sky-500/30 text-sky-400" : "bg-[#f0f9ff]/90 border-sky-100/50 text-[#0284c7]"
                }`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[17px] sm:text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>5 Stages</div>
                  <div className={`text-[11.5px] sm:text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>Structured path</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-1.5 sm:pl-6">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border transition-transform ${
                  isDark ? "bg-indigo-950/70 border-indigo-500/30 text-indigo-400" : "bg-[#f5f3ff]/90 border-indigo-100/50 text-[#6366f1]"
                }`}>
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[17px] sm:text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>AI Ready</div>
                  <div className={`text-[11.5px] sm:text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>Built for GenAI</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-1.5 sm:pl-6">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border transition-transform ${
                  isDark ? "bg-pink-950/70 border-pink-500/30 text-pink-400" : "bg-[#fdf2f8]/90 border-pink-100/50 text-[#db2777]"
                }`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[17px] sm:text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>3.6x Growth</div>
                  <div className={`text-[11.5px] sm:text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>In active users</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-1.5 sm:pl-6">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs border transition-transform ${
                  isDark ? "bg-emerald-950/70 border-emerald-500/30 text-emerald-400" : "bg-[#ecfdf5]/90 border-emerald-100/50 text-[#059669]"
                }`}>
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[17px] sm:text-[20px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>Behavior-first</div>
                  <div className={`text-[11.5px] sm:text-[12px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>by design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CORE PROBLEM (FULL-WIDTH PARALLAX CENTERPIECE) ──── */}
      <section
        id="problem"
        className={`w-full min-h-[900px] lg:min-h-[100vh] relative z-20 overflow-hidden flex items-center justify-center bg-transparent ${
          isDark ? "pt-24 pb-24 lg:pt-36 lg:pb-32" : "pt-16 pb-16 lg:pt-28 lg:pb-24"
        }`}
      >
        {/* Full-Bleed Parallax Iceberg Artwork Background */}
        <div
          className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden w-full h-full"
          style={{
            maskImage: isDark
              ? "linear-gradient(to bottom, black 0%, black 80%, transparent 98%)"
              : "linear-gradient(to bottom, black 0%, black 75%, transparent 96%)",
            WebkitMaskImage: isDark
              ? "linear-gradient(to bottom, black 0%, black 80%, transparent 98%)"
              : "linear-gradient(to bottom, black 0%, black 75%, transparent 96%)",
            background: isDark
              ? "radial-gradient(ellipse at 50% 50%, rgba(14, 42, 92, 0.45) 0%, rgba(3, 7, 18, 0.95) 75%, transparent 100%)"
              : "transparent",
          }}
        >
          <div
            className="w-full h-full absolute inset-0 will-change-transform transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `translate3d(${mousePos.x * 6}px, ${(scrollY - 500) * -0.025 + mousePos.y * 4}px, 0)`,
            }}
          >
            <img
              src={isDark ? `${import.meta.env.BASE_URL}IMG/adopt_iceberg_dark.png` : `${import.meta.env.BASE_URL}IMG/adopt_iceberg_light_bg.jpg`}
              alt="AI Adoption Iceberg Analogy"
              className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                isDark ? "opacity-100" : "opacity-95 mix-blend-multiply"
              }`}
            />
          </div>

          {/* Mobile Vignette Scrim (Protects text contrast on small screens from the bright iceberg peak) */}
          <div
            className="lg:hidden absolute inset-0 pointer-events-none transition-all duration-700"
            style={{
              background: isDark
                ? "linear-gradient(to bottom, rgba(3, 7, 18, 0.95) 0%, rgba(3, 7, 18, 0.82) 24%, rgba(3, 7, 18, 0.42) 48%, rgba(3, 7, 18, 0.88) 78%, rgba(3, 7, 18, 0.98) 100%)"
                : "linear-gradient(to bottom, rgba(243, 248, 254, 0.94) 0%, rgba(243, 248, 254, 0.76) 24%, rgba(243, 248, 254, 0.28) 48%, rgba(243, 248, 254, 0.85) 78%, rgba(243, 248, 254, 0.97) 100%)",
            }}
          />
        </div>

        {/* Full-Width Content Container */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14 w-full relative z-10 my-auto flex flex-col justify-between">
          {/* DESKTOP LAYOUT (>= 1024px) */}
          <div className="hidden lg:block w-full">
            {/* Top Row: Left Headline & Right ABOVE THE SURFACE Card (shifted upward by 50px) */}
            <div
              className="grid grid-cols-12 gap-8 items-start mb-16"
              style={{ transform: "translateY(-50px)" }}
            >
              {/* Top Left: Badge, Headline & Subtitle (shifted upward by additional 50px) */}
              <div
                className="col-span-6 flex flex-col items-start text-left max-w-lg"
                style={{ transform: "translateY(-50px)" }}
              >
                {/* Eyebrow Pill */}
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-5 backdrop-blur-md border shadow-2xs ${
                  isDark
                    ? "bg-white/8 border-white/15 text-[#cbd5e1]"
                    : "bg-[#f0f9ff] border-[#bae6fd] text-[#0369a1]"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#38bdf8]" : "bg-[#0284c7]"} animate-pulse`} />
                  <span>THE CORE PROBLEM</span>
                </div>

                {/* Main Headline */}
                <h2
                  className={`text-[40px] lg:text-[50px] font-black tracking-[-0.035em] leading-[1.06] mb-5 ${
                    isDark ? "text-white" : "text-[#0a0e1a]"
                  }`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7]">
                    AI adoption is not<br />
                    a feature problem.
                  </span><br />
                  <span>
                    It’s a behavior<br /> problem.
                  </span>
                </h2>

                {/* Sub-paragraph */}
                <p className={`text-[15px] leading-relaxed max-w-[420px] font-normal ${
                  isDark ? "text-slate-300/80" : "text-[#64748b]"
                }`}>
                  Even powerful products sit in limbo if they collide with familiar habits, uncertainty, and inertia.
                </p>
              </div>

              {/* Top Right: ABOVE THE SURFACE Card */}
              <div
                className={`col-span-6 flex justify-end transition-all duration-300 ${
                  isDark ? "adopt-dark-card-above" : "adopt-light-card-above"
                }`}
              >
                <div
                  className={`relative rounded-[28px] p-6 w-full max-w-[340px] text-left transition-all duration-300 hover:scale-[1.02] group cursor-default ${
                    isDark
                      ? "text-white"
                      : "bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)]"
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 2}deg)`,
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
                  {/* Connecting Line from Card to Iceberg Peak */}
                  <div className="absolute -left-16 top-8 w-16 h-8 pointer-events-none">
                    <div className="absolute left-0 top-[14px] w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#818cf8] shadow-[0_0_10px_#818cf8] animate-adopt-sonar" />
                    <svg className="w-full h-full" viewBox="0 0 64 32" fill="none">
                      <path d="M64 14 L 0 14" stroke="#818cf8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform ${
                          isDark
                            ? "text-white bg-sky-950/80 border border-sky-500/30"
                            : "bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] border border-[#c7d2fe] text-[#6366f1]"
                        }`}
                      >
                        <Mountain className="w-5 h-5 stroke-[2] text-sky-400" />
                      </div>
                      <div>
                        <div className={`text-[12.5px] font-bold tracking-wider uppercase font-['Poppins',sans-serif] ${
                          isDark ? "text-white" : "text-[#0f172a]"
                        }`}>
                          ABOVE THE SURFACE
                        </div>
                        <div className={`text-[11.5px] font-normal ${
                          isDark ? "text-white/70" : "text-[#64748b]"
                        }`}>
                          What tools prioritize
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0">
                      10% Visible
                    </span>
                  </div>

                  <div className="space-y-2.5 pl-1">
                    {[
                      "Advanced capabilities",
                      "Continuous innovation",
                      "Feature-rich roadmaps",
                      "Enterprise-grade security",
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-2.5 text-[13.5px] font-medium transition-colors ${
                        isDark ? "text-white/85 hover:text-white" : "text-[#334155] hover:text-[#0f172a]"
                      }`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Left 4 Checkmark Items & Right BELOW THE SURFACE Card */}
            <div className="grid grid-cols-12 gap-8 items-end">
              {/* Bottom Left: 4 Checkmark Items (shifted upward by 100px) */}
              <div
                className={`col-span-6 space-y-3.5 max-w-[480px] text-left transition-all duration-300 ${
                  isDark ? "adopt-dark-checkmarks" : "adopt-checkmarks-container"
                }`}
                style={{ transform: "translateY(-100px)" }}
              >
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
                        ? "bg-[#141b36] border border-indigo-500/40 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.25)] group-hover:border-indigo-400"
                        : "bg-[#f5f3ff] border border-[#ddd6fe] text-[#7c3aed] shadow-2xs group-hover:bg-[#ede9fe] group-hover:border-[#c4b5fd]"
                    }`}>
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className={`text-[14.5px] font-medium leading-normal transition-colors flex-1 ${
                      isDark ? "text-slate-200 group-hover:text-white" : "text-[#1e293b] group-hover:text-[#0f172a]"
                    }`}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Right: BELOW THE SURFACE Card */}
              <div
                className={`col-span-6 flex justify-end transition-all duration-300 ${
                  isDark ? "adopt-dark-card-below" : "adopt-light-card-below"
                }`}
              >
                <div
                  className={`relative rounded-[28px] p-6 w-full max-w-[340px] text-left transition-all duration-300 hover:scale-[1.02] group cursor-default ${
                    isDark
                      ? "text-white"
                      : "bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)]"
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 2}deg)`,
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
                  {/* Connecting Line from Card to Underwater Iceberg Body */}
                  <div className="absolute -left-16 top-8 w-16 h-8 pointer-events-none">
                    <div className="absolute left-0 top-[14px] w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#818cf8] shadow-[0_0_10px_#818cf8] animate-adopt-sonar" />
                    <svg className="w-full h-full" viewBox="0 0 64 32" fill="none">
                      <path d="M64 14 L 0 14" stroke="#818cf8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform ${
                          isDark
                            ? "text-white bg-indigo-950/80 border border-indigo-500/30"
                            : "bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] border border-[#c7d2fe] text-[#6366f1]"
                        }`}
                      >
                        <Lock className="w-5 h-5 stroke-[2] text-indigo-400" />
                      </div>
                      <div>
                        <div className={`text-[12.5px] font-bold tracking-wider uppercase font-['Poppins',sans-serif] ${
                          isDark ? "text-white" : "text-[#0f172a]"
                        }`}>
                          BELOW THE SURFACE
                        </div>
                        <div className={`text-[11.5px] font-normal ${
                          isDark ? "text-white/70" : "text-[#64748b]"
                        }`}>
                          What adoption needs
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                      90% Hidden
                    </span>
                  </div>

                  <div className="space-y-2.5 pl-1">
                    {[
                      "Familiar habits",
                      "Fear of change",
                      "Unclear personal value",
                      "Low motivation to switch",
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-2.5 text-[13.5px] font-medium transition-colors ${
                        isDark ? "text-white/85 hover:text-white" : "text-[#334155] hover:text-[#0f172a]"
                      }`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#818cf8] shadow-[0_0_8px_#818cf8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET LAYOUT (< 1024px): Seamless Iceberg Narrative Stack */}
          <div className="lg:hidden flex flex-col gap-6 sm:gap-8 w-full max-w-xl mx-auto text-left">
            {/* 1. Header Block */}
            <div className="flex flex-col items-start text-left">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4 backdrop-blur-md border shadow-2xs ${
                isDark
                  ? "bg-white/8 border-white/15 text-[#cbd5e1]"
                  : "bg-[#f0f9ff] border-[#bae6fd] text-[#0369a1]"
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#38bdf8]" : "bg-[#0284c7]"} animate-pulse`} />
                <span>THE CORE PROBLEM</span>
              </div>

              <h2
                className={`text-[24px] sm:text-[34px] font-black tracking-tight leading-[1.1] mb-3.5 ${
                  isDark ? "text-white drop-shadow-md" : "text-[#0a0e1a]"
                }`}
                style={{ fontFamily: "Georgia, serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7]">
                  AI adoption is not<br />
                  a feature problem.
                </span><br />
                <span>
                  It’s a behavior problem.
                </span>
              </h2>

              <p className={`text-[14px] sm:text-[15px] leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-[#475569]"
              }`}>
                Even powerful products sit in limbo if they collide with familiar habits, uncertainty, and inertia.
              </p>
            </div>

            {/* 2. Above The Surface Card (Tip of the Iceberg) */}
            <div
              className={`w-full rounded-[24px] p-5 sm:p-6 transition-all duration-300 shadow-lg ${
                isDark
                  ? "bg-[#070d1e]/90 backdrop-blur-xl border border-sky-500/30 text-white"
                  : "bg-white/95 backdrop-blur-xl border border-sky-200 text-[#0f172a] shadow-sky-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? "bg-sky-950/80 border border-sky-500/40 text-sky-400" : "bg-sky-50 border border-sky-200 text-sky-600"
                  }`}>
                    <Mountain className="w-4.5 h-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold tracking-wider uppercase font-['Poppins',sans-serif]">
                      ABOVE THE SURFACE
                    </div>
                    <div className={`text-[11.5px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      What tools prioritize
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0">
                  10% Visible
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-1">
                {[
                  "Advanced capabilities",
                  "Continuous innovation",
                  "Feature-rich roadmaps",
                  "Enterprise-grade security",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13.5px] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] shrink-0" />
                    <span className={isDark ? "text-slate-200" : "text-slate-700"}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. The Waterline / Adoption Barrier Separator */}
            <div className="flex items-center gap-2.5 sm:gap-3 w-full my-0.5 select-none">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-indigo-500/40" />
              <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider sm:tracking-widest ${
                isDark ? "bg-[#0c1630] border border-cyan-500/30 text-cyan-300" : "bg-sky-100/90 border border-sky-300 text-sky-800"
              }`}>
                <span>🌊 THE WATERLINE • THE ADOPTION BARRIER</span>
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-transparent" />
            </div>

            {/* 4. Below The Surface Card (Submerged Bulk of the Iceberg) */}
            <div
              className={`w-full rounded-[24px] p-5 sm:p-6 transition-all duration-300 shadow-lg ${
                isDark
                  ? "bg-[#080d24]/92 backdrop-blur-xl border border-indigo-500/35 text-white"
                  : "bg-white/95 backdrop-blur-xl border border-indigo-200 text-[#0f172a] shadow-indigo-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? "bg-indigo-950/80 border border-indigo-500/40 text-indigo-400" : "bg-indigo-50 border border-indigo-200 text-indigo-600"
                  }`}>
                    <Lock className="w-4.5 h-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold tracking-wider uppercase font-['Poppins',sans-serif]">
                      BELOW THE SURFACE
                    </div>
                    <div className={`text-[11.5px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      What adoption actually needs
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                  90% Hidden
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-1">
                {[
                  "Familiar habits",
                  "Fear of change",
                  "Unclear personal value",
                  "Low motivation to switch",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13.5px] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7] shrink-0" />
                    <span className={isDark ? "text-slate-200" : "text-slate-700"}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. The Behavioral Reality Card (Key Realizations) */}
            <div
              className={`w-full rounded-[24px] p-5 sm:p-6 transition-all duration-300 shadow-md ${
                isDark
                  ? "bg-[#050917]/92 backdrop-blur-xl border border-white/15 text-white"
                  : "bg-white/90 backdrop-blur-xl border border-slate-200 text-[#0f172a]"
              }`}
            >
              <div className="flex items-center gap-2 mb-3.5">
                <span className="text-xs text-indigo-400">✦</span>
                <span className={`text-[11px] font-extrabold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}>
                  THE BEHAVIORAL REALITY
                </span>
              </div>

              <div className="space-y-3">
                {[
                  "Users don't resist products.",
                  "They resist changing routines.",
                  "Better technology does not automatically create behavior change.",
                  "Sustainable adoption starts with human behavior.",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      isDark
                        ? "bg-indigo-950/80 border border-indigo-500/40 text-indigo-300"
                        : "bg-indigo-50 border border-indigo-200 text-indigo-600"
                    }`}>
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className={`text-[13.5px] font-medium leading-snug ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 5 STAGES OF THE ADOPT PLAYBOOK ─────────────────── */}
      <section
        id="playbook-stages"
        className={`relative overflow-hidden bg-transparent ${
          isDark ? "pt-28 pb-24 lg:pt-36 lg:pb-32" : "pt-20 pb-20 lg:pt-28 lg:pb-28"
        }`}
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
                  { label: "THE PLAYBOOK", dot: "bg-[#38bdf8]" },
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

              <div className={`text-[20px] sm:text-[26px] lg:text-[32px] font-bold tracking-tight leading-[1.25] mb-1.5 transition-colors ${
                isDark ? "text-white" : "text-[#1e293b]"
              }`}>
                The 5 Stages of the
              </div>
              <h2
                className="text-[44px] sm:text-[52px] lg:text-[58px] font-black tracking-[-0.035em] leading-[1.04] mb-4 inline-block"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7]">
                  ADOPT Playbook
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
                  <span>Click any card to explore full behavioral playbook & tactics</span>
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

          {/* ── THE 5 STAGES OF THE ADOPT PLAYBOOK ─ */}
          <div className="relative pt-4 pb-8">
            {/* Desktop / Tablet Grid (hidden md:grid) */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 relative z-10 items-stretch">
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
                      <div className="relative w-[90%] rounded-[26px] sm:rounded-[30px] overflow-hidden group-hover:drop-shadow-[0_15px_30px_rgba(67,68,250,0.18)] transition-all duration-300 flex items-center justify-center z-10">
                        <img
                          src={isDark ? stage.cardDarkImg : stage.cardImg}
                          alt={`ADOPT Stage ${stage.num}: ${stage.title} - ${stage.question}`}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          style={{
                            filter: isDark ? "contrast(0.90) brightness(0.94) saturate(0.92)" : "none",
                          }}
                        />
                      </div>

                      {/* ── GLASSY BASE CAUSTIC LIGHT GLOW (TRANSPARENT BACKGROUND) ── */}
                      <div className="relative w-[90%] flex flex-col items-center justify-center -mt-4 sm:-mt-5 pointer-events-none z-0">
                        <div
                          className="w-[65%] h-3 sm:h-3.5 rounded-[100%] blur-[6px] transition-all duration-500 group-hover:scale-110 group-hover:blur-[8px] opacity-60 group-hover:opacity-75"
                          style={{
                            background: `radial-gradient(ellipse at center, ${currentGlow.core} 0%, ${currentGlow.light} 50%, transparent 80%)`,
                            boxShadow: `0 2px 12px ${currentGlow.light}`,
                          }}
                        />
                        <div
                          className="w-[75%] h-4 sm:h-5 rounded-[100%] blur-md -mt-2 transition-all duration-500 group-hover:scale-115 opacity-35 group-hover:opacity-55"
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

            {/* Mobile Swipe Slider Layout (block md:hidden) — Cards Reduced by 40% */}
            <div className="block md:hidden relative w-full pt-2">
              <div
                ref={mobileStageSliderRef}
                onScroll={handleMobileStageScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 px-[18vw] pb-4 pt-2 scrollbar-none w-full"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
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
                      className="w-[64vw] max-w-[230px] shrink-0 snap-center cursor-pointer flex flex-col items-center active:scale-95 transition-transform"
                    >
                      <div className="relative w-full rounded-[22px] overflow-hidden drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] flex items-center justify-center z-10">
                        <img
                          src={isDark ? stage.cardDarkImg : stage.cardImg}
                          alt={`ADOPT Stage ${stage.num}: ${stage.title} - ${stage.question}`}
                          className="w-full h-auto object-contain"
                          style={{
                            filter: isDark ? "contrast(0.90) brightness(0.94) saturate(0.92)" : "none",
                          }}
                        />
                      </div>

                      {/* Glassy Base Light Glow */}
                      <div className="relative w-[90%] flex flex-col items-center justify-center -mt-3 pointer-events-none z-0">
                        <div
                          className="w-[65%] h-2.5 rounded-[100%] blur-[5px] opacity-60"
                          style={{
                            background: `radial-gradient(ellipse at center, ${currentGlow.core} 0%, ${currentGlow.light} 50%, transparent 80%)`,
                            boxShadow: `0 2px 10px ${currentGlow.light}`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Pagination Indicators & Arrows */}
              <div className="flex items-center justify-between px-6 mt-2">
                <div className="flex items-center gap-2">
                  {STAGES_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to stage ${idx + 1}`}
                      onClick={() => scrollToMobileStage(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeMobileStage === idx
                          ? "w-6 bg-gradient-to-r from-purple-400 to-indigo-400"
                          : isDark
                          ? "w-1.5 bg-white/25"
                          : "w-1.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-mono ${isDark ? "text-white/50" : "text-slate-500"}`}>
                    <span className={isDark ? "text-white font-medium" : "text-slate-900 font-medium"}>{activeMobileStage + 1}</span> / {STAGES_DATA.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Previous stage"
                      disabled={activeMobileStage === 0}
                      onClick={() => scrollToMobileStage(activeMobileStage - 1)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        activeMobileStage === 0
                          ? "opacity-30 cursor-not-allowed text-white/40"
                          : isDark
                          ? "bg-white/10 hover:bg-white/20 text-white border border-white/15 active:scale-95"
                          : "bg-white text-slate-700 border border-slate-200 active:scale-95 shadow-xs"
                      }`}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next stage"
                      disabled={activeMobileStage === STAGES_DATA.length - 1}
                      onClick={() => scrollToMobileStage(activeMobileStage + 1)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        activeMobileStage === STAGES_DATA.length - 1
                          ? "opacity-30 cursor-not-allowed text-white/40"
                          : isDark
                          ? "bg-white/10 hover:bg-white/20 text-white border border-white/15 active:scale-95"
                          : "bg-white text-slate-700 border border-slate-200 active:scale-95 shadow-xs"
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
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
                                  src={isDark && stage.modalDarkImg ? stage.modalDarkImg : stage.modalImg}
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

        {/* ── COMBINED SHOWCASE SLIDER: APPLIED FRAMEWORK & AI ADOPTION ENGINE ── */}
        <div id="case-study" className="relative w-full mb-16 sm:mb-20 lg:mb-24 pt-2">
          {/* Top Control Bar with Segmented Tab Switcher and Left/Right Arrows */}
          <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Segmented Switcher Tabs */}
              <div className={`inline-flex p-1.5 rounded-full border shadow-2xs backdrop-blur-xl ${
                isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/90 border-slate-200/80"
              }`}>
                <button
                  type="button"
                  onClick={() => setShowcaseSlide(0)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all cursor-pointer ${
                    showcaseSlide === 0
                      ? isDark
                        ? "bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-pink-300 border border-pink-500/40 shadow-sm"
                        : "bg-gradient-to-r from-[#fdf2f8] to-[#f5f3ff] text-[#db2777] border border-[#fbcfe8] shadow-xs"
                      : isDark
                      ? "text-slate-400 hover:text-white border border-transparent"
                      : "text-slate-600 hover:text-slate-900 border border-transparent"
                  }`}
                >
                  <span className="text-xs text-pink-400">✦</span>
                  <span>APPLIED PLAYBOOK</span>
                  <span className="hidden md:inline text-[11px] font-normal opacity-70">• Copilot Case Study</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowcaseSlide(1)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all cursor-pointer ${
                    showcaseSlide === 1
                      ? isDark
                        ? "bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-purple-300 border border-purple-500/40 shadow-sm"
                        : "bg-gradient-to-r from-[#f5f3ff] to-[#eef2ff] text-[#7c3aed] border border-[#ddd6fe] shadow-xs"
                      : isDark
                      ? "text-slate-400 hover:text-white border border-transparent"
                      : "text-slate-600 hover:text-slate-900 border border-transparent"
                  }`}
                >
                  <span className="text-xs text-purple-400">✦</span>
                  <span>AI ADOPTION ENGINE</span>
                  <span className="hidden md:inline text-[11px] font-normal opacity-70">• AdoptIQ.ai</span>
                </button>
              </div>

              {/* Slider Left/Right Arrows & Slide Counter */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <div className={`text-xs font-bold tracking-wider px-3 py-1.5 rounded-full border backdrop-blur-md ${
                  isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white/80 border-slate-200 text-slate-600"
                }`}>
                  <span className={isDark ? "text-sky-400" : "text-[#4344fa]"}>0{showcaseSlide + 1}</span>
                  <span className="opacity-40"> / 02</span>
                </div>

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={() => setShowcaseSlide((prev) => (prev === 0 ? 1 : prev - 1))}
                  aria-label="Previous Slide"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-110 active:scale-95 border ${
                    isDark
                      ? "bg-[#0b101e]/90 hover:bg-[#141b36] border-white/15 text-white hover:text-sky-400 hover:border-sky-500/40"
                      : "bg-white/90 hover:bg-white border-slate-200 text-slate-700 hover:text-[#4344fa] hover:border-indigo-300"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={() => setShowcaseSlide((prev) => (prev === 1 ? 0 : prev + 1))}
                  aria-label="Next Slide"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-110 active:scale-95 border ${
                    isDark
                      ? "bg-[#0b101e]/90 hover:bg-[#141b36] border-white/15 text-white hover:text-sky-400 hover:border-sky-500/40"
                      : "bg-white/90 hover:bg-white border-slate-200 text-slate-700 hover:text-[#4344fa] hover:border-indigo-300"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Slider Track */}
          <div
            className="w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
              style={{
                transform: `translateX(-${showcaseSlide * 100}%)`,
              }}
            >
              {/* ── SLIDE 0: APPLIED PLAYBOOK (Scaled Copilot Adoption) ── */}
              <div className="w-full shrink-0 min-w-full">
                <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left: Free-Floating 3D Copilot Playbook Visual (Hidden on Mobile) */}
                    <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center lg:justify-start lg:-translate-x-6 pointer-events-auto select-none">
                      <img
                        src={isDark ? copilotPlaybookDarkImg : copilotPlaybookImg}
                        alt="Scaled Copilot Adoption AI Adoption Playbook 3D Dashboard"
                        className="w-full h-auto max-w-[660px] object-contain drop-shadow-[0_25px_60px_rgba(139,92,246,0.35)] transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>

                    {/* Right: Narrative, Headlines, Metrics & Case Study CTA (Mobile Glass Card) */}
                    <div className={`lg:col-span-6 flex flex-col items-start text-left pl-0 lg:-translate-x-4 p-5 sm:p-8 lg:p-0 rounded-[32px] lg:rounded-none border lg:border-none backdrop-blur-xl lg:backdrop-blur-none shadow-xl lg:shadow-none ${
                      isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/90 border-slate-200/80"
                    }`}>
                      {/* Eyebrow Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-3 shadow-2xs ${
                        isDark ? "bg-pink-500/15 border border-pink-500/30 text-pink-400" : "bg-[#fdf2f8] border border-[#fbcfe8] text-[#db2777]"
                      }`}>
                        <span className="text-[12px]">✦</span>
                        <span>APPLIED PLAYBOOK</span>
                      </div>

                      {/* Brand Title */}
                      <h2
                        className={`text-[28px] sm:text-[42px] lg:text-[48px] font-black tracking-[-0.035em] leading-[1.04] mb-2 ${
                          isDark
                            ? "text-white"
                            : "text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899]"
                        }`}
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        Scaled Copilot Adoption
                      </h2>

                      {/* Sub-tagline */}
                      <p className={`text-[14px] sm:text-[16px] font-semibold mb-3 tracking-tight ${
                        isDark ? "text-slate-400" : "text-[#64748b]"
                      }`}>
                        Enterprise scale AI adoption case study
                      </p>

                      {/* Headline */}
                      <h3 className={`text-[18px] sm:text-[27px] lg:text-[31px] font-normal tracking-tight leading-[1.2] mb-5 max-w-lg ${
                        isDark ? "text-white" : "text-[#0a0e1a]"
                      }`}>
                        How the Adopt Playbook drove awareness into repeat usage and advocacy
                      </h3>

                      {/* 3 Metric Cards */}
                      <div className="grid grid-cols-3 gap-2 w-full max-w-lg mb-4">
                        <div className={`p-2.5 sm:p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                          isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-pink-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#fbcfe8]"
                        }`}>
                          <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                          <div className={`text-[15px] sm:text-[19px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                            935K → 3.4M
                          </div>
                          <div className={`text-[10px] sm:text-[11px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>
                            Copilot MAU
                          </div>
                        </div>

                        <div className={`p-2.5 sm:p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                          isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-sky-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#bfdbfe]"
                        }`}>
                          <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                          <div className={`text-[15px] sm:text-[19px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                            33$ → 85$
                          </div>
                          <div className={`text-[10px] sm:text-[11px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>
                            CAC Cut 71%
                          </div>
                        </div>

                        <div className={`p-2.5 sm:p-3.5 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                          isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-purple-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#fbcfe8]"
                        }`}>
                          <div className="w-2 h-2 rounded-full bg-[#ec4899]" />
                          <div className={`text-[15px] sm:text-[19px] font-black leading-tight ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                            500K → 1.5M
                          </div>
                          <div className={`text-[10px] sm:text-[11px] font-medium ${isDark ? "text-slate-400" : "text-[#64748b]"}`}>
                            Telemetry MAU
                          </div>
                        </div>
                      </div>

                      {/* Featured Key Outcome Card (24% more Active Copilot days) */}
                      <div className={`w-full max-w-lg p-3 sm:p-4 rounded-[20px] shadow-xs flex items-center gap-3 sm:gap-4 mb-5 transition-colors ${
                        isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-purple-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#ddd6fe]"
                      }`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 shadow-2xs ${
                          isDark ? "bg-purple-950/70 border border-purple-500/30 text-purple-400" : "bg-gradient-to-tr from-[#ede9fe] to-[#f5f3ff] border border-[#ddd6fe] text-[#7c3aed]"
                        }`}>
                          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className={`text-[17px] sm:text-[22px] font-black tracking-tight leading-tight ${
                            isDark ? "text-white" : "text-[#0f172a]"
                          }`}>
                            24% more
                          </span>
                          <span className={`text-[11.5px] sm:text-[13px] font-medium leading-snug ${
                            isDark ? "text-slate-300" : "text-[#475569]"
                          }`}>
                            Active Copilot daily & weekly MAU members
                          </span>
                        </div>
                      </div>

                      {/* CTA Button: Protected Figma Case Study */}
                      <div className="pt-1 pb-1">
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

              {/* ── SLIDE 1: AI ADOPTION ENGINE (AdoptIQ.ai) ── */}
              <div className="w-full shrink-0 min-w-full">
                <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left: Free-Floating 3D SaaS Dashboard Visual (Hidden on Mobile) */}
                    <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center lg:justify-start lg:-translate-x-6 pointer-events-auto select-none">
                      <img
                        src={isDark ? adoptIqDarkImg : adoptIqImg}
                        alt="AdoptIQ.ai 3D Dashboard Engine at Work"
                        className="w-full h-auto max-w-[660px] object-contain drop-shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>

                    {/* Right: Brand Title, Headline, Value Cards, Pipeline Pill & CTA (Mobile Glass Card) */}
                    <div className={`lg:col-span-6 flex flex-col items-start text-left pl-0 lg:-translate-x-4 p-5 sm:p-8 lg:p-0 rounded-[32px] lg:rounded-none border lg:border-none backdrop-blur-xl lg:backdrop-blur-none shadow-xl lg:shadow-none ${
                      isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/90 border-slate-200/80"
                    }`}>
                      {/* Eyebrow Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-3 shadow-2xs ${
                        isDark ? "bg-purple-500/15 border border-purple-500/30 text-purple-400" : "bg-[#f5f3ff] border border-[#e0e7ff] text-[#7c3aed]"
                      }`}>
                        <span className="text-[12px]">✦</span>
                        <span>AI ADOPTION ENGINE</span>
                      </div>

                      {/* Brand Title */}
                      <h2
                        className={`text-[28px] sm:text-[42px] lg:text-[48px] font-black tracking-[-0.035em] leading-[1.04] mb-2 ${
                          isDark
                            ? "text-white"
                            : "text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899]"
                        }`}
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        AdoptIQ.ai
                      </h2>

                      {/* Sub-tagline */}
                      <p className={`text-[14px] sm:text-[16px] font-semibold mb-3 tracking-tight ${
                        isDark ? "text-slate-400" : "text-[#64748b]"
                      }`}>
                        Independently designed and vibe-coded by Vikram
                      </p>

                      {/* Headline */}
                      <h3 className={`text-[18px] sm:text-[27px] lg:text-[31px] font-normal tracking-tight leading-[1.2] mb-5 max-w-lg ${
                        isDark ? "text-white" : "text-[#0a0e1a]"
                      }`}>
                        Turn your adoption problem into a clear UX action plan.
                      </h3>

                      {/* 4 Pipeline Flow Steps in Pill */}
                      <div className={`w-full max-w-lg p-2.5 rounded-2xl shadow-xs flex items-center justify-between mb-4 ${
                        isDark ? "bg-[#0b101e]/90 border border-white/12 text-slate-300" : "bg-white border border-[#e2e8f0] text-[#334155]"
                      }`}>
                        {[
                          { icon: "📋", label: "Plan" },
                          { icon: "🧠", label: "Diagnose" },
                          { icon: "🎯", label: "Prioritize" },
                          { icon: "🪄", label: "Generate" }
                        ].map((step, idx, arr) => (
                          <React.Fragment key={idx}>
                            <div className={`flex items-center gap-1 px-1.5 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-[12px] font-bold ${
                              isDark ? "text-slate-200" : "text-[#334155]"
                            }`}>
                              <span className="text-[13px] sm:text-[14px]">{step.icon}</span>
                              <span>{step.label}</span>
                            </div>
                            {idx < arr.length - 1 && <span className={isDark ? "text-slate-600 text-xs" : "text-slate-300 text-xs"}>→</span>}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* 3 Core Value Pillars */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-lg mb-5">
                        <div className={`p-3 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                          isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-indigo-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#c7d2fe]"
                        }`}>
                          <span className="text-lg">🧠</span>
                          <span className={`text-[11px] font-bold leading-snug ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                            Sentiment-to-Behavior Diagnosis
                          </span>
                        </div>

                        <div className={`p-3 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                          isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-indigo-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#c7d2fe]"
                        }`}>
                          <span className="text-lg">🪄</span>
                          <span className={`text-[11px] font-bold leading-snug ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                            Predictive Contextual UX Interventions
                          </span>
                        </div>

                        <div className={`p-3 rounded-2xl shadow-2xs flex flex-col items-start gap-1 transition-colors ${
                          isDark ? "bg-[#0b101e]/90 border border-white/12 hover:border-indigo-500/40" : "bg-white border border-[#e2e8f0] hover:border-[#c7d2fe]"
                        }`}>
                          <span className="text-lg">👥</span>
                          <span className={`text-[11px] font-bold leading-snug ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                            Effort-Free Roadmap Alignment
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-1 pb-1">
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
            </div>
          </div>

          {/* Bottom Slide Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            <button
              type="button"
              onClick={() => setShowcaseSlide(0)}
              aria-label="Slide 1: Copilot Case Study"
              className={`h-2 rounded-full transition-all cursor-pointer ${
                showcaseSlide === 0
                  ? "w-8 bg-gradient-to-r from-pink-500 to-purple-500"
                  : isDark
                  ? "w-2 bg-white/20 hover:bg-white/40"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowcaseSlide(1)}
              aria-label="Slide 2: AdoptIQ.ai"
              className={`h-2 rounded-full transition-all cursor-pointer ${
                showcaseSlide === 1
                  ? "w-8 bg-gradient-to-r from-purple-500 to-indigo-500"
                  : isDark
                  ? "w-2 bg-white/20 hover:bg-white/40"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
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
                <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-normal text-white tracking-tight leading-[1.12]">
                  Design for behavior.<br className="hidden sm:inline" /> Build what lasts.
                </h2>
              </div>

              {/* Right Side: Center-Aligned Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
                {/* 1. Launch the Playbook (Secondary Button Look) */}
                <button
                  onClick={onExplorePlaybook || (() => scrollTo("playbook-stages"))}
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer backdrop-blur-md shadow-sm group ${
                    isDark
                      ? "bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white"
                      : "bg-white/90 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-900"
                  }`}
                >
                  <span>Launch the Playbook</span>
                  <ArrowRight className={`w-4 h-4 ${isDark ? "text-white/80" : "text-slate-700"} group-hover:translate-x-1 transition-transform`} />
                </button>

                {/* 2. Launch AdoptIQ.ai (Secondary Button Look) */}
                <a
                  href="https://adoptiqai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer backdrop-blur-md shadow-sm group text-decoration-none ${
                    isDark
                      ? "bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white"
                      : "bg-white/90 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-900"
                  }`}
                >
                  <span>Launch AdoptIQ.ai</span>
                  <ArrowUpRight className={`w-4 h-4 ${isDark ? "text-white/80" : "text-slate-700"} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
                </a>
              </div>
            </div>

            {/* Integrated Attribution & Copyright Row Inside The Card (+2px font size) */}
            <div className={`relative z-10 pt-3 mt-3.5 sm:mt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[13px] sm:text-[13.5px] ${
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
