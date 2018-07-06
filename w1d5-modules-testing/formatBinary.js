var leftPad = require('left-pad');

function formatBinary(number) {
  var binaryString = number.toString(2);
  return leftPad(binaryString, 8, '0');
}

module.exports = formatBinary;
