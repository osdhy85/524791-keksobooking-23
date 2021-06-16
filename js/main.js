import getRandomWholeNum from './utils/get-random-positive-float.js';
import getRandomFractionNum from './utils/get-random-positive-integer.js';
import generatePhotos from './utils/generate-template-photos.js';

// const templatePhotos = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
// ];

const propertyTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeTypes = ['12:00', '13:00', '14:00'];
const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

// function getRandomWholeNum(randomMinNum, randomMaxNum) {
//   if (randomMinNum < randomMaxNum && randomMinNum >= 0) {
//     randomMinNum = Math.ceil(randomMinNum);
//     randomMaxNum = Math.floor(randomMaxNum);
//     return Math.floor(Math.random() * (randomMaxNum - randomMinNum + 1)) + randomMinNum;
//   }
//   return 'Error';
// }

// function getRandomFractionNum(randomMinNum, randomMaxNum, digits) {
//   if (randomMinNum < randomMaxNum && randomMinNum >= 0 && digits >= 0) {
//     return (Math.random() * (randomMaxNum - randomMinNum) + randomMinNum).toFixed(digits);
//   }
//   return 'Error';
// }

// getRandomWholeNum(10, 45);
// getRandomFractionNum(14.34, 32.21, 2);

// function generatePhotos() {
//   const photos = [];
//   for (let index = 0; index < templatePhotos.length; index++) {
//     if (getRandomWholeNum(0, 1)) {
//       photos.push(templatePhotos[index]);
//     }
//   }
//   return photos;
// }

function generateRandomArrayItem(array) {
  const randomIndex = getRandomWholeNum(0, array.length - 1);
  return array[randomIndex];
}

function generateFeatures() {
  const features = [];
  for (let index = 0; index < featuresList.length; index++) {
    if (getRandomWholeNum(0, 1)) {
      features.push(featuresList[index]);
    }
  }
  return features;
}

function generateUser() {
  const location = {
    lat: getRandomFractionNum(35.65000, 35.70000, 5),
    lng: getRandomFractionNum(139.70000, 139.80000, 5),
  };
  return {
    author: { avatar: `img/avatars/user0${getRandomWholeNum(1, 8)}.png` },
    offer: {
      title: 'myApartments',
      price: getRandomWholeNum(100, 1000),
      photos: generatePhotos(),
      address: `${location.lat}, ${location.lng}`,
      types: generateRandomArrayItem(propertyTypes),
      rooms: getRandomWholeNum(1, 3),
      guests: getRandomWholeNum(1, 5),
      checkin: generateRandomArrayItem(timeTypes),
      checkout: generateRandomArrayItem(timeTypes),
      description: 'propertyDescription',
      features: generateFeatures(),
    },
    location,
  };
}

function getUsersList(countUsers) {
  const usersList = [];
  for (let variable = 0; variable < countUsers; variable++) {
    usersList.push(generateUser());
  }
  return usersList;
}

// eslint-disable-next-line no-console
console.log(getUsersList(10));
