import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <section className="class__card">
      <Link to="/">
        <span className="link__volver">🛵...Volver</span>
      </Link>
      <img
        className="card__img"
        src={props.user.image}
        alt={`Foto de: ${props.user.name}`}
        title={`Foto de: ${props.user.name}`}
      />
      <ul>
        <h2 className="card__title">{props.user.name}</h2>
        <h1>Especie: {props.user.species}</h1>
        {/* <li>Specie: {props.user.species}</li>
        <li>Origin: {props.user.origin.name}</li>
        <li>Episode: {props.user.episode[]}</li> */}
      </ul>
    </section>
  );
};
export default CharacterDetail;
