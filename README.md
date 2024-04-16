# 💖 picoui

## CSS classes based on pico

A set of classes based on the semantic UI provided by [pico](https://github.com/picocss/pico) that intends with as minimal extension to pico as possible provide a toolkit for building on top of headless components.

## Installation

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jeroenpeeters/picoui@next/css/ui/picoui.min.css" />
```

### npm

```shell
pnpm add @picocss/pico @jeroenpeeters/picoui
yarn add @picocss/pico @jeroenpeeters/picoui
npm add @picocss/pico @jeroenpeeters/picoui
```

## Usage

As the Installation guides already give away, picoui is not intended to be used in isolation. Please make sure pico itself is installed as well.

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark" />
    <link rel="stylesheet" href="css/pico.min.css">
    <link rel="stylesheet" href="css/picoui.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <main class="container">
      <div class="card">
        <h1>Hello world!</h1>
      </div>
    </main>
  </body>
</html>
```
