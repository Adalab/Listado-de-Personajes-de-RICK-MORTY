import React from "react";

const CharacterCar = (props) => {
  return (
    <li className="user">
      {/* <a href={}>Ver detalle</a> */}
      <img
        className="card__img"
        src={props.user.image}
        alt={`Foto de: ${props.user.name}`}
        title={`Foto de: ${props.user.name}`}
      />
      <h2 className="card__title">{props.user.name}</h2>
      <h3 className="card__description">{props.user.species}</h3>
    </li>
  );
};

export default CharacterCar;
