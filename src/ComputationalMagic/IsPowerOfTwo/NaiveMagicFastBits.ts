import { isPositiveInteger, IsPowerOfTwoFunc } from './shared';

// if   x = 2 ^ n
// then x & (x-1) = 0

export const isPowerOfTwo: IsPowerOfTwoFunc = (x: string): boolean => { 
  if (!isPositiveInteger(x)) {
    throw new Error(`${x} is not an integer`);
  }

  const xNum: any = x;
  const bits = xNum & (xNum - 1);

  return bits === 0; // result is an integer
}
