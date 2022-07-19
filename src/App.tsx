import "./App.css";
import React, { useState, useEffect } from 'react';
import { Login } from "./components/Login/Login";
import { CharacterList } from "./components/CharacterList/CharacterList";
import { useFetch } from "./components/hooks/useFetch";
import { CharacterSelection } from "./components/CharacterSelection.tsx/CharacterSelection";
import { CharactersScreen } from "./components/CharactersScreen";
import { WinnerScreen } from "./screens/WinnerScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { BattlegroundScreen } from "./screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [battleCharacters, setBattleCharacters] = useState(false);
  const [winner, setWinner] = useState([]);
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

console.log('Selected Characters', battleCharacters);

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
<div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginScreen setLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/characters"
            element={
              <CharactersScreen
                isLoggedIn={isLoggedIn}
                characters={characters}
                setBattleCharacters={setBattleCharacters}
              />
            }
          />
          <Route
            path="/winner"
            element={<WinnerScreen isLoggedIn={isLoggedIn} winner={winner} />}
          />
          <Route
            path="/battleground"
            element={
              <BattlegroundScreen
                isLoggedIn={isLoggedIn}
                setWinner={setWinner}
                winner={winner}
                battleCharacters={battleCharacters}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};