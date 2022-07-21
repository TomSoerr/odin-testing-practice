/* eslint-disable no-undef */
import { capitalize, reverseString, calculator } from './practice';

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
