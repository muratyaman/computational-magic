import { isPositiveInteger, IsPowerOfTwoFunc } from './shared';

// if   x = 2 ^ n
// then n = log2(x)

export const isPowerOfTwo: IsPowerOfTwoFunc = (x: string): boolean => {
  if (!isPositiveInteger(x)) {
    throw new Error(`${x} is not an integer`);
  }
  
  const xNum = Number.parseInt(x); // TODO: fix lost precision for very long integers

  const n = Math.log2(xNum);

  return Math.floor(n) === Math.ceil(n); // result is an integer
}
