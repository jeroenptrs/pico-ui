import plugin from "tailwindcss/plugin";
import colors from "./colors";

interface PicoPluginOptions {
  // TODO - FUTURE: strict option that moves omitting TW config options behind a flag
  // strict?: boolean;

  // TODO: add $enable-semantic-container from Pico?
  // TODO: add $enable-responsive-typography from Pico?
  layout?: Partial<{
    document: boolean;
    landmarks: boolean;
    container: boolean;
  }>;
}

const defaultOptions = {
  layout: {
    document: true,
    landmarks: true,
    container: true,
  },
} as PicoPluginOptions;

// TODO - FUTURE: how to move away from omitting TW defaults?
export default plugin.withOptions(
  (config: PicoPluginOptions = defaultOptions) => {
    return function (api) {
      if (config?.layout?.document) {
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

      if (config?.layout?.landmarks) {
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

      if (config?.layout?.container) {
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
    };
  },
  (config: PicoPluginOptions = defaultOptions) => {
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
        },
      },
      corePlugins: {
        preflight: false,
        container: config.layout?.container ? false : undefined,
      },
      experimental: {
        optimizeUniversalDefaults: true,
      },
    };
  }
);
