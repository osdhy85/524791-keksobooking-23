// import activatePage from './get-form-fields.js';
// import createPopup from './generate-popup.js';
// import offers from '../data/data.js';

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


function updateSimilarOffers(prepareOffers) {

  let filterOffers = prepareOffers;

  filterOffers = filterOffers.filter((item) => {
    if (filterHousingType.value !== 'any' &&  item.offer.type !== filterHousingType.value) {
      return false;
    }

    if (filterHousingType.value !== 'any' && item.offer.type !== filterHousingType.value) {
      return false;
    }


    if (filterHousingPrice.value === 'middle' && !(item.offer.price >= 10000 && item.price <= 50000)) {
      return false;
    }

    if (filterHousingPrice.value === 'low' && item.offer.price >= 10000) {
      return false;
    }

    if (filterHousingPrice.value === 'high' && item.offer.price <= 50000) {
      return false;
    }

    if (filterHousingRoom.value !== 'any' && item.offer.rooms !== filterHousingRoom.value) {
      return false;
    }

    if (filterHousingGuests.value !== 'any' && item.offer.guests !== filterHousingGuests.value) {
      return false;
    }

    if ((filterWifi.checked ||
      filterDishwasher.checked ||
      filterDishwasher.checked ||
      filterParking.checked ||
      filterWasher.checked ||
      filterElevator.checked ||
      filterConditioner.checked) && !item.offer.features) {
      return false;
    }

    if (filterWifi.checked && item.offer.features.indexOf('wifi') === -1) {
      return false;
    }

    if (filterDishwasher.checked&& item.offer.features.indexOf('dishwasher') === -1) {
      return false;
    }

    if (filterParking.checked && item.offer.features.indexOf('parking') === -1) {
      return false;
    }

    if (filterWasher.checked && item.offer.features.indexOf('washer') === -1) {
      return false;
    }

    if (filterElevator.checked && item.offer.features.indexOf('elevator') === -1) {
      return false;
    }

    if (filterConditioner.checked && item.offer.features.indexOf('conditioner') === -1) {
      return false;
    }

    return true;

  });

  // console.log(filterOffers);
  // eslint-disable-next-line no-undef
  return filterOffers;
}

function subscribeFilters(updateMap, offers) {
  const updateMapFunc = () => updateMap(updateSimilarOffers(offers));
  filterHousingType.addEventListener('change', updateMapFunc);
  filterHousingPrice.addEventListener('change', updateMapFunc);
  filterHousingRoom.addEventListener('change', updateMapFunc);
  filterHousingGuests.addEventListener('change', updateMapFunc);
  filterWifi.addEventListener('change', updateMapFunc);
  filterDishwasher.addEventListener('change', updateMapFunc);
  filterParking.addEventListener('change', updateMapFunc);
  filterWasher.addEventListener('change', updateMapFunc);
  filterElevator.addEventListener('change', updateMapFunc);
  filterConditioner.addEventListener('change', updateMapFunc);
}

export default subscribeFilters;
