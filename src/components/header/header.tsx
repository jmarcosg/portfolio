import Logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Background } from "./background";
import { MobileNav } from "./mobile-nav";
import { Nav } from "./nav";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
	return (
		<header className={cn("sticky top-0 z-40 w-full")}>
			<div className="relative">
				<div className="container flex h-16 items-center px-4 sm:px-8">
					<Link
						href="/"
						className="mr-8 flex items-center space-x-2 transition-all hover:opacity-80"
					>
						{Logo && (
							<Image
								src={Logo}
								alt={"logo"}
								loading="lazy"
								width={30}
								height={30}
								className="aspect-[auto 30 / 30] object-cover"
							/>
						)}
						<span className="inline-block font-bold select-none">jmarcosg</span>
					</Link>
					<div className="hidden flex-1 md:flex">
						<div className="flex-1">
							<Nav />
						</div>
						<div className="flex space-x-2">
							<ThemeToggle />
						</div>
					</div>
					<div className="flex flex-1 md:hidden ">
						<div className="flex-1" />
						<ThemeToggle />
						<MobileNav />
					</div>
				</div>
				{/* background */}
				<Suspense fallback={null}>
					<Background />
				</Suspense>
			</div>
		</header>
	);
};

export default Header;
