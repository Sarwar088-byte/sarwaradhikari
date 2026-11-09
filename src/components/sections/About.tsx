import React from "react";
import { BookOpen, Code2, Database, Users, CheckCircle2 } from "lucide-react";

export function About() {
  const pillars = [
    {
      title: "Algorithmic Problem Solving",
      subtitle: "Data Structures & Core CS",
      description:
        "Building a durable engineering foundation by implementing and analyzing classical data structures (trees, graphs, heaps) and algorithm efficiency.",
      icon: Code2,
    },
    {
      title: "Systems & Memory Mechanics",
      subtitle: "C++ & Low-Level Foundations",
      description:
        "Studying pointers, memory lifecycles, and object-oriented abstraction patterns in C++, paired with rapid scripting and automation in Python.",
      icon: BookOpen,
    },
    {
      title: "Database & Application Architecture",
      subtitle: "SQL & Software Concepts",
      description:
        "Designing relational schemas, optimizing queries, and understanding how backend data structures interface with user-facing application software.",
      icon: Database,
    },
    {
      title: "Peer Mentorship & Communication",
      subtitle: "Collaborative Leadership",
      description:
        "Helping junior engineering students debug logic and master programming basics, reinforcing my own understanding through active teaching.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            A developer who values deep foundational understanding, disciplined problem solving, and collaborative growth.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative & Profile (Left Column) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Profile Intro Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl bg-[#11141c] border border-white/10 shadow-xl">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-sky-400/40 shrink-0 shadow-lg shadow-sky-500/10">
                <img
                  src="/profile.jpg"
                  alt="Sarwar Adhikari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">
                    Sarwar Adhikari
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-xs text-sky-400 font-medium mb-2">
                  B.Tech CSE Undergraduate &bull; Peer Mentor
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated to foundational computer science, algorithmic mastery, and collaborative academic guidance in Nepal.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am an undergraduate developer in my second year of Computer Science and Engineering in Nepal. Rather than skimming through superficial hype, I invest my time understanding how software actually works beneath the surface—from memory allocation and pointers in C++ to asymptotic efficiency in data structures.
              </p>
              <p>
                Alongside my studies, serving as an Academic Peer Mentor is one of my most rewarding responsibilities. Teaching introductory programming concepts to first-year engineering students has taught me that true mastery is the ability to explain complex technical concepts simply, patiently, and clearly.
              </p>
              <p>
                My goal is to continue refining my engineering skills through challenging software projects, contributing to open-source tools, and collaborating with motivated teams to build reliable, high-impact technology.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-3 flex flex-wrap gap-2">
              {[
                "B.Tech CSE (Year 2)",
                "Peer Mentor",
                "C++ & Python",
                "Data Structures",
                "SQL & Relational DBMS",
                "Nepal",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#141923] border border-white/10 text-xs font-medium text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Core Pillars (Right Column) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-[#11141c] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-medium text-sky-400 mb-2">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
