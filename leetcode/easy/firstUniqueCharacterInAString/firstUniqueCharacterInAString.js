/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (str) => {
	if (str.length === 0) { return -1 }
	
	const letterCount = str.split('').reduce((obj, letter) => {
		(!obj[letter]) ? obj[letter] = 1 : obj[letter]++;
		return obj;
	}, {});
	
	for (let key in letterCount) {
		if (letterCount[key] === 1) return str.indexOf(key);
	}
	
	return -1;
};
