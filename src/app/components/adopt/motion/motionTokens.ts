/**
 * ADOPT Motion Design System — Tokens & Easing Constants
 * Centralized motion tokens ensuring spatial harmony across the storytelling journey.
 */

export const MOTION_TOKENS = {
  // Layer Speeds & Translations
  depth: {
    farBackground: { min: 10, max: 30, speed: 0.06 },
    backgroundObjects: { min: 20, max: 50, speed: 0.12 },
    midground: { min: 30, max: 70, speed: 0.22 },
    foregroundFocal: { min: 50, max: 100, speed: 0.34 },
    textStabilityMax: 16, // Maximum vertical drift for readable text
    pointerParallaxMax: 8, // Cursor-driven parallax cap in px
  },

  // Rotations (Restrained, subtle)
  rotation: {
    maxTilt: 2.5, // Maximum 3D tilt in degrees
    subtleRoll: 1.5,
  },

  // Scale Ranges
  scale: {
    heroFocalStart: 1.0,
    heroFocalMax: 1.06,
    activeCard: 1.04,
    inactiveCard: 0.98,
    buttonPress: 0.98,
  },

  // Easings
  ease: {
    decelerate: "cubic-bezier(0.16, 1, 0.3, 1)",
    standard: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    cinematicInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
    softSpring: "cubic-bezier(0.175, 0.885, 0.32, 1.1)",
  },

  // Durations (in seconds)
  duration: {
    heroEntry: 1.4,
    cardHover: 0.3,
    tabSwitch: 0.45,
    ambientCycle: 8,
  },

  // Responsive Breakpoints
  breakpoints: {
    tablet: 768,
    desktop: 1024,
    wide: 1280,
  },
} as const;
