import React from "react";
import Car from "./Car";
import {
  Image,
  useColorModeValue,
  useColorMode,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/fruit.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          mr={4}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
            <Image src={logo} alt="logo" boxSize="70px" />
          </Flex>

          <Button
            onClick={toggleColorMode}
            mr={4}
            bg="brand.blue"
            colorScheme={"brand.write"}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Car />
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
