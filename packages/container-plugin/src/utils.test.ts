import { describe, it, expect } from "vitest";

import { toCssValue } from "@utils/toCssValue.util";
import { getScreenRules } from "@utils/getScreenRules.util";

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

  describe("getScreenRules.util", () => {
    it("does not include a property without value in the resulting object", () => {
      expect(getScreenRules({})).toStrictEqual({});
      expect(getScreenRules({ maxWidth: undefined, padding: undefined })).toStrictEqual({});
      expect(getScreenRules({ maxWidth: 100, padding: undefined })).toStrictEqual({
        maxWidth: "100px",
      });
      expect(getScreenRules({ padding: 100 })).toStrictEqual({
        paddingLeft: "100px",
        paddingRight: "100px",
      });
      expect(getScreenRules({ maxWidth: 100, padding: 100 })).toStrictEqual({
        maxWidth: "100px",
        paddingLeft: "100px",
        paddingRight: "100px",
      });
    });
  });
});
