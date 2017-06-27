/**
 * @param {number} num
 * @return {number}
 */
const convertToBinary = n => (n >>> 0).toString(2);
const convertToDecimal = n => parseInt(n, 2);

const findComplement = num => {
  const binary = convertToBinary(num);
  
  let newBinary = '';
  for (let i = 0; i < binary.length; i++) {
    newBinary += binary[i] === '0' ? '1' : '0';
  }
  
  return convertToDecimal(newBinary);
};
