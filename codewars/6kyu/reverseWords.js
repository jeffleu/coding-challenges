/*
  Description:
  Write a reverseWords function that accepts a string a parameter, and reverses
  each word in the string. Every space should stay, so you cannot use words from 
  Prelude.

  Example:
  reverseWords("This is an example!"); // "sihT si na !elpmaxe"
*/

function reverseWords(str) {
  let reversed = str.split(' ').reduce((results, word) => {
    let drow = [];
    
    for (let i = 0; i < word.length; i++) {
      drow.unshift(word[i]);
    }
    
    return results.concat(drow.join(''));
  }, []);
  
  return reversed.join(' ');
}