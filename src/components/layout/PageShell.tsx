"use client";

import React from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundGrid } from "@/components/visual/BackgroundGrid";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-[#07090D] text-[#F4F6FA] selection:bg-[rgba(103,227,245,0.25)] selection:text-[#67E3F5]">
      {/* Cinematic Entry Loading Screen */}
      <LoadingScreen />

      {/* Atmospheric Background Geometry */}
      <BackgroundGrid />

      {/* Primary Floating Navigation */}
      <Navbar />

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[70] px-4 py-2 bg-[#67E3F5] text-[#07090D] font-mono text-xs font-bold rounded"
      >
        Skip to main content
      </a>

      {/* Primary Page Sections */}
      <main id="main-content" className="relative z-10 flex flex-col w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
