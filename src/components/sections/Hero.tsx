import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, FolderGit2, Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Hero3DVisual } from "@/components/visual/Hero3DVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Profile Avatar & Status Pill */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-md shadow-sky-500/20 shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Sarwar Adhikari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Second-Year B.Tech CSE &bull; Peer Mentor &bull; Nepal</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Hi, I&apos;m Sarwar Adhikari.
            </h1>

            {/* Tagline / Mission */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-4 max-w-xl">
              Building solid foundations in software engineering, algorithms, and application development.
            </p>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl">
              I am a Computer Science & Engineering undergraduate passionate about C++, Python, and core computing principles. Through academic coursework, hands-on projects, and mentoring fellow engineering students, I strive to write clean, purposeful code that solves real problems.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <span>View Selected Projects</span>
                <FolderGit2 className="w-4 h-4" />
              </a>

              <a
                href="mailto:sarwar31111@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#141923] hover:bg-[#1a2130] text-slate-200 border border-white/10 text-xs tracking-wider uppercase font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#141923] hover:bg-[#1a2130] text-slate-300 border border-white/10 text-xs tracking-wider font-medium transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Interactive 3D Systems Visual (Right Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
