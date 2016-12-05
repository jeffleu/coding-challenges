function countCharacters (string) {  
  return (string.split('')).reduce(function(obj, letter) {
    (!obj[letter]) ? obj[letter] = 1 : obj[letter]++;
    return obj;
  }, {});
}