import { isPositiveInteger, IsPowerOfTwoFunc } from './shared';

// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// if   x = 2 ^ n
// then x & (x-1) = 0

const BIG_ZERO = BigInt(0);
const BIG_ONE  = BigInt(1);

const ODD_DIGITS = ['1', '3', '5', '7', '9'];

export const isPowerOfTwo: IsPowerOfTwoFunc = (x: string): boolean => { 
  if (!isPositiveInteger(x)) {
    throw new Error(`${x} is not an integer`);
  }

  // cheeky short-cut to cover many negative cases
  const lastDigit = x[x.length-1];
  if (ODD_DIGITS.includes(lastDigit)) return false;

  const xNum = BigInt(x);
  const bits = xNum & (xNum - BIG_ONE);

  return bits == BIG_ZERO; // result is an integer
}
