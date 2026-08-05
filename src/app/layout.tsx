import { Footer, Header, ThemeProvider } from "@/components";
import { LazyToaster as Toaster } from "@/components/lazy-toaster";
import ActiveSectionContextProvider from "@/contexts/active-section-context";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
	title: "Juan Marcos Gonzalez | Portfolio",
	authors: {
		name: "Juan Marcos Gonzalez",
	},
	description:
		"Juan Marcos is a Fullstack Software Developer oriented to the Frontend Development.",
	keywords: [
		"Frontend",
		"Developer",
		"React",
		"Next.js",
		"Angular",
		"TailwindCSS",
		"TypeScript",
		"Laravel",
		"PHP",
	],
};

const display = localFont({
	src: "../assets/fonts/Acorn-Bold.woff2",
	variable: "--font-display",
	display: "swap",
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={`!scroll-smooth ${display.variable}`}
			suppressHydrationWarning
		>
			<body>
				<Analytics />
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<ActiveSectionContextProvider>
						<Header />
						<main className="min-h-[calc(100dvh-64px)]">{children}</main>
						<Footer />

						<Toaster richColors />
					</ActiveSectionContextProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
