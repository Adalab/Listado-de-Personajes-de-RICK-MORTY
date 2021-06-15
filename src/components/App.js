import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import Filters from "./Filters";
import CharacterCar from "./CharacterCar";
import "../stylesheets/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  //event handlers
  const handleFilter = (data) => {
    console.log("..por toma filtro!", data);
    if (data.key === "name") {
      setNameFilter(data.value);
    }
  };

  const filteredCharacters = users.filter((user) => {
    return user.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <div>
      <h1>Directorio de Rick y Morty</h1>
      <Filters handleFilter={handleFilter} />
      <CharacterList users={filteredCharacters} />
    </div>
  );
};
export default App;
