"use client";

import { SectionHeading, SkillStack } from "@/components";
import { useSectionInView } from "@/hooks/useSectionInView";
import {
  codingLanguagesAndToolsData,
  databasesData,
  languagesData,
  librariesAndFrameworksData,
  otherToolsSkillsData
} from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      <SkillStack title={"LANGUAGES"} skillsData={languagesData} />
      <SkillStack title={"CODING LANGUAGES AND TOOLS"} skillsData={codingLanguagesAndToolsData} />
      <SkillStack title={"LIBRARIES AND FRAMEWORKS"} skillsData={librariesAndFrameworksData} />
      <SkillStack title={"DATABASES"} skillsData={databasesData} />
      <SkillStack title={"OTHER"} skillsData={otherToolsSkillsData} />
    </section>
  );
}
