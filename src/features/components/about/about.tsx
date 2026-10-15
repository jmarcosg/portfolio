"use client";

import { NotationHighlight, NotationUnderline } from "@/components";
import { useActiveSectionContext } from "@/contexts";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
	const { ref } = useSectionInView("About", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
	const { resolvedTheme: theme } = useTheme();

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
				src="/jmarcosg-avatar.jpg"
				height={300}
				width={200}
				alt="A portrait photograph of Juan Marcos looking over his shoulder"
				loading="lazy"
				className="aspect-[auto 200 / 300] my-6 rounded-full object-cover"
			/>

			<div>
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
					I'm a Software Engineer and Product Builder. Over six years, I've
					worked in public services, education and B2B/B2C e-commerce:
					different contexts where I combined an understanding of needs with
					technical execution.
				</p>

				<p className="text-md mb-4 lg:text-lg">
					My approach starts with learning the domain, listening to the people
					who use or operate the solution and clarifying constraints. From
					there, I define requirements, design workflows, implement, validate
					and iterate, using PRDs, user stories, flow diagrams and wireframes
					to turn ambiguity into concrete decisions.
				</p>

				<p className="text-md mb-4 lg:text-lg">
					Today I work as a Frontend Software Developer at Minimalart, building
					with React, Next.js and TypeScript and integrating backends, APIs and
					services. I also apply AI and automation to operational needs:
					conversational assistants, catalog automation and WhatsApp flows. I'm
					a Teaching Assistant at Universidad Nacional del Comahue, where I'm
					also pursuing a Licenciatura in Computer Science.
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
