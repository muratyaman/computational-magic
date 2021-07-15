import { expect } from 'chai';
import { ComputationalMagic as cm } from '../../src';

describe('ComputationalMagic', () => {
  describe('IsPowerOfTwo', () => {

    const cases: Array<[string, string, boolean, boolean]> = [
      ['false', '-16', false, true], // throws error
      ['false', '2.5', false, true], // throws error
      ['true', '2', true, false],
      ['false', '3', false, false],
      ['true', '128', true, false],
      ['true', '2048', true, false],
      ['false', '2049', false, false],
      ['true', '1073741824', true, false],
      ['false', '2147483649', false, false],
      ['false', '1441151880758559', false, false],
      ['true', '144115188075855870', true, false],
      ['true', '1267650600228229401496703205376', true, false],
      ['false', '123456789123456789123456789123456789', false, false],
    ];

    setExpections('NaiveBruteForceDivision', cm.IsPowerOfTwo.NaiveBruteForceDivision.isPowerOfTwo);
    setExpections('NaiveGeneralistBruteForceMultiplication', cm.IsPowerOfTwo.NaiveGeneralistBruteForceMultiplication.isPowerOfTwo);
    setExpections('NaiveElegantFastMath', cm.IsPowerOfTwo.NaiveElegantFastMath.isPowerOfTwo);
    setExpections('NaiveMagicFastBits', cm.IsPowerOfTwo.NaiveMagicFastBits.isPowerOfTwo);
    setExpections('CheekyNaiveMagicFastBits', cm.IsPowerOfTwo.CheekyNaiveMagicFastBits.isPowerOfTwo);
    setExpections('SpecialistCheekyMagicFastBits', cm.IsPowerOfTwo.SpecialistCheekyMagicFastBits.isPowerOfTwo);
  
    function setExpections(desc: string, f: cm.IsPowerOfTwo.IsPowerOfTwoFunc) {
      describe(desc, () => {
        cases.map(([strOut, inNum, boolOut, expectError]) => {
          if (expectError) {
            it(`should throw error for ${inNum}`, () => {
              expect(() => { f(inNum); }).to.throw();
            });
          } else {
            it(`should return ${strOut} for ${inNum}`, () => {
              expect(f(inNum)).to.eq(boolOut);
            });
          }
        });
      });
    }

  });
});
