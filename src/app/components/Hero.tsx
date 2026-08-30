import { useMemo, useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";

/* ── Star Canvas (replaces 740 individual DOM nodes) ────────────
 * All 4 star layers drawn on one <canvas>. Each layer has a parallax
 * factor; on scroll a single RAF call redraws the canvas — zero
 * extra GPU compositing layers, no style/layout recalculation.
 */
type StarDef = { x: number; y: number; size: number; opacity: number; blue: boolean };

function StarCanvas() {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  const starsLayer1 = useMemo<StarDef[]>(() => 
    Array.from({ length: 360 }, () => ({
      x: Math.random(),
      y: Math.random() * 1.3,
      size: 0.7 + Math.random() * 0.4,
      opacity: 0.08 + Math.random() * 0.32,
      blue: false,
    })),
  []);

  const starsLayer2 = useMemo<StarDef[]>(() => 
    Array.from({ length: 240 }, () => ({
      x: Math.random(),
      y: Math.random() * 1.3,
      size: 1.0 + Math.random() * 0.8,
      opacity: 0.18 + Math.random() * 0.50,
      blue: Math.random() < 0.25,
    })),
  []);

  const drawLayer = useCallback((canvas: HTMLCanvasElement | null, stars: StarDef[]) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width: w, height: h } = canvas;
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      ctx.globalAlpha = s.opacity;
      ctx.fillStyle = s.blue ? "rgb(160,190,255)" : "#fff";
      ctx.fillRect(Math.round(s.x * w), Math.round(s.y * h), s.size, s.size);
    }
    ctx.globalAlpha = 1;
  }, []);

  useEffect(() => {
    let animId = 0;
    const resize = () => {
      const w = window.innerWidth;
      const h = Math.round(window.innerHeight * 1.4);
      if (canvasRef1.current) {
        canvasRef1.current.width = w;
        canvasRef1.current.height = h;
        drawLayer(canvasRef1.current, starsLayer1);
      }
      if (canvasRef2.current) {
        canvasRef2.current.width = w;
        canvasRef2.current.height = h;
        drawLayer(canvasRef2.current, starsLayer2);
      }
    };
    
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(resize, { timeout: 150 });
    } else {
      animId = requestAnimationFrame(resize);
    }

    window.addEventListener("resize", resize, { passive: true });
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [drawLayer, starsLayer1, starsLayer2]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const scrollY = window.scrollY;
        if (canvasRef1.current) {
          canvasRef1.current.style.transform = `translate3d(0, ${-scrollY * 0.05}px, 0)`;
        }
        if (canvasRef2.current) {
          canvasRef2.current.style.transform = `translate3d(0, ${-scrollY * 0.16}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef1}
        style={{
          position: "fixed",
          top: "-20%",
          left: 0,
          width: "100%",
          height: "140%",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      />
      <canvas
        ref={canvasRef2}
        style={{
          position: "fixed",
          top: "-20%",
          left: 0,
          width: "100%",
          height: "140%",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      />
    </>
  );
}

/* ── Shooting stars ─────────────────────────────────────────── */
function ShootingStars() {
  return (
    <>
      <style>{`
        @keyframes mt1 {
          0%     { transform: rotate(22deg) translateX(0px);   opacity: 0; }
          4%     { opacity: 1; }
          36%    { transform: rotate(22deg) translateX(960px); opacity: 0; }
          36.1%  { transform: rotate(22deg) translateX(0px);   opacity: 0; }
          100%   { transform: rotate(22deg) translateX(0px);   opacity: 0; }
        }
        @keyframes mt2 {
          0%     { transform: rotate(27deg) translateX(0px);   opacity: 0; }
          4%     { opacity: 0.72; }
          38%    { transform: rotate(27deg) translateX(800px); opacity: 0; }
          38.1%  { transform: rotate(27deg) translateX(0px);   opacity: 0; }
          100%   { transform: rotate(27deg) translateX(0px);   opacity: 0; }
        }
      `}</style>
      <div className="absolute pointer-events-none"
        style={{ zIndex:1, top:'4%', left:'2%', animation:'mt1 7s linear 0.5s infinite backwards' }}>
        <div style={{ display:'flex', alignItems:'center' }}>
          <div style={{ width:'160px', height:'0.8px',
            background:'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.80) 100%)',
            borderRadius:'0 1px 1px 0' }} />
          <div style={{ width:'3px', height:'3px', borderRadius:'50%', flexShrink:0, marginLeft:'-1px',
            background:'white', boxShadow:'0 0 3px 1px rgba(255,255,255,0.6), 0 0 8px 3px rgba(210,230,255,0.25)' }} />
        </div>
      </div>
      <div className="absolute pointer-events-none"
        style={{ zIndex:1, top:'1%', left:'21%', animation:'mt2 9s linear 3.5s infinite backwards' }}>
        <div style={{ display:'flex', alignItems:'center' }}>
          <div style={{ width:'110px', height:'0.6px',
            background:'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.65) 100%)',
            borderRadius:'0 1px 1px 0' }} />
          <div style={{ width:'2px', height:'2px', borderRadius:'50%', flexShrink:0, marginLeft:'-1px',
            background:'rgba(255,255,255,0.9)',
            boxShadow:'0 0 2px 1px rgba(255,255,255,0.5), 0 0 6px 2px rgba(210,230,255,0.2)' }} />
        </div>
      </div>
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
const GREETINGS = ["Hi", "Hoi", "வணக்கம்", "Hej", "नमस्ते", "Ahoj", "Cześć"];
const GRAPHEMES = (GREETINGS || ["Hi"]).map((w) => {
  try {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      return [...new (Intl as any).Segmenter().segment(w)].map((s: any) => s.segment);
    }
  } catch {}
  return Array.from(w);
});

export function Hero() {
  const [displayed, setDisplayed] = useState("Hi");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let wIdx = 0;
    let charIdx = (GRAPHEMES[0] && GRAPHEMES[0].length) ? GRAPHEMES[0].length : 2;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const clusters = GRAPHEMES[wIdx] || ["H", "i"];
      if (!deleting) {
        if (charIdx < clusters.length) {
          charIdx++;
          setDisplayed(clusters.slice(0, charIdx).join(""));
          timer = setTimeout(tick, 90);
        } else {
          deleting = true;
          timer = setTimeout(tick, 1400);
        }
      } else {
        if (charIdx > 0) {
          charIdx--;
          setDisplayed(clusters.slice(0, charIdx).join(""));
          timer = setTimeout(tick, 55);
        } else {
          wIdx = (wIdx + 1) % (GRAPHEMES.length || 1);
          charIdx = 0;
          deleting = false;
          timer = setTimeout(tick, 200);
        }
      }
    };
    timer = setTimeout(tick, 1600);
    const cursorTimer = setInterval(() => setShowCursor((v) => !v), 850);
    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <>
      <div className="hide-in-light fade-with-theme"><StarCanvas /></div>

      <section className="hero-section relative flex flex-col" style={{ zIndex: 4 }}>
        <div className="hide-in-light fade-with-theme"><ShootingStars /></div>

        <div className="hero-title-block">
          <div className="hero-heading-container">
            <h1 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: 'clamp(1.95rem, 6.5vw, 4.25rem)', lineHeight: 1.18, color: '#C5DC4B', margin: 0 }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 100 }}>
                {displayed}
                <span style={{ display: "inline-block", width: "3px", height: "0.85em",
                  background: "var(--text-3)", marginLeft: "3px", verticalAlign: "middle",
                  borderRadius: "1px", opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }} />
              </span>
              {", I am Vikram ✌🏻"}
            </h1>
          </div>
          <div className="hero-subtitle-block" style={{ marginTop: '34px', marginBottom: 0, width: '100%' }}>
            <p className="hero-subtitle" style={{ fontFamily: "'Georgia', serif", fontWeight: 400, fontSize: "clamp(18px, 2.05vw, 36px)", lineHeight: 1.35, color: '#E6E6E6', margin: 0 }}>
              Product Designer at Microsoft. <span className="block sm:inline">Designing AI-first products.</span>
            </p>
            <p style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 300, fontSize: 'clamp(16px, 1.4vw, 22px)', lineHeight: 1.4, color: 'var(--text-2)', margin: '10px 0 0 0' }}>
              Previously at Google and McKinsey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
