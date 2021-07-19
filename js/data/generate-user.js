import getRandomWholeNum from '../utils/get-random-positive-integer.js';
import getRandomFractionNum from '../utils/get-random-positive-float.js';
import generateRandomArrayItem from '../utils/get-random-array-item.js';
import generateFeatures from '../utils/get-random-features.js';
import generatePhotos from '../utils/get-template-photos.js';

const propertyTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeTypes = ['12:00', '13:00', '14:00'];

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
      type: generateRandomArrayItem(propertyTypes),
      rooms: getRandomWholeNum(1, 3),
      guests: getRandomWholeNum(1, 5),
      checkin: generateRandomArrayItem(timeTypes),
      checkout: generateRandomArrayItem(timeTypes),
      description: 'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
      features: generateFeatures(),
    },
    location,
  };
}

export default generateUser;


