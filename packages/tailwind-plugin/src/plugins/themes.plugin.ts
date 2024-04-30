// import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

// import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function themePlugin(api: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("themes.default")) {
    api.addBase({
    });

    // TODO: if responsive-typography
    // api.addBase({});
  }
}
