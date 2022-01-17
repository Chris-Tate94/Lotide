const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  //return an empty array if array is empty or has less than 2 elements
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  //if array is an odd length
  if (array.length % 2 !== 0) {
    result = Math.ceil(array.length / 2);
  }
  // if array is even length,
  if (array.length % 2 === 0) {
    let n = array.length;
    //get the value at the second middle index
    let a2 = array[n / 2];
    //get the value at the first middle index
    let a1 = array[n / 2 - 1];
    result = [a1, a2];
  }
  return result;
};
//console.log(middle([]));

module.exports = middle;
