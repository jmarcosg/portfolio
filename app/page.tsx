import { SectionDivider } from "@/components";
import About from "./section/About";
import Intro from "./section/Intro";
import Projects from "./section/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
