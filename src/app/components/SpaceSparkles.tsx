import React, { useState, useEffect, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  floatDuration: number;
  floatDelay: number;
}

function SparkleItem({ sparkle }: { sparkle: Sparkle }) {
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    // Quickly scale from initial pop down to 50%
    const timer = setTimeout(() => {
      setIsSettled(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: sparkle.x,
        top: sparkle.y,
        width: sparkle.size,
        height: sparkle.size,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 1,
      }}
    >
      {/* Scale down by another 50% (to scale 0.26) and keep floating gently at that reduced size */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: isSettled ? "scale(0.26)" : "scale(1.15)",
          opacity: 1,
          transition: isSettled
            ? "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease"
            : "transform 0.08s ease-out",
          willChange: "transform, opacity",
        }}
      >
        {/* Continuous gentle deep-space floating & breathing shimmer */}
        <div
          style={{
            width: "100%",
            height: "100%",
            animation: `spaceSparkleFloat ${sparkle.floatDuration}s ease-in-out infinite alternate, spaceSparkleTwinkle 3.6s ease-in-out infinite alternate`,
            animationDelay: `${sparkle.floatDelay}s`,
            transform: `rotate(${sparkle.rotation}deg)`,
            filter:
              "drop-shadow(0 0 12px rgba(255, 255, 255, 1)) drop-shadow(0 0 24px rgba(180, 220, 255, 0.85)) drop-shadow(0 0 40px rgba(140, 190, 255, 0.50))",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <defs>
              <radialGradient
                id={`sparkleCore-${sparkle.id}`}
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="35%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#dbeafe" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glowing center aura */}
            <circle
              cx="50"
              cy="50"
              r="22"
              fill={`url(#sparkleCore-${sparkle.id})`}
            />

            {/* Exact 4-Point Concave Star Geometry matching user reference image */}
            <path
              d="M 50 0 Q 50 50 0 50 Q 50 50 50 100 Q 50 50 100 50 Q 50 50 50 0 Z"
              fill="#ffffff"
            />

            {/* Luminous Inner Core Star */}
            <path
              d="M 50 6 Q 50 50 6 50 Q 50 50 50 94 Q 50 50 94 50 Q 50 50 50 6 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SpaceSparkles({ mode }: { mode: "dark" | "light" }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleGlobalClick = useCallback(
    (e: MouseEvent) => {
      // Only active in dark mode
      if (mode === "light") return;

      const x = e.clientX;
      const y = e.clientY;

      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x,
        y,
        size: Math.floor(Math.random() * 18) + 54, // 54px - 72px initial birth size
        rotation: Math.random() * 30 - 15,
        floatDuration: Math.random() * 3 + 5.5, // 5.5s to 8.5s levitation
        floatDelay: Math.random() * 2,
      };

      setSparkles((prev) => [...prev.slice(-40), newSparkle]);
    },
    [mode]
  );

  useEffect(() => {
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [handleGlobalClick]);

  if (mode === "light" || sparkles.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {sparkles.map((sp) => (
        <SparkleItem key={sp.id} sparkle={sp} />
      ))}
    </div>
  );
}
