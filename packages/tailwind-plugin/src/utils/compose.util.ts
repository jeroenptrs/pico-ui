export function compose<T extends unknown[]>(
  ...fns: ((...params: T) => void)[]
) {
  return function (...params: T) {
    for (const fn of fns) {
      fn(...params);
    }
  };
}
