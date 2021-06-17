import React from "react";
//import PropTypes from "prop-types";
import "../stylesheets/cardDetail.scss";
import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  const iconSpecie =
    props.character.species === "Human" ? (
      <i className="fa fa-angle-left"></i>
    ) : (
      <i className="fa fa-angle-left" />
    );
  const iconStatus =
    props.character.status === "Dead" ? (
      <i className="fa fa-angle-left" />
    ) : (
      <i className="fa fa-angle-left" />
    );
  return (
    <>
      <main className="CharacterDetail">
        <Link className="CharacterDetail__link" to="/">
          <i class="fa fa-angle-left" aria-hidden="true">
            Volver
          </i>
        </Link>

        <div className="CharacterDetail__img">
          <img
            src={props.character.image}
            alt={`Imagen de ${props.character.image}`}
          />
        </div>
        <div className="CharacterDetail__detail">
          <h2>{props.character.name}</h2>
          <p>
            Status:{props.character.status}
            {iconStatus}
          </p>
          <p>
            Species: {props.character.species} {iconSpecie}
          </p>

          <p>Origin: {props.character.origin}</p>
          <p>Episodes: {props.character.episodes}</p>
        </div>
      </main>
    </>
  );
};

// CharacterDetail.propTypes = {
//   character: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     species: PropTypes.string,
//     status: PropTypes.string,
//     origin: PropTypes.string,
//     episodes: PropTypes.number,
//   }),
// };
export default CharacterDetail;
