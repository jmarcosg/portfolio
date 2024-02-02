"use client";

import { Button } from "@/components/ui";
import { siteData } from "@/config";
import React from "react";
import { EducationList } from "./education-list";

export const Education = () => {
	const [collapsed, setCollapsed] = React.useState(true);

	const educationData = siteData.education;
	const displayedEducations = collapsed
		? educationData.slice(0, 2)
		: educationData;

	const handleClick = () => {
		setCollapsed((prevState) => !prevState);
	};

	return (
		<div>
			<h2 className="font-display mb-4 text-2xl font-bold md:text-3xl">
				Education
			</h2>
			<EducationList educations={displayedEducations} />
			{educationData.length > 2 && (
				<Button size="lg" onClick={handleClick} className="mx-auto mt-6 block">
					{collapsed ? "Show all education" : "Show less"}
				</Button>
			)}
		</div>
	);
};
