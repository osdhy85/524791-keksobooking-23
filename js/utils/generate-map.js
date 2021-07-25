import activatePage from './get-form-fields.js';
import subscribeFilters from './get-filter-fields.js';
import createPopup from './generate-popup.js';
import offers from './../data/data.js';

//addSimilarOffers();

const addressElement = document.querySelector('#address');
addressElement.value = '35.67980, 139.76941';

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
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const similarPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
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
  addressElement.value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
});

let prepareOffers = []; //generateSimilarOfferPins(offers);
let offerMarkets = [];

function addSimilarOffers(items) {

  offerMarkets.forEach((item) => {
    item.remove();
  });

  offerMarkets = [];

  items = items.slice(0, 10);

  items.forEach((item) => {
    // console.log(item);
    const lat = item.location.lat;
    const lng = item.location.lng;
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

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    prepareOffers = data;
    // console.log(prepareOffers);
    addSimilarOffers(prepareOffers);
    subscribeFilters(addSimilarOffers, prepareOffers);
  });

// updateSimilarOffers();
offers();
