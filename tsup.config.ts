import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // Specify your main entry point
    format: ['esm', 'cjs'],  // Output formats (ESM and CommonJS)
    dts: true,               // Generate type definitions (.d.ts)
    clean: true,             // Clean dist/ before each build
    external: ['react', 'react-dom'], // Mark react and react-dom as external
    sourcemap: true,         // Generate sourcemaps
    minify: true,            // Minify the output (optional)
});
