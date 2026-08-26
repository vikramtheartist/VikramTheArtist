import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered safely in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to detect whether user prefers reduced motion.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener);
      return () => mediaQuery.removeListener(listener);
    }
  }, []);

  return prefersReduced;
}

/**
 * Global ScrollTrigger refresh coordinator on window resize & mount.
 */
export function useScrollTriggerInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Refresh ScrollTrigger after DOM fonts/images load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export { gsap, ScrollTrigger };
