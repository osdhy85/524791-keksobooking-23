import activatePage from './get-form-fields.js';
import offers from './../data/data.js';

const addressElement = document.querySelector('#address');
addressElement.value = 'lat: 35.67980, lng: 139.76941';

const map = L.map('map-canvas').on('load', activatePage).setView({
  lat: 35.67980,
  lng: 139.76941,
}, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const similarPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const marker = L.marker(
  {
    lat: 35.67980,
    lng: 139.76941,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  // console.log(evt.target.getLatLng());
  const latLng = evt.target.getLatLng();
  addressElement.value = `lat: ${latLng.lat}, lng: ${latLng.lng}`;
});

const generateSimilarOfferPins = (items) => {
  const points = [];
  items.forEach((item) => {
    const point = {
      title: item.offer.title,
      price: item.offer.price,
      photos: item.offer.photos,
      address: item.offer.adderess,
      type: item.offer.type,
      rooms: item.offer.rooms,
      guests: item.offer.guests,
      checkin: item.offer.checkin,
      checkout: item.offer.checkout,
      description: item.offer.description,
      features: item.offer.features,
      lat: item.location.lat,
      lng: item.location.lng,
      src: item.author.avatar,
    };
    points.push(point);
  });

  return points;
};

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function createPopup(item) {
  const mapPopup = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = mapPopup.cloneNode(true);
  popupElement.querySelector('.popup__avatar').src = item.src;
  popupElement.querySelector('.popup__title').content = item.title;
  popupElement.querySelector('.popup__text--address').content = `Координаты: ${item.address}`;
  popupElement.querySelector('.popup__text--price').content = `${item.price}.textContent = '${item.price} ночь, руб`;
  popupElement.querySelector('.popup__type').content = item.type;
  popupElement.querySelector('.popup__text--capacity').content = `${item.rooms} комнаты для ${item.guests} гостей`;
  popupElement.querySelector('.popup__text--time').content = `Заезд после ${item.checkout}, выезд до ${item.checkout}`;
  popupElement.querySelector('.popup__description').content = item.description;

  const photosElement = popupElement.querySelector('.popup__photos');
  const photoElement = photosElement.querySelector('.popup__photo');
  photosElement.removeChild(photoElement);

  //  console.log(item);
  if (item.photos) {
    item.photos.forEach( (src) => {
      const newPhoto = photoElement.cloneNode(true);
      newPhoto.src = src;
      photosElement.appendChild(newPhoto);
    });
  }

  // console.log(item.features);
  featuresList.forEach((feature) => {
    if (!item.features || item.features.indexOf(feature) === -1) {
      popupElement.querySelector(`.popup__feature--${  feature}`).classList.add('hidden');
    }
  });

  return popupElement;
}

const prepareOffers = generateSimilarOfferPins(offers);

let offerMarkets = [];


function addSilimiarOffers(items) {

  items.forEach((item) => {
    // console.log(item);
    const lat = item.lat;
    const lng = item.lng;
    // eslint-disable-next-line no-shadow
    const marker = L.marker({
      lat,
      lng,
    },
    {
      similarPinIcon,
    });
    marker.addTo(map).bindPopup(
      createPopup(item), {
        keepInView: true,
      },
    );
    offerMarkets.push(marker);
  });

}
addSilimiarOffers(prepareOffers);


const filterHousingType = document.querySelector('#housing-type');
const filterHousingPrice = document.querySelector('#housing-price');
const filterHousingRoom = document.querySelector('#housing-rooms');
const filterHousingGuests = document.querySelector('#housing-guests');

const filterWifi = document.querySelector('#filter-wifi');
const filterDishwasher = document.querySelector('#filter-dishwasher');
const filterParking = document.querySelector('#filter-parking');
const filterWasher = document.querySelector('#filter-washer');
const filterElevator = document.querySelector('#filter-elevator');
const filterConditioner = document.querySelector('#filter-conditioner');

function updateSimilarOffers() {
  offerMarkets.forEach((item) => {
    item.remove();
  });
  offerMarkets = [];
  let filterOffers = prepareOffers;
  // eslint-disable-next-line eqeqeq
  if (filterHousingType.value != 'any') {
    // eslint-disable-next-line eqeqeq
    filterOffers = filterOffers.filter((item) =>  item.type == filterHousingType.value);
  }

  if (filterHousingPrice.value === 'middle') {
    filterOffers = filterOffers.filter((item) => item.price >= 10000 && item.price <= 50000 );
  }
  if (filterHousingPrice.value === 'low') {
    filterOffers = filterOffers.filter((item) => item.price < 10000);
  }

  if (filterHousingPrice.value === 'high') {
    filterOffers = filterOffers.filter((item) => item.price > 50000);
  }

  // eslint-disable-next-line eqeqeq
  if (filterHousingRoom.value != 'any') {
    // eslint-disable-next-line eqeqeq
    filterOffers = filterOffers.filter((item) => item.rooms == filterHousingRoom.value);
  }
  // eslint-disable-next-line eqeqeq
  if (filterHousingGuests.value != 'any') {
    // eslint-disable-next-line eqeqeq
    filterOffers = filterOffers.filter((item) => item.guests == filterHousingGuests.value);
  }

  if (filterWifi.checked) {
    filterOffers = filterOffers.filter((item) => item.features && item.features.indexOf('wifi') !== -1);
  }

  if (filterDishwasher.checked) {
    filterOffers = filterOffers.filter((item) => item.features && item.features.indexOf('dishwasher') !== -1);
  }


  if (filterParking.checked) {
    filterOffers = filterOffers.filter((item) => item.features && item.features.indexOf('parking') !== -1);
  }

  if (filterWasher.checked) {
    filterOffers = filterOffers.filter((item) => item.features && item.features.indexOf('washer') !== -1);
  }

  if (filterElevator.checked) {
    filterOffers = filterOffers.filter((item) => item.features && item.features.indexOf('elevator') !== -1);
  }

  if (filterConditioner.checked) {
    filterOffers = filterOffers.filter((item) => item.features && item.features.indexOf('conditioner') !== -1);
  }

  // console.log(filterOffers);
  addSilimiarOffers(filterOffers);
}

filterHousingType.addEventListener('change', updateSimilarOffers);
filterHousingType.addEventListener('change', updateSimilarOffers);
filterHousingPrice.addEventListener('change', updateSimilarOffers);
filterHousingRoom.addEventListener('change', updateSimilarOffers);
filterHousingGuests.addEventListener('change', updateSimilarOffers);
filterWifi.addEventListener('change', updateSimilarOffers);
filterDishwasher.addEventListener('change', updateSimilarOffers);
filterParking.addEventListener('change', updateSimilarOffers);
filterWasher.addEventListener('change', updateSimilarOffers);
filterElevator.addEventListener('change', updateSimilarOffers);
filterConditioner.addEventListener('change', updateSimilarOffers);
