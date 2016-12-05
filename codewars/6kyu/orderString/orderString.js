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