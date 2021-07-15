import { isPositiveInteger, IsPowerOfTwoFunc } from './shared';

// loop
//   x = x / 2
//   until x = 1; exit if it has decimals

const TWO = 2;

export const isPowerOfTwo: IsPowerOfTwoFunc = (x: string): boolean => {
  const { DEBUG = 0 } = process.env;
  if (!isPositiveInteger(x)) {
    throw new Error(`${x} is not an integer`);
  }
  
  const xNum = Number.parseInt(x); // TODO: fix lost precision for very long integers
  
  if (DEBUG) console.debug(`${x} == 2 ^ n ?`);
  let result = false, n = 0, power: number = xNum;

  do {
    power /= TWO; n++;
    if (DEBUG) console.debug(power, n);
    
    if (Math.floor(power) !== Math.ceil(power)) break; // has decimals

    if (power === 1) {
      result = true;
      if (DEBUG) console.debug(`YES. ${x} == 2 ^ ${n}`);
    }
    
  } while (power > 1);

  if (DEBUG) console.debug(`NO. ${x} <> 2 ^ n`);
  return result;
}
