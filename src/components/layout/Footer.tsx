"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUp, Mail, Globe, Compass } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Determine active socials from siteConfig
  const socials = [
    { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
    { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
    { label: "Twitter", href: siteConfig.twitter, icon: TwitterIcon },
    { label: "Email", href: siteConfig.email ? `mailto:${siteConfig.email}` : "", icon: Mail },
  ].filter((item) => Boolean(item.href && item.href.trim().length > 0));

  return (
    <footer className="relative bg-[#07090D] border-t border-[rgba(255,255,255,0.08)] pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[radial-gradient(ellipse_at_bottom,rgba(103,227,245,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(255,255,255,0.06)]">
          {/* Col 1: Identity & Statement */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[#67E3F5] tracking-widest font-semibold px-2 py-0.5 rounded bg-[rgba(103,227,245,0.1)] border border-[rgba(103,227,245,0.25)]">
                  SA // 2026
                </span>
                <span className="font-mono text-xs text-[#707C8C] uppercase tracking-wider">
                  Personal Technology Brand
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#F4F6FA] mb-3 font-mono">
                SARWAR ADHIKARI
              </h3>
              <p className="text-sm text-[#A4ADBA] leading-relaxed max-w-sm mb-6">
                Computer Science & Engineering student passionate about programming foundations, application software, and the intersection of ideas and code.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#707C8C]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#67E3F5]" />
              <span>Location: {siteConfig.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Index */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#707C8C] mb-6 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#67E3F5]" />
              <span>Navigation Map</span>
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {siteConfig.navItems.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-mono text-[#A4ADBA] hover:text-[#67E3F5] transition-colors flex items-center gap-2 group py-1"
                  >
                    <span className="text-[10px] text-[#707C8C] group-hover:text-[#67E3F5] transition-colors">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Channel / Profiles */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#707C8C] mb-6 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#9582FF]" />
                <span>Connection Hub</span>
              </h4>

              {socials.length > 0 ? (
                <div className="flex flex-col space-y-3">
                  {socials.map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={soc.label}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm font-mono text-[#A4ADBA] hover:text-[#67E3F5] transition-colors py-1 group"
                      >
                        <Icon className="w-4 h-4 text-[#707C8C] group-hover:text-[#67E3F5] transition-colors" />
                        <span>{soc.label}</span>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-[#0D1118] border border-[rgba(255,255,255,0.06)] text-xs text-[#707C8C] leading-relaxed font-mono">
                  Channels being established. Direct inquiries can be initiated through the contact interface below.
                </div>
              )}
            </div>

            <div className="mt-8 md:mt-0">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-xs font-mono text-[#A4ADBA] hover:text-[#67E3F5] transition-colors py-2 px-3 rounded border border-[rgba(255,255,255,0.08)] hover:border-[rgba(103,227,245,0.3)] bg-[#0D1118]/80"
                aria-label="Return to top of page"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#707C8C]">
          <div>
            &copy; {currentYear} {siteConfig.name}. All digital rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#67E3F5]/80">Second-Year B.Tech CSE</span>
            <span>&bull;</span>
            <span>Peer Mentor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
