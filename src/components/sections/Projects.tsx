"use client";

import React from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  const hasProjects = projects && projects.length > 0;

  return (
    <section id="projects" className="py-28 relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <SectionHeading
          number="04"
          title="SELECTED WORK"
          description="Experiments, ideas, and software built through curiosity."
        />

        {hasProjects ? (
          /* Real Project Cards Grid (renders automatically when projects are added to src/data/projects.ts) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(103,227,245,0.35)] p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#67E3F5]">
                      {proj.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#707C8C] px-2 py-0.5 rounded bg-[#131923] border border-[rgba(255,255,255,0.06)]">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F4F6FA] mb-3 group-hover:text-[#67E3F5] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-[#A4ADBA] leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#07090D] border border-[rgba(255,255,255,0.07)] text-[#F4F6FA]"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-4">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#A4ADBA] hover:text-[#67E3F5] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#67E3F5] hover:underline"
                    >
                      <span>Live Demonstration</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Polished, Intentional Empty State (Authentic & Architectural) */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0D1118] to-[#07090D] border border-[rgba(255,255,255,0.08)] p-8 sm:p-14 overflow-hidden"
          >
            {/* Ambient background light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(103,227,245,0.07)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#67E3F5] uppercase tracking-widest px-3 py-1 rounded-full bg-[rgba(103,227,245,0.08)] border border-[rgba(103,227,245,0.2)] mb-6">
                <Terminal className="w-3.5 h-3.5" />
                <span>PROJECT_INCUBATOR // LAB SPACE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F6FA] mb-4">
                Every idea begins somewhere.
              </h3>

              <p className="text-base text-[#A4ADBA] leading-relaxed mb-8 font-light">
                This space is currently being curated to showcase independent software builds, algorithmic experiments in C++, and application software prototypes. In adherence to strict integrity, fictional project claims are deliberately omitted.
              </p>

              {/* Architectural Preparation Schema */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#07090D] border border-[rgba(255,255,255,0.06)]">
                  <div className="text-xs font-mono text-[#67E3F5] mb-1">01. C++ Systems</div>
                  <div className="text-xs text-[#707C8C]">Algorithmic logic, data structure engines, and memory management.</div>
                </div>

                <div className="p-4 rounded-xl bg-[#07090D] border border-[rgba(255,255,255,0.06)]">
                  <div className="text-xs font-mono text-[#9582FF] mb-1">02. Python Automation</div>
                  <div className="text-xs text-[#707C8C]">Utility scripting, application software tools, and data parsing.</div>
                </div>

                <div className="p-4 rounded-xl bg-[#07090D] border border-[rgba(255,255,255,0.06)]">
                  <div className="text-xs font-mono text-[#67E3F5] mb-1">03. Interactive Media</div>
                  <div className="text-xs text-[#707C8C]">Exploring gameplay mechanics and real-time graphics pipelines.</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#707C8C]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#67E3F5]" />
                  <span>Centralized Data Pipeline Ready:</span>
                </div>
                <code className="text-[#A4ADBA] px-2 py-1 rounded bg-[#07090D] border border-[rgba(255,255,255,0.08)]">
                  src/data/projects.ts
                </code>
              </div>
            </div>

            {/* Corner Decorative Blueprint Grid */}
            <div className="hidden lg:block absolute -bottom-10 -right-10 w-64 h-64 border border-[rgba(255,255,255,0.06)] rounded-full border-dashed animate-spin-slow pointer-events-none" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
