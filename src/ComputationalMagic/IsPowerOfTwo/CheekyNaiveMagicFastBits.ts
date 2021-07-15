import { isPositiveInteger, IsPowerOfTwoFunc } from './shared';

// if   x = 2 ^ n
// then x & (x-1) = 0

const ODD_DIGITS = ['1', '3', '5', '7', '9'];

export const isPowerOfTwo: IsPowerOfTwoFunc = (x: string): boolean => { 
  if (!isPositiveInteger(x)) {
    throw new Error(`${x} is not an integer`);
  }

  // cheeky short-cut to cover many negative cases
  const lastDigit = x[x.length-1];
  if (ODD_DIGITS.includes(lastDigit)) return false;

  const xNum: any = x;
  const bits = xNum & (xNum - 1);

  return bits === 0; // result is an integer
}
