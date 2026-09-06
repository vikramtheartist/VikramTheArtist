import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Eye,
  Shield,
  ShieldCheck,
  ShieldAlert,
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
  Database,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Server,
  Layers,
  Search,
  Sliders,
  Info,
  Check
} from "lucide-react";
import "../../../styles/adopt-landing.css";
import "@/styles/copilot-case-study.css";

const PLAYBOOK_PASSWORD = "designtoimproveworld";

interface CaseStudyDataSecurityProps {
  onBack?: () => void;
  mode?: "dark" | "light";
  initialMode?: "dark" | "light";
  onToggleTheme?: () => void;
}

export function CaseStudyDataSecurity({
  onBack,
  mode: controlledMode,
  initialMode = "light",
  onToggleTheme,
}: CaseStudyDataSecurityProps) {
  // Theme State
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
      sessionStorage.removeItem("datasecurity_case_study_unlocked");
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

  // Navigation & Scroll Progress
  const [activeChapter, setActiveChapter] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState<boolean>(false);

  // Active User Journey Stage Selector
  const [selectedJourneyStage, setSelectedJourneyStage] = useState<
    "onboard" | "discover" | "boundary" | "monitor" | "resolve"
  >("onboard");

  // Main Tabs in Stage Explorer: 1) Architecture & Flow 2) Interactive Workspace
  const [journeyTab, setJourneyTab] = useState<"architecture" | "workspace">("architecture");

  // Selected Initiative / Feature in Workspace (A, B, C, D)
  const [openInitiative, setOpenInitiative] = useState<"A" | "B" | "C" | "D">("A");

  // Lightbox Modal State
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    annotation?: string;
    customContent?: React.ReactNode;
  }>({
    isOpen: false,
    title: "",
    subtitle: "",
    annotation: "",
  });

  const openLightbox = useCallback((title: string, subtitle: string, annotation?: string, customContent?: React.ReactNode) => {
    setLightbox({ isOpen: true, title, subtitle, annotation, customContent });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox]);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      const sectionToTabMap: Record<string, string> = {
        hero: "hero",
        challenge: "challenge",
        research: "research",
        journey: "journey",
        mvp: "mvp",
        impact: "impact",
      };
      const chapters = ["hero", "challenge", "research", "journey", "mvp", "impact"];
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

  // 5-Stage Journey Data
  const journeyStagesData = {
    onboard: {
      id: "onboard",
      num: "01",
      title: "Onboard",
      subTitle: "Service Activation & Setup",
      score: 88,
      status: "Streamlined 1-Click Activation",
      statusColor: isDark ? "text-sky-400" : "text-sky-600",
      statusBadge: isDark ? "bg-sky-950/80 text-sky-300 border-sky-500/40" : "bg-sky-50 text-sky-700 border-sky-200",
      barColor: "#0284c7",
      icon: Server,
      oneLiner: "Effortlessly onboard your organization to the DSPM platform in Security Command Center Enterprise.",
      description: "Connect cloud accounts, configure initial permission boundaries, and grant automated service account access without disrupting live workloads.",
      whyItMatters: [
        "Brownfield discovery prompts existing SCCE enterprise customers with zero configuration friction",
        "Single 'Activate' action handles Service Account IAM binding and resource provisioning automatically",
        "Clear compliance consent disclosures build administrative confidence before deployment",
      ],
      initiatives: [
        { code: "A", label: "SCCE Discovery Hub", desc: "Surface DSPM activation cues directly inside Security Command Center Enterprise overview." },
        { code: "B", label: "Automated IAM Provisioning", desc: "Grant granular least-privilege roles to service accounts in a single confirmed action." },
        { code: "C", label: "Setup Progress Checklist", desc: "Guide administrators through resource connection, value exposure, and first scans." },
        { code: "D", label: "Multi-Cloud Connectors", desc: "Connect Google Cloud projects, AWS organizations, and Azure tenants through unified auth." },
      ],
    },
    discover: {
      id: "discover",
      num: "02",
      title: "Discover",
      subTitle: "Automated Data Discovery & Classification",
      score: 94,
      status: "Continuous Data Inventory",
      statusColor: isDark ? "text-indigo-400" : "text-indigo-600",
      statusBadge: isDark ? "bg-indigo-950/80 text-indigo-300 border-indigo-500/40" : "bg-indigo-50 text-indigo-700 border-indigo-200",
      barColor: "#6366f1",
      icon: Search,
      oneLiner: "Gain a comprehensive, real-time map of all data assets across multi-cloud environments.",
      description: "Identify structured and unstructured sensitive data, classify it automatically by type and sensitivity (PII, Financial, Secrets, Health), and trace data flow paths.",
      whyItMatters: [
        "Automated continuous scanning eliminates blind spots caused by shadow data and ad-hoc buckets",
        "Classifies BigQuery, Cloud Storage, SQL, and external data lakes by risk tier in real time",
        "Data map visualization shows regional residency, cross-border flows, and violation density",
      ],
      initiatives: [
        { code: "A", label: "Interactive Data Map", desc: "Visual geography explorer mapping storage volume, residency, and violation bubbles globally." },
        { code: "B", label: "Automated Risk Classifier", desc: "Tag PII, credentials, API keys, and financial assets using pre-trained ML classifiers." },
        { code: "C", label: "Data Flow Graph", desc: "Trace cross-region data transfers, public exposures, and untracked replication pipelines." },
        { code: "D", label: "Asset Hierarchy Explorer", desc: "Navigate organization folders, projects, buckets, and tables with instant search." },
      ],
    },
    boundary: {
      id: "boundary",
      num: "03",
      title: "Set Boundary",
      subTitle: "Define Posture & Policy Enforcement",
      score: 91,
      status: "Custom Posture Governance",
      statusColor: isDark ? "text-purple-400" : "text-purple-600",
      statusBadge: isDark ? "bg-purple-950/80 text-purple-300 border-purple-500/40" : "bg-purple-50 text-purple-700 border-purple-200",
      barColor: "#a855f7",
      icon: Layers,
      oneLiner: "Establish clear security boundaries and enforce automated data protection policies.",
      description: "Group sensitive workloads into resource groups, attach granular policy sets (Access governance, CMEK encryption, DLP rules), and enforce continuous compliance.",
      whyItMatters: [
        "Enables security teams to define data perimeters across folders and organizational units",
        "Pre-built posture templates align instantly with GDPR, HIPAA, PCI-DSS, and NIST standards",
        "Policy simulation tests the impact of enforcement rules before pushing to production",
      ],
      initiatives: [
        { code: "A", label: "Resource Group Builder", desc: "Define organizational resource boundaries by environment, classification, or compliance tag." },
        { code: "B", label: "Policy Set Library", desc: "Bundle access governance, CMEK data protection, and DLP rules into reusable postures." },
        { code: "C", label: "Template Deployment", desc: "Deploy certified CIS and Google-recommended data posture templates in minutes." },
        { code: "D", label: "YAML & Terraform Export", desc: "Manage data security postures as code with CI/CD pipeline integration." },
      ],
    },
    monitor: {
      id: "monitor",
      num: "04",
      title: "Monitor",
      subTitle: "Real-Time Telemetry & Threat Triage",
      score: 85,
      status: "Attack Exposure Prioritization",
      statusColor: isDark ? "text-amber-400" : "text-amber-600",
      statusBadge: isDark ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-amber-50 text-amber-700 border-amber-200",
      barColor: "#f59e0b",
      icon: BarChart3,
      oneLiner: "Continuously track your data security posture and triage attack exposures by risk.",
      description: "Surface critical data leaks, unauthorized access attempts, and compliance violations with intelligent severity scoring and attack path analysis.",
      whyItMatters: [
        "Attack exposure scores prioritize findings based on asset criticality and exploitability",
        "Case management correlates isolated alerts into unified security investigations",
        "Live posture telemetry displays percentage of data under active governance",
      ],
      initiatives: [
        { code: "A", label: "Top Finding Priority Matrix", desc: "Rank findings by severity (Critical, High, Medium) and exposure exploitability." },
        { code: "B", label: "Posture Case Triage", desc: "Group related vulnerabilities into unified investigation cases with assignee tracking." },
        { code: "C", label: "Compliance Scorecard", desc: "Track organizational adherence against regulatory frameworks in real-time dashboards." },
        { code: "D", label: "Attack Path Simulator", desc: "Visualize lateral movement paths from exposed public buckets to crown-jewel databases." },
      ],
    },
    resolve: {
      id: "resolve",
      num: "05",
      title: "Resolve",
      subTitle: "Gemini AI Remediation & 1-Click Fixes",
      score: 92,
      status: "AI-Assisted Proactive Defense",
      statusColor: isDark ? "text-emerald-400" : "text-emerald-600",
      statusBadge: isDark ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : "bg-emerald-50 text-emerald-700 border-emerald-200",
      barColor: "#10b981",
      icon: Sparkles,
      oneLiner: "Quickly remediate data risks with Gemini AI-powered guidance and automated workflows.",
      description: "Leverage generative AI to understand root causes, simulate remediation outcomes, and execute 1-click fixes to prevent data breaches proactively.",
      whyItMatters: [
        "Gemini AI converts dense telemetry into clear, step-by-step remediation instructions",
        "Score simulation shows exact posture score improvement before executing changes (e.g. 33% → 60%)",
        "Automated 1-click policy application eliminates hours of manual script writing",
      ],
      initiatives: [
        { code: "A", label: "Gemini AI Investigation Copilot", desc: "Plain-language explanations of compliance violations and threat vectors." },
        { code: "B", label: "Posture Score Simulator", desc: "Simulate compliance lift and risk reduction prior to applying security policies." },
        { code: "C", label: "1-Click Remediation Actions", desc: "Apply CMEK encryption, revoke public access, or enable audit logs instantly." },
        { code: "D", label: "Automated Ticket Dispatch", desc: "Route verified remediation playbooks to Jira, ServiceNow, and Slack automatically." },
      ],
    },
  };

  const currentJourney = journeyStagesData[selectedJourneyStage];

  if (!isUnlocked) {
    return (
      <div
        className={`min-h-screen ${isDark ? "bg-[#000213] text-white" : "adopt-page-wrapper text-[#0b0f19]"} flex flex-col items-center justify-center p-4 sm:p-6 relative font-sans transition-colors duration-300`}
        style={{
          backgroundColor: isDark ? "#000213" : undefined,
        }}
      >
        {isDark && (
          <div className="cosmic-gradient-bg hide-in-light fade-with-theme">
            <div className="cosmic-gradient-layer cosmic-grad-1" />
            <div className="cosmic-gradient-layer cosmic-grad-2" />
            <div className="cosmic-gradient-layer cosmic-grad-3" />
          </div>
        )}

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
                ? "bg-blue-500/15 border border-blue-500/30 text-blue-400"
                : "bg-blue-50 border border-blue-200 text-blue-600"
            }`}>
              <Shield className="w-5 h-5 stroke-[2.2]" />
            </div>

            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-extrabold tracking-wider uppercase mb-3 font-sans ${
              isDark
                ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
            }`}>
              <span className="text-[11px] leading-none text-[#6366f1]">✦</span>
              <span>GOOGLE CLOUD · PROTECTED CASE STUDY</span>
            </div>

            <h2
              className={`text-2xl sm:text-[26px] font-bold tracking-tight leading-snug mb-2 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Data Security in Google Cloud
            </h2>
            <p className={`text-sm leading-relaxed font-normal mb-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              Access to this Google Cloud Security Command Center (DSPM) case study is protected. Please enter the access password to continue.
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
                      ? "text-white bg-white/5 border border-white/20 focus:border-blue-400 focus:bg-white/8 focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-500"
                      : "text-slate-900 bg-slate-50 border border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-400"
                  }`}
                />
              </div>

              {passwordError && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 pt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
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
      className={`copilot-case-study adopt-page-wrapper ${isDark ? "dark" : ""} min-h-screen selection:bg-blue-500/30 selection:text-white font-sans antialiased transition-colors duration-300`}
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
                <span>Portfolio</span>
              </button>
            )}
            <span className={`text-xs font-bold tracking-tight hidden sm:inline-block ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Data Security Posture Management · Google Cloud
            </span>
          </div>

          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-1 sm:gap-2 overflow-x-hidden py-1">
              {[
                { id: "hero", label: "Overview" },
                { id: "challenge", label: "The Challenge" },
                { id: "research", label: "Research & Personas" },
                { id: "journey", label: "5-Stage Journey" },
                { id: "mvp", label: "MVP & Gemini AI" },
                { id: "impact", label: "Impact & Flows" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveChapter(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeChapter === item.id
                      ? isDark
                        ? "bg-[#0c2448] text-blue-300 border border-blue-400 shadow-sm font-semibold"
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
            className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-400 transition-all duration-100 ease-out"
            style={{
              width: `${Math.min(100, Math.max(0, scrollProgress))}%`,
              boxShadow: isDark
                ? "0 0 10px rgba(56, 189, 248, 0.8), 0 0 18px rgba(99, 102, 241, 0.5)"
                : "0 0 8px rgba(99, 102, 241, 0.6)",
            }}
          />
        </div>
      </header>

      {/* ── 01 — HERO & STRATEGIC IMPACT ────────────────────────────────── */}
      <section
        id="hero"
        className={`relative border-b overflow-hidden transition-colors duration-300 ${
          isDark ? "border-slate-800/80" : "border-slate-200/80"
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7">
              {/* Eyebrow Pill */}
              <div className="mb-5">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                  isDark
                    ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                    : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9] shadow-2xs"
                }`}>
                  <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                  <span>GOOGLE CLOUD</span>
                  <span className={isDark ? "text-slate-500" : "text-purple-300"}>·</span>
                  <span>SECURITY COMMAND CENTER</span>
                  <span className={isDark ? "text-slate-500" : "text-purple-300"}>·</span>
                  <span>DATA SECURITY (DSPM)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="mb-6 max-w-3xl">
                <span
                  className="block text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6]"
                  style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
                >
                  Data Security Posture Management
                </span>
                <span
                  className={`block text-2xl sm:text-4xl md:text-5xl lg:text-[38px] font-normal tracking-tight leading-[1.25] mt-2 font-['Inter',sans-serif] ${
                    isDark ? "text-white" : "text-[#0b0f19]"
                  }`}
                >
                  in Google Cloud
                </span>
              </h1>

              {/* Problem Statement */}
              <p className={`text-lg sm:text-xl font-normal leading-snug mb-3 max-w-2xl font-['Inter',sans-serif] ${
                isDark ? "text-white" : "text-[#0b0f19] font-medium"
              }`}>
                Enterprise data was multiplying across clouds. Continuous visibility and control were not.
              </p>

              {/* Solution Statement */}
              <p className={`text-base leading-relaxed mb-4 max-w-2xl font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                We designed Data Security Posture Management (DSPM)—a native Google Cloud Security Command Center solution that discovers, classifies, and protects sensitive data across multi-cloud environments while meeting continuous compliance.
              </p>

              {/* Leadership Statement */}
              <p className={`text-sm leading-relaxed mb-8 max-w-2xl font-normal border-l-2 pl-3.5 ${
                isDark
                  ? "text-slate-400 border-blue-500/50"
                  : "text-slate-600 border-[#4f46e5]/60"
              }`}>
                As Lead UX Designer, I drove the end-to-end user experience—from user research and competitive analysis to conceptualization, MVP design, and Gemini AI-powered remediation.
              </p>

              {/* Primary Impact Card */}
              <div className="space-y-3.5 max-w-2xl">
                <div className={`p-4 sm:p-5 rounded-[24px] border shadow-sm backdrop-blur-xl flex items-center justify-between gap-3 ${
                  isDark
                    ? "bg-[#0b101e]/85 border-white/12 text-white"
                    : "bg-white/90 border-slate-200 text-[#0b0f19]"
                }`}>
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold shrink-0 shadow-2xs ${
                      isDark
                        ? "bg-blue-950/70 border-blue-500/30 text-blue-400"
                        : "bg-[#eef2ff] border-[#c7d2fe] text-[#4338ca]"
                    }`}>
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                        isDark ? "text-blue-400" : "text-[#4338ca]"
                      }`}>
                        MVP IMPACT
                      </span>
                      <span className={`text-xl sm:text-2xl font-black tracking-tight ${
                        isDark ? "text-white" : "text-[#0b0f19]"
                      }`}>
                        26 CUSTOMERS IN 15 DAYS · 62% WEEKLY SCANNING
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metadata Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  {["Lead UX Designer", "Google Cloud Security", "DSPM Architecture", "Gemini AI Copilot", "Cross-Cloud Governance"].map((tag, idx) => (
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

            {/* Right Column: Hero Graphic / Interactive Posture Preview */}
            <div className="lg:col-span-5">
              <div
                className={`p-6 sm:p-8 rounded-[32px] border shadow-2xl backdrop-blur-xl ${
                  isDark
                    ? "bg-[#080d1a]/90 border-white/12 text-white"
                    : "bg-white/95 border-slate-200/90 text-[#0b0f19] shadow-xl"
                }`}
                style={{
                  boxShadow: isDark
                    ? "0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)"
                    : "0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8)",
                }}
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/20 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider">DSPM Global Posture</h4>
                      <p className={`text-[10.5px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>Google Cloud SCCE</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Posture Score Meter */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className={`p-4 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"}`}>
                    <span className={`text-[10.5px] font-mono uppercase block mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Data Governance
                    </span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      84%
                    </span>
                    <span className={`text-[11px] block mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Resources protected
                    </span>
                  </div>

                  <div className={`p-4 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"}`}>
                    <span className={`text-[10.5px] font-mono uppercase block mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Active Findings
                    </span>
                    <span className="text-3xl font-black text-rose-500">
                      241
                    </span>
                    <span className={`text-[11px] block mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Prioritized by risk
                    </span>
                  </div>
                </div>

                {/* Top Critical Finding Callout */}
                <div className={`p-3.5 rounded-xl border mb-5 ${isDark ? "bg-rose-950/30 border-rose-500/30" : "bg-rose-50 border-rose-200"}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
                    <span className="text-xs font-bold text-rose-500 uppercase">Top Risk Finding</span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    Highly sensitive BigQuery tables detected without CMEK encryption in public-facing project.
                  </p>
                </div>

                {/* Gemini AI Remediation Snippet */}
                <div className={`p-4 rounded-2xl border ${
                  isDark ? "bg-indigo-950/40 border-indigo-500/30 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
                }`}>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Gemini AI Actionable Guidance</span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">
                    "Applying CMEK encryption policy will raise posture score from <strong>33% → 60%</strong> and mitigate 120 critical data leak vectors automatically."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02 — THE ENTERPRISE PROBLEM & CONTEXT ──────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="challenge">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="mb-2">
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                  isDark
                    ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                    : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
                }`}>
                  <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                  <span>THE PROBLEM SPACE</span>
                </div>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}
                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
              >
                Data was growing exponentially. Security was falling behind.
              </h2>
              <p className={`text-sm sm:text-base font-normal leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Modern enterprises manage petabytes of data flowing between on-premise repositories, multi-cloud platforms, and AI workloads. This explosive complexity creates critical blind spots: data leaks, insider misuse, and failing regulatory audits.
              </p>

              <div className={`p-4 sm:p-4.5 rounded-[20px] border text-xs sm:text-sm font-medium flex items-start gap-3 shadow-sm backdrop-blur-xl mt-2 ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-slate-200"
                  : "bg-white/95 border-slate-200 text-slate-800"
              }`}>
                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <p className="leading-relaxed">
                  Security teams lacked a <strong className={isDark ? "text-white" : "text-[#0b0f19]"}>unified, native GCP platform</strong> to discover sensitive data, enforce posture boundaries, and remediate findings with AI assistance.
                </p>
              </div>
            </div>

            {/* Right Column: Side-by-Side Before vs After */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              
              {/* Card 1: What Broke Without Native DSPM */}
              <div className={`p-5 sm:p-6 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-white"
                  : "bg-white/95 border-rose-200/80 text-slate-900"
              }`}>
                <div>
                  <div className={`text-[11px] font-['Inter',sans-serif] font-bold tracking-wider uppercase mb-4 ${
                    isDark ? "text-rose-400" : "text-rose-600"
                  }`}>
                    FRAGMENTED RISK BEFORE DSPM
                  </div>

                  <div className="space-y-3">
                    {[
                      "Shadow data buckets with unknown PII",
                      "Disconnected 3rd-party scanning tools (Wiz)",
                      "No centralized compliance boundary policy",
                      "Manual, error-prone remediation scripts",
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

              {/* Card 2: What DSPM Delivers */}
              <div className={`p-5 sm:p-6 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                isDark
                  ? "bg-[#0b101e]/85 border-white/12 text-white"
                  : "bg-white/95 border-blue-200/80 text-slate-900"
              }`}>
                <div>
                  <div className={`text-[11px] font-['Inter',sans-serif] font-bold tracking-wider uppercase mb-4 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}>
                    UNIFIED DSPM ADVANTAGE
                  </div>

                  <div className="space-y-3">
                    {[
                      "Continuous automated multi-cloud discovery",
                      "Granular resource group posture policies",
                      "Native Security Command Center integration",
                      "Gemini AI plain-language 1-click fixes",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
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

      {/* ── 03 — MY ROLE, TEAM & 3-STEP FRAMEWORK ──────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="research">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>TEAM &amp; METHODOLOGY</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Securing data is a cross-functional team effort.
            </h2>
            <p className={`text-base font-normal leading-relaxed max-w-2xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              I led UX architecture and design in close partnership with 4 Product Managers, 2 Engineering Managers, 12 Engineers, 1 Program Manager, 1 UX Researcher, and 1 UX Writer.
            </p>
          </div>

          {/* 3-Step Framework */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                step: "01",
                title: "Empathize",
                sub: "User Research & Context",
                desc: "Interviewed Data Engineers, Compliance Managers, and Security Analysts to uncover workflow friction and tool fatigue.",
              },
              {
                step: "02",
                title: "Conceptualize",
                sub: "Information Architecture",
                desc: "Facilitated collaborative workshops, journey mapping, and A/B testing of alternative dashboard paradigms.",
              },
              {
                step: "03",
                title: "Design",
                sub: "High-Fidelity MVP & Gemini AI",
                desc: "Crafted interactive data maps, policy boundary builders, and Gemini AI remediation copiloting for enterprise launch.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                  isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200 text-slate-900"
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold block mb-1 ${isDark ? "text-blue-400" : "text-indigo-600"}`}>
                    {st.step} · {st.sub}
                  </span>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    {st.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* User Personas Grid */}
          <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl mb-10 ${
            isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
                  isDark ? "text-blue-400" : "text-[#4338ca]"
                }`}>
                  CORE ENTERPRISE PERSONAS
                </span>
                <h3 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                  Understanding the users who protect enterprise data
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[
                { role: "Data Engineer", focus: "Data Pipelines & Storage", need: "Seamless integration without query disruptions." },
                { role: "Compliance Manager", focus: "Audits & Governance", need: "Continuous verification for GDPR, HIPAA, SOC2." },
                { role: "Privacy Manager", focus: "PII & Residency", need: "Geographic visibility of cross-border data transfers." },
                { role: "Vulnerability Analyst", focus: "Threat Detection", need: "Prioritized attack exposure scores over raw alerts." },
                { role: "Security Engineer", focus: "Policy Enforcement", need: "1-click automated fixes and Terraform posture export." },
              ].map((p, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-[20px] border flex flex-col justify-between ${
                    isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs ${
                        isDark ? "bg-white/5 border-white/15 text-blue-400" : "bg-white border-slate-200 text-[#4338ca]"
                      }`}>
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                        {p.role}
                      </span>
                    </div>
                    <span className={`text-[10.5px] font-mono block mb-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {p.focus}
                    </span>
                    <p className={`text-[11.5px] leading-snug font-normal ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {p.need}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Research Findings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { num: "01", title: "Desire for Unified Platform", desc: "Teams demanded a single native GCP interface for discovery, classification, and remediation." },
              { num: "02", title: "Demand for Automation & AI", desc: "Users needed AI-powered capabilities (Gemini) to triage alerts and simulate policy changes." },
              { num: "03", title: "Continuous Compliance", desc: "Auditors required real-time compliance monitoring instead of point-in-time spreadsheet checks." },
              { num: "04", title: "Actionable Visualizations", desc: "Engineers wanted interactive maps and attack exposure rankings to guide decisions instantly." },
            ].map((f, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-[24px] border shadow-sm backdrop-blur-xl flex flex-col justify-between ${
                  isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200 text-[#0b0f19]"
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold block mb-1.5 ${isDark ? "text-blue-400" : "text-indigo-600"}`}>
                    {f.num}
                  </span>
                  <h3 className={`text-sm sm:text-base font-bold mb-1.5 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    {f.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Research Highlight Quote */}
          <div className={`p-6 sm:p-7 rounded-[28px] border shadow-sm backdrop-blur-xl text-center flex flex-col items-center justify-center ${
            isDark
              ? "bg-[#0b101e]/85 border-white/12 text-white"
              : "bg-white/95 border-slate-200 text-[#0b0f19]"
          }`}>
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-normal italic max-w-2xl"
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              “Visibility without automated remediation is just alarm fatigue. Security teams needed intelligent, continuous posture management.”
            </h3>
          </div>

        </div>
      </section>

      {/* ── 04 — 5-STAGE END-TO-END USER JOURNEY ───────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="journey">
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
                  <span>THE END-TO-END USER JOURNEY</span>
                </div>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight leading-[1.15] ${
                  isDark ? "text-white" : "text-[#0b0f19]"
                }`}
                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
              >
                5 Stages from Discovery to AI Remediation
              </h2>
            </div>
            <div className="lg:col-span-5 pt-1 lg:pt-6">
              <p className={`text-base leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                We mapped the complete lifecycle of data protection into five interconnected stages: Onboard, Discover, Set Boundary, Monitor, and Resolve.
              </p>
            </div>
          </div>

          {/* 5-Stage Strip Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 pt-3">
            {(
              [
                "onboard",
                "discover",
                "boundary",
                "monitor",
                "resolve",
              ] as Array<keyof typeof journeyStagesData>
            ).map((stageKey) => {
              const stage = journeyStagesData[stageKey];
              const isSelected = selectedJourneyStage === stageKey;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedJourneyStage(stageKey)}
                  className={`p-5 rounded-[22px] text-left transition-all duration-200 relative flex flex-col justify-between cursor-pointer min-h-[135px] backdrop-blur-xl ${
                    isDark ? "bg-[#0b101e]/85" : "bg-white/95 shadow-sm"
                  } ${
                    isSelected
                      ? "border-2 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.35)] scale-[1.02]"
                      : isDark
                      ? "border border-white/12 hover:border-slate-500"
                      : "border border-slate-200 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <span className={`text-xs font-['Inter',sans-serif] font-bold tracking-wider uppercase ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}>
                        {stage.num} · {stage.title}
                      </span>
                      <span className={`text-2xl font-bold font-['Inter',sans-serif] ${stage.statusColor}`}>
                        {stage.score}%
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
                        {stage.subTitle}
                      </span>
                      <span className={`text-[11px] block font-['Inter',sans-serif] font-normal mt-0.5 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>
                        {stage.status}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Two-Tab Navigation: 1) Architecture & Flow 2) Interactive Workspace */}
          <div className="flex items-center mb-6">
            <div className={`inline-flex p-1 rounded-full border shadow-2xs backdrop-blur-xl shrink-0 ${
              isDark ? "border-white/12 bg-[#0b101e]/85" : "border-slate-200 bg-white/90"
            }`}>
              <button
                type="button"
                onClick={() => setJourneyTab("architecture")}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  journeyTab === "architecture"
                    ? isDark
                      ? "bg-gradient-to-r from-blue-500/30 to-indigo-500/30 text-blue-300 border border-blue-500/40 shadow-sm"
                      : "bg-[#eef2ff] text-[#4338ca] border border-[#c7d2fe] shadow-2xs"
                    : isDark
                    ? "text-slate-400 hover:text-white border border-transparent"
                    : "text-slate-600 hover:text-slate-900 border border-transparent"
                }`}
              >
                <span className="text-[10px] text-blue-500">✦</span>
                <span>JOURNEY ARCHITECTURE</span>
                <span className="text-[11px] font-normal opacity-70">• {currentJourney.title}</span>
              </button>

              <button
                type="button"
                onClick={() => setJourneyTab("workspace")}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  journeyTab === "workspace"
                    ? isDark
                      ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-300 border border-indigo-500/40 shadow-sm"
                      : "bg-[#f3f0fe] text-[#6d28d9] border border-[#dcd1fc] shadow-2xs"
                    : isDark
                    ? "text-slate-400 hover:text-white border border-transparent"
                    : "text-slate-600 hover:text-slate-900 border border-transparent"
                }`}
              >
                <span className="text-[10px] text-indigo-500">✦</span>
                <span>DESIGN WORKSPACE &amp; INITIATIVES</span>
              </button>
            </div>
          </div>

          {/* TAB 1: JOURNEY ARCHITECTURE */}
          {journeyTab === "architecture" && (
            <div className={`rounded-[28px] border shadow-sm backdrop-blur-xl p-6 sm:p-8 animate-fadeIn ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left Column: Stage Goal & Details */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider ${
                        currentJourney.statusBadge
                      }`}>
                        STAGE {currentJourney.num} · {currentJourney.title}
                      </span>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-black leading-snug mb-2 ${
                      isDark ? "text-white" : "text-[#0b0f19]"
                    }`}>
                      {currentJourney.oneLiner}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {currentJourney.description}
                    </p>
                  </div>

                  <div className={`p-4 sm:p-5 rounded-[20px] border ${
                    isDark ? "bg-[#080d1a]/80 border-white/10" : "bg-slate-50/90 border-slate-200"
                  }`}>
                    <span className={`text-[10.5px] font-['Inter',sans-serif] uppercase tracking-wider font-bold block mb-3 ${
                      isDark ? "text-blue-400" : "text-[#4338ca]"
                    }`}>
                      WHY THIS MATTERS FOR ENTERPRISE
                    </span>
                    <ul className="space-y-2.5 text-xs">
                      {currentJourney.whyItMatters.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? "text-blue-400" : "text-[#4338ca]"}`} />
                          <span className={`leading-snug ${isDark ? "text-slate-300" : "text-slate-700"}`}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    onClick={() => setJourneyTab("workspace")}
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
                          Explore UX Deliverables
                        </strong>
                        <p className={`text-[11.5px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          View design artifacts, interactive mockups and policy workflows for this stage.
                        </p>
                      </div>
                    </div>
                    <span className={`font-semibold underline flex items-center gap-1 text-xs pl-8 ${
                      isDark ? "text-blue-400 group-hover:text-blue-300" : "text-[#4338ca] group-hover:text-indigo-700"
                    }`}>
                      Open Design Workspace →
                    </span>
                  </div>
                </div>

                {/* Right Column: Stage Deliverables & Features */}
                <div className={`lg:col-span-8 lg:border-l lg:pl-8 space-y-3 ${
                  isDark ? "lg:border-slate-800/80" : "lg:border-slate-200"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`text-xs font-bold uppercase tracking-widest font-['Inter',sans-serif] ${
                      isDark ? "text-blue-400" : "text-[#4338ca]"
                    }`}>
                      CORE STAGE INITIATIVES
                    </h4>
                    <span className={`text-[10px] font-['Inter',sans-serif] uppercase tracking-wider ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      DSPM PRODUCT WORKSPACE
                    </span>
                  </div>

                  <div className="space-y-3">
                    {currentJourney.initiatives.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setOpenInitiative(item.code as any);
                          setJourneyTab("workspace");
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
                            ? "bg-white/5 border-white/15 text-slate-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white"
                            : "bg-white border-slate-200 text-slate-700 group-hover:bg-[#4338ca] group-hover:border-[#4338ca] group-hover:text-white"
                        }`}>
                          View Design
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: DESIGN WORKSPACE */}
          {journeyTab === "workspace" && (
            <div className={`rounded-[28px] border shadow-sm backdrop-blur-xl p-6 sm:p-8 space-y-6 animate-fadeIn ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
            }`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${
                isDark ? "border-slate-800/80" : "border-slate-200"
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                      currentJourney.statusBadge
                    }`}>
                      {currentJourney.title} · Initiative {openInitiative}
                    </span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    {currentJourney.initiatives.find(i => i.code === openInitiative)?.label || currentJourney.title}
                  </h3>
                  <p className={`text-sm font-serif italic mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {currentJourney.initiatives.find(i => i.code === openInitiative)?.desc}
                  </p>
                </div>

                <div className={`flex items-center gap-1.5 p-1 rounded-xl border self-start sm:self-center shadow-inner ${
                  isDark ? "bg-[#050b1a]/50 border-slate-800" : "bg-slate-100 border-slate-200"
                }`}>
                  <span className="text-[10px] font-mono uppercase px-2 font-bold text-slate-500 hidden sm:inline-block">
                    Initiative:
                  </span>
                  {currentJourney.initiatives.map((item) => {
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

              {/* High-Fidelity Design Simulation Frame */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border ${
                  isDark ? "bg-[#050b1a]/80 border-slate-800" : "bg-slate-50 border-slate-200 shadow-md"
                }`}
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/20">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider">
                      Google Cloud SCCE · {currentJourney.title} Interaction Prototype
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-500 font-semibold">
                    Interactive Preview
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-2xs"}`}>
                    <span className="text-[10px] font-mono uppercase text-blue-500 font-bold block mb-1">
                      USER GOAL
                    </span>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {currentJourney.oneLiner}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-2xs"}`}>
                    <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold block mb-1">
                      SYSTEM RESPONSE
                    </span>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {currentJourney.initiatives.find(i => i.code === openInitiative)?.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ── 05 — MVP DESIGN SHOWCASE & GEMINI AI CAPABILITIES ──────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-[#000000] border-slate-800/80" : "border-slate-200/80"
      }`} id="mvp">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase font-sans ${
                isDark
                  ? "bg-white/8 border border-white/15 text-[#a5b4fc]"
                  : "bg-[#f3f0fe] border border-[#dcd1fc] text-[#6d28d9]"
              }`}>
                <span className="text-[12px] leading-none text-[#6366f1]">✦</span>
                <span>MVP DESIGN &amp; GEMINI AI</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Intelligent data discovery meets Gemini AI remediation.
            </h2>
            <p className={`text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              We designed an intuitive risk-first dashboard that transforms complex multi-cloud data telemetry into interactive global maps and actionable AI remediation workflows.
            </p>
          </div>

          {/* Gemini AI Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className={`p-6 rounded-[24px] border shadow-sm backdrop-blur-xl ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-indigo-200/80"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Detect Compliance Violations
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Gemini automatically analyzes multi-cloud telemetry to uncover subtle data leaks, unencrypted volumes, and IAM escalation paths.
              </p>
            </div>

            <div className={`p-6 rounded-[24px] border shadow-sm backdrop-blur-xl ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-blue-200/80"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Actionable Remediation Guidance
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Converts dense vulnerability logs into plain-language step-by-step instructions with simulated security score improvements.
              </p>
            </div>

            <div className={`p-6 rounded-[24px] border shadow-sm backdrop-blur-xl ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-teal-200/80"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Proactive Prevention
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Enforces continuous guardrails to prevent unapproved public data exposures before changes reach production environments.
              </p>
            </div>
          </div>

          {/* Top Data Security Findings Matrix */}
          <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl ${
            isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200/20">
              <div>
                <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
                  isDark ? "text-blue-400" : "text-[#4338ca]"
                }`}>
                  CORE MVP COMPONENT
                </span>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                  Top Data Security Findings Priority Matrix
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Focus on the most critical data issues first
              </span>
            </div>

            <div className="space-y-3">
              {[
                { category: "Highly sensitive data without CMEK encryption", severity: "Critical", count: "120", badge: "bg-rose-500/15 text-rose-500 border-rose-500/30" },
                { category: "Moderate sensitive data found in public bucket asset", severity: "Critical", count: "90", badge: "bg-rose-500/15 text-rose-500 border-rose-500/30" },
                { category: "Plaintext credentials found in environment variables", severity: "High", count: "24", badge: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
                { category: "Data Access Log (DAL) not enabled for sensitive BigQuery", severity: "High", count: "12", badge: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
                { category: "Sensitive BQ tables without policy classification tags", severity: "Low", count: "11", badge: "bg-blue-500/15 text-blue-500 border-blue-500/30" },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                    isDark ? "bg-[#080d1a]/80 border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:bg-white shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border uppercase shrink-0 ${row.badge}`}>
                      {row.severity}
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold truncate ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {row.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-sm sm:text-base font-black font-mono ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                      {row.count}
                    </span>
                    <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      findings
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 06 — IMPACT & ADDITIONAL FLOWS ─────────────────────────────── */}
      <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${
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
                <span>SUCCESS METRICS &amp; IMPACT</span>
              </div>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-3 ${
                isDark ? "text-white" : "text-[#0b0f19]"
              }`}
              style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
            >
              Rapid enterprise adoption across Google Cloud.
            </h2>
            <p className={`text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              Measurable outcomes from the initial release of Data Security Posture Management within Security Command Center Enterprise.
            </p>
          </div>

          {/* 3 Metric Cards */}
          <div className={`p-6 sm:p-8 rounded-[28px] border shadow-sm backdrop-blur-xl mb-12 ${
            isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-slate-200"
          }`}>
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x ${
              isDark ? "divide-slate-800" : "divide-slate-200"
            }`}>
              <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0 text-center sm:text-left flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block mb-2 font-mono">
                    26+
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Enterprise Customers
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed mt-2 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Onboarded to the DSPM product within the first 15 days of commercial launch.
                </p>
              </div>

              <div className="pt-6 sm:pt-0 sm:px-6 text-center sm:text-left flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 block mb-2 font-mono">
                    62%
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Weekly Feature Usage
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed mt-2 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Customers utilize automated vulnerability scanning and risk classification on a weekly basis.
                </p>
              </div>

              <div className="pt-6 sm:pt-0 sm:px-6 last:pr-0 text-center sm:text-left flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 block mb-2 font-mono">
                    High CSAT
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                    Positive User Feedback
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed mt-2 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Consistently high satisfaction scores across security engineering and compliance user surveys.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Reflection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-blue-200/80 text-slate-900"
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}>
                UNIFIED VISIBILITY
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Eliminating Security Silos
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Connected discovery, posture definition, and remediation into one coherent journey across multi-cloud infrastructure.
              </p>
            </div>

            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-indigo-200/80 text-slate-900"
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}>
                AI COPILOTING
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Gemini-Powered Defense
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Transformed raw security logs into simulated outcomes and 1-click plain-language fixes.
              </p>
            </div>

            <div className={`p-6 sm:p-7 rounded-[24px] border shadow-sm backdrop-blur-xl ${
              isDark ? "bg-[#0b101e]/85 border-white/12" : "bg-white/95 border-purple-200/80 text-slate-900"
            }`}>
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                isDark ? "text-purple-400" : "text-[#4338ca]"
              }`}>
                CROSS-FUNCTIONAL IMPACT
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
                Enterprise Scalability
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Bridged data engineering, compliance auditing, and security operations under one continuous governance standard.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 07 — QUIET CLOSING ────────────────────────────────────────── */}
      <section className={`py-24 sm:py-32 lg:py-36 transition-colors duration-300 ${
        isDark ? "bg-[#000000]" : "bg-transparent"
      }`} id="closing">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          
          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.2] mb-4 max-w-3xl"
            style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
          >
            <span className={`block ${isDark ? "text-white" : "text-[#0b0f19]"}`}>
              The breakthrough wasn’t just finding data.
            </span>
            <span className={`block ${isDark ? "text-slate-200" : "text-slate-600"}`}>
              It was making protection proactive and automatic.
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-normal ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            When security teams can discover, govern, and remediate in one unified platform, enterprise data remains secure everywhere.
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
            className={`relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl border overflow-hidden shadow-2xl ${
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
                  <span className="text-[10px] font-mono text-blue-500 block mt-0.5">
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

            <div className={`flex-1 overflow-auto p-6 flex items-center justify-center ${
              isDark ? "bg-[#000000]" : "bg-slate-100"
            }`}>
              {lightbox.customContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
