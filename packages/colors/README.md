# 💖 @pico-ui/colors 💖

> *[TailwindCSS](https://tailwindcss.com) `colors` theme preset using PicoCSS colors*

![NPM Version](https://img.shields.io/npm/v/%40pico-ui%2Fcolors?style=flat&color=ffd7e5) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jeroenptrs/pico-ui/unit-tests.yml)


---

Outside reimplementing PicoCSS as a Tailwind plugin, we noticed there's multiple times where we just want to use PicoCSS colors. Even in existing Tailwind projects, in new Tailwind projects that didn't use Pico, you name it.

***(Warning, slight bias ahead! 😅)*** While Tailwind has beautiful colors in their theming, [Pico's colors personally takes the cake](https://picocss.com/docs/colors).

This package provides a frictionless way to not only use PicoCSS colors in a Tailwind project, but to also override Tailwind's existing colors with those of PicoCSS.

## Installation

Install the plugin as a `devDependency`. You are **required** to install `tailwindcss` separately, as well.

```sh
pnpm i -D tailwindcss @pico-ui/colors
npm i -D tailwindcss @pico-ui/colors
yarn add -D tailwindcss @pico-ui/colors
```

## Usage

Add the `colors` property to the theme field of your `tailwind.config` file. The following example is in Typescript:

```typescript
import colors from "@pico-ui/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors,
  },
} satisfies Config;
```

Worthy of note is that the goal of this package is to replace the existing Tailwind colors. If you only need a couple, feel free to pick and choose!

### Mix

To mix hex colors, you can import the util function `mix`. Note that right now, these must be strings that consist of the "#" symbol followed by 6 hex characters (and the value will also be returned as such).

We'll note a TODO to support more formats.

```typescript
import colors from "@pico-ui/colors";
import { mix } from "@pico-ui/colors/lib/mix";

const myMixedColor = mix(colors.slate[950], colors.slate[900]);
```
