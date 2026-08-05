"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const Contact = dynamic(() => import("./contact").then((mod) => mod.Contact), {
	ssr: false,
	loading: () => <ContactSkeleton />,
});

const ContactSkeleton = () => (
	<div className="mb-20 sm:mb-28 w-[min(100%,38rem)] flex flex-col space-y-6 mx-auto animate-pulse">
		<div className="h-8 w-48 mx-auto rounded bg-muted" />
		<div className="h-4 w-64 mx-auto rounded bg-muted" />
		<div className="h-4 w-40 mx-auto rounded bg-muted" />
		<div className="grid gap-2 py-4">
			<div className="h-10 rounded bg-muted" />
			<div className="h-52 rounded bg-muted" />
			<div className="h-10 rounded bg-muted" />
		</div>
	</div>
);

export const LazyContact = () => {
	const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px 0px" });

	return <div ref={ref}>{inView ? <Contact /> : <ContactSkeleton />}</div>;
};
