import getRandomWholeNum from './get-random-positive-integer.js';

const templatePhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function generatePhotos() {
  const photos = [];
  for (let index = 0; index < templatePhotos.length; index++) {
    if (getRandomWholeNum(0, 1)) {
      photos.push(templatePhotos[index]);
    }
  }
  return photos;
}

export default generatePhotos;
