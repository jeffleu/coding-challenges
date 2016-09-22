/*
  Description:
  John and Mary want to travel between a few towns A, B, C ... Mary
  has on a sheet of paper a list of distances between these towns. 
  ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to 
  Mary that he doesn't want to drive more than t = 174 miles and he 
  will visit only 3 towns.

  Which distances, hence which towns, they will choose so that the sum
  of the distances is the biggest possible to please Mary, but less 
  than t to please John?

  With list ls and 3 towns to visit they can make a choice between: 
  [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],
  [55,57,58],[55,57,60],[55,58,60],[57,58,60].
 
  The sums of distances are then: 162, 163, 165, 165, 167, 168, 170,
  172, 173, 175.

  The biggest possible sum taking a limit of 174 into account is then 
  173 and the distances of the 3 corresponding towns is [55, 58, 60].

  The function chooseBestSum will take as parameters t (maximum sum of 
  distances, integer >= 0), k (number of towns to visit, k >= 1) and 
  ls (list of distances, all distances are positive or null integers 
  and this list has at least one element). The function returns the 
  "best" sum ie the biggest possible sum of k distances less than or 
  equal to the given limit t, if that sum exists otherwise null.

  Examples:
  chooseBestSum(163, 3, [50, 55, 56, 57, 58]); // 163
  chooseBestSum(163, 3, [50]); // null
  chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]); // 228
*/

function sum(array) {
  return array.reduce((total, n) => total += n, 0);
}

function chooseBestSum(t, k, ls) {
  let result = 0;
  
  const getSum = (distances, index) => {
    distances = distances || [];
    index = index || 0;
    
    // Base case
    if (distances.length === k) {
      if (sum(distances) > result && sum(distances) <= t) {
        result = sum(distances);
      }
      return;
    }
    
    // Recursive case
    for (let i = index; i < ls.length; i++) {
      getSum(distances.concat(ls[i]), i + 1);
    }
  };
  
  getSum();
  
  return (result === 0) ? null : result;
}