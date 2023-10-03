import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  const cardsElems = cards.map(cardId => (
    <Card cardId={cardId} key={cardId} />
  ));

  return <div>{cardsElems}</div>;
}

export default CardList;
