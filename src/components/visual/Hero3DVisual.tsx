"use client";

import React, { useEffect, useRef, useState } from "react";
import { RotateCw, Compass, Sparkles } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  a: number;
  b: number;
}

export function Hero3DVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [angles, setAngles] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 460);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 460;
      height = canvas.height = Math.min(width, 480);
    };

    window.addEventListener("resize", handleResize);

    // Golden ratio for icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const radius = 135;

    // 12 vertices of regular icosahedron
    const baseVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },

      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },

      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map((v) => {
      const len = Math.hypot(v.x, v.y, v.z);
      return {
        x: (v.x / len) * radius,
        y: (v.y / len) * radius,
        z: (v.z / len) * radius,
      };
    });

    // 30 edges of icosahedron (connect pairs with correct distance)
    const edges: Edge[] = [];
    const targetDist = 2 * (radius / Math.sqrt(phi * Math.sqrt(5)));
    for (let i = 0; i < baseVertices.length; i++) {
      for (let j = i + 1; j < baseVertices.length; j++) {
        const dx = baseVertices[i].x - baseVertices[j].x;
        const dy = baseVertices[i].y - baseVertices[j].y;
        const dz = baseVertices[i].z - baseVertices[j].z;
        const dist = Math.hypot(dx, dy, dz);
        if (Math.abs(dist - targetDist) < 15) {
          edges.push({ a: i, b: j });
        }
      }
    }

    // Additional inner orbiting particle nodes
    const innerNodes: Point3D[] = [];
    const numInner = 28;
    for (let i = 0; i < numInner; i++) {
      const theta = (i / numInner) * Math.PI * 2;
      const r = radius * 0.55;
      innerNodes.push({
        x: Math.cos(theta) * r,
        y: Math.sin(theta) * r * 0.4,
        z: Math.sin(theta) * r,
      });
    }

    // Outer orbital ring nodes
    const orbitNodes = [
      { label: "C++ Core", angle: 0, speed: 0.008, color: "#38bdf8" },
      { label: "Algorithms", angle: Math.PI * 0.5, speed: 0.007, color: "#818cf8" },
      { label: "Python", angle: Math.PI, speed: 0.009, color: "#38bdf8" },
      { label: "SQL DBMS", angle: Math.PI * 1.5, speed: 0.006, color: "#34d399" },
    ];

    let rotX = 0.25;
    let rotY = 0.35;
    let targetRotX = 0.25;
    let targetRotY = 0.35;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        targetRotY += dx * 0.008;
        targetRotX += dy * 0.008;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / rect.width - 0.5;
        const my = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY += mx * 0.003;
        targetRotX -= my * 0.003;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - lastMouseX;
        const dy = e.touches[0].clientY - lastMouseY;
        targetRotY += dx * 0.008;
        targetRotX += dy * 0.008;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);

    // 3D rotation matrix projection
    const rotatePoint = (p: Point3D, rx: number, ry: number): Point3D => {
      // Rotate around Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = p.x * cosY + p.z * sinY;
      const y1 = p.y;
      const z1 = -p.x * sinY + p.z * cosY;

      // Rotate around X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      return { x: x2, y: y2, z: z2 };
    };

    const project = (p: Point3D, cx: number, cy: number, fov: number) => {
      const depth = fov / (fov + p.z);
      return {
        x: cx + p.x * depth,
        y: cy + p.y * depth,
        scale: depth,
        z: p.z,
      };
    };

    let step = 0;

    const render = () => {
      step += 1;
      // Gentle auto-rotation
      if (!isDragging) {
        targetRotY += 0.003;
        targetRotX += 0.001 * Math.sin(step * 0.015);
      }

      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      if (step % 10 === 0) {
        setAngles({
          x: Math.round(((rotX * 180) / Math.PI) % 360),
          y: Math.round(((rotY * 180) / Math.PI) % 360),
        });
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 420;

      // Draw background ambient depth glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, radius * 1.6);
      glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.09)");
      glowGrad.addColorStop(0.5, "rgba(129, 140, 248, 0.03)");
      glowGrad.addColorStop(1, "rgba(10, 11, 15, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Rotate icosahedron vertices
      const projectedVertices = baseVertices.map((v) => {
        const rotated = rotatePoint(v, rotX, rotY);
        return project(rotated, cx, cy, fov);
      });

      // Draw 3D edges with depth-based opacity
      edges.forEach((edge) => {
        const p1 = projectedVertices[edge.a];
        const p2 = projectedVertices[edge.b];
        const avgZ = (p1.z + p2.z) / 2;
        // Normalize depth for alpha: z between -radius and +radius
        const alpha = Math.max(0.12, Math.min(0.85, (avgZ + radius) / (2 * radius)));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        const edgeGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        edgeGrad.addColorStop(0, `rgba(56, 189, 248, ${alpha})`);
        edgeGrad.addColorStop(1, `rgba(129, 140, 248, ${alpha * 0.8})`);

        ctx.strokeStyle = edgeGrad;
        ctx.lineWidth = Math.max(1, alpha * 2);
        ctx.stroke();
      });

      // Draw inner core particles
      innerNodes.forEach((node, i) => {
        const pulse = Math.sin(step * 0.03 + i) * 8;
        const rotated = rotatePoint(
          { x: node.x + pulse, y: node.y, z: node.z },
          rotX * 1.2,
          rotY * 1.2
        );
        const p = project(rotated, cx, cy, fov);
        const alpha = Math.max(0.2, (p.z + radius) / (2 * radius));

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1.2, 2.2 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.7})`;
        ctx.fill();
      });

      // Draw 3D vertex nodes
      projectedVertices.forEach((p) => {
        const alpha = Math.max(0.25, Math.min(1, (p.z + radius) / (2 * radius)));
        const r = Math.max(2.5, 4.5 * p.scale);

        // Halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.25})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 246, 252, ${alpha})`;
        ctx.fill();
      });

      // Orbiting external skill satellites
      orbitNodes.forEach((sat) => {
        sat.angle += sat.speed;
        const orbitRadius = radius * 1.35;
        const rawPoint: Point3D = {
          x: Math.cos(sat.angle) * orbitRadius,
          y: Math.sin(sat.angle * 0.7) * 20,
          z: Math.sin(sat.angle) * orbitRadius,
        };
        const rotated = rotatePoint(rawPoint, rotX * 0.6, rotY * 0.6);
        const proj = project(rotated, cx, cy, fov);
        const alpha = Math.max(0.3, Math.min(1, (proj.z + orbitRadius) / (2 * orbitRadius)));

        // Satellite node dot
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, 4 * proj.scale, 0, Math.PI * 2);
        ctx.fillStyle = sat.color;
        ctx.shadowColor = sat.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Satellite label pill
        ctx.font = `600 ${Math.max(10, 11 * proj.scale)}px ui-monospace, monospace`;
        const textMetrics = ctx.measureText(sat.label);
        const padding = 6;
        const pillW = textMetrics.width + padding * 2;
        const pillH = 18;
        const pillX = proj.x + 8;
        const pillY = proj.y - 9;

        ctx.fillStyle = `rgba(14, 17, 23, ${Math.min(0.9, alpha)})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.18})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = `rgba(241, 245, 249, ${alpha})`;
        ctx.fillText(sat.label, pillX + padding, pillY + 13);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] rounded-2xl bg-[#11141c] border border-white/10 p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top 3D Control Bar */}
      <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-semibold text-slate-200">3D Systems Inspector</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span>X: {angles.x}&deg;</span>
          <span>Y: {angles.y}&deg;</span>
        </div>
      </div>

      {/* 3D Interactive Canvas */}
      <div className="relative w-full aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ touchAction: "none" }}
        />

        {/* Drag Hint Overlay */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-mono text-slate-400 pointer-events-none flex items-center gap-1.5 backdrop-blur-sm">
          <RotateCw className="w-3 h-3 text-sky-400 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Click &amp; drag to rotate 3D mesh</span>
        </div>
      </div>

      {/* Bottom Architectural Legend */}
      <div className="w-full pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-sky-400" />
          <span>Perspective: 3D Geodesic Icosahedron</span>
        </div>
        <span className="text-sky-400 font-semibold">60 FPS Native WebGL/2D</span>
      </div>
    </div>
  );
}
