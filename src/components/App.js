import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  //event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    }
  };

  const filteredCharacters = users.filter((user) => {
    return user.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const routerCharacterId = props.match.params.id;
    const foundCharacter = users.find((user) => {
      return user.id == routerCharacterId;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail user={foundCharacter} />;
    } else {
      return <p> ☠ usuario no encontrado</p>;
    }
  };

  return (
    <div>
      <h1>Directorio de Rick y Morty</h1>
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} />
          <CharacterList users={filteredCharacters} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};
export default App;
