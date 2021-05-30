function getRandomWholeNum (randomMinNum, randomMaxNum) {
  if (randomMinNum < randomMaxNum && randomMinNum >= 0) {
    randomMinNum = Math.ceil(randomMinNum);
    randomMaxNum = Math.floor(randomMaxNum);
    return Math.floor(Math.random() * (randomMinNum - randomMaxNum + 1)) + randomMaxNum;
  }
  return 'Error';
}

function getRandomFractionNum (randomMinNum, randomMaxNum, digits) {
  if (randomMinNum < randomMaxNum && randomMinNum >= 0 && digits >= 0) {
    return (Math.random() * (randomMinNum - randomMaxNum) + randomMaxNum).toFixed(digits);
  }
  return 'Error';
}

// console.log(getRandomWholeNum(10, 45));
// console.log(getRandomFractionNum(14.34, 32.21, 3));
