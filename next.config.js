/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "czhangyio.s3.us-east-2.amazonaws.com",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
