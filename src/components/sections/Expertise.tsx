import React from "react";
import { skillCategories } from "@/data/skills";
import { Code2, Binary, Wrench, Users, Check } from "lucide-react";

export function Expertise() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "programming":
        return Code2;
      case "computer-science":
        return Binary;
      case "tooling":
        return Wrench;
      case "mentorship":
        return Users;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-white/5 bg-[#0d1017]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">
            Technical Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Competencies
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            A balanced foundation spanning low-level systems programming, application development, computer science theory, and collaborative mentorship.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-[#11141c] border border-white/10 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.label}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-[#0a0b0f] border border-white/5"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
