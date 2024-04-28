import plugin from "tailwindcss/plugin";
import merge from "lodash.merge";

// Input
import { defaultOptions, type PicoPluginOptions } from "./options";
import { useSafeGetOption } from "./util/safeGetOptions.util";

// Output
import { layoutConfig, layoutPlugin } from "./layout";
import { config } from "./config";

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

export { defaultOptions, futureDefaultOptions } from "./options";
