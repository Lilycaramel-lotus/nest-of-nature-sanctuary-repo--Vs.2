/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	experimental: {
		ppr: true,
	},
};

module.exports = nextConfig;
