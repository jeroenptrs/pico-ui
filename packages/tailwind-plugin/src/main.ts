import plugin from "tailwindcss/plugin";

import colors from "./colors";
import { defaultOptions, type PicoPluginOptions } from "./options";
import { useSafeGetOptions } from "./util/safeGetOptions.util";

// TODO - FUTURE: how to move away from omitting TW defaults?
export default plugin.withOptions(
  (options: PicoPluginOptions = defaultOptions) => {
    const safeGetOption = useSafeGetOptions(options);
    return function (api) {
      if (safeGetOption("layout.document")) {
        api.addBase({
          "*, *:before, *:after": {
            "box-sizing": "border-box",
            "background-repeat": "no-repeat",
          },
          ":before, :after": {
            "text-decoration": "inherit",
            "vertical-align": "inherit",
          },
          "html, :host": {
            "-webkit-tap-highlight-color": "transparent",
            "text-size-adjust": "100%",
            "background-color": api.theme("colors.white"), // TODO: dark mode // TODO: should this be a CSS variable instead?
            color: api.theme("colors.zinc.750"), // TODO: dark mode // TODO: should this be a CSS variable instead?
            "font-weight": api.theme("fontWeight.normal"), // TODO: should this be a CSS variable instead?
            "font-size": api.theme("fontSize.base"), // TODO: should this be a CSS variable instead?
            "line-height": api.theme("lineHeight.normal"), // TODO: should this be a CSS variable instead?
            "font-family": api.theme("fontFamily.sans"), // TODO: should this be a CSS variable instead?
            "font-feature-settings": "normal",
            "font-variation-settings": "normal",
            "text-underline-offset": api.theme("textUnderlineOffset.01"), // TODO: should this be a CSS variable instead?
            "text-rendering": "optimizeLegibility",
            "overflow-wrap": "break-word",
            "tab-size": "4",
          },
        });

        // TODO: if responsive-typography
        // api.addBase({});
      }

      if (safeGetOption("layout.landmarks")) {
        api.addBase({
          body: {
            width: "100%",
            margin: "0",
            // TODO: if semantic-container
            "> header, > main, > footer": {
              // else !semantic-container
              "padding-block": api.theme("spacing.4"),
            },
          },
          main: {
            display: "block",
          },
        });
      }

      if (safeGetOption("layout.container")) {
        api.addComponents({
          [".container, .container-fluid"]: {
            "@apply w-full mx-auto": {}, // https://github.com/tailwindlabs/tailwindcss/discussions/2049#discussioncomment-39950,
            "@apply px-4": {}, // TODO: should this be a CSS variable instead?
          },
        });

        const viewports: Array<[string, string]> = Object.entries(
          api.theme("viewports")
        );

        const firstBreakpoint =
          viewports.length > 0 ? `${viewports[0][0]}:px-0` : ""; // TODO: extract in generic util
        // TODO: convert to api.addUtilities
        const mappedViewports = viewports.map(
          ([viewport, maxWidth]) => `${viewport}:max-w-[${maxWidth}]`
        );

        api.addComponents({
          [".container"]: {
            [`@apply ${mappedViewports.join(" ")} ${firstBreakpoint}`]: {},
          },
        });
      }

      if (safeGetOption("layout.section")) {
        api.addBase({
          section: {
            "@apply mb-4": {}, // TODO: #{$css-var-prefix}block-spacing-vertical in Pico. Should this be a CSS variable instead?
          },
        });
      }

      if (safeGetOption("layout.grid")) {
        api.addComponents({
          [".grid"]: {
            display: "grid",
            "@apply grid-cols-[1fr]": {},
            "@apply gap-x-4 gap-y-4 md:grid-cols-auto": {}, // TODO: #{$css-var-prefix}block-spacing-vertical in Pico. Should this be a CSS variable instead?
            "> *": {
              "@apply min-w-0": {},
            },
          },
        });
      }
    };
  },
  (options: PicoPluginOptions = defaultOptions) => {
    const safeGetOption = useSafeGetOptions(options);
    return {
      theme: {
        colors,
        viewports: {
          sm: "510px",
          md: "700px",
          lg: "950px",
          xl: "1200px",
          "2xl": "1450px",
        } as Record<string, string>,
        extend: {
          textUnderlineOffset: {
            "01": ".1rem",
          },
          screens: {
            sm: "576px",
          },
          gridTemplateColumns: {
            auto: "repeat(auto-fit, minmax(0, 1fr))",
          },
        },
      },
      corePlugins: {
        preflight: false,
        container: safeGetOption("layout.container") ? false : undefined,
      },
      experimental: {
        optimizeUniversalDefaults: true,
      },
    };
  }
);

export { defaultOptions } from "./options";
