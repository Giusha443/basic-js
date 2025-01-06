const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  throw new NotImplementedError("Not implemented");
  // return matrix
  //   .flatMap((x) => x)
  //   .filter((x) => x >= 0)
  //   .reduce((acc, i) => acc + Number(i), 0); // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum,
};
