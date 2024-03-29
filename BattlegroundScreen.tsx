import React, { useRef, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useInterval } from "../components/hooks/useInterval";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

eexport const BattlegroundScreen = ({ setWinner, winner }) => {
  const battleCharacters = useSelector(
    (store: any) => store.characters.battleCharacters
  );
  const [fighterOne, fighterTwo] = battleCharacters;
  const [firstAttacks, setFirstAttacks] = useState(false);
  const [secondAttacks, setSecondAttacks] = useState(false);
  const attacksByFighterOne = useRef(0);
  const attacksByFighterTwo = useRef(0);
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);

  if (!isLoggedIn) {
    navigate("/");
  }

  const handleFightersClash = () => {
    const { name, damagePerHit } = fighterOne;
    setSecondAttacks(false);
    setFirstAttacks(true);

    attacksByFighterOne.current += 1;
    if (fighterTwo.health - damagePerHit * attacksByFighterOne.current <= 0) {
      setWinner(name);
      navigate("/winner");
      return;
    }
    setTimeout(() => handleSecondFighterAttack(), 2000);
  };

  useInterval(() => handleFightersClash(), winner ? null : 4000);

  const handleSecondFighterAttack = () => {
    const { name, damagePerHit } = fighterTwo;
    setFirstAttacks(false);
    setSecondAttacks(true);
    attacksByFighterTwo.current += 1;
    if (fighterOne.health - damagePerHit * attacksByFighterTwo.current <= 0) {
      setWinner(name);
      navigate("/winner");
      return;
    }
  };

  return (
    <Flex justify={"center"} align={"center"} direction={"column"} h="90vh">
      <Text mt="2%" fontSize={"3xl"} fontWeight="700">
        Let's get ready to the fight
      </Text>
      <Text mt="2%" fontSize={"2xl"} fontWeight="600">
        {fighterOne.name} health:{" "}
        {fighterOne.health -
          fighterTwo.damagePerHit * attacksByFighterTwo.current}
      </Text>
      <Text mt="2%" fontSize={"2xl"} fontWeight="600">
        {fighterTwo.name} health:{" "}
        {fighterTwo.health -
          fighterOne.damagePerHit * attacksByFighterOne.current}
      </Text>
      <Box w="80%" h="100%" mt="3%" border="0.5rem dotted black">
        {firstAttacks ? (
          <Text mt="2%" fontSize={"2xl"} fontWeight="500">
            {fighterOne.name} strikes {fighterTwo.name} for{" "}
            {fighterOne.damagePerHit}
          </Text>
        ) : null}
        {secondAttacks ? (
          <Text mt="35%" fontSize={"2xl"} fontWeight="500">
            {fighterTwo.name} strikes {fighterOne.name} for{" "}
            {fighterTwo.damagePerHit}
          </Text>
        ) : null}
      </Box>
    </Flex>
  );
};