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
	const [winner, setWinner] = useState(null);
	const { response, error } = useFetch(
	  "https://jsonplaceholder.typicode.com/posts"
	);
  
	if (!response) {
	  return <>Loading...</>;
	}
  
	if (error && error instanceof Error) {

	  return <>Error: {error.message} </>;
	}
  
	return (
	  <div className="App">
		<BrowserRouter>
		  <Routes>
			<Route
			  path="/"
			  element={<LoginScreen />}
			/>
			<Route
			  path="/characters"
			  element={<CharactersScreen/>}
			/>
			<Route
			  path="/winner"
			  element={<WinnerScreen winner={winner} />}
			/>
			<Route
			  path="/battleground"
			  element={
				<BattlegroundScreen
				  setWinner={setWinner}
				  winner={winner}
				/>
			  }
			/>
		  </Routes>
		</BrowserRouter>
	  </div>
	);
  };