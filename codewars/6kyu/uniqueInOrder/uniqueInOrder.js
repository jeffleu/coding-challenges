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