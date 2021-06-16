import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const status = () => {
    if (props.user.status === "Alive") {
      return <li className="list-detail">Status: {props.user.status} 👍</li>;
    } else if (props.user.status === "Dead") {
      return <li className="list-detail">Status: {props.user.status} 👎</li>;
      // } else  (props.character.status === "unknown"){
      //   return (
      //     <li className="list-detail">Status: {props.user.status} 🙌</li>
      //   );
      // }
    }
  };
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
        <li>Status: {status()}</li>
        <li>Origin: {props.user.origin.name}</li>
        {<li>Episodes: {props.user.episode.length}</li>}
      </ul>
    </section>
  );
};
export default CharacterDetail;
