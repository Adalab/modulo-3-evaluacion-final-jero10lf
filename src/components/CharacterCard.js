import "../stylesheets/card.scss";
import React from "react";
const CharacterCard = (props) => {
  return (
    <li className="item__type--li">
      <img
        src={props.character.image}
        alt={props.character.name}
        width="150"
        height="150"
      />
      <h2 className="item__name">{props.character.name}</h2>
      <p className="item__type">{props.character.species}</p>
    </li>
  );
};
export default CharacterCard;
