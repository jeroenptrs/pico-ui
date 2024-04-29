import type { CSSRuleObject } from "tailwindcss/types/config";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export function apply(
  stylesOrClass: CSSRuleObject | ClassNameValue,
  ...classes: ClassNameValue[]
): {} {
  const styles = typeof stylesOrClass === "string" ? {} : stylesOrClass;
  const firstClass = typeof stylesOrClass === "string" ? stylesOrClass : "";

  return {
    ...styles,
    [`@apply ${twMerge(firstClass, ...(classes ?? []))}`]: {},
  };
}

apply.top = function (
  stylesOrClass: CSSRuleObject | ClassNameValue,
  ...classes: ClassNameValue[]
): {} {
  const styles = typeof stylesOrClass === "string" ? {} : stylesOrClass;
  const firstClass = typeof stylesOrClass === "string" ? stylesOrClass : "";

  return {
    [`@apply ${twMerge(firstClass, ...(classes ?? []))}`]: {},
    ...styles,
  };
};
