import React from "react";
import CharacterCar from "./CharacterCar";

const CharacterList = (props) => {
  if (props.users.length === 0) {
    return <p>Esto no es una elección!!!</p>;
  }

  const userElement = props.users.map((user) => {
    return <CharacterCar key={user.id} user={user} />;
  });

  return (
    <section>
      <ul className="class__list_ul">{userElement}</ul>
    </section>
  );
};
export default CharacterList;
