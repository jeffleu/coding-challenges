/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = (intervals) => {
  if (!intervals.length) return [];
  intervals = intervals.sort((a,b) => a.start - b.start);
  let currentStart = intervals[0].start;
  let currentEnd = intervals[0].end;
  const result = [];
  
  for (let i = 1; i < intervals.length; i++) {
    const {start, end} = intervals[i];
    
    if (currentStart <= start && start <= currentEnd) {
      if (end > currentEnd) currentEnd = end;
    } else {
      result.push([currentStart, currentEnd]);
      currentStart = start;
      currentEnd = end;
    }
  }
  
  result.push([currentStart, currentEnd]);
  return result;
};
