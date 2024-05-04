import { Config } from "tailwindcss";

import colors from "@config/colors.config";
import vars from "@config/vars.config";

export const config = {
  // TODO: tailwind does not have media + selector for dark mode, how to solve this?
  theme: {
    colors,
    vars,
    extend: {
      fontFamily: {
        emoji: ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      fontSize: {
        full: "100%",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(0, 1fr))",
      },
      textUnderlineOffset: {
        "0-1": ".1rem",
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
