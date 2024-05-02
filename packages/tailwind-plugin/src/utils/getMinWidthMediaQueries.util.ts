// https://github.com/tailwindlabs/tailwindcss/blob/f1f419a9ecfcd00a2001ee96ab252739fca47564/src/corePlugins.js#L606
import type { PluginAPI } from "tailwindcss/types/config";
import {
  normalizeScreens,
  type Screen,
} from "tailwindcss/lib/util/normalizeScreens";

function extractMinWidths(screens: Array<Screen> = []) {
  return screens
    .flatMap((screen) =>
      screen.values.map((breakpoint) => ({
        min: breakpoint.min,
        name: screen.name,
      }))
    )
    .filter((v) => v.min !== undefined);
}

export function getMinWidthMediaQueries(theme: PluginAPI["theme"]) {
  const screens = normalizeScreens(theme("screens"));
  const minWidths = extractMinWidths(screens);
  return Array.from(
    new Set(
      minWidths
        .slice()
        .sort((a, z) => parseInt(`${a.min}`) - parseInt(`${z.min}`))
    )
  ).map((minWidth) => [minWidth.name, `@media (min-width: ${minWidth.min})`]);
}
