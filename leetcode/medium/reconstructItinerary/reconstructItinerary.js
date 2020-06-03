/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

/*
Runtime: 80 ms, faster than 77.09% of JavaScript online submissions for Reconstruct Itinerary.
Memory Usage: 40.4 MB, less than 100.00% of JavaScript online submissions for Reconstruct Itinerary.
*/

const findItinerary = tickets => {
  const flights = {};
  for (let [from, to] of tickets) {
    if (!flights[from]) flights[from] = []; 
    flights[from].push(to);
  }
  for (let from in flights) {
    flights[from].sort();
  }

  let result = [];
  const makeItinerary = from => {
    const tos = flights[from];
    while(tos && tos.length) {
      makeItinerary(tos.shift());
    }
    result.unshift(from);
  }; 
  makeItinerary('JFK');
  return result;
};
