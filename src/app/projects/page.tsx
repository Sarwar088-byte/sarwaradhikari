import React from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Projects } from "@/components/sections/Projects";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Projects | Sarwar Adhikari",
  description: "Explore computer science, algorithms, and web projects built by Sarwar Adhikari.",
};

export default function ProjectsPage() {
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
      <Projects />
    </PageShell>
  );
}

