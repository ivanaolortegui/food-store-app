import React from "react";

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
const CarDrawer = ({ props }) => {
  const {
    btnRef,
    isOpen,
    onClose,
    cart,
    addToCart,
    decrease,
    removeToCart,
    clearCart,
    getTotal,
  } = props;
  return (
    <Drawer
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
        {cart.length > 0 ? (
          <DrawerBody px="0">
            {cart.map((product) => (
              <Stack key={product.id}>
                <Stack direction="row" alignItems="center" pl="4">
                  <Text fontWeight="semibold">{product.name}</Text>
                </Stack>
                <Stack px="4">
                  <Flex
                    minWidth="max-content"
                    justifyContent="center"
                    alignItems="end"
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      boxSize="100px"
                    />
                    <Box ml="4">
                      <Text align="center">$ {product.price}</Text>
                      <Box>
                        <Flex mt="2">
                          <HStack>
                            <Button h={8} onClick={() => decrease(product.id)}>
                              -
                            </Button>
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
                              {product.quantity} U
                            </Box>
                            <Button
                              className="m-0"
                              h={8}
                              m={0}
                              onClick={() => addToCart(product.id)}
                            >
                              +
                            </Button>
                          </HStack>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                  <Box
                    className="d-flex"
                    py="4"
                    onClick={() => removeToCart(product.id)}
                  >
                    <DeleteIcon mx="4" /> <Text>Eliminar este producto</Text>
                  </Box>
                </Stack>
                <Divider />
              </Stack>
            ))}

            <Stack p="4">
              <Text fontWeight="semibold">Total $ {getTotal()}</Text>
              <Button className=" btn-info" onClick={() => clearCart()}>
                Vaciar
              </Button>
            </Stack>
          </DrawerBody>
        ) : (
          <DrawerBody px="0">
            <Text align="center" fontWeight="semibold">
              No hay productos en tu canasta
            </Text>
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CarDrawer;
