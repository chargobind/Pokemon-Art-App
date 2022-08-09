import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import "./CharacterListItem.css";
import { useAppDispatch } from "../../hooks/redux";
import { setCharacterToUpdate } from "../../../slices/charactersSlice";
import { useNavigate } from "react-router-dom";

export const CharacterListItem = ({ character, isChampion }) => {
  const { name, health, fraction, weapon, damagePerHit } = character;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    dispatch(setCharacterToUpdate(character));
    navigate("/manageCharacter");
  }
  return (

    <Tr key={name}>
      <Td className="character-name">
        {isChampion ? `Champion ${name}` : name}
      </Td>
      <Td isNumeric>{health}</Td>
      <Td>{fraction}</Td>
      <Td>{weapon}</Td>
      <Td isNumeric>{damagePerHit}</Td>
      <Td><Button colorScheme={"blue"} onClick={handleUpdate}>Update Character</Button></Td>
    </Tr>
  );
};