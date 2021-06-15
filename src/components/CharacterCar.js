import React from "react";
import { Link } from "react-router-dom";

const CharacterCar = (props) => {
  console.log(props);
  return (
    <li className="classlist">
      <Link to={`/character/${props.user.id}`}>
        <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de: ${props.user.name}`}
          title={`Foto de: ${props.user.name}`}
        />
        <h2 className="card__title">{props.user.name}</h2>
        <h3 className="card__description">{props.user.species}</h3>
      </Link>
    </li>
  );
};

export default CharacterCar;
