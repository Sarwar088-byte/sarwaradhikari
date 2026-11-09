import React from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Intro />
      <About />
      <Expertise />
      <Projects />
      <Journey />
      <Languages />
      <Contact />
    </PageShell>
  );
}
