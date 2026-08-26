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
    resize();
    window.addEventListener("resize", resize, { passive: true });
    return () => window.removeEventListener("resize", resize);
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

/* ── Nebula ─────────────────────────────────────────────────────
 * Static fixed gradients — no JS parallax, no willChange layer.
 */
function Nebula() {
  return (
    <div className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}>
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 65% 50% at 52% 30%, rgba(12,18,55,0.55) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 100% 45% at 50% 100%, rgba(4,6,18,0.6) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 45%, rgba(2,3,10,0.75) 100%)" }} />
    </div>
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

/* ── Space smoke — CSS-only, hardware-accelerated ───────────── */
function SpaceSmoke() {
  return (
    <>
      <style>{`
        @keyframes sm-a {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          28%  { transform: translate3d(22px,-28px,0) scale(1.07); }
          58%  { transform: translate3d(-14px,-14px,0) scale(0.96); }
          80%  { transform: translate3d(10px,-20px,0) scale(1.03); }
        }
        @keyframes sm-b {
          0%,100% { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          24%  { transform: translate3d(-24px,-18px,0) scale(1.06) rotate(2deg); }
          54%  { transform: translate3d(16px,-30px,0) scale(0.95) rotate(-1.5deg); }
          78%  { transform: translate3d(-10px,-12px,0) scale(1.02) rotate(1deg); }
        }
        @keyframes sm-c {
          0%,100% { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          34%  { transform: translate3d(18px,-20px,0) scale(1.09) rotate(-1deg); }
          68%  { transform: translate3d(-16px,-26px,0) scale(0.97) rotate(2deg); }
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          contain: "strict",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}>
        <div style={{ position:"absolute", top:"28%", left:"18%", width:"62vw", height:"38vh",
          borderRadius:"58% 42% 65% 35% / 45% 55% 40% 60%",
          background:"radial-gradient(ellipse 70% 60% at 45% 50%, rgba(55,115,210,0.15) 0%, rgba(25,65,155,0.09) 55%, transparent 80%)",
          filter:"blur(16px)", animation:"sm-a 18s ease-in-out infinite", mixBlendMode:"screen" as const, willChange:"transform" }} />
        <div style={{ position:"absolute", top:"20%", left:"30%", width:"42vw", height:"28vh",
          borderRadius:"45% 55% 38% 62% / 52% 48% 58% 42%",
          background:"radial-gradient(ellipse 60% 55% at 52% 48%, rgba(90,155,240,0.11) 0%, transparent 68%)",
          filter:"blur(14px)", animation:"sm-b 22s ease-in-out infinite 3s", mixBlendMode:"screen" as const, willChange:"transform" }} />
        <div style={{ position:"absolute", top:"10%", left:"54%", width:"30vw", height:"22vh",
          borderRadius:"62% 38% 55% 45% / 40% 60% 42% 58%",
          background:"radial-gradient(ellipse, rgba(40,90,180,0.09) 0%, transparent 65%)",
          filter:"blur(14px)", animation:"sm-c 26s ease-in-out infinite 6s", mixBlendMode:"screen" as const, willChange:"transform" }} />
        <div style={{ position:"absolute", top:"35%", left:"6%", width:"34vw", height:"24vh",
          borderRadius:"50% 50% 42% 58% / 55% 45% 60% 40%",
          background:"radial-gradient(ellipse, rgba(35,85,175,0.10) 0%, transparent 65%)",
          filter:"blur(14px)", animation:"sm-b 20s ease-in-out infinite 1.5s", mixBlendMode:"screen" as const, willChange:"transform" }} />
      </div>
    </>
  );
}

/* ── Philosophy cards ───────────────────────────────────────── */
const cards = [
  {
    title: "Observe",
    waveStart: "#ec4899",
    waveMid: "#a855f7",
    waveEnd: "#06b6d4",
    body: "I understand the system—users, data, AI, and context to frame the right problem.",
  },
  {
    title: "Create",
    waveStart: "#06b6d4",
    waveMid: "#3b82f6",
    waveEnd: "#a855f7",
    body: "I design end-to-end experiences that turn complexity into clear, usable decisions.",
  },
  {
    title: "Evolve",
    waveStart: "#a855f7",
    waveMid: "#ec4899",
    waveEnd: "#38bdf8",
    body: "I refine through real signals—usage and feedback focusing on adoption, value, and trust.",
  },
];

/* ── Hero ───────────────────────────────────────────────────── */
const GREETINGS = ["Hi", "Hoi", "வணக்கம்", "Hej", "नमस्ते", "Ahoj", "Cześć"];
const GRAPHEMES  = GREETINGS.map(w => [...new Intl.Segmenter().segment(w)].map(s => s.segment));

export function Hero() {
  const [displayed, setDisplayed] = useState("Hi");
  const [showCursor, setShowCursor] = useState(true);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = cardsRef.current;
    if (!grid) return;
    grid.classList.add("hero-cards-anim");
    const onEnd = () => grid.classList.remove("hero-cards-anim");
    grid.addEventListener("animationend", onEnd);
    return () => grid.removeEventListener("animationend", onEnd);
  }, []);

  useEffect(() => {
    let raf = 0;
    let cachedWorkTop = 0;

    const measureWork = () => {
      const work = document.getElementById("work");
      if (work) {
        cachedWorkTop = work.getBoundingClientRect().top + window.scrollY;
      }
    };

    measureWork();

    const update = () => {
      const cards = cardsRef.current;
      if (!cards) return;
      const triggerY = window.innerHeight * 0.30;
      const workTopRelative = cachedWorkTop - window.scrollY;

      if (workTopRelative <= triggerY) {
        cards.style.transform   = "translate3d(0, -100px, 0)";
        cards.style.opacity     = "0";
        cards.style.pointerEvents = "none";
      } else {
        cards.style.transform   = "translate3d(0, 0, 0)";
        cards.style.opacity     = "1";
        cards.style.pointerEvents = "";
      }
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measureWork();
      onScroll();
    }, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureWork);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    let wIdx = 0, charIdx = GRAPHEMES[0].length, deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const clusters = GRAPHEMES[wIdx];
      if (!deleting) {
        if (charIdx < clusters.length) { charIdx++; setDisplayed(clusters.slice(0, charIdx).join("")); timer = setTimeout(tick, 90); }
        else { deleting = true; timer = setTimeout(tick, 1400); }
      } else {
        if (charIdx > 0) { charIdx--; setDisplayed(clusters.slice(0, charIdx).join("")); timer = setTimeout(tick, 55); }
        else { wIdx = (wIdx + 1) % GREETINGS.length; charIdx = 0; deleting = false; timer = setTimeout(tick, 200); }
      }
    };
    timer = setTimeout(tick, 1600);
    const cursorTimer = setInterval(() => setShowCursor(v => !v), 850);
    return () => { clearTimeout(timer); clearInterval(cursorTimer); };
  }, []);

  const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);

    // Interpolate glow color between #B000E8 and #009FFD based on horizontal cursor position
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    const r = Math.round(176 * (1 - ratio) + 0 * ratio);
    const g = Math.round(0 * (1 - ratio) + 159 * ratio);
    const b = Math.round(232 * (1 - ratio) + 253 * ratio);
    card.style.setProperty("--card-glow", `rgba(${r}, ${g}, ${b}, 0.35)`);
  };

  return (
    <>
      <div className="hide-in-light fade-with-theme"><SpaceSmoke /></div>
      <div className="hide-in-light fade-with-theme"><StarCanvas /></div>
      <div className="hide-in-light fade-with-theme"><Nebula /></div>

      <section className="relative flex flex-col" style={{ zIndex: 4 }}>
        <div className="hide-in-light fade-with-theme"><ShootingStars /></div>

        <div className="hero-title-block">
          <h1 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 4.72vw, 4.25rem)', lineHeight: 1.2, color: '#C5DC4B', margin: 0 }}>
            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 100 }}>
              {displayed}
              <span style={{ display: "inline-block", width: "3px", height: "0.85em",
                background: "var(--text-3)", marginLeft: "3px", verticalAlign: "middle",
                borderRadius: "1px", opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }} />
            </span>
            {", I am Vikram ✌🏻"}
          </h1>
          <div style={{ marginTop: '28px', marginBottom: 0 }}>
            <p className="hero-subtitle" style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, fontSize: 'clamp(calc(1.5rem - 2px), 2.2vw, calc(2rem - 2px))', lineHeight: 1.25, color: '#E6E6E6', margin: 0, maxWidth: '720px', marginLeft: 'auto' }}>
              Product Designer at Microsoft. Designing AI-first products.
            </p>
            <p style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 300, fontSize: 'clamp(15px, 1.3vw, 20px)', lineHeight: 1.4, color: 'var(--text-2)', margin: '4px 0 0 0' }}>
              Previously at Google and McKinsey.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes hero-cards-in {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .hero-cards-anim {
            animation: hero-cards-in 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s both;
          }
        `}</style>
        <div
          className="hero-cards-grid"
          ref={cardsRef}
          style={{ transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.9s ease' }}
        >
          {cards.map(({ title, waveStart, waveMid, waveEnd, body }) => (
            <div
              key={title}
              className="group hero-philosophy-card cursor-default"
              onPointerMove={handleCardPointerMove}
            >
              {/* Rotating Specular Glow Border Layer */}
              <div className="card-gradient-border" />

              {/* Inner Card Content with Frosted Glass & Mouse Spotlight Glow */}
              <div className="card-inner">
                {/* Top Specular Inner Edge Light Sheen */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 25%, rgba(192,132,252,0.9) 60%, transparent 100%)",
                  }}
                />

                {/* Corner Ambient Radial Violet Glow */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none z-0 transition-opacity duration-500 opacity-40 group-hover:opacity-75"
                  style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(99,102,241,0.10) 45%, transparent 70%)",
                    filter: "blur(18px)",
                  }}
                />

                {/* Title: Unbolded Clean Typography */}
                <h3
                  className="relative z-10 tracking-tight"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#ffffff",
                    margin: "2px 0 4px 0",
                  }}
                >
                  {title}
                </h3>

                {/* Body Text */}
                <p
                  className="relative z-10"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    color: "rgba(226, 232, 240, 0.88)",
                    margin: 0,
                  }}
                >
                  {body}
                </p>

                {/* Cyber Wave Topographic Contour Lines SVG at Bottom */}
                <svg
                  className="absolute bottom-0 left-0 right-0 w-full h-[105px] pointer-events-none z-0 transition-opacity duration-500 opacity-45 group-hover:opacity-75"
                  viewBox="0 0 300 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`card-wave-grad-${title}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={waveStart} stopOpacity="0.85" />
                      <stop offset="50%" stopColor={waveMid} stopOpacity="0.9" />
                      <stop offset="100%" stopColor={waveEnd} stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                  <path d="M-10 100 C 50 60, 110 115, 170 75 C 230 35, 275 85, 310 70" stroke={`url(#card-wave-grad-${title})`} strokeWidth="1.2" strokeOpacity="0.75" />
                  <path d="M-10 90 C 45 45, 120 105, 180 60 C 240 18, 270 75, 310 55" stroke={`url(#card-wave-grad-${title})`} strokeWidth="1.0" strokeOpacity="0.55" />
                  <path d="M-10 80 C 60 30, 130 90, 190 45 C 250 8, 265 65, 310 40" stroke={`url(#card-wave-grad-${title})`} strokeWidth="0.8" strokeOpacity="0.38" />
                  <path d="M-10 110 C 70 75, 140 125, 200 85 C 260 45, 285 95, 310 82" stroke={`url(#card-wave-grad-${title})`} strokeWidth="0.8" strokeOpacity="0.28" />
                  {/* Glowing starry sparks along contours */}
                  <circle cx="75" cy="78" r="1.4" fill="#ec4899" fillOpacity="0.85" />
                  <circle cx="155" cy="65" r="1.2" fill="#c084fc" fillOpacity="0.9" />
                  <circle cx="220" cy="45" r="1.4" fill="#38bdf8" fillOpacity="0.85" />
                  <circle cx="270" cy="72" r="1" fill="#ec4899" fillOpacity="0.75" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
