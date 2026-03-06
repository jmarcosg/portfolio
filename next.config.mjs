import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["lucide-react"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.github.com",
			},
		],
	},
	turbopack: {
		root: __dirname,
	},
};

export default nextConfig;
