import React from "react";

export function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Calm, static solid base */}
      <div className="absolute inset-0 bg-[#0a0b0f]" />

      {/* Very subtle static grid lines - no animation */}
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
    </div>
  );
}
