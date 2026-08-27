/*
 * LightClouds — ethereal, dreamy celestial sky with soft pastel blooms and orbital rings
 * visible only in light mode. Rendered behind everything.
 */
export function LightClouds() {
  return (
    <>
      <style>{`
        @keyframes lc-drift-a {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(30px, -12px, 0); }
        }
        @keyframes lc-drift-b {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(-35px, 15px, 0); }
        }
        @keyframes lc-drift-c {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(20px, 18px, 0); }
        }
        @keyframes lc-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .lc-layer {
          position: fixed;
          pointer-events: none;
          z-index: 0;
          contain: strict;
          will-change: transform;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        [data-theme="light"] .lc-layer { opacity: 1; }
      `}</style>

      {/* Sky base gradient */}
      <div
        className="lc-layer"
        style={{
          inset: 0,
          background:
            "linear-gradient(175deg, #d6e2f8 0%, #e0e7f8 22%, #ece7fb 48%, #faeaf4 75%, #ffffff 100%)",
        }}
      />

      {/* Planetary orbital ring highlight around upper-left planet */}
      <div
        className="lc-layer"
        style={{
          top: "14vh",
          left: "calc(max(-10px, 0.8vw) - 120px)",
          width: "clamp(320px, 32vw, 480px)",
          height: "clamp(120px, 12vw, 190px)",
          borderRadius: "50%",
          border: "1.5px solid rgba(255, 255, 255, 0.55)",
          boxShadow: "0 0 24px rgba(255, 255, 255, 0.45), inset 0 0 16px rgba(220, 235, 255, 0.35)",
          transform: "rotate(-24deg)",
          filter: "blur(0.5px)",
        }}
      />
      {/* Outer subtle orbital ring */}
      <div
        className="lc-layer"
        style={{
          top: "10vh",
          left: "calc(max(-10px, 0.8vw) - 160px)",
          width: "clamp(420px, 42vw, 620px)",
          height: "clamp(160px, 16vw, 240px)",
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.30)",
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.25)",
          transform: "rotate(-24deg)",
          filter: "blur(1px)",
        }}
      />

      {/* Top-left iridescent celestial aura */}
      <div
        className="lc-layer"
        style={{
          top: "-5%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          maxWidth: "850px",
          maxHeight: "850px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(220,235,255,0.75) 30%, rgba(235,225,255,0.40) 55%, transparent 75%)",
          filter: "blur(20px)",
          animation: "lc-drift-a 28s ease-in-out infinite",
        }}
      />

      {/* Upper-right soft violet/rose bloom */}
      <div
        className="lc-layer"
        style={{
          top: "4%",
          right: "-8%",
          width: "50vw",
          height: "50vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(245,225,245,0.55) 35%, rgba(225,235,255,0.30) 60%, transparent 74%)",
          filter: "blur(24px)",
          animation: "lc-drift-b 34s ease-in-out infinite",
        }}
      />

      {/* Center soft luminous mist */}
      <div
        className="lc-layer"
        style={{
          top: "32%",
          left: "20%",
          width: "60vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.80) 0%, rgba(235,242,255,0.45) 45%, transparent 72%)",
          filter: "blur(30px)",
          animation: "lc-drift-c 40s ease-in-out infinite",
        }}
      />

      {/* Bottom horizon iridescent sunrise crest */}
      <div
        className="lc-layer"
        style={{
          bottom: "-10vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120vw",
          height: "45vh",
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(240,230,255,0.80) 30%, rgba(215,235,255,0.45) 60%, transparent 80%)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
}
