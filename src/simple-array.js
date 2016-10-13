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
    return unimplemented;
  }

  /*
   * creates a new array with all elements that pass the test implemented
   * by the provided function
   * callback takes a single value and returns a truthy value if it
   * should be included in the newly generated array.
   * It returns falsey otherwise.
   */
  filter(callback) {
    return unimplemented;
  }

  /*
   * Returns a value from the array if it passes the test implemented
   * by th provided function. undefined otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  find(callback) {
    return unimplemented;
  }

  /*
   * Returns the index of a value from the array if the value passes the test
   * implemented by th provided function. -1 otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  findIndex(callback) {
    return unimplemented;
  }

  /*
   * Calls the callback on each value in the array.
   * callback takes a single value.
   */
  forEach(callback) {
    return unimplemented;
  }

  /*
   * Returns true if the value passed exists in the array.
   * false otherwise.
   */
  includes(value) {
    return unimplemented;
  }

  /*
   * creates a new array populated with the results of calling the provided
   * function on each element in the array.
   * callback takes a single value and returns a value.
   */
  map(callback) {
    return unimplemented;
  }

  /*
   * Calls the provided function for every value int he array with the previously
   * accumulated value and the current value. Returns the final accumulated
   * value.
   * Callback takes the accumulated value, a single value, and the index of that
   * value, returning a new accumulated value.
   */
  reduce(callback, accumulator) {
    return unimplemented;
  }

  /*
   * Returns true if any element of the array passes the test implemented
   * by th provided function. False otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  some(callback) {
    return unimplemented;
  }

}

module.exports = SimpleArray;
