declare module "tailwindcss/lib/util/normalizeScreens" {
  import type { ScreensConfig } from "tailwindcss/types/config";

  export type ScreenValue = {
    min?: number;
    max?: number;
    raw?: string;
  };

  export type Screen = {
    name: string;
    not: boolean;
    values: Array<ScreenValue>;
  };

  export function normalizeScreens(screens: ScreensConfig): Screen[];
}
