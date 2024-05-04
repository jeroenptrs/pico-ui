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
        ...api.vars("fontWeight", "fontSize", "lineHeight", "fontFamily", "textUnderlineOffset"),
        ...api.vars("theme.backgroundColor", "theme.color"),
      ),
    });
  }

  if (safeGetOption("layout.landmarks")) {
    api.addBase({
      body: apply("w-full m-0", {
        // TODO: if semantic-container
        "> header, > main, > footer": {
          // else !semantic-container
          "padding-block": api.helper("spacing"),
        },
      }),
      main: apply("block"),
    });
  }

  if (safeGetOption("layout.container")) {
    api.addComponents({
      [".container-fluid"]: apply(`w-full mx-auto px-[${api.helper("spacing")}]`),
    });

    const breakpoints: Array<[string, string]> = Object.entries(api.theme("container.maxWidth"));
    api.addComponents({
      [".container"]: apply(
        `w-full mx-auto px-[${api.helper("spacing")}]`,
        ...breakpoints.map(([screen, maxWidth], index) => ({
          [`@screen ${screen}`]: apply(`max-w-[${maxWidth}]`, index === 0 && "px-0"), // https://github.com/tailwindlabs/tailwindcss/issues/1102#issuecomment-525386822
        })),
      ),
    });
  }

  if (safeGetOption("layout.section")) {
    api.addBase({
      section: apply(`mb-[${api.helper("spacing")}]`),
    });
  }

  if (safeGetOption("layout.grid")) {
    api.addComponents({
      [safeGetOption("layout.grid") === "pico" ? ".pico-grid" : ".grid"]: apply(
        { display: "grid" },
        api.var("gap"),
        "grid-cols-[1fr] md:grid-cols-auto",
        { "> *": apply("min-w-0") },
      ),
    });
  }

  // TODO: enable-responsive-spacings
  // if (safeGetOption("responsiveSpacings")) {
  //   api.addBase({})
  // }
}

export function layoutConfig(safeGetOption: SafeGetOption): Partial<Config> {
  return safeGetOption("layout.container")
    ? {
        theme: {
          container: {
            maxWidth: {
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
