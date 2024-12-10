const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) {
    return arr;
  }

  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (arr[i - 1] !== 'toDelete') {
          result.pop();
          result.push('toDelete');
        }
        break;
      case '--double-next':
          if(arr[i + 1]) {
              result.push(arr[i + 1]);
          }
          break;
      case '--discard-next':
          result.push('toDelete');
          i++;
          break;
      case '--double-prev':
          if (result.length && result[result.length - 1] !== 'toDelete') {
              result.push(result[result.length - 1]);
          }
          break;
      default: 
          result.push(arr[i]);
          break;
      }
  }

  result = result.filter(item => item !== 'toDelete');

  return result;
}

module.exports = {
  transform
};
