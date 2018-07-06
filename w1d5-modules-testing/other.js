var localY = 10;
var localZ = 20;

function addBothNumbers() {
  return localY + localZ;
}

function guessNumbers(a, b) {
  return a === localY && b === localZ;
}

// console.log("We're in other.js, localY = " + localY);

// module.exports.exportedY = localY;
// module.exports.exportedZ = localZ;
module.exports.addThem = addBothNumbers;
module.exports.guess = guessNumbers;

// console.log(module);