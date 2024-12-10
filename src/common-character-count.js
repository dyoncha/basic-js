const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const s1Array = Array.from(s1);
  const s2Array = Array.from(s2);
  
  s1Array.forEach((el) => {
    if (s2Array.includes(el)) {
      result += 1;
      s2Array.splice(s2Array.indexOf(el), 1);
    }
  });
      
  return result;
}

module.exports = {
  getCommonCharacterCount
};
