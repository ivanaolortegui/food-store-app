import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { TYPES } from "../actions/ShoppingAction";

import CarButton from "../components/atoms/CarButton";
import CarDrawer from "../components/molecules/CarDrawer";
import ShoppinContext from "../context/Shopping/ShoppingContext";
import { moneyFormat } from "../helpers/functions";

const Car = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, dispatch } = useContext(ShoppinContext);
  const { cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: TYPES.DECREASE_CART, payload: id });
  };
  const removeToCart = (id) => {
    dispatch({ type: TYPES.REMOVE_TO_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const getTotal = () => {
    const money = cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
    return moneyFormat(money);
  };
  return (
    <>
      <CarButton props={{ btnRef, onOpen, isOpen }} />
      <CarDrawer
        props={{
          btnRef,
          isOpen,
          onClose,
          cart,
          addToCart,
          decrease,
          removeToCart,
          clearCart,
          getTotal,
        }}
      />
    </>
  );
};

export default Car;
