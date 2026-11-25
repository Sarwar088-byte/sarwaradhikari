"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with smooth interpolation
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    let isMouseOver = false;

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initial center position if mouse hasn't moved yet
    mouse.targetX = width / 2;
    mouse.targetY = height * 0.35;
    mouse.x = mouse.targetX;
    mouse.y = mouse.targetY;

    let time = 0;
    const GRID_SPACING = 38;
    const SPOTLIGHT_RADIUS = 340;

    const render = () => {
      time += 0.012;

      // Smooth lerp mouse toward target
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // ── 1. Base Dark Slate Atmosphere ──
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.15,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, "#0c0e15");
      bgGrad.addColorStop(0.5, "#08090d");
      bgGrad.addColorStop(1, "#050608");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. Architectural Top Ambient Glow ──
      const topAura = ctx.createRadialGradient(
        width * 0.5,
        0,
        0,
        width * 0.5,
        0,
        Math.min(width * 0.7, 650)
      );
      topAura.addColorStop(0, "rgba(56, 189, 248, 0.07)");
      topAura.addColorStop(0.4, "rgba(99, 102, 241, 0.035)");
      topAura.addColorStop(1, "transparent");
      ctx.fillStyle = topAura;
      ctx.fillRect(0, 0, width, height);

      // ── 3. Subtle Interactive Cursor Spotlight (soft ambient aura) ──
      if (mouse.x > -500 && mouse.y > -500) {
        const cursorAura = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          SPOTLIGHT_RADIUS * 1.2
        );
        cursorAura.addColorStop(0, "rgba(56, 189, 248, 0.055)");
        cursorAura.addColorStop(0.5, "rgba(129, 140, 248, 0.02)");
        cursorAura.addColorStop(1, "transparent");
        ctx.fillStyle = cursorAura;
        ctx.fillRect(0, 0, width, height);
      }

      // ── 4. Precision Engineering Dot Grid & Crosshairs ──
      const cols = Math.ceil(width / GRID_SPACING) + 1;
      const rows = Math.ceil(height / GRID_SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        const x = i * GRID_SPACING;

        for (let j = 0; j < rows; j++) {
          const y = j * GRID_SPACING;

          // Distance to interactive cursor
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy);

          // Subtle natural breathing wave
          const wave = Math.sin(time + (x * 0.005) + (y * 0.005)) * 0.5 + 0.5;

          // Is this an intersection crosshair? (Every 5th column and 5th row)
          const isCross = i % 5 === 0 && j % 5 === 0;

          if (dist < SPOTLIGHT_RADIUS) {
            // Proximity intensity (0 to 1)
            const proximity = 1 - dist / SPOTLIGHT_RADIUS;
            const easeProximity = proximity * proximity; // quadratic falloff

            if (isCross) {
              // Draw illuminated crosshair '+'
              const crossSize = 3.5;
              const alpha = 0.2 + easeProximity * 0.65;
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x - crossSize, y);
              ctx.lineTo(x + crossSize, y);
              ctx.moveTo(x, y - crossSize);
              ctx.lineTo(x, y + crossSize);
              ctx.stroke();
            } else {
              // Draw illuminated precision dot
              const radius = 0.9 + easeProximity * 1.5;
              const alpha = 0.08 + easeProximity * 0.55;

              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.fill();
            }
          } else {
            // Base ambient state (quiet, crisp, clean)
            if (isCross) {
              const crossSize = 2.5;
              const alpha = 0.08 + wave * 0.04;
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(x - crossSize, y);
              ctx.lineTo(x + crossSize, y);
              ctx.moveTo(x, y - crossSize);
              ctx.lineTo(x, y + crossSize);
              ctx.stroke();
            } else {
              const radius = 0.75;
              const alpha = 0.04 + wave * 0.02;
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.fill();
            }
          }
        }
      }

      // ── 5. Clean Edge Vignette ──
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "rgba(5, 6, 8, 0.7)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision 60fps Interactive Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />

      {/* Bespoke Ultra-Fine Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
