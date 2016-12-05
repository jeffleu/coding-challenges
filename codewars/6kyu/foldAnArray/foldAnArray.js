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