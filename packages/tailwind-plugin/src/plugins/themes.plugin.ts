import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

// import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function themePlugin(api: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("themes.default")) {
    api.addBase({
      "html, :host": {
        // TODO: dark mode
        "--tw-background-color": api.theme("colors.white"),
        "--tw-color": api.theme("colors.zinc.750"),
        // Typography
        "--tw-font-family-emoji": api.theme("fontFamily.emoji"),
        "--tw-font-family-sans-serif": api.theme("fontFamily.sans"),
        "--tw-font-family-monospace": api.theme("fontFamily.mono"),
        "--tw-font-family": api.var("--tw-font-family-sans-serif"),
        "--tw-line-height": api.theme("lineHeight.6"),
        "--tw-font-weight": api.theme("fontWeight.normal"),
        "--tw-font-size": api.theme("fontSize.full"),
        "--tw-text-underline-offset": api.theme("textUnderlineOffset.0-1"),
        // Borders
        "--tw-border-radius": api.theme("borderRadius.DEFAULT"),
        "--tw-border-width": "0.0625rem",
        "--tw-outline-width": "0.125rem",
        // Transitions
        "--tw-transition": "0.2s ease-in-out",
        // Spacings
        "--tw-spacing": api.theme("spacing.4"),
        // Spacings for typography elements
        // TODO:
        // Spacings for body > header, body > main, body > footer, section, article
        ...(safeGetOption("layout.landmarks") ||
        safeGetOption(
          "layout.section"
        ) /* || safeGetOption("components.card") || safeGetOption("components.modal") */
          ? {
              "--tw-block-spacing-horizontal": api.theme("spacing.4"),
              "--tw-block-spacing-vertical": api.theme("spacing.4"),
            }
          : {}),
        ...(safeGetOption("layout.grid")
          ? {
              "--tw-grid-column-gap": api.var("--tw-spacing"),
              "--tw-grid-row-gap": api.var("--tw-spacing"),
            }
          : {}),
        // TODO: other components/forms/...
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
