import React from "react";
import { PageShell } from "@/components/layout/PageShell";
import { About } from "@/components/sections/About";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About | Sarwar Adhikari",
  description: "Learn more about Sarwar Adhikari, Third-Year B.Tech CSE student based in Kshireshwarnath-1, Dhanusha, Janakpurdham, Nepal.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="pt-28 pb-8 max-w-6xl mx-auto px-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </a>
      </div>
      <About />
    </PageShell>
  );
}

