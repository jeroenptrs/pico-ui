export default {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  red: {
    950: "#1c0d06",
    900: "#30130a",
    850: "#45150c",
    800: "#5c160d",
    750: "#72170f",
    700: "#861d13",
    650: "#9b2318",
    600: "#af291d",
    550: "#c52f21",
    500: "#d93526",
    450: "#ee402e",
    400: "#f06048",
    350: "#f17961",
    300: "#f38f79",
    250: "#f5a390",
    200: "#f5b7a8",
    150: "#f6cabf",
    100: "#f8dcd6",
    50: "#faeeeb",
    get DEFAULT() {
      return this[550];
    },
  },
  pink: {
    // Actually way more like TWs Rose palette
    950: "#25060c",
    900: "#380916",
    850: "#4b0c1f",
    800: "#5f0e28",
    750: "#740f31",
    700: "#88143b",
    650: "#9d1945",
    600: "#b21e4f",
    550: "#c72259",
    500: "#d92662",
    450: "#f42c6f",
    400: "#f6547e",
    350: "#f7708e",
    300: "#f8889e",
    250: "#f99eae",
    200: "#f9b4be",
    150: "#f9c8ce",
    100: "#f9dbdf",
    50: "#fbedef",
    get DEFAULT() {
      return this[500];
    },
  },
  // TODO: do something with these
  // pink: { // tailwind's pink
  //   50: '#fdf2f8',
  //   100: '#fce7f3',
  //   200: '#fbcfe8',
  //   300: '#f9a8d4',
  //   400: '#f472b6',
  //   500: '#ec4899',
  //   600: '#db2777',
  //   700: '#be185d',
  //   800: '#9d174d',
  //   900: '#831843',
  //   950: '#500724',
  // },
  fuchsia: {
    950: "#230518",
    900: "#360925",
    850: "#480b33",
    800: "#5c0d41",
    750: "#700e4f",
    700: "#84135e",
    650: "#98176d",
    600: "#ac1c7c",
    550: "#c1208b",
    500: "#d9269d",
    450: "#ed2aac",
    400: "#f748b7",
    350: "#f869bf",
    300: "#f983c7",
    250: "#fa9acf",
    200: "#f9b1d8",
    150: "#f9c6e1",
    100: "#f9daea",
    50: "#fbedf4",
    get DEFAULT() {
      return this[550];
    },
  },
  purple: {
    950: "#1e0820",
    900: "#2d0f33",
    850: "#3d1545",
    800: "#4d1a57",
    750: "#5e206b",
    700: "#6f277d",
    650: "#802e90",
    600: "#9236a4",
    550: "#aa40bf",
    500: "#b645cd",
    450: "#c652dc",
    400: "#cd68e0",
    350: "#d47de4",
    300: "#db90e8",
    250: "#e2a3eb",
    200: "#e7b6ee",
    150: "#edc9f1",
    100: "#f2dcf4",
    50: "#f8eef9",
    get DEFAULT() {
      return this[600];
    },
  },
  violet: {
    950: "#190928",
    900: "#251140",
    850: "#321856",
    800: "#3f1e6d",
    750: "#4d2585",
    700: "#5b2d9c",
    650: "#6935b3",
    600: "#7540bf",
    550: "#8352c5",
    500: "#9062ca",
    450: "#9b71cf",
    400: "#a780d4",
    350: "#b290d9",
    300: "#bd9fdf",
    250: "#c9afe4",
    200: "#d3bfe8",
    150: "#decfed",
    100: "#e8dff2",
    50: "#f3eff7",
    get DEFAULT() {
      return this[600];
    },
  },
  indigo: {
    950: "#110b31",
    900: "#181546",
    850: "#1f1e5e",
    800: "#272678",
    750: "#2f2f92",
    700: "#3838ab",
    650: "#4040bf",
    600: "#524ed2",
    550: "#655cd6",
    500: "#7569da",
    450: "#8577dd",
    400: "#9486e1",
    350: "#a294e5",
    300: "#b0a3e8",
    250: "#bdb2ec",
    200: "#cac1ee",
    150: "#d8d0f1",
    100: "#e5e0f4",
    50: "#f2f0f9",
    get DEFAULT() {
      return this[600];
    },
  },
  blue: {
    950: "#080f2d",
    900: "#0c1a41",
    850: "#0e2358",
    800: "#0f2d70",
    750: "#0f3888",
    700: "#1343a0",
    650: "#184eb8",
    600: "#1d59d0",
    550: "#2060df",
    500: "#3c71f7",
    450: "#5c7ef8",
    400: "#748bf8",
    350: "#8999f9",
    300: "#9ca7fa",
    250: "#aeb5fb",
    200: "#bfc3fa",
    150: "#d0d2fa",
    100: "#e0e1fa",
    50: "#f0f0fb",
    get DEFAULT() {
      return this[550];
    },
  },
  azure: {
    950: "#04121d",
    900: "#061e2f",
    850: "#052940",
    800: "#033452",
    750: "#014063",
    700: "#014c75",
    650: "#015887",
    600: "#02659a",
    550: "#0172ad",
    500: "#017fc0",
    450: "#018cd4",
    400: "#029ae8",
    350: "#01aaff",
    300: "#51b4ff",
    250: "#79c0ff",
    200: "#9bccfd",
    150: "#b7d9fc",
    100: "#d1e5fb",
    50: "#e9f2fc",
    get DEFAULT() {
      return this[550];
    },
  },
  get sky() {
    // azure -> sky?
    return this.azure;
  },
  cyan: {
    // aside from 50-200, this falls way more in line with TWs teal
    950: "#041413",
    900: "#051f1f",
    850: "#052b2b",
    800: "#043737",
    750: "#014343",
    700: "#015050",
    650: "#025d5d",
    600: "#046a6a",
    550: "#047878",
    500: "#058686",
    450: "#059494",
    400: "#05a2a2",
    350: "#0ab1b1",
    300: "#0ac2c2",
    250: "#0ccece",
    200: "#25dddd",
    150: "#3deceb",
    100: "#58faf9",
    50: "#c3fcfa",
    get DEFAULT() {
      return this[550];
    },
  },
  // TODO: do something with these
  // cyan: { // tailwind's cyan
  //   50: "#ecfeff",
  //   100: "#cffafe",
  //   200: "#a5f3fc",
  //   300: "#67e8f9",
  //   400: "#22d3ee",
  //   500: "#06b6d4",
  //   600: "#0891b2",
  //   700: "#0e7490",
  //   800: "#155e75",
  //   900: "#164e63",
  //   950: "#083344",
  // },
  get teal() {
    return this.cyan;
  },
  jade: {
    950: "#04140c",
    900: "#052014",
    850: "#042c1b",
    800: "#033823",
    750: "#00452b",
    700: "#015234",
    650: "#005f3d",
    600: "#006d46",
    550: "#007a50",
    500: "#00895a",
    450: "#029764",
    400: "#00a66e",
    350: "#00b478",
    300: "#00c482",
    250: "#00cc88",
    200: "#21e299",
    150: "#39f1a6",
    100: "#70fcba",
    50: "#cbfce1",
    get DEFAULT() {
      return this[550];
    },
  },
  get emerald() {
    // jade -> emerald?
    return this.jade;
  },
  green: {
    950: "#0b1305",
    900: "#131f07",
    850: "#152b07",
    800: "#173806",
    750: "#1a4405",
    700: "#205107",
    650: "#265e09",
    600: "#2c6c0c",
    550: "#33790f",
    500: "#398712",
    450: "#409614",
    400: "#47a417",
    350: "#4eb31b",
    300: "#55c21e",
    250: "#5dd121",
    200: "#62d926",
    150: "#77ef3d",
    100: "#95fb62",
    50: "#d7fbc1",
    get DEFAULT() {
      return this[500];
    },
  },
  lime: {
    950: "#101203",
    900: "#191d03",
    850: "#202902",
    800: "#273500",
    750: "#304100",
    700: "#394d00",
    650: "#435a00",
    600: "#4d6600",
    550: "#577400",
    500: "#628100",
    450: "#6c8f00",
    400: "#779c00",
    350: "#82ab00",
    300: "#8eb901",
    250: "#99c801",
    200: "#a5d601",
    150: "#b2e51a",
    100: "#c1f335",
    50: "#defc85",
    get DEFAULT() {
      return this[200];
    },
  },
  yellow: {
    950: "#141103",
    900: "#1f1c02",
    850: "#2b2600",
    800: "#363100",
    750: "#423c00",
    700: "#4e4700",
    650: "#5b5300",
    600: "#685f00",
    550: "#756b00",
    500: "#827800",
    450: "#908501",
    400: "#9e9200",
    350: "#ad9f00",
    300: "#bbac00",
    250: "#caba01",
    200: "#d9c800",
    150: "#e8d600",
    100: "#f2df0d",
    50: "#fdf1b4",
    get DEFAULT() {
      return this[100];
    },
  },
  amber: {
    950: "#161003",
    900: "#231a03",
    850: "#312302",
    800: "#3f2d00",
    750: "#4d3700",
    700: "#5b4200",
    650: "#694d00",
    600: "#785800",
    550: "#876400",
    500: "#977000",
    450: "#a77c00",
    400: "#b78800",
    350: "#c79400",
    300: "#d8a100",
    250: "#e8ae01",
    200: "#ffbf00",
    150: "#fecc63",
    100: "#fddea6",
    50: "#fcefd9",
    get DEFAULT() {
      return this[200];
    },
  },
  // pumpkin
  pumpkin: {
    950: "#180f04",
    900: "#271805",
    850: "#372004",
    800: "#482802",
    750: "#593100",
    700: "#693a00",
    650: "#7a4400",
    600: "#8b4f00",
    550: "#9c5900",
    500: "#ad6400",
    450: "#bf6e00",
    400: "#d27a01",
    350: "#e48500",
    300: "#ff9500",
    250: "#ffa23a",
    200: "#feb670",
    150: "#fcca9b",
    100: "#fcdcc1",
    50: "#fceee3",
    get DEFAULT() {
      return this[300];
    },
  },
  orange: {
    950: "#1b0d06",
    900: "#2d1509",
    850: "#411a0a",
    800: "#561e0a",
    750: "#6b220a",
    700: "#7f270b",
    650: "#942d0d",
    600: "#a83410",
    550: "#bd3c13",
    500: "#d24317",
    450: "#e74b1a",
    400: "#f45d2c",
    350: "#f56b3d",
    300: "#f68e68",
    250: "#f8a283",
    200: "#f8b79f",
    150: "#f8cab9",
    100: "#f9dcd2",
    50: "#faeeea",
    get DEFAULT() {
      return this[500];
    },
  },
  sand: {
    950: "#111110",
    900: "#1c1b19",
    850: "#272622",
    800: "#32302b",
    750: "#3d3b35",
    700: "#49463f",
    650: "#55524a",
    600: "#615e55",
    550: "#6e6a60",
    500: "#7b776b",
    450: "#888377",
    400: "#959082",
    350: "#a39e8f",
    300: "#b0ab9b",
    250: "#beb8a7",
    200: "#ccc6b4",
    150: "#dad4c2",
    100: "#e8e2d2",
    50: "#f2f0ec",
    get DEFAULT() {
      return this[200];
    },
  },
  get stone() {
    // sand -> stone?
    return this.sand;
  },
  grey: {
    950: "#111111",
    900: "#1b1b1b",
    850: "#262626",
    800: "#303030",
    750: "#3b3b3b",
    700: "#474747",
    650: "#525252",
    600: "#5e5e5e",
    550: "#6a6a6a",
    500: "#777777",
    450: "#808080",
    400: "#919191",
    350: "#9e9e9e",
    300: "#ababab",
    250: "#b9b9b9",
    200: "#c6c6c6",
    150: "#d4d4d4",
    100: "#e2e2e2",
    50: "#f1f1f1",
    get DEFAULT() {
      return this[300];
    },
  },
  get gray() {
    return this.grey;
  },
  zinc: {
    950: "#0f1114",
    900: "#191c20",
    850: "#23262c",
    800: "#2d3138",
    750: "#373c44",
    700: "#424751",
    650: "#4d535e",
    600: "#5c6370",
    550: "#646b79",
    500: "#6f7887",
    450: "#7b8495",
    400: "#8891a4",
    350: "#969eaf",
    300: "#a4acba",
    250: "#b3b9c5",
    200: "#c2c7d0",
    150: "#d1d5db",
    100: "#e0e3e7",
    50: "#f0f1f3",
    get DEFAULT() {
      return this[550];
    },
  },
  slate: {
    950: "#0e1118",
    900: "#181c25",
    850: "#202632",
    800: "#2a3140",
    750: "#333c4e",
    700: "#3d475c",
    650: "#48536b",
    600: "#525f7a",
    550: "#5d6b89",
    500: "#687899",
    450: "#7385a9",
    400: "#8191b5",
    350: "#909ebe",
    300: "#a0acc7",
    250: "#b0b9d0",
    200: "#bfc7d9",
    150: "#cfd5e2",
    100: "#dfe3eb",
    50: "#eff1f4",
    get DEFAULT() {
      return this[600];
    },
  },
};
