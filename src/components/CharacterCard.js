import "../stylesheets/card.scss";
import React from "react";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <Link
      className="CharacterCard__link"
      to={`/CharacterDetail/${props.character.id}`}
    >
      <article className="item__type--li">
        <img
          src={props.character.image}
          alt={props.character.name}
          width="150"
          height="150"
        />
        <h2 className="item__name">{props.character.name}</h2>
        <p className="item__type">{props.character.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
