/*
	Description:
	Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

	Example:
	uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
	uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
	uniqueInOrder([1,2,2,3,3])       == [1, 2, 3]
*/

function uniqueInOrder(iterable) {
  var inputArray = [];
  
  if (typeof iterable === 'string') {
    inputArray = iterable.split('');
  } else if (Array.isArray(iterable)) {
    inputArray = iterable;
  }

  return inputArray.reduce((result, n) => {
  	if (n !== result[result.length - 1]) {
  		result.push(n);
  	}
  	return result;
  }, []);
}