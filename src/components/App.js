import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import Filters from "./Filters";
import CharacterCar from "./CharacterCar";
import "../stylesheets/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Directorio de Rick y Morty</h1>
      <Filters />
      <CharacterList users={users} />
    </div>
  );
};
export default App;
