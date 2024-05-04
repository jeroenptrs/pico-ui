import merge from "lodash.merge";
import type { CSSRuleObject } from "tailwindcss/types/config";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export function apply(...classes: Array<CSSRuleObject | ClassNameValue>): CSSRuleObject {
  const appliedObjectsArray: Array<CSSRuleObject> = [];
  let appliedStringsArray: Array<string> = [];

  function attachStringsArray() {
    if (appliedStringsArray.length > 0) {
      appliedObjectsArray.push({
        [`@apply ${twMerge(...appliedStringsArray)}`]: {},
      });

      appliedStringsArray = [];
    }
  }

  for (const stylesOrClass of classes) {
    if (typeof stylesOrClass === "string") {
      appliedStringsArray.push(stylesOrClass);
    } else {
      attachStringsArray();
      appliedObjectsArray.push(stylesOrClass as CSSRuleObject);
    }
  }

  attachStringsArray();

  return merge({}, ...appliedObjectsArray);
}
