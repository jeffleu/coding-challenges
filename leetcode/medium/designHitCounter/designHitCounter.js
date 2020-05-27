/**
 * Initialize your data structure here.
 */

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

/*
Runtime: 68 ms, faster than 24.88% of JavaScript online submissions for Design Hit Counter.
Memory Usage: 33.4 MB, less than 100.00% of JavaScript online submissions for Design Hit Counter.
*/

class HitCounter {
  constructor() {
    this.hits = [];
  }

  /**
    * Record a hit.
    * @param timestamp - The current timestamp (in seconds granularity). 
    * @param {number} timestamp
    * @return {void}
    */  
  hit(timestamp) {
    this.purge(timestamp);
    this.hits.push(timestamp);
  }
  /**
   * Return the number of hits in the past 5 minutes.
   * @param timestamp - The current timestamp (in seconds granularity). 
   * @param {number} timestamp
   * @return {number}
   */
  getHits(timestamp) {
    this.purge(timestamp);
    return this.hits.length;
  }

  purge(timestamp) {
    while(timestamp - this.hits[0] >= 300) {
      this.hits.shift();
    }
  }
}
