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
		<main>
			<AnimatedGradient />
			<HeroBanner />
			<div className="container flex flex-col space-y-24">
				<About />
				<Skills />
				<WorkExperience />
				<Education />
				<Contact />
				{/* <About />
					<Section id="experience" title="Experience">
						<WorkExperience />
					</Section>
					<Section id="education" title="Education">
						<Education />
					</Section>
					<Section id="projects" title="Some featured projects">
						<Projects />
					</Section>
					{posts && (
						<Section id="latest-posts" title="Latest posts">
							<PostsList posts={posts.slice(0, 3)} />
							<div className="text-center">
								<Button size="lg" asChild className="mx-auto mt-6">
									<Link href="/blog">See all blog posts</Link>
								</Button>
							</div>
						</Section>
					)} */}
			</div>
			<div
				id="contact"
				className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20"
			>
				{/* <GetInTouch /> */}
			</div>
		</main>
	);
}
