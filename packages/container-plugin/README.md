# 💖 @pico-ui/container-plugin

> *A [TailwindCSS](https://tailwindcss.com) plugin reimplementing `.container` with configurable `maxWidth`*

![NPM Version](https://img.shields.io/npm/v/%40pico-ui%2Fcontainer-plugin?style=flat&color=ffd7e5)

---

While reimplementing PicoCSS as a Tailwind plugin, we noticed a slight discrepancy between the container components of Tailwind and PicoCSS. The current Tailwind container does not have a way to separate maxWidth container values and minWidth viewport values.

This, however was needed to successfully implement the PicoCSS container. As a result, some modifications have been made to the way `container` is configured in Tailwind's theming.

### Notable Changes
- `container.screens` now bases itself wholly on the base `screens`, any screen identifiers in container.screens that don't match **will throw an error**
- `container.padding` is merged into container.screens as a property `padding` for each screen
- `maxWidth` is now a configurable property for each screen

## Installation

Install the plugin as a `devDependency`. You are **required** to install `tailwindcss` separately, as well.

```sh
pnpm i -D tailwindcss @pico-ui/container-plugin
npm i -D tailwindcss @pico-ui/container-plugin
yarn add -D tailwindcss @pico-ui/container-plugin
```

Add the `container` plugin to your `tailwind.config` file. The following example is in Typescript:

```typescript
import container from "@pico-ui/container-plugin";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [container],
  theme: {
    extend: {},
  },
} satisfies Config;
```

Worthy of note is that this plugin will automatically turn off the container corePlugin, as it reimplements that same plugin. 

## Usage

### Add/extend existing configuration

To configure values for each viewport or a selected portion, you can now define a `container` configuration in the `extend` portion of your theme.

The configuration is somewhat similar to the original Tailwind container, as it contains a `center` and a `screens` property. Centering is either true or false (on or off, respectively) and is set to true by default.

Screens is an object with all viewports defined in `screens` as potential keys, each containing a `padding` and `maxWidth` property that can be set or left blank.  
Both padding and maxWidth accept a number or string value. Strings will be accepted as-is, numbers will be converted to `${number}px`.

Screens also contains a way to configure the default container that is not targeted by any viewport, the plugin looks at a special `DEFAULT` viewport in the container's `screens` section. Default has no maxWidth and 1rem of horizontal padding by default.

An example config all the discussed topics:

```typescript
import container, { picoUiContainers } from "@pico-ui/container-plugin";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [container],
  theme: {
    extend: {
      container: {
        center: false,
        screens: {
          DEFAULT: { maxWidth: "80vw" },
          sm: { maxWidth: "300px", padding: 0 },
          md: { maxWidth: 300 },
          // ... lg, xl, 2xl
        }
      },
    },
  },
} satisfies Config;
```

### PicoCSS containers

This is a drop in configuration for your `.container` classes to behave exactly like the ones from PicoCSS, for more info take a look at their [container overview](https://picocss.com/docs/container).

Simply add the `picoUiContainers` property to the theme's `extend` portion, as follows:

```typescript
import container, { picoUiContainers } from "@pico-ui/container-plugin";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [container],
  theme: {
    extend: {
      ...picoUiContainers,
    },
  },
} satisfies Config;
```

### Complete reset

Should you want to start with a complete blank slate, you can configure container straight in the theme instead of under `extend`.

Do note that:
- If you define new viewports, to define them both in `screens` and `container.screens`
- DEFAULT will default to a padding of 1rem when no value is passed to it. You can remove its' padding by passing it an empty object

An example config setting completely new viewports:

```typescript
import container, { picoUiContainers } from "@pico-ui/container-plugin";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [container],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    container: {
      center: true,
      screens: {
        DEFAULT: {},
        tablet: { maxWidth: 620 },
        laptop: { maxWidth: 1000 },
        desktop: { maxWidth: 1200 },
      },
    },
  },
} satisfies Config;
```
