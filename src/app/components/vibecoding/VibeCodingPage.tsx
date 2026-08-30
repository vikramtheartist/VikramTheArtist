import React, { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Zap,
  Bot,
  Music,
  Layers,
  Globe,
  Radio,
  Cpu,
  Code2,
  CheckCircle2,
  Share2,
  Sliders,
  Play,
  Volume2,
  Activity,
  ChevronRight,
  Orbit
} from "lucide-react";

interface VibeCodingPageProps {
  onBack?: () => void;
  onNavigateAdopt?: () => void;
}

interface ProjectItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  story: string;
  architecture: string[];
  techStack: string[];
  image: string;
  liveStatus: string;
  demoUrl?: string;
  ctaText?: string;
  ctaAction?: () => void;
}

export function VibeCodingPage({ onBack, onNavigateAdopt }: VibeCodingPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: ProjectItem[] = [
    {
      id: "adoptiq",
      badge: "Flagship Enterprise AI",
      badgeColor: "#C5DC4B",
      title: "AdoptIQ.ai — Autonomous AI Adoption & Behavioral Intelligence Engine",
      subtitle: "Predictive friction scoring and proactive micro-interventions for enterprise AI rollouts",
      story: "Enterprise AI tools like Microsoft 365 Copilot often stall at the 90-day mark because users default to traditional search habits. We vibe-coded AdoptIQ as an autonomous intelligence platform that models user adoption across 5 psychological readiness stages. It monitors behavioral drop-off signals in real time and automatically deploys contextual in-app nudge cards to guide users from passive trial to daily habitual mastery.",
      architecture: [
        "LLM-powered prompt telemetry and usage stage classifier",
        "Reactive real-time analytics dashboard with cohort heatmaps",
        "Contextual micro-nudge delivery engine for in-app interventions",
        "Predictive enterprise ROI and license utilization modeling"
      ],
      techStack: ["React 18", "TypeScript", "FastAPI", "Tailwind CSS", "Recharts", "Gemini 1.5 Pro"],
      image: "/IMG/AdoptIQ.png",
      liveStatus: "Live Case Study Available",
      ctaText: "Explore ADOPT Framework",
      ctaAction: onNavigateAdopt
    },
    {
      id: "partytogether",
      badge: "Real-Time Social Audio",
      badgeColor: "#38bdf8",
      title: "PartyTogether — Spatial Synchronized Group Audio & Collaborative DJ",
      subtitle: "Sub-millisecond audio room synchronization with democratic track queues and live visualizers",
      story: "What began as a late-night vibe coding hackathon evolved into an ultra-smooth collaborative listening room for remote teams and music enthusiasts. PartyTogether connects listeners across the globe into unified audio spaces. Anyone in the room can vote on upcoming tracks, queue songs from Spotify or Apple Music, trigger live soundboard reactions, and watch the synchronized WebGL particle equalizer pulse in lockstep with the beat.",
      architecture: [
        "Sub-50ms WebSocket room state broker with drift auto-correction",
        "Web Audio API frequency domain FFT visualizer with custom shaders",
        "Spotify PKCE OAuth flow with synced playback state controller",
        "Dynamic queue consensus engine with real-time upvoting algorithm"
      ],
      techStack: ["React", "WebSockets", "Web Audio API", "Spotify Web SDK", "Framer Motion", "Node.js"],
      image: "/IMG/PartyTogether.jpg",
      liveStatus: "Prototype Showcase",
      ctaText: "View Interactive Demo"
    },
    {
      id: "tokenstudio",
      badge: "Agentic Developer Tool",
      badgeColor: "#10b981",
      title: "Antigravity Token Studio — Agentic Design-to-Code AST Workbench",
      subtitle: "Multi-agent canvas translating Figma design variables into production TypeScript components",
      story: "Traditional design handoff is inherently lossy. We built Token Studio as an intelligent workbench where UI designers and LLM agents collaborate on the same visual canvas. By connecting semantic token graphs directly to AST codegen pipelines, prompt changes immediately regenerate accessible React components with zero manual translation errors.",
      architecture: [
        "Bidirectional Figma Variables to CSS Custom Properties synchronizer",
        "Multi-agent code generation pipeline with automated accessibility audit",
        "Live hot-reloading iframe preview sandbox with responsive viewport simulation",
        "Semantic node-graph canvas with interactive token inheritance wiring"
      ],
      techStack: ["TypeScript", "Vite", "AST Codegen", "TailwindCSS", "Lucide Icons", "Web Workers"],
      image: "/IMG/TokenStudio.jpg",
      liveStatus: "Developer Beta",
      ctaText: "Inspect Architecture"
    },
    {
      id: "cosmicsandbox",
      badge: "Creative Physics Simulation",
      badgeColor: "#c084fc",
      title: "Cosmic Kinetic Sandbox — 3D Celestial N-Body Gravity Engine",
      subtitle: "Interactive orbital mechanics visualizer with relativistic particle streams and WebGL shaders",
      story: "An exploration into computational astrophysics built purely through conversational code generation. The Cosmic Sandbox allows users to spawn planetary bodies, place gravity wells, and observe chaotic three-body orbits and accretion disc formations in real time at 60 frames per second.",
      architecture: [
        "GLSL compute shader for parallel N-body velocity and position integration",
        "Dynamic gravity well distortion grid with spatial curvature rendering",
        "60 FPS Barnes-Hut octree spatial partitioning algorithm",
        "Generative ambient celestial soundscape synthesized via Web Audio API"
      ],
      techStack: ["Three.js", "GLSL Shaders", "WebGL", "Web Audio Synth", "Canvas API"],
      image: "/IMG/CosmicSandbox.jpg",
      liveStatus: "Interactive Experiment",
      ctaText: "Launch Physics Sandbox"
    }
  ];

  return (
    <div
      className="min-h-screen font-sans text-white selection:bg-[#C5DC4B] selection:text-black"
      style={{
        background: "#070a16",
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(60, 100, 240, 0.12) 0%, transparent 65%), radial-gradient(circle at 90% 40%, rgba(197, 220, 75, 0.05) 0%, transparent 50%)",
        position: "relative",
      }}
    >
      {/* Top Header Navigation */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10"
        style={{ background: "rgba(7, 10, 22, 0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack || (() => { if (typeof window !== "undefined") window.location.pathname = "/"; })}
            className="group inline-flex items-center gap-2.5 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#C5DC4B]/40 group-hover:text-[#C5DC4B] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </span>
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C5DC4B]/10 border border-[#C5DC4B]/30 text-[#C5DC4B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vibe Coding Hub</span>
            </span>
            <a
              href="#contact"
              onClick={(e) => {
                if (onBack) {
                  e.preventDefault();
                  onBack();
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }
              }}
              className="adopt-hero-btn-primary group"
              style={{
                textDecoration: "none",
                padding: "6px 14px",
                fontSize: "13px",
                gap: "8px",
              }}
            >
              <span>Collaborate</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(197,220,75,0.15)]">
          <Zap className="w-4 h-4 text-[#C5DC4B]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-white/90">
            Creative Engineering & Autonomous Workflows
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08]">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5DC4B] via-[#a3e635] to-[#38bdf8]">Vibe Coding</span> Laboratory
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-white/70 font-light leading-relaxed mb-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
          From raw human intent to production-grade software at the speed of thought. A curated collection of intelligent enterprise platforms, real-time audio rooms, and interactive simulation engines crafted with agentic AI pair-programming.
        </p>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-[#C5DC4B]">4</div>
            <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-1">Shipped Apps</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-[#38bdf8]">100%</div>
            <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-1">Agentic Velocity</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-[#c084fc]">0ms</div>
            <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-1">Design Handoff Lag</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-white">Full-Stack</div>
            <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-1">Interactive Systems</div>
          </div>
        </div>
      </section>

      {/* Main Project Showcase List */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-24 space-y-16">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            id={project.id}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 sm:p-10 overflow-hidden shadow-2xl"
          >
            {/* Subtle background glow */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full opacity-20 filter blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: project.badgeColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Details Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${project.badgeColor}15`,
                      borderColor: `${project.badgeColor}40`,
                      color: project.badgeColor,
                    }}
                  >
                    {project.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/60">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    {project.liveStatus}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-[#C5DC4B] font-medium text-sm sm:text-base mt-2">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  {project.story}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    What Was Vibe-Coded
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5DC4B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                {project.ctaText && (
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={project.ctaAction}
                      className="adopt-hero-btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all"
                    >
                      <span>{project.ctaText}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Visual Column */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-black/40 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-[380px]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Vibe Coding Principles */}
      <section className="border-t border-white/10 py-20 px-6 sm:px-8 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              The Vibe Coding Philosophy
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Why building with AI agents is fundamentally redefining how product design leaders craft software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C5DC4B]/10 border border-[#C5DC4B]/30 flex items-center justify-center text-[#C5DC4B]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Designers Who Build</h3>
              <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Erasing the boundary between static Figma mockups and working production code. When design decisions are verified directly in live code, micro-interactions and performance are solved on day one.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Agentic Leverage</h3>
              <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Directing LLMs as specialized pair programmers to scaffold backend pipelines, optimize WebGL shaders, and write deterministic test suites while the human leader focuses on architecture and user experience.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center text-[#c084fc]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Intuition Over Friction</h3>
              <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Testing ideas in minutes instead of waiting for sprint backlogs. Vibe coding allows rapid prototyping of enterprise-grade AI behaviors before committing architectural resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 sm:px-8 text-center text-xs text-white/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vikram Venkatesh — Product Design Leader at Microsoft</p>
          <button
            type="button"
            onClick={onBack || (() => { if (typeof window !== "undefined") window.location.pathname = "/"; })}
            className="text-[#C5DC4B] hover:underline"
          >
            ← Return to Portfolio Homepage
          </button>
        </div>
      </footer>
    </div>
  );
}
