import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function layoutPlugin(
  { addBase, addComponents, addUtilities, theme, pico }: PluginAPI,
  safeGetOption: SafeGetOption,
) {
  addUtilities({
    ".fontsize-full": {
      fontSize: theme("fontSize.full"),
    },
  });

  if (safeGetOption("layout.document")) {
    addBase({
      "*, *:before, *:after": apply("box-border", "bg-no-repeat"),
      ":before, :after": {
        textDecoration: "inherit",
        verticalAlign: "inherit",
      },
      "html, :host": apply(
        {
          "-webkit-tap-highlight-color": "transparent",
          textSizeAdjust: "100%",
          overflowWrap: "break-word",
          fontFeatureSettings: "normal",
          fontVariationSettings: "normal",
          textRendering: "optimizeLegibility",
          tabSize: "4",
        },
        ...pico.vars("fontWeight", "fontSize", "lineHeight", "fontFamily", "textUnderlineOffset"),
        pico.theme("bg", "backgroundColor"),
        pico.theme("text", "color"),
      ),
    });
  }

  if (safeGetOption("layout.landmarks")) {
    addBase({
      body: apply("w-full m-0", {
        // TODO: if semantic-container
        "> header, > main, > footer": {
          // else !semantic-container
          paddingBlock: pico.helper("spacing"),
        },
      }),
      main: apply("block"),
    });
  }

  if (safeGetOption("layout.container")) {
    addComponents({
      [".container-fluid"]: apply(`w-full mx-auto px-[${pico.helper("spacing")}]`),
    });

    const breakpoints: Array<[string, string]> = Object.entries(theme("container.maxWidth"));
    addComponents({
      [".container"]: apply(
        `w-full mx-auto px-[${pico.helper("spacing")}]`,
        ...breakpoints.map(([screen, maxWidth], index) => ({
          [`@screen ${screen}`]: apply(`max-w-[${maxWidth}]`, index === 0 && "px-0"), // https://github.com/tailwindlabs/tailwindcss/issues/1102#issuecomment-525386822
        })),
      ),
    });
  }

  if (safeGetOption("layout.section")) {
    addBase({
      section: apply(`mb-[${pico.helper("spacing")}]`),
    });
  }

  if (safeGetOption("layout.grid")) {
    addComponents({
      [".grid"]: apply({ display: "grid" }, pico.var("gap"), "grid-cols-[1fr] md:grid-cols-auto", {
        "> *": apply("min-w-0"),
      }),
    });
  }

  // TODO: enable-responsive-spacings
  // if (safeGetOption("responsiveSpacings")) {
  //   api.addBase({})
  // }

  // TODO: move to components/progress
  // #{$parent-selector} progress {
  //   accent-color: var(#{$css-var-prefix}primary);
  // }

  // TODO: move to forms/checkbox-radio-switch
  // #{$parent-selector} [type="checkbox"],
  // #{$parent-selector} [type="radio"] {
  //   accent-color: var(#{$css-var-prefix}primary);
  // }

  // TODO: move to forms/basics
  // #{$parent-selector} [type="range"] {
  //   accent-color: var(#{$css-var-prefix}primary);
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
