import React from "react";

import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

const AlertCofirmation = ({ props }) => {
  const { isOpenAlert, onCloseAlert, clearCart } = props;
  const cancelRef = React.useRef();
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onCloseAlert}
      isOpen={isOpenAlert}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Oops!</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          ¿Estás seguro de que deseas eliminar todos los productos de la
          canasta?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onCloseAlert}>
            No
          </Button>
          <Button colorScheme="red" ml={3} onClick={() => clearCart()}>
            Si
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertCofirmation;
