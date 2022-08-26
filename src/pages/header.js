import React from "react";
import Car from "./Car";
import {
  Icon,
  IconButton,
  Image,
  useColorModeValue,
  useColorMode,
  Flex,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  Stack,
  Collapse,
  HStack,
  Link,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  EmailIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <header classNameName="">
      {/*       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="./fruit.png" alt="logo" className="w-20" />
        <div className=" navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link">
                Home <span className="sr-only"></span>
              </div>
            </li>
          </ul>
          <div>
            <Cart /> 
          </div>
        </div>
      </nav> */}
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
            <Image src="./fruit.png" alt="logo" boxSize="70px" />
          </Flex>

          <Button onClick={toggleColorMode} mr={4}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Car />
          {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <Icon viewBox="0 0 24 24" width="10" height="10" fill="none">
              <path
                fill="#6A696E"
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              />
            </Icon>
          </Button> */}
          {/*  <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Tu canasta</DrawerHeader>
              <Divider />
              <DrawerBody px="0">
                <Stack p="4">
                  <Stack direction="row" alignItems="center">
                    <Text fontWeight="semibold">roduct.name</Text>
                  </Stack>
                  <Stack>
                    <Text
                      fontSize={{ base: "sm" }}
                      textAlign={"left"}
                      maxW={"4xl"}
                    >
                      <div className="d-flex">
                        <img src="./fruit.png" maxW="25px" />
                        <div>
                          <div className="dropdown-item">product.name</div>

                          <div className="dropdown-item">product.quantity</div>

                          <div className="dropdown-item">$product.price</div>
                          <Box>
                            <Box className="d-flex mt-2">
                              <HStack maxW="320px">
                                <Button h={8}>-</Button>
                                <Box
                                  as="button"
                                  borderRadius="md"
                                  bg="tomato"
                                  color="white"
                                  px={4}
                                  h={8}
                                  m={0}
                                  className="m-0"
                                >
                                  6 U
                                </Box>
                                <Button className="m-0" h={8} m={0}>
                                  +
                                </Button>
                              </HStack>
                            </Box>
                            <Box className="d-flex" py="4">
                              <DeleteIcon /> <Text>Total $</Text>
                            </Box>
                          </Box>
                        </div>
                      </div>
                    </Text>
                  </Stack>
                </Stack>
                <Divider />
                <Stack p="4">
                  <Text fontWeight="semibold">Total $</Text>

                  <Button className=" mt-2 btn btn-info">Vaciar</Button>
                </Stack>
              </DrawerBody>

               <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter> 
            </DrawerContent>
          </Drawer> */}
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
