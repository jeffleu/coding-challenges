const sumMix = (array) => {
	return array.map(n => Number(n)).reduce((total, n) => total += n, 0);
}