"use client";

import dynamic from "next/dynamic";

export const LazyToaster = dynamic(
	() => import("@/components/ui/sonner").then((mod) => mod.Toaster),
	{ ssr: false },
);
