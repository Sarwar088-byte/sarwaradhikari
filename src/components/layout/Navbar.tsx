"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Active section calculation based on scroll offset
      const sections = siteConfig.navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#67E3F5] via-[#9582FF] to-[#67E3F5] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#07090D]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Identity Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#67E3F5] rounded-sm py-1"
            aria-label="Sarwar Adhikari - Home"
          >
            <span className="font-mono text-xs text-[#67E3F5] tracking-widest font-semibold px-1.5 py-0.5 rounded bg-[rgba(103,227,245,0.1)] border border-[rgba(103,227,245,0.25)]">
              SA
            </span>
            <div className="flex items-center text-sm tracking-wider font-mono">
              <span className="font-bold text-[#F4F6FA] group-hover:text-white transition-colors">
                SARWAR
              </span>
              <span className="text-[#67E3F5] mx-1.5 opacity-60">/</span>
              <span className="font-light text-[#A4ADBA] group-hover:text-[#F4F6FA] transition-colors">
                ADHIKARI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D1118]/60 p-1.5 rounded-full border border-[rgba(255,255,255,0.07)] backdrop-blur-sm">
            {siteConfig.navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#67E3F5] ${
                    isActive
                      ? "text-[#67E3F5] font-medium"
                      : "text-[#A4ADBA] hover:text-[#F4F6FA]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[rgba(103,227,245,0.1)] border border-[rgba(103,227,245,0.3)] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action / Contact quick trigger */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#07090D] bg-[#67E3F5] hover:bg-[#88e8f8] px-4 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(103,227,245,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67E3F5]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F4F6FA] hover:text-[#67E3F5] rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0D1118]/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#67E3F5]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#07090D]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-10 px-8"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#707C8C]">
                {"// Navigation Index"}
              </span>
              <nav className="flex flex-col space-y-4">
                {siteConfig.navItems.map((item, index) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className={`text-2xl font-mono tracking-tight flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.06)] ${
                        isActive ? "text-[#67E3F5] font-semibold" : "text-[#A4ADBA] hover:text-[#F4F6FA]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono text-[#707C8C]">0{index + 1}</span>
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-3">
              <div className="text-xs font-mono text-[#707C8C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#67E3F5] animate-ping" />
                <span>Available for collaborations</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-[#67E3F5] text-[#07090D] font-mono font-medium text-sm hover:bg-[#88e8f8] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
