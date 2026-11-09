"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { HeroVisual } from "@/components/visual/HeroVisual";
import { ArrowDown, ArrowUpRight, Compass, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background radial lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(103,227,245,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Identity & Typography */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* System Status / Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0D1118] border border-[rgba(255,255,255,0.08)] mb-6 shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-[#67E3F5]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A4ADBA]">
                HELLO, WORLD. I&apos;M
              </span>
              <span className="w-1 h-3 bg-[#67E3F5] animate-pulse" />
            </motion.div>

            {/* Signature Name Display Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#F4F6FA] leading-[0.95] uppercase">
                Sarwar
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F6FA] via-[#67E3F5] to-[#9582FF]">
                  Adhikari
                </span>
              </h1>
            </motion.div>

            {/* Supporting Role Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm tracking-wider text-[#67E3F5] font-medium uppercase mb-6"
            >
              <span>{siteConfig.role}</span>
              <span className="text-[rgba(255,255,255,0.2)]">&bull;</span>
              <span className="text-[#9582FF]">{siteConfig.secondaryRole}</span>
              <span className="text-[rgba(255,255,255,0.2)]">&bull;</span>
              <span className="text-[#A4ADBA]">Technology Enthusiast</span>
            </motion.div>

            {/* Core Manifesto Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-[#F4F6FA] leading-snug mb-4 max-w-2xl"
            >
              &ldquo;{siteConfig.tagline}&rdquo;
            </motion.p>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base text-[#A4ADBA] leading-relaxed max-w-xl mb-8 font-normal"
            >
              {siteConfig.description}
            </motion.p>

            {/* Call to Actions & Location Microcopy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#expertise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#67E3F5] text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 hover:bg-[#88e8f8] hover:shadow-[0_0_25px_rgba(103,227,245,0.4)]"
              >
                <span>Explore Technical Focus</span>
                <Compass className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D1118] text-[#F4F6FA] border border-[rgba(255,255,255,0.12)] font-mono text-xs uppercase tracking-wider font-medium hover:border-[rgba(103,227,245,0.4)] hover:text-[#67E3F5] transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs font-mono text-[#707C8C] pl-2 sm:pl-4 sm:border-l sm:border-[rgba(255,255,255,0.1)] py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#67E3F5]" />
                <span>Based in {siteConfig.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Signature Geometric Orbital Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Refined Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="max-w-[1360px] mx-auto px-6 md:px-12 w-full pt-12 flex items-center justify-between text-xs font-mono text-[#707C8C]"
      >
        <div className="flex items-center gap-2">
          <span className="text-[#67E3F5]">SYS.STATUS:</span>
          <span className="text-[#F4F6FA]">ONLINE // READY</span>
        </div>

        <a
          href="#intro"
          className="group flex items-center gap-2 hover:text-[#67E3F5] transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="tracking-widest uppercase">DISCOVER PROFILE</span>
          <div className="w-7 h-7 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:border-[#67E3F5] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
