function getRandomWholeNum(randomMinNum, randomMaxNum) {
  if (randomMinNum < randomMaxNum && randomMinNum >= 0) {
    randomMinNum = Math.ceil(randomMinNum);
    randomMaxNum = Math.floor(randomMaxNum);
    return (
      Math.floor(Math.random() * (randomMinNum - randomMaxNum + 1)) +
      randomMaxNum
    );
  }
  return 'Error';
}

function getRandomFractionNum(randomMinNum, randomMaxNum, digits) {
  if (randomMinNum < randomMaxNum && randomMinNum >= 0 && digits >= 0) {
    return (
      Math.random() * (randomMinNum - randomMaxNum) +
      randomMaxNum
    ).toFixed(digits);
  }
  return 'Error';
}

// getRandomWholeNum(10, 45);
// getRandomFractionNum(14.34, 32.21, 2);

function getUsersList(numberUsers) {
  const usersList = [];
  for (let variable = 0; variable < numberUsers; variable++) {
    // eslint-disable-next-line no-use-before-define
    usersList.push(generateUser());
  }
  return usersList;
}

// eslint-disable-next-line no-console
console.log(getUsersList(10));

/*
"string".padStart(targetLength [,padString]):
const str = "5";
str.padStart(4, "0"); // "0005"
*/

function generateUser() {
  const avatar = `img/avatars/user0${  getRandomWholeNum(1, 8)  }.png`;
  return {
    author: { userAvatar: avatar },
    offer: {
      title: 'myApartments',
      price: getRandomFractionNum(100, 1000, 2),
      // eslint-disable-next-line no-use-before-define
      photos: generatePhotos(getRandomWholeNum(1, 20)),
      // eslint-disable-next-line no-useless-concat
      address: 'location.x' + ' location.y',
      // eslint-disable-next-line no-use-before-define
      types: generateHousingType(),
      rooms: getRandomWholeNum(1, 3),
      guests: getRandomWholeNum(1, 5),
      // eslint-disable-next-line no-use-before-define
      checkin: generateCheckinCheckoutTime(),
      // eslint-disable-next-line no-use-before-define
      checkout: generateCheckinCheckoutTime(),
      description: 'propertyDescription',
      // eslint-disable-next-line no-use-before-define
      features: generationFeatures(),
    },
    location: {
      lat: getRandomFractionNum(35.65000, 35.70000, 5),
      lng: getRandomFractionNum(139.70000, 139.80000, 5),
    },
  };
}

function generatePhotos(numberPhotos) {
  const templatePhotos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  const photos = [];
  for (let variable = 0; variable < numberPhotos; variable++) {
    const randomPhoto = getRandomWholeNum(0, 2);
    photos.push(templatePhotos[randomPhoto]);
  }
  return photos;
}

function generateHousingType() {
  const propertyTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const randomHousing = getRandomWholeNum(0, 4);
  const houseType = propertyTypes[randomHousing];
  return houseType;
}

function generateCheckinCheckoutTime() {
  const timeType = ['12:00', '13:00', '14:00'];
  const randomCheckinTime = getRandomWholeNum(0, 1);
  const сheckinTime = timeType[randomCheckinTime];
  return сheckinTime;
}


function generationFeatures() {
  const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const features = {};
  const count = getRandomWholeNum(3, 15);
  for (let variable = 0; variable < count; variable++) {
    features[featuresList[getRandomWholeNum(0,5)]] = 'true';
  }
  return Object.keys(features);
}
