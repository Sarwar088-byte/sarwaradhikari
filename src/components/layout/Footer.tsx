import React from "react";
import { siteConfig } from "@/data/site";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0b0f] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                SA
              </span>
              <span className="text-sm font-bold text-white">Sarwar Adhikari</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Second-Year Computer Science &amp; Engineering Student &bull; Peer Mentor &bull; Nepal
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Connect */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#11141c] hover:bg-[#161a24] text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 rounded-lg bg-[#11141c] hover:bg-[#161a24] text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>&copy; {new Date().getFullYear()} Sarwar Adhikari. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
