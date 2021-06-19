import getRandomWholeNum from './get-random-positive-float.js';

function generateRandomArrayItem(array) {
  const randomIndex = getRandomWholeNum(0, array.length - 1);
  return array[randomIndex];
}
export default generateRandomArrayItem;
