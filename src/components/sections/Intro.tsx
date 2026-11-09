import React from "react";
import { siteConfig } from "@/data/site";
import { GraduationCap, Users, MapPin, Terminal } from "lucide-react";

export function Intro() {
  const highlights = [
    {
      title: "Undergraduate Degree",
      value: "B.Tech in CSE",
      description: "Second year of computer science & engineering studies.",
      icon: GraduationCap,
    },
    {
      title: "Mentorship",
      value: "Peer Mentor",
      description: "Guiding fellow students through programming and logic concepts.",
      icon: Users,
    },
    {
      title: "Core Technologies",
      value: "C++ & Python",
      description: "Algorithmic thinking, data structures, and software architecture.",
      icon: Terminal,
    },
    {
      title: "Based In",
      value: siteConfig.location,
      description: "Open to remote internships and engineering collaboration.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-white/5 bg-[#0d1017]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-[#11141c] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-400">{item.title}</span>
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="text-lg font-bold text-white mb-1.5">{item.value}</div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
