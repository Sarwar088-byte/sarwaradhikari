"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Binary,
  Database,
  TrendingUp,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Expertise() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "programming":
        return Code2;
      case "computer-science":
        return Binary;
      case "software-database":
        return Database;
      case "complementary":
        return TrendingUp;
      default:
        return Cpu;
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="expertise" className="py-28 relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <SectionHeading
          number="03"
          title="THE TECHNICAL FOUNDATION"
          description="Tools, concepts, and disciplines I am exploring and developing."
        />

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-[#67E3F5] text-[#07090D] font-semibold shadow-[0_0_15px_rgba(103,227,245,0.3)]"
                : "bg-[#0D1118] text-[#A4ADBA] border border-[rgba(255,255,255,0.08)] hover:text-[#F4F6FA] hover:border-[rgba(255,255,255,0.16)]"
            }`}
          >
            All Disciplines
          </button>

          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-[#67E3F5] text-[#07090D] font-semibold shadow-[0_0_15px_rgba(103,227,245,0.3)]"
                    : "bg-[#0D1118] text-[#A4ADBA] border border-[rgba(255,255,255,0.08)] hover:text-[#F4F6FA] hover:border-[rgba(255,255,255,0.16)]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => {
              const CategoryIcon = getCategoryIcon(category.id);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-[#0D1118]/70 border border-[rgba(255,255,255,0.07)] p-6 sm:p-8"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[rgba(255,255,255,0.06)] gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#131923] border border-[rgba(255,255,255,0.08)] text-[#67E3F5]">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-[#F4F6FA]">
                          {category.label}
                        </h3>
                        <p className="text-xs text-[#707C8C] font-mono">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#67E3F5] self-start sm:self-auto">
                      {category.skills.length} {category.skills.length === 1 ? "Focus Area" : "Focus Areas"}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative p-5 rounded-xl bg-[#07090D]/80 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(103,227,245,0.3)] transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-lg font-bold text-[#F4F6FA] tracking-tight group-hover:text-[#67E3F5] transition-colors">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#131923] border border-[rgba(255,255,255,0.08)] text-[#9582FF]">
                              {skill.level}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-[#A4ADBA] leading-relaxed mb-4">
                            {skill.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between font-mono text-[10px] text-[#707C8C]">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#67E3F5]" />
                            <span>Active Academic Study</span>
                          </span>
                          <span className="text-[#67E3F5]/60">&gt; VERIFIED_RESUME</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#07090D] border border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#67E3F5] shrink-0" />
            <p className="text-xs sm:text-sm text-[#A4ADBA] font-mono leading-relaxed">
              <strong className="text-[#F4F6FA]">Engineering Philosophy:</strong> Prioritizing deep structural understanding of memory models, algorithmic paradigms, and systems logic over superficial framework breadth.
            </p>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-[#707C8C] px-3 py-1 rounded bg-[#0D1118] border border-[rgba(255,255,255,0.06)]">
            NO FAKE METRICS
          </span>
        </div>
      </div>
    </section>
  );
}
