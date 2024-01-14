# testing-practice

This project showcases the basics of test-driven development by unit testing multiple functions with Jest. The following functions are contained in their own modules:

- `capitalize(str)`: Takes a string and returns it with the first character capitalized.
- `reverseString(str)`: Takes a string and returns it reversed.
- `calculator`: Object that contains functions for the basic operations: add(), subtract(), divide(), and multiply(). Each of these functions takes two numbers and returns the correct calculation.
- `caesarCipher(str, int)`: Takes a string and an integer (the "shift factor") and returns it with each character “shifted” by the integer.
- `analyzeArray(arr)`: Takes an array of numbers and returns an object with the following properties: average, min, max, and length.

The `tests.test.js` file contains Jest tests that ensure each function returns what is expected of them.

## Lessons Learned

- Filtering out non-alphabet characters with regular expressions.
- Creating tests to plan out the expectations and outcomes of specific code modules.
- Practicing DRY principles through test-driven development.
- Using .toEqual() for matching object values rather than .toBe(), which does not recursively check every field of an object or array.
