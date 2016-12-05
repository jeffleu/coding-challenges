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