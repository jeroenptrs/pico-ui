import { PluginAPI } from "tailwindcss/types/config";

// TODO: https://tailwindcss.com/docs/dark-mode#using-multiple-selectors

export const helpers = {
  spacing({ theme }: PluginAPI) {
    return theme("spacing.4") as string;
  },
  transition(_: PluginAPI) {
    return "0.2s ease-in-out";
  },
};

export const theme = {
  backgroundColor: "bg-white dark:bg-[#13171f]", // mix(${colorsConfig.slate[950]}, ${colorsConfig.slate[900]})
  color: "text-zinc-750 dark:text-zinc-200",
};

// TODO: how to type this?
const vars = {
  helpers,
  theme,
  fontFamily: "font-sans",
  lineHeight: "leading-6",
  fontWeight: "font-normal",
  fontSize: "text-full",
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
