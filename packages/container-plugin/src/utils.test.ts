import { describe, it, expect } from "vitest";

import { toCssValue } from "@utils/toCssValue.util";

describe("@utils", () => {
  describe("toCssValue.util", () => {
    it("converts numbers to px value string", () => {
      expect(toCssValue(0)).toBe("0px");
    });

    it("does not alter passed strings", () => {
      expect(toCssValue("420px")).toBe("420px");
      expect(toCssValue("13.37em")).toBe("13.37em");
    });
  });
});
