"use client";

import { Button } from "@/components/ui";
import { siteData } from "@/config";
import { useSectionInView } from "@/hooks";
import React from "react";
import { WorkExperienceList } from "./work-experience-list";

const workExperienceData = siteData.experience;

export const WorkExperience = () => {
	const { ref } = useSectionInView("Experience", 0.5);
	const [collapsed, setCollapsed] = React.useState(true);

	const displayedExperience = collapsed
		? workExperienceData.slice(0, 2)
		: workExperienceData;

	const handleClick = () => {
		setCollapsed((prevState) => !prevState);
	};

	return (
		<section ref={ref} id="experience" className="mx-auto w-full max-w-4xl">
			<h2 className="font-display mb-4 text-2xl font-bold md:text-3xl">
				Work Experience
			</h2>
			<WorkExperienceList experiences={displayedExperience} />
			{workExperienceData.length > 2 && (
				<Button size="lg" onClick={handleClick} className="mx-auto mt-6 block">
					{collapsed ? "Show all experiences" : "Show less"}
				</Button>
			)}
		</section>
	);
};
