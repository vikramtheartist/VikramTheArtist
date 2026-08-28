import React, { useState, useEffect, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  animType: "A" | "B";
  floatDuration: number;
  floatDelay: number;
}

function SparkleItem({ sparkle }: { sparkle: Sparkle }) {
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    // Gentle blossoming sparkle on click easing into settled state
    const timer = setTimeout(() => {
      setIsSettled(true);
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  const animName = sparkle.animType === "A" ? "spaceFeatherFloatA" : "spaceFeatherFloatB";

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
      {/* 20% smaller gentle initial sparkle blossoming down to sharp point star */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: isSettled ? "scale(0.18)" : "scale(0.85)",
          opacity: 1,
          transition: isSettled
            ? "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease"
            : "transform 0.08s ease-out",
          willChange: "transform, opacity",
        }}
      >
        {/* Circulating and flowing in space gently like a feather in the air */}
        <div
          style={{
            width: "100%",
            height: "100%",
            animation: `${animName} ${sparkle.floatDuration}s ease-in-out infinite alternate, spaceSparkleTwinkle 4.5s ease-in-out infinite alternate`,
            animationDelay: `${sparkle.floatDelay}s`,
            transform: `rotate(${sparkle.rotation}deg)`,
            filter: isSettled
              ? "none"
              : "drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 20px rgba(180, 220, 255, 0.7))",
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
            {/* Gentle initial sparkle halo (fades away as it settles) */}
            {!isSettled && (
              <circle
                cx="50"
                cy="50"
                r="22"
                fill="rgba(255, 255, 255, 0.75)"
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
        size: Math.floor(Math.random() * 8) + 40, // 20% smaller initial birth size (40px-48px)
        rotation: Math.random() * 30 - 15,
        animType: Math.random() > 0.5 ? "A" : "B",
        floatDuration: Math.random() * 4 + 8.5, // 8.5s to 12.5s gentle circulation
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

