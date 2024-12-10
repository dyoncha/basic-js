const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.split('') 
    .reduce((acc, char, i, array) => {
      if (char === array[i - 1]) {
        acc[acc.length - 1].count += 1;
      } else {
        acc.push({ char, count: 1 });
      }
      return acc;
    }, []) 
    .map(item => item.count > 1 ? item.count + item.char : item.char)
    .join(''); 
}

module.exports = {
  encodeLine,
};
