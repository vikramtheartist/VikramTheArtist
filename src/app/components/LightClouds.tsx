/*
 * LightClouds — soft, slowly drifting cloud puffs visible only in light mode.
 * Pure CSS radial gradients with subtle animation. Rendered behind everything.
 */
export function LightClouds() {
  return (
    <>
      <style>{`
        @keyframes lc-drift-a {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(40px, -10px, 0); }
        }
        @keyframes lc-drift-b {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(-50px, 18px, 0); }
        }
        @keyframes lc-drift-c {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(30px, 20px, 0); }
        }
        .lc-layer {
          position: fixed;
          pointer-events: none;
          z-index: 0;
          contain: strict;
          will-change: transform;
          opacity: 0;
          transition: opacity 0.6s ease;
          filter: blur(14px);
          transform: translate3d(0, 0, 0);
        }
        [data-theme="light"] .lc-layer { opacity: 1; }
      `}</style>

      {/* Top-left soft cloud */}
      <div
        className="lc-layer"
        style={{
          top: "-12%",
          left: "-8%",
          width: "60vw",
          height: "60vw",
          maxWidth: "900px",
          maxHeight: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,240,220,0.55) 35%, transparent 70%)",
          animation: "lc-drift-a 28s ease-in-out infinite",
        }}
      />
      {/* Upper-right warm orb */}
      <div
        className="lc-layer"
        style={{
          top: "8%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,230,200,0.7) 0%, rgba(255,210,160,0.30) 40%, transparent 72%)",
          animation: "lc-drift-b 34s ease-in-out infinite",
        }}
      />
      {/* Mid-left cool cloud */}
      <div
        className="lc-layer"
        style={{
          top: "38%",
          left: "-15%",
          width: "55vw",
          height: "55vw",
          maxWidth: "820px",
          maxHeight: "820px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(220,230,250,0.40) 38%, transparent 72%)",
          animation: "lc-drift-c 40s ease-in-out infinite",
        }}
      />
      {/* Mid-right soft cloud */}
      <div
        className="lc-layer"
        style={{
          top: "55%",
          right: "-12%",
          width: "48vw",
          height: "48vw",
          maxWidth: "780px",
          maxHeight: "780px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(240,245,255,0.40) 40%, transparent 74%)",
          animation: "lc-drift-a 36s ease-in-out infinite 4s",
        }}
      />
      {/* Bottom centre faint cloud */}
      <div
        className="lc-layer"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "60vw",
          height: "60vw",
          maxWidth: "880px",
          maxHeight: "880px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,250,240,0.65) 0%, rgba(255,230,200,0.30) 38%, transparent 74%)",
          animation: "lc-drift-b 44s ease-in-out infinite 6s",
        }}
      />
    </>
  );
}
