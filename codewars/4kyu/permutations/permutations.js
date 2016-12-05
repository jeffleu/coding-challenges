function permutations(string) {
  let result = [];
  
  const findCombos = (currentCombo, indexesUsed) => {
    currentCombo = currentCombo || '';
    indexesUsed = indexesUsed || [];
    
    // Base case
    if (currentCombo.length === string.length) {
      // If combo doesn't exist in results, push combo to results
      if (!result.includes(currentCombo)) {
        result.push(currentCombo);
      }    
      return;
    }
    
    // Recursive case
    for (var i = 0; i < string.length; i++) {
      // If index hasn't been used
      if (!indexesUsed.includes(i)) {
        // Recursive call with letter added to combo and i added to indexesUsed
        findCombos(currentCombo + string[i], indexesUsed.concat(i));
      }
    }
  };
  
  findCombos();  
  return result;
}