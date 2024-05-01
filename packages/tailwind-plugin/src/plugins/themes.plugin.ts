import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

// import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function themePlugin(api: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("themes.default")) {
    api.addBase({
      "html, :host": {
        // Typography
        "--tw-font-size": api.theme("fontSize.full"),
      },
    });

    // Responsive root font size
    if (safeGetOption("responsiveTypography")) {
      const breakpoints: Array<[string, string]> = Object.entries(
        api.theme("screens")
      );

      // TODO - FUTURE: allow for advanced screens configs to work as well, see https://tailwindcss.com/docs/screens#advanced-configuration
      for (const [name, min] of breakpoints) {
        const rootFontSize = api.theme("rootFontSize")?.[name];
        if (!!rootFontSize)
          api.addBase({
            [`@media (min-width: ${min})`]: {
              "html, :host": {
                "--tw-font-size": rootFontSize,
              },
            },
          });
      }
    }

    // TODO: enable-responsive-spacings
    // if (safeGetOption("responsiveSpacings")) {
    //   api.addBase({})
    // }
  }
}

export function themeConfig(safeGetOption: SafeGetOption): Partial<Config> {
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
