import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, FolderGit2, Mail, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

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
            {/* Status Pill */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Third-Year B.Tech CSE &bull; Nepal</span>
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
              I am a Computer Science &amp; Engineering undergraduate passionate about C++, Python, and core computing principles. Through academic coursework, hands-on projects, and mentoring fellow engineering students, I strive to write clean, purposeful code that solves real problems.
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

          {/* Profile Photo Card (Right Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl pointer-events-none" />

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#11141c]">
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Sarwar Adhikari"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#11141c] to-transparent" />
                </div>

                {/* Info strip */}
                <div className="px-5 py-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">Sarwar Adhikari</p>
                      <p className="text-sky-400 text-xs font-mono mt-0.5">sarwar.dev</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3 text-sky-400" /> B.Tech CSE · Y3</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-sky-400" /> Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
