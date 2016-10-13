// In this file I'll just fill in more versions of these using other ones
// No guarantee that I get everything, but I'll do what I can.
//
// I won't be doing things that completely defy the intended use case of the
// function - for example, anything that forEach can do, map can do by ignoring
// the return value. As can any of them that take a callback. I'll do this only in
// the case of forEach, in order to show what I mean, but not for everything that
// can use forEach.
//
// I'm also not worried about efficiency, but I'll avoid things that are overly
// complex. So I won't loop through all the elements and then call another
// function on them inside that loop.

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

  // filter out what doesn't match, then see if we end up with the same
  // number of elements.
  everyFilter(callback) {
    const filtered = this.filter(callback);
    return filtered.length === this.arr.length;
  }

  // this is really just a reduce
  everyForEach(callback) {
    let all = true;
    this.forEach(ele => all = all && callback(ele));
    return all;
  }

  everyReduce(callback) {
    return this.reduce((soFar, ele) => soFar && callback(ele), true);
  }

  // Logical identity
  // a AND b AND c = !(!a OR !b OR !c)
  everySome(callback) {
    return !this.some(ele => !callback(ele));
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

  filterForEach(callback) {
    const arr = [];
    this.forEach(ele => {
      if (callback(ele)) {
        arr.push(ele);
      }
    });
    return arr;
  }

  filterReduce(callback) {
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
    for (const ele of this.arr) {
      if (callback(ele)) {
        return ele;
      }
    }
  }

  findForEach(callback) {
    let found;
    this.forEach(ele => {
      if (found == null && callback(ele)) {
        found = ele;
      }
    });
    return found;
  }

  findReduce(callback) {
    return this.reduce((found, ele) => !found && callback(ele) ? ele : found);
  }

  findFindIndex(callback) {
    const index = this.findIndex(callback);
    if (index !== -1) {
      return this.arr[index];
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

  // This could be done with forEach if I hadn't removed the index from the
  // callback signature to make this simpler...

  findIndexReduce(callback) {
    return this.reduce((foundIndex, ele, index) => {
      return foundIndex === -1 && callback(ele) ? index : foundIndex;
    }, -1);
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

  // We can't use every, find, findIndex, includes, or some because they are not
  // guaranteed to go through every element of the array

  forEachFilter(callback) {
    this.filter(callback);
  }

  forEachMap(callback) {
    this.map(callback);
  }

  forEachReduce(callback) {
    this.reduce((acc, ele) => callback(ele));
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

  includesEvery(value) {
    return !this.every(ele => ele !== value);
  }

  includesFilter(value) {
    const arr = this.filter(ele => value === ele);
    return arr.length !== 0; // !!arr.length
  }

  // Note that we can't use find. What happens you do arr.includes(undefined)?

  includesFindIndex(value) {
    const index = this.findIndex(ele => ele === value);
    return index !== -1;
  }

  includesForEach(value) {
    let found = false;
    this.forEach(ele => found = found || value === ele);
    return found;
  }

  includesReduce(value) {
    return this.reduce((found, ele) => found || ele === value, false);
  }

  includesSome(value) {
    return this.some(ele => ele === value);
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

  mapForEach(callback) {
    const arr = [];
    this.forEach(ele => arr.push(callback(ele)));
    return arr;
  }

  mapReduce(callback) {
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

  // Could be implemented with forEach if I left the index in the callback
  // signature

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

  // Logical identity
  // a AND b AND c = !(!a OR !b OR !c)
  someEvery(callback) {
    return !this.every(ele => !callback(ele));
  }

  // filter out what doesn't match, then see if we end up with the same
  // number of elements.
  someFilter(callback) {
    const filtered = this.filter(callback);
    return filtered.length > 0;
  }

  // this is really just a reduce
  someForEach(callback) {
    let some = false;
    this.forEach(ele => some = some || callback(ele));
    return some;
  }

  someReduce(callback) {
    return this.reduce((soFar, ele) => soFar || callback(ele), false);
  }

}

module.exports = SimpleArray;
