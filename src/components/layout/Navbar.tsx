"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "py-3.5 bg-[#0a0b0f]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="/#home"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Sarwar Adhikari - Home"
        >
          <img
            src="/profile.jpg"
            alt="Sarwar Adhikari"
            className="w-8 h-8 rounded-full object-cover border border-sky-400/40 shadow-sm shadow-sky-500/20"
          />
          <div className="flex items-center text-sm font-semibold tracking-tight text-slate-100">
            <span>Sarwar Adhikari</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#11141c]/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Direct Connect CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:sarwar31111@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 bg-sky-400 hover:bg-sky-300 px-4 py-2 rounded-full transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-[#11141c]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0a0b0f] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-sky-400 py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:sarwar31111@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 px-5 py-3 rounded-xl mt-2"
          >
            <span>sarwar31111@gmail.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
