import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";
import "../stylesheets/app.scss";
import CharacterList from "./CharacterList";
//import CharacterDetail from "./CharacterDetail";
import Filter from "./Filter";
//import data from "../services/getApi.json";
import getApiData from "../services/Api";
import logo from "../images/Rick_and_Morty.png";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((data) => {
        setCharacters(data);
        console.log(data);
      });
    }
  }, []);

  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(input.toLowerCase());
  });
  const handleFilter = (inputChange) => {
    setInput(inputChange.value);
  };
  return (
    <>
      <header className="App-header">
        <img
          className="App-header__logo"
          src={logo}
          alt="Logo Rick and Morty"
          title="Logo Rick and Morty"
        />
      </header>
      <div className="App-container">
        <Filter handleFilter={handleFilter} input={input} />
        <CharacterList characters={filterCharacters} input={input} />
      </div>
    </>
  );
};

export default App;
