import generateUser from '../data/generate-user.js';
// eslint-disable-next-line no-unused-vars
const cardData = generateUser();
// const mapCanvas = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('.popup'); //коллекция dom-элементов

const types = {'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'};

// Set content function
function setContent(element, content) {
  if (content!=='') {element.textContent=content;}
  else {element.classList.add('hidden');}
}

// eslint-disable-next-line no-unused-vars
function getSimilarItems(card) {
  const cloneElement = template.cloneNode(true); //клонировать элемент
  setContent(cloneElement.querySelector('.popup__title'),card.offer.title);
  setContent(cloneElement.querySelector('.popup__text--address'),card.offer.address);
  setContent(cloneElement.querySelector('.popup__text--price'),`${card.offer.price} ₽/ночь`);
  setContent(cloneElement.querySelector('.popup__type'),types[card.offer.type]);
  setContent(cloneElement.querySelector('.popup__text--capacity'),`${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);
  setContent(cloneElement.querySelector('.popup__text--time'),`Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  setContent(cloneElement.querySelector('.popup__description'),card.offer.description);

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
  cloneElement.querySelector('.popup__avatar').src = card.author.avatar;

  return cloneElement;
}

// mapCanvas.appendChild(getSimilarItems(cardData));
