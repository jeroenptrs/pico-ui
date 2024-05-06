export function toCssValue(value: string | number) {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}
