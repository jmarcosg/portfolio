"use client";

import jmarcosg from "@/assets/images/jmarcosg.webp";
import { NotationHighlight, NotationUnderline } from "@/components";
import { useActiveSectionContext, useTheme } from "@/contexts";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
	const { ref } = useSectionInView("About", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
	const { theme } = useTheme();

	return (
		<motion.section
			ref={ref}
			className="flex flex-col items-center space-y-8 md:flex-row md:space-x-12"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<Image
				src={jmarcosg}
				height={300}
				width={200}
				alt="A portrait photograph of Juan Marcos looking over his shoulder"
				loading="lazy"
				className="aspect-[auto 200 / 300] my-6 rounded-full object-cover"
			/>

			<div className="border-1 border-solid border-red-500">
				<h2 className="font-display mb-4 text-2xl font-bold md:text-3xl">
					About me
				</h2>

				<p className="text-md mb-4 lg:text-lg">
					📍 Currently based in:{" "}
					<span>
						<NotationUnderline color="#61b2e4" iterations={3}>
							Argentina 🇦🇷
						</NotationUnderline>
					</span>
				</p>

				<p className="text-md mb-4 lg:text-lg">
					Graduated from Universidad Nacional del Comahue (Neuquén, Argentina
					🇦🇷) with a degree in Software Development.
				</p>

				<p className="text-md mb-4 lg:text-lg">
					Through my experiences, I had the opportunity to work with both small
					and large specialized and cross-functional teams, which allowed me to
					develop a working style that leans towards{" "}
					<NotationHighlight
						color={
							theme === "light"
								? "rgba(34, 211, 238, 0.6)"
								: "rgba(8, 145, 178, 0.6)"
						}
					>
						clarity
					</NotationHighlight>
					,{" "}
					<NotationHighlight
						color={
							theme === "light"
								? "rgba(74, 222, 128, 0.6)"
								: "rgba(22, 163, 74, 0.6)"
						}
					>
						collaboration
					</NotationHighlight>{" "}
					and{" "}
					<NotationHighlight
						color={
							theme === "light"
								? "rgba(253, 224, 71, 0.6)"
								: "rgba(202, 138, 4, 0.6)"
						}
					>
						flexibility
					</NotationHighlight>
					.
				</p>

				<p className="text-md mb-0 lg:text-lg">
					I'm always open to new challenges and opportunities, so if you think I
					could be a good fit for your team, don't hesitate to{" "}
					<Link
						href="#contact"
						onClick={() => {
							setActiveSection("Contact");
							setTimeOfLastClick(Date.now());
						}}
					>
						<span className="font-semibold">contact me!</span>
					</Link>
				</p>
			</div>
		</motion.section>
	);
};
