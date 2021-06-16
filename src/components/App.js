import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.css";
import logo from "../Images/logo.png";
import ls from "../services/localStorage";

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  // useEffect(() => {
  //   console.log("Guardado en localstorage", users);
  //   ls.set("users", users);
  // }, [users]);

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
      <h1>
        <img
          className="logo__img"
          src={logo}
          alt="Ricky and Morty"
          title="Ricky and Morty"
        />
      </h1>
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
