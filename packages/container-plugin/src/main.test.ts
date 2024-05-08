import "@pico-ui/testing-utils/vitest.extend";

import { createConfigMerger, css, html, run } from "@pico-ui/testing-utils";
import { screens } from "tailwindcss/defaultTheme";
import { describe, expect, it } from "vitest";

import container, { picoUiContainers } from "./main";

const raw = html`<div class="container"></div>`;

const mergeConfig = createConfigMerger({
  content: [{ raw }],
  plugins: [container],
  corePlugins: { preflight: false },
  experimental: { optimizeUniversalDefaults: true },
});

const input = css`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`;

const defaultContainer = css`
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

describe("@pico-ui/container-plugin", () => {
  describe("container.screens.DEFAULT", () => {
    it("contains the plugin default container styling", async () => {
      const result = await run(input, mergeConfig({}));
      await expect(result.css).toMatchCss(defaultContainer);
    });

    it("contains container.DEFAULT fallback styling on complete reset", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            container: {},
          },
        }),
      );

      await expect(result.css).toMatchCss(css`
        .container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `);
    });

    it("contains only full width if container.default is reset completely", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            container: {
              screens: { DEFAULT: {} },
            } as Record<string, unknown>,
          },
        }),
      );

      await expect(result.css).toMatchCss(css`
        .container {
          width: 100%;
        }
      `);
    });

    it("sets auto margins if center is on, no auto margins if center is off", async () => {
      const resultOff = await run(
        input,
        mergeConfig({
          theme: {
            container: {
              center: false,
              screens: { DEFAULT: {} },
            } as Record<string, unknown>,
          },
        }),
      );

      await expect(resultOff.css).toMatchCss(css`
        .container {
          width: 100%;
        }
      `);

      const resultOn = await run(
        input,
        mergeConfig({
          theme: {
            container: {
              center: true,
              screens: { DEFAULT: {} },
            } as Record<string, unknown>,
          },
        }),
      );

      await expect(resultOn.css).toMatchCss(css`
        .container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      `);
    });

    describe("accepts strings and numbers for screen objects", () => {
      it("numbers get converted to px", async () => {
        const resultNumbers = await run(
          input,
          mergeConfig({
            theme: {
              container: {
                center: false,
                screens: { DEFAULT: { padding: 0, maxWidth: 100 } },
              } as Record<string, unknown>,
            },
          }),
        );

        await expect(resultNumbers.css).toMatchCss(css`
          .container {
            width: 100%;
            max-width: 100px;
            padding-left: 0px;
            padding-right: 0px;
          }
        `);
      });

      it("string values get accepted as is and don't get converted to px", async () => {
        const resultNumbers = await run(
          input,
          mergeConfig({
            theme: {
              container: {
                center: false,
                screens: { DEFAULT: { padding: "15rem", maxWidth: "15px" } },
              } as Record<string, unknown>,
            },
          }),
        );

        await expect(resultNumbers.css).toMatchCss(css`
          .container {
            width: 100%;
            max-width: 15px;
            padding-left: 15rem;
            padding-right: 15rem;
          }
        `);
      });
    });
  });

  describe("container.screens", () => {
    it("has no configured viewports by default", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            screens,
          },
        }),
      );

      await expect(result.css).toMatchCss(defaultContainer);
    });

    it("does not create an empty media query for {screen} if container.screens.{screen} has no values", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            screens,
            extend: {
              container: {
                screens: {
                  sm: {},
                },
              } as Record<string, unknown>,
            },
          },
        }),
      );

      await expect(result.css).toMatchCss(defaultContainer);
    });

    it("creates a container per media query when defined in container.screens", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            screens,
            extend: {
              container: {
                screens: {
                  sm: { maxWidth: 100 },
                  lg: { maxWidth: 200, padding: 10 },
                  "2xl": { padding: 20 },
                },
              } as Record<string, unknown>,
            },
          },
        }),
      );

      await expect(result.css).toMatchCss(
        defaultContainer +
          css`
            @media (min-width: 640px) {
              .container {
                max-width: 100px;
              }
            }

            @media (min-width: 1024px) {
              .container {
                max-width: 200px;
                padding-left: 10px;
                padding-right: 10px;
              }
            }

            @media (min-width: 1536px) {
              .container {
                padding-left: 20px;
                padding-right: 20px;
              }
            }
          `,
      );
    });

    it("uses the updated screen media query when extend.screens is used", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            screens,
            extend: {
              screens: {
                sm: "600px",
              },
              container: {
                screens: {
                  sm: { maxWidth: 100 },
                },
              } as Record<string, unknown>,
            },
          },
        }),
      );

      await expect(result.css).toMatchCss(
        defaultContainer +
          css`
            @media (min-width: 600px) {
              .container {
                max-width: 100px;
              }
            }
          `,
      );
    });

    it("uses custom viewports configured in screens or extend.screens", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            screens: {
              mobile: "400px",
            },
            extend: {
              container: {
                screens: {
                  mobile: { maxWidth: "100%" },
                },
              } as Record<string, unknown>,
            },
          },
        }),
      );

      await expect(result.css).toMatchCss(
        defaultContainer +
          css`
            @media (min-width: 400px) {
              .container {
                max-width: 100%;
              }
            }
          `,
      );
    });

    it("throws error on container.screens using a screen name not found in screens", async () => {
      await expect(() =>
        run(
          input,
          mergeConfig({
            theme: {
              screens,
              extend: {
                container: {
                  screens: {
                    mobile: {},
                  },
                } as Record<string, unknown>,
              },
            },
          }),
        ),
      ).rejects.toThrowError("[@pico-ui/container]: screen mobile is not a configured screen name");
    });
  });

  describe("picoUiContainers", () => {
    it("matches the desired configuration for pico-ui", async () => {
      const result = await run(
        input,
        mergeConfig({
          theme: {
            screens,
            extend: picoUiContainers,
          },
        }),
      );

      await expect(result.css).toMatchCss(
        defaultContainer +
          css`
            @media (min-width: 576px) {
              .container {
                max-width: 510px;
                padding-left: 0px;
                padding-right: 0px;
              }
            }
            @media (min-width: 768px) {
              .container {
                max-width: 700px;
              }
            }
            @media (min-width: 1024px) {
              .container {
                max-width: 950px;
              }
            }
            @media (min-width: 1280px) {
              .container {
                max-width: 1200px;
              }
            }
            @media (min-width: 1536px) {
              .container {
                max-width: 1450px;
              }
            }
          `,
      );
    });
  });
});
