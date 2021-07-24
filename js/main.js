import generateUser from './data/generate-user.js';
import './utils/get-similar-items.js';
import './utils/get-form-fields.js';
import './utils/generate-map.js';

function getUsersList(countUsers) {
  const usersList = [];
  for (let variable = 0; variable < countUsers; variable++) {
    usersList.push(generateUser());
  }
  return usersList;
}

// eslint-disable-next-line no-console
console.log(getUsersList(10));
