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
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
