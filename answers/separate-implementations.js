// In this file, I'll implement each function separately without pulling out
// common code or reusing functions.

const unimplemented = require('./unimplemented');

class SimpleArray {

  constructor(arr = []) {
    this.arr = arr;
  }

  /*
   * Returns true if every element of the array passes the test implemented
   * by th provided function. False otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  every(callback) {
    for (const ele of this.arr) {
      if (!callback(ele)) {
        return false;
      }
    }

    return true;
  }

  /*
   * creates a new array with all elements that pass the test implemented
   * by the provided function
   * callback takes a single value and returns a truthy value if it
   * should be included in the newly generated array.
   * It returns falsey otherwise.
   */
  filter(callback) {
    const arr = [];
    for (const ele of this.arr) {
      if (callback(ele)) {
        arr.push(ele);
      }
    }

    return arr;
  }

  /*
   * Returns a value from the array if it passes the test implemented
   * by th provided function. undefined otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  find(callback) {
    for (const ele of this.arr) {
      if (callback(ele)) {
        return ele;
      }
    }
  }

  /*
   * Returns the index of a value from the array if the value passes the test
   * implemented by th provided function. -1 otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  findIndex(callback) {
    for (let i = 0; i < this.arr.length; ++i) {
      if (callback(this.arr[i])) {
        return i;
      }
    }

    return -1;
  }

  /*
   * Calls the callback on each value in the array.
   * callback takes a single value.
   */
  forEach(callback) {
    for (const ele of this.arr) {
      callback(ele);
    }
  }

  /*
   * Returns true if the value passed exists in the array.
   * false otherwise.
   */
  includes(value) {
    for (const ele of this.arr) {
      if (ele === value) {
        return true;
      }
    }

    return false;
  }

  /*
   * creates a new array populated with the results of calling the provided
   * function on each element in the array.
   * callback takes a single value and returns a value.
   */
  map(callback) {
    const arr = [];
    for (const ele of this.arr) {
      arr.push(callback(ele));
    }

    return arr;
  }

  /*
   * Calls the provided function for every value int he array with the previously
   * accumulated value and the current value. Returns the final accumulated
   * value.
   * Callback takes the accumulated value, a single value, and the index of that
   * value, returning a new accumulated value.
   */
  reduce(callback, accumulator) {
    for (let i = 0; i < this.arr.length; ++i) {
      accumulator = callback(accumulator, this.arr[i], i);
    }

    return accumulator;
  }

  /*
   * Returns true if any element of the array passes the test implemented
   * by th provided function. False otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  some(callback) {
    for (const ele of this.arr) {
      if (callback(ele)) {
        return true;
      }
    }

    return false;
  }

}

module.exports = SimpleArray;
