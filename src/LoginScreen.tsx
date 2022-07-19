import React, { useState, useRef, useEffect } from "react";

import { Button, Input, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const adminCredentials = { userName: "admin", password: "admin" };

interface LoginProps {
  setLoggedIn: (isLoggedIn: boolean) => void;
}

export const LoginScreen = ({ setLoggedIn }: LoginProps) => {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const countRef = useRef(0);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const usernameHandler = (event: any) => {
    countRef.current++;
    setUserName(event.target.value);
  };

  const loginHandler = (event: any) => {
    if (
      userName === adminCredentials.userName &&
      password === adminCredentials.password
    ) {
      setLoggedIn(true);
      navigate("/characters");
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <Flex justify={"center"} direction="column" align={"center"}>
      <Text size={"lg"} mb="1%">
        User name:{" "}
      </Text>
      <Input
        ref={inputRef}
        type="text"
        value={userName}
        width="50%"
        onChange={usernameHandler}
        mb="2%"
      />
      <Text size={"lg"} mb="1%">
        Password:{" "}
      </Text>
      <Input
        mb="2%"
        type="password"
        value={password}
        width="50%"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme={"blue"} onClick={loginHandler}>
        Login
      </Button>
    </Flex>
  );
};