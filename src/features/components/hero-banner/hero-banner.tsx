"use client";

import { Github, Linkedin } from "@/assets/icons";
import { NotationHighlight } from "@/components";
import { Button } from "@/components/ui";
import { useActiveSectionContext, useTheme } from "@/contexts";
import { useSectionInView } from "@/hooks";
import { MouseScrollAnimation } from "./mouse-scroll-animation";

export const HeroBanner = () => {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
	const { theme } = useTheme();

	return (
		<section
			ref={ref}
			id="home"
			className="relative flex min-h-[calc(100vh-64px)] items-center justify-center p-4"
		>
			<div className="pb-28 container">
				<h1 className="font-display mb-2 px-20 text-center text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
					<span>Hey there! I'm Juan Marcos Gonzalez.</span>
					<span className="text-primary"> Software Developer</span> oriented to{" "}
					<span>Front-end Development.</span>
				</h1>

				<h2 className="mb-8 text-center text-lg md:text-xl">
					I thrive on{" "}
					<NotationHighlight
						color={
							theme === "light"
								? "rgba(212, 212, 216, 0.6)"
								: "rgba(161, 161, 170, 0.6)"
						}
					>
						simple
					</NotationHighlight>
					, yet{" "}
					<NotationHighlight color={"rgba(244, 114, 182, 0.7)"}>
						beautiful
					</NotationHighlight>{" "}
					solutions
				</h2>

				<div className="flex justify-center space-x-2 sm:space-x-4">
					<Button
						size="lg"
						variant="default"
						onClick={() => {
							setActiveSection("Contact");
							setTimeOfLastClick(Date.now());
						}}
					>
						Get in touch
					</Button>
					<Button size="icon" variant="neutral" asChild>
						<a
							href="https://github.com/jmarcosg"
							target="_blank"
							rel="noreferrer"
							aria-label="Juan Marcos' GitHub profile"
						>
							<Github />
						</a>
					</Button>
					<Button size="icon" variant="neutral" asChild>
						<a
							href="https://www.linkedin.com/in/jmarcosg/"
							target="_blank"
							rel="noreferrer"
							aria-label="Juan Marcos' LinkedIn profile"
						>
							<Linkedin />
						</a>
					</Button>
				</div>
			</div>
			<div className="absolute bottom-5 left-1/2 translate-x-[-50%]">
				<MouseScrollAnimation />
			</div>
		</section>
	);
};
