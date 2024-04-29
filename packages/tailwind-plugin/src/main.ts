import merge from "lodash.merge";
import plugin from "tailwindcss/plugin";

// Input
import { defaultOptions, type PicoPluginOptions } from "@utils/options.util";
import { useSafeGetOption } from "@utils/safeGetOptions.util";

// Output
import { layoutConfig, layoutPlugin } from "@plugins/layout.plugin";
import { config } from "@config/main.config";

// TODO - FUTURE: move away from omitting TW defaults
export default plugin.withOptions(
  (options: PicoPluginOptions = defaultOptions) => {
    const safeGetOption = useSafeGetOption(options);
    return function (api) {
      layoutPlugin(api, safeGetOption);
    };
  },
  (options: PicoPluginOptions = defaultOptions) => {
    const safeGetOption = useSafeGetOption(options);
    return merge({}, config, layoutConfig(safeGetOption));
  }
);

export { defaultOptions, futureDefaultOptions } from "@utils/options.util";
export { postcss as picoCssVariables } from "@utils/postcss.util";
