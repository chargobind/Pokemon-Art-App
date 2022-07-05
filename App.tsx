import "./App.css";
import React, { useState, useEffect } from 'react';
import { Login } from './Login/Login';
import { CharacterList } from '/Users/charleshargobind/pokemon-art-app/src/components/CharacterListFolder/CharacterList';
import { useFetch } from "../hooks/useFetch";
import { CharacterSelection } from 'pokemon-art-app/components/CharacterSelection';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const characters = [
    {
      name: "Pikachu",
      health: 100,
      fraction: "Lightening",
      weapon: "Thunder-Bolt",
      damagePerHit: 60,
    },
    {
      name: "Charizard",
      health: 100,
      fraction: "Fire",
      weapon: "Flame Thrower",
      damagePerHit: 80,
    },
    {
      name: "Zapdos",
      health: 120,
      fraction: "Lightening",
      weapon: "Thunder-Storm",
      damagePerHit: 90,
    },
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    return <>Error: {error.message} </>;
  }

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn ? <CharacterList characters={characters} /> : userNotLoggedIn}
      {isLoggedIn ? <CharacterSelection characters={characters} /> : null}
    </div>
  );
};