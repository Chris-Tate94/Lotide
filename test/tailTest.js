const assertEqual = require("../assertEqual");
const tail = require("../tail");
//Test case: check if the array matches the paramaters below as we cannot directly compare 2 arrays
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;
