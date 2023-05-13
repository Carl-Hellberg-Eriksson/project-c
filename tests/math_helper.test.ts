import {sum, isNegative, multiply, thrower } from "../helpers/math_helper";
// const sum = require("../helpers/math_helper").sum;
// const multiply = require("../helpers/math_helper").multiply;
// const isNegative = require("../helpers/math_helper").isNegative;

// Matches
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + (-2) to equal -1', () => {
  expect(sum(1, -2)).toBe(-1);
});

test('multiply 1 + 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiply 1 + (-2) to equal -2', () => {
  expect(multiply(1, -2)).toBe(-2);
});

test('multiply 2 + 0 to equal 0', () => {
  expect(multiply(1, 0)).toBe(0);
});

// Not-matches
test('multiply 2 + 0 to equal 0', () => {
  expect(multiply(1, 0)).not.toBe(3);
});

// Null

// Undefined

// Defined

// Truthy // Falsy
test('-2 to be negative', () => {
  expect(isNegative(-2)).toBeTruthy;
})
test('2 to not be negative', () => {
  expect(isNegative(2)).toBeFalsy;
})

test('Some common number comparisons', () => {
  const value = 4;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  // Special case for floating point
  expect(0.1 + 0.2).toBeCloseTo(0.3);
})

// Strings
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

test('that the thrower throws', () => {
  //Notice the function wrapping
  expect(() => thrower()).toThrow();
})
