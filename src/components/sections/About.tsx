"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal, Sparkles, BookOpen, Layers, Code, Users } from "lucide-react";

export function About() {
  const [activeDriver, setActiveDriver] = useState(0);

  const drivers = [
    {
      title: "Continuous Learning",
      subtitle: "Iterative Mastery",
      description:
        "Building a durable intellectual foundation through deliberate practice in computer science principles, algorithmic problem solving, and modern development paradigms.",
      icon: BookOpen,
      codeSnippet: "while (curiosity) { explore(); understand(); build(); }",
    },
    {
      title: "Programming Foundations",
      subtitle: "C++ & Python Core",
      description:
        "Studying low-level memory mechanics, execution efficiency, and object-oriented abstractions in C++, paired with rapid scripting, automation, and problem-solving in Python.",
      icon: Code,
      codeSnippet: "#include <concepts>\nstd::unique_ptr<Logic> sys = std::make_unique<System>();",
    },
    {
      title: "Application Architecture",
      subtitle: "Systems & Real-World Utility",
      description:
        "Investigating how software translates user intent into reliable state machines, scalable databases via SQL, and intuitive human-facing applications.",
      icon: Layers,
      codeSnippet: "SELECT insight, solution FROM reality WHERE complexity > 0;",
    },
    {
      title: "Peer Mentorship",
      subtitle: "Collaborative Growth",
      description:
        "Synthesizing technical knowledge by explaining challenging concepts to peers, cultivating teamwork, and fostering an inclusive engineering community.",
      icon: Users,
      codeSnippet: "const guidePeer = (learner) => empower(learner.potential);",
    },
    {
      title: "Game & Interactive Tech",
      subtitle: "Creative Computing",
      description:
        "Exploring how real-time physics, game loops, spatial rendering, and interactive mechanics combine engineering rigor with artistic expression.",
      icon: Sparkles,
      codeSnippet: "void update(float dt) { renderWorld(); simulatePhysics(dt); }",
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <SectionHeading
          number="02"
          title="BEHIND THE CODE"
          description="Curiosity is where every meaningful idea begins."
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-light text-[#F4F6FA] leading-relaxed">
              I am an undergraduate developer exploring how logic, computation, and software architecture can transform abstract concepts into impactful digital solutions.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#A4ADBA] leading-relaxed font-normal">
              <p>
                Currently in my second year of Computer Science and Engineering, my academic and personal focus is centered on establishing deep foundational roots. Rather than pursuing fleeting superficial trends, I dedicate my hours to understanding core data structures, memory models in C++, Python application patterns, and relational database dynamics with SQL.
              </p>
              <p>
                Beyond individual coding, serving as a Peer Mentor allows me to deconstruct intricate programming concepts into accessible mental models for colleagues. This discipline of active teaching sharpens my own clarity, reinforces technical humility, and fosters strong communication empathy.
              </p>
              <p>
                Whether dissecting application software workflows or exploring game development logic, my driving goal remains constant: continuous personal evolution, deliberate craftsmanship, and turning inquisitive energy into clean, reliable technology.
              </p>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#0D1118] border border-[rgba(255,255,255,0.08)] text-[#67E3F5]">
                # B.Tech CSE
              </span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#0D1118] border border-[rgba(255,255,255,0.08)] text-[#9582FF]">
                # Peer Mentor
              </span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#0D1118] border border-[rgba(255,255,255,0.08)] text-[#A4ADBA]">
                # C++ & Python
              </span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#0D1118] border border-[rgba(255,255,255,0.08)] text-[#707C8C]">
                # Nepal
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0D1118] border border-[rgba(255,255,255,0.09)] p-6 sm:p-8 shadow-2xl overflow-hidden">
              {/* Subtle top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#67E3F5] to-transparent opacity-60" />

              <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.06)] mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#67E3F5]" />
                  <span className="font-mono text-xs text-[#F4F6FA] font-medium tracking-wider">
                    SPEC // SARWAR_ADHIKARI
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#67E3F5] animate-ping" />
                  <span className="font-mono text-[10px] text-[#707C8C]">ACTV</span>
                </div>
              </div>

              {/* Technical Profile Attributes */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                  <span className="text-[#707C8C]">DOMAIN</span>
                  <span className="text-[#F4F6FA]">Computer Science &amp; Eng</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                  <span className="text-[#707C8C]">PROGRAM STAGE</span>
                  <span className="text-[#67E3F5]">Second Year Undergraduate</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                  <span className="text-[#707C8C]">LEADERSHIP</span>
                  <span className="text-[#9582FF]">Peer Mentor</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                  <span className="text-[#707C8C]">GEO COORDINATE</span>
                  <span className="text-[#F4F6FA]">{siteConfig.location}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                  <span className="text-[#707C8C]">CORE LANGUAGES</span>
                  <span className="text-[#A4ADBA]">C++, Python, SQL</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                  <span className="text-[#707C8C]">AVATAR STATE</span>
                  <span className="text-[#707C8C] italic">Configured for Direct Portrait</span>
                </div>
              </div>

              {/* Ready for photo embedding without fabricating placeholder image */}
              <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[11px] font-mono text-[#707C8C]">
                <span>ARCH_VER: 2026.2</span>
                <span className="text-[#67E3F5]">&bull; READY_FOR_DEPLOY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Sub-Section: WHAT DRIVES ME */}
        <div className="pt-12 border-t border-[rgba(255,255,255,0.06)]">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#67E3F5] block mb-2">
                {"// PILLARS"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F6FA]">
                WHAT DRIVES ME
              </h3>
            </div>
            <p className="text-xs font-mono text-[#707C8C] max-w-xs">
              Interactive focus disciplines shaping my daily development routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Drivers Selector Buttons */}
            <div className="md:col-span-5 flex flex-col space-y-2">
              {drivers.map((d, index) => {
                const Icon = d.icon;
                const isSelected = activeDriver === index;
                return (
                  <button
                    key={d.title}
                    onClick={() => setActiveDriver(index)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-[#131923] border-[#67E3F5]/40 text-[#F4F6FA] shadow-[0_0_20px_rgba(103,227,245,0.08)]"
                        : "bg-[#0D1118]/60 border-[rgba(255,255,255,0.06)] text-[#A4ADBA] hover:bg-[#0D1118] hover:border-[rgba(255,255,255,0.12)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected
                            ? "bg-[#67E3F5]/10 text-[#67E3F5]"
                            : "bg-[#07090D] text-[#707C8C]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold tracking-tight">
                          {d.title}
                        </div>
                        <div className="text-xs font-mono text-[#707C8C]">
                          {d.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#707C8C]">
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Drivers Detail Panel */}
            <div className="md:col-span-7 flex">
              <div className="w-full rounded-xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(103,227,245,0.06)_0%,transparent_70%)] pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-[#67E3F5]">
                      {"// FOCUS DISCIPLINE 0"}{activeDriver + 1}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-[#F4F6FA] mb-2">
                    {drivers[activeDriver].title}
                  </h4>
                  <p className="text-xs font-mono text-[#9582FF] mb-6">
                    {drivers[activeDriver].subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#A4ADBA] leading-relaxed mb-8">
                    {drivers[activeDriver].description}
                  </p>
                </div>

                {/* Simulated Syntax / Logic Expression */}
                <div className="rounded-lg bg-[#07090D] border border-[rgba(255,255,255,0.06)] p-4 font-mono text-xs text-[#67E3F5] overflow-x-auto">
                  <div className="text-[10px] text-[#707C8C] mb-1 select-none">
                    {"// CONCEPT SYNTAX"}
                  </div>
                  <pre className="whitespace-pre-wrap">
                    <code>{drivers[activeDriver].codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
