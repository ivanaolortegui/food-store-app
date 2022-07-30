import React from "react";
import Cart from "./Cart";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  Button,
  PopoverArrow,
  PopoverCloseButton,
  Icon,
  IconButton,
  Image,
  useColorModeValue,
  useColorMode,
  Flex,
  Box,
  Menu,
  MenuButton,
  Stack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   /*  <header classNameName="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav>
    </header> */

    <>
     <Box   borderColor={useColorModeValue('gray.200', 'gray.900')} borderStyle={'solid'} bg={useColorModeValue('white', 'gray.800')}  borderBottom={1} px={4}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> <Image src="./fruit.png" alt="logo" boxSize='70px' /></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                    <Button>

                <Icon viewBox='0 0 24 24'  width="10" height="10" fill="none">
                <path fill="#6A696E" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                 </Icon>
                 </Button>
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </>
  );
};

export default Header;
