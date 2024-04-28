import { PicoPluginOptions } from "../options";
import { Paths } from "./paths.type";

type PeekValueType = {} | boolean | undefined;
function peek(o: PeekValueType, k: string) {
  // TODO: use arktype to validate it's `string` or `string.string`
  if (o === null || typeof o !== "object") {
    return o;
  }

  if (!k.includes(".")) {
    return (o as Record<string, PeekValueType>)[k];
  }

  const period = k.indexOf(".");
  const left = k.substring(0, period);
  const right = k.substring(period + 1);

  return peek((o as Record<string, PeekValueType>)[left], right);
}

export function useSafeGetOptions(options: PicoPluginOptions) {
  const safeGetOptions = (
    key: Exclude<Paths<PicoPluginOptions>, keyof PicoPluginOptions>
  ) => {
    return peek(options, key);
  };

  return safeGetOptions;
}
