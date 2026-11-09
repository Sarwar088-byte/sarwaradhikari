"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [nepalTime, setNepalTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "info" | "error"; text: string } | null>(null);

  // Live Nepal Time (UTC+5:45)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kathmandu",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        setNepalTime(formatter.format(now));
      } catch {
        setNepalTime("UTC+5:45");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    if (siteConfig.email) {
      navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: "error", text: "Please populate all fields before sending." });
      return;
    }

    if (siteConfig.email) {
      // Trigger native email client with pre-filled message
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatusMessage({
        type: "success",
        text: "Initiated mail client with your inquiry payload.",
      });
    } else {
      // Informative honest state
      setStatusMessage({
        type: "info",
        text: "Direct email address is currently being configured in src/data/site.ts.",
      });
    }
  };

  const hasConfiguredEmail = Boolean(siteConfig.email && siteConfig.email.trim().length > 0);
  const hasConfiguredGithub = Boolean(siteConfig.github && siteConfig.github.trim().length > 0);
  const hasConfiguredLinkedin = Boolean(siteConfig.linkedin && siteConfig.linkedin.trim().length > 0);

  return (
    <section id="contact" className="py-28 relative border-t border-[rgba(255,255,255,0.06)]">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(103,227,245,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          number="07"
          title="LET'S CONNECT"
          description="Have an interesting idea, collaboration, or opportunity? Let's start a conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F4F6FA] mb-4">
                Let&apos;s build what&apos;s next together.
              </h3>
              <p className="text-sm sm:text-base text-[#A4ADBA] leading-relaxed font-light">
                Whether you want to discuss algorithmic challenges, explore technology concepts, share mentorship perspectives, or collaborate on software experiments, I am always open to thoughtful discussions.
              </p>
            </div>

            {/* Live Nepal Timezone Card */}
            <div className="p-5 rounded-xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#131923] text-[#67E3F5]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#707C8C]">TIMEZONE // NEPAL (NPT)</div>
                  <div className="text-sm font-bold font-mono text-[#F4F6FA]">
                    {nepalTime ? `${nepalTime} NPT` : "Fetching..."}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#67E3F5] animate-pulse" />
                <span className="text-xs font-mono text-[#67E3F5]">ACTIVE</span>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#707C8C]">
                  DIRECT EMAIL DISPATCH
                </span>
                <Mail className="w-4 h-4 text-[#67E3F5]" />
              </div>

              {hasConfiguredEmail ? (
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-mono text-sm text-[#F4F6FA] hover:text-[#67E3F5] transition-colors truncate"
                  >
                    {siteConfig.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-[#131923] text-[#A4ADBA] hover:text-[#67E3F5] border border-[rgba(255,255,255,0.06)] transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#67E3F5]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <div className="text-xs font-mono text-[#707C8C] leading-relaxed">
                  Email routing configured in <code className="text-[#67E3F5]">src/data/site.ts</code>. Direct inquiries welcome via the inquiry form.
                </div>
              )}
            </div>

            {/* Verified Network Links */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#707C8C] block">
                VERIFIED NETWORKS
              </span>

              <div className="flex flex-col gap-2">
                {hasConfiguredGithub ? (
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#0D1118] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(103,227,245,0.3)] transition-all font-mono text-xs text-[#A4ADBA] hover:text-[#67E3F5]"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub // Source Repositories</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="p-3.5 rounded-lg bg-[#0D1118]/50 border border-[rgba(255,255,255,0.05)] font-mono text-xs text-[#707C8C] flex items-center justify-between">
                    <span>GitHub Channel</span>
                    <span className="text-[10px] uppercase">Ready to Link</span>
                  </div>
                )}

                {hasConfiguredLinkedin ? (
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#0D1118] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(103,227,245,0.3)] transition-all font-mono text-xs text-[#A4ADBA] hover:text-[#67E3F5]"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn // Professional Network</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="p-3.5 rounded-lg bg-[#0D1118]/50 border border-[rgba(255,255,255,0.05)] font-mono text-xs text-[#707C8C] flex items-center justify-between">
                    <span>LinkedIn Profile</span>
                    <span className="text-[10px] uppercase">Ready to Link</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Transmission Interface */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#67E3F5]" />
                  <span className="font-mono text-xs text-[#F4F6FA] font-medium tracking-wider">
                    TRANSMISSION PROTOCOL
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#707C8C]">ENCRYPTED // CLIENT</span>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-[#A4ADBA] mb-2"
                >
                  IDENTIFIER // YOUR NAME *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#07090D] border border-[rgba(255,255,255,0.08)] text-[#F4F6FA] placeholder-[#707C8C] text-sm font-mono focus:outline-none focus:border-[#67E3F5] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs text-[#A4ADBA] mb-2"
                >
                  DISPATCH CHANNEL // YOUR EMAIL *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#07090D] border border-[rgba(255,255,255,0.08)] text-[#F4F6FA] placeholder-[#707C8C] text-sm font-mono focus:outline-none focus:border-[#67E3F5] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs text-[#A4ADBA] mb-2"
                >
                  PAYLOAD // MESSAGE OR INQUIRY *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Detail your inquiry, project concept, or mentorship dialogue..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#07090D] border border-[rgba(255,255,255,0.08)] text-[#F4F6FA] placeholder-[#707C8C] text-sm font-mono focus:outline-none focus:border-[#67E3F5] transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`p-3 rounded-lg font-mono text-xs flex items-center gap-2 ${
                    statusMessage.type === "success"
                      ? "bg-[#67E3F5]/10 text-[#67E3F5] border border-[#67E3F5]/30"
                      : statusMessage.type === "error"
                      ? "bg-red-500/10 text-red-400 border border-red-500/30"
                      : "bg-[#9582FF]/10 text-[#9582FF] border border-[#9582FF]/30"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#67E3F5] text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 hover:bg-[#88e8f8] hover:shadow-[0_0_20px_rgba(103,227,245,0.35)] cursor-pointer"
              >
                <span>Transmit Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
