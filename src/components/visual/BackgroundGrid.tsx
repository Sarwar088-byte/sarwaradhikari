"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  twinkle: number;
  twinkleSpeed: number;
}

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
  pulseSpeed: number;
  glowIntensity: number;
}

interface AuroraLayer {
  points: { x: number; y: number }[];
  color1: string;
  color2: string;
  speed: number;
  offset: number;
  opacity: number;
  amplitude: number;
  frequency: number;
}

export function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;
    let t = 0;

    // Resize handler
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener("resize", onResize);

    // Smooth mouse parallax
    const onMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = {
        x: e.clientX / width,
        y: e.clientY / height,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Star field ── 3 depth layers
    const STAR_COLORS = [
      "#c8e6ff", "#a8d4f5", "#e8f4ff",
      "#b8d8ff", "#38bdf8", "#818cf8",
      "#ffffff", "#dde8ff",
    ];
    const stars: Star[] = [];
    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < 320; i++) {
        const z = Math.random(); // 0=far, 1=near
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          size: 0.4 + z * 2.4,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.008 + Math.random() * 0.025,
        });
      }
    };

    // ── Neural network nodes ──
    const nodes: NeuralNode[] = [];
    const NODE_COLORS = [
      "#38bdf8", "#818cf8", "#34d399",
      "#a78bfa", "#60a5fa", "#f472b6",
    ];
    const initNodes = () => {
      nodes.length = 0;
      const count = Math.min(28, Math.floor((width * height) / 42000));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 2 + Math.random() * 3,
          color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.04,
          glowIntensity: 0.6 + Math.random() * 0.4,
        });
      }
    };

    // ── Aurora layers ──
    const auroraLayers: AuroraLayer[] = [
      {
        points: [],
        color1: "rgba(56,189,248,0.07)",
        color2: "rgba(129,140,248,0.04)",
        speed: 0.0003,
        offset: 0,
        opacity: 1,
        amplitude: height * 0.14,
        frequency: 0.0022,
      },
      {
        points: [],
        color1: "rgba(129,140,248,0.06)",
        color2: "rgba(52,211,153,0.03)",
        speed: 0.00022,
        offset: Math.PI * 0.7,
        opacity: 1,
        amplitude: height * 0.11,
        frequency: 0.0018,
      },
      {
        points: [],
        color1: "rgba(244,114,182,0.04)",
        color2: "rgba(56,189,248,0.03)",
        speed: 0.00015,
        offset: Math.PI * 1.4,
        opacity: 1,
        amplitude: height * 0.09,
        frequency: 0.0015,
      },
    ];

    const init = () => {
      initStars();
      initNodes();
      auroraLayers.forEach((l) => {
        l.amplitude = height * 0.14;
      });
    };
    init();

    // ── Render aurora band ──
    const drawAurora = (layer: AuroraLayer, time: number) => {
      const bandH = height * 0.28;
      const baseY = height * 0.38 + Math.sin(time * layer.speed * 0.5) * height * 0.08;

      ctx.beginPath();
      ctx.moveTo(0, baseY);

      const steps = 80;
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * width;
        const y =
          baseY +
          Math.sin(x * layer.frequency + time * layer.speed * 100 + layer.offset) *
            layer.amplitude +
          Math.sin(x * layer.frequency * 2.3 + time * layer.speed * 70) *
            layer.amplitude * 0.4;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.lineTo(width, baseY + bandH);
      ctx.lineTo(0, baseY + bandH);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, baseY - layer.amplitude, 0, baseY + bandH);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(0.3, layer.color1);
      grad.addColorStop(0.6, layer.color2);
      grad.addColorStop(1, "transparent");

      ctx.fillStyle = grad;
      ctx.fill();
    };

    // ── Render neural connections ──
    const CONNECTION_DIST = Math.min(width, height) * 0.22;
    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35;
            const pulse = Math.sin(t * 0.03 + i + j) * 0.5 + 0.5;

            const grad = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            grad.addColorStop(0, nodes[i].color.replace(")", `,${alpha * pulse})`).replace("rgb", "rgba"));
            grad.addColorStop(1, nodes[j].color.replace(")", `,${alpha * pulse})`).replace("rgb", "rgba"));

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8 + pulse * 0.6;
            ctx.stroke();
          }
        }
      }
    };

    // ── Render glowing node ──
    const drawNode = (node: NeuralNode) => {
      const pulse = Math.sin(t * node.pulseSpeed + node.pulsePhase) * 0.5 + 0.5;
      const r = node.radius * (1 + pulse * 0.5);
      const glow = r * (4 + pulse * 5) * node.glowIntensity;

      // Outer halo
      const haloGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glow);
      haloGrad.addColorStop(0, node.color.replace(")", `,${0.18 * pulse})`).replace("rgb", "rgba"));
      haloGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(node.x, node.y, glow, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // Core
      const coreGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r);
      coreGrad.addColorStop(0, "#ffffff");
      coreGrad.addColorStop(0.4, node.color);
      coreGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();
    };

    // ── Render star with parallax ──
    const drawStar = (star: Star, mx: number, my: number) => {
      const parallax = star.z * 28;
      const px = star.x + (mx - 0.5) * parallax;
      const py = star.y + (my - 0.5) * parallax;

      star.twinkle += star.twinkleSpeed;
      const twinkle = Math.sin(star.twinkle) * 0.5 + 0.5;
      const alpha = (0.3 + twinkle * 0.7) * (0.4 + star.z * 0.6);

      // Cross-sparkle for brighter stars
      if (star.z > 0.72 && twinkle > 0.6) {
        ctx.strokeStyle = star.color.replace(")", `,${alpha * 0.4})`).replace("rgb", "rgba") ;
        ctx.lineWidth = 0.5;
        const sp = star.size * 2.5;
        ctx.beginPath();
        ctx.moveTo(px - sp, py); ctx.lineTo(px + sp, py);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px, py - sp); ctx.lineTo(px, py + sp);
        ctx.stroke();
      }

      // Star glow
      if (star.z > 0.5) {
        const sg = ctx.createRadialGradient(px, py, 0, px, py, star.size * 3);
        sg.addColorStop(0, star.color.replace(")", `,${alpha * 0.5})`).replace("rgb", "rgba"));
        sg.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(px, py, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();
      }

      // Star core
      ctx.beginPath();
      ctx.arc(px, py, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color.replace(")", `,${alpha})`).replace("rgb", "rgba");
      ctx.fill();
    };

    // ── Deep space nebula clouds ──
    const drawNebula = (time: number, mx: number, my: number) => {
      const nebulaPoints = [
        { cx: width * 0.15, cy: height * 0.25, rx: width * 0.22, ry: height * 0.22, c1: "rgba(129,140,248,0.055)", c2: "transparent", p: 0.015 },
        { cx: width * 0.82, cy: height * 0.65, rx: width * 0.25, ry: height * 0.25, c1: "rgba(56,189,248,0.045)", c2: "transparent", p: 0.012 },
        { cx: width * 0.5,  cy: height * 0.5,  rx: width * 0.3,  ry: height * 0.3,  c1: "rgba(99,102,241,0.03)", c2: "transparent", p: 0.008 },
        { cx: width * 0.72, cy: height * 0.18, rx: width * 0.18, ry: height * 0.18, c1: "rgba(244,114,182,0.035)", c2: "transparent", p: 0.018 },
      ];

      nebulaPoints.forEach((n, i) => {
        const drift = Math.sin(time * n.p + i * 1.3) * 60;
        const driftY = Math.cos(time * n.p * 0.7 + i) * 40;
        const px = n.cx + (mx - 0.5) * 40 + drift;
        const py = n.cy + (my - 0.5) * 25 + driftY;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, n.rx);
        grad.addColorStop(0, n.c1);
        grad.addColorStop(1, n.c2);
        ctx.beginPath();
        ctx.ellipse(px, py, n.rx, n.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
    };

    // ── Grid overlay (very subtle) ──
    const drawGrid = () => {
      const gridSize = 80;
      ctx.strokeStyle = "rgba(255,255,255,0.018)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    // ── Main render loop ──
    const render = () => {
      t++;

      // Smooth mouse lerp
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Clear
      ctx.clearRect(0, 0, width, height);

      // 1. Deep space background
      const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.85);
      bgGrad.addColorStop(0, "#0d1120");
      bgGrad.addColorStop(0.4, "#090b12");
      bgGrad.addColorStop(1, "#050609");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Grid
      drawGrid();

      // 3. Nebula clouds (deepest)
      drawNebula(t, mx, my);

      // 4. Aurora bands
      auroraLayers.forEach((layer) => drawAurora(layer, t));

      // 5. Far stars (low z)
      stars.filter(s => s.z < 0.45).forEach(s => drawStar(s, mx, my));

      // 6. Neural connections
      drawConnections();

      // 7. Near stars (high z)
      stars.filter(s => s.z >= 0.45).forEach(s => drawStar(s, mx, my));

      // 8. Neural nodes
      nodes.forEach(node => {
        // Move
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -50) node.x = width + 50;
        if (node.x > width + 50) node.x = -50;
        if (node.y < -50) node.y = height + 50;
        if (node.y > height + 50) node.y = -50;

        drawNode(node);
      });

      // 9. Vignette
      const vignette = ctx.createRadialGradient(width / 2, height / 2, height * 0.2, width / 2, height / 2, Math.max(width, height) * 0.8);
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "rgba(5,6,9,0.65)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
