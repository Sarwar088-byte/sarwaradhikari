"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive parallax tilt on cursor hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* Central Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(103,227,245,0.14)_0%,rgba(149,130,255,0.06)_45%,transparent_70%)] blur-2xl pointer-events-none" />

      {/* 3D Tilting Core Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* SVG Orbital Geometry */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full max-w-[500px] overflow-visible drop-shadow-[0_0_25px_rgba(103,227,245,0.15)]"
        >
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67E3F5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#67E3F5" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="violetGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9582FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#9582FF" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#192230" />
              <stop offset="70%" stopColor="#0D1118" />
              <stop offset="100%" stopColor="#07090D" />
            </radialGradient>
          </defs>

          {/* Outer Boundary Reticle Ring */}
          <circle
            cx="250"
            cy="250"
            r="230"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
          />
          <circle
            cx="250"
            cy="250"
            r="230"
            fill="none"
            stroke="rgba(103, 227, 245, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 40"
            className="animate-spin-slow origin-center"
          />

          {/* Precision Corner / Reticle Ticks */}
          <g stroke="rgba(103, 227, 245, 0.4)" strokeWidth="1.5">
            <path d="M 240 20 L 260 20" />
            <path d="M 250 15 L 250 25" />
            <path d="M 240 480 L 260 480" />
            <path d="M 250 475 L 250 485" />
            <path d="M 20 240 L 20 260" />
            <path d="M 15 250 L 25 250" />
            <path d="M 480 240 L 480 260" />
            <path d="M 475 250 L 485 250" />
          </g>

          {/* Primary Orbital Plane 1 (Cyan inclined 60deg) */}
          <g className="animate-spin-slow origin-center">
            <ellipse
              cx="250"
              cy="250"
              rx="205"
              ry="78"
              fill="none"
              stroke="url(#cyanGrad)"
              strokeWidth="1.5"
              transform="rotate(-28 250 250)"
            />
            {/* Satellite Node on Orbit 1 */}
            <g transform="rotate(-28 250 250)">
              <circle cx="455" cy="250" r="4.5" fill="#67E3F5" />
              <circle
                cx="455"
                cy="250"
                r="9"
                fill="none"
                stroke="rgba(103, 227, 245, 0.4)"
                strokeWidth="1"
              />
            </g>
          </g>

          {/* Secondary Orbital Plane 2 (Violet inclined -45deg) */}
          <g className="animate-spin-reverse-slow origin-center">
            <ellipse
              cx="250"
              cy="250"
              rx="180"
              ry="65"
              fill="none"
              stroke="url(#violetGrad)"
              strokeWidth="1.5"
              transform="rotate(42 250 250)"
            />
            {/* Satellite Node on Orbit 2 */}
            <g transform="rotate(42 250 250)">
              <circle cx="70" cy="250" r="4" fill="#9582FF" />
              <circle
                cx="70"
                cy="250"
                r="8"
                fill="none"
                stroke="rgba(149, 130, 255, 0.4)"
                strokeWidth="1"
              />
            </g>
          </g>

          {/* Third High-tilt Orbital Ring */}
          <g className="animate-spin-slow origin-center" style={{ animationDuration: "42s" }}>
            <ellipse
              cx="250"
              cy="250"
              rx="145"
              ry="145"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
              strokeDasharray="6 14"
            />
            <circle cx="250" cy="105" r="3" fill="#F4F6FA" opacity="0.6" />
          </g>

          {/* Geometric Central Core (Hexagonal Monolith) */}
          <g className="origin-center">
            {/* Background Core Hexagon */}
            <polygon
              points="250,175 315,212 315,288 250,325 185,288 185,212"
              fill="url(#coreGrad)"
              stroke="rgba(103, 227, 245, 0.35)"
              strokeWidth="1.5"
            />

            {/* Inner Core Accent Facets */}
            <polygon
              points="250,195 298,223 298,277 250,305 202,277 202,223"
              fill="rgba(19, 25, 35, 0.85)"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
            />

            {/* Tech Center Axis Matrix */}
            <line
              x1="250"
              y1="195"
              x2="250"
              y2="305"
              stroke="rgba(103, 227, 245, 0.4)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="202"
              y1="250"
              x2="298"
              y2="250"
              stroke="rgba(103, 227, 245, 0.4)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* Nucleus Glowing Dot */}
            <circle cx="250" cy="250" r="5" fill="#67E3F5" />
            <circle
              cx="250"
              cy="250"
              r="12"
              fill="none"
              stroke="rgba(103, 227, 245, 0.5)"
              strokeWidth="1"
              className="animate-pulse"
            />
          </g>
        </svg>

        {/* Floating Futuristic Telemetry Badges */}
        <div className="absolute -top-3 left-6 font-mono text-[10px] tracking-widest text-[#707C8C] bg-[#0D1118]/90 border border-[rgba(255,255,255,0.08)] px-2.5 py-1 rounded backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#67E3F5] animate-ping" />
          <span>CORE // LOGIC.SYS</span>
        </div>

        <div className="absolute bottom-2 right-4 font-mono text-[10px] tracking-widest text-[#707C8C] bg-[#0D1118]/90 border border-[rgba(255,255,255,0.08)] px-2.5 py-1 rounded backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
          <span className="text-[#9582FF]">&gt;</span>
          <span>B.TECH CSE // Y2</span>
        </div>

        <div className="hidden sm:flex absolute bottom-14 -left-4 font-mono text-[10px] tracking-widest text-[#707C8C] bg-[#0D1118]/90 border border-[rgba(255,255,255,0.08)] px-2.5 py-1 rounded backdrop-blur-sm items-center gap-1.5 shadow-lg">
          <span className="text-[#67E3F5]">LOC:</span>
          <span>NEPAL [27.7&deg;N]</span>
        </div>
      </motion.div>
    </div>
  );
}
