import React from "react";
	import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
	import { Table, TableCaption, Thead, Tr, Th, Tbody, Button } from "@chakra-ui/react";
	import "./CharacterList.css";
	import { useSelector } from "react-redux";
	import { useNavigate } from "react-router-dom";
	
	export const CharacterList = () => {

		const characters = useSelector((state) => state.characters.characterList);
		const navigate = useNavigate();

		return (
		  <>
			<Table>
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
			<Button
			  colorScheme={"green"}
			  size="lg"
			  mt="5%"
			  mb="5%"
			  onClick={() => navigate("/manageCharacter")}
			>
			  Go to add character screen
			</Button>
		  </>
		);
	  };