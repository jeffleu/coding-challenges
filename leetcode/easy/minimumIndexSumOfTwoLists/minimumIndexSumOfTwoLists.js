/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const storage = list1.reduce((output, restaurant, i) => {
    output[restaurant] = i;
    return output;
  }, {});
  
  const result = {minIndex: Infinity, restaurants: []};
  
  for (let i = 0; i < list2.length; i++) {
    if (storage.hasOwnProperty(list2[i])) {
      const sumOfIndexes = i + storage[list2[i]];
      
      if (sumOfIndexes < result.minIndex) {
        result.minIndex = sumOfIndexes;
        result.restaurants = [list2[i]];
      } else if (sumOfIndexes === result.minIndex) {
        result.restaurants.push(list2[i]);
      }
    } 
  }
  
  return result.restaurants;
};
