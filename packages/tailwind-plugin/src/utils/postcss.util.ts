export const postcss = {
  "postcss-replace": {
    pattern: /(--tw|\*)/g,
    data: {
      "--tw": "--pico",
    },
  },
};
