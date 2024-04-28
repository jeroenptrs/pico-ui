// https://gist.github.com/albertms10/5a8b83e436a1689aa4b425ec22058301
export type Paths<T> = T extends Array<infer U>
  ? `${Paths<U>}`
  : T extends object
  ? {
      [K in keyof T & (string | number)]: K extends string
        ? `${K}` | `${K}.${Paths<T[K]>}`
        : never;
    }[keyof T & (string | number)]
  : never;
