const SimpleArray = require('../src/simple-array');
//const SeparateImplementations = require('../answers/separate-implementations');
//const AllReduce = require('../answers/all-reduce');
//const OtherImplementations = require('../answers/other-implementations');
function array(args = []) {
  return new SimpleArray(args);
//  return new OtherImplementations(args);
//  return new AllReduce(args);
//  return new SeparateImplementations(args);
//  return args;
}

const {
  describe,
  it,
  beforeEach,
} = require('mocha');
const {
 expect,
} = require('chai');

describe('SimpleArray', function() {
  describe('every', function() {
    it('returns true on an empty array', function() {
      const arr = array();
      expect(arr.every(() => false)).to.be.true;
    });

    it('passes when the condition is true for all elements', function() {
      const arr = array([1, 2, 3]);
      expect(arr.every(() => true)).to.be.true;
    });

    it('fails when at least one element fails the test', function() {
      const arr = array([1, 0, 2]);
      expect(arr.every(ele => ele > 0)).to.be.false;
    });
  });

  describe('filter', function() {
    it("doesn't remove anything when the test passes", function() {
      const arr = array([1, 2, 3]);
      expect(arr.filter(() => true)).to.deep.equal([1, 2, 3]);
    });

    it('returns an empty array when all elements are filtered out', function() {
      const arr = array([1, 2, 3]);
      expect(arr.filter(() => false)).to.deep.equal([]);
    });

    it('only removes values that fail the test', function() {
      const arr = array([1, 0, 3]);
      expect(arr.filter(ele => ele > 0)).to.deep.equal([1, 3]);
    });
  });

  describe('find', function() {
    it('returns the value if it exists in the array', function() {
      const arr = array([1, 2, 3]);
      expect(arr.find(ele => ele === 2)).to.equal(2);
    });

    it("returns undefined if the value doesn't exist in the array", function() {
      const arr = array([1, 2, 3]);
      expect(arr.find(ele => ele === 0)).to.be.undefined;
    });
  });

  describe('findIndex', function() {
    it('returns the index of the value if it exists in the array', function() {
      const arr = array([1, 2, 3]);
      expect(arr.findIndex(ele => ele === 2)).to.equal(1);
    });

    it("returns -1 if the value doesn't exist in the array", function() {
      const arr = array([1, 2, 3]);
      expect(arr.findIndex(ele => ele === 0)).to.equal(-1);
    });
  });

  describe('forEach', function() {
    let expected;
    let callCount;

    beforeEach(() => callCount = 0);

    function test(val) {
      expect(val, 'wrong value').to.equal(expected[callCount++]);
    }

    it('calls it on each value', function() {
      expected = [1, 2, 3];
      const arr = array(expected.slice()); // `.slice()` clones an array
      expect(arr.forEach(test)).to.be.undefined;
      expect(callCount).to.equal(3);
    });

    it("doesn't call the callback when the array is empty", function() {
      const arr = array();
      expect(arr.forEach(test)).to.be.undefined;
      expect(callCount).to.equal(0);
    });
  });

  describe('includes', function() {
    it('returns true if the value exists in the array', function() {
      const arr = array([1, 2, 3]);
      expect(arr.includes(2)).to.be.true;
    });

    it("returns false if the value doesn't exist in the array", function() {
      const arr = array([1, 2, 3]);
      expect(arr.includes(0)).to.be.false;
    });
  });

  describe('map', function() {
    it("maps each value to it's new value", function() {
      const arr = array([1, 2, 3]);
      expect(arr.map(ele => ele * ele)).to.deep.equal([1, 4, 9]);
    });

    it('returns an empty array when called on an empty array', function() {
      const arr = array();
      expect(arr.map(ele => ele * ele)).to.deep.equal([]);
    });
  });

  // These are more like examples than tests...
  describe('reduce', function() {
    it('can reduce a numerical array to a single value', function() {
      const arr = array([1, 2, 3]);
      // the sum of all 3 elements
      expect(arr.reduce((acc, ele) => acc + ele, 0)).to.equal(6);
    });

    it('can reduce an array to a different array', function() {
      const arr = array([1, 2, 3]);
      function accumulatorFn(acc, ele) {
        acc.push(ele * ele);
        return acc;
      }

      expect(arr.reduce(accumulatorFn, [])).to.deep.equal([1, 4, 9]);
    });

    it('can reduce an array to an object', function() {
      const arr = array([1, 2, 3]);
      function accumulatorFn(acc, ele) {
        acc[ele] = 'foo';
        return acc;
      }

      expect(arr.reduce(accumulatorFn, {})).to.deep.equal({
        1: 'foo',
        2: 'foo',
        3: 'foo',
      });
    });
  });

  describe('some', function() {
    it('returns false on an empty array', function() {
      const arr = array();
      expect(arr.some(() => true)).to.be.false;
    });

    it('fails when the condition is false for all elements', function() {
      const arr = array([1, 2, 3]);
      expect(arr.some(() => false)).to.be.false;
    });

    it('passes when at least one element passes the test', function() {
      const arr = array([1, 0, 2]);
      expect(arr.some(ele => ele === 0)).to.be.true;
    });
  });

});
