import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import Filter from "./Filter";
import UserDetail from "./UserDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Directorio de personas</h1>
      <Filter />
      <UserList users={users} />
      <UserDetail />
    </div>
  );
};
export default App;
