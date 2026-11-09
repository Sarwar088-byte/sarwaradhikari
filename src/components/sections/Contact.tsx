"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            Whether you have an internship opportunity, a project idea, or just want to discuss computer science and engineering, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Coordinates (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#161a24] hover:bg-[#1e2433] text-xs font-medium text-slate-200 border border-white/5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">GitHub Profile</div>
                  <div className="text-sm font-bold text-white">Sarwar088-byte</div>
                </div>
              </div>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300"
              >
                <span>Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Location</div>
                <div className="text-sm font-bold text-white">Nepal</div>
                <div className="text-xs text-slate-400">Timezone: UTC+5:45 (Nepal Standard Time)</div>
              </div>
            </div>
          </div>

          {/* Contact Message Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11141c] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to send an email directly to {siteConfig.email}.
              </p>

              {submitted && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client has been opened with your inquiry prepared.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0a0b0f] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0a0b0f] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0a0b0f] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-sky-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
