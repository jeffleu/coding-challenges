/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
	const len = nums.length;
	const result = [];
	
	let left = 1;
	for (let i = 0; i < len; i++) {
		result[i] = left;
		left *= nums[i];
	}
	
	let right = 1;
	for (let i = len - 1; i >= 0; i--) {
		result[i] *= right;
		right *= nums[i];
	}
	
	return result;
};
