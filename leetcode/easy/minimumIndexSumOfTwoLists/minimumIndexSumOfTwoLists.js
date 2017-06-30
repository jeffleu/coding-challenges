/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
	let minIndex = Number.MAX_VALUE;
	let result = [];
	
  for (let i = 0; i < list1.length; i++) {
  	const restaurant = list1[i];
  	if (list2.includes(restaurant)) {
  		const sumIndex = i + list2.indexOf(restaurant);
  		if (sumIndex <= minIndex) {
  			minIndex = sumIndex;
  			result.push(restaurant);
  		}
  	}
  }
  
  return result;
};
