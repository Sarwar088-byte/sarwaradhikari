import React from "react";

export function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Calm, static subtle grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-70" />

      {/* Gentle top radial glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />
    </div>
  );
}
