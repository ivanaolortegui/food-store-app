import React from "react";

import {
  Image,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
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

  const moneyFormat = (money) => {
    return money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
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
                      <Text my={2} fontSize="16px">
                        {product.name}
                      </Text>
                      <Text my={2} fontWeight="semibold" fontSize="14px">
                        ${moneyFormat(product.price)}
                      </Text>
                      <Box>
                        <Flex mt="2">
                          <HStack>
                            <Button h={8} onClick={() => decrease(product.id)}>
                              -
                            </Button>
                            <Button
                              as="button"
                              borderRadius="md"
                              bg="brand.pink"
                              colorScheme="brand.white"
                              px={4}
                              h={8}
                              m={0}
                              className="m-0"
                            >
                              {product.quantity} U
                            </Button>
                            <Button
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
                    py="3"
                    onClick={() => removeToCart(product.id)}
                  >
                    <DeleteIcon mx="4" boxSize={4} />
                    <Text fontSize="14px">Eliminar este producto</Text>
                  </Box>
                </Stack>
                <Divider />
              </Stack>
            ))}

            <Stack p="4">
              <Text fontWeight="semibold">Total $ {getTotal()}</Text>
              <Button mt={2} onClick={() => clearCart()}>
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
