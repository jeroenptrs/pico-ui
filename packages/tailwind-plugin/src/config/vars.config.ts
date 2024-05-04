import { PluginAPI } from "tailwindcss/types/config";

import theme from "@config/themes.config";

export const helpers = {
  spacing({ theme }: PluginAPI) {
    return theme("spacing.4") as string;
  },
  transition(_: PluginAPI) {
    return "0.2s ease-in-out";
  },
};

// TODO: how to type this?
const vars = {
  helpers,
  theme,
  fontFamily: "font-sans",
  lineHeight: "leading-6",
  fontWeight: "font-normal",
  fontSize: { fontSize: "100%" },
  textUnderlineOffset: "underline-offset-0-1",
  borderRadius: "rounded",
  borderWidth: {
    "border-width": "0.0625rem",
  },
  outlineWidth: {
    "outline-width": "0.125rem",
  },
  gap: "gap-4",
};

export default vars;
