"use client";

import { SectionDivider } from "@/components";
import { About, Contact, Education, Experience, Intro, Projects, Skills } from "./section";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
