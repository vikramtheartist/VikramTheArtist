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
import copilotPlaybookImg from "../../../assets/img/CopilotPlaybook.png";

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
}) => {
  const [activeCategory, setActiveCategory] = useState<"psychology" | "signals" | "interventions" | "outcomes">("psychology");
  const [activeTab, setActiveTab] = useState<"copilot" | "engine">("copilot");
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

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isTransitioningRef = React.useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0
  const resetTimerRef = React.useRef<number | null>(null);
  const engineUnlockTimestampRef = React.useRef<number>(0);
  const SCROLL_THRESHOLD = 160;

  React.useEffect(() => {
    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // Active section in view
      const isInSectionView = rect.top <= window.innerHeight * 0.65 && rect.bottom >= window.innerHeight * 0.35;

      if (!isInSectionView) return;

      // 1. While on Slide 1 (Copilot) and user scrolls Down -> PREVENT vertical scroll and switch to Slide 2
      if (activeTab === "copilot" && e.deltaY > 0) {
        e.preventDefault();
        if (isTransitioningRef.current) return;

        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

        accumulatedDelta += e.deltaY * 0.7;
        const progress = Math.min(1, Math.max(0, accumulatedDelta / SCROLL_THRESHOLD));
        setScrollProgress(progress);

        if (accumulatedDelta >= SCROLL_THRESHOLD) {
          isTransitioningRef.current = true;
          setActiveTab("engine");
          // Lock on Slide 2 for at least 2.2 seconds before permitting scroll down to footer
          engineUnlockTimestampRef.current = Date.now() + 2200;
          accumulatedDelta = 0;
          setTimeout(() => {
            setScrollProgress(0);
            isTransitioningRef.current = false;
          }, 750);
        } else {
          resetTimerRef.current = window.setTimeout(() => {
            accumulatedDelta = 0;
            setScrollProgress(0);
          }, 350);
        }
        return;
      }

      // 2. While on Slide 2 (Engine) and user scrolls Down -> Dwell lock prevents premature scroll to footer
      if (activeTab === "engine" && e.deltaY > 0) {
        if (Date.now() < engineUnlockTimestampRef.current) {
          e.preventDefault();
          return;
        }
        // Once dwell time has elapsed, naturally allows continuing scroll to footer!
      }

      // 3. While on Slide 2 (Engine) and user scrolls Up -> PREVENT vertical scroll and switch back to Slide 1
      if (activeTab === "engine" && e.deltaY < 0) {
        e.preventDefault();
        if (isTransitioningRef.current) return;

        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

        accumulatedDelta += Math.abs(e.deltaY) * 0.7;
        const progress = Math.min(1, Math.max(0, accumulatedDelta / SCROLL_THRESHOLD));
        setScrollProgress(progress);

        if (accumulatedDelta >= SCROLL_THRESHOLD) {
          isTransitioningRef.current = true;
          setActiveTab("copilot");
          accumulatedDelta = 0;
          setTimeout(() => {
            setScrollProgress(0);
            isTransitioningRef.current = false;
          }, 750);
        } else {
          resetTimerRef.current = window.setTimeout(() => {
            accumulatedDelta = 0;
            setScrollProgress(0);
          }, 350);
        }
        return;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInSectionView = rect.top <= window.innerHeight * 0.65 && rect.bottom >= window.innerHeight * 0.35;

      if (!isInSectionView) return;

      const deltaY = touchStartY - e.touches[0].clientY;

      // Swipe Up (scroll Down) on Copilot
      if (deltaY > 0 && activeTab === "copilot") {
        e.preventDefault();
        if (isTransitioningRef.current) return;
        const progress = Math.min(1, Math.max(0, deltaY / 100));
        setScrollProgress(progress);
        if (deltaY > 100) {
          isTransitioningRef.current = true;
          setActiveTab("engine");
          engineUnlockTimestampRef.current = Date.now() + 2200;
          setTimeout(() => {
            setScrollProgress(0);
            isTransitioningRef.current = false;
          }, 750);
        }
      }
      // Swipe Up (scroll Down) on Engine before dwell time
      else if (deltaY > 0 && activeTab === "engine") {
        if (Date.now() < engineUnlockTimestampRef.current) {
          e.preventDefault();
        }
      }
      // Swipe Down (scroll Up) on Engine
      else if (deltaY < 0 && activeTab === "engine") {
        e.preventDefault();
        if (isTransitioningRef.current) return;
        const progress = Math.min(1, Math.max(0, Math.abs(deltaY) / 100));
        setScrollProgress(progress);
        if (deltaY < -100) {
          isTransitioningRef.current = true;
          setActiveTab("copilot");
          setTimeout(() => {
            setScrollProgress(0);
            isTransitioningRef.current = false;
          }, 750);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [activeTab]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="adopt-page-wrapper selection:bg-indigo-500 selection:text-white relative">
      {/* ── CONTINUOUS FLOWING MOODBOARD GRADIENT ATMOSPHERE (FULL PAGE) ─ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Top Hero Glows: Pastel Mint/Cyan + Iris Violet/Lilac + Strawberry Pink */}
        <div className="absolute -top-24 -left-20 w-[900px] h-[900px] bg-gradient-to-br from-cyan-200/40 via-sky-100/25 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -top-10 right-0 w-[850px] h-[850px] bg-gradient-to-bl from-pink-200/35 via-purple-200/25 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[450px] left-[25%] w-[700px] h-[550px] bg-gradient-to-tr from-violet-200/25 via-fuchsia-100/20 to-transparent rounded-full blur-[130px]" />

        {/* Section 2 (Core Problem) Flow */}
        <div className="absolute top-[1000px] -left-10 w-[850px] h-[800px] bg-gradient-to-r from-blue-200/30 via-indigo-100/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[1350px] -right-10 w-[900px] h-[850px] bg-gradient-to-l from-pink-200/35 via-rose-100/20 to-transparent rounded-full blur-[150px]" />

        {/* Section 3 (5 Stages) Flow */}
        <div className="absolute top-[1900px] left-[5%] w-[950px] h-[800px] bg-gradient-to-br from-cyan-200/35 via-sky-100/25 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[2300px] right-[5%] w-[900px] h-[800px] bg-gradient-to-bl from-purple-200/35 via-pink-200/25 to-transparent rounded-full blur-[140px]" />

        {/* Section 4 & 5 (Case Study & AdoptIQ) Flow */}
        <div className="absolute top-[2900px] -left-20 w-[950px] h-[900px] bg-gradient-to-tr from-violet-200/30 via-sky-100/25 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-[3500px] right-0 w-[950px] h-[850px] bg-gradient-to-l from-pink-200/35 via-purple-100/25 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[4100px] left-[10%] w-[900px] h-[750px] bg-gradient-to-r from-cyan-200/30 via-indigo-100/20 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* ── TOP STICKY NAVIGATION BAR ─────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/40 transition-all">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Back to Portfolio */}
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full transition-all shadow-xs cursor-pointer hover:border-slate-300"
              >
                ← Portfolio
              </button>
            )}
          </div>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#475569]">
            <a href="#problem" className="hover:text-[#4344fa] transition-colors py-1 cursor-pointer">The Problem</a>
            <a href="#playbook-stages" className="hover:text-[#4344fa] transition-colors py-1 cursor-pointer">5 Stages</a>
            <a href="#case-study" className="hover:text-[#4344fa] transition-colors py-1 cursor-pointer">Copilot Case Study</a>
            <a href="#adoptiq" className="hover:text-[#4344fa] transition-colors py-1 cursor-pointer">AdoptIQ Engine</a>
          </nav>

          {/* Right Spacer for balanced centering */}
          <div className="w-24 hidden sm:block" />
        </div>
      </header>

      {/* ── SECTION 1: HERO (STICKY WITH PARALLAX BLUR EFFECT) ──────── */}
      <section
        className="sticky top-0 z-10 min-h-[85vh] flex flex-col justify-between pt-20 pb-12 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent will-change-transform transition-all duration-150 ease-out"
        style={{
          filter: `blur(${Math.min(Math.max((scrollY - 40) * 0.024, 0), 16)}px)`,
          opacity: Math.max(1 - Math.max(scrollY - 60, 0) * 0.0016, 0.2),
          transform: `scale(${Math.max(1 - Math.max(scrollY - 40, 0) * 0.00028, 0.95)})`,
          transformOrigin: "50% 30%",
        }}
      >
        {/* Background Visual Asset: 8K 3D Translucent Waves & Glass Play Prism with Parallax Depth */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
          {/* Multi-axis 3D Parallax Prism Container */}
          <div
            className="w-full h-full will-change-transform transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${50 + Math.min(scrollY * 0.18, 120) + mousePos.x * 20}px, ${Math.min(scrollY * -0.08, -60) + mousePos.y * 14}px, 0) scale(${1 + Math.min(scrollY * 0.0008, 0.28)}) perspective(1000px) rotateY(${Math.min(scrollY * -0.016, 6) + mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 3}deg)`,
              transformOrigin: "78% 50%",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}IMG/adopt_hero_glass_bg.jpg`}
              alt="ADOPT 8K 3D Glass Artwork"
              className="w-full h-full object-cover object-[80%_center] lg:object-[78%_center] opacity-95 transition-opacity duration-700 animate-hero-float scale-105"
            />
          </div>

          {/* Floating Atmospheric Sparkle Orbs with Counter-Parallax */}
          <div
            className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400/30 to-violet-400/40 blur-xl will-change-transform transition-transform duration-300"
            style={{
              transform: `translate3d(${mousePos.x * -28}px, ${scrollY * -0.2 + mousePos.y * -20}px, 0)`,
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400/25 to-purple-400/35 blur-2xl will-change-transform transition-transform duration-300"
            style={{
              transform: `translate3d(${mousePos.x * 22}px, ${scrollY * -0.15 + mousePos.y * 18}px, 0)`,
            }}
          />

          {/* Seamless luminous ambient gradient overlay on the left to perfectly integrate text */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to right, rgba(243, 248, 254, 0.98) 0%, rgba(243, 248, 254, 0.85) 32%, rgba(243, 248, 254, 0.45) 52%, transparent 78%)"
            }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10 my-auto">
          {/* Left Text Column with Layered Parallax Offsets */}
          <div
            className="max-w-2xl text-left will-change-transform transition-transform duration-200"
            style={{
              transform: `translate3d(${mousePos.x * -6}px, ${scrollY * -0.06 + mousePos.y * -4}px, 0)`,
            }}
          >
            {/* Eyebrow Badge */}
            <div className="mb-4">
              <div className="adopt-hero-badge hover:scale-105 transition-transform cursor-default">
                <span className="text-[12px] leading-none text-[#6366f1] animate-pulse">✦</span>
                <span>THE ADOPT PLAYBOOK</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-[68px] sm:text-[84px] lg:text-[96px] font-black tracking-[-0.04em] text-[#0a0e1a] leading-[0.92] mb-4">
              ADOPT
            </h1>

            {/* Sub-headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#1e293b] leading-[1.25] mb-4">
              A Behavioral Operating System
              <span className="block font-bold text-[#1e293b]">
                for Enterprise AI Adoption
              </span>
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] text-[#64748b] leading-[1.6] max-w-[480px] mb-7 font-normal">
              ADOPT helps teams move users from awareness to advocacy by designing for human behavior, not just feature launches.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
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
                className="adopt-hero-btn-secondary cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm"
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
              {/* Stat 1: 1M WAU */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#f3f0fe]/90 backdrop-blur-md flex items-center justify-center text-[#6d28d9] shrink-0 shadow-2xs border border-purple-100/50 group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[20px] font-black text-[#0f172a] leading-tight">1M</div>
                  <div className="text-[12px] font-medium text-[#64748b]">WAU</div>
                </div>
              </div>

              {/* Stat 2: 5-stage framework */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#e8f1ff]/90 backdrop-blur-md flex items-center justify-center text-[#2563eb] shrink-0 shadow-2xs border border-sky-100/50 group-hover:scale-110 transition-transform">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[20px] font-black text-[#0f172a] leading-tight">5-stage</div>
                  <div className="text-[12px] font-medium text-[#64748b]">framework</div>
                </div>
              </div>

              {/* Stat 3: 300K -> 1M growth */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#fef2f2]/90 backdrop-blur-md flex items-center justify-center text-[#e11d48] shrink-0 shadow-2xs border border-rose-100/50 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[20px] font-black text-[#0f172a] leading-tight">300K → 1M</div>
                  <div className="text-[12px] font-medium text-[#64748b]">Growth in WAU</div>
                </div>
              </div>

              {/* Stat 4: Behavior-first */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#ecfdf5]/90 backdrop-blur-md flex items-center justify-center text-[#059669] shrink-0 shadow-2xs border border-emerald-100/50 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[20px] font-black text-[#0f172a] leading-tight">Behavior-first</div>
                  <div className="text-[12px] font-medium text-[#64748b]">by design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CORE PROBLEM (FULL-WIDTH PARALLAX CENTERPIECE) ──── */}
      <section
        id="problem"
        className="w-full min-h-[100vh] lg:min-h-[108vh] relative z-20 py-20 lg:pt-24 lg:pb-36 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#fbfcff]/95 via-[#f6f9fe] to-[#f4f7fe]"
      >
        {/* Full-Bleed Parallax Iceberg Artwork Background with 3D Depth */}
        <div className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden">
          <div
            className="w-full h-full absolute inset-0 will-change-transform transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `translate3d(${mousePos.x * 8}px, ${(scrollY - 500) * -0.035 + mousePos.y * 6}px, 0) perspective(1200px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 1.5}deg)`,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}IMG/adopt_iceberg_light_bg.jpg`}
              alt="AI Adoption Iceberg Analogy"
              className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700"
            />
          </div>

          {/* Light ambient scrim gradients for perfect text readability edge-to-edge */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.76) 28%, rgba(255,255,255,0.18) 52%, transparent 70%), linear-gradient(to top, rgba(244,247,254,0.9) 0%, transparent 12%), linear-gradient(to bottom, rgba(244,247,254,0.9) 0%, transparent 12%)",
            }}
          />
        </div>

        {/* Full-Width Centered Content Container */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10 my-auto flex flex-col justify-between min-h-[640px]">
          {/* Top Row (Above Water / Upper Content Area) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Top Left: Badge, Headline & Context */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f0fe] border border-[#e0e7ff] text-[#6366f1] text-[11px] font-extrabold tracking-wider uppercase shadow-2xs">
                  <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                  <span>THE CORE PROBLEM</span>
                </div>
                <div className="w-8 h-[2.5px] bg-[#38bdf8] rounded-full mt-2.5 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              </div>

              <h2 className="text-[44px] sm:text-[52px] lg:text-[58px] font-black text-[#0a0e1a] tracking-[-0.035em] leading-[1.04] mb-4 font-sans">
                AI adoption is not<br />
                a feature problem.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea]">
                  It’s a behavior<br className="hidden sm:inline" /> problem.
                </span>
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#64748b] leading-relaxed max-w-[420px] font-normal mb-8">
                Even powerful products fail when they collide with familiar habits, uncertainty, and inertia.
              </p>
            </div>

            {/* Top Right: ABOVE THE SURFACE Callout Card with Sonar Beacon & Interactive 3D Tilt */}
            <div className="lg:col-span-6 flex justify-start lg:justify-end">
              <div
                className="relative rounded-[24px] bg-white/92 backdrop-blur-xl border border-white/80 p-5 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] w-full max-w-[320px] text-left lg:mr-4 mt-2 lg:mt-2 animate-adopt-float-1 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)] group cursor-default"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 3.5}deg)`,
                }}
              >
                {/* Connecting Line to Mountain Peak with Pulsing Sonar Beacon */}
                <div className="hidden lg:block absolute -left-16 top-6 w-16 h-8 pointer-events-none">
                  {/* Glowing Radar Sonar Ping Node */}
                  <div className="absolute left-0 top-[25px] w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#6366f1] animate-adopt-sonar" />
                  <svg className="w-full h-full" viewBox="0 0 64 32" fill="none">
                    <path d="M64 10 L 22 10 L 0 28" stroke="#a5b4fc" strokeWidth="1.4" className="animate-adopt-dash" />
                    <circle cx="0" cy="28" r="3.5" fill="#6366f1" />
                    <circle cx="0" cy="28" r="6" stroke="#c7d2fe" strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>

                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] border border-[#c7d2fe] flex items-center justify-center text-[#6366f1] shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                    <Mountain className="w-5 h-5 text-[#6366f1] stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-black text-[#0f172a] tracking-wider uppercase">
                      ABOVE THE SURFACE
                    </div>
                    <div className="text-[12px] text-[#64748b] font-medium">
                      What teams optimize
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pl-2">
                  {[
                    "Advanced capabilities",
                    "Continuous innovation",
                    "Feature-rich roadmap",
                    "Enterprise-grade security",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[13px] font-medium text-[#334155] hover:text-[#0f172a] transition-colors">
                      <div className="w-2 h-2 rounded-full bg-indigo-100 border border-[#818cf8] flex items-center justify-center shrink-0 shadow-xs">
                        <div className="w-1 h-1 rounded-full bg-[#6366f1]" />
                      </div>
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
                  className="flex items-start gap-3.5 group cursor-default transition-all duration-300 hover:translate-x-1.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f5f3ff] border border-[#ddd6fe] flex items-center justify-center text-[#7c3aed] shrink-0 mt-0.5 shadow-2xs group-hover:bg-[#ede9fe] group-hover:border-[#c4b5fd] group-hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all">
                    <Check className="w-3.5 h-3.5 text-[#7c3aed] stroke-[2.5]" />
                  </div>
                  <span className="text-[14px] sm:text-[15px] text-[#1e293b] font-medium leading-snug group-hover:text-[#0f172a] transition-colors">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Right: BELOW THE SURFACE Callout Card with Sonar Beacon & Interactive 3D Tilt */}
            <div className="lg:col-span-6 flex justify-start lg:justify-end">
              <div
                className="relative rounded-[24px] bg-white/92 backdrop-blur-xl border border-white/80 p-5 shadow-[0_15px_35px_-8px_rgba(99,102,241,0.14)] w-full max-w-[320px] text-left lg:mr-4 mb-2 animate-adopt-float-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_22px_45px_-8px_rgba(99,102,241,0.25)] group cursor-default"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 3.5}deg) rotateX(${-mousePos.y * 3.5}deg)`,
                }}
              >
                {/* Connecting Line to Submerged Iceberg with Pulsing Sonar Beacon */}
                <div className="hidden lg:block absolute -left-16 top-6 w-16 h-4 pointer-events-none">
                  {/* Glowing Radar Sonar Ping Node */}
                  <div className="absolute left-0 top-[8px] w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#38bdf8] animate-adopt-sonar" />
                  <svg className="w-full h-full" viewBox="0 0 64 16" fill="none">
                    <path d="M64 8 L 0 8" stroke="#38bdf8" strokeWidth="1.4" className="animate-adopt-dash" />
                    <circle cx="0" cy="8" r="3.5" fill="#38bdf8" />
                    <circle cx="0" cy="8" r="6" stroke="#7dd3fc" strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>

                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] border border-[#c7d2fe] flex items-center justify-center text-[#6366f1] shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                    <Lock className="w-5 h-5 text-[#6366f1] stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-black text-[#0f172a] tracking-wider uppercase">
                      BELOW THE SURFACE
                    </div>
                    <div className="text-[12px] text-[#64748b] font-medium">
                      What holds adoption back
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pl-2">
                  {[
                    "Familiar habits",
                    "Fear of change",
                    "Unclear personal value",
                    "Low motivation to switch",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[13px] font-medium text-[#334155] hover:text-[#0f172a] transition-colors">
                      <div className="w-2 h-2 rounded-full bg-indigo-100 border border-[#818cf8] flex items-center justify-center shrink-0 shadow-xs">
                        <div className="w-1 h-1 rounded-full bg-[#6366f1]" />
                      </div>
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[10px] font-extrabold text-slate-700 tracking-wider uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                  Psychology
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[10px] font-extrabold text-slate-700 tracking-wider uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
                  Signals
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[10px] font-extrabold text-slate-700 tracking-wider uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  Interventions
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[10px] font-extrabold text-slate-700 tracking-wider uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  Outcomes
                </span>
              </div>

              <h2 className="text-[46px] sm:text-[54px] lg:text-[62px] font-black text-[#0a0e1a] tracking-tight leading-[1.05] mb-3">
                The 5 Stages of the<br />
                ADOPT Playbook
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#64748b] font-normal leading-relaxed mb-6">
                A behavioral journey that moves users from discovery to advocacy. Click any card below to launch the circular 3D exploration view.
              </p>

              {/* Exploration Hint Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                  <span className="text-[#6d28d9] font-bold">✦</span>
                  <span>Click any card to explore full behavioral framework & tactics</span>
                </div>
              </div>
            </div>

            {/* Right: Journey Insight Card */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="rounded-[28px] bg-white/92 backdrop-blur-xl border border-slate-200/70 p-6 shadow-[0_15px_35px_-8px_rgba(15,23,42,0.05)] flex items-center justify-between gap-6 max-w-[420px] w-full">
                <div>
                  <div className="flex items-center gap-1.5 text-[#7c3aed] text-[11px] font-bold tracking-wider uppercase mb-1.5">
                    <span>📈</span>
                    <span>JOURNEY INSIGHT</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#334155] leading-snug">
                    People adopt in stages.<br />
                    Design for where they are,<br />
                    not where you want them to be.
                  </p>
                </div>

                {/* Upward Curve Mini Graph */}
                <div className="w-[80px] h-[80px] rounded-[20px] bg-gradient-to-tr from-[#f5f3ff] via-[#fdf4ff] to-[#fff1f2] border border-[#f3e8ff] flex items-center justify-center p-2 shrink-0 shadow-2xs">
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

          {/* ── THE 5 FLAT CONNECTED STAGE CARDS (UNIFORM HEIGHT GRID) ─ */}
          <div className="relative pt-4 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10 items-stretch">
              {STAGES_DATA.map((stage, idx) => (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageDetail(idx)}
                  className="flex flex-col h-full cursor-pointer group"
                >
                  <div className="w-full h-full rounded-[32px] sm:rounded-[36px] bg-white/92 backdrop-blur-xl border border-slate-200/75 p-5 sm:p-6 flex flex-col justify-between shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] relative min-h-[490px] lg:min-h-[510px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_-8px_rgba(67,68,250,0.16)] hover:border-[#c7d2fe]">
                    {/* Top Half: Number & Character */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="text-[14px] font-black tracking-tight"
                          style={{ color: stage.color }}
                        >
                          {stage.num}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#4344fa] transition-colors flex items-center gap-1">
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>

                      {/* Character Illustration */}
                      <div className="w-full h-64 sm:h-70 lg:h-74 flex items-center justify-center my-1 relative z-10 overflow-visible">
                        <img
                          src={`${import.meta.env.BASE_URL}IMG/${stage.image}`}
                          alt={`${stage.title} Character`}
                          className="w-auto h-full max-h-full object-contain drop-shadow-md scale-110 sm:scale-115 transition-transform duration-300 group-hover:scale-120"
                        />
                      </div>
                    </div>

                    {/* Bottom Half: Title & Question Quote Pill */}
                    <div className="mt-auto pt-2 flex flex-col items-center text-center">
                      <h3 className="text-[22px] font-black text-[#0a0e1a] leading-tight mb-2.5 text-center">
                        {stage.title}
                      </h3>

                      <div
                        className={`w-full py-2.5 px-3 rounded-2xl ${stage.badgeBg} border ${stage.badgeBorder} text-[12px] font-bold text-center tracking-tight shadow-2xs transition-all group-hover:shadow-xs`}
                        style={{ color: stage.color }}
                      >
                        {stage.question}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── INTERACTIVE CIRCULAR STAGE DEEP-DIVE MODAL / VIEW ──────── */}
          {activeStageDetail !== null && (
            <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in">
              <div
                className="relative w-full max-w-[1400px] max-h-[92vh] overflow-y-auto adopt-custom-scrollbar rounded-[36px] bg-white/95 backdrop-blur-2xl border border-white shadow-[0_30px_90px_-20px_rgba(15,23,42,0.35)] p-6 sm:p-10 lg:p-12 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar: Minimalist Close Button */}
                <div className="flex items-center justify-end pb-3 mb-4">
                  <button
                    onClick={() => setActiveStageDetail(null)}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* ── Main Split Content: Left Circular 3D Ring + Center/Right Rich Details ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Pure 3D Revolving Character Carousel */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-slate-200/80">
                    {/* Compact 3D Viewport */}
                    <div className="adopt-3d-compact-viewport">
                      <div className="adopt-3d-compact-ground-shadow" />

                      {/* Left / Right Arrow Controls */}
                      <button
                        onClick={() =>
                          setActiveStageDetail((prev) =>
                            prev === null || prev === 0
                              ? STAGES_DATA.length - 1
                              : prev - 1
                          )
                        }
                        className="absolute left-1 sm:left-2 z-40 w-10 h-10 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#4344fa] hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                        className="absolute right-1 sm:right-2 z-40 w-10 h-10 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#4344fa] hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                                  ? "drop-shadow(0 18px 30px rgba(0,0,0,0.2))"
                                  : isNeighbor
                                  ? "drop-shadow(0 8px 16px rgba(0,0,0,0.1)) blur(0.5px)"
                                  : "blur(2px)",
                              }}
                            >
                              {/* Pure 3D Character Illustration Floating in Space */}
                              <div className="w-full h-full flex flex-col items-center justify-center relative select-none">
                                {/* Floor Contact Shadow */}
                                {isActive && (
                                  <div className="absolute bottom-3 w-28 h-6 bg-slate-900/18 rounded-full blur-md -z-10" />
                                )}
                                <img
                                  src={`${import.meta.env.BASE_URL}IMG/${stage.image}`}
                                  alt={`${stage.title} Character`}
                                  className={`w-auto h-full max-h-full object-contain transition-transform duration-500 ${
                                    isActive
                                      ? "scale-105 drop-shadow-xl"
                                      : "scale-90 hover:scale-95"
                                  }`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Active Stage Indicator Pill cleanly below the character with adequate vertical clearance */}
                    <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/95 border border-slate-200/90 shadow-xs text-sm font-extrabold text-[#0f172a] relative z-30">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: STAGES_DATA[activeStageDetail].color }}
                      />
                      <span>
                        {STAGES_DATA[activeStageDetail].num} {STAGES_DATA[activeStageDetail].title}
                      </span>
                    </div>

                    <div className="mt-2 text-center text-xs text-slate-400 font-medium">
                      Click characters or arrows to revolve 3D stage ring
                    </div>
                  </div>

                  {/* Center & Right Section: Rich Stage Details (Clean layout without duplicate static character) */}
                  <div className="lg:col-span-7 flex flex-col items-start justify-between">
                    {/* Header: Figma-styled Red Selection Bounding Box Title & Tagline */}
                    <div className="w-full mb-6">
                      {/* Figma-style Selection Bounding Box around Title */}
                      <div className="relative inline-block border-2 border-dashed border-[#f43f5e] px-4 py-2 rounded-xl mb-4 bg-rose-50/20">
                        {/* 4 Corner Handles */}
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#f43f5e] border border-white shadow-2xs" />
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#f43f5e] border border-white shadow-2xs" />
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#f43f5e] border border-white shadow-2xs" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#f43f5e] border border-white shadow-2xs" />

                        <h2
                          className="text-[44px] sm:text-[56px] font-black tracking-tight leading-none"
                          style={{ color: STAGES_DATA[activeStageDetail].color }}
                        >
                          {STAGES_DATA[activeStageDetail].title}
                        </h2>
                      </div>

                      {/* Bold Tagline */}
                      <h3 className="text-[20px] sm:text-[24px] font-black text-[#0f172a] tracking-tight leading-tight max-w-xl">
                        {STAGES_DATA[activeStageDetail].tagline}
                      </h3>
                    </div>

                    {/* Explanatory Body Concept */}
                    <p className="text-[15px] sm:text-[16px] text-[#334155] leading-relaxed mb-6 font-normal max-w-3xl">
                      {STAGES_DATA[activeStageDetail].body}
                    </p>

                    {/* Quote Box with Seth Godin / Author Attribution */}
                    <div className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#f8fafc] via-[#fdf4ff] to-[#f8fafc] border border-slate-200/80 mb-8 shadow-2xs">
                      <div className="text-[17px] sm:text-[19px] font-serif italic text-[#0f172a] leading-snug">
                        “{STAGES_DATA[activeStageDetail].quote}”
                        <span className="not-italic text-sm font-sans font-semibold text-[#64748b] ml-3">
                          — {STAGES_DATA[activeStageDetail].author}
                        </span>
                      </div>
                    </div>

                    {/* ── "THROUGH" Tactics & Channels Grid ── */}
                    <div className="w-full mb-8">
                      <div className="text-[12px] font-black tracking-widest text-[#64748b] uppercase mb-4">
                        T H R O U G H
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {STAGES_DATA[activeStageDetail].through.map((item, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex flex-col items-start text-left hover:border-slate-300 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: STAGES_DATA[activeStageDetail].color }}
                              />
                              <h4 className="text-[14px] font-bold text-[#0f172a]">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-[13px] text-[#64748b] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Principles Footer Bar */}
                    <div className="w-full p-4 rounded-2xl bg-[#f0f9ff]/80 border border-[#bae6fd]/80 text-[#0369a1] text-[13px] sm:text-[14px] leading-relaxed shadow-2xs">
                      <strong className="font-extrabold text-[#0284c7] mr-1.5">
                        Key Principles:
                      </strong>
                      <span>{STAGES_DATA[activeStageDetail].keyPrinciples}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Bottom Summary Ribbon (Concentric Radar + 5 Timeline Steps) ─ */}
          <div className="mt-8 rounded-[26px] bg-white/92 backdrop-blur-xl border border-slate-200/70 p-6 sm:p-7 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Radar and Text */}
            <div className="lg:col-span-5 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0 lg:pr-6">
              {/* Concentric Color Ring Icon */}
              <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-pink-400 shrink-0 flex items-center justify-center shadow-xs">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-200 border-dashed animate-spin-slow flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[16px] font-extrabold text-[#0f172a] leading-snug">
                  Behavior changes in<br />
                  stages, not all at once.
                </h4>
                <p className="text-[13px] text-[#64748b] mt-0.5 font-normal">
                  Design the right experience for the right mindset.
                </p>
              </div>
            </div>

            {/* Right 5 Steps Connected by Dotted Path */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3 relative">
              {[
                { icon: "📣", title: "Signal", desc: "Something gets their attention", color: "text-[#0284c7]" },
                { icon: "❤️", title: "Emotional Pull", desc: "They see personal relevance", color: "text-[#f43f5e]" },
                { icon: "🚀", title: "First Action", desc: "They try and experience value", color: "text-[#8b5cf6]" },
                { icon: "👑", title: "Reinforcement", desc: "They build skill and confidence", color: "text-[#f59e0b]" },
                { icon: "🌟", title: "Identity Shift", desc: "They become an advocate", color: "text-[#10b981]" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-start p-1.5 relative">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[14px]">{step.icon}</span>
                    <span className="text-[12px] font-bold text-[#0f172a]">{step.title}</span>
                  </div>
                  <span className="text-[11px] text-[#64748b] leading-tight">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL SECTION: CONNECTED SHOWCASE, CTA BANNER & FOOTER ── */}
      {/* (APPLIED PLAYBOOK, AI ADOPTION ENGINE, CLOSING CTA & FOOTER) */}
      <section
        ref={sectionRef}
        id="case-study"
        className="pt-10 sm:pt-14 pb-8 relative overflow-hidden bg-transparent"
      >
        {/* Anchors for navigation links */}
        <div id="adoptiq" className="absolute -top-24 left-0 pointer-events-none" />
        <div id="impact" className="absolute -top-24 left-0 pointer-events-none" />

        {/* Top Interactive Switcher & Navigation Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 lg:mb-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          {/* Left: Dual Interactive Switcher Pill */}
          <div className="inline-flex p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.08)]">
            <button
              onClick={() => setActiveTab("copilot")}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[13px] font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "copilot"
                  ? "bg-gradient-to-r from-[#f43f5e] via-[#c084fc] to-[#6366f1] text-white shadow-[0_4px_16px_rgba(244,63,94,0.4)] scale-100"
                  : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50/80"
              }`}
            >
              <span className="text-[11px] opacity-75">01</span>
              <span>APPLIED PLAYBOOK</span>
            </button>

            <button
              onClick={() => setActiveTab("engine")}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[13px] font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "engine"
                  ? "bg-gradient-to-r from-[#2563eb] via-[#4344fa] to-[#4f46e5] text-white shadow-[0_4px_16px_rgba(37,99,235,0.4)] scale-100"
                  : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50/80"
              }`}
            >
              <span className="text-[11px] opacity-75">02</span>
              <span>AI ADOPTION ENGINE</span>
            </button>
          </div>

          {/* Right: Slide Indicator & Smooth Nav Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black tracking-widest text-[#0f172a] uppercase">
                {activeTab === "copilot" ? "01" : "02"}
              </span>
              <span className="text-xs text-slate-400 font-medium">/ 02</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("copilot")}
                disabled={activeTab === "copilot"}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  activeTab === "copilot"
                    ? "border-slate-200 text-slate-300 opacity-40 cursor-not-allowed"
                    : "border-slate-200/90 bg-white/90 hover:bg-white text-slate-700 shadow-xs hover:border-slate-300 cursor-pointer active:scale-95"
                }`}
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => setActiveTab("engine")}
                disabled={activeTab === "engine"}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  activeTab === "engine"
                    ? "border-slate-200 text-slate-300 opacity-40 cursor-not-allowed"
                    : "border-slate-200/90 bg-white/90 hover:bg-white text-slate-700 shadow-xs hover:border-slate-300 cursor-pointer active:scale-95"
                }`}
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Track with Smooth Cubic Animation */}
        <div className="relative w-full overflow-hidden mb-10 lg:mb-14">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              transform: activeTab === "copilot" ? "translateX(0%)" : "translateX(-100%)",
            }}
          >
            {/* ── SLIDE 1: APPLIED PLAYBOOK (Microsoft Copilot Case Study) ── */}
            <div className="w-full min-w-full shrink-0 flex items-center justify-center">
              <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left: Free-Floating 3D Copilot Playbook Visual with Scroll-Driven Motion */}
                  <div className="lg:col-span-7 relative flex items-center justify-center pointer-events-auto select-none">
                    <img
                      src={copilotPlaybookImg}
                      alt="Microsoft Copilot AI Adoption Playbook 3D Dashboard"
                      style={{
                        transform: `perspective(1000px) rotateY(${scrollProgress * -10}deg) rotateX(${scrollProgress * 6}deg) scale(${1 + scrollProgress * 0.05}) translateZ(${scrollProgress * 25}px)`,
                        filter: `drop-shadow(0 ${25 + scrollProgress * 20}px ${60 + scrollProgress * 30}px rgba(244,63,94,${0.18 + scrollProgress * 0.25}))`,
                      }}
                      className="w-full h-auto max-w-[660px] object-contain transition-transform duration-200 ease-out will-change-transform"
                    />
                  </div>

                  {/* Right: Narrative, Headlines, Metrics & Case Study CTA */}
                  <div className="lg:col-span-5 flex flex-col items-start text-left pl-0 lg:pl-4">
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf2f8] border border-[#fbcfe8] text-[#db2777] text-[11px] font-extrabold tracking-wider uppercase mb-3 shadow-2xs">
                      <span className="text-[12px]">✦</span>
                      <span>APPLIED PLAYBOOK</span>
                    </div>

                    {/* Brand Title with Gradient */}
                    <h2 className="text-[54px] sm:text-[64px] lg:text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] via-[#c084fc] to-[#6366f1] tracking-tight leading-[0.95] mb-2">
                      Microsoft Copilot
                    </h2>

                    {/* Sub-tagline */}
                    <p className="text-[15px] sm:text-[16px] font-semibold text-[#64748b] mb-4 tracking-tight">
                      Enterprise scale AI adoption case study
                    </p>

                    {/* Headline */}
                    <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.15] mb-6 max-w-lg">
                      How behavioral design transformed awareness into repeat usage and advocacy.
                    </h3>

                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-lg mb-5">
                      <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1 hover:border-[#fbcfe8] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                        <div className="text-[19px] font-black text-[#0f172a] leading-tight">
                          936K → 3.4M
                        </div>
                        <div className="text-[11px] text-[#64748b] font-medium">
                          Copilot WAU
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1 hover:border-[#bfdbfe] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                        <div className="text-[19px] font-black text-[#0f172a] leading-tight">
                          336 → 859
                        </div>
                        <div className="text-[11px] text-[#64748b] font-medium">
                          CAC-enabled tenants
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1 hover:border-[#fbcfe8] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#ec4899]" />
                        <div className="text-[19px] font-black text-[#0f172a] leading-tight">
                          509K → 1.5M
                        </div>
                        <div className="text-[11px] text-[#64748b] font-medium">
                          Community WAU
                        </div>
                      </div>
                    </div>

                    {/* 3 Strategic Playbook Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-lg mb-6">
                      <div className="p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1">
                        <span className="text-lg">🧩</span>
                        <span className="text-[11px] font-bold text-[#0f172a] leading-snug">
                          Friction Diagnosis
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1">
                        <span className="text-lg">🧭</span>
                        <span className="text-[11px] font-bold text-[#0f172a] leading-snug">
                          Micro-Interventions
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1">
                        <span className="text-lg">🚀</span>
                        <span className="text-[11px] font-bold text-[#0f172a] leading-snug">
                          Habit Formation
                        </span>
                      </div>
                    </div>

                    {/* CTA Button: Protected Figma Case Study */}
                    <button
                      onClick={() => {
                        setPasswordInput("");
                        setPasswordError("");
                        setShowPasswordModal(true);
                      }}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f97316] via-[#f43f5e] to-[#ec4899] text-white font-bold text-[15px] shadow-[0_12px_28px_-6px_rgba(244,63,94,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer group"
                    >
                      <span>View Copilot Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SLIDE 2: AI ADOPTION ENGINE (AdoptIQ.ai) ──────────────── */}
            <div className="w-full min-w-full shrink-0 flex items-center justify-center">
              <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left: Free-Floating 3D SaaS Dashboard Visual with Scroll-Driven Motion */}
                  <div className="lg:col-span-7 relative flex items-center justify-center pointer-events-auto select-none">
                    <img
                      src={adoptIqImg}
                      alt="AdoptIQ.ai 3D Dashboard Engine at Work"
                      style={{
                        transform: `perspective(1000px) rotateY(${scrollProgress * 10}deg) rotateX(${scrollProgress * -6}deg) scale(${1 + scrollProgress * 0.05}) translateZ(${scrollProgress * 25}px)`,
                        filter: `drop-shadow(0 ${25 + scrollProgress * 20}px ${60 + scrollProgress * 30}px rgba(99,102,241,${0.18 + scrollProgress * 0.25}))`,
                      }}
                      className="w-full h-auto max-w-[660px] object-contain transition-transform duration-200 ease-out will-change-transform"
                    />
                  </div>

                  {/* Right: Brand Title, Headline, Value Cards, Pipeline Pill & CTA */}
                  <div className="lg:col-span-5 flex flex-col items-start text-left pl-0 lg:pl-4">
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f5f3ff] border border-[#e0e7ff] text-[#7c3aed] text-[11px] font-extrabold tracking-wider uppercase mb-3 shadow-2xs">
                      <span className="text-[12px]">✦</span>
                      <span>AI ADOPTION ENGINE</span>
                    </div>

                    {/* Brand Title with Gradient */}
                    <h2 className="text-[54px] sm:text-[66px] lg:text-[74px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#3b82f6] tracking-tight leading-[0.95] mb-2">
                      AdoptIQ.ai
                    </h2>

                    {/* Sub-tagline */}
                    <p className="text-[15px] sm:text-[16px] font-semibold text-[#64748b] mb-4 tracking-tight">
                      The AI engine powered by the ADOPT playbook
                    </p>

                    {/* Headline */}
                    <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.15] mb-6 max-w-lg">
                      Turn messy adoption signals into a prioritized behavioral action plan.
                    </h3>

                    {/* 4 Pipeline Flow Steps in Pill */}
                    <div className="w-full max-w-lg p-2.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs flex items-center justify-between mb-5">
                      {[
                        { icon: "💬", label: "Ask" },
                        { icon: "🧠", label: "Diagnose" },
                        { icon: "📋", label: "Prioritize" },
                        { icon: "🪄", label: "Generate" }
                      ].map((step, idx, arr) => (
                        <React.Fragment key={idx}>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[12px] font-bold text-[#334155]">
                            <span className="text-[14px]">{step.icon}</span>
                            <span>{step.label}</span>
                          </div>
                          {idx < arr.length - 1 && <span className="text-slate-300 text-xs">→</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* 3 Core Value Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-lg mb-5">
                      <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1.5 hover:border-[#c7d2fe] transition-colors">
                        <span className="text-xl">🧠</span>
                        <span className="text-[11px] font-bold text-[#0f172a] leading-snug">
                          Systematize Behavioral Diagnosis
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1.5 hover:border-[#c7d2fe] transition-colors">
                        <span className="text-xl">🪄</span>
                        <span className="text-[11px] font-bold text-[#0f172a] leading-snug">
                          Prescribe Contextual UX Interventions
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs flex flex-col items-start gap-1.5 hover:border-[#c7d2fe] transition-colors">
                        <span className="text-xl">👥</span>
                        <span className="text-[11px] font-bold text-[#0f172a] leading-snug">
                          Unify Cross-Functional Alignment
                        </span>
                      </div>
                    </div>

                    {/* Generate Actionable Plans Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] text-[#16a34a] text-[12px] font-bold mb-7 shadow-2xs">
                      <span>⚡</span>
                      <span>Generate actionable remediation plans</span>
                    </div>

                    {/* CTA Button: Cobalt/Indigo Gradient Pill */}
                    <a
                      href="https://adoptiqai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] via-[#4344fa] to-[#4f46e5] text-white font-bold text-[15px] shadow-[0_12px_28px_-6px_rgba(37,99,235,0.48)] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2.5 cursor-pointer text-decoration-none group"
                    >
                      <span>Launch AdoptIQ.ai</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CLOSING CTA BANNER (Matching Attached Reference Image) ── */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full mb-8">
          <div
            className="relative rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:px-14 lg:py-10 border border-white/50 shadow-[0_20px_55px_-12px_rgba(168,85,247,0.22)] overflow-hidden text-left"
            style={{
              background:
                "linear-gradient(105deg, #7888f8 0%, #9ca7fc 24%, #b79dfb 48%, #d896ea 74%, #f794ca 100%)",
            }}
          >
            {/* Elegant Soft Curved Wave Lines in Background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-45 select-none"
              viewBox="0 0 1200 240"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-50 130 C 280 210, 680 30, 1250 150"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.65"
                fill="none"
              />
              <path
                d="M-50 180 C 380 50, 780 230, 1250 70"
                stroke="white"
                strokeWidth="1.2"
                strokeOpacity="0.45"
                fill="none"
              />
              <path
                d="M-50 40 C 480 170, 880 10, 1250 190"
                stroke="white"
                strokeWidth="0.8"
                strokeOpacity="0.35"
                fill="none"
              />
            </svg>

            {/* Glowing Atmosphere Nodes */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Left Copy */}
              <div className="max-w-xl">
                <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-[1.12] mb-2">
                  Design for behavior.<br />
                  Build what lasts.
                </h2>
                <p className="text-white/95 text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-lg">
                  ADOPT is the blueprint for turning AI potential into human progress—at scale.
                </p>
              </div>

              {/* Right CTA Buttons (Matching Attached Visual Exactly) */}
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                {/* 1. Launch the Playbook (Purple Gradient Pill + Circular Arrow) */}
                <button
                  onClick={onExplorePlaybook || (() => scrollTo("playbook-stages"))}
                  className="pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] text-white font-bold text-[14px] shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)] border border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <span>Launch the Playbook</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                {/* 2. Launch AdoptIQ.ai (Glossy White Pill + Purple Icon) */}
                <a
                  href="https://adoptiqai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-[#1e293b] font-bold text-[14px] shadow-sm hover:shadow-md hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 text-decoration-none group"
                >
                  <span>Launch AdoptIQ.ai</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8b5cf6] stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ATTRIBUTION LINE ─────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full pt-4 border-t border-slate-200/60 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-800">ADOPT</span>
              <span>— A Behavioral Operating System for Enterprise AI Adoption</span>
            </div>
            <div>
              <span>Crafted with pixel-precision by Vikram &bull; All rights reserved</span>
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
