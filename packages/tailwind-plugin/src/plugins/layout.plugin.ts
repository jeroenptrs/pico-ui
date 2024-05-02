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
          "font-family": api.var("--tw-font-family"),
          "font-size": api.var("--tw-font-size"),
        },
        `font-[${api.var("--tw-font-weight")}] leading-[${api.var(
          "--tw-line-height"
        )}] underline-offset-[${api.var("--tw-text-underline-offset")}]`,
        `bg-[${api.var("--tw-background-color")}] text-[${api.var(
          "--tw-color"
        )}]` // TODO: dark mode
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
            "padding-block": api.var("--tw-block-spacing-vertical"),
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
        `px-[${api.var("--tw-spacing")}]`
      ),
    });

    const breakpoints: Array<[string, string]> = Object.entries(
      api.theme("screens")
    );

    const firstBreakpoint =
      breakpoints.length > 0 ? `${breakpoints[0][0]}:px-0` : ""; // TODO: extract in generic util
    // TODO: convert to api.addUtilities or extend tw's .container
    const mappedViewports = breakpoints.map(
      ([b]) => `${b}:max-w-[${api.theme("container.maxWidths")?.[b]}]`
    );

    api.addComponents({
      [".container"]: apply(`${mappedViewports.join(" ")} ${firstBreakpoint}`),
    });
  }

  if (safeGetOption("layout.section")) {
    api.addBase({
      section: apply("mb-[var(--tw-block-spacing-vertical)]"),
    });
  }

  if (safeGetOption("layout.grid")) {
    api.addComponents({
      [safeGetOption("layout.grid") === "pico" ? ".pico-grid" : ".grid"]: {
        ...apply(
          { display: "grid" },
          "grid-cols-[1fr]",
          `gap-x-[${api.var("--tw-grid-column-gap")}] gap-y-[${api.var(
            "--tw-grid-row-gap"
          )}] md:grid-cols-auto`
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
          container: {
            maxWidths: {
              sm: "510px",
              md: "700px",
              lg: "950px",
              xl: "1200px",
              "2xl": "1450px",
            },
          } as Record<string, unknown>,
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
