# computational-magic
tutorial showing simple math problems and different approaches leading to different solutions

# problem 1:

Check whether a given huge number is a power of two or not.

**Mathematics hint:** a power of two is a number of the form 2<sup>n</sup> where `n` is a positive integer; e.g. when `n` is `4`, `2` is multiplied by itself `4` times: `2 * 2 * 2 * 2`.

# solutions for problem 1:

## NaiveBruteForceDivision

```
loop
  x = x / 2
  until x = 1; exit if it has decimals
```

## NaiveGeneralistBruteForceMultiplication

```
define a general function
use parameter y instead of 2
loop for i = 0, i++
  power = y ^ i
  until power <= x

define a custom function
call function above with 2
```

## NaiveElegantFastMath

```
if   x = 2 ^ n
then n = log2(x)
n is an integer
```

## NaiveMagicFastBits

we rely on bitwise 'and' operator:

see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND

```
if   x = 2 ^ n
then x & (x-1) = 0

e.g. simplified example working with 8 bits:
   1 is '00000001'
   2 is '00000010'
   4 is '00000100'
   8 is '00001000'
  16 is '00010000'
  32 is '00100000'

as we notice, any power of 2 has only one bit as 1, other bits are zero

let's check 16
  16 is '00010000'
  15 is '00001111'
&
--------------------------
        '00000000' => zero

let's check: 10
  10 is '00001010'
   9 is '00001001'
&
------------------------------
        '00001000' => not zero
```

## CheekyNaiveMagicFastBits

```
if last digit is odd, return false
continue as NaiveMagicFastBits
```

## SpecialistCheekyMagicFastBits

we will rely on `BigInt`

see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

```
like CheekyNaiveMagicFastBits
but we use `BigInt()` to fix loss of precision
```

# install

```sh
npm i
```

# build

```sh
npm run build
```

# run tests

```sh
npm run tests
npm run tests:debug
npm run tests:coverage
```
