import { isPositiveInteger, IsPowerOfTwoFunc } from './shared';

// loop for i
//   power = 2 ^ i
//   until power <= x

export const isPowerOfTwo: IsPowerOfTwoFunc = (x: string): boolean => {
  if (!isPositiveInteger(x)) {
    throw new Error(`${x} is not an integer`);
  }
  
  const xNum = Number.parseInt(x); // TODO: fix lost precision for very long integers
  
  return xIsPowerOfY_bruteForce(xNum, 2);
}

export function xIsPowerOfY_bruteForce(x: number, y: number): boolean {
  const { DEBUG = 0 } = process.env;
  if (DEBUG) console.debug(`${x} == ${y} ^ n ?`);
  let result = false, n = 0, power: number = 1;
  
  do {
    power *= y; n++;
    if (DEBUG) console.debug(power, n);
    if (power === x) {
      result = true;
      if (DEBUG) console.debug(`YES. ${x} == ${y} ^ ${n}`);
    }
  } while (power <= x);

  if (DEBUG) console.debug(`NO. ${x} <> ${y} ^ n`);
  return result;
}
