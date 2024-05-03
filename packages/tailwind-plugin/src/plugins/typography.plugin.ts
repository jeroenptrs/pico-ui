import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import type { SafeGetOption } from "@utils/safeGetOptions.util";
import { getMinWidthMediaQueries } from "@utils/getMinWidthMediaQueries.util";

// TODO: reuse this for content/typography

export function typographyPlugin(api: PluginAPI, safeGetOption: SafeGetOption) {
  // Responsive root font size
  if (safeGetOption("responsiveTypography")) {
    const mediaQueries = getMinWidthMediaQueries(api.theme);
    for (const [name, mq] of mediaQueries) {
      const rootFontSize = api.theme("rootFontSize")?.[name];
      if (!!rootFontSize)
        api.addBase({
          [mq]: {
            "html, :host": {
              "font-size": rootFontSize,
            },
          },
        });
    }
  }
}

export function typographyConfig(safeGetOption: SafeGetOption): Partial<Config> {
  return {
    ...(safeGetOption("responsiveTypography")
      ? {
          theme: {
            rootFontSize: {
              sm: "106.25%",
              md: "112.5%",
              lg: "118.75%",
              xl: "125%",
              "2xl": "131.25%",
            },
          },
        }
      : {}),
  };
}
