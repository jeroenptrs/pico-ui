import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import { apply } from "@utils/apply.util";
import type { SafeGetOption } from "@utils/safeGetOptions.util";

export function linkPlugin({ addComponents, pico }: PluginAPI, safeGetOption: SafeGetOption) {
  if (safeGetOption("content.link")) {
    addComponents({
      // TODO - OPTIONAL: role="link" should be enough as a component, unless adding .link make sense
      [':where(a:not([role="button"])), [role="link"]']: apply(
        { outline: "none" },
        "bg-transparent",
        pico.theme("text", "primary"),
        pico.theme("decoration", "primaryUnderline"),
        "underline",
        "underline-offset-[.125em]",

        // link transitions
        safeGetOption("enable.transitions") && {
          transition: `background-color ${pico.helper("transition")}, color ${pico.helper(
            "transition",
          )}, text-decoration ${pico.helper("transition")}, box-shadow ${pico.helper(
            "transition",
          )}`,
        },
        {
          // pseudo styling
          ['&:is([aria-current]:not([aria-current="false"]), :hover, :active, :focus)']: apply(
            pico.theme("text", "primaryHover"),
            pico.theme("decoration", "primaryHover"),
            "underline",
          ),

          // focus visible
          ["&:focus-visible"]: apply(
            {
              "box-shadow": `0 0 0 ${pico.helper("outlineWidth")} var(--tw-shadow-color)`,
            },
            pico.theme("shadow", "primaryFocus"),
          ),

          // the "actual" components
          ["&.secondary"]: apply(
            "underline",
            pico.theme("text", "secondary"),
            pico.theme("decoration", "secondaryUnderline"),

            {
              ['&:is([aria-current]:not([aria-current="false"]), :hover, :active, :focus)']: apply(
                pico.theme("text", "secondaryHover"),
                pico.theme("decoration", "secondaryHover"),
              ),
            },
          ),
          ["&.contrast"]: apply(
            "underline",
            pico.theme("text", "contrast"),
            pico.theme("decoration", "contrastUnderline"),

            {
              ['&:is([aria-current]:not([aria-current="false"]), :hover, :active, :focus)']: apply(
                pico.theme("text", "contrastHover"),
                pico.theme("decoration", "contrastHover"),
              ),
            },
          ),
        },
      ),

      ['a[role="button"]']: apply("inline-block"),
    });
  }
}

export function linkConfig(_: SafeGetOption): Partial<Config> {
  return {};
}
