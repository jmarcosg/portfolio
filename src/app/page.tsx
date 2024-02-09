import { AnimatedGradient } from "@/components";
import {
	About,
	Contact,
	Education,
	HeroBanner,
	Skills,
	WorkExperience,
} from "@/features";

export default function Home() {
	return (
		<>
			<svg
				className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
				width="100%"
				height="100%"
			>
				<filter id="grainynoise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"
					/>
				</filter>
				<rect width="100%" height="100%" filter="url(#grainynoise)" />
			</svg>

			<div className="bg-[#fbe2e3] absolute top-[-20rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
			<div className="bg-[#dbd7fb] absolute top-[-15rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
			<AnimatedGradient />
			<HeroBanner />
			<div className="container flex flex-col space-y-24">
				<About />
				<Skills />
				<WorkExperience />
				<Education />
				<Contact />
			</div>
		</>
	);
}
