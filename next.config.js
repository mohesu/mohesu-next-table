module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // If not server-side, fix any module issues like fs or path.
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};
