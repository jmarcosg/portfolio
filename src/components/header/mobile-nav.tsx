"use client";

import { Menu } from "@/assets/icons";
import React from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Nav } from "./nav";

const nav = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "Courses",
		href: "/courses",
	},
	{
		title: "Useful tools",
		href: "/tools",
	},
];

export const MobileNav = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="md:hidden">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon">
						<Menu />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-40 pt-12">
					<Nav direction="column" />
				</SheetContent>
			</Sheet>
		</div>
	);
};
