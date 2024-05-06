import merge from "lodash.merge";

import { isStringOrNumber } from "@utils/isStringOrNumber.util";
import { toCssValue } from "@utils/toCssValue.util";
import type { ContainerScreen } from "../types";

export function getScreenRules({ maxWidth, padding }: ContainerScreen) {
  return merge(
    {},
    isStringOrNumber(maxWidth) && { maxWidth: toCssValue(maxWidth) },
    isStringOrNumber(padding) && {
      paddingLeft: toCssValue(padding),
      paddingRight: toCssValue(padding),
    },
  );
}
