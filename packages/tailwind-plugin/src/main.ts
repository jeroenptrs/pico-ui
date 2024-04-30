import merge from "lodash.merge";
import plugin from "tailwindcss/plugin";

// Input
import { defaultOptions, type PicoPluginOptions } from "@utils/options.util";
import { useSafeGetOption } from "@utils/safeGetOptions.util";

// Output
import { layoutConfig, layoutPlugin } from "@plugins/layout.plugin";
import { config } from "@config/main.config";
import { themeConfig, themePlugin } from "@plugins/themes.plugin";
import { compose } from "@utils/compose.util";
import { _var } from "@utils/var.util";

// TODO - FUTURE: move away from omitting TW defaults
export default plugin.withOptions(
  (options: PicoPluginOptions = defaultOptions) =>
    function (api) {
      api.var = _var;
      compose(themePlugin, layoutPlugin)(api, useSafeGetOption(options));
    },
  (options: PicoPluginOptions = defaultOptions) =>
    merge(
      {},
      config,
      themeConfig(useSafeGetOption(options)),
      layoutConfig(useSafeGetOption(options))
    )
);

export { defaultOptions, futureDefaultOptions } from "@utils/options.util";
export { postcss as picoCssVariables } from "@utils/postcss.util";
