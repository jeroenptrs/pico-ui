import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import type { SafeGetOption } from "@utils/safeGetOptions.util";
import { getMinWidthMediaQueries } from "@utils/getMinWidthMediaQueries.util";
import { apply } from "@utils/apply.util";

// TODO: reuse this for content/typography

export function typographyPlugin(
  { addBase, theme, pico }: PluginAPI,
  safeGetOption: SafeGetOption,
) {
  // Selection
  if (safeGetOption("content.typography")) {
    addBase({
      "::selection": apply(pico.theme("bg", "textSelectionColor")),
    });
  }

  // Responsive root font size
  if (safeGetOption("enable.responsiveTypography")) {
    const mediaQueries = getMinWidthMediaQueries(theme);
    for (const [name, mq] of mediaQueries) {
      const rootFontSize = theme("rootFontSize")?.[name];
      if (!!rootFontSize)
        addBase({
          [mq]: {
            "html, :host": {
              fontSize: rootFontSize,
            },
          },
        });
    }
  }
}

export function typographyConfig(safeGetOption: SafeGetOption): Partial<Config> {
  return {
    ...(safeGetOption("enable.responsiveTypography")
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
