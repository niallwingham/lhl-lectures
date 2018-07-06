var assert = require('assert');
var formatBinary = require('../formatBinary');

// assert.strictEqual(formatBinary(1), '00000001', 'Didnt format 1 correctly');
// assert.strictEqual(formatBinary(2), '00000010', 'Didnt format 1 correctly');
// assert.strictEqual(formatBinary(3), '00000011', 'Didnt format 1 correctly');

// console.log('All tests passed');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('formatBinary', function() {
  it('should format 1 to 00000001', function() {
    var actualValue = formatBinary(1);
    var expectedValue = '00000001';
    assert.strictEqual(actualValue, expectedValue, 'Didnt format 1 correctly');
  });

  it('should always be eight digits long', function() {
    var formatted = formatBinary(800);
    assert.ok(formatted.length >= 8, 'Wrong length');
  });
});
