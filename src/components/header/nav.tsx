"use client";

import { useActiveSectionContext } from "@/contexts/active-section-context";
import { links } from "@/lib/links";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface INav {
	direction?: "column" | "row";
	onNavItemClick?: () => void;
}

export const Nav = (props: INav) => {
	const { direction = "row", onNavItemClick } = props;
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<nav
			className={cn("flex space-x-0 md:space-x-2", {
				"flex-col items-stretch": direction === "column",
			})}
		>
			{links?.map(
				(link) =>
					link.hash && (
						<Link
							key={link.hash}
							href={link.hash}
							className={cn(
								"hover:text-foreground flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-all",
								link.name === activeSection
									? "bg-foreground/10 text-foreground"
									: "text-foreground/60",
							)}
							onClick={() => {
								onNavItemClick?.();
								setActiveSection(link.name);
								setTimeOfLastClick(Date.now());
							}}
						>
							{link.name}
						</Link>
					),
			)}
		</nav>
	);
};
