/*
  Description:
  In this kata you have to create all permutations of an input string
  and remove duplicates, if present. This means, you have to shuffle
  all letters from the input in all possible orders.

  Examples:
  permutations('a'); // ['a']
  permutations('ab'); // ['ab', 'ba']
  permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
  The order of the permutations doesn't matter.
*/

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