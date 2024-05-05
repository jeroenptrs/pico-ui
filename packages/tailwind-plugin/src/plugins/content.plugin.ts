import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import type { SafeGetOption } from "@utils/safeGetOptions.util";
import { apply } from "@utils/apply.util";

export function contentPlugin({ addBase, theme, pico }: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("content.embedded")) {
    addBase({
      ":where(audio, canvas, iframe, img, svg, video)": apply("align-middle"),
      "audio, video": apply("inline-block"),
      "audio:not([controls])": apply("hidden h-[0]"),
      ":where(iframe)": apply("border-none"),
      img: apply("max-w-full h-auto border-none"),
      ":where(svg:not([fill]))": apply("fill-current"),
      "svg:not(:root)": apply("overflow-hidden"),
    });
  }

  if (safeGetOption("content.figure")) {
    addBase({
      figure: apply("block m-[0] p-[0]", {
        figcaption: apply("py-1 px-[0]", pico.theme("text", "mutedColor")),
      }),
    });
  }

  if (safeGetOption("content.miscs")) {
    addBase({
      hr: apply(
        "h-[0] my-[1rem] mx-[0] text-inherit border-0 border-solid border-t",
        pico.theme("border-t", "mutedBorderColor"),
      ),
      "[hidden], template": apply("hidden"),
      canvas: apply("inline-block"),
    });
  }
}

export function contentConfig(_: SafeGetOption): Partial<Config> {
  return {};
}
