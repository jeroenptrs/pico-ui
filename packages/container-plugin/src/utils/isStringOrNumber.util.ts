export function isStringOrNumber(x: unknown): x is string | number {
  return typeof x === "string" || typeof x === "number";
}
