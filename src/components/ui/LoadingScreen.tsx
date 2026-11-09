"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINE_DURATION = 1.0;
const INITIALS_DELAY = 0.6;
const SUBTITLE_DELAY = 1.2;
const EXIT_DELAY = 2200;

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loading screen this session or if reduced motion is preferred
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (hasLoaded || mediaQuery.matches) {
      const skipTimer = setTimeout(() => {
        setIsVisible(false);
        setShouldRender(false);
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    // Dismiss loading screen after entrance animation completes
    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("portfolio-loaded", "true");
    }, EXIT_DELAY);

    return () => clearTimeout(dismissTimer);
  }, []);

  const handleExitComplete = () => {
    setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090D] select-none"
          aria-hidden="true"
        >
          {/* Animated Cyan Line */}
          <div className="relative w-48 h-[1px] bg-[rgba(255,255,255,0.08)] mb-8 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: LINE_DURATION,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute inset-0 bg-[#67E3F5]"
            />
          </div>

          {/* Initials Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: INITIALS_DELAY,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-center mb-3"
          >
            <span className="font-mono text-3xl font-bold tracking-[0.3em] text-[#F4F6FA]">
              SARWAR ADHIKARI
            </span>
          </motion.div>

          {/* Technical Identity Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: SUBTITLE_DELAY,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-center"
          >
            <span className="font-mono text-[10px] tracking-[0.35em] text-[#67E3F5] uppercase">
              DIGITAL IDENTITY // PORTFOLIO
            </span>
          </motion.div>

          {/* Bottom Coordinates */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: SUBTITLE_DELAY + 0.2, duration: 0.4 }}
            className="absolute bottom-8 font-mono text-[10px] text-[#A4ADBA] tracking-widest"
          >
            SYS.INIT // 2026.NEPAL
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
