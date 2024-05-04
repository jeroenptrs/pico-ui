import { themesObject } from "@utils/themes.util";

export const azure = {
  primary: themesObject("azure-350", "azure-550"),
};

export default {
  backgroundColor: themesObject("white/100", "[#13171f]/100"), // mix(${colorsConfig.slate[950]}, ${colorsConfig.slate[900]})
  color: themesObject("zinc-750/100", "zinc-200/100"),
  ...azure, // Default Pico theme
};
