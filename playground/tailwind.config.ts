import type { Config } from 'tailwindcss';
import colors from '@pico-ui/colors';

export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  },
  experimental: {
    optimizeUniversalDefaults: true
  }
} satisfies Config

