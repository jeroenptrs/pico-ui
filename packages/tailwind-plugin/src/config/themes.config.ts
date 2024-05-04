import { mix } from "@utils/mix.util";
import { themesObject } from "@utils/themes.util";
import colorsConfig from "./colors.config";

export const azure = {
  textSelectionColor: themesObject("azure-400/25", "azure-350/[.1875]"),
  primary: themesObject("azure-550/100", "azure-350/100"),
  primaryBackground: themesObject("azure-550/100", "azure-550/100"),
  primaryUnderline: themesObject("azure-550/50", "azure-350/50"),
  primaryHover: themesObject("azure-650/100", "azure-250/100"),
  primaryHoverBackground: themesObject("azure-600/100", "azure-500/100"),
  primaryFocus: themesObject("azure-400/50", "azure-350/[.375]"),
  primaryInverse: themesObject("white/100", "white/100"),
  switchThumbBoxShadow: themesObject("0 0 0 rgba(0, 0, 0, 0)", "0 0 0 rgba(0, 0, 0, 0)"),
};

export default {
  backgroundColor: themesObject(
    "white/100",
    `[${mix(colorsConfig.slate[950], colorsConfig.slate[900])}]/100`,
  ),
  color: themesObject("zinc-750/100", "zinc-200/100"),
  mutedColor: themesObject("zinc-550/100", "zinc-450/100"),
  mutedBorderColor: themesObject(
    `[${mix(colorsConfig.slate[100], colorsConfig.slate[50])}]/100`,
    "slate-850/100",
  ),
  ...azure, // Default Pico theme

  // Secondary
  secondary: themesObject("slate-550/100", "zinc-350/100"),
  secondaryBackground: themesObject("slate-600/100", "slate-600/100"),
  secondaryUnderline: themesObject("slate-550/50", "zinc-350/50"),
  secondaryHover: themesObject("slate-650/100", "zinc-250/100"),
  secondaryHoverBackground: themesObject("slate-650/100", "slate-550/100"),
  secondaryFocus: themesObject("slate-550/25", "slate-350/25"),
  secondaryInverse: themesObject("white/100", "white/100"),

  // Contrast
  contrast: themesObject("slate-900/100", "slate-100/100"),
  contrastBackground: themesObject("slate-900/100", "slate-50/100"),
  contrastUnderline: themesObject("slate-900/50", "slate-100/50"),
  contrastHover: themesObject("black/100", "white/100"),
  contrastHoverBackground: themesObject("black/100", "white/100"),
  contrastFocus: themesObject("slate-550/25", "slate-150/25"),
  contrastInverse: themesObject("white/100", "black/100"),

  boxShadow: themesObject(
    "shadow-lg shadow-slate-400/100",
    `shadow-lg shadow-[${mix(colorsConfig.black, colorsConfig.slate[950])}]/100`,
  ),

  // TODO: content/typography

  // TODO: the rest
};
