import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  Button,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";
const PopoverCar = ({ props }) => {
  const { cart, addToCart, decrease, removeToCart, clearCart, getTotal } =
    props;
  return (
    <Popover isLazy returnFocusOnClose={false} closeOnBlur={false}>
      <PopoverTrigger>
        <Button>Carrito </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {cart.map((product) => (
            <Box key={product.id}>
              <Box className="d-flex mt-2">
                <Button onClick={() => decrease(product.id)}>-</Button>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={() => {}}
                />

                <Button onClick={() => addToCart(product.id)}>+</Button>
              </Box>
              <Button
                className=" mt-2"
                onClick={() => removeToCart(product.id)}
              >
                Eliminar
              </Button>
            </Box>
          ))}
        </PopoverBody>
        <PopoverFooter>
          <Button className=" mt-2 btn btn-info" onClick={() => clearCart()}>
            Vaciar
          </Button>
          <div>Total ${getTotal()}</div>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCar;
