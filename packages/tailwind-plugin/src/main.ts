import merge from "lodash.merge";
import plugin from "tailwindcss/plugin";

// Input
import { defaultOptions, type PicoPluginOptions } from "@utils/options.util";
import { useSafeGetOption } from "@utils/safeGetOptions.util";

// Output
import { layoutConfig, layoutPlugin } from "@plugins/layout.plugin";
import { config } from "@config/main.config";
import { themePlugin } from "@plugins/themes.plugin";
import { compose } from "@utils/compose.util";

// TODO - FUTURE: move away from omitting TW defaults
export default plugin.withOptions(
  (options: PicoPluginOptions = defaultOptions) =>
    function (api) {
      compose(themePlugin, layoutPlugin)(api, useSafeGetOption(options));
    },
  (options: PicoPluginOptions = defaultOptions) =>
    merge({}, config, layoutConfig(useSafeGetOption(options)))
);

export { defaultOptions, futureDefaultOptions } from "@utils/options.util";
export { postcss as picoCssVariables } from "@utils/postcss.util";
