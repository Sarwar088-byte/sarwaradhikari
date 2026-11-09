"use client";

import React from "react";
import { journeyMilestones } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Code2,
  Database,
  Gamepad2,
  Sparkles,
} from "lucide-react";

export function Journey() {
  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case "current":
        return GraduationCap;
      case "role":
        return Users;
      case "foundation":
        return Code2;
      case "learning":
        return Database;
      case "interest":
        return Gamepad2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="journey" className="py-28 relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <SectionHeading
          number="05"
          title="THE JOURNEY SO FAR"
          description="Stage-based milestones in academic progression, mentorship, and technical curiosity."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Central Vertical Timeline Spine */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#67E3F5]/40 via-[rgba(255,255,255,0.1)] to-transparent pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {journeyMilestones.map((milestone, idx) => {
              const Icon = getMilestoneIcon(milestone.type);
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12 pl-12 sm:pl-0`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#0D1118] border-2 border-[#67E3F5] flex items-center justify-center shadow-[0_0_15px_rgba(103,227,245,0.3)]">
                      <Icon className="w-4 h-4 text-[#67E3F5]" />
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] p-6 sm:p-7 rounded-2xl bg-[#0D1118]/80 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(103,227,245,0.3)] transition-all duration-300 relative group`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#67E3F5]">
                        {"// STAGE 0"}{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] text-[#707C8C] uppercase tracking-wider px-2 py-0.5 rounded bg-[#131923] border border-[rgba(255,255,255,0.05)]">
                        {milestone.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#F4F6FA] mb-1 group-hover:text-white transition-colors">
                      {milestone.title}
                    </h3>

                    <div className="text-xs font-mono text-[#9582FF] mb-4">
                      {milestone.subtitle}
                    </div>

                    <p className="text-sm text-[#A4ADBA] leading-relaxed mb-5">
                      {milestone.description}
                    </p>

                    {milestone.details && (
                      <div className="pt-4 border-t border-[rgba(255,255,255,0.05)] space-y-2">
                        {milestone.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 text-xs text-[#707C8C] leading-snug"
                          >
                            <span className="text-[#67E3F5] text-xs leading-tight">&bull;</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
