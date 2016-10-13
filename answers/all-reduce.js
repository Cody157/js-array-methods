// In this I'll show that each of these is in fact a special case of reduce.
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
    return this.reduce((soFar, ele) => soFar && callback(ele), true);
  }

  /*
   * creates a new array with all elements that pass the test implemented
   * by the provided function
   * callback takes a single value and returns a truthy value if it
   * should be included in the newly generated array.
   * It returns falsey otherwise.
   */
  filter(callback) {
    return this.reduce((acc, ele) => {
      if (callback(ele)) {
        acc.push(ele);
      }

      return acc;
    }, []);
  }

  /*
   * Returns a value from the array if it passes the test implemented
   * by th provided function. undefined otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  find(callback) {
    return this.reduce((found, ele) => {
      // return !found && callback(ele) ? ele : found;
      if (!found && callback(ele)) {
        return ele;
      }
      else {
        return found;
      }
    });
  }

  /*
   * Returns the index of a value from the array if the value passes the test
   * implemented by th provided function. -1 otherwise.
   * callback takes a single value and returns a truthy value if it
   * passes the test. It returns falsey otherwise.
   */
  findIndex(callback) {
    return this.reduce((foundIndex, ele, index) => {
      if (foundIndex === -1 && callback(ele)) {
        return index;
      }
      else {
        return foundIndex;
      }
    }, -1);
  }

  /*
   * Calls the callback on each value in the array.
   * callback takes a single value.
   */
  forEach(callback) {
    return this.reduce((acc, ele) => {
      callback(ele);
    });
  }

  /*
   * Returns true if the value passed exists in the array.
   * false otherwise.
   */
  includes(value) {
    return this.reduce((found, ele) => {
      return found || ele === value;
    }, false);
  }

  /*
   * creates a new array populated with the results of calling the provided
   * function on each element in the array.
   * callback takes a single value and returns a value.
   */
  map(callback) {
    return this.reduce((arr, ele) => {
      arr.push(callback(ele));
      return arr;
    }, []);
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
    // !!callback(ele) forces the result of callback(ele) to be a boolean value
    // because `!` coerces it to a boolean, then negates it and doing `!!`
    // negates it twice (thus making it true if the value is truthy or false
    // if it is falsey)
    return this.reduce((found, ele) => found || !!callback(ele), false);
  }

}

module.exports = SimpleArray;
