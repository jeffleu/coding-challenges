/*
  Description:
  Your task is to sort a given string. Each word in the String will contain a single number. 
  This number is the position the word should have in the result. Numbers can be from 1 to 9.
  So 1 will be the first word (not 0). If the input String is empty, return an empty String.
  The words in the input String will only contain valid consecutive numbers.

  Example:
  order("is2 Thi1s T4est 3a"); // "Thi1s is2 3a T4est"
*/

function order(words) {
  var inputArray = words.split(' ');
  var output = [];
  
  inputArray.forEach(word => {
    for (var i = 0; i < word.length; i++) {
      if (Number(word[i])) {
        output[Number(word[i])] = word;
      }
    }
  });
  
  return output.join(' ');
}