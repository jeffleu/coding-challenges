/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = nums => {
	const sorted = [...nums].sort((a, b) => b - a);
	
	return nums.map(n => {
		const place = sorted.indexOf(n) + 1;
		if (place === 1) {
			return 'Gold Medal';
		} else if (place === 2) {
			return 'Silver Medal';
		} else if (place === 3) {
			return 'Bronze Medal';
		} else {
			return `${place}`;
		}
	});
};
