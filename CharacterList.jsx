import React from "react";
	import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
	import { Table, TableCaption, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
	import "./CharacterList.css";
	import { useSelector } from "react-redux";
	

	export const CharacterList = () => {
	  const characters = useSelector((state) => state.characters.characterList);
	  return (
	    <Table>
	      <TableCaption>Character table</TableCaption>
	      <Thead>
	        <Tr>
	          <Th>Name</Th>
	          <Th isNumeric>Health</Th>
	          <Th>Fraction</Th>
	          <Th>Weapon</Th>
	          <Th isNumeric>Damage Per Hit</Th>
	        </Tr>
	      </Thead>
	      <Tbody>
	        {characters.map((character) => (
	          <CharacterListItem
	            isChampion={Math.random() > 0.5}
	            character={character}
	          />
	        ))}
	      </Tbody>
	    </Table>
	  );

          };
