import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import type { SafeGetOption } from "@utils/safeGetOptions.util";
import { getMinWidthMediaQueries } from "@utils/getMinWidthMediaQueries.util";
import { apply } from "@utils/apply.util";

export function typographyPlugin(
  { addBase, theme, pico }: PluginAPI,
  safeGetOption: SafeGetOption,
) {
  // Selection
  if (safeGetOption("content.typography")) {
    addBase({
      ["b, strong"]: { fontWeight: "bolder" },
      ["sub, sup"]: apply("relative text-[.75em] leading-[0] align-baseline"),
      sub: apply("bottom-[-.25em]"),
      sup: apply("top-[-.5em]"),
      small: apply("text-[length:theme(spacing.[3.5])]"),
      ["address, blockquote, dl, ol, p, pre, table, ul"]: apply(
        "mt-[0] mb-4 not-italic font-normal",
        pico.theme("text", "color"),
      ),
      ["h1, h2, h3, h4, h5, h6"]: apply("mt-[0] mb-4 font-bold font-sans"),
      h1: apply("text-[2rem]/[1.125] text-zinc-800/100 dark:text-zinc-50/100"),
      h2: apply("text-[1.75rem]/[1.15] text-zinc-750/100 dark:text-zinc-100/100"),
      h3: apply("text-2xl/[1.175] text-zinc-700/100 dark:text-zinc-200/100"),
      h4: apply("text-xl/[1.2] text-zinc-650/100 dark:text-zinc-250/100"),
      h5: apply("text-lg/[1.225] text-zinc-600/100 dark:text-zinc-300/100"),
      h6: apply("text-base/tight text-zinc-550/100 dark:text-zinc-400/100"),
      [":where(article, address, blockquote, dl, figure, form, ol, p, pre, table, ul)"]: {
        ["~ :is(h1)"]: apply("mt-[3rem]"),
        ["~ :is(h2)"]: apply("mt-[2.625rem]"),
        ["~ :is(h3)"]: apply("mt-[2.25rem]"),
        ["~ :is(h4)"]: apply("mt-[1.874rem]"),
        ["~ :is(h5)"]: apply("mt-[1.6875rem]"),
        ["~ :is(h6)"]: apply("mt-[1.5rem]"),
      },
      p: apply("mb-4"),
      hgroup: apply("mb-4", {
        "> *": apply("my-[0]"),
        "> *:not(:first-child):last-child": apply(
          pico.theme("text", "mutedColor"),
          "font-[unset] text-[length:theme(spacing.4)]",
        ),
      }),
      ":where(ol, ul)": {
        li: apply("mb-1"),
      },
      ":where(dl, ol, ul) :where(dl, ol, ul)": apply("m-0 mt-1"),
      "ul li": apply("list-square list-outside list-image-none"),
      mark: apply(
        "py-0.5 px-1 align-baseline",
        pico.theme("text", "markColor"),
        pico.theme("bg", "markBackgroundColor"),
      ),
      blockquote: apply(
        "block my-4 mx-0 p-4 border-0 border-e-0 border-solid border-l-[length:.25rem] border-s-[.25rem]",
        pico.theme("border-x", "mutedBorderColor"),
        pico.theme("border-s", "mutedBorderColor"),
        {
          footer: apply("mt-2", pico.theme("text", "mutedColor")),
        },
      ),
      ["abbr[title]"]: apply(
        { textDecoration: "none" },
        "border-0 border-b border-dotted cursor-help",
      ),
      ins: apply({ textDecoration: "none" }, pico.theme("text", "insColor")),
      del: apply(pico.theme("text", "delColor")),
      "::selection": apply(pico.theme("bg", "textSelectionColor")),
    });
  }

  // Responsive root font size
  if (safeGetOption("enable.responsiveTypography")) {
    const mediaQueries = getMinWidthMediaQueries(theme);
    for (const [name, mq] of mediaQueries) {
      const rootFontSize = theme("rootFontSize")?.[name];
      if (!!rootFontSize)
        addBase({
          [mq]: {
            "html, :host": apply(`text-[length:${rootFontSize}]`),
          },
        });
    }
  }
}

export function typographyConfig(safeGetOption: SafeGetOption): Partial<Config> {
  return {
    ...(safeGetOption("enable.responsiveTypography")
      ? {
          theme: {
            rootFontSize: {
              sm: "106.25%",
              md: "112.5%",
              lg: "118.75%",
              xl: "125%",
              "2xl": "131.25%",
            },
          },
        }
      : {}),
  };
}
