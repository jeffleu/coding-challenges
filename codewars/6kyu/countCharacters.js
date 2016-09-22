/*
	Description:
	The main idea is to count all the occuring characters(UTF-8) in string.

	Examples:
	count('aba') === {'a': 2, 'b': 1}
	count('') === {}
*/

function countCharacters (string) {  
  return (string.split('')).reduce(function(obj, letter) {
    (!obj[letter]) ? obj[letter] = 1 : obj[letter]++;
    return obj;
  }, {});
}