# 💖 pico-ui

## Mission

<!-- TODO: move this to Discussions -->
> ⚠️ This repo is under active development, but let's share a bit about what the plan is. This has been jotted down fairly quickly as I'm focusing on development, so I'll refine this in the future

My understanding is that [PicoCSS](https://picocss.com/) is a CSS library with the goal to provide minimal styles for maximum efficiency by:
- semantically styling the default HTML elements in an opinionated way
- fully featured stylesheets you can drop in from a CDN
- configure to your liking with CSS Variables
- extend the configuration even further with SASS
- minimal class overhead + a classless version of the library

[Learn about their mission, here](https://picocss.com/docs/mission)

PicoCSS is a good starting point for many projects, and with minimal additional styling, can go a long way. They themselves are quite open about [how Pico could fit your project](https://picocss.com/docs/usage-scenarios).

From practical experience, Pico _can_ grow further when combined with approaches like shadcn/ui, Catalyst, and the likes. That does mean providing defaults for (headless) component paradigms as well.

It is my opinion that Pico can scale with fairly minimal effort needed, so pico-ui's initial goal was to provide extensions to Pico to facilitate such an approach more easily. Unfortunately I stumbled upon needlessly having to copy/paste styles into utilities with quite some duplication as a result.

This is where [Tailwind](https://tailwindcss.com/) came in and proved itself incredibly useful, because of its' utility first approach and tremendous versatility and ability to be tweaked to your absolute liking.

Extending Pico OOTB with Tailwind provided its' own set of challenges, which is why I'm now developing this Tailwind plugin.

## Goals

- Start with a complete port of Pico: migrating Pico to Tailwind should "just work"
- Move the library to better leverage Tailwind's platform
- Enable users to (seamlessly) migrate from these approaches
- **It should be possible for this migration to be gradual**
- Tools made through this process should flow back into the Tailwind ecosystem
- Both future Pico and Tailwind versions need to be supported
 