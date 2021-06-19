function getRandomFractionNum(randomMinNum, randomMaxNum, digits) {
  if (randomMinNum < randomMaxNum && randomMinNum >= 0 && digits >= 0) {
    return (Math.random() * (randomMaxNum - randomMinNum) + randomMinNum).toFixed(digits);
  }
  return 'Error';
}

export default getRandomFractionNum;
