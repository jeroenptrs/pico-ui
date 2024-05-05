import type { Paths } from "@utils/paths.type";

export interface PicoPluginOptions {
  // TODO - FUTURE: strict option that moves omitting TW config options behind a flag
  // strict?: boolean;

  enable?:
    | boolean
    | Partial<{
        transitions: boolean;
        semanticContainer: boolean;
        responsiveTypography?: boolean; // TODO: how to reconcile with tw typography plugin - is it needed?
        responsiveSpacings: boolean;
      }>;

  // TODO: add $enable-semantic-container from Pico?
  // TODO: add $enable-responsive-spacings from Pico?

  layout?:
    | boolean
    | Partial<{
        document: boolean;
        landmarks: boolean;
        container: boolean;
        section: boolean;
        grid: boolean;
      }>;

  content?:
    | boolean
    | Partial<{
        link: boolean;
        typography: boolean;
        embedded: boolean;
        button: boolean;
        table: boolean;
        code: boolean;
        figure: boolean;
        miscs: boolean;
      }>;
}

export type PicoPluginOptionPaths = Exclude<
  Paths<PicoPluginOptions>,
  "enable" | "layout" | "content"
>;

export const defaultOptions = {
  enable: {
    transitions: true,
    // TODO: semanticContainer: true,
    responsiveTypography: true,
    // TODO: responsiveSpacings: true,
  },

  layout: {
    document: true,
    landmarks: true,
    container: true,
    section: true,
    grid: true,
  },
  content: true,
} as PicoPluginOptions;

export const futureDefaultOptions = {
  responsiveTypography: false,
  layout: {
    grid: false,
  },
  content: true,
} as PicoPluginOptions;
