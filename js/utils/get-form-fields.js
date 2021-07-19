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

function deactivatePage() {
  disableAddForm();
  disableAddFilter();
}

function activatePage() {
  enanbleAddForm();
  enanbleAddFilter();
}

activatePage();
deactivatePage();
