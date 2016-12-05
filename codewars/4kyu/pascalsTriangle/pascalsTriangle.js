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