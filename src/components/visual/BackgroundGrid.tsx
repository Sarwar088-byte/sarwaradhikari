"use client";

import React from "react";

export function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle fine technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

      {/* Atmospheric radial glow gradients */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(103,227,245,0.06)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(149,130,255,0.04)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute top-[75%] -right-[10%] w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(103,227,245,0.04)_0%,transparent_70%)] blur-3xl" />

      {/* Floating subtle ambient nodes */}
      <div className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#67E3F5] opacity-20 animate-float-drift" />
      <div
        className="absolute top-[35%] right-[15%] w-1 h-1 rounded-full bg-[#9582FF] opacity-25 animate-float-drift"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute top-[68%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#67E3F5] opacity-20 animate-float-drift"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-[82%] right-[28%] w-1 h-1 rounded-full bg-[#9582FF] opacity-30 animate-float-drift"
        style={{ animationDelay: "1.2s" }}
      />
    </div>
  );
}
