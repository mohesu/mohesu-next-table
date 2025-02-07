import type { NextConfig } from "next";

/**
 * A Next.js config enhancer that can optionally modify the Webpack configuration.
 *
 * @param nextConfig - The base Next.js config.
 * @param pluginOptions - Any plugin-specific options.
 * @returns An enhanced Next.js config.
 */
const withNextTable = (
    nextConfig: NextConfig = {},
    pluginOptions: Record<string, any> = {}
): NextConfig => {
    return {
        ...nextConfig,
        webpack(config, options) {
            // Example: You might add custom aliases, fallbacks, or loaders here.
            config.resolve.alias = {
              ...config.resolve.alias,
              '@extended-table': require('path').resolve(__dirname, 'src/components/table'),
            };

            // Always call the user’s existing webpack function if provided.
            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options);
            }
            return config;
        },
    };
};

export default withNextTable;
