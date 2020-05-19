/*
Runtime: 640 ms, faster than 9.83% of JavaScript online submissions for Insert Delete GetRandom O(1).
Memory Usage: 52.7 MB, less than 20.00% of JavaScript online submissions for Insert Delete GetRandom O(1).
*/

class RandomizedSet {
  constructor() {
    this.values = {};
  }

  insert(val) {
    if (!this.values.hasOwnProperty(val)) {
      this.values[val] = true;
      return true;
    }
    return false;
  }

  remove(val) {
    if (this.values.hasOwnProperty(val)) {
      delete this.values[val];
      return true;
    }
    return false;
  }

  getRandom() {
    const vals = Object.keys(this.values);
    const randomIndex = Math.floor(Math.random() * vals.length);
    return vals[randomIndex];
  }
}
