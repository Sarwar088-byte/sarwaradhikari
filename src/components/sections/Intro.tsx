"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { GraduationCap, Users, MapPin, Cpu } from "lucide-react";

export function Intro() {
  const infoCards = [
    {
      label: "Academic Focus",
      value: siteConfig.education.degree,
      sub: "Core Computer Science Principles",
      icon: GraduationCap,
      accent: "border-[#67E3F5]/30 text-[#67E3F5]",
    },
    {
      label: "Current Stage",
      value: siteConfig.education.year,
      sub: "B.Tech Undergraduate",
      icon: Cpu,
      accent: "border-[#9582FF]/30 text-[#9582FF]",
    },
    {
      label: "Professional Role",
      value: siteConfig.secondaryRole,
      sub: "Academic Guidance & Support",
      icon: Users,
      accent: "border-[#67E3F5]/30 text-[#67E3F5]",
    },
    {
      label: "Location",
      value: siteConfig.location,
      sub: "South Asia // Global Perspective",
      icon: MapPin,
      accent: "border-[rgba(255,255,255,0.15)] text-[#A4ADBA]",
    },
  ];

  return (
    <section
      id="intro"
      className="py-24 relative border-t border-[rgba(255,255,255,0.06)] bg-[#07090D]/50"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Large Typographic Statement */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#67E3F5]">
            <span>01 // PERSPECTIVE</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F4F6FA] tracking-tight max-w-4xl leading-tight"
          >
            Technology starts with{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#67E3F5] to-[#9582FF]">
              curiosity
            </span>
            . Innovation grows through{" "}
            <span className="font-semibold text-white">exploration</span>.
          </motion.h2>
        </div>

        {/* Editorial Information Strip - Verified Facts Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-6 rounded-xl bg-[#0D1118]/80 border border-[rgba(255,255,255,0.07)] hover:border-[rgba(103,227,245,0.3)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#707C8C]">
                    {"// 0"}{idx + 1}
                  </span>
                  <div
                    className={`p-2 rounded-lg bg-[#131923] border ${card.accent} transition-transform group-hover:scale-105`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono text-[#A4ADBA] mb-1">
                  {card.label}
                </div>
                <div className="text-base font-semibold text-[#F4F6FA] mb-1 tracking-tight">
                  {card.value}
                </div>
                <div className="text-xs text-[#707C8C] font-mono">
                  {card.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
