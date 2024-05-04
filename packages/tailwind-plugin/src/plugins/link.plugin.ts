import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function linkPlugin(api: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("content.link")) {
    api.addBase({
      [':where(a:not([role="button"])), [role="link"]']: apply("bg-transparent"),
    });
  }
}

export function linkConfig(safeGetOption: SafeGetOption): Partial<Config> {
  return safeGetOption("content.link") ? {} : {};
}
