import { Config } from "tailwindcss";

import colors from "./colors";

export const config = {
  theme: {
    colors,
    extend: {
      textUnderlineOffset: {
        "0-1": ".1rem",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(0, 1fr))",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
} as Partial<Config>;
