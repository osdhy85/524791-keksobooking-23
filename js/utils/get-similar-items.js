import generateUser from '../data/generate-user.js';

const cardData = generateUser();
const mapCanvas = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('.popup'); //коллекция dom-элементов

const types = {'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'};

function getSimilarItems(card) {
  const cloneElement = template.cloneNode(true); //клонировать элемент
  cloneElement.querySelector('.popup__title').textContent = card.offer.title;
  cloneElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cloneElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cloneElement.querySelector('.popup__type').textContent = types[card.offer.type];
  cloneElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cloneElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  // debugger;
  card.offer.features.forEach((element) => {
    cloneElement.querySelector(`.popup__feature--${element}`).classList.add('hidden');
  });
  card.offer.photos.forEach((element) => {
    const img = cloneElement.querySelector('.popup__photo').cloneNode();
    img.src = element;
    cloneElement.querySelector('.popup__photos').appendChild(img);
  });
  cloneElement.querySelector('.popup__photo').classList.add('hidden');
  cloneElement.querySelector('.popup__description').textContent = card.offer.description;
  cloneElement.querySelector('.popup__avatar').src = card.author.avatar;

  return cloneElement;
}

mapCanvas.appendChild(getSimilarItems(cardData));
