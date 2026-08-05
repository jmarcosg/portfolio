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
			<div
				className="pointer-events-none fixed inset-0 z-50 opacity-70 mix-blend-soft-light"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E\")",
				}}
			/>

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
