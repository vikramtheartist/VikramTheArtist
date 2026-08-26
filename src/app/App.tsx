import { useRef, useEffect, useState, useCallback } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ClientsSection } from "./components/ClientsSection";
import { SkillsSection } from "./components/SkillsSection";
import { FooterCTA } from "./components/FooterCTA";
import { CaseStudyAdopt } from "./components/CaseStudyAdopt";
import { CaseStudyAdoptV2 } from "./components/playbook/CaseStudyAdoptV2";
import { AdoptLandingPage } from "./components/adopt/AdoptLandingPage";
import { LightClouds } from "./components/LightClouds";

type Route = "home" | "adopt" | "adopt-v2" | "adopt-landing";
type ThemeMode = "dark" | "light";

const routeFromPath = (): Route => {
  const p = window.location.pathname.replace(/\/$/, "");
  if (p.endsWith("/adopt-landing") || p.endsWith("/adopt")) return "adopt-landing";
  if (p.endsWith("/playbook/adopt-v2")) return "adopt-v2";
  if (p.endsWith("/playbook/adopt")) return "adopt";
  return "home";
};

const initialTheme = (): ThemeMode => "dark";

/*
 * Detect lower-end systems so we can degrade gracefully.
 *   - prefers-reduced-motion → user asked for less motion
 *   - hardwareConcurrency ≤ 4 → likely a low-core laptop
 *   - deviceMemory ≤ 4 → likely RAM-constrained
 * Sets data-perf="lite" on <html> for CSS overrides.
 */
function usePerfMode() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;
    const lowMem = ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;
    const lite = reduceMotion || lowCores || lowMem;
    document.documentElement.dataset.perf = lite ? "lite" : "full";
  }, []);
}

/*
 * Three-phase parallax — all motion done via transform: translate3d (GPU-composited),
 * scroll handler throttled with requestAnimationFrame so it runs at most once per frame.
 *   Phase 1 — normal parallax until Feedback 360 card centres in viewport
 *   Phase 2 — Earth locked at viewport centre
 *   Phase 3 — Earth drifts to upper-left resting position as last card stacks
 *
 * In lite-perf mode the parallax is replaced by a single static position.
 */
function EarthParallax({ mode }: { mode: ThemeMode }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const atmRef = useRef<HTMLDivElement>(null);
  const isLight = mode === "light";

  useEffect(() => {
    const el  = imgRef.current;
    const sun = sunRef.current;
    const atm = atmRef.current;
    if (!el) return;

    const Y_OFFSET = 0;         // Atmospheric halo
    const Y_OFFSET_EARTH = -40; // Earth moved upwards by 40px
    const X_OFFSET_EARTH = 0;   // Earth centered horizontally
    const Y_OFFSET_SUN = isLight ? -35 : -20; // Sun (aligned with earth displacement)
    const setPos = (top: number, left: number, scale: number = 1) => {
      const tAtm = top + Y_OFFSET;
      el.style.transform = `translate3d(${left + X_OFFSET_EARTH}px, ${top + Y_OFFSET_EARTH}px, 0) translate(-50%, -50%) scale(${scale})`;
      if (sun) sun.style.transform = `translate3d(${left}px, ${top + Y_OFFSET_SUN}px, 0) translate(-50%, -50%) scale(${scale})`;
      if (atm) atm.style.transform = `translate3d(${left}px, ${tAtm}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    // Lite-perf: park everything in a sensible static spot, skip scroll listener entirely.
    if (document.documentElement.dataset.perf === "lite") {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const h = el.offsetHeight || 1200;
      setPos(vh * 0.75 + h / 2, vw / 2, 1);
      return;
    }

    let ticking = false;
    let cachedEarthH = el.offsetHeight || 1200;
    let cachedCard3Top = 0;
    let cachedCard3Height = 0;
    let cachedLastCardTop = 0;
    let hasCards = false;
    let cachedCardsCount = 0;

    const measureCards = () => {
      cachedEarthH = el.offsetHeight || 1200;
      const cards = Array.from(document.querySelectorAll<HTMLElement>(".ws-card"));
      cachedCardsCount = cards.length;
      if (cards.length >= 3) {
        hasCards = true;
        const c3 = cards[2];
        const last = cards[cards.length - 1];
        const c3Rect = c3.getBoundingClientRect();
        const lastRect = last.getBoundingClientRect();
        cachedCard3Top = c3Rect.top + window.scrollY;
        cachedCard3Height = c3Rect.height;
        cachedLastCardTop = lastRect.top + window.scrollY;
      } else {
        hasCards = false;
      }
    };

    measureCards();

    const compute = () => {
      ticking = false;
      const scrollY = window.scrollY;
      const vw      = window.innerWidth;
      const vh      = window.innerHeight;

      // Top of Earth aligns right below 'My work' title (~75% of viewport height at scroll=0)
      const initialCenterY = vh * 0.75 + cachedEarthH / 2;
      const phase1Y = initialCenterY - scrollY * 0.7;

      // Calculate scroll progress towards reaching the stop spot (vh / 2)
      const totalTravelToStop = Math.max(1, initialCenterY - vh / 2);
      const scrollProgress = Math.min(1, Math.max(0, (initialCenterY - phase1Y) / totalTravelToStop));
      // Proportional scale: from 1.0 (full size) down to 0.25 (75% reduced size) at stop spot
      const currentScale = Math.max(0.25, 1 - scrollProgress * 0.75);

      if (!hasCards && cachedCardsCount < 3) {
        measureCards();
      }

      if (!hasCards) {
        setPos(phase1Y, vw / 2, currentScale);
        return;
      }

      const card3Top      = cachedCard3Top - scrollY;
      const lastTop       = cachedLastCardTop - scrollY;
      const lastStickyTop = 96 + (cachedCardsCount - 1) * 22;

      const stickTrigger = card3Top + cachedCard3Height / 2 - vh / 2;
      const exitTrigger  = lastTop - lastStickyTop;

      const BLEND = 180;

      if (stickTrigger > BLEND) {
        setPos(phase1Y, vw / 2, currentScale);
      } else if (stickTrigger > 0) {
        const p     = 1 - stickTrigger / BLEND;
        const eased = p * p * (3 - 2 * p);
        setPos(phase1Y + (vh / 2 - phase1Y) * eased, vw / 2, 0.25);
      } else if (exitTrigger > 0) {
        setPos(vh / 2, vw / 2, 0.25);
      } else {
        const dist     = Math.abs(exitTrigger);
        const progress = Math.min(1, dist / (vh * 0.7));
        const eased    = 1 - Math.pow(1 - progress, 3);

        const toX = vw * 0.18 - 270;
        const toY = vh * 0.70 + 270;

        setPos(
          vh / 2 + (toY - vh / 2) * eased,
          vw / 2 + (toX - vw / 2) * eased,
          0.25,
        );
      }
    };
    const update = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", () => {
      measureCards();
      update();
    }, { passive: true });
    el.addEventListener("load", () => {
      measureCards();
      update();
    });
    // Re-measure after initial layout stabilization
    const timer = setTimeout(() => {
      measureCards();
      compute();
    }, 400);

    compute();
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      el.removeEventListener("load", update);
    };
  }, [isLight]);

  return (
    <>
      {/* Space Background — cosmic stars and distant ringed planets behind Earth in dark mode */}
      {!isLight && (
        <img
          src={`${import.meta.env.BASE_URL}IMG/Space.png`}
          alt=""
          decoding="async"
          fetchPriority="high"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 1,
            transition: "opacity 0.7s ease",
          }}
        />
      )}

      {/* Sun glow halo — visible in light mode only */}
      {isLight && (
        <div
          ref={atmRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "calc(130vw + 140px)",
            maxWidth: "2000px",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            background: [
              "radial-gradient(circle, transparent 38%, rgba(255,180,90,0.16) 46%, rgba(255,200,120,0.22) 52%, rgba(255,170,90,0.12) 60%, transparent 70%)",
              "radial-gradient(circle, transparent 30%, rgba(255,210,140,0.10) 56%, transparent 76%)",
            ].join(", "),
            filter: "blur(10px)",
            pointerEvents: "none",
            zIndex: 0,
            willChange: "transform",
            transform: "translate3d(50vw, calc(75vh + 600px), 0) translate(-50%, -50%)",
            transition: "background 0.6s ease",
          }}
        />
      )}
      {/* Earth — primary orb; defines parallax positioning. Visible in dark, fades out in light. */}
      <img
        ref={imgRef}
        src={`${import.meta.env.BASE_URL}IMG/Earth_only_2x.png`}
        alt=""
        decoding="async"
        fetchPriority={isLight ? "low" : "high"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "160vw",
          maxWidth: "2400px",
          minWidth: "1500px",
          height: "auto",
          zIndex: 0,
          pointerEvents: "none",
          opacity: isLight ? 0 : 0.95,
          willChange: "transform",
          transform: "translate3d(50vw, calc(75vh + 600px), 0) translate(-50%, -50%)",
          transition: "opacity 0.7s ease",
        }}
        className="earth-orb"
      />

      {/* Sun — same anchor as Earth, 30% larger; fades in for light mode */}
      <img
        ref={sunRef}
        src={`${import.meta.env.BASE_URL}IMG/Sun_only_2x.png`}
        alt=""
        decoding="async"
        loading={isLight ? "eager" : "lazy"}
        fetchPriority={isLight ? "high" : "low"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "130vw",
          maxWidth: "1950px",
          height: "auto",
          zIndex: 0,
          pointerEvents: "none",
          opacity: isLight ? 0.95 : 0,
          willChange: "transform",
          transform: "translate3d(50vw, calc(75vh + 600px), 0) translate(-50%, -50%)",
          transition: "opacity 0.7s ease",
        }}
        className="sun-orb"
      />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => routeFromPath());
  const [mode, setMode] = useState<ThemeMode>(() => initialTheme());

  usePerfMode();

  useEffect(() => {
    const onPop = () => setRoute(routeFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const navigate = useCallback((next: Route) => {
    if (next === route) return;
    const path =
      next === "adopt-landing" ? "/adopt"
      : next === "adopt" ? "/playbook/adopt"
      : next === "adopt-v2" ? "/playbook/adopt-v2"
      : "/";
    window.history.pushState({}, "", path);
    setRoute(next);
    window.scrollTo(0, 0);
  }, [route]);

  const toggleMode = useCallback(() => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  if (route === "adopt-landing") {
    return (
      <AdoptLandingPage
        onBack={() => navigate("home")}
        onExplorePlaybook={() => {
          const el = document.getElementById("playbook-stages");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onViewCaseStudy={() => navigate("adopt-v2")}
      />
    );
  }
  if (route === "adopt") {
    return <CaseStudyAdopt onBack={() => navigate("home")} />;
  }
  if (route === "adopt-v2") {
    return <CaseStudyAdoptV2 onBack={() => navigate("home")} />;
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "var(--bg-page)",
        color: "var(--text-1)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <LightClouds />
      <EarthParallax mode={mode} />
      <Nav mode={mode} onToggleTheme={toggleMode} />
      <main className="portfolio-main" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <WorkSection
          onPlaybookOpen={() => navigate("adopt-landing")}
          onCaseStudyOpen={() => navigate("adopt-v2")}
        />
        <AboutSection />
        <ExperienceTimeline />
        <ClientsSection />
        <SkillsSection />
        <FooterCTA />
      </main>
    </div>
  );
}
