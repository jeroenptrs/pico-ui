import { themesObject } from "@utils/themes.util";

export const azure = {
  primary: themesObject("azure-350", "azure-550"),
};

export default {
  backgroundColor: themesObject("white", "[#13171f]"), // mix(${colorsConfig.slate[950]}, ${colorsConfig.slate[900]})
  color: themesObject("zinc-750", "zinc-200"),
  ...azure, // Default Pico theme
};
