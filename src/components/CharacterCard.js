import "../stylesheets/card.scss";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <Link className="item__type" to={`/CharacterDetail/${props.character.id}`}>
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
CharacterCard.propTypes = {
  character: (PropTypes.shape = {
    id: PropTypes.number,
    image: PropTypes.string,
    species: PropTypes.string,
  }),
};
