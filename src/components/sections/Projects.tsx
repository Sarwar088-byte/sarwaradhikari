import React from "react";
import { projects } from "@/data/projects";
import { ExternalLink, Check, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            A collection of engineering projects, coursework builds, and software prototypes exploring core computer science, systems, and web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="group rounded-2xl bg-[#11141c] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-500/40 transition-colors"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Highlights */}
                {proj.highlights && proj.highlights.length > 0 && (
                  <div className="mb-5 space-y-1.5 pt-3 border-t border-white/5">
                    {proj.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="text-[11px] font-mono px-2 py-1 rounded bg-[#0a0b0f] border border-white/5 text-slate-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-medium">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
