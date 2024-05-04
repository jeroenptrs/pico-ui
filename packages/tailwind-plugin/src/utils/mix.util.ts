type RGB = [number, number, number];

function hexToRgb(hex: string) {
  const r = hex.substring(1, 3);
  const g = hex.substring(3, 5);
  const b = hex.substring(5, 7);
  return [r, g, b].map((x) => parseInt(x, 16)) as RGB;
}

function rgbToHex(rgb: RGB): string {
  return (
    "#" +
    rgb
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export function mix(_left: string, right: string): string {
  const left = hexToRgb(_left);
  const rgb = hexToRgb(right).map((x, i) => Math.ceil((x + left[i]) / 2)) as RGB;
  return rgbToHex(rgb);
}
