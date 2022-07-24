/* eslint-disable no-undef */
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './practice';

test('capitalize: Easy Path 1', () => {
  expect(capitalize('bababoi')).toMatch(/^Bababoi$/);
});

test('capitalize: Easy Path 2', () => {
  expect(capitalize('sheeesh')).toMatch(/^Sheeesh$/);
});

test('capitalize: Numbers', () => {
  expect(capitalize(123)).toMatch(/^123$/);
});

test('capitalize: Numbers and Letters', () => {
  expect(capitalize('1luu')).toMatch(/^1luu$/);
});

test('capitalize: Whitespace', () => {
  expect(capitalize(' ')).toMatch(/^ $/);
});

test('reverseString: Easy Path 1', () => {
  expect(reverseString('Tom')).toMatch(/^moT$/);
});

test('reverseString: Easy Path 2', () => {
  expect(reverseString('Anna')).toMatch(/^annA$/);
});

test('reverseString: Numbers', () => {
  expect(reverseString(123)).toMatch(/^321$/);
});

test('calculator add: 42 + 69', () => {
  expect(calculator.add(42, 69)).toEqual(111);
});

test('calculator add: 33 + 6.9', () => {
  expect(calculator.add(33, 6.9)).toEqual(39.9);
});

test('calculator subtract: 999999999 - 1', () => {
  expect(calculator.subtract(999999999, 1)).toEqual(999999998);
});

test('calculator subtract: 0 - 0.005', () => {
  expect(calculator.subtract(0, 0.005)).toEqual(-0.005);
});

test('calculator divide: 99 / 3', () => {
  expect(calculator.divide(99, 3)).toEqual(33);
});

test('calculator divide: 100 / 3', () => {
  expect(calculator.divide(100, 3)).toBeCloseTo(33.33);
});

test('calculator divide: 20 / 0.5', () => {
  expect(calculator.divide(20, 0.5)).toEqual(40);
});

test('calculator multiply: 4 * 4', () => {
  expect(calculator.multiply(4, 4)).toEqual(16);
});

test('calculator multiply: 100 * 0.3', () => {
  expect(calculator.multiply(100, 0.3)).toEqual(30);
});

test('caesarCipher: Easy Path 1', () => {
  expect(caesarCipher('tom', 1)).toMatch(/^upn$/);
});

test('caesarCipher: Easy Path 2', () => {
  expect(caesarCipher('tom', 5)).toMatch(/^ytr$/);
});

test('caesarCipher: wrapping from z to a', () => {
  expect(caesarCipher('z', 1)).toMatch(/^a$/);
});

test('caesarCipher: wrapping from t to i', () => {
  expect(caesarCipher('t', 15)).toMatch(/^i$/);
});

test('caesarCipher: upper case', () => {
  expect(caesarCipher('A', 2)).toMatch(/^C$/);
});

test('caesarCipher: upper case plus wrapping', () => {
  expect(caesarCipher('Z', 1)).toMatch(/^A$/);
});

test('caesarCipher: special character .', () => {
  expect(caesarCipher('oh...', 2)).toMatch(/^qj...$/);
});

test('caesarCipher: special character "', () => {
  expect(caesarCipher('"something"', 25)).toMatch(/^"rnldsghmf"$/);
});

test('caesarCipher: special character [whitespace]', () => {
  expect(caesarCipher('my name', 10)).toMatch(/^wi xkwo$/);
});

test('caesarCipher: no shift', () => {
  expect(caesarCipher('Hello', 0)).toMatch(/^Hello$/);
});

test('caesarCipher: invalid shift 1', () => {
  expect(() => caesarCipher('error', 26)).toThrow('invalid shift');
});

test('caesarCipher: invalid shift 2', () => {
  expect(() => caesarCipher('error', -1)).toThrow('invalid shift');
});

test('caesarCipher: empty', () => {
  expect(caesarCipher('')).toMatch(/^$/);
});

test('analyzeArray: Easy Path 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyzeArray: Easy Path 2', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('analyzeArray: negative number', () => {
  expect(analyzeArray([-42, 77])).toEqual({
    average: 17.5,
    min: -42,
    max: 77,
    length: 2,
  });
});

test('analyzeArray: nothing', () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});

test('analyzeArray: one item', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test('analyzeArray: no array', () => {
  expect(() => analyzeArray('1, 2, 3')).toThrow('no array');
});
