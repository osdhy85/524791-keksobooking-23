const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function createPopup(item) {
  const mapPopup = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = mapPopup.cloneNode(true);
  popupElement.querySelector('.popup__avatar').src = item.author.avatar;
  popupElement.querySelector('.popup__title').textContent = item.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${item.offer.address}`;
  popupElement.querySelector('.popup__text--price').textContent = `${item.offer.price} ночь, руб`;

  popupElement.querySelector('.popup__type').textContent = item.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkout}, выезд до ${item.offer.checkout}`;
  popupElement.querySelector('.popup__description').textContent = item.offer.description;

  const photosElement = popupElement.querySelector('.popup__photos');
  const photoElement = photosElement.querySelector('.popup__photo');
  photosElement.removeChild(photoElement);

  //  console.log(item);
  if (item.offer.photos) {
    item.offer.photos.forEach( (src) => {
      const newPhoto = photoElement.cloneNode(true);
      newPhoto.src = src;
      photosElement.appendChild(newPhoto);
    });
  }

  // console.log(item.features);
  featuresList.forEach((feature) => {
    if (!item.offer.features || item.offer.features.indexOf(feature) === -1) {
      popupElement.querySelector(`.popup__feature--${  feature}`).classList.add('hidden');
    }
  });

  return popupElement;
}

export default createPopup;

