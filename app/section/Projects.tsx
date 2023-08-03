import { Project, SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks/useSectionInView";
import { projectsData } from "@/lib/data";
import React from "react";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Featured Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
