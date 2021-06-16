import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";
import "../stylesheets/app.scss";
import CharacterList from "./CharacterList";
//import CharacterDetail from "./CharacterDetail";
import Filter from "./Filter";
//import data from "../services/getApi.json";
import getApiData from "../services/Api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((data) => {
        setCharacters(data);
        console.log(data);
      });
    }
  }, []);

  const filterCharacters = characters;
  console.log(filterCharacters);
  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="App">
        <Filter />
        <CharacterList characters={filterCharacters} />
      </div>
    </>
  );
};

export default App;
