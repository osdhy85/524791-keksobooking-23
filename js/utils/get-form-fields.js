function disableAddForm() {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelectorAll('.ad-form fieldset').forEach((el) => el.setAttribute('disabled', true));
}

function enanbleAddForm() {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  document.querySelectorAll('.ad-form fieldset').forEach((el) => el.removeAttribute('disabled'));
}

function disableAddFilter() {
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  document.querySelectorAll('.map__filters select').forEach((el) => el.setAttribute('disabled', true));
}

function enanbleAddFilter() {
  document.querySelector('.map__filters').classList.remove('map__filters--disabled');
  document.querySelectorAll('.map__filters select').forEach((el) => el.removeAttribute('disabled'));
}

// eslint-disable-next-line no-unused-vars
function deactivatePage() {
  disableAddForm();
  disableAddFilter();
}

// eslint-disable-next-line no-unused-vars
function activatePage() {
  enanbleAddForm();
  enanbleAddFilter();
}

function getMinValueForAppartment() {
  const typeAppartment = document.querySelector('#type').value;
  if (typeAppartment === 'flat') {
    return 1000;
  }

  if (typeAppartment === 'house') {
    return 5000;
  }

  if (typeAppartment === 'hotel') {
    return 3000;
  }

  if (typeAppartment === 'palace') {
    return 10000;
  }

  if (typeAppartment === 'bungalow') {
    return 0;
  }

  return 0;
}

const roomsUsers = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const roomsNumberElement = document.querySelector('#room_number');
const guestsElement = document.querySelector('#capacity');

function syncRoomGuest (event) {
  guestsElement.querySelectorAll('option').forEach((guest) => {
    guest.disabled = true;
  });
  // rooms
  // console.log("Rooms: ", event.target.value);
  roomsUsers[event.target.value].forEach((item) => {
    guestsElement.querySelector(`option[value="${item}"]`).disabled = false;
  });
  // select first element
  guestsElement.value =  roomsUsers[event.target.value][0];
}

roomsNumberElement.addEventListener('change', syncRoomGuest);

const timeinElement = document.querySelector('#timein');
const timeoutElement = document.querySelector('#timeout');

function syncTime(event) {
  const chooseTime = event.target.value;
  // console.log('chooseTime: ', chooseTime);
  // select first element
  timeinElement.querySelector(`option[value="${chooseTime}"]`).selected = true;
  timeoutElement.querySelector(`option[value="${chooseTime}"]`).selected = true;
}

timeinElement.addEventListener('change', syncTime);
timeoutElement.addEventListener('change', syncTime);

const priceElement = document.querySelector('#price');
const propertyElement = document.querySelector('#type');

const minPriceTypes = {
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
  'palace': 10000,
};

function syncPrice(event) {
  priceElement.setAttribute('placeholder', minPriceTypes[event.target.value]);
}

propertyElement.addEventListener('change', syncPrice);


// activatePage();
// deactivatePage();
getMinValueForAppartment();

const adTitle = document.querySelector('#title');

function validateAdForm(event) {
  // eslint-disable-next-line no-console
  console.log('Validate');
  if (adTitle.value.length < 30) {
    // eslint-disable-next-line no-alert
    alert('! short title');
    event.preventDefault();
  }
  if (adTitle.value.length > 100) {
    // eslint-disable-next-line no-alert
    alert('! long title');
  }
  // return false;
}

document.querySelector('.ad-form').addEventListener('submit', validateAdForm);
