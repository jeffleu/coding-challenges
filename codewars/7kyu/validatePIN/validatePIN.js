function validatePIN (pin) {
  let mapped = pin.split('').map(n => Number(n).toString());
  return ((mapped.length === 4 || mapped.length === 6) && !mapped.includes('NaN')) ? true : false;
}