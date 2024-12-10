const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = String(n);
  const digits = numStr.split('');

  const numbers = digits.map((digit) => {
    return +numStr.replace(digit, '');
  });

  return numbers.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
