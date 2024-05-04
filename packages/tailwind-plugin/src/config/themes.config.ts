import { themesObject } from "@utils/themes.util";

export const azure = {
  textSelectionColor: themesObject("azure-400/25", "azure-350/[.1875]"),
  primary: themesObject("azure-550/100", "azure-350/100"),
  primaryBackground: themesObject("azure-550/100", "azure-550/100"),
  primaryUnderline: themesObject("azure-550/50", "azure-350/50"),
  primaryHover: themesObject("azure-650/100", "azure-250/100"),
  primaryHoverBackground: themesObject("azure-600/100", "azure-500/100"),
  primaryFocus: themesObject("azure-400/50", "azure-350/[.375]"),
  primaryInverse: themesObject("white", "white"),
  switchThumbBoxShadow: themesObject("0 0 0 rgba(0, 0, 0, 0)", "0 0 0 rgba(0, 0, 0, 0)"),
};

export default {
  backgroundColor: themesObject("white/100", "[#13171f]/100"), // mix(${colorsConfig.slate[950]}, ${colorsConfig.slate[900]})
  color: themesObject("zinc-750/100", "zinc-200/100"),
  ...azure, // Default Pico theme
};
