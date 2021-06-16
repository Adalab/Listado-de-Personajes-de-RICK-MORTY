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
        <li className="card__title">{props.user.name}</li>
        <li>Especie: {props.user.species}</li>
        <li>Status: if ({props.user.status} === Alive)</li>
        <li>Origin: {props.user.origin}</li>
        //<li>Episode: {props.user.episode}</li>
      </ul>
    </section>
  );
};
export default CharacterDetail;
