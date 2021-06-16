import React, { useState, useEffect } from "react";
import "../stylesheets/app.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";

import getApiData from "../services/Api";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length === 0) {
      getApiData().then((usersData) => {
        setUsers(usersData);
      });
    }
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="App">
        <Filter />
        <CharacterList />
      </div>
    </>
  );
};

export default App;
