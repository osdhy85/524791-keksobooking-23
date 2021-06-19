import getRandomWholeNum from './get-random-positive-integer.js';

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function generateFeatures() {
  const features = [];
  for (let index = 0; index < featuresList.length; index++) {
    if (getRandomWholeNum(0, 1)) {
      features.push(featuresList[index]);
    }
  }
  return features;
}

export default generateFeatures;
