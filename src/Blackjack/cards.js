function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function getCard(values, suits) {
  const randomVal = choice(values);
  const randomSuit = choice(suits);
  return randomVal + randomSuit;
}

function getCards(values, suits, numCards = 1) {
  const cardsArr = [getCard(values, suits)];

  while (cardsArr.length < numCards) {
    let randomCard = getCard(values, suits);
    if (!cardsArr.includes(randomCard)) cardsArr.push(randomCard);
  }

  return cardsArr;
}

function getCardScore(card) {
  const val = card[0];
  if (val === "A") return 11;
  if (["0", "J", "Q", "K"].includes(val)) return 10;
  return +val;
}

function getTotalScore(cards) {
  let total = 0;
  for (let card of cards) {
    total += getCardScore(card);
  }
  return total;
}

export { getCards, getTotalScore };