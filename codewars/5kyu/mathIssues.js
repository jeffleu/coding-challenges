/*
  Description:
  Oh no, our Math object was "accidently" reset. Can you re-implement
  some of those functions? We can assure, that only non-negative 
  numbers are passed as arguments. So you don't have to consider things 
  like undefined, null, NaN, negative numbers, strings and so on.

  Here is a list of functions, we need:

  Math.round()
  Math.ceil()
  Math.floor()
*/

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