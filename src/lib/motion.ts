import { MotionConfig } from "@/types";
import { Variants } from "framer-motion";

// ============================================================================
// Animation Configuration
// Centralized motion settings for consistent, performant animations
// ============================================================================

export const motionConfig: MotionConfig = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
  ease: {
    default: [0.25, 0.1, 0.25, 1.0],
    smooth: [0.43, 0.13, 0.23, 0.96],
    bounce: [0.68, -0.55, 0.265, 1.55],
    sharp: [0.4, 0.0, 0.2, 1.0],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
};

// ============================================================================
// Reusable Animation Variants
// ============================================================================

/** Fade up from below with opacity transition */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.ease.smooth,
    },
  },
};

/** Container variant that staggers its children animations */
export const staggerChildren: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionConfig.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

/** Text reveal with vertical clip and fade */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.ease.smooth,
    },
  },
};

/** Scale in from a slightly smaller size */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.ease.smooth,
    },
  },
};

/** Slide in from the left */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.ease.smooth,
    },
  },
};

/** Slide in from the right */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.ease.smooth,
    },
  },
};

// ============================================================================
// Utility: Viewport trigger settings for scroll-driven animations
// ============================================================================

/** Default viewport settings for motion components using whileInView */
export const viewportConfig = {
  once: true,
  margin: "-80px",
  amount: 0.3 as const,
};

/** Create a fade-up variant with a custom delay */
export const fadeUpWithDelay = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.ease.smooth,
      delay,
    },
  },
});

/** Create a stagger container with custom stagger timing */
export const staggerWithTiming = (staggerDelay: number): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});
