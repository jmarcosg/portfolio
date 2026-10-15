"use client";

import { siteData } from "@/config";
import { SkillsList } from "./skills-list";

const productSkillsData = siteData.product;
const frontendSkillsData = siteData.frontend;
const backendSkillsData = siteData.backend;
const appliedAISkillsData = siteData.appliedAI;
const cloudToolsSkillsData = siteData.cloudTools;

export const Skills = () => {
	return (
		<section className="mx-auto w-full max-w-4xl">
			<h2 className="font-display text-center mb-4 text-2xl font-bold md:text-3xl">
				Skills
			</h2>
			<SkillsList
				title="Product & Engineering"
				skillsData={productSkillsData}
			/>
			<SkillsList title="Frontend" skillsData={frontendSkillsData} />
			<SkillsList title="Backend" skillsData={backendSkillsData} />
			<SkillsList
				title="Automation & Applied AI"
				skillsData={appliedAISkillsData}
			/>
			<SkillsList
				title="Integration & Operations"
				skillsData={cloudToolsSkillsData}
			/>
		</section>
	);
};
