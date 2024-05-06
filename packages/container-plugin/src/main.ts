import merge from "lodash.merge";
import plugin from "tailwindcss/plugin";
import { normalizeScreens } from "tailwindcss/lib/util/normalizeScreens";

import { getScreenRules } from "@utils/getScreenRules.util";
import type { ContainerScreen, ContainerTheme } from "./types";

export default plugin(
  ({ addComponents, theme }) => {
    const screenNames = normalizeScreens(theme("screens")).map(({ name }) => name);
    const containerScreens = Object.entries(
      theme("container.screens", {} as Record<string, ContainerScreen>),
    );

    const screenRules = [];
    for (const [screenName, config] of containerScreens) {
      if (screenName === "DEFAULT") continue;

      if (!screenNames.includes(screenName)) {
        throw new Error(
          `[@pico-ui/container]: screen ${screenName} is not a configured screen name`,
        );
      }

      screenRules.push({
        [`@screen ${screenName}`]: getScreenRules(config),
      });
    }

    const defaultConfig = theme("container.screens.DEFAULT", {
      padding: "1rem",
    } as ContainerScreen);

    addComponents({
      [".container"]: merge(
        {},
        { width: "100%" },
        theme("container.center") && {
          marginLeft: "auto",
          marginRight: "auto",
        },
        getScreenRules(defaultConfig),
        ...screenRules,
      ),
    });
  },
  {
    theme: { container: { center: true } },
    corePlugins: { container: false },
  },
);

export const picoUiContainers = {
  container: {
    screens: {
      DEFAULT: {},
      sm: { maxWidth: 510, padding: 0 },
      md: { maxWidth: 700 },
      lg: { maxWidth: 950 },
      xl: { maxWidth: 1200 },
      "2xl": { maxWidth: 1450 },
    },
  } satisfies ContainerTheme,
  screens: { sm: "576px" },
} as Record<string, unknown>;

export type { ContainerTheme } from "./types";
