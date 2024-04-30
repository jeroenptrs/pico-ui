import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function layoutPlugin(api: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("layout.document")) {
    api.addBase({
      "*, *:before, *:after": apply("box-border", "bg-no-repeat"),
      ":before, :after": {
        "text-decoration": "inherit",
        "vertical-align": "inherit",
      },
      "html, :host": apply(
        {
          "-webkit-tap-highlight-color": "transparent",
          "text-size-adjust": "100%",
          "overflow-wrap": "break-word",
          "font-feature-settings": "normal",
          "font-variation-settings": "normal",
          "text-rendering": "optimizeLegibility",
          "tab-size": "4",
        },
        "bg-white text-zinc-750", // TODO: dark mode // TODO: should this be a CSS variable instead?
        "font-normal font-sans text-base underline-offset-0-1" // TODO: should this be a CSS variable instead?
      ),
    });
  }

  if (safeGetOption("layout.landmarks")) {
    api.addBase({
      body: apply.top(
        {
          // TODO: if semantic-container
          "> header, > main, > footer": {
            // else !semantic-container
            "padding-block": api.theme("spacing.4"),
          },
        },
        "w-full m-0"
      ),
      main: apply("block"),
    });
  }

  if (safeGetOption("layout.container")) {
    api.addComponents({
      [".container, .container-fluid"]: apply(
        "w-full mx-auto", // https://github.com/tailwindlabs/tailwindcss/discussions/2049#discussioncomment-39950,
        "px-4" // TODO: should this be a CSS variable instead?
      ),
    });

    const viewports: Array<[string, string]> = Object.entries(
      api.theme("viewports")
    );

    const firstBreakpoint =
      viewports.length > 0 ? `${viewports[0][0]}:px-0` : ""; // TODO: extract in generic util
    // TODO: convert to api.addUtilities or extend tw's .container
    const mappedViewports = viewports.map(([v, mw]) => `${v}:max-w-[${mw}]`);

    api.addComponents({
      [".container"]: apply(`${mappedViewports.join(" ")} ${firstBreakpoint}`),
    });
  }

  if (safeGetOption("layout.section")) {
    api.addBase({
      section: apply("mb-4"), // TODO: #{$css-var-prefix}block-spacing-vertical in Pico. Should this be a CSS variable instead?
    });
  }

  if (safeGetOption("layout.grid")) {
    api.addComponents({
      [safeGetOption("layout.grid") === "pico" ? ".pico-grid" : ".grid"]: {
        ...apply(
          { display: "grid" },
          "grid-cols-[1fr]",
          "gap-x-4 gap-y-4 md:grid-cols-auto" // TODO: #{$css-var-prefix}block-spacing-vertical in Pico. Should this be a CSS variable instead?
        ),
        "> *": apply("min-w-0"),
      },
    });
  }
}

export function layoutConfig(safeGetOption: SafeGetOption): Partial<Config> {
  return safeGetOption("layout.container")
    ? {
        theme: {
          viewports: {
            sm: "510px",
            md: "700px",
            lg: "950px",
            xl: "1200px",
            "2xl": "1450px",
          },
          extend: {
            screens: {
              sm: "576px",
            },
          },
        },
        corePlugins: {
          container: false,
        },
      }
    : {};
}
