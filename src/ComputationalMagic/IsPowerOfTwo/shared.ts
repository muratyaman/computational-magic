export type IsPowerOfTwoFunc = (x: string) => boolean;

const PATTERN_DIGITS_ONLY = /^\d+$/;

export function isPositiveInteger(x: string): boolean {
  return PATTERN_DIGITS_ONLY.test(x);
}
