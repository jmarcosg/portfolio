"use client";

import { siteData } from "@/config";
import { SkillsList } from "./skills-list";

const softSkillsData = siteData.softSkills;
const frontendSkillsData = siteData.frontend;
const backendSkillsData = siteData.backend;
const mobileSkillsData = siteData.mobile;

export const Skills = () => {
	return (
		<section className="mx-auto w-full max-w-4xl">
			<h2 className="font-display text-center mb-4 text-2xl font-bold md:text-3xl">
				Skills
			</h2>
			<SkillsList title="Soft Skills" skillsData={softSkillsData} />
			<SkillsList title="Frontend" skillsData={frontendSkillsData} />
			<SkillsList title="Backend" skillsData={backendSkillsData} />
			<SkillsList title="Mobile" skillsData={mobileSkillsData} />
		</section>
	);
};
