const { default: unplugin } = require("@beqa/unplugin-transform-react-slots");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: '**'
        },
        {
            protocol: 'https',
            hostname: '**'
        }]
    },
    webpack(config) {
        config.plugins.unshift(unplugin.webpack());
        return config;
    }
}

module.exports = nextConfig
