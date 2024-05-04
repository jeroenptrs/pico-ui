import { resolve } from "node:path";
import { defineConfig, UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/main.ts"),
        resolve(__dirname, "src/config/colors.config.ts"),
        resolve(__dirname, "src/config/themes.config.ts"),
      ],
      formats: ["es", "cjs"],
      fileName: (format, name) => (format === "cjs" ? `${name}.cjs` : `${name}.js`),
    },
  },
}) satisfies UserConfig;
