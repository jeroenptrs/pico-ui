// TODO: move this to a separate package
/**
 * Consider the following testing utility https://github.com/tailwindlabs/tailwindcss/blob/v3.4.3/tests/util/run.js
 * This isn't published in the Tailwind npm package so we're re-exposing it to streamline plugin testing, with types
 */

import merge from "lodash.merge";
import path from "path";
import postcss from "postcss";
import tailwind, { Config } from "tailwindcss";
import { expect } from "vitest";

export const css = String.raw;
export const html = String.raw;
export const javascript = String.raw;

export let map = JSON.stringify({
  version: 3,
  file: null,
  sources: [],
  names: [],
  mappings: "",
});

export function run(input: string, config: Config, plugin = tailwind) {
  const { currentTestName } = expect.getState();
  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  });
}

export function runWithSourceMaps(input: string, config: Config, plugin = tailwind) {
  const { currentTestName } = expect.getState();

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
    map: {
      prev: map,
    },
  });
}

export function createConfigMerger(defaultConfig: Partial<Config>) {
  return function mergeConfig(extendedConfig: Partial<Config>) {
    return merge({}, defaultConfig, extendedConfig) as Config;
  };
}
