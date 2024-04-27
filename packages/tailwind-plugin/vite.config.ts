import { resolve } from "node:path";
import { defineConfig, UserConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `main.${format}.js`,
    },
  },
}) satisfies UserConfig;
