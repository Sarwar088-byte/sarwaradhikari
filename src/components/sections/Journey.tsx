import React from "react";
import { journeyMilestones } from "@/data/journey";
import { GraduationCap, Users, Code2, Database, Sparkles, Check } from "lucide-react";

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
      default:
        return Sparkles;
    }
  };

  return (
    <section id="journey" className="py-24 md:py-32 border-b border-white/5 bg-[#0d1017]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">
            Progression &amp; Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Experience
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            Key academic milestones, leadership roles, and technical growth stages that shape my engineering trajectory.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-3xl">
          {journeyMilestones.map((milestone, idx) => {
            const Icon = getMilestoneIcon(milestone.type);
            return (
              <div
                key={milestone.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#11141c] border border-white/10 flex flex-col sm:flex-row gap-5 items-start"
              >
                {/* Icon badge */}
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-white">
                      {milestone.title}
                    </h3>
                    <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-slate-400 mb-3">
                    {milestone.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {milestone.details && (
                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      {milestone.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2 text-xs text-slate-400"
                        >
                          <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
