import merge from "lodash.merge";
import plugin from "tailwindcss/plugin";

// Input
import { defaultOptions, type PicoPluginOptions } from "@utils/options.util";
import { useSafeGetOption } from "@utils/safeGetOptions.util";
// TODO - FUTURE: improve DX by option-specific config behind the same safeGet utilities (including type hints)
// TODO - FUTURE: compose media queries (see if there's a util in tailwind to import from?)

// Output
import { layoutConfig, layoutPlugin } from "@plugins/layout.plugin";
import { config } from "@config/main.config";
import { typographyConfig, typographyPlugin } from "@plugins/typography.plugin";
import { compose } from "@utils/compose.util";
import { createVarFn } from "@utils/var.util";

// TODO - FUTURE: move away from omitting TW defaults
export default plugin.withOptions(
  (options: PicoPluginOptions = {}) =>
    function (api) {
      compose(layoutPlugin, typographyPlugin)(
        createVarFn(api),
        useSafeGetOption(merge({}, defaultOptions, options)),
      );
    },
  (_options: PicoPluginOptions = {}) => {
    const options = merge({}, defaultOptions, _options);
    return merge(
      {},
      config,
      layoutConfig(useSafeGetOption(options)),
      typographyConfig(useSafeGetOption(options)),
    );
  },
);

export { defaultOptions, futureDefaultOptions } from "@utils/options.util";
