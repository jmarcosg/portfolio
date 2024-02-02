"use client";

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
			<h4 className="text-xl uppercase font-medium my-8 text-center text-gray-700 dark:text-gray-300">
				{title}
			</h4>
			<motion.ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-5 py-3 !text-base select-none dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</motion.ul>
		</motion.article>
	);
};
