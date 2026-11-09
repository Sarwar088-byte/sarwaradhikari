import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Code2, GraduationCap, Users, MapPin, Mail, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Second-Year B.Tech CSE &bull; Peer Mentor &bull; Nepal</span>
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

          {/* Profile Overview Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#11141c] border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                <div>
                  <h3 className="text-base font-bold text-white">Profile Overview</h3>
                  <p className="text-xs text-slate-400">Academic & Technical Focus</p>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 py-2 border-b border-white/5">
                  <GraduationCap className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-slate-400">Academics</div>
                    <div className="text-slate-100 font-medium">B.Tech Computer Science &amp; Engineering</div>
                    <div className="text-slate-400 text-[11px]">Second Year Undergraduate</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 border-b border-white/5">
                  <Users className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-slate-400">Leadership Role</div>
                    <div className="text-slate-100 font-medium">Academic Peer Mentor</div>
                    <div className="text-slate-400 text-[11px]">Guiding junior students in programming</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 border-b border-white/5">
                  <Code2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-slate-400">Core Technical Stack</div>
                    <div className="text-slate-100 font-medium">C++, Python, SQL, HTML/CSS</div>
                    <div className="text-slate-400 text-[11px]">Data Structures &amp; Relational DBMS</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-slate-400">Location</div>
                    <div className="text-slate-100 font-medium">Nepal</div>
                    <div className="text-slate-400 text-[11px]">Available for remote &amp; local opportunities</div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Contact:</span>
                <a
                  href="mailto:sarwar31111@gmail.com"
                  className="text-sky-400 hover:underline font-mono"
                >
                  sarwar31111@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
