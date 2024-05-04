import { PluginAPI } from "tailwindcss/types/config";

import theme from "@config/themes.config";

export const helpers = {
  spacing({ theme }: PluginAPI) {
    return theme("spacing.4") as string;
  },
  borderWidth({ theme }: PluginAPI) {
    return theme("spacing.0.25") as string;
  },
  outlineWidth({ theme }: PluginAPI) {
    return theme("spacing.0.5") as string;
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
  fontSize: "fontsize-full",
  textUnderlineOffset: "underline-offset-0-1",
  borderRadius: "rounded",
  gap: "gap-4",
};

export default vars;
