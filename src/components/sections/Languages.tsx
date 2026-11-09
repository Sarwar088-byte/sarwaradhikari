import React from "react";
import { siteConfig } from "@/data/site";
import { Globe, Lightbulb, Code2, Gamepad2, Layers, Cpu } from "lucide-react";

export function Languages() {
  const interests = [
    {
      title: "Systems & Algorithms",
      description: "Low-level memory efficiency, algorithmic problem solving, and computational limits.",
      icon: Code2,
    },
    {
      title: "Interactive Game Engines",
      description: "Exploring 2D game loops, physics simulations, collision algorithms, and rendering.",
      icon: Gamepad2,
    },
    {
      title: "Application Architecture",
      description: "Translating real-world user workflows into structured, relational, maintainable software.",
      icon: Layers,
    },
    {
      title: "Emerging Technologies",
      description: "Keeping pace with modern tools, cloud deployment pipelines, and computing innovations.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">
            Communication &amp; Pursuits
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Languages &amp; Interests
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            Linguistic fluency for international collaboration and creative technical interests outside structured coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Spoken Languages (Left Column) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Spoken Languages</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {siteConfig.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 rounded-xl bg-[#11141c] border border-white/10"
                >
                  <div className="text-base font-bold text-white mb-1">
                    {lang.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {lang.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Pursuits (Right Column) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <Lightbulb className="w-4 h-4 text-indigo-400" />
              <span>Technical &amp; Creative Interests</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {interests.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#11141c] border border-white/10"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
