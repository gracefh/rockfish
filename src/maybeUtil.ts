/* 
  Monadic functions for dealing with undefined values.
  Saves us a lot of boilerplate with undefined checks that make the code
  harder to read.
*/
export const maybeAdd = (a: number | undefined, b: number | undefined) =>
  a !== undefined && b !== undefined ? a + b : undefined;

export const maybeSub = (a: number | undefined, b: number | undefined) =>
  a !== undefined && b !== undefined ? a - b : undefined;

export const maybeMul = (a: number | undefined, b: number | undefined) =>
  a !== undefined && b !== undefined ? a * b : undefined;

export const maybeDiv = (a: number | undefined, b: number | undefined) =>
  a !== undefined && b !== undefined ? a / b : undefined;

export const maybeMax = (xs: (number | undefined)[]) =>
  xs.every((x) => x !== undefined) ? Math.max(...(xs as number[])) : undefined;

export const maybeMin = (xs: (number | undefined)[]) =>
  xs.every((x) => x !== undefined) ? Math.min(...(xs as number[])) : undefined;

export const maybe = <T, U>(x: T | undefined, f: (x: T) => U): U | undefined =>
  x !== undefined ? f(x) : undefined;
