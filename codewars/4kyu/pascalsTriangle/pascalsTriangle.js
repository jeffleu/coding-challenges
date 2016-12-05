/*
  Description:
  Here you will create the classic pascal's triangle. Your function will
  be passed the depth of the triangle and your code has to return the 
  corresponding pascal triangle up to that depth.

  Example:
  pascal(5); // [ 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1 ]

  To build the triangle, start with a single 1 at the top, for each number 
  in the next row you just take the two numbers above it and add them 
  together (except for the edges, which are all "1").

            [1]
          [1   1]
         [1  2  1]
        [1  3  3  1]
  here you get the 3 by adding the 2 and 1 above it.
*/

function pascalsTriangle(n) {
	let result = [1];
	
	for (let i = 1; i < n; i++) {
		result.push(1);
		for (let j = 1; j < i; j++) {
			let len = result.length;
			result.push(result[len - i - 1] + result[len - i]);
		}
		result.push(1);
	}
  
	return result;
}