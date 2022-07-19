import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection.tsx/CharacterSelection";

export const CharactersScreen = ({
  characters,
  setBattleCharacters,
  isLoggedIn,
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <CharacterList characters={characters} />
      <CharacterSelection
        characters={characters}
        setBattleCharacters={setBattleCharacters}
      />
    </>
  );
};