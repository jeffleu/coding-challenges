/*
  Description:
  Write a method that folds a given array of integers by the middle x-times.

  Examples:

  Fold 1-times:
  [1,2,3,4,5] -> [6,6,3]

  A little visualization (NOT for the algorithm but for the idea of folding):

   Step 1         Step 2        Step 3       Step 4       Step5
                       5/           5|         5\          
                      4/            4|          4\      
  1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
  ----*----      ----*          ----*        ----*        ----*

  Fold 2-times:
  [1,2,3,4,5] -> [9,6]

  As you see, if the count of numbers is odd, the middle number will stay.
  Otherwise the fold-point is between the middle-numbers, so all numbers 
  would be added in a way.

  The array will always contain numbers and will never be null. The parameter 
  runs will always be a positive integer greater than 0 and says how many runs 
  of folding your method has to do.

  If an array with one element is folded, it stays as the same array. The input 
  array should not be modified!
*/

const sumArrays = (arr1, arr2) => arr1.map((num, index) => num + arr2[index]);

function foldArray(array, runs) {
	runs = runs || 1;
	let arrayCopy = array.slice();
	
	while(runs > 0) {
		if (arrayCopy.length % 2 === 0) {
			let mid = arrayCopy.length / 2;
			let first = arrayCopy.slice(0, mid);
			let last = arrayCopy.slice(mid, arrayCopy.length).reverse();
			arrayCopy = sumArrays(first, last);
		} else {
			let middleIndex = Math.floor(arrayCopy.length / 2);
			let middleNumber = arrayCopy[middleIndex]; 
			let first = arrayCopy.slice(0, middleIndex);
			let last = arrayCopy.slice(middleIndex + 1, arrayCopy.length).reverse();
			arrayCopy = sumArrays(first, last).concat(middleNumber);
		}
		
		runs--;
	}
	
	return arrayCopy;
}