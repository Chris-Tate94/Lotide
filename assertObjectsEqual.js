const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require("util").inspect;
  //console.log(`Example label: ${inspect(obj1)}`);
  if (!eqObjects(obj1, obj2)) {
    return console.log(
      `🔴🔴🔴 Assertion Failed: [${inspect(obj1)}] !== [${inspect(obj2)}]`
    );
  }
  return console.log(
    `🟢🟢🟢 Assertion Passed: [${inspect(obj1)}] === [${inspect(obj2)}]`
  );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), true); // TRUE
// assertEqual(eqObjects(ab, abc), true); // FALSE

assertObjectsEqual(ab, ba);
