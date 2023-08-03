"use client";

import { SectionDivider } from "@/components";
import About from "./section/About";
import Experience from "./section/Experience";
import Intro from "./section/Intro";
import Projects from "./section/Projects";
import Skills from "./section/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
