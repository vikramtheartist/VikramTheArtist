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
      {/* Scale down to sharp, crisp, non-glowing star (scale 0.13), floating gently in the air */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: isSettled ? "scale(0.13)" : "scale(1.15)",
          opacity: 1,
          transition: isSettled
            ? "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease"
            : "transform 0.08s ease-out",
          willChange: "transform, opacity",
        }}
      >
        {/* Floating in the air with gentle buoyancy */}
        <div
          style={{
            width: "100%",
            height: "100%",
            animation: `spaceSparkleFloat ${sparkle.floatDuration}s ease-in-out infinite alternate, spaceSparkleTwinkle 4.2s ease-in-out infinite alternate`,
            animationDelay: `${sparkle.floatDelay}s`,
            transform: `rotate(${sparkle.rotation}deg)`,
            filter: isSettled
              ? "none"
              : "drop-shadow(0 0 16px rgba(255, 255, 255, 1)) drop-shadow(0 0 32px rgba(180, 220, 255, 0.9))",
            transition: "filter 0.6s ease",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
              shapeRendering: "geometricPrecision",
            }}
          >
            {/* Initial birth flash aura only (hidden when settled) */}
            {!isSettled && (
              <circle
                cx="50"
                cy="50"
                r="28"
                fill="rgba(255, 255, 255, 0.9)"
              />
            )}

            {/* Razor-sharp solid white 4-pointed diamond star */}
            <path
              d="M 50 0 Q 50 50 0 50 Q 50 50 50 100 Q 50 50 100 50 Q 50 50 50 0 Z"
              fill="#ffffff"
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
