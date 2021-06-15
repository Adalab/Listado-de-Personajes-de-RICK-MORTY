import React from "react";

const CharacterDetail = () => {
  return (
    <section className="hidden">
      <img
        className="card__img"
        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      />
      <ul>
        <h4 className="card__title">Pepa Pig</h4>
        <p className="card__description">Cerda / Rosa</p>
        <li>Genero:Cerda</li>
        <li>email:pepa@pig</li>
        <li>Nick:dameunacharcayretozoensubarro</li>
        <li>Ciudad:Cerdilandia</li>
        <li>pais:granja de cerdos</li>
      </ul>
    </section>
  );
};
export default CharacterDetail;
