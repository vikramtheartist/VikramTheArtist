import { useRef, useEffect, useState, useCallback, lazy, Suspense } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ClientsSection } from "./components/ClientsSection";
import { SkillsSection } from "./components/SkillsSection";
import { FooterCTA } from "./components/FooterCTA";
import { LightClouds } from "./components/LightClouds";
import { SpaceSparkles } from "./components/SpaceSparkles";

const CaseStudyAdopt = lazy(() => import("./components/CaseStudyAdopt").then(m => ({ default: m.CaseStudyAdopt })));
const CaseStudyAdoptV2 = lazy(() => import("./components/playbook/CaseStudyAdoptV2").then(m => ({ default: m.CaseStudyAdoptV2 })));
const AdoptLandingPage = lazy(() => import("./components/adopt/AdoptLandingPage").then(m => ({ default: m.AdoptLandingPage })));
const VibeCodingPage = lazy(() => import("./components/vibecoding/VibeCodingPage").then(m => ({ default: m.VibeCodingPage })));
const Feedback360Page = lazy(() => import("./components/feedback/Feedback360Page").then(m => ({ default: m.Feedback360Page })));

type Route = "home" | "adopt" | "adopt-v2" | "adopt-landing" | "vibe-coding" | "feedback-360";
type ThemeMode = "dark" | "light";

const routeFromPath = (): Route => {
  const p = window.location.pathname.replace(/\/$/, "");
  if (p.endsWith("/work/feedback-360") || p.endsWith("/feedback-360")) return "feedback-360";
  if (p.endsWith("/adopt-landing") || p.endsWith("/adopt")) return "adopt-landing";
  if (p.endsWith("/playbook/adopt-v2")) return "adopt-v2";
  if (p.endsWith("/playbook/adopt")) return "adopt";
  if (p.endsWith("/vibe-coding")) return "vibe-coding";
  return "home";
};

const initialAdoptTheme = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("adopt_theme_mode") || localStorage.getItem("theme_mode");
    if (saved === "light" || saved === "dark") return saved;
  }
  return "dark";
};

/*
 * Detect lower-end systems so we can degrade gracefully.
 *   - prefers-reduced-motion → user asked for less motion
 *   - hardwareConcurrency ≤ 4 → likely a low-core laptop
 *   - deviceMemory ≤ 4 → likely RAM-constrained
 * Sets data-perf="lite" on <html> for CSS overrides.
 */
function usePerfMode() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
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
 * In lite-perf mode the parallax is replaced by a single static position.
 */
function EarthParallax({ mode = "dark" }: { mode?: ThemeMode }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const atmRef = useRef<HTMLDivElement>(null);
  const planet1Ref = useRef<HTMLImageElement>(null);
  const astroRef = useRef<HTMLDivElement>(null);
  const isLight = mode === "light";

  useEffect(() => {
    const el  = imgRef.current;
    const sun = sunRef.current;
    const atm = atmRef.current;
    const planet1 = planet1Ref.current;
    const astro = astroRef.current;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const Y_OFFSET = -20;                           // Atmospheric halo
    const Y_OFFSET_EARTH = isMobile ? 0 : -60;      // Earth offset
    const X_OFFSET_EARTH = 0;                       // Earth centered horizontally
    const Y_OFFSET_SUN = isLight ? -55 : -40;       // Sun (aligned with earth displacement)
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
      setPos(vh * 0.75 - 20 + h / 2, vw / 2, 1);
      if (planet1) planet1.style.transform = "scale(1)";
      if (astro) {
        astro.style.transform = "translate3d(0, 0, 0) translateY(-50%)";
        astro.style.opacity = "1";
      }
      return;
    }

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let rafId = 0;
    let isRunning = false;

    let cachedEarthH = el.offsetHeight || 1200;
    let cachedCard3Top = 0;
    let cachedCard3Height = 0;
    let cachedLastCardTop = 0;
    let cachedWorkTitleBottom = 0;
    let hasCards = false;
    let cachedCardsCount = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const measureCards = () => {
      cachedEarthH = el.offsetHeight || 1200;
      const workHeader = document.querySelector<HTMLElement>("#work .scroll-arrow-jump") || document.querySelector<HTMLElement>("#work h2") || document.querySelector<HTMLElement>("#work");
      if (workHeader) {
        const rect = workHeader.getBoundingClientRect();
        cachedWorkTitleBottom = rect.bottom + window.scrollY;
      }
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

    const compute = (scrollY: number) => {
      const vw      = window.innerWidth;
      const vh      = window.innerHeight;
      const isMobileNow = vw < 768;

      // On mobile:
      // Initially in hero, Earth is 20% visible.
      // When hero disappears on scroll, Earth goes down and just 10% is visible from the bottom,
      // and astronaut scrolls away upwards off the screen.
      if (isMobileNow) {
        const scale = 0.90;
        const scaledH = (el.offsetHeight || 1200) * scale;

        // Progress of hero exiting screen (0 to 1)
        const heroExitDist = Math.max(1, vh * 0.45);
        const heroProgress = Math.min(1, Math.max(0, scrollY / heroExitDist));
        const eased = heroProgress * heroProgress * (3 - 2 * heroProgress);

        // Visibility smoothly transitions from 20% (0.20) down to 10% (0.10)
        const currentVisibility = 0.20 - eased * 0.10;
        const mobileCenterY = vh + (scaledH / 2) - (scaledH * currentVisibility);
        setPos(mobileCenterY, vw / 2, scale);

        if (planet1) {
          planet1.style.transform = `scale(${scale})`;
        }

        if (astro) {
          // On landing, astronaut starts 135px higher (moved up 25px for complete clearance), then scrolls away upwards
          const upwardOffset = -135 - scrollY * 1.1;
          const astroOpacity = Math.max(0, 1 - scrollY / (vh * 0.35));
          astro.style.transform = `translate3d(40px, ${upwardOffset}px, 0) translateY(-50%) rotate(${8 - scrollY * 0.03}deg)`;
          astro.style.opacity = `${astroOpacity}`;
        }
        return;
      }

      // Earth horizon starts cleanly below the 'My work' title and arrow, framing the first card
      const minTopBelowArrow = cachedWorkTitleBottom ? (cachedWorkTitleBottom + 16) : (vh * 0.78);
      const initialCenterY = Math.max(vh * 0.78 + cachedEarthH / 2, minTopBelowArrow + cachedEarthH / 2 - Y_OFFSET_EARTH);
      const phase1Y = initialCenterY - scrollY * 0.7;

      // Calculate scroll progress towards reaching the stop spot (vh / 2)
      const totalTravelToStop = Math.max(1, initialCenterY - vh / 2);
      const scrollProgress = Math.min(1, Math.max(0, (initialCenterY - phase1Y) / totalTravelToStop));
      // Proportional scale: from 1.0 (full size) down to 0.50 (50% reduced size) at stop spot
      const currentScale = Math.max(0.50, 1 - scrollProgress * 0.50);

      // Planet 1 stays in place and scales down / zooms out to 50% on scroll
      if (planet1) {
        const planet1Scale = Math.max(0.50, 1 - scrollProgress * 0.50);
        planet1.style.transform = `scale(${planet1Scale})`;
      }

      const card3Top      = cachedCard3Top - scrollY;
      const lastTop       = cachedLastCardTop - scrollY;
      const lastStickyTop = 96 + (cachedCardsCount - 1) * 22;

      const stickTrigger = card3Top + cachedCard3Height / 2 - vh / 2;
      const exitTrigger  = lastTop - lastStickyTop;

      // Astronaut scroll-driven descent when last card exits (reaching 50% of screen vertically)
      if (astro) {
        if (exitTrigger > 0) {
          astro.style.transform = `translate3d(50px, -65vh, 0) translateY(-50%) rotate(8deg)`;
          astro.style.opacity = "0";
        } else {
          const dist = Math.abs(exitTrigger);
          const entranceDistance = vh * 0.85;
          const progress = Math.min(1, dist / entranceDistance);
          const eased = 1 - Math.pow(1 - progress, 3);

          const startY = -vh * 0.65;
          const startX = 60;
          const startRot = 8;

          const curY = startY + (0 - startY) * eased;
          const curX = startX + (0 - startX) * eased;
          const curRot = startRot + (0 - startRot) * eased;

          const postScroll = Math.max(0, dist - entranceDistance);
          const driftY = -postScroll * 0.12;

          astro.style.transform = `translate3d(${curX}px, ${curY + driftY}px, 0) translateY(-50%) rotate(${curRot}deg)`;
          astro.style.opacity = `${Math.min(1, progress * 2.2)}`;
        }
      }

      if (!hasCards) {
        setPos(phase1Y, vw / 2, currentScale);
        return;
      }

      const BLEND = 180;

      if (stickTrigger > BLEND) {
        setPos(phase1Y, vw / 2, currentScale);
      } else if (stickTrigger > 0) {
        const p     = 1 - stickTrigger / BLEND;
        const eased = p * p * (3 - 2 * p);
        setPos(phase1Y + (vh / 2 - phase1Y) * eased, vw / 2, 0.50);
      } else if (exitTrigger > 0) {
        setPos(vh / 2, vw / 2, 0.50);
      } else {
        const dist     = Math.abs(exitTrigger);
        const progress = Math.min(1, dist / (vh * 0.7));
        const eased    = 1 - Math.pow(1 - progress, 3);

        const toX = vw * 0.18 - 270;
        const toY = vh * 0.70 + 270;

        setPos(
          vh / 2 + (toY - vh / 2) * eased,
          vw / 2 + (toX - vw / 2) * eased,
          0.50,
        );
      }
    };

    const renderLoop = () => {
      if (document.hidden) {
        isRunning = false;
        return;
      }
      const delta = targetScrollY - currentScrollY;
      if (Math.abs(delta) < 0.05) {
        currentScrollY = targetScrollY;
      } else {
        currentScrollY = lerp(currentScrollY, targetScrollY, 0.095);
      }

      compute(currentScrollY);

      if (currentScrollY !== targetScrollY) {
        rafId = requestAnimationFrame(renderLoop);
      } else {
        isRunning = false;
      }
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
      if (!isRunning && !document.hidden) {
        isRunning = true;
        rafId = requestAnimationFrame(renderLoop);
      }
    };

    const onResize = () => {
      measureCards();
      targetScrollY = window.scrollY;
      currentScrollY = window.scrollY;
      compute(window.scrollY);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
        isRunning = false;
      } else {
        targetScrollY = window.scrollY;
        currentScrollY = window.scrollY;
        compute(window.scrollY);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onLoad = () => {
      measureCards();
      compute(window.scrollY);
    };
    el.addEventListener("load", onLoad, { once: true });

    compute(window.scrollY);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      el.removeEventListener("load", onLoad);
    };
  }, [isLight]);

  return (
    <>
      {/* Space Background — cosmic stars and distant ringed planets behind Earth in dark mode */}
      {!isLight && (
        <picture style={{ display: "contents" }}>
          <source
            type="image/avif"
            srcSet={`${import.meta.env.BASE_URL}IMG/Space-768.avif 768w, ${import.meta.env.BASE_URL}IMG/Space-1440.avif 1440w, ${import.meta.env.BASE_URL}IMG/Space-2560.avif 2560w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${import.meta.env.BASE_URL}IMG/Space-768.webp 768w, ${import.meta.env.BASE_URL}IMG/Space-1440.webp 1440w, ${import.meta.env.BASE_URL}IMG/Space-2560.webp 2560w`}
            sizes="100vw"
          />
          <img
            src={`${import.meta.env.BASE_URL}IMG/Space.png`}
            alt=""
            decoding="async"
            fetchPriority="low"
            width={2560}
            height={1710}
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
            }}
          />
        </picture>
      )}

      {/* Small Left Planet (Planet 1) positioned above Earth horizon */}
      {!isLight && (
        <picture style={{ display: "contents" }}>
          <source
            type="image/avif"
            srcSet={`${import.meta.env.BASE_URL}IMG/Planet%201-128.avif 128w, ${import.meta.env.BASE_URL}IMG/Planet%201-256.avif 256w, ${import.meta.env.BASE_URL}IMG/Planet%201-384.avif 384w`}
            sizes="clamp(110px, 9vw, 170px)"
          />
          <source
            type="image/webp"
            srcSet={`${import.meta.env.BASE_URL}IMG/Planet%201-128.webp 128w, ${import.meta.env.BASE_URL}IMG/Planet%201-256.webp 256w, ${import.meta.env.BASE_URL}IMG/Planet%201-384.webp 384w`}
            sizes="clamp(110px, 9vw, 170px)"
          />
          <img
            ref={planet1Ref}
            src={`${import.meta.env.BASE_URL}IMG/Planet%201.png`}
            alt=""
            decoding="async"
            fetchPriority="high"
            width={384}
            height={384}
            style={{
              position: "fixed",
              top: "28vh",
              left: "calc(max(-10px, 0.8vw) - 50px)",
              width: "clamp(110px, 9vw, 170px)",
              height: "auto",
              zIndex: 0,
              pointerEvents: "none",
              opacity: 0.95,
              filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.35))",
              willChange: "transform",
              transformOrigin: "center center",
            }}
          />
        </picture>
      )}

      {/* Floating Astronaut in space on right, enters from top with scroll to 50% of screen */}
      {!isLight && (
        <div
          ref={astroRef}
          style={{
            position: "fixed",
            top: "50vh",
            right: "clamp(24px, 4.5vw, 90px)",
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
            transform: "translate3d(50px, -65vh, 0) translateY(-50%) rotate(8deg)",
            opacity: 0,
            willChange: "transform, opacity",
          }}
        >
          <div
            style={{
              animation: "astronautFloat 7s ease-in-out infinite",
              willChange: "transform",
            }}
          >
            <picture style={{ display: "contents" }}>
              <source
                type="image/avif"
                srcSet={`${import.meta.env.BASE_URL}IMG/Astronaut-200.avif 200w, ${import.meta.env.BASE_URL}IMG/Astronaut-368.avif 368w`}
                sizes="clamp(160px, 16.5vw, 255px)"
              />
              <source
                type="image/webp"
                srcSet={`${import.meta.env.BASE_URL}IMG/Astronaut-200.webp 200w, ${import.meta.env.BASE_URL}IMG/Astronaut-368.webp 368w`}
                sizes="clamp(160px, 16.5vw, 255px)"
              />
              <img
                src={`${import.meta.env.BASE_URL}IMG/Astronaut.png`}
                alt="Floating Astronaut"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={368}
                height={366}
                style={{
                  width: "clamp(160px, 16.5vw, 255px)",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 25px rgba(100, 160, 255, 0.20))",
                }}
              />
            </picture>
          </div>
        </div>
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
            transform: "translate3d(50vw, calc(75vh + 580px), 0) translate(-50%, -50%)",
            transition: "background 0.6s ease",
          }}
        />
      )}
      {/* Earth — primary orb; defines parallax positioning. Visible in dark, fades out in light. */}
      <picture style={{ display: "contents" }}>
        <source
          type="image/avif"
          srcSet={`${import.meta.env.BASE_URL}IMG/Earth_only_2x-768.avif 768w, ${import.meta.env.BASE_URL}IMG/Earth_only_2x-1200.avif 1200w, ${import.meta.env.BASE_URL}IMG/Earth_only_2x-1536.avif 1536w`}
          sizes="(max-width: 768px) 100vw, 160vw"
        />
        <source
          type="image/webp"
          srcSet={`${import.meta.env.BASE_URL}IMG/Earth_only_2x-768.webp 768w, ${import.meta.env.BASE_URL}IMG/Earth_only_2x-1200.webp 1200w, ${import.meta.env.BASE_URL}IMG/Earth_only_2x-1536.webp 1536w`}
          sizes="(max-width: 768px) 100vw, 160vw"
        />
        <img
          ref={imgRef}
          src={`${import.meta.env.BASE_URL}IMG/Earth_only_2x.png`}
          alt=""
          decoding="async"
          fetchPriority={isLight ? "low" : "high"}
          width={1536}
          height={1024}
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
            opacity: isLight ? 0 : 0.85,
            willChange: "transform",
            transform: "translate3d(50vw, calc(75vh + 580px), 0) translate(-50%, -50%)",
          }}
          className="earth-orb"
        />
      </picture>

      {/* Sun — same anchor as Earth, 30% larger; mounts for light mode */}
      {isLight && (
        <picture style={{ display: "contents" }}>
          <source
            type="image/avif"
            srcSet={`${import.meta.env.BASE_URL}IMG/Sun_only_2x-480.avif 480w, ${import.meta.env.BASE_URL}IMG/Sun_only_2x-768.avif 768w, ${import.meta.env.BASE_URL}IMG/Sun_only_2x-891.avif 891w`}
            sizes="(max-width: 768px) 130vw, 130vw"
          />
          <source
            type="image/webp"
            srcSet={`${import.meta.env.BASE_URL}IMG/Sun_only_2x-480.webp 480w, ${import.meta.env.BASE_URL}IMG/Sun_only_2x-768.webp 768w, ${import.meta.env.BASE_URL}IMG/Sun_only_2x-891.webp 891w`}
            sizes="(max-width: 768px) 130vw, 130vw"
          />
          <img
            ref={sunRef}
            src={`${import.meta.env.BASE_URL}IMG/Sun_only_2x.png`}
            alt=""
            decoding="async"
            loading="eager"
            fetchPriority="high"
            width={891}
            height={891}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "130vw",
              maxWidth: "1950px",
              height: "auto",
              zIndex: 0,
              pointerEvents: "none",
              opacity: 0.95,
              willChange: "transform",
              transform: "translate3d(50vw, calc(75vh + 580px), 0) translate(-50%, -50%)",
              transition: "opacity 0.7s ease",
            }}
            className="sun-orb"
          />
        </picture>
      )}
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => routeFromPath());
  const [adoptMode, setAdoptMode] = useState<ThemeMode>(() => initialAdoptTheme());

  usePerfMode();

  useEffect(() => {
    const onPop = () => setRoute(routeFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Set data-theme on document: homepage and case studies always dark, Adopt landing supports both
  useEffect(() => {
    const activeTheme = route === "adopt-landing" ? adoptMode : "dark";
    document.documentElement.setAttribute("data-theme", activeTheme);
  }, [route, adoptMode]);

  const navigate = useCallback((next: Route) => {
    if (next === route) return;
    const path =
      next === "feedback-360" ? "/work/feedback-360"
      : next === "adopt-landing" ? "/adopt-landing"
      : next === "adopt" ? "/playbook/adopt"
      : next === "adopt-v2" ? "/playbook/adopt-v2"
      : next === "vibe-coding" ? "/vibe-coding"
      : "/";
    window.history.pushState({}, "", path);
    setRoute(next);
    window.scrollTo(0, 0);
  }, [route]);

  const toggleAdoptMode = useCallback(() => {
    setAdoptMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        localStorage.setItem("adopt_theme_mode", next);
      }
      return next;
    });
  }, []);

  if (route === "feedback-360") {
    return (
      <Suspense fallback={<div className="min-h-screen" style={{ background: "var(--bg-page)" }} />}>
        <Feedback360Page
          onNavigateHome={() => navigate("home")}
          onNavigateWork={() => {
            navigate("home");
            setTimeout(() => {
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        />
      </Suspense>
    );
  }
  if (route === "vibe-coding") {
    return (
      <Suspense fallback={<div className="min-h-screen" style={{ background: "var(--bg-page)" }} />}>
        <VibeCodingPage
          onBack={() => navigate("home")}
          onNavigateAdopt={() => navigate("adopt-landing")}
        />
      </Suspense>
    );
  }
  if (route === "adopt-landing") {
    return (
      <Suspense fallback={<div className="min-h-screen" style={{ background: "var(--bg-page)" }} />}>
        <AdoptLandingPage
          mode={adoptMode}
          onToggleTheme={toggleAdoptMode}
          onBack={() => navigate("home")}
          onExplorePlaybook={() => {
            const el = document.getElementById("playbook-stages");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onViewCaseStudy={() => navigate("adopt-v2")}
        />
      </Suspense>
    );
  }
  if (route === "adopt") {
    return (
      <Suspense fallback={<div className="min-h-screen" style={{ background: "var(--bg-page)" }} />}>
        <CaseStudyAdopt onBack={() => navigate("home")} />
      </Suspense>
    );
  }
  if (route === "adopt-v2") {
    return (
      <Suspense fallback={<div className="min-h-screen" style={{ background: "var(--bg-page)" }} />}>
        <CaseStudyAdoptV2 onBack={() => navigate("home")} />
      </Suspense>
    );
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "var(--bg-page)",
        color: "var(--text-1)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <EarthParallax mode="dark" />
      <SpaceSparkles mode="dark" />
      <Nav mode="dark" onNavigateVibeCoding={() => navigate("vibe-coding")} />
      <main className="portfolio-main" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <WorkSection
          onPlaybookOpen={() => navigate("adopt-landing")}
          onCaseStudyOpen={() => navigate("adopt-v2")}
          onFeedback360Open={() => navigate("feedback-360")}
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
