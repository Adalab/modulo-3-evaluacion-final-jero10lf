import React from "react";
import "../stylesheets/cardDetail.scss";
import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  const iconSpecie =
    props.character.species === "Human" ? (
      <i className=" fa-mobile-alt"></i>
    ) : (
      <i className=" fa-heart" />
    );
  const iconStatus =
    props.character.status === "Dead" ? (
      <i className="human fa-solid fa-skull-crossbones fa-fade" />
    ) : (
      <i className="alien fa-solid fa-heart fa-beat" />
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
            Status: {props.character.status}{" "}
            <span className="detail__card--span">{iconStatus}</span>
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
export default CharacterDetail;
