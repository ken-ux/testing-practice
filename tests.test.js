const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");

test("Capitalize first character of a string", () => {
  expect(capitalize("alfred")).toBe("Alfred");
});

test("Reverse a string", () => {
  expect(reverseString("alfred")).toBe("derfla");
});

test("Add two numbers together", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract a number from another number", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("Divide a number by another number", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("Multiply two numbers together", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("Shift the characters in a string by a shift factor", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("Keep the same case after shifting characters in a string", () => {
  expect(caesarCipher("aBc", 12)).toBe("mNo");
});

test("Keep punctuation when shifting characters in a string", () => {
  expect(caesarCipher("abc'aasd'", 5)).toBe("fgh'ffxi'");
});

test("Create an object with properties defined by the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
