/**
 * @param {number} n
 * @return {number}
 */
const integerReplacement = n => {
    if (n === 1) {
        return 0;
    } else if (n % 2 === 0) {
        return integerReplacement(n / 2) + 1;
    } else {
        return Math.min(integerReplacement((n + 1) / 2), integerReplacement((n - 1) / 2)) + 2;
    }
};
