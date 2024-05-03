import merge from "lodash.merge";
import type { CSSRuleObject } from "tailwindcss/types/config";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export function apply(...classes: Array<CSSRuleObject | ClassNameValue>): CSSRuleObject {
  const appliedObjectsArray: Array<CSSRuleObject> = [];
  let appliedStringsArray = [];

  for (const stylesOrClass of classes) {
    if (typeof stylesOrClass === "string") {
      appliedStringsArray.push(stylesOrClass);
    } else {
      if (appliedStringsArray.length > 0) {
        appliedObjectsArray.push({
          [`@apply ${twMerge(...appliedStringsArray)}`]: {},
        });

        appliedStringsArray = [];
      }

      appliedObjectsArray.push(stylesOrClass as CSSRuleObject);
    }
  }

  return merge({}, ...appliedObjectsArray);
}
