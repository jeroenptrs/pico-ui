export interface PicoPluginOptions {
  // TODO - FUTURE: strict option that moves omitting TW config options behind a flag
  // strict?: boolean;

  // TODO: implement asap -> default true
  // TODO: add $enable-responsive-typography from Pico?
  // responsiveTypography: boolean; // TODO: how to reconcile with tw typography plugin - is it needed?

  // TODO: default false
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
}

export const defaultOptions = {
  layout: true,
} as PicoPluginOptions;

export const futureDefaultOptions = {
  layout: {
    document: true,
    landmarks: true,
    container: true,
    section: true,
  },
} as PicoPluginOptions;
