import merge from "lodash.merge";
import plugin from "tailwindcss/plugin";

// Utils
import { defaultOptions, type PicoPluginOptions } from "@utils/options.util";
import { useSafeGetOption } from "@utils/safeGetOptions.util";
import { compose } from "@utils/compose.util";
import { createVarUtils } from "@utils/var.util";
// TODO - FUTURE: improve DX by option-specific config behind the same safeGet utilities (including type hints)
// TODO - FUTURE: compose media queries (see if there's a util in tailwind to import from?)

// Output
import { config } from "@config/main.config";
import { layoutConfig, layoutPlugin } from "@plugins/layout.plugin";
import { typographyConfig, typographyPlugin } from "@plugins/typography.plugin";
import { linkConfig, linkPlugin } from "@plugins/link.plugin";

// TODO - FUTURE: move away from omitting TW defaults
export default plugin.withOptions(
  (options: PicoPluginOptions = {}) =>
    function (api) {
      compose(
        layoutPlugin,
        linkPlugin,
        typographyPlugin,
      )(createVarUtils(api), useSafeGetOption(merge({}, defaultOptions, options)));
    },
  (options: PicoPluginOptions = {}) => {
    const configOptions = merge({}, defaultOptions, options);
    return merge(
      {},
      config,
      layoutConfig(useSafeGetOption(configOptions)),
      linkConfig(useSafeGetOption(configOptions)),
      typographyConfig(useSafeGetOption(configOptions)),
    );
  },
);

export { futureDefaultOptions as options } from "@utils/options.util";
