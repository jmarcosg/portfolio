"use client";

import { Badge } from "@/components/ui";
import { motion } from "framer-motion";

type SkillStackProps = {
	title: string;
	skillsData: string[];
};

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export const SkillsList = ({ title, skillsData }: SkillStackProps) => {
	return (
		<motion.article
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			custom={"languages"}
		>
			<h4 className="text-xl uppercase font-medium my-6 text-center text-gray-700 dark:text-gray-300">
				{title}
			</h4>
			<motion.ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="select-none"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						<Badge key={index} color="primary" size="md" variant="filled">
							{skill}
						</Badge>
					</motion.li>
				))}
			</motion.ul>
		</motion.article>
	);
};
