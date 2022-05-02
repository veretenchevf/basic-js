const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let cats = [...arguments].flat(2);
  let catsAmount = [];
  cats.map(item =>  item==='^^' ? catsAmount.push(item): null);
  return catsAmount.length ? catsAmount.length : 0
}

module.exports = {
  countCats
};
