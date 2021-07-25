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

// eslint-disable-next-line no-unused-vars
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
  roomsUsers[event ? event.target.value : 1].forEach((item) => {
    guestsElement.querySelector(`option[value="${item}"]`).disabled = false;
  });
  // select first element
  guestsElement.value = roomsUsers[event ? event.target.value : 1][0];
}
syncRoomGuest();

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
// const propertyElement = document.querySelector('#address');

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
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

adTitle.addEventListener('input', () => {
  const titleValueLength = adTitle.value.length;
  if (titleValueLength < MIN_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Заголовок должен состоять минимум из ${MIN_TITLE_LENGTH} символов. Осталось ${MIN_TITLE_LENGTH - titleValueLength}.`);
  } else if (titleValueLength > MAX_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Заголовок не должен превышать ${MAX_TITLE_LENGTH} символов.`);
  } else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
});

const MAX_PRICE = 1000000;
priceElement.addEventListener('input',  () => {
  if (priceElement.value < priceElement.min) {
    priceElement.setCustomValidity(`Цена не может быть меньше ${priceElement.min}.`);
  } else if (priceElement.value > MAX_PRICE) {
    priceElement.setCustomValidity(`Цена не должна превышать ${MAX_PRICE}.`);
  } else {
    priceElement.setCustomValidity('');
  }
  priceElement.reportValidity();
});

// eslint-disable-next-line no-unused-vars
const showAlertPopup = (message) => {
  // alert(message);
  // const alertContainer = document.createElement('div');
  // alertContainer.style.zIndex = 1000;
  // alertContainer.style.position = 'absolute';
  // alertContainer.style.left = 0;
  // alertContainer.style.bottom = '400px';
  // alertContainer.style.right = 0;
  // alertContainer.style.padding = '100px 3px';
  // alertContainer.style.fontSize = '30px';
  // alertContainer.style.color = 'white';
  // alertContainer.style.textAlign = 'center';
  // alertContainer.style.backgroundColor = 'red';

  // alertContainer.textContent = message;

  // document.body.append(alertContainer);

  // setTimeout(() => {
  //   alertContainer.remove();
  // }, 10);
};

// eslint-disable-next-line no-unused-vars
function sendData(event) {
  // const data = {"test": 123};
  const urlData = 'https://23.javascript.pages.academy/keksobooking';
  // const data = {
  //     "title": adTitle.value,
  //     "price": priceElement.value,
  //     "type": propertyElement.value,
  //     "timein": timeinElement.value,
  //     "timeout": timeoutElement.value,
  //     "room_number": roomsNumberElement.value,
  //     "capacity": guestsElement.value,
  // };
  const data = new FormData(document.querySelector('.ad-form'));
  fetch(urlData, {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body: data, //  JSON.stringify(data), // body data type must match "Content-Type" header
  }).then((response) => {                      // first then()
    if(response.ok)
    {
      return response.text();
    }

    throw new Error('Something went wrong.');
  })
    .then((text) => {                          // second then()
      // eslint-disable-next-line no-console
      console.log('Request successful', text);
      document.querySelector('.ad-form').reset();
    })
    .catch((error) => {                        // catch
      // eslint-disable-next-line no-console
      console.log('Request failed', error);
      showAlertPopup('Не удалось отправить форму. Попробуйте ещё раз');
    });

}

document.querySelector('.ad-form').addEventListener( 'submit', ( event ) => {
  event.preventDefault();
  sendData();
});


export default activatePage;
