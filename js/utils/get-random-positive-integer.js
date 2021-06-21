function getRandomWholeNum(randomMinNum, randomMaxNum) {
  if (randomMinNum < randomMaxNum && randomMinNum >= 0) {
    randomMinNum = Math.ceil(randomMinNum);
    randomMaxNum = Math.floor(randomMaxNum);
    return Math.floor(Math.random() * (randomMaxNum - randomMinNum + 1)) + randomMinNum;
  }
  return 'Error';
}

export default getRandomWholeNum;
