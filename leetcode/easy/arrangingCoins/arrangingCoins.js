/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = n => {
  let coinsLeft = n;
  let currentStep = 1;
  let steps = 0;

  while(coinsLeft >= currentStep) {
    coinsLeft -= currentStep;
    currentStep++;
    steps++;
  }

  return steps;
};
