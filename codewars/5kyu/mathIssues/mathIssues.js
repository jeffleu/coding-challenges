Math.round = function(number) {
  let beforeDecimal = number.toString().split('.')[0];
  let afterDecimal = number.toString().split('.')[1];
  return (!afterDecimal || afterDecimal[0] < 5) ? +beforeDecimal : +beforeDecimal + 1;
};

Math.ceil = function(number) {
  let beforeDecimal = number.toString().split('.')[0];
  let afterDecimal = number.toString().split('.')[1];
  return (!afterDecimal) ? +beforeDecimal : +beforeDecimal + 1;
};

Math.floor = function(number) {
  let beforeDecimal = number.toString().split('.')[0];
	return +beforeDecimal;
};