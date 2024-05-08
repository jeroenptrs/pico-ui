import prettier from "prettier";
import { expect } from "vitest";

interface CustomMatchers<R = unknown> {
  toMatchCss: (received: string) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

expect.extend({
  async toMatchCss(received = "", expected = "") {
    function format(input: string) {
      return prettier.format(input.replace(/\n/g, ""), {
        parser: "css",
        printWidth: 100,
      });
    }

    const formattedReceived = await format(received);
    const formattedExpected = await format(expected);
    const pass = formattedReceived === formattedExpected;

    return {
      actual: received,
      pass,
      message: () =>
        `desired output\n\n${formattedExpected}\nis${!pass ? " not" : ""} matching received output:\n\n${formattedReceived}`,
    };
  },
});
