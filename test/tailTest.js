const tail = require("../tail");
const assert = require("chai").assert;
//Test case: check if the array matches the paramaters below as we cannot directly compare 2 arrays
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("Should return all the elements in an array except the first. Should return [2, 3, 4,5] from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
});

module.exports = tail;
