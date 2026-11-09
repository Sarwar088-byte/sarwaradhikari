"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Languages as LanguagesIcon, Sparkles, Gamepad2, Code, Laptop, Lightbulb } from "lucide-react";

export function Languages() {
  const languageCards = [
    { name: "English", script: "Global Lingua Franca", code: "ENG" },
    { name: "Nepali", script: "नेपाली", code: "NEP" },
    { name: "Hindi", script: "हिन्दी", code: "HIN" },
    { name: "Maithili", script: "मैथिली", code: "MAI" },
  ];

  const interestCards = [
    {
      title: "Coding & Programming",
      detail: "Algorithmic thinking, clean code habits, and iterative problem solving.",
      icon: Code,
    },
    {
      title: "Game Development",
      detail: "Real-time interactive mechanics, physics simulations, and engine pipelines.",
      icon: Gamepad2,
    },
    {
      title: "Exploring Application Software",
      detail: "Dissecting user flows, system responsiveness, and real-world software architectures.",
      icon: Laptop,
    },
    {
      title: "Learning Technology Concepts",
      detail: "Staying inquisitive about emerging computing paradigms and digital innovation.",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="languages" className="py-28 relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <SectionHeading
          number="06"
          title="BEYOND THE CODE"
          description="Linguistic capabilities and technical interests shaping personal worldview."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Linguistic Repertoire */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#67E3F5]">
              <LanguagesIcon className="w-4 h-4" />
              <span>COMMUNICATION // LANGUAGES</span>
            </div>

            <p className="text-sm text-[#A4ADBA] leading-relaxed">
              Multilingual fluency allows me to bridge diverse cultural communities and communicate effectively across regional and international teams.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {languageCards.map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-5 rounded-xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(103,227,245,0.3)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-[#67E3F5] uppercase tracking-wider">
                      {lang.code}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67E3F5]" />
                  </div>
                  <div className="text-lg font-bold text-[#F4F6FA] mb-1">
                    {lang.name}
                  </div>
                  <div className="text-xs font-mono text-[#707C8C]">
                    {lang.script}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Creative & Technical Interests */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9582FF]">
              <Sparkles className="w-4 h-4" />
              <span>INQUIRY // INTERESTS</span>
            </div>

            <p className="text-sm text-[#A4ADBA] leading-relaxed">
              Interests that fuel my curiosity beyond structured classroom syllabi, pushing me into practical creative programming and game systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {interestCards.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group p-5 rounded-xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(149,130,255,0.35)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2.5 rounded-lg bg-[#131923] border border-[rgba(255,255,255,0.06)] text-[#9582FF] w-fit mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-base font-bold text-[#F4F6FA] mb-2 tracking-tight group-hover:text-white transition-colors">
                        {interest.title}
                      </div>
                      <p className="text-xs text-[#A4ADBA] leading-relaxed">
                        {interest.detail}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.04)] font-mono text-[10px] text-[#707C8C] flex justify-between">
                      <span>ENGAGEMENT</span>
                      <span className="text-[#9582FF]">CONTINUOUS</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
