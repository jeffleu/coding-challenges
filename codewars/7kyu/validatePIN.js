/*
	Description:
	ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
	If the function is passed a valid PIN string, return true, else return false.

	Examples:
	validatePIN("1234") === true
	validatePIN("12345") === false
	validatePIN("a234") === false
*/

function validatePIN (pin) {
  let mapped = pin.split('').map(n => Number(n).toString());
  return ((mapped.length === 4 || mapped.length === 6) && !mapped.includes('NaN')) ? true : false;
}